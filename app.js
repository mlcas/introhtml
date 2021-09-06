let express = require("express");

let app = express();

const path = require("path")

const publicPath = path.resolve(__dirname,"./public");// aca ya tengo la ruta public definida que la voy a usar para acceder a los recursos estaticos dentro de public
app.use(express.static(publicPath))

app.listen(3000, () => {
    console.log("Servidor Corriendo en el puerto 3000")
});

app.get("/",(req,res)=>{
   res.sendFile(path.resolve(__dirname, "./view/home.html"));

})

    

