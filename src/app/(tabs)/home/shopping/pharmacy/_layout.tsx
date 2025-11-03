import { Stack } from 'expo-router';
import React from 'react';

export default function PharmacyLayout() {
	return (
		<Stack
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: { fontFamily: 'manropeBold', fontSize: 16 },
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen name="index" options={{ headerTitle: 'Pharmacy' }} />
			<Stack.Screen
				name="addPrescription/[id]"
				options={{ headerTitle: 'Add Prescription' }}
			/>
			<Stack.Screen
				name="addPrescription/camera"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="writePrescription/[id]"
				options={{ headerTitle: 'Add Prescription' }}
			/>
			<Stack.Screen
				name="pharmacy-item/[id]"
				options={{ headerTitle: 'Product Details' }}
			/>
		</Stack>
	);
}
