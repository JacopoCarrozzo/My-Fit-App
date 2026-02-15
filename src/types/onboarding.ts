import { UserStats } from '@/src/types/user';

export interface StepProps {
  onNext: (newData?: Partial<UserStats>) => void;
  onBack: () => void;
  data?: Partial<UserStats>;
}