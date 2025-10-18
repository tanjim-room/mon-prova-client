import BaseModel from './BaseModel';

export default class Schedule extends BaseModel {
  constructor(attrs = {}) {
    super(attrs);
    this.id = attrs.id || null;
    this.doctorID = attrs.doctorID || null;
    this.date = attrs.date || null; // ISO date
    this.slots = attrs.slots || []; // array of { start, end, available }
  }

  addSlot(slot = {}) {
    // slot: { start: 'HH:MM', end: 'HH:MM', available: true }
    const s = { start: slot.start || '00:00', end: slot.end || '00:00', available: slot.available !== false };
    this.slots.push(s);
    return this;
  }

  removeSlot(index) {
    if (typeof index === 'number' && index >= 0 && index < this.slots.length) {
      this.slots.splice(index, 1);
    }
    return this;
  }

  isSlotAvailable(startTime, endTime) {
    const [sh, sm] = (startTime || '0:0').split(':').map(Number);
    const [eh, em] = (endTime || '0:0').split(':').map(Number);
    const startM = sh * 60 + sm;
    const endM = eh * 60 + em;
    return this.slots.some(s => {
      if (!s.available) return false;
      const [sSh, sSm] = (s.start || '0:0').split(':').map(Number);
      const [sEh, sEm] = (s.end || '0:0').split(':').map(Number);
      const sStart = sSh * 60 + sSm;
      const sEnd = sEh * 60 + sEm;
      return startM >= sStart && endM <= sEnd;
    });
  }
}
