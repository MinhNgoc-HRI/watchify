import {StyleSheet, ActivityIndicator} from 'react-native';
import React, {
  forwardRef,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {MainStackScreenProps} from '@src/navigation/types';
import {
  Box,
  Input,
  Text,
  TouchRippleSingle,
  TouchSingle,
  fontSizeLine,
  getOffset,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import {defaultColor} from '@src/utils/theme';
import IconLeft from '@src/assets/svg/IconLeft';
import IconSearch from '@src/assets/svg/IconSearch';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {Film} from '@src/api/types';
import {getDetailFilm, getSearchFilm} from '@src/api/film';
import FastImage from 'react-native-fast-image';
import {baseImgUrl} from '@src/api/config';
import {useFilmStore} from '@src/stores/film';
import {PlayerContext, setPlayerPoint} from '@src/stores/player';
import LoadingPortal from '@src/components/LoadingPotal';
export interface SearchScreenProps
  extends MainStackScreenProps<'SEARCH_SCREEN'> {}
export type SearchScreenRef = {};
const SearchScreen = forwardRef<SearchScreenRef, SearchScreenProps>(
  (props, _ref) => {
    const {navigation} = props;
    const {dispatch} = useContext(PlayerContext);
    const {setFilmStore, setEpisode} = useFilmStore();
    const [films, setFilms] = useState<Film[] | undefined>();
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');
    const renderItem = useCallback(
      (info: ListRenderItemInfo<Film>) => {
        return (
          <TouchRippleSingle
            delay={500}
            onPress={() => {
              LoadingPortal.show();
              getDetailFilm(info.item.slug)
                .then(e => {
                  const data = e?.data?.data?.item;
                  if (data) {
                    setFilmStore(data);
                    const i = data?.episodes?.[0]?.server_data?.[0];
                    if (i) {
                      setEpisode(i);
                    }
                    navigation.goBack();
                    LoadingPortal.hide();
                    dispatch(setPlayerPoint(0));
                  } else {
                    LoadingPortal.hide();
                  }
                })
                .catch(() => LoadingPortal.hide());
            }}>
            <Box
              height={heightLize(60)}
              paddingHorizontal={widthLize(16)}
              row
              alignItems="center">
              <FastImage
                source={{uri: `${baseImgUrl}/${info.item.thumb_url}`}}
                style={styles.img}
                resizeMode="cover"
              />
              <Box paddingLeft={widthLize(16)}>
                <Text
                  size={fontSizeLine(12)}
                  color={defaultColor.text_primary}
                  numberOfLines={2}>
                  {info?.item?.name}
                </Text>
                <Text
                  size={fontSizeLine(10)}
                  color={defaultColor.text_secondary}
                  numberOfLines={1}>
                  {info?.item?.origin_name}
                </Text>
              </Box>
            </Box>
          </TouchRippleSingle>
        );
      },
      [dispatch, navigation, setEpisode, setFilmStore],
    );
    const getSearchFilmApi = useCallback(async (t: string) => {
      try {
        setLoading(true);
        const rs = await getSearchFilm(t);
        if (rs?.data?.data?.items) {
          setFilms(rs.data.data.items);
        }
      } catch (e) {
      } finally {
        setLoading(false);
      }
    }, []);
    useEffect(() => {
      if (text) {
        getSearchFilmApi(text);
      } else {
        setFilms(undefined);
      }
    }, [getSearchFilmApi, text]);
    const ItemSeparatorComponent = useCallback(() => {
      return <Box height={heightLize(4)} />;
    }, []);
    return (
      <Box
        flex={1}
        color={defaultColor.bg_primary}
        paddingTop={getOffset().top_without_margin}
        paddingHorizontal={widthLize(16)}>
        <Box row center marginVertical={heightLize(8)}>
          <TouchSingle onPress={() => navigation.goBack()}>
            <IconLeft width={24} height={24} />
          </TouchSingle>
          <Box
            row
            flex={1}
            middle
            center
            paddingHorizontal={widthLize(16)}
            paddingVertical={heightLize(8)}
            radius={8}
            color={defaultColor.bg_secondayry}>
            <IconSearch />
            <Input
              value={text}
              onChangeText={value => setText(value)}
              size={fontSizeLine(16)}
              flex={1}
              color={defaultColor.text_primary}
              marginLeft={widthLize(6)}
              placeholder="Tìm kiếm"
              placeholderTextColor={defaultColor.border}
            />
          </Box>
        </Box>
        <FlashList
          data={films}
          renderItem={renderItem}
          estimatedItemSize={heightLize(60)}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListEmptyComponent={
            <Box padding={20} middle center>
              <Text
                size={fontSizeLine(14)}
                weight="600"
                color={defaultColor.border}>
                Không có dữ liệu
              </Text>
            </Box>
          }
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
      </Box>
    );
  },
);

export default memo(SearchScreen);

const styles = StyleSheet.create({
  img: {
    width: widthLize(45),
    height: heightLize(60),
    borderRadius: 8,
  },
});
