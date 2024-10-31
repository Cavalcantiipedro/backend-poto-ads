let express = require('express');
let app = express();

const port = 3000;


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