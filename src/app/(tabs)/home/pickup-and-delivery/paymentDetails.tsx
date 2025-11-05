import {
	iconCalendar,
	iconCash,
	iconClock,
	iconClose,
	iconEnter,
	iconMastercard,
	iconPromo,
	iconVisa,
} from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { SvgXml } from 'react-native-svg';
import DeliveryModal from '../../cart/deliveryModal';
import PromoModal from '../../cart/promoModal';

export default function PaymentDetails() {
	const router = useRouter();
	const [promoModalVisible, setPromoModalVisible] = useState(false);
	const [promo, setPromo] = useState('');

	const [tip, setTip] = useState<number | null>(null);

	const [customTip, setCustomTip] = useState<string>('');

	const [customTipModalVisible, setCustomTipModalVisible] = useState(false);

	const [deliveryModalVisible, setDeliveryModalVisible] = useState(false);

	const [deliveryOption, setDeliveryOption] = useState<
		'Standard' | 'Priority' | 'VIP'
	>('Standard');

	const [showDatePicker, setShowDatePicker] = useState(false);

	const [date, setDate] = useState<Date | null>(null);

	const [paymentMethod, setPaymentMethod] = useState<
		'Cash' | 'Master' | 'Visa' | null
	>(null);

	const [paymentMethodModalVisible, setPaymentMethodModalVisible] =
		useState(false);

	const onChangeTime = (event: any, selectedDate?: Date) => {
		const currentDate = selectedDate || date;
		setShowDatePicker(false);
		setDate(currentDate);
	};

	const handleCustomTipSubmit = () => {
		const tipAmount = parseInt(customTip, 10);
		if (!isNaN(tipAmount)) {
			setTip(tipAmount);
		}
		setCustomTipModalVisible(false);
	};

	const handleSetTip = (amount: number) => () => {
		setTip(amount);
		setCustomTip('');
	};

	return (
		<PageWrapper>
			<View
				style={tw`flex flex-row items-start justify-between w-80 px-4 mb-2`}
			>
				<View style={tw`flex flex-col items-center justify-center gap-2`}>
					<View
						style={tw`w-6 h-6 bg-blue rounded-full flex items-center justify-center`}
					/>
					<View style={tw`w-20 h-1 bg-blue absolute top-2.5 left-12`} />
					<Text
						style={tw`text-xs text-blue font-manropeSemiBold text-center w-17`}
					>
						Personal Details
					</Text>
				</View>
				<View style={tw`flex flex-col items-center justify-center gap-2`}>
					<View
						style={tw`w-6 h-6 bg-blue rounded-full flex items-center justify-center`}
					/>
					<View style={tw`w-20 h-1 bg-blue absolute top-2.5 left-12`} />
					<Text
						style={tw`text-xs text-gray font-manropeSemiBold text-center w-17`}
					>
						Package Description
					</Text>
				</View>
				<View style={tw`flex flex-col items-center justify-center gap-2`}>
					<View
						style={tw`w-6 h-6 bg-blue rounded-full flex items-center justify-center`}
					>
						<View style={tw`w-3 h-3 bg-white rounded-full`} />
					</View>
					<Text
						style={tw`text-xs text-gray font-manropeSemiBold text-center w-17`}
					>
						Payment Details
					</Text>
				</View>
			</View>
			<TouchableOpacity
				style={tw`flex flex-row w-full items-center justify-between bg-white p-4 border border-lightGray rounded-lg`}
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
									You saved ₱ 100
								</Text>
							</>
						)}
					</View>
				</View>
				<SvgXml xml={iconEnter} />
			</TouchableOpacity>

			<View
				style={tw`flex flex-col w-full p-4 border border-lightGray rounded-lg gap-2`}
			>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Add Tip</Text>
					<View
						style={tw`flex flex-row w-full items-center justify-between gap-2`}
					>
						<TouchableOpacity
							style={tw`flex items-center justify-center flex-1 py-2 border ${
								tip === 10 ? 'border-blue' : 'border-lightGray'
							} rounded-lg`}
							onPress={handleSetTip(10)}
						>
							<Text
								style={tw`text-sm font-manropeSemiBold ${
									tip === 10 ? 'text-blue' : 'text-black'
								}`}
							>
								₱ 10
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex items-center justify-center flex-1 px-3 py-2 border ${
								tip === 20 ? 'border-blue' : 'border-lightGray'
							} rounded-lg`}
							onPress={() => setTip(20)}
						>
							<Text
								style={tw`text-sm font-manropeSemiBold ${
									tip === 20 ? 'text-blue' : 'text-black'
								}`}
							>
								₱ 20
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex items-center justify-center flex-1 px-3 py-2 border ${
								tip === 40 ? 'border-blue' : 'border-lightGray'
							} rounded-lg`}
							onPress={() => setTip(40)}
						>
							<Text
								style={tw`text-sm font-manropeSemiBold ${
									tip === 40 ? 'text-blue' : 'text-black'
								}`}
							>
								₱ 40
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex items-center justify-center flex-1 px-3 py-2 border ${
								tip !== 10 && tip !== 20 && tip !== 40 && tip !== null
									? 'border-blue'
									: 'border-lightGray'
							} rounded-lg`}
							onPress={() => setCustomTipModalVisible(true)}
						>
							<Text
								style={tw`text-sm font-manropeSemiBold ${
									tip !== 10 && tip !== 20 && tip !== 40 && tip !== null
										? 'text-blue'
										: 'text-black'
								}`}
							>
								{tip !== 10 && tip !== 20 && tip !== 40 && tip !== null
									? tip
									: 'Custom'}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View
				style={tw`flex flex-col w-full p-4 border border-lightGray rounded-lg gap-2`}
			>
				<View style={tw`flex flex-col w-full px-2 gap-2`}>
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<Text style={tw`text-sm font-manropeRegular`}>Product1 Price</Text>
						<Text style={tw`text-sm font-manropeSemiBold`}>₱ 1260</Text>
					</View>
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<Text style={tw`text-sm font-manropeRegular`}>Product2 Price</Text>
						<Text style={tw`text-sm font-manropeSemiBold`}>₱ 2630</Text>
					</View>
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<Text style={tw`text-sm font-manropeRegular`}>Delivery Fee</Text>
						<Text style={tw`text-sm font-manropeSemiBold`}>₱ 260</Text>
					</View>
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<Text style={tw`text-sm font-manropeRegular`}>Tax</Text>
						<Text style={tw`text-sm font-manropeSemiBold`}>₱ 65</Text>
					</View>
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<Text style={tw`text-sm font-manropeRegular`}>Tip</Text>
						<Text style={tw`text-sm font-manropeSemiBold`}>₱ 70</Text>
					</View>
					<View style={tw`w-full h-0.5 bg-lightGray`} />
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<Text style={tw`text-base font-manropeBold`}>Total</Text>
						<Text style={tw`text-base font-manropeBold`}>₱ 4360</Text>
					</View>
				</View>
			</View>

			<View style={tw`flex flex-col gap-2 w-full`}>
				<Text style={tw`text-sm font-manropeSemiBold w-full`}>
					Who will pay?
				</Text>
				<View style={tw`flex flex-row items-center gap-4`}>
					<TouchableOpacity
						style={tw`flex items-center justify-center flex-1 py-3 bg-white rounded-lg shadow-md`}
					>
						<Text style={tw`text-sm font-manropeSemiBold`}>Sender</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex items-center justify-center flex-1 py-3 bg-white rounded-lg shadow-md`}
					>
						<Text style={tw`text-sm font-manropeSemiBold`}>Receiver</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={tw`flex flex-col gap-2 w-full`}>
				<Text style={tw`text-sm font-manropeSemiBold w-full`}>
					Who will pay?
				</Text>
				<View
					style={tw`flex flex-row w-full items-center justify-center gap-4`}
				>
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
			</View>

			<PromoModal
				modalVisible={promoModalVisible}
				setPromoModalVisible={setPromoModalVisible}
				setPromo={setPromo}
			/>

			<View
				style={tw`flex flex-col w-full p-4 border border-lightGray rounded-lg gap-2`}
			>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>
						Choose payment Method
					</Text>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between bg-white p-4 border border-lightGray rounded-lg`}
						onPress={() => setPaymentMethodModalVisible(true)}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<SvgXml
								xml={
									paymentMethod === 'Cash'
										? iconCash
										: paymentMethod === 'Master'
										? iconMastercard
										: iconVisa
								}
							/>
							<Text style={tw`text-sm font-manropeRegular`}>
								{paymentMethod === 'Cash'
									? 'Cash'
									: paymentMethod === 'Master'
									? 'Master Card'
									: 'Visa'}
							</Text>
						</View>
						<SvgXml xml={iconEnter} />
					</TouchableOpacity>
				</View>
			</View>

			<DeliveryModal
				modalVisible={deliveryModalVisible}
				setDeliveryModalVisible={setDeliveryModalVisible}
				setDeliveryOption={setDeliveryOption}
			/>

			<Modal
				animationIn="slideInUp"
				backdropColor="black"
				backdropOpacity={0.5}
				isVisible={customTipModalVisible}
			>
				<View style={tw`flex w-80 bg-white p-6 rounded-lg shadow-lg m-4`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Add a custom tip</Text>
					<TextInput
						value={customTip}
						onChangeText={setCustomTip}
						keyboardType="numeric"
						style={tw`w-full h-12 border border-lightGray rounded-md p-3 mt-4 mb-6`}
						placeholder="Enter tip amount"
					/>
					<FullRoundedButton text="Submit" onPress={handleCustomTipSubmit} />
					<TouchableOpacity
						style={tw`absolute top-4 right-4`}
						onPress={() => setCustomTipModalVisible(false)}
					>
						<SvgXml xml={iconClose} />
					</TouchableOpacity>
				</View>
			</Modal>

			<Modal
				animationIn="slideInUp"
				backdropColor="black"
				backdropOpacity={0.5}
				isVisible={paymentMethodModalVisible}
			>
				<View style={tw`flex w-80 bg-white p-6 rounded-lg shadow-lg m-4`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>
						Choose Payment Method
					</Text>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between bg-white p-4 border border-lightGray rounded-lg mt-4`}
						onPress={() => {
							setPaymentMethod('Cash');
							setPaymentMethodModalVisible(false);
						}}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<SvgXml xml={iconCash} />
							<Text style={tw`text-sm font-manropeRegular`}>Cash</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between bg-white p-4 border border-lightGray rounded-lg mt-4`}
						onPress={() => {
							setPaymentMethod('Master');
							setPaymentMethodModalVisible(false);
						}}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<SvgXml xml={iconMastercard} />
							<Text style={tw`text-sm font-manropeRegular`}>Master Card</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between bg-white p-4 border border-lightGray rounded-lg mt-4`}
						onPress={() => {
							setPaymentMethod('Visa');
							setPaymentMethodModalVisible(false);
						}}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<SvgXml xml={iconVisa} />
							<Text style={tw`text-sm font-manropeRegular`}>Visa</Text>
						</View>
					</TouchableOpacity>
				</View>
			</Modal>

			<FullRoundedButton
				text="Place Order"
				onPress={() => {
					router.navigate('/(tabs)/order');
				}}
			/>
		</PageWrapper>
	);
}
