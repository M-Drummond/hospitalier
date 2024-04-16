export default interface Patient {
  id: number
  name: string
  isSelected: boolean
  gender: string
  slug: string
  assignedBed: number
  notes: []
}
