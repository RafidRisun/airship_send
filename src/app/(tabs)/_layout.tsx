import {
	iconCart,
	iconCartActive,
	iconHome,
	iconHomeActive,
	iconOrder,
	iconOrderActive,
	iconProfile,
	iconProfileActive,
} from '@/assets/icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					height: 90, // Fixed height for the tab bar
					borderTopWidth: 10,
					borderTopColor: '#FFFFFF',
					shadowOffset: { width: 0, height: 0 },
					shadowColor: 'transparent',
					elevation: 0,
					backgroundColor: '#FFFFFF',
				},
				animation: 'shift',
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'flex-start', // Align content to the top
								flex: 1, // Take full height of the tab bar
							}}
						>
							<SvgXml xml={focused ? iconHomeActive : iconHome} />
							<Text
								style={{
									color: focused ? '#017ADF' : '#A0A0A0',
									fontSize: 10,
									marginTop: 5,
								}}
							>
								Home
							</Text>
							{focused && (
								<View
									style={{
										width: 45,
										height: 3,
										backgroundColor: '#007AFF', // Blue line for active tab
										marginTop: 10,
									}}
								/>
							)}
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="order"
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'flex-start', // Align content to the top
								flex: 1, // Take full height of the tab bar
							}}
						>
							<SvgXml xml={focused ? iconOrderActive : iconOrder} />
							<Text
								style={{
									color: focused ? '#017ADF' : '#A0A0A0',
									fontSize: 10,
									marginTop: 5,
								}}
							>
								Order
							</Text>
							{focused && (
								<View
									style={{
										width: 45,
										height: 3,
										backgroundColor: '#007AFF', // Blue line for active tab
										marginTop: 10,
									}}
								/>
							)}
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="cart"
				options={{
					headerShown: true,
					headerTitle: 'Cart',
					headerTitleAlign: 'center',
					headerTitleStyle: { fontFamily: 'manropeBold', fontSize: 16 },
					headerShadowVisible: false,
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'flex-start', // Align content to the top
								flex: 1, // Take full height of the tab bar
							}}
						>
							<SvgXml xml={focused ? iconCartActive : iconCart} />
							<Text
								style={{
									color: focused ? '#017ADF' : '#A0A0A0',
									fontSize: 10,
									marginTop: 5,
								}}
							>
								Cart
							</Text>
							{focused && (
								<View
									style={{
										width: 45,
										height: 3,
										backgroundColor: '#007AFF', // Blue line for active tab
										marginTop: 10,
									}}
								/>
							)}
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'flex-start', // Align content to the top
								flex: 1, // Take full height of the tab bar
							}}
						>
							<SvgXml xml={focused ? iconProfileActive : iconProfile} />
							<Text
								style={{
									color: focused ? '#017ADF' : '#A0A0A0',
									fontSize: 10,
									marginTop: 5,
								}}
							>
								Profile
							</Text>
							{focused && (
								<View
									style={{
										width: 45,
										height: 3,
										backgroundColor: '#007AFF', // Blue line for active tab
										marginTop: 10,
									}}
								/>
							)}
						</View>
					),
				}}
			/>
			{/* <Tabs.Screen name="food-order" options={{ href: null }} /> */}
		</Tabs>
	);
}
