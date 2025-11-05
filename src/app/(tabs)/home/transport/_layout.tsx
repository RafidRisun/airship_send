import { Stack } from 'expo-router';
import React from 'react';

export default function TransportLayout() {
	return (
		<Stack
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: { fontFamily: 'manropeBold', fontSize: 16 },
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen name="index" options={{ headerTitle: 'Transport' }} />
			<Stack.Screen
				name="map"
				options={{ headerTransparent: true, headerTitle: '' }}
			/>
		</Stack>
	);
}
