const imagenes=[
'tazita.jpg', 'tazita2.jpg', 'tazita3.jpg'
] 
let indiceActual=0;
function cambiarImagen(direccion){
    indiceActual+=direccion;

if (indiceActual<0){
    indice=imagenes.length -1;
}else if(indiceActual>=imagenes.length){
    indiceActual=0;
}

document.getElementById('imagen').src = imagenes[indiceActual];
document.getElementById('contador').textContent = indiceActual +1;
}
document.getElementById('total').textContent=imagenes.length
