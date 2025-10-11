// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import tw from '@/src/lib/tailwind';

// export default function TextInput({
//     leftIcon,
//     placeholder,
//     value,
//     onChangeText,
//     rightIcon
// }: {
//     leftIcon: string;
//     placeholder: string;
//     value: string;
//     onChangeText: (text: string) => void;
//     rightIcon: string;
// }) {
//   return (
// 		<View
// 			style={tw`w-full flex flex-row items-center justify-between gap-2 px-4 py-1 border border-gray-200 rounded-xl`}
// 		>
// 			<SvgXml xml={leftIcon} />
// 			<TextInput
// 				placeholder={placeholder}
// 				keyboardType="phone-pad"
// 				value={phone}
// 				onChangeText={setPhone}
// 				style={tw`flex-1`}
// 			/>
// 			<TouchableOpacity style={tw`flex px-1 py-3`}>
// 				<SvgXml xml={iconVisible} />
// 			</TouchableOpacity>
// 		</View>
// 	);
// }
