import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function AuthLayout() {
	return (
		<>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" />
			</Stack>
			<StatusBar style="light" backgroundColor="" />
		</>
	);
}
