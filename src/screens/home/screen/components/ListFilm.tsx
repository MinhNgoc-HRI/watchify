import {ActivityIndicator, StyleSheet} from 'react-native';
import React, {forwardRef, memo, useCallback, useContext} from 'react';
import {
  Box,
  Text,
  TouchRippleSingle,
  fontSizeLine,
  widthLize,
} from 'pmn-rn-component';
import FastImage from 'react-native-fast-image';
import {BOTTOM_TAB_HEIGHT} from '@src/navigation/components/BottomTabBar';
import {Film} from '@src/api/types';
import {baseImgUrl} from '@src/api/config';
import {defaultColor} from '@src/utils/theme';
import {convertNumberToView} from '@src/utils/format';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import LinearGradient from 'react-native-linear-gradient';
import {PlayerContext, setPlayerPoint} from '@src/stores/player';
import {useFilmStore} from '@src/stores/film';
import LoadingPortal from '@src/components/LoadingPotal';
import {getDetailFilm} from '@src/api/film';

export type ListFilmProps = {
  onEndReachedHandle: () => void;
  loading?: boolean;
  films?: Film[];
};
export type ListFilmRef = {};
const ListFilm = forwardRef<ListFilmRef, ListFilmProps>((props, _ref) => {
  const {films, loading, onEndReachedHandle} = props;

  const {dispatch} = useContext(PlayerContext);
  const {setFilmStore, setEpisode} = useFilmStore();
  const renderEpisode = useCallback((e?: string) => {
    return (
      <Box
        zIndex={10}
        position="absolute"
        bottom={80}
        left={0}
        color={defaultColor.primary}>
        <Text
          size={fontSizeLine(8)}
          weight="700"
          color={defaultColor.text_primary}
          padding={[2, 1]}>
          {e}
        </Text>
      </Box>
    );
  }, []);
  const renderQuality = useCallback((e?: string) => {
    return (
      <Box
        zIndex={10}
        position="absolute"
        top={10}
        right={0}
        color={defaultColor.primary}>
        <Text
          size={fontSizeLine(8)}
          weight="700"
          color={defaultColor.text_primary}
          padding={[2, 1]}>
          {e}
        </Text>
      </Box>
    );
  }, []);
  const renderItem = useCallback(
    (info: ListRenderItemInfo<Film>) => {
      const {episode_current, quality, slug} = info.item;
      return (
        <TouchRippleSingle
          touchProps={{style: styles.touch}}
          onPress={() => {
            LoadingPortal.show();
            getDetailFilm(slug)
              .then(e => {
                const data = e?.data?.data?.item;
                if (data) {
                  setFilmStore(data);
                  const i = data?.episodes?.[0]?.server_data?.[0];
                  if (i) {
                    setEpisode(i);
                  }
                  LoadingPortal.hide();
                  dispatch(setPlayerPoint(0));
                } else {
                  LoadingPortal.hide();
                }
              })
              .catch(() => LoadingPortal.hide());
          }}>
          <Box flex={1}>
            <LinearGradient
              colors={['transparent', 'rgba(16,16,16,0.8)']}
              style={styles.linear}
            />
            {renderEpisode(episode_current)}
            {renderQuality(quality)}
            <FastImage
              style={styles.img}
              resizeMode="cover"
              source={{
                uri: `${baseImgUrl}/${info.item.thumb_url}`,
              }}
            />
            <Box flex={1} marginTop={8}>
              <Text
                size={fontSizeLine(11)}
                lineHeight={13}
                weight="bold"
                color={defaultColor.text_primary}
                numberOfLines={2}>
                {info.item.name}
              </Text>
              <Text
                size={fontSizeLine(12)}
                lineHeight={18}
                color={defaultColor.text_secondary}
                numberOfLines={1}>
                {convertNumberToView(Math.floor(Math.random() * 90e3) + 10e3)}
              </Text>
            </Box>
          </Box>
        </TouchRippleSingle>
      );
    },
    [dispatch, renderEpisode, renderQuality, setEpisode, setFilmStore],
  );
  return (
    <FlashList
      data={films}
      renderItem={renderItem}
      estimatedItemSize={240}
      numColumns={3}
      onEndReachedThreshold={0.1}
      onEndReached={onEndReachedHandle}
      keyExtractor={(item: any, _index: number) => {
        return `${item._id}`;
      }}
      contentContainerStyle={styles.contentStyle}
      ListFooterComponent={
        <Box padding={20}>
          {loading ? (
            <ActivityIndicator color={defaultColor.text_primary} />
          ) : (
            <Box />
          )}
        </Box>
      }
    />
  );
});

export default memo(ListFilm);

const styles = StyleSheet.create({
  img: {
    height: 170,
    width: '100%',
    borderRadius: 8,
  },
  linear: {
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    height: 170,
  },
  contentStyle: {
    padding: widthLize(8),
    paddingBottom: BOTTOM_TAB_HEIGHT,
  },
  touch: {
    flex: 1,
    height: 240,
    overflow: 'hidden',
    borderRadius: 8,
    margin: widthLize(4),
  },
});
