import tw from '@/src/lib/tailwind';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Categories({ categories }: { categories: any[] }) {
	const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
	return (
		<View style={tw`flex w-full items-center justify-center py-2`}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{categories.map(category => (
					<TouchableOpacity
						key={category.id}
						style={tw`flex items-center justify-center px-4 py-2 mr-3 ${
							selectedCategory.id === category.id
								? 'bg-blue'
								: 'bg-white border border-lightGray'
						} rounded-full`}
						onPress={() => setSelectedCategory(category)}
					>
						<Text
							style={tw`font-manropeRegular text-xs text-center ${
								selectedCategory.id === category.id ? 'text-white' : 'text-gray'
							}`}
						>
							{category.name}
						</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
}
