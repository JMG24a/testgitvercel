
// dependencies
const express = require('express');
//constants
const app = express();

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

// app.listen(3001, ()=>{
//   console.log("vercel")
// })

module.exports = app;
