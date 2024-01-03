import {FlatList, Image, StyleSheet} from 'react-native';
import React, {forwardRef, memo, useCallback, useRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import defaultStyles from '@src/common/styles';
import {
  Box,
  Text,
  TouchRippleSingle,
  fontSizeLine,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import {defaultColor} from '@src/utils/theme';
import {Item} from '@src/api/film';
import IconDropdown from '@src/assets/svg/IconDropdown';
import FastImage from 'react-native-fast-image';
import {baseImgUrl} from '@src/api/config';
import {removeHtmlTags} from '@src/utils/format';
import WebView from 'react-native-webview';
import {VIDEO_DEFAULT_HEIGHT} from '../Player';
import {BOTTOM_TAB_HEIGHT} from '@src/navigation/components/BottomTabBar';
import {DIMENSION} from '@src/utils/dimension';
import Playlist, {PlaylistRef} from './Playlist';

export type ContentProps = {
  data?: Item;
};
export type ContentRef = {};
const Content = forwardRef<ContentRef, ContentProps>((props, _ref) => {
  const {data} = props;
  const refPlaylist = useRef<PlaylistRef>(null);
  const episodeTotal = data?.episodes?.[0]?.server_data?.length;
  const imgUrl = baseImgUrl + '/' + data?.thumb_url;
  const actors = data?.actor?.filter(e => !!e) || [];
  const trailerUrl = data?.trailer_url;
  const renderActorItem = useCallback((info: any) => {
    return (
      <Box width={widthLize(80)} marginRight={widthLize(16)}>
        <Image
          source={require('@src/assets/images/actor.png')}
          style={styles.actorImg}
          resizeMode="cover"
        />
        <Text
          textAlign="center"
          size={fontSizeLine(12)}
          weight="700"
          color={defaultColor.text_secondary}>
          {info.item}
        </Text>
      </Box>
    );
  }, []);
  return (
    <>
      <ScrollView style={[defaultStyles.flex_1, styles.root]}>
        <Box
          row
          radius={8}
          justifyContent="space-between"
          padding={[widthLize(12), heightLize(10)]}
          color={defaultColor.bg_secondayry}>
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
              {episodeTotal && `Tập ${1}/${episodeTotal}`}
            </Text>
            <Box width={widthLize(6)} />
            <TouchRippleSingle onPress={() => refPlaylist?.current?.open()}>
              <IconDropdown />
            </TouchRippleSingle>
          </Box>
        </Box>

        <Box marginTop={heightLize(20)} row>
          <Box>
            <FastImage
              source={{uri: imgUrl}}
              style={styles.img}
              resizeMode="cover"
            />
            <Text
              textAlign="center"
              radius={8}
              overflow="hidden"
              marginTop={heightLize(6)}
              padding={[widthLize(4), heightLize(6)]}
              size={fontSizeLine(12)}
              color={defaultColor.text_primary}
              weight="bold"
              backgroundColor={defaultColor.primary}>
              Tải phim
            </Text>
          </Box>
          <Box width={widthLize(12)} />
          <Box flex={1} center>
            <Text
              size={fontSizeLine(14)}
              weight="bold"
              color={defaultColor.text_primary}>
              {data?.name}
            </Text>
            <Text
              textAlign="justify"
              marginTop={heightLize(10)}
              size={fontSizeLine(12)}
              color={defaultColor.text_primary}>
              {removeHtmlTags(data?.content)}
            </Text>
          </Box>
        </Box>

        <Box marginTop={heightLize(20)} width={DIMENSION.width * 0.6}>
          <Text
            size={fontSizeLine(16)}
            color={defaultColor.text_primary}
            weight="bold"
            marginBottom={heightLize(8)}>
            Thông tin khác
          </Text>
          <Box row>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_primary}
              weight="bold"
              marginBottom={heightLize(8)}>
              Đạo diễn :
            </Text>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_secondary}
              weight="bold"
              marginBottom={heightLize(8)}>
              {' ' + data?.director?.[0]}
            </Text>
          </Box>
          <Box row>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_primary}
              weight="bold"
              marginBottom={heightLize(8)}>
              Diễn viên :
            </Text>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_secondary}
              weight="bold"
              marginBottom={heightLize(8)}>
              {' ' + data?.actor?.filter(e => e)?.join(', ')}
            </Text>
          </Box>
          <Box row>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_primary}
              weight="bold"
              marginBottom={heightLize(8)}>
              Thời lượng :
            </Text>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_secondary}
              weight="bold"
              marginBottom={heightLize(8)}>
              {' ' + data?.time}
            </Text>
          </Box>
          <Box row>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_primary}
              weight="bold"
              marginBottom={heightLize(8)}>
              Phụ đề :
            </Text>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_secondary}
              weight="bold"
              marginBottom={heightLize(8)}>
              {' ' + data?.lang}
            </Text>
          </Box>
          <Box row>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_primary}
              weight="bold"
              marginBottom={heightLize(8)}>
              Quốc gia :
            </Text>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_secondary}
              weight="bold"
              marginBottom={heightLize(8)}>
              {' ' +
                data?.country
                  ?.map(e => e.name)
                  ?.filter(e => e)
                  ?.join(', ')}
            </Text>
          </Box>
          <Box row>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_primary}
              weight="bold"
              marginBottom={heightLize(8)}>
              Thể loại :
            </Text>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_secondary}
              weight="bold"
              marginBottom={heightLize(8)}>
              {' ' +
                data?.category
                  ?.map(e => e.name)
                  ?.filter(e => e)
                  ?.join(', ')}
            </Text>
          </Box>
          <Box row>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_primary}
              weight="bold"
              marginBottom={heightLize(8)}>
              Trạng thái :
            </Text>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_secondary}
              weight="bold"
              marginBottom={heightLize(8)}>
              {' ' + data?.episode_current}
            </Text>
          </Box>
          <Box row>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_primary}
              weight="bold"
              marginBottom={heightLize(8)}>
              Năm phát hành :
            </Text>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_secondary}
              weight="bold"
              marginBottom={heightLize(8)}>
              {' ' + data?.year}
            </Text>
          </Box>
          <Box row>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_primary}
              weight="bold"
              marginBottom={heightLize(8)}>
              Chất lượng :
            </Text>
            <Text
              size={fontSizeLine(12)}
              color={defaultColor.text_secondary}
              weight="bold"
              marginBottom={heightLize(8)}>
              {' ' + data?.quality}
            </Text>
          </Box>
        </Box>
        {actors?.length > 0 && (
          <Box marginTop={heightLize(20)}>
            <Text
              size={fontSizeLine(16)}
              color={defaultColor.text_primary}
              weight="bold"
              marginBottom={heightLize(8)}>
              Diễn viên
            </Text>
            <FlatList horizontal data={actors} renderItem={renderActorItem} />
          </Box>
        )}
        {trailerUrl && (
          <Box marginTop={heightLize(20)}>
            <Text
              size={fontSizeLine(16)}
              color={defaultColor.text_primary}
              weight="bold"
              marginBottom={heightLize(8)}>
              Trailer
            </Text>
            <WebView
              source={{uri: trailerUrl}}
              style={styles.trailer}
              mediaPlaybackRequiresUserAction={true}
            />
          </Box>
        )}
        <Box height={BOTTOM_TAB_HEIGHT} />
      </ScrollView>
      <Playlist ref={refPlaylist} data={data} />
    </>
  );
});

export default memo(Content);

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: widthLize(12),
    paddingVertical: heightLize(12),
    backgroundColor: defaultColor.bg_primary,
  },
  img: {
    width: widthLize(110),
    height: heightLize(150),
    borderRadius: 8,
  },
  actorImg: {
    width: widthLize(80),
    height: heightLize(120),
    borderRadius: 8,
    backgroundColor: defaultColor.text_primary,
  },
  trailer: {
    width: '100%',
    height: VIDEO_DEFAULT_HEIGHT,
  },
});
