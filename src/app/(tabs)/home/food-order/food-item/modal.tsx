import { iconAdd, iconClose, iconRemove } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Checkbox } from 'expo-checkbox';
import { Image } from 'expo-image';
import { useState } from 'react';
import {
	Modal,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function FoodModal({
	modalVisible,
	setModalVisible,
}: {
	modalVisible: boolean;
	setModalVisible: (visible: boolean) => void;
}) {
	const [selectedOption, setSelectedOption] = useState('');

	const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
	const [quantity, setQuantity] = useState(0);

	const toggleTopping = (id: string) => {
		setSelectedToppings(prev =>
			prev.includes(id) ? prev.filter(topping => topping !== id) : [...prev, id]
		);
	};

	return (
		<Modal animationType="slide" transparent={true} visible={modalVisible}>
			<View style={tw`flex-1`}>
				<View style={tw`flex flex-1 justify-end bg-black bg-opacity-40`}>
					<TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
						<View style={tw`flex-1 w-full`} />
					</TouchableWithoutFeedback>
					<View style={tw`flex flex-col bg-white rounded-t-xl gap-2 p-4`}>
						<TouchableOpacity
							style={tw`absolute top-4 right-4 z-50`}
							onPress={() => setModalVisible(false)}
						>
							<SvgXml xml={iconClose} />
						</TouchableOpacity>
						<Text style={tw`text-base font-manropeBold`}>Size</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Select any 1 option
						</Text>
						<View
							style={tw`flex flex-col w-full gap-3  p-3 bg-white rounded-lg shadow-sm`}
						>
							{sizeOptions.map(option => (
								<View
									key={option.id}
									style={tw`flex flex-row items-center justify-between`}
								>
									<View style={tw`flex flex-row items-center gap-3`}>
										<Image
											source={option.image}
											style={tw`w-6 h-6`}
											contentFit="contain"
										/>
										<Text style={tw`text-xs font-manropeBold`}>
											{option.name}
										</Text>
										<Text style={tw`text-xs font-manropeRegular text-gray`}>
											{`(${option.size})`}
										</Text>
									</View>
									<View style={tw`flex flex-row items-center gap-3`}>
										<Text style={tw`text-xs font-manropeRegular text-gray`}>
											₱ {option.price}+
										</Text>
										<TouchableWithoutFeedback
											onPress={() => setSelectedOption(option.id)}
										>
											<View
												style={tw`w-5 h-5 border border-blue rounded-full flex items-center justify-center`}
											>
												{selectedOption === option.id && (
													<View style={tw`w-3 h-3 bg-blue rounded-full`} />
												)}
											</View>
										</TouchableWithoutFeedback>
									</View>
								</View>
							))}
						</View>
						<Text style={tw`text-base font-manropeBold`}>Toppings</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Select upto 4 options
						</Text>
						<View
							style={tw`flex flex-col w-full gap-3  p-3 bg-white rounded-lg shadow-sm`}
						>
							{toppingOptions.map(option => (
								<View
									key={option.id}
									style={tw`flex flex-row items-center justify-between`}
								>
									<View style={tw`flex flex-row items-center gap-3`}>
										<Image
											source={option.image}
											style={tw`w-6 h-6`}
											contentFit="contain"
										/>
										<Text style={tw`text-xs font-manropeBold`}>
											{option.name}
										</Text>
									</View>
									<View style={tw`flex flex-row items-center gap-3`}>
										<Text style={tw`text-xs font-manropeRegular text-gray`}>
											₱ {option.price}+
										</Text>
										<Checkbox
											value={selectedToppings.includes(option.id)}
											onValueChange={() => toggleTopping(option.id)}
											color={
												selectedToppings.includes(option.id)
													? '#3B82F6'
													: undefined
											} // Inner fill color for checked state
											style={{
												borderColor: selectedToppings.includes(option.id)
													? '#3B82F6'
													: '#3B82F6', // Blue border for both states
												borderWidth: 2, // Ensure the border is visible
											}}
										/>
									</View>
								</View>
							))}
						</View>
						<View style={tw`flex flex-row w-full p-4 gap-4 items-center`}>
							<View
								style={tw`flex flex-row w-22 bg-lightGray rounded-full items-center justify-between`}
							>
								<TouchableOpacity
									onPress={() => setQuantity(Math.max(0, quantity - 1))}
								>
									<SvgXml xml={iconRemove} width={26} height={26} />
								</TouchableOpacity>
								<Text style={tw`text-base font-manropeRegular`}>
									{quantity}
								</Text>
								<TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
									<SvgXml xml={iconAdd} width={26} height={26} />
								</TouchableOpacity>
							</View>
							<TouchableOpacity
								style={tw`flex items-center justify-center bg-blue p-3 rounded-full flex-1`}
								onPress={() => setModalVisible(true)}
							>
								<Text style={tw`text-white font-manropeSemiBold`}>
									Add Item ₱
									{quantity *
										(sizeOptions.find(option => option.id === selectedOption)
											?.price || 0)}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const sizeOptions = [
	{
		id: '1',
		name: 'Small',
		size: '6 inches',
		price: 99,
		image: require('../../../../../../assets/images/pizzaIcon.png'),
	},
	{
		id: '2',
		name: 'Medium',
		size: '8 inches',
		price: 129,
		image: require('../../../../../../assets/images/pizzaIcon.png'),
	},
	{
		id: '3',
		name: 'Large',
		size: '12 inches',
		price: 159,
		image: require('../../../../../../assets/images/pizzaIcon.png'),
	},
	{
		id: '4',
		name: 'Extra Large',
		size: '16 inches',
		price: 189,
		image: require('../../../../../../assets/images/pizzaIcon.png'),
	},
];

const toppingOptions = [
	{
		id: '1',
		name: 'Olive',
		price: 20,
		image: require('../../../../../../assets/images/olives.png'),
	},
	{
		id: '2',
		name: 'Onion',
		price: 15,
		image: require('../../../../../../assets/images/onion.png'),
	},
	{
		id: '3',
		name: 'Cheese',
		price: 10,
		image: require('../../../../../../assets/images/cheese.png'),
	},
	{
		id: '4',
		name: 'Mushroom',
		price: 25,
		image: require('../../../../../../assets/images/mushroom.png'),
	},
	{
		id: '5',
		name: 'Tomato',
		price: 30,
		image: require('../../../../../../assets/images/tomato.png'),
	},
];
