import { Stack } from 'expo-router';
import React from 'react';

export default function HomeLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="food-order" />
			<Stack.Screen name="shopping" />
		</Stack>
	);
}
