import React, { useState } from 'react';
import { StepProps } from '@/src/types/onboarding';
import { BackButton } from '@/src/components/ui/BackButton';
import { PrimaryButton } from '@/src/components/onboarding/ui/PrimaryButton';
import { StepTitle } from '@/src/components/onboarding/ui/Title';
import { StepContainer } from '@/src/components/onboarding/ui/StepContainer';
import { Input } from '@/src/components/onboarding/ui/InputText';

export default function Step8_EmailPassword({ onNext, onBack }: StepProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = email.includes('@') && password.length >= 6;

  return (
    <StepContainer>
      <BackButton onPress={onBack} />
      <StepTitle>Crea il tuo account</StepTitle>
      <Input value={email} placeholder="Email" onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <Input value={password} placeholder="Password (min. 6 caratteri)" onChangeText={setPassword} secureTextEntry />
      <PrimaryButton text="Completa" disabled={!isValid} onPress={() => onNext({ email, password })} />
    </StepContainer>
  );
}
