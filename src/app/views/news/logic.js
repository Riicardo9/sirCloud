const buscar = () => {
    const busqueda = document.getElementById('idBuscar');
    window.location.href = `/productos.html?id=?${busqueda}`
  }

const url = 'http://localhost:3000/busqueda';
const $contenedorPadre = document.getElementById('tabla');

fetch(url).then((resp) =>
	resp.json().then((datos) => {
		const arrProductos = datos;
		arrProductos.forEach((producto) => {
			const infoProducto = {
				id: producto.id,
				nombre: producto.nombre,
				descripcion: producto.descripcion,
				precio: producto.precio,
				url: producto.url,
			};

			const template = `
                        <div class="col mb-5 grow">
                            <div class="card h-100 ml-auto mr-auto" >
                                <img id="imgCard" src="${infoProducto.url}" class="card-img-top" alt="${infoProducto.descripcion}" />
                                <div class="card-body color-card">
                                    <p class="card-text id" style="display:none">${producto.id}</p>
                                    <p class="card-text src" style="display:none">${producto.url}</p>
                                    <h5 class="card-title titulo">${infoProducto.nombre}</h5>
                                    <p class="card-text">${infoProducto.descripcion}</p>
                                    <p class="card-text precio">${infoProducto.precio}</p>
                                    <button class="agregar">Agregar al carrito</button></div>
                                </div>  
                            </div>
                        </div>
                            `;
			$contenedorPadre.innerHTML += template;
		});
	})
);