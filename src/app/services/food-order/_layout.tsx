import { iconCartBLue } from '@/assets/icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function FoodOrderLayout() {
	const router = useRouter();
	return (
		// <View style={{ flex: 1 }}>
		// 	<Stack
		// 		screenOptions={{
		// 			headerTitleAlign: 'center',
		// 			headerTitleStyle: { fontFamily: 'manropeBold', fontSize: 16 },
		// 			headerShadowVisible: false,
		// 		}}
		// 	>
		// 		<Stack.Screen name="index" options={{ headerTitle: 'Food Delivery' }} />
		// 		<Stack.Screen
		// 			name="restaurants/[id]"
		// 			options={{ headerTitle: 'Restaurant' }}
		// 		/>
		// 		<Stack.Screen name="searchFood" options={{ headerTitle: 'Search' }} />
		// 		<Stack.Screen name="food-item/[id]" options={{ headerTitle: 'Menu' }} />
		// 	</Stack>

		// 	{/* Floating Button */}
		// 	<TouchableOpacity
		// 		style={tw`absolute bottom-6 right-6 bg-white p-4 rounded-full shadow-md`}
		// 		onPress={() => {
		// 			router.replace('/(tabs)/cart');
		// 		}}
		// 	>
		// 		<SvgXml xml={iconCartBLue} width={15} height={15} />
		// 	</TouchableOpacity>
		// </View>

		<Stack
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: { fontFamily: 'manropeBold', fontSize: 16 },
				headerShadowVisible: false,
				headerRight: () => (
					<TouchableOpacity onPress={() => router.push('/cart')}>
						<SvgXml xml={iconCartBLue} width={24} height={24} />
					</TouchableOpacity>
				),
			}}
		>
			<Stack.Screen name="index" options={{ headerTitle: 'Food Delivery' }} />
			<Stack.Screen
				name="restaurants/[id]"
				options={{ headerTitle: 'Restaurant' }}
			/>
			<Stack.Screen name="searchFood" options={{ headerTitle: 'Search' }} />
			<Stack.Screen name="food-item/[id]" options={{ headerTitle: 'Menu' }} />
		</Stack>
	);
}
