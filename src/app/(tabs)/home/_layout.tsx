import { Stack } from 'expo-router';
import React from 'react';

export default function HomeLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="food-order" options={{ headerShown: false }} />
		</Stack>
	);
}
