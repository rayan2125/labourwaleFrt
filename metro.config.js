const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  // Your existing Metro configuration options
};

// Merge default and custom configurations
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap with Reanimated Metro Config
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
