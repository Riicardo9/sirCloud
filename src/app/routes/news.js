const dbConection = require ('../../config/dbConection.js')

module.exports = app => {

    const conection = dbConection();

    app.get('/', (req, res) =>{
        conection.query('SELECT * FROM radioFrecuencia', (err, result) => {
            console.log(result)
            res.render('news/news', {
                radio : result
            });
        });
    });

    app.get('/busqueda', (req,resp) => {
        const {idBuscar} = req.body
        console.log(idBuscar)
        conection.query(`SELECT * FROM radioFrecuencia WHERE id_radio = 2`, (err, result) => {
            console.log(result)
            resp.render('news/news', {
                radio : result
            });
        });
    })

    app.post('/news', (req, res) => {
        const{region,proveedor_ran,id_sitio,nombre_sitio,multicarrier, tipo_tt,estatus_tt,baseline_ran, estatus_construccion,rfi_estimado_const,estatus_ca,rfi_estimado_cfe} = req.body;
        conection.query('INSERT INTO radioFrecuencia SET?',{
            region, 
            proveedor_ran, 
            id_sitio, 
            nombre_sitio, 
            multicarrier, 
            tipo_tt, 
            estatus_tt, 
            baseline_ran, 
            estatus_construccion, 
            rfi_estimado_const, 
            estatus_ca, 
            rfi_estimado_cfe

    },(err, result) => {
        res.redirect('/');
        })
    })
}