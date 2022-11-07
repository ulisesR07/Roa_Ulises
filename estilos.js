
////////////////////////////////
let carrito=[];
const contenedorProductos = document.getElementById("tarjetas");
const contenedorCarrito = document.getElementById("carrito-contenedor");

//const contenedorProductos = document.getElementById("contenedor-productos");
//const contenedorCarrito = document.getElementById("carrito-contenedor");
const botonVaciar = document.getElementById("vaciar-carrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotall = document.getElementById("precioTotal");


//operador ternario
//carrito? console.log("existe carrito"):localStorage.setItem("productos",JSON.stringify(stockProductos));
localStorage.setItem("productos",JSON.stringify(stockProductos));

//escribo el localStorage con los productos de productos.js
//console.log(localStorage.getItem("productos"))

//leo el local localStorage del navegador que contiene los productos 
let ListadoDeMisProductosStock = JSON.parse(localStorage.getItem("productos"))

const mostrarProductos = (array) => {

 
  contenedorProductos.innerHTML = "";


  array.forEach((producto) => {
      const div = document.createElement('div')
      div.classList.add('producto')
      div.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src=${producto.img} alt="">
        <h3>${producto.nombre}<h3>
        <p>${producto.desc}</p>
        <p class="precioProducto">Precio: $${producto.precio}</p>
        <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        </div>
        </div>
        `
      contenedorProductos.appendChild(div)
      const boton = document.getElementById(`agregar${producto.id}`)
      //eventos
      boton.addEventListener('click', () => {
          agregarAlcarrito(producto.id)
      })
  })


}

const actualizarCarrito = () => {
  //localStorage.clear();
  contenedorCarrito.innerHTML = "";
  /*esto duplicara la vista porque recorre el array desde cero en cada llamado,
  para que no pase eso, previamento limpiamos la vista del innerhtml*/

  carrito.forEach((prod) => {


      const div = document.createElement('div')
      div.className = 'productoEnCarrito'

      div.innerHTML = `
<p>${prod.nombre}</p>
<p>Precio: $${prod.precio}</p>
<button onclick="eliminarDelcarrito(${prod.id})"class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
`
      contenedorCarrito.appendChild(div);

  })

  localStorage.setItem("carritoComprass", JSON.stringify(carrito));

  let data = localStorage.getItem("carritoComprass");
  console.log(JSON.parse(data));

  /*cada vez que actualizo el DOM me fijo el tamaño total del array carritoo de esa manera se cuantos
  productos tengo seleccionados en pantalla */
  contadorCarrito.innerText = carrito.length

  //sumo el precio de todo el array
  precioTotall.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}


const agregarAlcarrito = (prodid) => {
  const item = ListadoDeMisProductosStock.find ((prod)=>prod.id===prodid)
  carrito.push(item);
  //console.log("este es el contenido del carrito")
  //console.log(carrito)

  actualizarCarrito ()
}

/****************************************** */
//eliminar fue agregado en el DOM de actualizar carrito en el evento onclic, de un boton papelera creado usando fontawesome, una pagina de iconos online <i class="fas/
const eliminarDelcarrito = (prodid) => {

    /*con find busco el elemento dentro del array */
    const item = carrito.find((prod) => prod.id === prodid)
    /*busco el indice que tiene en el array el elemento encontrado */
    const indice = carrito.indexOf(item)

    /*sobre el indice encontrado borro de cantidad de elementos 1 */
    carrito.splice(indice, 1);

    //actualizar vuelve a recorrer el array carrito y lo dibuja en el DOM/
    actualizarCarrito();
    console.log(carrito)

}





/*FILTROS **/

const filtrocategoria = document.getElementById("filtroCategoria")

const filtrarProductos = () => {
    const value = filtrocategoria.value
    if (value === "all") {

        //ListadoDeMisProductosStock
        mostrarProductos(ListadoDeMisProductosStock)
        //mostrarProductos(stockProductos)
    } else {
        //ListadoDeMisProductosStock
        const filtrado = ListadoDeMisProductosStock.filter((prod) => prod.tipo === value)

        //const filtrado=stockProductos.filter((prod)=>prod.tipo===value)
        console.log(filtrado)
        mostrarProductos(filtrado)
    }
}

/*cada vez que detecta el evento change en el select html llamado filtroCategoria, llamara a la funcion filtrarProducto */
filtrocategoria.addEventListener("change", () => {
    filtrarProductos();
    //console.log(filtrocategoria.value);
})





/****************************************** */

botonVaciar.addEventListener('click', () => {
  //carritoo=[]; --si a carrito lo asigno como let, para vaciarlo seria de esta manera
  carrito.length = 0;/*de esta manera vacio el carrito */


  //actualizarCarrito recorre el array carritoo y lo muestra en el DOM, como esta vacio no muestra nada/
  actualizarCarrito();
})

mostrarProductos (ListadoDeMisProductosStock)
//no me sale el speed operator
const arr1 = [{categoria:"samsung"}]
  


const arr2 =[...arr1,...carrito]
//console.log("este es el contenido de spread")
//console.log(arr2)




