const PubSub = require('../helpers/pub_sub.js');

const MunroView = function (container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};

MunroView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroHeading()
  munroContainer.appendChild(name);

  const munroInfo = this.createMunroInfo();
  munroContainer.appendChild(munroInfo);

  this.munrosContainer.appendChild(munroContainer);
};


MunroView.prototype.createMunroHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('munro-name');
  name.textContent = this.munro.name;
  return name;
};

MunroView.prototype.createMunroInfo = function () {
  const munroInfo = document.createElement('ul');
  munroInfo.classList.add('munro-info');
  this.populateList(munroInfo);
  return munroInfo;
};

MunroView.prototype.populateList = function (list) {
    const munroHeight = document.createElement('li');
    munroHeight.textContent = `Height: ${this.munro.height}`;
    list.appendChild(munroHeight);
    const munroMeaning = document.createElement('li');
    munroMeaning.textContent = `Meaning: ${this.munro.meaning}`;
    list.appendChild(munroMeaning);
  };

module.exports = MunroView;
