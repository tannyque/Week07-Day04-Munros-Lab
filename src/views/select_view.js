const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (selectElement) {
  this.element = selectElement;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-ready', (event) => {
    this.populate(event.detail)
  });
  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  })
};

SelectView.prototype.populate = function (munros) {
  munros.forEach((munro, index) => {
    const munroRegion = document.createElement('option');
    munroRegion.textContent = munro.region;
    munroRegion.value = index;
    this.element.appendChild(munroRegion)
  })
};

module.exports = SelectView;
