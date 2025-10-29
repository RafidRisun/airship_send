import { Stack } from 'expo-router';
import React from 'react';

export default function ErrandsLayout() {
	return (
		<Stack
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: { fontFamily: 'manropeBold', fontSize: 16 },
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen name="index" options={{ headerTitle: 'Errands' }} />
			<Stack.Screen
				name="requestService"
				options={{ headerTitle: 'Request Service' }}
			/>
		</Stack>
	);
}
