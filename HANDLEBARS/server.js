const express = require('express')
const handlebars = require('express-handlebars')
const routerProductos = require('./router/routerProductos.js')



const app= express();

app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        defaultLayout: "index.hbs",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials"
    })
  );

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'hbs');
app.use('/', routerProductos);


/*----------- Inicializaciònd e servidor ---------------*/
const PORT= 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error de servidor: ${error}`));