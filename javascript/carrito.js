// Variables
const carrito = documents.querySelector("#carrito");
const listacarrito = document.querySelector("#lista-carrito tbody");
const vaciarcarritobtn = document.querySelector("#vaciar-carrito");
const listaproductos = document.querySelector("#lista-productos");
let articuloCarrito = []

cargarEventListeners();
function cargarEventListeners() {
    listaproductos.addEventListener("click", agregar_curso);

    //Eliminar curso
    carrito.addEventListener("click" , elminarproducto) ; 

 // Vaciar el carrito
    vaciarcarritobtn.addEventListener('click' , () => {

        articuloCarrito = []; // Reseteamos el arreglo

        limpiarHTML(); 
    });
}

//Funciones
function agregar_curso(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        productoSeleccionado = e.target.parentElemnt.parentElemnt
        leerDatosProductos(productoSeleccionado);
    }
}

function leerDatosProductos(productos) {
    //Crear un objeto
    infoPorducto = {
        imagen : productos.querySelector('img').src,
        precio : productos.querySelector('.precio').textContent,
        cantidad : 1
    }

    const existe = articuloCarrito.some(productos => productos.id === infoPorducto.id);
    
    if(existe) {
        // Actualizamos cantidad 
        const producto = articuloCarrito.map(productos => {
            if(productos.id === infoPorducto.id){
                productos.cantidad++;
                return productos;
            } else{
                return productos
            }

            
        });
        articuloCarrito = [...producto]
    } else{
        articuloCarrito = [...articuloCarrito, infoPorducto];
    }


    console.log(articuloCarrito);

    carritoHTML();

}

function carritoHTML(){

    limpiarHTML();

    articuloCarrito.forEach( productos =>{
        const {imagen , titulo , precio , cantidad} = productos;

        const row = document.createElement('tr');
        
        row.innerHTML =  `
              <td>
                   <img src="${imagen}" width:100px ></img>
              </td>

              <td>
                   ${titulo}
              </td>
              <td>
                   ${precio}
              </td>
              <td>
                   ${cantidad}
              </td>
              <td>
                   <a href="#" class="borrar-producto"> X </a>
              </td>
        `;

        listacarrito.appendChild(row); 
    });

}

function limpiarHTML() {

    while(listacarrito.firstChild){
        listacarrito.removeChild();
    }
}