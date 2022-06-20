const express = require("express"); //importar express
const bodyParser = require("body-parser");
const misRutas = require("./routes/rutas");
const cors = require("cors");

const app = express(); //crear al servidor
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', misRutas);
//app.use(express.static(process.cwd()+"/angularProy/dist/proy-angular-node/"));

app.listen(port, () => {
    console.log(`hola servidor ejecucion en http://localhost:${port}`);
})

   
