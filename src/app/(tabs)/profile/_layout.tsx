import { Stack } from 'expo-router';
import React from 'react';

export default function ProfileLayout() {
	return (
		<Stack
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: { fontFamily: 'manropeBold', fontSize: 16 },
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen name="index" options={{ headerTitle: 'Profile' }} />
			<Stack.Screen
				name="editProfile"
				options={{ headerTitle: 'Edit Profile' }}
			/>
			<Stack.Screen
				name="editAddress"
				options={{ headerTitle: 'Edit Address' }}
			/>
			<Stack.Screen name="address" options={{ headerTitle: 'My Addresses' }} />
		</Stack>
	);
}
