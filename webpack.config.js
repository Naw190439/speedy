<<<<<<< Updated upstream
/* const path = require('path')

module.exports = {
  mode: 'development',
  entry: './assets/js/Customer.js',
  output: {
    path: path.resolve(__dirname, 'webpackJS'),
    filename: 'custmr.js'
  },
  watch: true
} */



/* const path = require('path')

module.exports = {
  mode: 'development',
  entry: './assets/js/regCustomer.js',
  output: {
    path: path.resolve(__dirname, 'webpackJS'),
    filename: 'reg.js'
  },
  watch: true
} */


const path = require('path')

module.exports = {
  mode: 'development',
  entry: './assets/js/adminReg.js',
  output: {
    path: path.resolve(__dirname, 'webpackJS'),
    filename: 'admnReg.js'
  },
  watch: true
}
=======
const path = require('path');

const config = [
  {
    mode: 'development',
    entry: './assets/js/Customer.js',
    output: {
      path: path.resolve(__dirname, 'webpackJS'),
      filename: 'custmr.js',
    },
    watch: true,
  },
  {
    mode: 'development',
    entry: './assets/js/regCustomer.js',
    output: {
      path: path.resolve(__dirname, 'webpackJS'),
      filename: 'reg.js',
    },
    watch: true,
  },
  {
    mode: 'development',
    entry: './assets/js/adminReg.js',
    output: {
      path: path.resolve(__dirname, 'webpackJS'),
      filename: 'admnReg.js',
    },
    watch: true,
  },
  {
    mode: 'development',
    entry: './assets/js/Customertbl.js',
    output: {
      path: path.resolve(__dirname, 'webpackJS'),
      filename: 'custTbl.js',
    },
    watch: true,
  },
  {
    mode: 'development',
    entry: './assets/js/addOrder.js',
    output: {
      path: path.resolve(__dirname, 'webpackJS'),
      filename: 'addOrders.js',
    },
    watch: true,
  },
];

module.exports = config;
>>>>>>> Stashed changes
