import React from 'react';
import { View } from 'react-native';
import tw from '../lib/tailwind';

export default function Divider() {
	return <View style={tw`w-full h-0 border-b border-lightGray`} />;
}
