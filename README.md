# MyFit App 📱

A full-stack health tracking mobile application built with React Native and Expo, designed to help users track their daily nutrition, calories, and workouts.

## Tech Stack

- **React Native** with Expo
- **TypeScript**
- **Redux Toolkit** — state management with slice architecture
- **RTK Query** — API integration and data fetching
- **redux-persist** — persistent storage with AsyncStorage
- **Expo Router** — file-based navigation (tabs + stack)

## Features

- Onboarding flow with personalized nutrition profile
- JWT Authentication (register & login)
- Daily meal tracking with calories and macros
- Progress visualization with dynamic charts
- Persistent state across sessions

## Architecture

Feature-based architecture with Redux Toolkit:
src/
features/ # Redux slices (user, nutrition, workout)
api/ # RTK Query endpoints
components/ # Reusable UI components
hooks/ # Custom typed hooks
types/ # TypeScript interfaces
utils/ # Helper functions

## Getting Started

```bash
# Install dependencies
npm install

# Start the app
npx expo start
```

## Backend

This app connects to a custom Node.js REST API. See [MyFit API](https://github.com/JacopoCarrozzo/my-fit-app-backend) for more details.
