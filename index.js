let express = require('express');
let app = express();

const port = 3000;

const sequelize = require(`./config/db`);
const Usuario = require('./models/usuario');
const Ponto = require('./models/ponto');
const { SELECT } = require('sequelize/types/query-types');
const { where } = require('sequelize');


app.use(express.json());

sequelize.sync({alter: true})
.then(() => {
    console.log("sync feito com sucesso");
})
.catch(error => {console.log("deu erro!"+ error)
});

//const pedro = Usuario.create({nome:'Pedro',email:'pedrocavalcanti.r@gmail.com',login:'Pedro',senha:'123456'});

app.get('/usuarios', async (req,res) => {
   const usuarios = await Usuario.findAll();
   res.json(usuarios);
});

app.get('/usuario/:id_usuario' , async (req, res) => {
    const id_usuario = req.params.id_usuario;
    const ususario = await Usuario.findAll({
        where: {
            id_usuario: id_usuario
        }
    });
    res.json(ususario)
});

app.post('/usuario', (req,res) => {
    const ususario = Usuario.create ({
        nome:req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        login: req.body.login 
    });
});



app.listen(port, () => {
    console.log(`servidor escutado a porta ${port}`);
});