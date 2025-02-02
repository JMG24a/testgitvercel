
// dependencies
const express = require('express');
const cors = require('cors');
// my dependencies
const { boomErrorHandler, errorHandler, ormErrorHandler } = require('./middleware/error.handler');
//constants
const app = express();

const optionsCors = {
  origin: '*', // Permite cualquier origen
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};

app.get('/',
  async(req,res,next)=>{
    try {
      res.json({
        hello: "hi",
      });
    } catch (error) {
      next(error);
    }
});

app.use(express.json());
app.use(cors(optionsCors));
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);

// app.listen(3001, ()=>{
//   console.log("vercel")
// })

module.exports = app;
