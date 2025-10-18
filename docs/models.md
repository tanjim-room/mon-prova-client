# Domain models

This document describes the class-based domain model for MonProva.

Files created under `src/models`:

- `BaseModel.js` — small base class with `toJSON()` and `clone()` helpers.
- `User.js` — base user with `id`, `email`, `name`, `role`.
- `Doctor.js` — extends `User`, adds doctor-specific fields like `doctorID`, `designation`, `institute`, `specialization`, `degrees`, availability schedule, and `shortBio`.
- `Patient.js` — extends `User`, adds `patientID`, `age`, `gender`, `history`, and preferences.
- `Appointment.js` — appointment record with `patientID`, `doctorID`, `datetime`, and `status`.
- `Resource.js` — learning resource item (article/video/pdf).
- `Prescription.js` — prescription record with `medicines` and `instructions`.
- `Schedule.js` — schedule (per-doctor slots by date).

## Relationships (high-level)

- User (doctor/patient) is the parent concept. Use `Doctor` and `Patient` subclasses for role-specific data.
- `Appointment` references `doctorID` and `patientID`.
- `Prescription` references `doctorID` and `patientID`.
- `Schedule` belongs to a `Doctor`.
- `Resource` is independent and can be tagged to topics or authors.

## Usage examples

Creating instances:

```js
import Doctor from '../src/models/Doctor';
import Patient from '../src/models/Patient';
import Appointment from '../src/models/Appointment';

const dr = new Doctor({ doctorID: '1', name: 'Dr. Rahman', specialization: 'Psychiatry' });
const patient = new Patient({ patientID: 'p1', name: 'Anika' });

const appt = new Appointment({ id: 'a1', doctorID: dr.doctorID, patientID: patient.patientID, datetime: new Date().toISOString() });

console.log(appt.toJSON());
```

## Notes and next steps

- These are plain JS classes for client-side modeling. For server-side persistence, map them to your API shapes or a database ORM.
- Consider converting to TypeScript to get proper types and IDE support.
- Add validation and factories for creating consistent instances.

