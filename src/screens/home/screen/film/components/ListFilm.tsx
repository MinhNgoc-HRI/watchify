import {ActivityIndicator, StyleSheet} from 'react-native';
import React, {forwardRef, memo, useCallback, useState} from 'react';
import {
  Box,
  Text,
  Thumb,
  fontSizeLine,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import {BOTTOM_TAB_HEIGHT} from '@src/navigation/components/BottomTabBar';
import {getListFilm} from '@src/api/film';
import {OFilm} from '@src/api/film';
import {baseImgUrl} from '@src/api/config';
import {defaultColor} from '@src/utils/theme';
import {convertNumberToView} from '@src/utils/format';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import LinearGradient from 'react-native-linear-gradient';

export type IListFilm = {};
export type OListFilm = {};
const ListFilm = forwardRef<OListFilm, IListFilm>((props, _ref) => {
  const {} = props;
  const [films, setFilms] = useState<OFilm[] | undefined>();
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const renderItem = useCallback((info: ListRenderItemInfo<OFilm>) => {
    return (
      <Box
        flex={1}
        height={heightLize(240)}
        overflow="hidden"
        margin={widthLize(4)}>
        <LinearGradient
          colors={['transparent', 'rgba(16,16,16,0.8)']}
          style={styles.linear}
        />
        <Thumb
          style={styles.img}
          resizeMode="cover"
          source={{
            uri: `${baseImgUrl}/${info.item.thumb_url}`,
          }}
        />
        <Box flex={1} marginTop={heightLize(8)}>
          <Text
            size={fontSizeLine(11)}
            lineHeight={heightLize(13)}
            weight="bold"
            color={defaultColor.text_primary}
            numberOfLines={2}>
            {info.item.name}
          </Text>
          <Text
            size={fontSizeLine(12)}
            lineHeight={heightLize(18)}
            color={defaultColor.text_secondary}
            numberOfLines={1}>
            {convertNumberToView(Math.floor(Math.random() * 90e3) + 10e3)}
          </Text>
        </Box>
      </Box>
    );
  }, []);
  const onEndReachedHandle = useCallback(() => {
    if (loading) {
      return;
    } else {
      setLoading(true);
      getListFilm({page: page})
        .then(e => {
          if (e.success && e.data && e.data?.items) {
            setFilms(v => [...(v || []), ...e.data.items]);
            setLoading(false);
            setPage(v => v + 1);
          }
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [loading, page]);
  return (
    <FlashList
      data={films}
      renderItem={renderItem}
      estimatedItemSize={heightLize(240)}
      numColumns={3}
      onEndReachedThreshold={0.1}
      onEndReached={onEndReachedHandle}
      pagingEnabled
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
    height: heightLize(170),
    width: '100%',
    borderRadius: 8,
  },
  linear: {
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    height: heightLize(170),
  },
  contentStyle: {
    padding: widthLize(8),
    paddingBottom: BOTTOM_TAB_HEIGHT,
  },
});
