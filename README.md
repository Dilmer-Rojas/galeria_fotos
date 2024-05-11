# Introducción a su entorno de pruebas de laboratorio

**Nota importante: este entorno Lab Sandbox no tiene acceso abierto a Internet.
Si desea utilizar algún recurso externo para ayudar con la funcionalidad y el diseño generales de la página
(por ejemplo: imágenes, hojas de estilo, archivos JavaScript). Cargue estos archivos directamente en Lab Sandbox.
 entorno arrastrándolos y soltándolos desde su escritorio a su laboratorio de Visual Studio Code.
 Luego puede utilizar enlaces relativos desde el contenido de su archivo html para acceder a estos recursos para la creación de su sitio.**

## ¿Cómo puedo ver mis archivos HTML?

###Ver sus archivos de laboratorio con el servidor en vivo

1) Haga clic en el ícono Ir en vivo en la parte inferior derecha del entorno de su laboratorio junto al ícono de notificación (campana).
2) Debería ver el mensaje de inicio del servidor: "El servidor se inició en el puerto: 5500".
3) Haga clic en el icono de vista previa del navegador en el menú de la izquierda del entorno de laboratorio.
4) Se debería abrir una ventana de vista previa del navegador y en la barra de direcciones escriba la URL: localhost:5500/
5) Deberías ver todos tus archivos de laboratorio en la ventana de vista previa del navegador.

>**NOTA: Una vez que haya iniciado el ícono "Ir en vivo" por primera vez, verá este texto "Ir en vivo"
 cambie para indicar su número de puerto que está activo. Si desea detener su página web y reiniciarla nuevamente,
 puede hacer clic en el número de puerto, lo que cerrará su servidor. Puedes reiniciar nuevamente en cualquier momento seleccionando "Ir en vivo"**


###Ver sus archivos de laboratorio con la vista previa del navegador

1) Haga clic derecho en el archivo HTML que desea ver y copie la RUTA RELATIVA.
2) Haga clic en el icono de vista previa del navegador en el menú de la izquierda del entorno de laboratorio.
3) Se debería abrir una ventana de vista previa del navegador y en la barra de direcciones escriba la URL: localhost:8000/lab/<YOUR_RELATIVE_PATH>
4) Se mostrará el contenido de su archivo.

###Ver sus archivos en la pestaña del navegador para obtener acceso completo a las herramientas de desarrollo del navegador:

 Podrás obtener una vista previa de tu contenido web utilizando la siguiente ruta:
  https://<your lab id>.labs.coursera.org/lab/<YOUR_RELATIVE_FILE_PATH (en una nueva pestaña del navegador para acceso completo a las herramientas de desarrollo del navegador).
 
 Ingrese lo siguiente "https://<your lab id>.labs.coursera.org/lab/<YOUR_RELATIVE_FILE_PATH" en la barra de herramientas de su navegador URL,
 reemplazando <su identificación de laboratorio> con el valor que ve en el ícono de "Ayuda" del iframe de laboratorio superior.

### Agregar CSS a su archivo
El código también se puede colocar en un archivo JavaScript y CSS externo. Si haces esto, sólo asegúrate de haber
vinculó los archivos correctamente; de ​​lo contrario, es posible que tenga algunos problemas al intentar descubrir por qué su código no funciona.

- El código JavaScript puede aparecer en el encabezado o en el cuerpo del código, o muy a menudo en ambos.
 
- Afortunadamente, la consola puede avisarte si no puede encontrar ese archivo y te lleva por el camino correcto para corregir tu código.

Para vincular su archivo JavaScript y CSS a su archivo HTML, puede pasar el nombre del archivo JavaScript dentro de la etiqueta ```<script> </script>```, como se muestra a continuación:
```
<script src="./FILENAME.js"></script>
```
{:bloque de código}

De manera similar, para vincular su archivo CSS:
```
<enlace rel="hoja de estilo" href="./NOMBRE DE ARCHIVO.css">
```
{:bloque de código}