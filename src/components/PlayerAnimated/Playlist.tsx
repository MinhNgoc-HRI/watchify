import {ListRenderItemInfo, StyleSheet} from 'react-native';
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
} from 'react';
import {Portal} from 'react-native-portalize';
import {Modalize, useModalize} from 'react-native-modalize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DIMENSION} from '@src/utils/dimension';
import {VIDEO_DEFAULT_HEIGHT} from '../Player';
import {
  heightLize,
  Box,
  Text,
  TouchRippleSingle,
  fontSizeLine,
  widthLize,
} from 'pmn-rn-component';
import {defaultColor} from '@src/utils/theme';
import IconDropdown from '@src/assets/svg/IconDropdown';

import IconPrev from '@src/assets/svg/IconPrev';
import IconNext from '@src/assets/svg/IconNext';
import IconShare from '@src/assets/svg/IconShare';
import FastImage from 'react-native-fast-image';
import {DetailFilm, DetailFilmServerDaum} from '@src/api/types';
import {convertNumberToView} from '@src/utils/format';
import IconThreeDot from '@src/assets/svg/IconThreeDot';
import {baseImgUrl} from '@src/api/config';
import {useFilmStore} from '@src/stores/film';
export type PlaylistProps = {
  data?: DetailFilm;
};
export type PlaylistRef = {
  open: (dest?: 'top' | 'default' | undefined) => void;
  close: (dest?: 'default' | 'alwaysOpen' | undefined) => void;
};
const Playlist = forwardRef<PlaylistRef, PlaylistProps>(
  (props, refPlaylist) => {
    const {data} = props;
    const {setEpisode, episode} = useFilmStore();
    const episodeTotal = data?.episodes?.[0]?.server_data?.length;
    const insets = useSafeAreaInsets();
    const {ref, open, close} = useModalize();
    const modalHeight = useMemo(
      () =>
        DIMENSION.height - insets.top - VIDEO_DEFAULT_HEIGHT - heightLize(22),
      [insets.top],
    );
    const Header = useMemo(
      () => (
        <React.Fragment>
          <Box
            row
            justifyContent="space-between"
            margin={[widthLize(12), heightLize(12)]}
            paddingVertical={heightLize(12)}
            borderBottomWidth={1}
            borderBottomColor={defaultColor.text_secondary}>
            <Text
              numberOfLines={1}
              size={fontSizeLine(12)}
              weight="bold"
              color={defaultColor.text_primary}>
              {data?.name}
            </Text>
            <Box width={widthLize(10)} />
            <Box row center middle>
              <Text
                numberOfLines={1}
                size={fontSizeLine(12)}
                weight="bold"
                color={defaultColor.text_secondary}>
                {episodeTotal &&
                  `Tập ${Number(episode?.slug) || 1}/${episodeTotal}`}
              </Text>
              <Box width={widthLize(6)} />
              <TouchRippleSingle onPress={() => close()}>
                <IconDropdown />
              </TouchRippleSingle>
            </Box>
          </Box>
          <Box row margin={[0, widthLize(12), heightLize(12), 0]}>
            <TouchRippleSingle>
              <IconPrev />
            </TouchRippleSingle>
            <Box width={widthLize(24)} />
            <TouchRippleSingle>
              <IconNext />
            </TouchRippleSingle>
            <Box width={widthLize(24)} />
            <TouchRippleSingle>
              <IconShare />
            </TouchRippleSingle>
          </Box>
        </React.Fragment>
      ),
      [close, data?.name, episode?.slug, episodeTotal],
    );
    const renderItem = useCallback(
      ({item}: ListRenderItemInfo<DetailFilmServerDaum>) => {
        return (
          <TouchRippleSingle
            onPress={() => {
              setEpisode(item);
            }}>
            <Box
              row
              alignItems="flex-start"
              padding={[widthLize(12), heightLize(8)]}
              color={
                episode?.slug === item.slug
                  ? defaultColor.border
                  : 'transparent'
              }>
              <FastImage
                source={{uri: `${baseImgUrl}/${data?.thumb_url}` || ''}}
                style={styles.img}
                resizeMode="cover">
                <Box
                  position="absolute"
                  bottom={heightLize(4)}
                  right={widthLize(4)}
                  radius={8}
                  padding={[widthLize(6), heightLize(4)]}
                  color="rgba(16,16,16,0.6)">
                  <Text
                    size={fontSizeLine(12)}
                    color={defaultColor.text_primary}>
                    00.00
                  </Text>
                </Box>
              </FastImage>

              <Box flex={1} paddingHorizontal={widthLize(12)}>
                <Text
                  size={fontSizeLine(12)}
                  weight="bold"
                  color={
                    defaultColor.text_primary
                  }>{`${data?.name}-Tập ${item?.slug}`}</Text>
                <Text
                  size={fontSizeLine(12)}
                  weight="600"
                  color={defaultColor.text_secondary}>
                  {convertNumberToView(Math.floor(Math.random() * 90e3) + 10e2)}
                </Text>
              </Box>
              <IconThreeDot />
            </Box>
          </TouchRippleSingle>
        );
      },
      [data?.name, data?.thumb_url, episode?.slug, setEpisode],
    );
    useImperativeHandle(refPlaylist, () => ({
      open,
      close,
    }));
    return (
      <Portal>
        <Modalize
          ref={ref}
          modalHeight={modalHeight}
          handleStyle={styles.handleStyle}
          modalStyle={styles.modalStyle}
          HeaderComponent={Header}
          panGestureEnabled={false}
          flatListProps={{
            data: data?.episodes?.[0].server_data || undefined,
            renderItem: renderItem,
            keyExtractor: item => item.slug,
          }}
        />
      </Portal>
    );
  },
);

export default memo(Playlist);

const styles = StyleSheet.create({
  handleStyle: {
    backgroundColor: defaultColor.bg_secondayry,
  },
  modalStyle: {
    backgroundColor: defaultColor.bg_secondayry,
  },
  img: {
    width: widthLize(150),
    height: heightLize(80),
    borderRadius: 8,
    overflow: 'hidden',
  },
});
