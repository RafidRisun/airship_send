import { iconClose } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import {
	KeyboardAvoidingView,
	Platform,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Modal from 'react-native-modal';
import { SvgXml } from 'react-native-svg';

export default function DeliveryModal({
	modalVisible,
	setDeliveryModalVisible,
	setDeliveryOption,
}: {
	modalVisible: boolean;
	setDeliveryModalVisible: (visible: boolean) => void;
	setDeliveryOption: (option: 'Standard' | 'Priority' | 'VIP') => void;
}) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
		>
			<Modal
				animationIn="slideInUp"
				backdropColor="black"
				backdropOpacity={0.5}
				isVisible={modalVisible}
				avoidKeyboard
			>
				<View style={tw`flex flex-col bg-white rounded-xl gap-2 p-4`}>
					<TouchableOpacity
						style={tw`absolute top-4 right-4 z-50`}
						onPress={() => setDeliveryModalVisible(false)}
					>
						<SvgXml xml={iconClose} />
					</TouchableOpacity>
					<Text style={tw`text-base font-manropeBold`}>
						Select Delivery Option
					</Text>
					<TouchableOpacity
						onPress={() => {
							setDeliveryOption('Standard');
							setDeliveryModalVisible(false);
						}}
						style={tw`flex flex-row gap-4 items-center justify-between px-3 py-2 rounded-lg bg-white shadow-sm w-full`}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<Text style={tw`text-sm font-manropeRegular`}>Standard</Text>
							<Text style={tw`text-xs font-manropeRegular text-gray`}>
								30-45 mins
							</Text>
						</View>
						<Text style={tw`text-sm font-manropeRegular text-blue`}>₱ 40</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setDeliveryOption('Priority');
							setDeliveryModalVisible(false);
						}}
						style={tw`flex flex-row gap-4 items-center justify-between px-3 py-2 rounded-lg bg-white shadow-sm w-full`}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<Text style={tw`text-sm font-manropeRegular`}>Priority</Text>
							<Text style={tw`text-xs font-manropeRegular text-gray`}>
								15-25 mins
							</Text>
						</View>
						<Text style={tw`text-sm font-manropeRegular text-blue`}>₱ 80</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setDeliveryOption('VIP');
							setDeliveryModalVisible(false);
						}}
						style={tw`flex flex-row gap-4 items-center justify-between px-3 py-2 rounded-lg bg-white shadow-sm w-full`}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<Text style={tw`text-sm font-manropeRegular`}>VIP</Text>
							<Text style={tw`text-xs font-manropeRegular text-gray`}>
								5-10 mins
							</Text>
						</View>
						<Text style={tw`text-sm font-manropeRegular text-blue`}>₱ 120</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</KeyboardAvoidingView>
	);
}
