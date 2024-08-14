import type { Mask } from 'react-native-mask-input';

export const ruDDMMYYYYMask: Mask = (
  text = '',
  separator: string | undefined = '.',
) => {
  const cleanText = text.replace(/\D+/g, '');

  let secondDigitDayMask = /\d/;

  if (cleanText.charAt(0) === '0') {
    secondDigitDayMask = /[1-9]/;
  }
  if (cleanText.charAt(0) === '3') {
    secondDigitDayMask = /[01]/;
  }

  let secondDigitMonthMask = /\d/;

  if (cleanText.charAt(2) === '0') {
    secondDigitMonthMask = /[1-9]/;
  }
  if (cleanText.charAt(2) === '1') {
    secondDigitMonthMask = /[012]/;
  }

  return [
    /[0-3]/,
    secondDigitDayMask,
    separator,
    /[0-1]/,
    secondDigitMonthMask,
    separator,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
};

export const ruDDMMYYYYHHMMMask: Mask = (
  text = '',
  dateSeparator: string | undefined = '.',
  timeSeparator: string | undefined = ':',
) => {
  const cleanText = text.replace(/\D+/g, '');

  let secondDigitDayMask = /\d/;
  if (cleanText.charAt(0) === '0') {
    secondDigitDayMask = /[1-9]/;
  }
  if (cleanText.charAt(0) === '3') {
    secondDigitDayMask = /[01]/;
  }

  let secondDigitMonthMask = /\d/;
  if (cleanText.charAt(2) === '0') {
    secondDigitMonthMask = /[1-9]/;
  }
  if (cleanText.charAt(2) === '1') {
    secondDigitMonthMask = /[012]/;
  }

  let secondDigitHourMask = /\d/;
  if (cleanText.charAt(8) === '0' || cleanText.charAt(8) === '1') {
    secondDigitHourMask = /\d/;
  }
  if (cleanText.charAt(8) === '2') {
    secondDigitHourMask = /[0-3]/;
  }

  let secondDigitMinuteMask = /\d/;
  if (cleanText.charAt(10) === '0') {
    secondDigitMinuteMask = /[1-9]/;
  }
  if (cleanText.charAt(10) === '5') {
    secondDigitMinuteMask = /[0-9]/;
  }

  return [
    /[0-3]/,
    secondDigitDayMask,
    dateSeparator,
    /[0-1]/,
    secondDigitMonthMask,
    dateSeparator,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /[0-2]/,
    secondDigitHourMask,
    timeSeparator,
    /[0-5]/,
    secondDigitMinuteMask,
  ];
};

export const enDDMMYYYYHHMMMask: Mask = (
  text = '',
  dateSeparator: string | undefined = '/',
  timeSeparator: string | undefined = ':',
) => {
  const cleanText = text.replace(/\D+/g, '');

  let secondDigitMonthMask = /\d/;
  if (cleanText.charAt(0) === '0') {
    secondDigitMonthMask = /[1-9]/;
  }
  if (cleanText.charAt(0) === '1') {
    secondDigitMonthMask = /[012]/;
  }

  let secondDigitDayMask = /\d/;
  if (cleanText.charAt(2) === '0') {
    secondDigitDayMask = /[1-9]/;
  }
  if (cleanText.charAt(2) === '3') {
    secondDigitDayMask = /[01]/;
  }

  let secondDigitHourMask = /\d/;
  if (cleanText.charAt(8) === '0' || cleanText.charAt(8) === '1') {
    secondDigitHourMask = /\d/;
  }
  if (cleanText.charAt(8) === '2') {
    secondDigitHourMask = /[0-3]/;
  }

  let secondDigitMinuteMask = /\d/;
  if (cleanText.charAt(10) === '0') {
    secondDigitMinuteMask = /[1-9]/;
  }
  if (cleanText.charAt(10) === '5') {
    secondDigitMinuteMask = /[0-9]/;
  }

  return [
    /[01]/,
    secondDigitMonthMask,
    dateSeparator,
    /[0-3]/,
    secondDigitDayMask,
    dateSeparator,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /[0-2]/,
    secondDigitHourMask,
    timeSeparator,
    /[0-5]/,
    secondDigitMinuteMask,
    ' ',
    /[APap]/, // A or P for AM/PM
    /[Mm]/, // M for AM/PM
  ];
};

export const ruHHMMMask: Mask = (
  text = '',
  timeSeparator: string | undefined = ':',
) => {
  const cleanText = text.replace(/\D+/g, '');

  let secondDigitHourMask = /\d/;
  if (cleanText.charAt(0) === '0' || cleanText.charAt(0) === '1') {
    secondDigitHourMask = /\d/;
  }
  if (cleanText.charAt(0) === '2') {
    secondDigitHourMask = /[0-3]/;
  }

  let secondDigitMinuteMask = /\d/;
  if (cleanText.charAt(2) === '0') {
    secondDigitMinuteMask = /[1-9]/;
  }
  if (cleanText.charAt(2) === '5') {
    secondDigitMinuteMask = /[0-9]/;
  }

  return [
    /[0-2]/,
    secondDigitHourMask,
    timeSeparator,
    /[0-5]/,
    secondDigitMinuteMask,
  ];
};

export const enHHMMMask: Mask = (
  text = '',
  timeSeparator: string | undefined = ':',
) => {
  const cleanText = text.replace(/\D+/g, '');

  let secondDigitHourMask = /\d/;
  if (cleanText.charAt(0) === '0') {
    secondDigitHourMask = /[1-9]/;
  }
  if (cleanText.charAt(0) === '1') {
    secondDigitHourMask = /[0-2]/;
  }

  let secondDigitMinuteMask = /\d/;
  if (cleanText.charAt(2) === '0') {
    secondDigitMinuteMask = /[0-9]/;
  }
  if (cleanText.charAt(2) === '5') {
    secondDigitMinuteMask = /[0-9]/;
  }

  return [
    /[0-1]/,
    secondDigitHourMask,
    timeSeparator,
    /[0-5]/,
    secondDigitMinuteMask,
    ' ',
    /[APap]/, // A or P for AM/PM
    /[Mm]/, // M for AM/PM
  ];
};

export const numberRegExp = /[^0-9]/g;
export const priceRegExp = /^(?!0\d|\.)(\d*)(\.\d{0,2})?.*$/;
export const dateRegExp = /^\d{2}\.\d{2}\.\d{4}$/;

export const keepDigitsOnly = (text: string) => text.replace(numberRegExp, '');

export const formatTextAsPrice = (text: string) =>
  text.replace(priceRegExp, '$1$2');
