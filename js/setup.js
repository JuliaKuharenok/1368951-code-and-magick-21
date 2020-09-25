'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LASTNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const random = function (array) {
  const randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
};

const wizards = [
  {
    name: random(WIZARD_NAMES) + ` ` + random(WIZARD_LASTNAMES),
    coatColor: random(WIZARD_COATS),
    eyesColor: random(WIZARD_EYES),
  },
  {
    name: random(WIZARD_NAMES) + ` ` + random(WIZARD_LASTNAMES),
    coatColor: random(WIZARD_COATS),
    eyesColor: random(WIZARD_EYES),
  },
  {
    name: random(WIZARD_NAMES) + ` ` + random(WIZARD_LASTNAMES),
    coatColor: random(WIZARD_COATS),
    eyesColor: random(WIZARD_EYES),
  },
  {
    name: random(WIZARD_NAMES) + ` ` + random(WIZARD_LASTNAMES),
    coatColor: random(WIZARD_COATS),
    eyesColor: random(WIZARD_EYES),
  }
];

for (let i = 0; i < WIZARD_NAMES.length; i++) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizards[i].name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizards[i].coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
