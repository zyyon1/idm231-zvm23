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
  Aries: 'Aries is bold, fiery, and born to lead. Charizard, with its aggressive spirit, powerful flame, and need to be the strongest, is the perfect embodiment of Aries energy. It\'s impulsive, passionate, and never backs down from a challenge.',
  Taurus: 'Taurus is grounded, sturdy, and fiercely loyal, just like Bouffalant. It\'s reliable and tough, but also gentle unless provoked. With its no-nonsense attitude and strong defense, it represents the calm but unshakable strength of a Taurus.',
  Gemini: 'Gemini is adaptable, expressive, and dual-natured, just like Meloetta\'s Aria and Pirouette Forms. Meloetta literally switches personas, showing the intellect and artistry Geminis are known for.',
  Cancer: 'Cancers are emotionally deep and protective, with a hard shell but a soft heart. Krabby, being a literal crab, fits the Cancer sign symbolically, and its tendency to lash out when threatened reflects Cancer\'s defensive instincts.',
  Leo: 'Leos are usually confident, charismatic, and love to shine, but Ditto flips the idea on its head. Ditto can become whoever it sees, much like a Leo who can adapt their charm to any social setting to stay the center of attention. Ditto also reflects Leo\'s versatility and the power to match any opponent.',
  Virgo: 'Virgos are earthy, practical, and detail-oriented. Diglett is humble, efficient, and close to the ground - literally. Its behind-the-scenes energy and ability to detect subtle vibrations represent Virgo\'s analytical and meticulous traits.',
  Libra: 'Libra values harmony, kindness, and caretaking, which fits Chansey perfectly. Chansey heals others and brings peace to any team, embodying Libra\'s need to nurture and maintain balance wherever they go.',
  Scorpio: 'Scorpios are intense, mysterious, and have sharp instincts. Chatot might not look it, but its mimicry and cleverness show a Scorpio\'s cunning and strategic mind. It listens, waits, and strikes with eerie accuracy, just like a Scorpio.',
  Sagittarius: 'Sagittarius is wild, adventurous, and always chasing something new. Victreebel is unpredictable, untamed, and thrives in the jungle, much like Sagittarius thrives in chaos and exploration. It represents the thrill-seeking, risk-taking energy of the sign.',
  Capricorn: 'Capricorns are ambitious, dependable, and leaders in disguise. Pikachu might seem cute, but it\'s disciplined and incredibly strong, always pushing to be better. As Ash\'s partner, it shows Capricorn\'s loyalty, drive, and silent determination.',
  Aquarius: 'Aquarius is clever, cool, and rebellious in its own way. Squirtle\'s calm nature and occasional mischief (like with the Squirtle Squad) reflect the unique, independent spirit of an Aquarius. It\'s forward-thinking and always marches to its own beat.',
  Pisces: 'Pisces is dreamy, artistic, and emotionally rich. Primarina sings, dances, and enchants, making it the perfect embodiment of Pisces\' romantic, creative soul. It\'s gentle but powerful, tuned into the emotions of others.'
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