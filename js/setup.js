'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LASTNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

// const userDialog = document.querySelector(`.setup`);
// userDialog.classList.remove(`hidden`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const random = function (array) {
  const randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
};

const wizards = [];

for (let i = 0; i < 4; i++) {
  const wizardsItem = {
    name: random(WIZARD_NAMES) + ` ` + random(WIZARD_LASTNAMES),
    coatColor: random(WIZARD_COATS),
    eyesColor: random(WIZARD_EYES),
  };
  wizards.push(wizardsItem);
}

for (let i = 0; i < wizards.length; i++) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizards[i].name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizards[i].coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}

const setupOpen = document.querySelector(`.setup-open`);
const setup = document.querySelector(`.setup`);
const setupClose = document.querySelector(`.setup-close`);

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

const userNameInput = document.querySelector(`.setup-user-name`);

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

userNameInput.addEventListener(`input`, function () {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`);
  } else {
    userNameInput.setCustomValidity(``);
  }

  userNameInput.reportValidity();
});

const coatColor = document.querySelector(`.setup-fireball-wrap`);

coatColor.addEventListener(`click`, function () {
  coatColor.style.background = random(FIREBALL_COLORS);
  document.getElementsByName(`fireball-color`).value = `rgb (0, 0, 0)`;
});

const wizardCoat = document.querySelector(`.wizard-coat`);

wizardCoat.addEventListener(`click`, function () {
  wizardCoat.style.fill = random(WIZARD_COATS);
  document.getElementsByName(`coat-color`).value = `rgb (0, 0, 0)`;
});

const wizardEyes = document.querySelector(`.wizard-eyes`);

wizardEyes.addEventListener(`click`, function () {
  wizardEyes.style.fill = random(WIZARD_EYES);
  document.getElementsByName(`coat-color`).value = `blue`;
});


