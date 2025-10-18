import User from './User';

export default class Patient extends User {
  constructor(attrs = {}) {
    super({ ...attrs, role: 'patient' });
    this.patientID = attrs.patientID || attrs.id || null;
    this.age = attrs.age || null;
    this.gender = attrs.gender || null;
    this.history = attrs.history || [];
    this.preferences = attrs.preferences || {};
  }

  addHistory(entry) {
    const e = { at: new Date().toISOString(), entry };
    this.history.push(e);
    return e;
  }

  getPrimaryContact() {
    return this.preferences.contact || this.email || null;
  }
}
