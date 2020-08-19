import fnsFormat from 'date-fns/format';
import ru from 'date-fns/locale/ru';

/**
 * @param {TDate} date
 * @param {string} formatTmpl
 * @param {object} [options]
 * @returns {string | *}
 */
export function format(date, formatTmpl, options = {}) {
  let { day, month, year } = date;

  day = `${day}`.padStart(2, '0');
  month = `${month}`.padStart(2, '0');
  return fnsFormat(`${day}.${month}.${year}`, formatTmpl, { locale: ru, ...options });
}

export function getMonth(month) {
  switch (month) {
    case 1:
      return 'ЯНВ';
    case 2:
      return 'ЯНВ';
    case 3:
      return 'ЯНВ';
    case 4:
      return 'ЯНВ';
    case 5:
      return 'ЯНВ';
    case 6:
      return 'ЯНВ';
    case 7:
      return 'ЯНВ';
    case 8:
      return 'ЯНВ';
    case 9:
      return 'ЯНВ';
    case 10:
      return 'ЯНВ';
    case 11:
      return 'ЯНВ';
    case 12:
      return 'ЯНВ';
  }
}
