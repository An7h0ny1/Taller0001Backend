import  express from "express";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = 3000;

const leerDatos = () =>{
  try{
    const data = fs.readFileSync("./db.json")
    return JSON.parse(data);
  }catch(error){
    console.log(`Error al leer el archivo: ${error}`);
  }
}

const escribirDatos = (data) => {
  try{
    fs.writeFileSync("./db.json", JSON.stringify(data));
  }catch(error){
    console.log(`Error al escribir en el archivo: ${error}`);
  }
}

//configura la ruta
app.get("/", (req, res) => {
  res.send("Bienvenido a mi proyecto de libros");
});

//con GET
app.get("/libros", (req, res) => {
  const data = leerDatos();
  res.json(data.libros);
});

//GET con id
app.get("/libros/:id", (req, res) => {
  const data = leerDatos();
  const id = parseInt(req.params.id);//en req.params.id esta llegando el id que estoy mandando
  const libro = data.libros.find((libro) => libro.id === id)
  res.json(libro);
});

//POST

app.post("/libros", (req, res) =>{
  const data = leerDatos();
  const body = req.body;

  const nuevoLibro = {
    id: data.libros.length + 1,
    ...body //esto es para agregar los demas campos del json que me manda el usuario

  };
  data.libros.push(nuevoLibro);
  escribirDatos(data);
  res.json(nuevoLibro);
});


//PUT

app.put("/libros/:id", (req,res) => {
  const data = leerDatos();
  const body = req.body;
  const id = parseInt(req.params.id);
  const indiceLibro = data.libros.findIndex((libro) => libro.id === id);
  data.libros[indiceLibro] = {
    ...data.libros[indiceLibro],
    ...body
  };
  escribirDatos(data);
  res.json({ mensaje: "Libro Actualizado con éxito" });
});

//DELETE
app.delete("/libros/:id", (req,res) =>{
  const data = leerDatos();
  const id = parseInt(req.params.id);
  const indiceLibro = data.libros.findIndex((libro) => libro.id === id);
  data.libros.splice(indiceLibro, 1);
  escribirDatos(data);
  res.json({mensaje:"Libro eliminado con exito"})
});


//escuchar la app por port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
