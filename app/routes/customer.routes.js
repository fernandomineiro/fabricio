module.exports = function(app) {

    const customers = require('../controllers/customer.controller.js');

    // Create a new Customer
    app.get('/verifica', customers.verifica);

  
}