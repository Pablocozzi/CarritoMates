const productContent = document.getElementById("productContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");




// get item
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// creamos los productos
productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
  `;

  productContent.append(content);

// creamos boton comprar de elementos 
  let comprar = document.createElement("button");
  comprar.className = "comprar";
  comprar.innerText = "comprar";

  content.append(comprar);

//iniciamos evento de comprar
  comprar.addEventListener("click", () => {
const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else { 
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      }); 
      carritoCounter();
      saveLocal();
    }
  });
});

//set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
