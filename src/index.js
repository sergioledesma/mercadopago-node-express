const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

//middelware
app.use(bodyParser.urlencoded({ extended: false }))

// Agrega credenciales
mercadopago.configure({
  access_token: 'TEST-1044698736498330-122720-081f4e1650450a5ea872a75070953b9c-210694965'
});

//Routes
app.get('/checkout',(req, res)=>{
  // Crea un objeto de preferencia orden de compra
  let preference = {
    items: [
      {
        title: 'Mi producto',
        unit_price: 100,
        quantity: 1
      }
    ]
  };
  mercadopago.preferences.create(preference)
  .then(response=>{
console.log(response)
  })
  .catch((error)=>{
    console.log(error)
  })
  res.send('checkout')
  
//   .then(function(response){
//     //aca va la accion responder al cliente
//     console.log(response.body);
//     res.send('checkout');
//   }).catch(function(error){
//     console.log(error);
//   });
})


// server
app.listen(3000, ()=>{
    console.log('listening on port 3000');
})