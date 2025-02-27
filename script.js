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

const signs = [
  {
    name: 'Aries',
    image: 'images/ram.jpg',
    sound: 'sounds/fire.mp3'
  },
  {
    name: 'Taurus',
    image: 'images/bull.jpg',
    sound: 'sounds/earth.mp3'
  },
  {
    name: 'Gemini',
    image: 'images/twins.jpg',
    sound: 'sounds/sparkle.mp3'
  },
  {
    name: 'Cancer',
    image: 'images/crab.jpg',
    sound: 'sounds/water.mp3'
  },
  {
    name: 'Leo',
    image: 'images/lion.jpg',
    sound: 'sounds/roar.mp3'
  },
  {
    name: 'Virgo',
    image: 'images/maiden.jpg',
    sound: 'sounds/wind.mp3'
  },
  {
    name: 'Libra',
    image: 'images/scales.jpg',
    sound: 'sounds/balance.mp3'
  },
  {
    name: 'Scorpio',
    image: 'images/scorpion.jpg',
    sound: 'sounds/mystery.mp3'
  },
  {
    name: 'Sagittarius',
    image: 'images/archer.jpg',
    sound: 'sounds/arrow.mp3'
  },
  {
    name: 'Capricorn',
    image: 'images/goat.jpg',
    sound: 'sounds/mountain.mp3'
  },
  {
    name: 'Aquarius',
    image: 'images/water-bearer.jpg',
    sound: 'sounds/bubble.mp3'
  },
  {
    name: 'Pisces',
    image: 'images/fish.jpg',
    sound: 'sounds/ocean.mp3'
  }
];

//  const birthday;
//  const birthday_month;
// const birthday_day;
// let selected_sign = ;

function play_sound(selected_sign){

}
