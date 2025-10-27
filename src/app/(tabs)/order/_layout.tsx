import { Stack } from 'expo-router';
import React from 'react';

export default function OrderLayout() {
	return (
		<Stack
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: { fontFamily: 'manropeBold', fontSize: 16 },
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen name="index" options={{ headerTitle: 'Your Order' }} />
			<Stack.Screen
				name="order-details"
				options={{ headerTitle: 'Order Details' }}
			/>
		</Stack>
	);
}
