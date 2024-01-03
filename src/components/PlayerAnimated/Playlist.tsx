import {StyleSheet} from 'react-native';
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
import {Item} from '@src/api/film';
export type PlaylistProps = {
  data?: Item;
};
export type PlaylistRef = {
  open: (dest?: 'top' | 'default' | undefined) => void;
  close: (dest?: 'default' | 'alwaysOpen' | undefined) => void;
};
const Playlist = forwardRef<PlaylistRef, PlaylistProps>(
  (props, refPlaylist) => {
    const {data} = props;
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
        <Box
          row
          justifyContent="space-between"
          margin={[widthLize(12), heightLize(12)]}
          paddingVertical={heightLize(12)}>
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
            <TouchRippleSingle onPress={() => close()}>
              <IconDropdown />
            </TouchRippleSingle>
          </Box>
        </Box>
      ),
      [close, data?.name, episodeTotal],
    );
    const renderItem = useCallback(() => {
      return <Box />;
    }, []);
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
          flatListProps={{
            data: [],
            renderItem,
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
});
