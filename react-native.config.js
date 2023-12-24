module.exports = {
  project: {
    // android: {
    //   unstable_reactLegacyComponentNames: ['VideoManager'],
    // },
    ios: {
      unstable_reactLegacyComponentNames: [
        'RNVVideoManager',
        'RNVVideo',
        'Video',
      ],
    },
  },
  dependencies: {
    ...(process.env.NO_FLIPPER
      ? {'react-native-flipper': {platforms: {ios: null}}}
      : {}),
  },
};
