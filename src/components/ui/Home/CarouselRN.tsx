import tw from '@/src/lib/tailwind';
import * as React from 'react';
import { useState } from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	useWindowDimensions,
	View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

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

export default function CarouselRN() {
	const { width: screenWidth } = useWindowDimensions();
	const parentPadding = 32; // left + right
	const carouselWidth = screenWidth - parentPadding;
	const height = 170; // you can make this flexible
	const [activeIndex, setActiveIndex] = useState(0); // Track active index

	return (
		<View style={tw`flex w-full items-center justify-center gap-3`}>
			<Carousel
				loop
				width={carouselWidth}
				height={height}
				autoPlay={true}
				data={carouselData}
				scrollAnimationDuration={1000}
				onSnapToItem={index => setActiveIndex(index)} // Update active index
				renderItem={({ item }) => (
					<View style={tw`flex-1 items-center justify-center`}>
						<Image
							source={item.image}
							style={tw`absolute top-0 left-0 w-full h-full rounded-xl`}
							resizeMode="cover"
						/>
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
					</View>
				)}
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
