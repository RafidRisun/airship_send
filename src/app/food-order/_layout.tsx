import { Stack } from 'expo-router';
import React from 'react';

export default function FoodOrderLayout() {
	return (
		<Stack
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: { fontFamily: 'manropeBold', fontSize: 16 },
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen name="index" options={{ headerTitle: 'Food Delivery' }} />
		</Stack>
	);
}
