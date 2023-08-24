import React from "react";
import { Stack as ExpoRouterStack } from "expo-router";


export default function AccountStackLayout() {
  return (
    <ExpoRouterStack
      screenOptions={{
        headerShown: false,
     
      }}
    />
  )
}