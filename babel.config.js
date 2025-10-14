module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'], // if you’re using Expo
		plugins: [
			'react-native-reanimated/plugin', // 👈 Required for Reanimated
		],
	};
};
