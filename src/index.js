const express = require('express');
const app = express();

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: 'APP_USR-4993256941478827-122822-1a2430fe21a8d1141f3944df9b7c326d-1047833761'
});

//Routes
app.get('/checkout',(req, res)=>{
// Crea un objeto de preferencia orden de compra
let preference = {
    items: [
      {
        title: 'Mi producto',
        unit_price: 100,
        quantity: 1,
      }
    ]
  };
  
  mercadopago.preferences.create(preference)
  .then(function(response){
    //aca va la accion responder al cliente
  }).catch(function(error){
    console.log(error);
  });
})


// server
app.listen(3000, ()=>{
    console.log('listening on port 3000');
})