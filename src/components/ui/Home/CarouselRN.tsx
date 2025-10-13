import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
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
	const scrollOffsetValue = useSharedValue<number>(0);

	return (
		<View style={{ width: '100%', height: 258 }}>
			<Carousel
				loop={true}
				width={430}
				height={258}
				snapEnabled={true}
				pagingEnabled={true}
				autoPlayInterval={2000}
				data={carouselData}
				defaultScrollOffsetValue={scrollOffsetValue}
				style={{ width: '100%' }}
				onScrollStart={() => {
					console.log('Scroll start');
				}}
				onScrollEnd={() => {
					console.log('Scroll end');
				}}
				onSnapToItem={(index: number) => console.log('current index:', index)}
				renderItem={({ item }) => (
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: item.buttonColor,
						}}
					>
						<Image
							source={item.image}
							style={{ width: '100%', height: '100%' }}
							resizeMode="cover"
						/>
						<Text
							style={{
								color: item.textColor,
								fontSize: 18,
								fontWeight: 'bold',
							}}
						>
							{item.title}
						</Text>
						<Text style={{ color: item.textColor, fontSize: 14 }}>
							{item.subtitle}
						</Text>
					</View>
				)}
			/>
		</View>
	);
}
