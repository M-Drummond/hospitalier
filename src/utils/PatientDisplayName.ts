export default function patientDisplayName(patient) {
  if (patient.name.title && patient.name.first && patient.name.last) {
    return `${patient.name.title} ${patient.name.first} ${patient.name.last}`
  }
}
