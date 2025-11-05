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
			<Stack.Screen
				name="paymentMethod"
				options={{ headerTitle: 'Payment Method' }}
			/>
			<Stack.Screen
				name="addNewCard"
				options={{ headerTitle: 'Add New Card' }}
			/>
			<Stack.Screen
				name="notification"
				options={{ headerTitle: 'Notifications' }}
			/>
			<Stack.Screen
				name="passwordAndSecurity"
				options={{ headerTitle: 'Password & Security' }}
			/>
			<Stack.Screen name="passkey" options={{ headerTitle: 'Passkey' }} />
			<Stack.Screen
				name="recoveryPhone"
				options={{ headerTitle: 'Recovery Phone Number' }}
			/>
			<Stack.Screen
				name="recoveryPhoneOTP"
				options={{ headerTitle: 'Recovery Phone Number' }}
			/>
			<Stack.Screen
				name="twoStepVerification"
				options={{ headerTitle: 'Two-Step Verification' }}
			/>
			<Stack.Screen
				name="changePassword"
				options={{ headerTitle: 'Change Password' }}
			/>
			<Stack.Screen
				name="helpCenter"
				options={{ headerTitle: 'Help Center' }}
			/>
			<Stack.Screen name="faq" options={{ headerTitle: 'FAQ' }} />
		</Stack>
	);
}
