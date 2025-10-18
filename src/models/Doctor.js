import User from './User';

export default class Doctor extends User {
  constructor(attrs = {}) {
    super({ ...attrs, role: 'doctor' });
    this.doctorID = attrs.doctorID || attrs.id || null;
    this.designation = attrs.designation || '';
    this.institute = attrs.institute || '';
    this.specialization = attrs.specialization || '';
    this.degrees = attrs.degrees || [];
    this.yearsOfExperience = attrs.yearsOfExperience || 0;
    this.consultationFee = attrs.consultationFee || 0;
    this.expertise = attrs.expertise || [];
    this.image = attrs.image || '';
    this.availabilitySchedule = attrs.availabilitySchedule || {};
    this.shortBio = attrs.shortBio || '';
  }

  getFullName() {
    return this.name || this.fullName || '';
  }

  isAvailableAt(dateTime) {
    // dateTime can be a Date or ISO string
    if (!this.availabilitySchedule || Object.keys(this.availabilitySchedule).length === 0) return true;
    try {
      const dt = new Date(dateTime);
      if (isNaN(dt)) return false;
      const day = dt.toISOString().slice(0, 10); // YYYY-MM-DD
      const slots = this.availabilitySchedule[day] || [];
      // slots are expected: [{ start: 'HH:MM', end: 'HH:MM', available: true }]
      const minutes = dt.getHours() * 60 + dt.getMinutes();
      return slots.some(s => {
        if (!s.available) return false;
        const [sh, sm] = (s.start || '0:0').split(':').map(Number);
        const [eh, em] = (s.end || '0:0').split(':').map(Number);
        const startM = sh * 60 + sm;
        const endM = eh * 60 + em;
        return minutes >= startM && minutes < endM;
      });
    } catch (e) {
      return false;
    }
  }

  addExpertise(tag) {
    if (!tag) return this;
    this.expertise = Array.isArray(this.expertise) ? this.expertise : [];
    if (!this.expertise.includes(tag)) this.expertise.push(tag);
    return this;
  }

  removeExpertise(tag) {
    if (!tag || !Array.isArray(this.expertise)) return this;
    this.expertise = this.expertise.filter(t => t !== tag);
    return this;
  }

  toProfileJSON() {
    return {
      id: this.doctorID || this.id,
      name: this.getFullName(),
      designation: this.designation,
      institute: this.institute,
      specialization: this.specialization,
      expertise: this.expertise,
      image: this.image,
      shortBio: this.shortBio,
    };
  }
}
