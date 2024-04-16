export default function patientNameAsSlug(patient) {
  if (patient.name) {
    const first = patient.name.first.toLowerCase()

    const last = patient.name.last.toLowerCase()

    return `${first}-${last}`
  }

  // return `${patient.name.title} ${patient.name.first} ${patient.name.last}`
}
