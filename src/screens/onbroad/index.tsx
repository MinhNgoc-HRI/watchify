import React, {forwardRef, memo, useCallback} from 'react';
import {MainStackScreenProps} from '@src/navigation/types';
import {
  Box,
  Text,
  TouchRippleSingle,
  fontSizeLine,
  getOffset,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import {defaultColor} from '@src/utils/theme';
import {StatusBar, StyleSheet} from 'react-native';
import Carourel from 'react-native-reanimated-carousel';
import {DIMENSION} from '@src/utils/dimension';
import {CarouselRenderItemInfo} from 'react-native-reanimated-carousel/lib/typescript/types';
import {ONBROAD_DATA, OnbroadType} from '@src/mock';
import {useSharedValue} from 'react-native-reanimated';
import {PaginationItem} from './components/PaginationItem';
import {
  ROUTER_HOME,
  ROUTER_HOME_TAB,
  ROUTER_MAIN,
} from '@src/navigation/routes';
import FastImage from 'react-native-fast-image';
export interface IOnBroadScreen
  extends MainStackScreenProps<'ON_BROAD_SCREEN'> {}
export type OOnBroadScreen = {};
const OnBroadScreen = forwardRef<OOnBroadScreen, IOnBroadScreen>(
  (props, _ref) => {
    const {navigation} = props;
    const progressValue = useSharedValue(0);
    const renderItem = useCallback(
      (info: CarouselRenderItemInfo<OnbroadType>) => {
        return (
          <Box key={info.index} width={DIMENSION.width} middle center>
            <FastImage
              source={info.item.image}
              style={styles.img}
              resizeMode="cover"
            />
            <Box padding={[widthLize(52), heightLize(32)]}>
              <Text
                textAlign="center"
                size={fontSizeLine(24)}
                lineHeight={fontSizeLine(24)}
                weight="700"
                color="#fff">
                {info.item.title}
              </Text>
              <Text
                textAlign="center"
                size={fontSizeLine(16)}
                lineHeight={fontSizeLine(21)}
                weight="500"
                color="#fff"
                marginTop={heightLize(24)}>
                {info.item.description}
              </Text>
            </Box>
          </Box>
        );
      },
      [],
    );
    return (
      <Box flex={1} color={defaultColor.primary}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />

        <Box flex={1}>
          <Carourel
            data={ONBROAD_DATA}
            renderItem={renderItem}
            width={DIMENSION.width}
            style={styles.carourel}
            autoPlay
            loop
            autoPlayInterval={2000}
            onProgressChange={(_, absoluteProgress) => {
              progressValue.value = absoluteProgress;
            }}
          />
        </Box>
        <Box middle row marginVertical={heightLize(24)}>
          {ONBROAD_DATA.map((_page, index) => (
            <PaginationItem
              backgroundColor={'#fff'}
              inActiveBg={'rgba(255, 255, 255, 0.4)'}
              animValue={progressValue}
              index={index}
              key={index}
              length={ONBROAD_DATA.length}
            />
          ))}
        </Box>
        <Box
          marginBottom={getOffset().bottom_without_margin + 10}
          middle
          center>
          <TouchRippleSingle
            touchProps={{style: styles.touch}}
            onPress={() =>
              navigation.navigate(ROUTER_MAIN.HOME_STACK, {
                screen: ROUTER_HOME.HOME_SCREEN,
                params: {
                  screen: ROUTER_HOME_TAB.SUGGEST_SCREEN,
                },
              })
            }>
            <Text
              size={fontSizeLine(16)}
              lineHeight={fontSizeLine(21)}
              color="#FFF"
              weight="700">
              Bắt đầu
            </Text>
          </TouchRippleSingle>
        </Box>
      </Box>
    );
  },
);

export default memo(OnBroadScreen);

const styles = StyleSheet.create({
  img: {
    width: widthLize(300),
    height: heightLize(332),
  },
  carourel: {
    width: DIMENSION.width,
    marginTop: heightLize(60) + getOffset().top_without_margin,
  },
  touch: {
    overflow: 'hidden',
    borderRadius: 10,
    width: widthLize(300),
    height: heightLize(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultColor.bg_secondayry,
  },
});
