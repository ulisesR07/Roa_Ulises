
////////////////////////////////
let carrito=[];
const contenedorProductos = document.getElementById("tarjetas")

//operador ternario
//carrito? console.log("existe carrito"):localStorage.setItem("productos",JSON.stringify(stockProductos));
localStorage.setItem("productos",JSON.stringify(stockProductos));

//escribo el localStorage con los productos de productos.js
console.log(localStorage.getItem("productos"))

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
const agregarAlcarrito = (prodid) => {
  const item = ListadoDeMisProductosStock.find ((prod)=>prod.id===prodid)
  carrito.push(item);
  console.log("este es el contenido del carrito")
  console.log(carrito)
}

mostrarProductos (ListadoDeMisProductosStock)
//no me sale el speed operator
const arr1 = [{categoria:"samsung"}]
  


const arr2 =[...arr1,...carrito]
console.log("este es el contenido de spread")
console.log(arr2)



