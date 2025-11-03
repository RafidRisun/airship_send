import { iconClose } from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import tw from '@/src/lib/tailwind';
import { useState } from 'react';
import {
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import Modal from 'react-native-modal';
import { SvgXml } from 'react-native-svg';

export default function PromoModal({
	modalVisible,
	setModalVisible,
	setPromo,
}: {
	modalVisible: boolean;
	setModalVisible: (visible: boolean) => void;
	setPromo: (promo: string) => void;
}) {
	const [promo, setLocalPromo] = useState('');
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
			>
				<View style={tw`flex flex-col bg-white rounded-xl gap-2 p-4`}>
					<TouchableOpacity
						style={tw`absolute top-4 right-4 z-50`}
						onPress={() => setModalVisible(false)}
					>
						<SvgXml xml={iconClose} />
					</TouchableOpacity>
					<Text style={tw`text-base font-manropeBold`}>Apply Promo Code</Text>
					<View style={tw`flex flex-col gap-2 w-full mb-10`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>Promo Code</Text>
						<TextInput
							style={tw`border border-lightGray rounded-lg p-2`}
							placeholder="Enter Promo Code"
							value={promo}
							onChangeText={setLocalPromo}
						/>
					</View>
					<FullRoundedButton
						text="Apply"
						onPress={() => {
							setPromo(promo);
							setModalVisible(false);
						}}
					/>
				</View>
			</Modal>
		</KeyboardAvoidingView>
	);
}
