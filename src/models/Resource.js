import BaseModel from './BaseModel';

export default class Resource extends BaseModel {
  constructor(attrs = {}) {
    super(attrs);
    this.id = attrs.id || null;
    this.title = attrs.title || '';
    this.type = attrs.type || 'article'; // article|video|pdf
    this.url = attrs.url || '';
    this.tags = attrs.tags || [];
    this.publishedAt = attrs.publishedAt || null;
  }
}
