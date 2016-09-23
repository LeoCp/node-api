import express from "express";
const app = express();

app.config = config;
app.datasource = datasource(app);
const Books = app.datasource.models.Books;

app.get('/books', (req,res)=>{
  Books.findAll({})
    .then(result => {
      res.json(resul)
    })
    .catch(err => {
      res.status(412);
    })
});
export default app;
