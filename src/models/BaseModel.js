/**
 * BaseModel - small base class that other models extend from
 * Includes simple toJSON and clone helpers.
 */
export default class BaseModel {
  constructor(attrs = {}) {
    Object.assign(this, attrs);
  }

  toJSON() {
    const json = {};
    Object.keys(this).forEach(k => {
      if (typeof this[k] !== 'function') json[k] = this[k];
    });
    return json;
  }

  clone() {
    return new this.constructor(JSON.parse(JSON.stringify(this.toJSON())));
  }
}
