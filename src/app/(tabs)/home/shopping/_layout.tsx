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
				options={{ headerTitle: 'Product Details' }}
			/>
			<Stack.Screen name="shops/[id]" options={{ headerTitle: 'Shop' }} />
			<Stack.Screen
				name="traditionalMarket"
				options={{ headerTitle: 'Traditional Market' }}
			/>
			<Stack.Screen name="groceries" options={{ headerTitle: 'Groceries' }} />
			<Stack.Screen name="pharmacy" options={{ headerShown: false }} />
			<Stack.Screen
				name="retailShop"
				options={{ headerTitle: 'Retail Shop' }}
			/>
		</Stack>
	);
}
