const Munros = require('./models/munros.js');
const MunrosListView = require('./views/munros_list_view.js');
const MunroView = require('./views/munro_view.js');
const SelectView = require('./views/select_view');

document.addEventListener('DOMContentLoaded', () => {
  const munrosListContainer = document.querySelector('#munros');
  const munrosListView = new MunrosListView(munrosListContainer);
  munrosListView.bindEvents();

  const munros = new Munros();
  munros.getData();
})
