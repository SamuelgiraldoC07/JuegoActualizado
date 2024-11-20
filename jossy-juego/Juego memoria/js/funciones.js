//variables globales
const d = document
//imagenes del juego 
let imgN1= [
    {nombre:"imagen", url:"img/image.png"},
    {nombre:"activo", url:"img/activo.jpg"},
    {nombre:"bitcoin", url:"img/bitcoin.jpg"},
    {nombre:"bolsa", url:"img/bolsa.jpg"},
    {nombre:"consechafinanzas", url:"img/cosechafinanzas.jpg"},
    {nombre:"futuros", url:"img/futuros.jpg"},
    {nombre:"imagen", url:"img/image.png"},
    {nombre:"activo", url:"img/activo.jpg"},
    {nombre:"bitcoin", url:"img/bitcoin.jpg"},
    {nombre:"bolsa", url:"img/bolsa.jpg"},
    {nombre:"consechafinanzas", url:"img/cosechafinanzas.jpg"},
    {nombre:"futuros", url:"img/futuros.jpg"},
  
];
//seleccionar el tablero del html
let tablero = d.querySelector(".tablero");
let nombreImg = [];
let idImg = [];

//funcion para agregar las imagenes al tablero
function agregarImagenes(){
    //recorrer con un foreach las imagenes del array
    imgN1.forEach((img, i )=>{
        let div = d.createElement("div");
        div.className = "col-3 my-2";
        let imagen = d.createElement("img");
        imagen.src = "./img/futuros.jpg";
        imagen.className = "img-fluid altura";
        imagen.id = i ;
        imagen.addEventListener("click", mostrarImagenes)
        div.appendChild(imagen);
        tablero.appendChild(div);
    });
}

function mostrarImagenes(){
   let imgID =  this.getAttribute("id");
    // alert("imagen #"+imgID);
    this.src = imgN1[imgID].url;
    //Guardar los Nombres de Imagenes
    nombreImg.push(imgN1[imgID].nombre);
    //guardar los id de imagenes
    idImg.push(imgID);

    //activar la funcion de comparar imagenes 
    if(nombreImg.length == 2){
        //simular o esperar un tiempo

        setTimeout(compararImagenes,100);

    }
}

//funcion para comparar imagenes
function compararImagenes() {

    let allImg = d.querySelectorAll(".tablero .col-3 img");
    //verificar si las imagenes son iguales 
    if(nombreImg[0] == nombreImg[1]){
        alert("Muy bien descubriste la imagen 😊");
    }else{
        alert("Sigue intentando 😢");
        allImg[idImg[0]].src = "./img/futuros.jpg";
        allImg[idImg[1]].src = "./img/futuros.jpg";
    }
    //reiniciar las variables
    nombreImg = [];
    idImg = [];
}
agregarImagenes()