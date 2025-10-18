import BaseModel from './BaseModel';

export default class Prescription extends BaseModel {
  constructor(attrs = {}) {
    super(attrs);
    this.id = attrs.id || null;
    this.doctorID = attrs.doctorID || null;
    this.patientID = attrs.patientID || null;
    this.medicines = attrs.medicines || [];
    this.instructions = attrs.instructions || '';
    this.createdAt = attrs.createdAt || new Date().toISOString();
  }

  addMedicine(med = {}) {
    // med: { id, name, dose, qty }
    const m = { id: med.id || `${Date.now()}-${Math.random()}`, name: med.name || '', dose: med.dose || '', qty: med.qty || 1 };
    this.medicines.push(m);
    return m;
  }

  removeMedicine(id) {
    this.medicines = this.medicines.filter(m => m.id !== id);
    return this;
  }

  toLabel() {
    return this.medicines.map(m => `${m.name} ${m.dose} x${m.qty}`).join('; ');
  }
}
