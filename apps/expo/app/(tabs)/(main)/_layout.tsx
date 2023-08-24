import React from 'react';
import { Stack as ExpoRouterStack } from "expo-router";


export default function HomeStackLayout() {

  return (
    <ExpoRouterStack
      screenOptions={{
        headerShown: false,
      }}
    />
  )
}