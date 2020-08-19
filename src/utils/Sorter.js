/* eslint-disable max-classes-per-file */

import kebabCase from 'lodash/kebabCase';
import camelCase from 'lodash/camelCase';

class SortingField {
  /**
   * @param field
   * @returns {SortingField}
   */
  static getInstance(field) {
    return field instanceof SortingField ? field : SortingField.fromString(field);
  }

  /**
   * @param {string} raw
   * @returns {SortingField}
   */
  static fromString(raw) {
    let direction = 'asc';
    let name = raw;

    if (raw[0] === '-') {
      direction = 'desc';
      name = raw.slice(1);
    }

    return new SortingField(camelCase(name), direction);
  }

  /**
   * @param {string} name
   * @param {string} [direction=asc]
   */
  constructor(name, direction = 'asc') {
    this.name = name;
    this.direction = direction;
  }

  toggleDirection() {
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
  }

  /**
   * @returns {string}
   */
  toString() {
    const { name, direction } = this;
    const prefix = direction === 'desc' ? '-' : '';
    return `${prefix}${kebabCase(name)}`;
  }
}

export default class Sorter {
  /**
   * @param {string} sortingStr
   * @returns {Sorter}
   */
  static fromString(sortingStr = '') {
    const fields = sortingStr
      .trim()
      .split(',')
      .filter(Boolean)
      .map(item => SortingField.fromString(item));
    return new Sorter(fields);
  }

  /**
   * [[field, direction], ...]
   * @param {[string, string][]} struct
   * @returns {Sorter}
   */
  static fromStruct(struct = []) {
    const fields = struct.map(([name, direction]) => new SortingField(name, direction));
    return new Sorter(fields);
  }

  /**
   * @param {array} fields
   */
  constructor(fields = []) {
    this.fields = fields.map(field => SortingField.getInstance(field));
  }

  /**
   * @param raw
   */
  toggle(raw) {
    const field = SortingField.getInstance(raw);

    const idx = this.fields.findIndex(item => item.name === field.name);
    if (idx < 0) {
      this.fields.push(field);
    } else {
      const existsField = this.fields[idx];
      if (existsField.direction === 'asc') {
        existsField.toggleDirection();
      } else {
        this.fields.splice(idx, 1);
      }
    }
  }

  /**
   * @param raw
   * @returns {string|null}
   */
  getFieldDirection(raw) {
    const field = SortingField.getInstance(raw);
    const exists = this.fields.find(item => item.name === field.name);

    return exists ? exists.direction : null;
  }

  /**
   * [[field, direction], ...]
   * @returns {[string, string][]}
   */
  toStruct() {
    return this.fields.map(field => [field.name, field.direction]);
  }

  /**
   * @returns {string}
   */
  toString() {
    return this.fields.map(field => field.toString()).join(',');
  }
}
