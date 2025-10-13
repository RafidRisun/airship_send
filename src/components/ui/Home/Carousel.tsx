import tw from '@/src/lib/tailwind';
import { ImageBackground } from 'expo-image';
import React, { useEffect, useState } from 'react';
import {
	Dimensions,
	FlatList,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default function Carousel() {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(prevIndex => (prevIndex + 1) % carouselData.length);
		}, 6000); // Switch every 6 seconds

		return () => clearInterval(interval); // Cleanup interval on unmount
	}, []);

	useEffect(() => {
		// Scroll to the active index whenever it changes
		flatListRef?.current?.scrollToOffset({
			offset: activeIndex * (screenWidth - 32),
			animated: true,
		});
	}, [activeIndex]);

	const flatListRef = React.useRef<FlatList>(null);

	return (
		<View style={tw`flex w-full items-center justify-center gap-3`}>
			{/* FlatList Container */}
			<FlatList
				ref={flatListRef}
				data={carouselData}
				renderItem={({ item }) => (
					<ImageBackground
						source={item.image}
						contentFit="cover"
						style={[{ height: 160 }, { width: screenWidth - 32 }]}
					>
						<View style={tw`absolute top-5 left-5 gap-2`}>
							<Text style={tw`text-${item.textColor} font-manropeBold text-lg`}>
								{item.title}
							</Text>
							<Text
								style={tw`text-${item.textColor} font-manropeRegular text-sm w-3/5`}
							>
								{item.subtitle}
							</Text>
							<TouchableOpacity
								style={tw`self-start bg-[${item.buttonColor}] px-3 py-2 rounded-full mt-2`}
							>
								<Text
									style={tw`text-[${item.buttonTextColor}] font-manropeBold text-xs`}
								>
									{item.buttonText}
								</Text>
							</TouchableOpacity>
						</View>
					</ImageBackground>
				)}
				keyExtractor={item => item.id}
				pagingEnabled={true}
				horizontal
				showsHorizontalScrollIndicator={false}
				snapToAlignment="start"
				snapToInterval={screenWidth - 32}
				decelerationRate="fast"
				onMomentumScrollEnd={event => {
					const index = Math.round(
						event.nativeEvent.contentOffset.x / (screenWidth - 32)
					);
					setActiveIndex(index);
				}}
			/>
			{/* Indicator Dots */}
			<View style={tw`flex flex-row items-center justify-center w-full gap-2`}>
				{carouselData.map((_, index) => (
					<View
						key={index}
						style={[
							tw`rounded-full h-2`,
							{
								width: activeIndex === index ? 24 : 8,
								backgroundColor: activeIndex === index ? '#017ADF' : '#A0A0A0',
							},
						]}
					/>
				))}
			</View>
		</View>
	);
}

const carouselData = [
	{
		id: '1',
		title: 'Free Delivery',
		subtitle: 'Enjoy your First food order with free delivery access ',
		textColor: 'white',
		buttonText: 'Order Now',
		buttonColor: '#FFFFFF',
		buttonTextColor: '#017ADF',
		image: require('../../../../assets/images/carousel1.png'),
	},
	{
		id: '2',
		title: 'Instant 25% back on rides',
		subtitle: 'Earn rewards on your first 3 rides getting cashback instantly',
		textColor: 'black',
		buttonText: 'Book Now',
		buttonColor: '#017ADF',
		buttonTextColor: '#FFFFFF',
		image: require('../../../../assets/images/carousel2.png'),
	},
	{
		id: '3',
		title: 'Get 10% off',
		subtitle: 'On every Purchase of $ 30 in groceries',
		textColor: 'black',
		buttonText: 'Claim Now',
		buttonColor: '#017ADF',
		buttonTextColor: '#FFFFFF',
		image: require('../../../../assets/images/carousel3.png'),
	},
];
