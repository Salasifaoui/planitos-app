import React from "react";
import { Stack as ExpoRouterStack } from "expo-router";


export default function VedeotStackLayout() {
  return (
    <ExpoRouterStack
      screenOptions={{
        headerShown: false,
       
      }}
    />
  )
}