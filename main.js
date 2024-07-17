// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./public/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./public/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./public/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./public/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./public/zapato-rojo.jpg"},
]
//Modificacion de rutas por creacion de carpeta public 

const lista = document.getElementById("lista-de-productos") //Cambie getElementByName, Cambie nombre li --> lista
const input = document.querySelector("input"); // cambie $i--> input, Cambie '.input' --> "input"

//Esta funcion me crea las Tarjetas de los objetos que agregue al Array produtos 

for (let i = 0; i < productos.length; i++) {
  //Esto añade un <div class= "producto">
  let div = document.createElement("div") // cambie var --> let 
  div.classList.add("producto") // cambie nombre de variable d--> div

  //Esto añade un <p class= "titulo"> el nombre que se itera del array </p>
  let titulo = document.createElement("p")// cambie nombre de variable ti--> titulo
  titulo.classList.add("titulo")
  titulo.textContent = productos[i].nombre
  
  //Esto añade <img src=" ruta que se itera de [img]">
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  //Indican ubicacion sintaxis: uubicacion. metodo (variable que cont lo que vamos a colocar )
  div.appendChild(titulo)
  div.appendChild(imagen)
  lista.appendChild(div)
}

//Seleccionamos el boton y lo asignamos a una variable
const botonDeFiltro = document.querySelector("button");

//  Todas estas acciones se ejecutan al epicar el boton
botonDeFiltro.onclick = () =>  { // displayProductos(productos)
  //1) eliminar productos del Display
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
//2) objetener el valor que usuario escribe en el input
  const texto = input.value;
  console.log(texto);


  const filtrado = (productos = [], texto) => {
    return productos.filter(item => 
      item.tipo.includes(texto) || 
      item.color.includes(texto)
    );
  }

  const productosFiltrados = filtrado(productos, texto );
  console.log(productosFiltrados);

  for (let i = 0; i < productosFiltrados.length; i++) {
    let div = document.createElement("div")
    div.classList.add("producto")
  
    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    div.appendChild(titulo)
    div.appendChild(imagen)
  
    lista.appendChild(div)
  }
  
}

// const filtrado = () => { //(productos = [], texto no era un parametro valido
//   return productos.filter(filtracion);
// }  

// function filtracion (productos , texto  ) {
//   if(productos.tipo == texto || productos.color == texto){
//     return true;
//   }else{
//     return false;
//   }
// }


// function filtracion (productos , texto  ) {
//   if(productos.tipo.includes(texto) || productos.color.includes(texto)){
//     return productos.filter()
//   }else{

//   }

// }

// const filtrado = (productos = [], texto) => {
//   return productos.filter(item => 
//     item.tipo.includes(texto) || 
//     item.color.includes(texto)
//   );
// }
