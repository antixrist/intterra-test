import TDate from './TDate';

/**
 * @readonly
 * @enum {number|string}
 */
export const OperationType = {
  PLOWING: 0, // Вспашка
  BOWLING: 1, // Боронование
  FERTILIZATION: 2, // Внесение удобрений
  WATERING: 3, // Полив
  RIGGING: 4, // Прикатывание
  HARVESTING: 5, // Сбор урожая
  0: 'PLOWING',
  1: 'BOWLING',
  2: 'FERTILIZATION',
  3: 'WATERING',
  4: 'RIGGING',
  5: 'HARVESTING',
};

/**
 * @readonly
 * @enum {number|string}
 */
export const Assessment = {
  EXCELLENT: 0, // Отлично
  SATISFACTORILY: 1, // Удовлетворительно
  BADLY: 2, // Плохо
  0: 'EXCELLENT',
  1: 'SATISFACTORILY',
  2: 'BADLY',
};

export default class Operation {
  /**
   * ID Операции
   * @type {?string}
   */
  id;

  /**
   * Тип операции
   * @type {OperationType}
   */
  type;

  /**
   * Дата проведения операции
   * @type {TDate}
   */
  date;

  /**
   * Площадь проведения операции (Га)
   * @type {number}
   */
  area;

  /**
   * Комментарий
   * @type {?string}
   */
  comment;

  /**
   * Оценка качества проведенной операции
   * @type {?Assessment}
   */
  assessment;

  /**
   * @param {Operation} args
   */
  constructor(args) {
    const { id = null, type, date, area, comment = null, assessment = null } = args;
    this.id = id;
    this.type = type;
    this.date = new TDate(date);
    this.area = area;
    this.comment = comment;
    this.assessment = assessment;
  }
}
