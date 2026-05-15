import { UserStats } from '@/src/types/user'
import { RegisterCredentials } from '@/src/types/auth'

export interface StepProps {
  onNext: (newData?: Partial<UserStats & RegisterCredentials>) => void
  onBack: () => void
  data?: Partial<UserStats>
}