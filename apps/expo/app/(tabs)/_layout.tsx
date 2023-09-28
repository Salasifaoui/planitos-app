import { Tabs } from 'expo-router';
import React from 'react';
import { Home,Sprout,User,HopOff } from '@tamagui/lucide-icons'

export default function TabLayout(){
  const color = '$colors.primary'
   
    return (
        <Tabs 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '$colors.background',
        }}
        >
            <Tabs.Screen
        name="(main)"
        options={{
          title: 'Home',
          tabBarIcon: () =>
          <Home size={'$2'} color={color} />
            
        }}
      />
      <Tabs.Screen
        name="creatPost"
        options={{
          title: 'Plant',
          tabBarIcon: () =>
          <Sprout size={'$2'} color={color} />
            
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Profile',
          tabBarIcon: () =>
          <User size={'$2'} color={color} />
            
        }}
      />
      <Tabs.Screen
        name="vedeo"
        options={{
          title: 'Vedeo',
          tabBarIcon: () =>
          <HopOff size={'$2'} color={color} />
            
        }}
      />
        </Tabs>
    )

}