import { Stack } from 'expo-router';
import React from 'react';

export default function OrderLayout() {
	return (
		<Stack
			screenOptions={{
				headerTitle: 'Your Order',
				headerTitleAlign: 'center',
				headerTitleStyle: { fontFamily: 'manropeBold', fontSize: 16 },
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="order-details" />
		</Stack>
	);
}
