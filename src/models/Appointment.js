import BaseModel from './BaseModel';

export default class Appointment extends BaseModel {
  constructor(attrs = {}) {
    super(attrs);
    this.id = attrs.id || null;
    this.patientID = attrs.patientID || null;
    this.doctorID = attrs.doctorID || null;
    this.datetime = attrs.datetime || null; // ISO string
    this.status = attrs.status || 'pending'; // pending|confirmed|cancelled|completed
    this.notes = attrs.notes || '';
    this.createdAt = attrs.createdAt || new Date().toISOString();
  }

  isPending() { return this.status === 'pending'; }
  isConfirmed() { return this.status === 'confirmed'; }

  confirm() {
    if (this.status === 'pending') this.status = 'confirmed';
    return this;
  }

  cancel(reason) {
    this.status = 'cancelled';
    if (reason) this.notes = `${this.notes}\nCancelled: ${reason}`.trim();
    return this;
  }

  complete() {
    this.status = 'completed';
    return this;
  }

  reschedule(newDateTime) {
    this.datetime = newDateTime;
    this.status = 'pending';
    return this;
  }
}
