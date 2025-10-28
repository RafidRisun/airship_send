import { Stack } from 'expo-router';
import React from 'react';

export default function ShoppingLayout() {
	return (
		<Stack
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: { fontFamily: 'manropeBold', fontSize: 16 },
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen name="index" options={{ headerTitle: 'Shopping' }} />
			<Stack.Screen
				name="searchShoppingItem"
				options={{ headerTitle: 'Search' }}
			/>
			<Stack.Screen
				name="shopping-item/[id]"
				options={{ headerTitle: 'Item Details' }}
			/>
			<Stack.Screen name="shops/[id]" options={{ headerTitle: 'Shop' }} />
		</Stack>
	);
}
