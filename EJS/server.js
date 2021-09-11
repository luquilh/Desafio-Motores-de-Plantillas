const express = require('express')
const routerProductos = require('./router/routerProductos.js')



const app= express();


app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/', routerProductos);


/*----------- Inicializaciònd e servidor ---------------*/
const PORT= 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error de servidor: ${error}`));