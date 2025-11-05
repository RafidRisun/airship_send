import { Stack } from 'expo-router';
import React from 'react';

export default function PickupAndDeliveryLayout() {
	return (
		<Stack
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: { fontFamily: 'manropeBold', fontSize: 16 },
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen
				name="index"
				options={{ headerTitle: 'Pickup & Delivery' }}
			/>
			<Stack.Screen
				name="personalDetails"
				options={{ headerTitle: 'Delivery Details' }}
			/>
			<Stack.Screen
				name="packageDescription"
				options={{ headerTitle: 'Delivery Details' }}
			/>
			<Stack.Screen
				name="paymentDetails"
				options={{ headerTitle: 'Delivery Details' }}
			/>
		</Stack>
	);
}
