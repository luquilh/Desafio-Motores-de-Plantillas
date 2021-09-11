const express = require('express');
const {Router}= express;
const routerProductos = new Router();

const Contenedor = require('../contenedores/Contenedor.js')
const productosCont = new Contenedor('./productos.txt');



routerProductos.use(express.json());
routerProductos.use(express.urlencoded({ extended: true }))


routerProductos.get('/', (req, res) => {
    res.render('inicio_form');
    
})



/*
routerProductos.get('/:id', (req, res) => {
    
    productos.getById(req.params.id)
    .then( prod => {
        if(prod){
            res.json(prod);
        } else {
            res.json({ error : 'producto no encontrado'});
        }
            
    })
})
*/

routerProductos.post('/productos', (req, res) => {
    const prod = req.body;
    console.log(prod)
    productosCont.save(prod)
        .then(res.redirect('/'));
        })



routerProductos.get('/productos', (req,res) => {
    productosCont.getAll()
        .then( productos => {
            
            res.render('inicio_hist', {productos})
        });
})

/*
routerProductos.put('/:id', (req, res) => {
    const id = req.params.id;
    const nuevo = req.body;
    productos.changeById(id, nuevo)
        .then(anterior => {
            if(anterior){
            res.json({nuevo, anterior});
            } else {
            res.send(`No existe producto con id: ${id}`);
            }
        })

})

routerProductos.delete('/:id', (req, res) => {
    const id = req.params.id;
    productos.deleteById(id)
        .then(() => { res.send(`Elemento con id ${id} borrado`)});

})

*/

module.exports = routerProductos;