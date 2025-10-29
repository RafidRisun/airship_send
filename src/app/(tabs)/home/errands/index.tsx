import { iconAdd, iconLocation, iconRepeat, iconSearch } from '@/assets/icons';
import PageWrapper from '@/src/components/PageWrapper';
import Header from '@/src/components/ui/Header';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Index() {
	const router = useRouter();
	return (
		<PageWrapper>
			<StatusBar style="dark" />
			<View style={tw`flex flex-row w-full items-center justify-start gap-2`}>
				<TouchableOpacity
					style={tw`flex items-center justify-center p-3 aspect-square rounded-full bg-blue shadow-md`}
				>
					<SvgXml xml={iconLocation} />
				</TouchableOpacity>
				<View style={tw`flex flex-col items-start justify-center gap-1`}>
					<Text style={tw`font-manropeSemiBold text-sm`}>Abhi S.</Text>
					<Text style={tw`font-manropeRegular text-xs text-gray`}>
						Paco, Manilla
					</Text>
				</View>
			</View>
			<View style={tw`flex flex-col w-full h-48  items-center justify-start`}>
				<View
					style={tw`flex flex-row w-full h-11/12 items-start justify-center p-4 gap-2 bg-[#05C26A] rounded-xl`}
				>
					<Text
						style={tw`text-base font-manropeRegular text-white flex-1 px-2`}
					>
						Upto{`\n`}
						<Text style={tw`font-manropeBold text-4xl`}>30% Off </Text>
						{`\n`}
						Enjoy our offer of the day
					</Text>
					<Image
						source={require('../../../../../assets/images/errandsBanner.png')}
						style={tw`w-1/2 h-full`}
						contentFit="contain"
					/>
				</View>
				<View
					style={tw`flex flex-row items-center justify-between px-4 w-11/12 h-12 bg-white rounded-lg absolute bottom-0 shadow-md`}
				>
					<TextInput
						placeholder="Search"
						style={tw`flex-1 font-manropeRegular text-sm`}
					/>
					<SvgXml xml={iconSearch} />
				</View>
			</View>
			<Header title="Categories" seeAll={false} />
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={tw`w-full`}
				contentContainerStyle={tw`flex flex-row items-start justify-between gap-4`}
			>
				{popularCategoriesData.map(category => (
					<View
						key={category.id}
						style={tw`flex flex-col w-20 items-center justify-center gap-2`}
					>
						<TouchableOpacity
							style={tw`flex w-14 h-14 items-center justify-center bg-white shadow-md rounded-full`}
						>
							<Image
								source={category.icon}
								style={tw`w-7 h-7`}
								contentFit="contain"
							/>
						</TouchableOpacity>
						<Text style={tw`text-xs text-center font-manropeSemiBold`}>
							{category.name}
						</Text>
					</View>
				))}
			</ScrollView>
			<View style={tw`flex w-full items-center justify-center`}>
				<TouchableOpacity
					style={tw`flex flex-row items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm`}
					onPress={() => {
						router.push('/(tabs)/home/errands/requestService');
					}}
				>
					<SvgXml xml={iconAdd} />
					<Text style={tw`font-manropeSemiBold text-sm text-blue`}>
						Request a Service
					</Text>
				</TouchableOpacity>
			</View>
			<Header title="Bills Due" />
			<View style={tw`flex flex-col w-full gap-4 p-2`}>
				{billsDueData.map(bill => (
					<TouchableOpacity
						key={bill.id}
						style={tw`flex flex-row items-center gap-4`}
					>
						<View
							style={tw`flex w-14 h-14 items-center justify-center bg-white shadow-md rounded-full`}
						>
							<Image
								source={bill.icon}
								style={tw`w-7 h-7`}
								contentFit="contain"
							/>
						</View>
						<View style={tw`flex flex-col flex-1`}>
							<View
								style={tw`flex flex-row items-center justify-between flex-1`}
							>
								<Text style={tw`font-manropeBold text-sm`}>{bill.name}</Text>
								<Text style={tw`font-manropeRegular text-xs text-red-500`}>
									Due by {bill.dueDate}
								</Text>
							</View>
							<View
								style={tw`flex flex-row items-center justify-between flex-1`}
							>
								<Text style={tw`font-manropeRegular text-xs text-gray`}>
									{bill.period}
								</Text>
								<Text style={tw`font-manropeSemiBold text-sm text-blue`}>
									{bill.amount}
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				))}
			</View>
			<Header title="Popular Services" />
			<View
				style={tw`flex flex-row flex-wrap w-full items-center justify-center gap-4`}
			>
				{popularCategories.map(category => (
					<TouchableOpacity
						key={category.id}
						style={tw`flex items-center justify-center w-25 aspect-square bg-black rounded-xl`}
					>
						<Image
							source={category.icon}
							style={tw`w-full h-full rounded-lg opacity-70 absolute`}
							contentFit="cover"
						/>
						<Text style={tw`text-white font-manropeSemiBold text-sm`}>
							{category.name}
						</Text>
					</TouchableOpacity>
				))}
			</View>
			<Header title="Recent Payment" seeAll />
			<View style={tw`flex flex-col w-full gap-4 p-2`}>
				{recentPaymentsData.map(payment => (
					<TouchableOpacity
						key={payment.id}
						style={tw`flex flex-row items-center gap-4`}
					>
						<View
							style={tw`flex w-14 h-14 items-center justify-center bg-white shadow-md rounded-full`}
						>
							<Image
								source={payment.icon}
								style={tw`w-7 h-7`}
								contentFit="contain"
							/>
						</View>
						<View style={tw`flex flex-row flex-1 items-center justify-between`}>
							<View style={tw`flex flex-col`}>
								<Text style={tw`font-manropeBold text-sm`}>{payment.name}</Text>
								<View style={tw`flex flex-row items-center gap-2`}>
									<Text
										style={tw`text-xs font-manropeSemiBold ${
											payment.status === 'Paid'
												? 'text-green-500'
												: 'text-red-500'
										}`}
									>
										{payment.status}
									</Text>
									<Text style={tw`font-manropeRegular text-xs text-gray`}>
										{payment.date}
									</Text>
								</View>
							</View>
							<TouchableOpacity
								style={tw`flex flex-row items-center gap-2 border border-blue rounded-full px-3 py-1`}
							>
								<SvgXml xml={iconRepeat} />
								<Text style={tw`text-xs font-manropeRegular text-blue`}>
									Repeat
								</Text>
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				))}
			</View>
		</PageWrapper>
	);
}

const popularCategoriesData = [
	{
		id: '1',
		name: 'Repair',
		icon: require('../../../../../assets/images/repair.png'),
	},
	{
		id: '2',
		name: 'Bill Payment',
		icon: require('../../../../../assets/images/bill.png'),
	},
	{
		id: '3',
		name: 'Doc Processing',
		icon: require('../../../../../assets/images/doc.png'),
	},
	{
		id: '4',
		name: 'Recharge',
		icon: require('../../../../../assets/images/recharge.png'),
	},
	{
		id: '5',
		name: 'Repair',
		icon: require('../../../../../assets/images/repair.png'),
	},
	{
		id: '6',
		name: 'Bill Payment',
		icon: require('../../../../../assets/images/bill.png'),
	},
	{
		id: '7',
		name: 'Doc Processing',
		icon: require('../../../../../assets/images/doc.png'),
	},
	{
		id: '8',
		name: 'Recharge',
		icon: require('../../../../../assets/images/recharge.png'),
	},
];

const billsDueData = [
	{
		id: '1',
		name: 'Electricity Bill',
		period: 'May 2024',
		amount: '₱2,500.00',
		dueDate: 'June 10, 2024',
		icon: require('../../../../../assets/images/homeBill.png'),
	},
	{
		id: '2',
		name: 'Recharge',
		period: 'May 2024',
		amount: '₱1,200.00',
		dueDate: 'June 15, 2024',
		icon: require('../../../../../assets/images/recharge.png'),
	},
];

const popularCategories = [
	{
		id: '1',
		name: 'Assembly',
		icon: require('../../../../../assets/images/assembly.png'),
	},
	{
		id: '2',
		name: 'Mounting',
		icon: require('../../../../../assets/images/mounting.png'),
	},
	{
		id: '3',
		name: 'Moving',
		icon: require('../../../../../assets/images/moving.png'),
	},
	{
		id: '4',
		name: 'Painting',
		icon: require('../../../../../assets/images/painting.png'),
	},
	{
		id: '5',
		name: 'Outdoor',
		icon: require('../../../../../assets/images/outdoor.png'),
	},
	{
		id: '6',
		name: 'Cleaning',
		icon: require('../../../../../assets/images/cleaning.png'),
	},
];

const recentPaymentsData = [
	{
		id: '1',
		name: 'Furniture Repair',
		date: 'June 1, 2024',
		amount: '₱3,500.00',
		icon: require('../../../../../assets/images/repair.png'),
		status: 'Paid',
	},
	{
		id: '2',
		name: 'Mobile Recharge',
		date: 'May 28, 2024',
		amount: '₱800.00',
		icon: require('../../../../../assets/images/recharge.png'),
		status: 'Paid',
	},
	{
		id: '3',
		name: 'EMI Payment',
		date: 'May 25, 2024',
		amount: '₱1,200.00',
		icon: require('../../../../../assets/images/bill.png'),
		status: 'Pending',
	},
];
