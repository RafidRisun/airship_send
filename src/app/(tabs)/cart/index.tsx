import {
	iconAdd,
	iconCalendar,
	iconClock,
	iconEnter,
	iconLocation,
	iconPlus,
	iconPromo,
	iconRemove,
} from '@/assets/icons';
import Divider from '@/src/components/Divider';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import PageWrapper from '@/src/components/PageWrapper';
import Header from '@/src/components/ui/Header';
import tw from '@/src/lib/tailwind';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import DeliveryModal from './deliveryModal';
import PromoModal from './promoModal';

export default function Cart() {
	const [quantity, setQuantity] = useState(0);
	const [promoModalVisible, setPromoModalVisible] = useState(false);
	const [deliveryModalVisible, setDeliveryModalVisible] = useState(false);
	const [promo, setPromo] = useState('');
	const [deliveryOption, setDeliveryOption] = useState<
		'Standard' | 'Priority' | 'VIP'
	>('Standard');
	const router = useRouter();
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [date, setDate] = useState<Date | null>(null);

	const [deliverCharge, setDeliveryCharge] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);
	useEffect(() => {
		if (deliveryOption === 'Standard') {
			setDeliveryCharge(40);
		} else if (deliveryOption === 'Priority') {
			setDeliveryCharge(80);
		} else if (deliveryOption === 'VIP') {
			setDeliveryCharge(120);
		}

		setTotalAmount(
			cartDetails.subtotal + deliverCharge - cartDetails.promocodeDiscount
		);
	}, [deliveryOption, deliverCharge]);

	const onChangeTime = (event: any, selectedDate?: Date) => {
		const currentDate = selectedDate || date;
		setShowDatePicker(false);
		setDate(currentDate);
	};

	// const cartType = useSelector((state: RootState) => state.cartType);

	return (
		<PageWrapper>
			<View style={tw`flex flex-row items-center justify-start gap-2 w-full`}>
				<View
					style={tw`flex items-center justify-center p-3 aspect-square rounded-full bg-blue shadow-md`}
				>
					<SvgXml xml={iconLocation} />
				</View>
				<View style={tw`flex flex-col items-start justify-center gap-1`}>
					<Text style={tw`font-manropeSemiBold text-sm`}>
						{cartDetails.user}
					</Text>
					<Text style={tw`font-manropeRegular text-xs text-gray`}>
						{cartDetails.address}
					</Text>
				</View>
			</View>
			<Header title="Your Order" />
			<View style={tw`flex flex-col w-full items-center justify-center gap-4`}>
				{cartDetails.items.map((item, index) => (
					<View
						key={index}
						style={tw`flex flex-row w-full items-end justify-between`}
					>
						<View style={tw`flex flex-row items-center justify-start gap-4`}>
							<Image source={item.image} style={tw`w-18 h-18 rounded-md`} />
							<View style={tw`flex flex-col items-start justify-center gap-1`}>
								<Text style={tw`text-sm font-manropeSemiBold`}>
									{item.name}
								</Text>
								<Text style={tw`text-xs font-manropeRegular text-gray`}>
									₱ {item.price}
								</Text>
							</View>
						</View>
						<View
							style={tw`flex flex-row w-22 bg-lightGray rounded-full items-center justify-between`}
						>
							<TouchableOpacity
								onPress={() => setQuantity(Math.max(0, quantity - 1))}
							>
								<SvgXml xml={iconRemove} width={26} height={26} />
							</TouchableOpacity>
							<Text style={tw`text-base font-manropeRegular`}>{quantity}</Text>
							<TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
								<SvgXml xml={iconAdd} width={26} height={26} />
							</TouchableOpacity>
						</View>
					</View>
				))}
			</View>
			<Divider />
			<TouchableOpacity
				style={tw`flex flex-row w-full items-center justify-between`}
			>
				<Text style={tw`text-sm font-manropeSemiBold`}>Add More Items</Text>
				<SvgXml xml={iconPlus} />
			</TouchableOpacity>
			<Divider />
			<TouchableOpacity
				style={tw`flex flex-row w-full items-center justify-between bg-white p-4 shadow rounded-lg`}
				onPress={() => setPromoModalVisible(true)}
			>
				<View style={tw`flex flex-row items-center justify-start gap-4`}>
					<SvgXml xml={iconPromo} />
					<View style={tw`flex flex-col`}>
						{promo === '' ? (
							<Text style={tw`text-sm font-manropeSemiBold`}>
								Apply Promocode
							</Text>
						) : (
							<>
								<Text style={tw`text-sm font-manropeSemiBold`}>
									Promocode Applied: {promo}
								</Text>
								<Text style={tw`text-xs font-manropeRegular text-green-500`}>
									You saved ₱ {cartDetails.promocodeDiscount}
								</Text>
							</>
						)}
					</View>
				</View>
				<SvgXml xml={iconEnter} />
			</TouchableOpacity>
			<Text style={tw`w-full text-base font-manropeBold`}>Delivery Time</Text>
			<View style={tw`flex flex-row w-full items-center justify-center gap-4`}>
				<TouchableOpacity
					style={tw`flex flex-row flex-1 items-center justify-center gap-3 bg-white py-3 rounded-lg shadow-md`}
					onPress={() => setDeliveryModalVisible(true)}
				>
					<SvgXml xml={iconClock} />
					<View style={tw`flex flex-col items-center justify-start gap-1`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>
							{deliveryOption}
						</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							{deliveryOption === 'Standard'
								? '30-45 mins'
								: deliveryOption === 'Priority'
								? '15-25 mins'
								: '5-10 mins'}
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex flex-row flex-1 items-center justify-center gap-3 bg-white py-3 rounded-lg shadow-md`}
					onPress={() => {
						setShowDatePicker(true);
					}}
				>
					<SvgXml xml={iconCalendar} />
					<View style={tw`flex flex-col items-center justify-start gap-1`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>Schedule</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							{date
								? date.toLocaleTimeString([], {
										hour: '2-digit',
										minute: '2-digit',
								  })
								: 'Select Time'}
						</Text>
					</View>
				</TouchableOpacity>
				{showDatePicker && (
					<DateTimePicker
						value={date || new Date()}
						mode="time"
						display="spinner"
						onChange={onChangeTime}
						style={tw`w-full`}
						maximumDate={new Date()}
					/>
				)}
			</View>
			<View
				style={tw`flex flex-col w-full items-center border border-lightGray rounded-lg p-4 gap-2`}
			>
				<Text style={tw`text-sm font-manropeSemiBold w-full`}>
					Special Instruction
				</Text>
				<TextInput
					style={tw`w-full h-25 border border-lightGray rounded-md p-3`}
					placeholder="Add any special instructions here"
					multiline
					numberOfLines={6}
					textAlignVertical="top" // Aligns the placeholder and text to the top
				/>
			</View>
			<View style={tw`flex flex-col w-full gap-3 p-4`}>
				<View style={tw`flex flex-row items-center justify-between`}>
					<Text style={tw`text-sm font-manropeRegular text-gray`}>
						Subtotal
					</Text>
					<Text style={tw`text-sm text-gray font-manropeRegular`}>
						₱ {cartDetails.subtotal}
					</Text>
				</View>
				<View style={tw`flex flex-row items-center justify-between`}>
					<Text style={tw`text-sm font-manropeRegular text-gray`}>
						Delivery Charge
					</Text>
					<Text style={tw`text-sm text-gray font-manropeRegular`}>
						₱ {deliverCharge}
					</Text>
				</View>
				<View style={tw`flex flex-row items-center justify-between`}>
					<Text style={tw`text-sm font-manropeRegular text-gray`}>
						Promocode
					</Text>
					<Text style={tw`text-sm text-gray font-manropeRegular`}>
						₱ {cartDetails.promocodeDiscount}
					</Text>
				</View>
				<View style={tw`flex flex-row items-center justify-between`}>
					<Text style={tw`font-manropeRegular`}>Total</Text>
					<Text style={tw`font-manropeRegular`}>₱ {totalAmount}</Text>
				</View>
			</View>
			<FullRoundedButton
				text="Proceed to Checkout"
				onPress={() => {
					router.navigate('/(tabs)/order');
				}}
			/>
			<PromoModal
				modalVisible={promoModalVisible}
				setPromoModalVisible={setPromoModalVisible}
				setPromo={setPromo}
			/>
			<DeliveryModal
				modalVisible={deliveryModalVisible}
				setDeliveryModalVisible={setDeliveryModalVisible}
				setDeliveryOption={setDeliveryOption}
			/>
		</PageWrapper>
	);
}

const cartDetails = {
	id: '1',
	user: 'John Doe',
	address: '123 Main St, Cityville',
	items: [
		{
			id: '1',
			name: 'Pizza',
			image: require('../../../../assets/images/food.png'),
			quantity: 2,
			price: 453,
		},
		{
			id: '2',
			name: 'Burger',
			image: require('../../../../assets/images/food1.png'),
			quantity: 1,
			price: 297,
		},
	],
	subtotal: 750,
	promocodeDiscount: 50,
};
