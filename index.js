let express = require('express');
let app = express();

const port = 3000;

const sequelize = require(`./config/db`);
const Usuario = require('./models/usuario');
const Ponto = require('./models/ponto');

sequelize.sync({alter: true})
.then(() => {
    console.log("sync feito com sucesso");
})
.catch(error => {console.log("deu erro!"+ error)
});

const pedro = Usuario.create({nome:'Pedro',email:'pedrocavalcanti.r@gmail.com',login:'Pedro',senha:'123456'});

app.get("/user/:id1-:id2", (req,res) => {
    console.log(req.params);
});

app.post("/user/:id1-:id2", (req,res) => {
    res.send(req.params);
});

app.get("/teste", (req, res) => {
    res.send("Resposta da rota /teste");
});

app.post("/rotapost", (req,res) => {
    res.send("Retorno da rota usando o método post");
});



app.listen(port, () => {
    console.log(`servidor escutado a porta ${port}`);
});