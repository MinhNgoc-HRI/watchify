import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {clamp} from 'react-native-awesome-slider/src/utils';
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated, {
  SharedValue,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {springConfig, VIDEO_MIN_HEIGHT} from './utils';
import {palette} from '../Player/palette';

import {
  PlayerContext,
  setPlayerPaused,
  setPlayerPoint,
} from '@src/stores/player';
import Player, {PlayerRef} from '../Player';
import {Text, heightLize, fontSizeLine, widthLize, Box} from 'pmn-rn-component';
import IconClose from '@src/assets/svg/IconClose';
import {DIMENSION} from '@src/utils/dimension';
import {BOTTOM_TAB_HEIGHT} from '@src/navigation/components/BottomTabBar';
import {PosterResizeModeType, ResizeMode, OnSeekData} from 'react-native-video';
import {useFilmStore} from '@src/stores/film';
import Content from './Content';
import {baseImgUrl} from '@src/api/config';
import {createThumbnail} from 'react-native-create-thumbnail';
const BoxAnimated = Animated.createAnimatedComponent(Box);
const {height, width, isIOS} = DIMENSION;

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const sliderTranslateY = 6;
const VIDEO_DEFAULT_HEIGHT = width * (9 / 16);
/* android tùy loại mới work..đéo hiểu kiểu gì   */
const StatusBarHeight = isIOS
  ? 0
  : StatusBar?.currentHeight
  ? StatusBar?.currentHeight - 5
  : 5;

export const PlayerAnimted = ({
  videoTranslateY,
}: {
  videoTranslateY: SharedValue<number>;
}) => {
  const insets = useSafeAreaInsets();
  // const insetsRefs = useRef(insets);
  const {film, episode} = useFilmStore();
  const bufferTime = useSharedValue<number>(0);
  const btheight =
    BOTTOM_TAB_HEIGHT +
    5; /* +5 để thêm khoảng trống giữa video khi ở snapshot(1) và bottom tab   */

  const {store, dispatch} = useContext(PlayerContext);
  const DISMISS_POINT = height - btheight;
  const SNAP_POINT = [
    0,
    height + StatusBarHeight - VIDEO_MIN_HEIGHT - btheight,
  ];
  const diasbled = Boolean(store.snapPoint > SNAP_POINT[0]);
  const paused = Boolean(store.paused || store.snapPoint === -1);

  const isTapPaused = useRef(paused);

  const sheetTranslationY = useSharedValue(0);
  const panTranslationY = useSharedValue(0);
  const videoScale = useSharedValue(1);
  const videoTransY = useSharedValue(0);

  const videoPlayerRef = useRef<PlayerRef | null>(null);
  const videoHeight = useSharedValue(VIDEO_DEFAULT_HEIGHT);
  const videoWidth = useSharedValue(width);
  const isFullScreen = useSharedValue(false);
  const panIsVertical = useSharedValue(false);
  const snapPointIndex = useSharedValue(store.snapPoint);
  const [thumbnail, setThumbnail] = useState('');
  const pageStyle = useAnimatedStyle(() => {
    const y = panTranslationY.value + sheetTranslationY.value;
    return {
      transform: [
        {
          translateY: clamp(y, 0, height - btheight),
        },
      ],
      backgroundColor: isFullScreen.value ? '#000' : 'transparent',
    };
  }, [panTranslationY, sheetTranslationY]);

  const getVideoContainerStyle = useAnimatedStyle(() => {
    const y = panTranslationY.value + sheetTranslationY.value;
    return {
      // backgroundColor: isFullScreen.value ? '#000' : '#141414',
      backgroundColor: '#000',
      opacity: interpolate(y, [SNAP_POINT[1], DISMISS_POINT], [1, 0]),
    };
  }, [panTranslationY, sheetTranslationY]);
  const customAnimationStyle = useAnimatedStyle(() => {
    const y = panTranslationY.value + sheetTranslationY.value;

    const targetHeight = videoHeight.value * ((height - y) / height);

    let targetWidth = videoWidth.value;

    if (targetHeight < VIDEO_MIN_HEIGHT) {
      const widthScale = clamp((height - y) / y, 0, 1);
      targetWidth = videoWidth.value * widthScale;
    }
    return {
      transform: [
        {
          scale: videoScale.value,
        },
        {
          translateY: videoTransY.value,
        },
      ],
      height: isFullScreen.value
        ? width
        : clamp(targetHeight, 67.5, VIDEO_DEFAULT_HEIGHT),
      width: isFullScreen.value ? height : clamp(targetWidth, 120, width),
    };
  }, [panTranslationY, sheetTranslationY]);
  const getContentStyle = useAnimatedStyle(() => {
    const y = panTranslationY.value + sheetTranslationY.value;
    return {
      opacity: interpolate(
        y,
        [VIDEO_MIN_HEIGHT, height - VIDEO_DEFAULT_HEIGHT],
        [1, 0],
      ),
      backgroundColor: interpolateColor(
        y,
        [VIDEO_MIN_HEIGHT, height - VIDEO_DEFAULT_HEIGHT],
        ['#000', 'transparent'],
      ),
    };
  }, [panTranslationY, sheetTranslationY]);
  const getBackdropStyle = useAnimatedStyle(() => {
    const y = panTranslationY.value + sheetTranslationY.value;
    return {
      opacity: interpolate(
        y,
        [VIDEO_MIN_HEIGHT, height - VIDEO_DEFAULT_HEIGHT],
        [0, 1],
      ),
      backgroundColor: interpolateColor(
        y,
        [VIDEO_MIN_HEIGHT, height - VIDEO_DEFAULT_HEIGHT],
        ['#141414', 'transparent'],
      ),
    };
  }, [panTranslationY, sheetTranslationY]);

  const getViewBackdropStyle = useAnimatedStyle(() => {
    const y = panTranslationY.value + sheetTranslationY.value;

    return {
      opacity: interpolate(y, [-100, height - VIDEO_DEFAULT_HEIGHT], [1, 0]),
    };
  }, [panTranslationY, sheetTranslationY]);

  const videoThumbInfo = useAnimatedStyle(() => {
    const y = panTranslationY.value + sheetTranslationY.value;
    const targetHeight = videoHeight.value * ((height - y) / height);
    let targetWidth = videoWidth.value;
    if (targetHeight < VIDEO_MIN_HEIGHT) {
      const widthScale = clamp((height - y) / y, 0, 1);
      targetWidth = videoWidth.value * widthScale;
    }
    const w = width - clamp(targetWidth, 120, width);
    const opacity = interpolate(
      y,
      [VIDEO_DEFAULT_HEIGHT + VIDEO_MIN_HEIGHT, height - VIDEO_MIN_HEIGHT],
      [0, 1],
    );

    return {
      width: w,
      opacity: isFullScreen.value ? 0 : opacity,
    };
  });
  const playAnimated = useDerivedValue(() => {
    return paused ? 0.5 : 0;
  }, [paused]);
  const playAnimatedProps = useAnimatedProps(() => {
    return {
      progress: withTiming(playAnimated.value),
    };
  });

  const translationBySnapPointIndex = useCallback(
    (snapIndex: number) => {
      'worklet';
      snapPointIndex.value = snapIndex;

      switch (snapIndex) {
        case -1:
          sheetTranslationY.value = videoTranslateY.value = withSpring(
            DISMISS_POINT,
            springConfig,
          );
          break;
        default:
          sheetTranslationY.value = videoTranslateY.value = withSpring(
            SNAP_POINT[snapIndex],
            springConfig,
          );
          break;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [DISMISS_POINT, SNAP_POINT],
  );

  useEffect(() => {
    translationBySnapPointIndex(store.snapPoint);
  }, [store.snapPoint, translationBySnapPointIndex]);

  const renderBubble = useCallback(() => {
    return (
      <FastImage
        source={{uri: thumbnail}}
        style={styles.snapshot}
        resizeMode="cover"
      />
    );
  }, [thumbnail]);

  /**
   * on pan event
   */
  const onHandlerEndOnJS = (point: number) => {
    dispatch(setPlayerPoint(point));
  };
  const onStartOnJS = () => {
    videoPlayerRef?.current?.toggleControlViewOpacity(false);
  };
  /**
   * Toggle player full screen state on <Video> component
   */
  const enterFullScreen = () => {
    videoPlayerRef?.current?.toggleFullSreen(true);
  };

  const exitFullScreen = () => {
    videoPlayerRef?.current?.toggleFullSreen(false);
  };
  const panGesture = Gesture.Pan()
    .onStart(({velocityY, velocityX}) => {
      panIsVertical.value = Math.abs(velocityY) > Math.abs(velocityX);
      runOnJS(onStartOnJS)();
    })
    .onUpdate(({translationY}) => {
      if (!panIsVertical.value) {
        return;
      }
      if (isFullScreen.value) {
        if (translationY > 0 && Math.abs(translationY) < 100) {
          videoScale.value = clamp(0.9, 1 - Math.abs(translationY) * 0.008, 1);
          videoTransY.value = translationY;
        }
      } else {
        if (
          translationY < 0 &&
          Math.abs(translationY) < 40 &&
          snapPointIndex.value === 0
        ) {
          videoScale.value = Math.abs(translationY) * 0.012 + 1;
        }
        panTranslationY.value = translationY;
        videoTranslateY.value = sheetTranslationY.value + translationY;
      }
    })
    .onEnd(({velocityY, translationY}, success) => {
      if (!panIsVertical.value) {
        return;
      }
      videoPlayerRef.current?.toggleControlViewOpacity(false);

      if (isFullScreen.value) {
        if (translationY >= 100) {
          runOnJS(exitFullScreen)();
        }
      } else {
        if (-translationY >= 40 && snapPointIndex.value === 0) {
          runOnJS(enterFullScreen)();
        }
        const dragToss = 0.2;
        const endOffsetY =
          sheetTranslationY.value +
          panTranslationY.value +
          velocityY * dragToss;

        if (
          !success &&
          endOffsetY < SNAP_POINT[SNAP_POINT.length - 1] &&
          store.snapPoint < endOffsetY
        ) {
          return;
        }
        let destSnapPoint = SNAP_POINT[0];
        let pointIndex = 0;

        if (snapPointIndex.value === 1 && translationY > 0) {
          const y =
            sheetTranslationY.value + panTranslationY.value + velocityY * 0.05;
          if (y > DISMISS_POINT - VIDEO_MIN_HEIGHT / 2) {
            destSnapPoint = DISMISS_POINT;
            pointIndex = -1;
          } else {
            destSnapPoint = SNAP_POINT[1];
            pointIndex = 1;
          }
        } else {
          pointIndex = SNAP_POINT.findIndex(point => {
            const distFromSnap = Math.abs(point - endOffsetY);
            return distFromSnap < Math.abs(destSnapPoint - endOffsetY);
          });

          if (pointIndex > -1) {
            destSnapPoint = SNAP_POINT[pointIndex];
          } else {
            pointIndex = 0;
          }
        }

        snapPointIndex.value = pointIndex;

        const finalSheetValue = sheetTranslationY.value + panTranslationY.value;
        panTranslationY.value = 0;

        sheetTranslationY.value = videoTranslateY.value = finalSheetValue;
        sheetTranslationY.value = videoTranslateY.value = withSpring(
          destSnapPoint,
          springConfig,
        );
        runOnJS(onHandlerEndOnJS)(pointIndex);
      }
      videoTransY.value = 0;
      videoScale.value = withTiming(1);
    });

  const foldVideo = () => {
    videoPlayerRef.current?.toggleControlViewOpacity(false);
    translationBySnapPointIndex(1);
    dispatch(setPlayerPoint(1));
  };
  const onPostSeek = (data: OnSeekData) => {
    if (data.currentTime > 0) {
      return;
    }
    createThumbnail({
      url: film?.episodes?.[0]?.server_data?.[0]?.link_m3u8 || '',
      timeStamp: data.seekTime,
    })
      .then(response => {
        console.log({response});
        setThumbnail(response.path);
      })
      .catch(err => console.log({err}));
  };
  return (
    <>
      <BoxAnimated
        pointerEvents={'none'}
        color={palette.B(1)}
        style={[styles.backdrop, getViewBackdropStyle]}
      />
      <BoxAnimated
        pointerEvents={store.snapPoint === 0 ? 'auto' : 'box-none'}
        // padding={[insets.top, 0, insets.left, insets.right]}
        padding={[insets.top, 0, 0, 0]}
        style={[styles.pageView, pageStyle]}>
        <GestureDetector gesture={panGesture}>
          <BoxAnimated overflow="hidden" style={getVideoContainerStyle}>
            <BoxAnimated style={[styles.videoThumbInfo, videoThumbInfo]}>
              <Box flex={1} middle alignItems="flex-start">
                <Text
                  size={12}
                  numberOfLines={1}
                  color="#FFF">{`${film?.name}`}</Text>
                <Text
                  marginTop={heightLize(2)}
                  numberOfLines={1}
                  size={fontSizeLine(12)}
                  lineHeight={fontSizeLine(16)}
                  color={palette.G4(1)}>
                  {film?.actor?.[0]}
                </Text>
              </Box>

              <Box row middle center>
                <TouchableWithoutFeedback
                  onPress={() => {
                    dispatch(setPlayerPaused(!paused));
                  }}>
                  <AnimatedLottieView
                    animatedProps={playAnimatedProps}
                    source={require('../../assets/json/lottie-play.json')}
                    style={styles.playIcon}
                  />
                </TouchableWithoutFeedback>
                <Box width={widthLize(20)} />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    dispatch(setPlayerPoint(-1));
                  }}>
                  <IconClose
                    color="rgb(228, 228, 228)"
                    width={30}
                    height={30}
                  />
                </TouchableOpacity>
              </Box>
            </BoxAnimated>
            <Player
              source={{
                uri: episode?.link_m3u8 || '',
              }}
              showOnStart={false}
              poster={`${baseImgUrl}/${film?.poster_url}`}
              posterResizeMode={PosterResizeModeType.COVER}
              headerBarTitle={`${film?.name}`}
              onTapBack={foldVideo}
              paused={paused}
              onPausedChange={state => {
                dispatch(setPlayerPaused(state));
              }}
              onTapPause={state => {
                isTapPaused.current = state;
              }}
              onTapMore={() => {
                // optionsModalRef.current?.present();
              }}
              videoDefaultHeight={VIDEO_DEFAULT_HEIGHT}
              //   ref={videoPlayerRef}
              sliderProps={{
                renderBubble: renderBubble,
                bubbleTranslateY: -60,
                bubbleWidth: 120,
                bubbleMaxWidth: 120,
                disable: diasbled,
                cache: bufferTime,
              }}
              videoHeight={videoHeight}
              customAnimationStyle={customAnimationStyle}
              onCustomPanGesture={panGesture}
              style={{marginBottom: sliderTranslateY}}
              resizeMode={ResizeMode.CONTAIN}
              isFullScreen={isFullScreen}
              disableControl={diasbled}
              onPostProgress={data =>
                (bufferTime.value = data?.playableDuration || 0)
              }
              onPostSeek={onPostSeek}
              onError={e => console.log({e})}
            />
          </BoxAnimated>
        </GestureDetector>
        {/* <BoxAnimated color="#141414" style={[styles.sliderTranslate]} /> */}
        <BoxAnimated
          width={width}
          height={height - VIDEO_DEFAULT_HEIGHT}
          pointerEvents={store.snapPoint === 1 ? 'none' : 'auto'}
          style={[styles.flex1, getContentStyle]}>
          <ScrollView>
            {/* content video here */}
            <Content data={film} episode={episode} />
            {/* content video here */}
          </ScrollView>
          <BoxAnimated
            pointerEvents="none"
            style={[styles.backdrop, getBackdropStyle]}
          />
        </BoxAnimated>
      </BoxAnimated>
    </>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    // minHeight: height,
  },
  authors: {
    justifyContent: 'space-between',
    marginTop: 12,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 12,
  },

  title: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 8,
    justifyContent: 'center',
    minHeight: 60,
  },
  pageView: {
    flex: 1,
    width: '100%',
    position: 'absolute',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    marginTop: -sliderTranslateY,
  },
  snapshot: {
    width: 120,
    height: 67,
  },
  sliderTranslate: {
    height: sliderTranslateY,
    marginTop: -sliderTranslateY,
    zIndex: -1,
    elevation: -1,
  },
  videoThumbInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    right: 0,
    height: '100%',
    paddingHorizontal: widthLize(16),
    backgroundColor: '#141414',
  },
  playIcon: {
    height: 30,
    width: 30,
  },
  avatarStyle: {
    width: widthLize(32),
    height: widthLize(32),
    borderRadius: widthLize(32),
  },
});
