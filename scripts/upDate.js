function upDate(previewPic) {
    console.log("Update Activado");
    console.log("Alt de la imagen:", previewPic.alt);
    console.log("Fuente de la imagen:", previewPic.src);
    
    // Cambiar la URL de la imagen de fondo del div con el id = "image" a la imagen de vista previa
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    // Cambiar el texto del div con el id = "image" al texto alternativo de la imagen de vista previa
    document.getElementById('image').innerText = previewPic.alt;
}