import { Stack } from 'expo-router';
import React from 'react';

export default function ServicesLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{ headerTitle: 'Pickup & Delivery' }}
			/>
			<Stack.Screen
				name="foodDelivery"
				options={{ headerTitle: 'Food Delivery' }}
			/>
			<Stack.Screen name="errands" options={{ headerTitle: 'Errands' }} />
			<Stack.Screen name="shopping" options={{ headerTitle: 'Shopping' }} />
			<Stack.Screen name="transport" options={{ headerTitle: 'Transport' }} />
		</Stack>
	);
}
