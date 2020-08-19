import fnsFormat from 'date-fns/format';
import ru from 'date-fns/locale/ru';

/**
 * @param {Date} date
 * @param {string} formatTmpl
 * @param {object} [options]
 * @returns {string | *}
 */
// eslint-disable-next-line import/prefer-default-export
export function format(date, formatTmpl, options = {}) {
  return fnsFormat(date, formatTmpl, { locale: ru, ...options });
}
