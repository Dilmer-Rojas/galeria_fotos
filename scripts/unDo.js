function unDo() {
    // Actualizar la URL de la imagen de fondo del div con el id = "image" a la imagen original
    document.getElementById('image').style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/image.jpg')";

    // Restaurar el texto del div con el id = "image" al texto original
    document.getElementById('image').innerText = "Hover over an image below to display here.";

}
