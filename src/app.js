const Munros = require('./models/munros.js');
const MunrosListView = require('./views/munros_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const munrosListContainer = document.querySelector('#munros');
  const munrosListView = new MunrosListView(munrosListContainer);
  munrosListView.bindEvents();

  const munros = new Munros();
  munros.getData();
})
