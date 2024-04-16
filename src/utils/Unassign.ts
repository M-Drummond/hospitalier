import { useBedsStore } from '@/stores/BedsStore'
import { usePatientsStore } from '@/stores/PatientsStore'
import type Patient from '@/types/Patient'

const bs = useBedsStore()
const ps = usePatientsStore()

export default function unassign(patient: Patient) {
  bs.removePatientFromBed(patient)
  ps.removeBedFrompatient(patient)
}
