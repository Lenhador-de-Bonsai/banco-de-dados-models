const express = require('express');
const cors = require('cors');

const models = require('./models');
const { DATE } = require('sequelize');

const app = express();
app.use(cors());

app.use(express.json());

let cliente = models.Cliente;
let itempedido = models.Itempedido;
let pedidos = models.Pedidos;
let servico = models.Servicos;

app.get('/', function(req, res){
    res.send('olá, mundo!');
});

app.post('/servicos', async(req,res) =>{
    await servico.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi criado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    })
});

let port = process.env.PORT || 3001;

app.listen(port,(req, res) => {
    console.log('Servidor ativo: http://localhost:3001')
})