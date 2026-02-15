import React from 'react';
import { StyleSheet } from 'react-native';
import { StepProps } from '@/src/types/onboarding';
import { StepContainer } from '@/src/components/onboarding/ui/StepContainer';
import { Logo } from '@/src/components/onboarding/ui/Logo';
import { StepTitle } from '@/src/components/onboarding/ui/Title';
import { StepDescription } from '@/src/components/onboarding/ui/Description';
import { PrimaryButton } from '@/src/components/onboarding/ui/PrimaryButton';
import { Strings } from '@/src/constants/Strings';

const Step0_Welcome: React.FC<StepProps> = ({ onNext }: StepProps) => {
  return (
    <StepContainer>
      <Logo style={styles.logo} />
      <StepTitle children={Strings.onboarding.welcome} style={styles.title} />
      <StepDescription children={Strings.onboarding.description} />
      <PrimaryButton text={Strings.onboarding.start} onPress={() => onNext()} />
    </StepContainer>
  );
};

export default Step0_Welcome;

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: 50,
  },

  title: {
    fontSize: 27,
    marginTop: 40,
  },
});
