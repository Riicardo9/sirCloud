CREATE DATABASE radio;
USE radio;
CREATE TABLE radioFrecuencia(
    id_radio INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    region VARCHAR(15),
    proveedor_ran VARCHAR(66),
    id_sitio INT(3),
    nombre_sitio VARCHAR(30),
    multicarrier VARCHAR(33),
    tipo_tt INT(3),
    estatus_tt VARCHAR(33),
    baseline_ran VARCHAR(66),
    estatus_construccion VARCHAR(15),
    rfi_estimado_const INT(3),
    estatus_ca VARCHAR(15),
    rfi_estimado_cfe INT(3)
);

DESCRIBE radioFrecuencia;

INSERT INTO  radioFrecuencia(region, proveedor_ran, id_sitio, nombre_sitio, multicarrier, tipo_tt, estatus_tt, baseline_ran, estatus_construccion, rfi_estimado_const, estatus_ca, rfi_estimado_cfe) 
VALUES ('Norte','Proveedor 1','666','Guadalajara','222BBB','1', 'Habilitado', '111AAA', 'Habilitado','1','Habilitado','3'),
('Sur','Proveedor 2','666','Ciudad de México','333CCC','1', 'Habilitado', '333CCC', 'Habilitado','1','Deshabilitado','1'),
('Este','Proveedor 3','333','Monterrey','111AAA','3', 'Deshabilitado', '111AAA', 'Habilitado','1','Deshabilitado','2');

SELECT * FROM radioFrecuencia; 
 


