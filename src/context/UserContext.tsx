import React, { createContext, useContext, useState, useEffect } from 'react';
import type { UserProfile, UserProfileContextValue } from '@/src/types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfileContext = createContext<UserProfileContextValue | undefined>(undefined);

export function UserProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfileState] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load profile from phone memory if it exists, otherwise it stays null.
  useEffect(() => {
    const loadProfile = async () => {
      const saved = await AsyncStorage.getItem('@user_profile');
      if (saved) setProfileState(JSON.parse(saved)); // .parse Convert the saved string back into a JavaScript object.
      setIsLoading(false);
    };

    loadProfile();
  }, []);

  // Update the global state and save the profile data to phone memory.
  const setProfile = async (newProfile: UserProfile | null) => {
    setProfileState(newProfile);
    // Save to phone memory if there is a newProfile, otherwise it will be deleted.
    if (newProfile) {
      const stringData = JSON.stringify(newProfile); // .stringify Convert the  object into a string.
      await AsyncStorage.setItem('@user_profile', stringData);
    } else {
      await AsyncStorage.removeItem('@user_profile');
    }
  };

  return (
    <UserProfileContext.Provider value={{ profile, setProfile, isLoading }}>{children}</UserProfileContext.Provider>
  );
}

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) throw new Error('useUserProfile must be used within UserProfileProvider');
  return context;
};
