const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Munros = function () {
  this.munros = [];
};

Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get((data) => {
    // this.modelMunros(data);
    PubSub.publish('Munros:data-ready', data);
    // gets name
    // console.log(this.munros);
  })
};

// Munros.prototype.modelMunros = function (data) {
//   this.munros = data.map((munro) => {
//     return {
//       name: munro.name,
//       height: munro.height,
//       meaning: munro.meaning
//     };
//   })
// };


module.exports = Munros;
