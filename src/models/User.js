import BaseModel from './BaseModel';

export default class User extends BaseModel {
  constructor(attrs = {}) {
    super(attrs);
    this.id = attrs.id || null;
    this.email = attrs.email || '';
    this.name = attrs.name || '';
    this.role = attrs.role || 'guest'; // 'patient'|'doctor'|'admin'
    this.createdAt = attrs.createdAt || new Date().toISOString();
  }

  isDoctor() { return this.role === 'doctor'; }
  isPatient() { return this.role === 'patient'; }
}
