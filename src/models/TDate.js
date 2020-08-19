export default class TDate {
  /**
   * Год
   * @type {number}
   */
  year;

  /**
   * Месяц 1 - 12
   * @type {number}
   */
  month;

  /**
   * День месяца 1 - 31
   * @type {number}
   */
  day;

  constructor(args) {
    const { year, month, day } = args;
    this.year = year;
    this.month = month;
    this.day = day;
  }
}
