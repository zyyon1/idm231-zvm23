/**
 * @description
 * Given a month and day, determine the corresponding Zodiac sign.
 * @param {number} month - month of the year (1-12)
 * @param {number} day - day of the month (1-31)
 * @returns {string} the corresponding Zodiac sign
 */
function getZodiac(month, day) {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return 'Capricorn';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return 'Sagittarius';
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    return 'Scorpio';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return 'Libra';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 'Virgo';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 'Leo';
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return 'Cancer';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return 'Gemini';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return 'Taurus';
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return 'Aries';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 'Pisces';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return 'Aquarius';
  } else return null;
}

const zodiacDates = {
  Aries: 'March 21 - April 19',
  Taurus: 'April 20 - May 20',
  Gemini: 'May 21 - June 20',
  Cancer: 'June 21 - July 22',
  Leo: 'July 23 - August 22',
  Virgo: 'August 23 - September 22',
  Libra: 'September 23 - October 22',
  Scorpio: 'October 23 - November 21',
  Sagittarius: 'November 22 - December 21',
  Capricorn: 'December 22 - January 19',
  Aquarius: 'January 20 - February 18',
  Pisces: 'February 19 - March 20'
};

const pokemonDescriptions = {
  Aries: 'Aries is associated with the Poké Ball.',
  Taurus: 'Taurus is associated with the Great Ball.',
  Gemini: 'Gemini is associated with the Ultra Ball.',
  Cancer: 'Cancer is associated with the Master Ball.',
  Leo: 'Leo is associated with the Premier Ball.',
  Virgo: 'Virgo is associated with the Luxury Ball.',
  Libra: 'Libra is associated with the Cherish Ball.',
  Scorpio: 'Scorpio is associated with the Dusk Ball.',
  Sagittarius: 'Sagittarius is associated with the Heavy Ball.',
  Capricorn: 'Capricorn is associated with the Love Ball.',
  Aquarius: 'Aquarius is associated with the Friend Ball.',
  Pisces: 'Pisces is associated with the Dive Ball.'
};

const signs = [
  { title: 'Poké Ball', zodiac: 'Aries', image: 'images/pokeball.png', sound: 'sounds/ditto_cry.mp3' },
  { title: 'Great Ball', zodiac: 'Taurus', image: 'images/greatball.png', sound: 'sounds/bouffalant_cry.mp3' },
  { title: 'Ultra Ball', zodiac: 'Gemini', image: 'images/ultraball.png', sound: 'sounds/meloetta_cry.mp3' },
  { title: 'Master Ball', zodiac: 'Cancer', image: 'images/masterball.png', sound: 'sounds/krabby_cry.mp3' },
  { title: 'Premier Ball', zodiac: 'Leo', image: 'images/premierball.png', sound: 'sounds/charizard_cry.mp3' },
  { title: 'Luxury Ball', zodiac: 'Virgo', image: 'images/luxuryball.png', sound: 'sounds/squirtle_cry.mp3' },
  { title: 'Cherish Ball', zodiac: 'Libra', image: 'images/cherishball.png', sound: 'sounds/chansey_cry.mp3' },
  { title: 'Dusk Ball', zodiac: 'Scorpio', image: 'images/duskball.png', sound: 'sounds/diglett_cry.mp3' },
  { title: 'Heavy Ball', zodiac: 'Sagittarius', image: 'images/heavyball.png', sound: 'sounds/victreebel_cry.mp3' },
  { title: 'Love Ball', zodiac: 'Capricorn', image: 'images/loveball.png', sound: 'sounds/pikachu_cry.mp3' },
  { title: 'Friend Ball', zodiac: 'Aquarius', image: 'images/friendball.png', sound: 'sounds/chatot_cry.mp3' },
  { title: 'Dive Ball', zodiac: 'Pisces', image: 'images/diveball.png', sound: 'sounds/primarina_cry.mp3' }
];

const pokemonImages = {
  Aries: 'images/charizard.png',
  Taurus: 'images/bouffalant.jpg',
  Gemini: 'images/meloetta.png',
  Cancer: 'images/krabby.png',
  Leo: 'images/ditto.png',
  Virgo: 'images/diglett.jpg',
  Libra: 'images/chansey.png',
  Scorpio: 'images/chatot.png',
  Sagittarius: 'images/victreebel.jpg',
  Capricorn: 'images/pikachu.png',
  Aquarius: 'images/squirtle.png',
  Pisces: 'images/primarina.png'
};

let audioElements = [];

function showPopup(zodiacInfo) {
  const popup = document.getElementById('popup');
  const popupZodiac = document.getElementById('popup-zodiac');
  const popupImage = document.getElementById('popup-image');
  const popupDates = document.getElementById('popup-dates');
  const popupDescription = document.getElementById('popup-description');

  popupZodiac.textContent = zodiacInfo.zodiac;
  popupImage.src = pokemonImages[zodiacInfo.zodiac] || 'images/default.png';
  popupDates.textContent = `Dates: ${getZodiacDates(zodiacInfo.zodiac)}`;
  popupDescription.textContent = `Description: ${getPokemonDescription(zodiacInfo.zodiac)}`;

  popup.style.display = 'flex';
  setupPopupCloseListener(popup);
}

function setupPopupCloseListener(popup) {
  document.querySelector('.close').addEventListener('click', () => {
    popup.style.display = 'none';
  });
  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
}

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

function getZodiacDates(zodiac) {
  return zodiacDates[zodiac] || '';
}

function getPokemonDescription(zodiac) {
  return pokemonDescriptions[zodiac] || '';
}

function createButtons(item) {
  const buttonsContainer = document.querySelector('.buttons');
  const button = document.createElement('button');

  const img = document.createElement('img');
  img.src = pokemonImages[item.zodiac] || 'images/default.png';
  img.alt = item.title;
  button.appendChild(img);

  const audio = new Audio(item.sound);
  audioElements.push(audio);

  button.addEventListener('click', () => {
    stopSounds();
    audio.play();
    showPopup(item);
  });
  buttonsContainer.appendChild(button);
}

function stopSounds() {
  audioElements.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });
}

function initialize() {
  signs.forEach((item) => {
    createButtons(item);
  });
}

document.getElementById('date').addEventListener('change', function (event) {
  const selectedDate = new Date(event.target.value);
  const month = selectedDate.getMonth() + 1;
  const day = selectedDate.getDate();
  const zodiacSign = getZodiac(month, day);
  const zodiacInfo = signs.find(sign => sign.zodiac === zodiacSign);
  if (zodiacInfo) {
    showPopup(zodiacInfo);
  }
});

window.addEventListener('load', initialize);
function stopSounds() {
  audioElements.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });
}

function createButtons(item) {
  const buttonsContainer = document.querySelector('.buttons');
  const button = document.createElement('button');

  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.title;
  button.appendChild(img);

  const audio = new Audio(item.sound);
  audioElements.push(audio);

  button.addEventListener('click', () => {
    stopSounds();
    audio.play();
    showPopup(item);
  });

  buttonsContainer.appendChild(button);
}

function initialize() {
  signs.forEach((item) => {
    createButtons(item);
  });
}

// Detect when a user selects a date
document.getElementById('date').addEventListener('change', function (event) {
  const selectedDate = new Date(event.target.value);
  const month = selectedDate.getMonth() + 1; // getMonth() returns 0-11
  const day = selectedDate.getDate();
  const zodiacSign = getZodiac(month, day);
  const zodiacInfo = signs.find(sign => sign.zodiac === zodiacSign);
  if (zodiacInfo) {
    showPopup(zodiacInfo);
  }
});

window.addEventListener('load', initialize);  