import {ListRenderItemInfo, StyleSheet} from 'react-native';
import React, {forwardRef, memo, useCallback, useMemo, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {
  Box,
  Text,
  TouchRippleSingle,
  fontSizeLine,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import {defaultColor} from '@src/utils/theme';
import {Category, Country} from '@src/api/types';
import {useTypeStore} from '@src/stores/type';
import IconFilter from '@src/assets/svg/IconFilter';
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export const DEFAULT_FILTER = {_id: '_id', id: 'id', name: 'Tất cả', slug: ''};
export type FilterProps = {
  selectCategory?: Category;
  setSelectCategory?: (value: Category) => void;
  selectCountry?: Country;
  setSelectCountry?: (value: Country) => void;
};
export type FilterRef = {};
const Filter = forwardRef<FilterRef, FilterProps>((props, _ref) => {
  const {selectCategory, setSelectCategory, selectCountry, setSelectCountry} =
    props;
  const [open, setOpen] = useState(false);
  const {category, country} = useTypeStore();
  const DATA_CATEGORY = useMemo(
    () => [DEFAULT_FILTER, ...(category || [])],
    [category],
  );
  const DATA_COUNTRY = useMemo(
    () => [DEFAULT_FILTER, ...(country || [])],
    [country],
  );

  const renderItem = useCallback(
    (info: ListRenderItemInfo<Category>) => {
      const isSelected = info.item._id === selectCategory?._id;
      return (
        <TouchRippleSingle
          delay={300}
          onPress={() => {
            setSelectCategory?.(info.item);
          }}
          touchProps={{
            style: [
              styles.touch,
              {
                backgroundColor: isSelected
                  ? defaultColor.primary
                  : 'transparent',
              },
            ],
          }}>
          <Text
            size={fontSizeLine(12)}
            lineHeight={heightLize(18)}
            color={defaultColor.text_primary}>
            {info.item.name}
          </Text>
        </TouchRippleSingle>
      );
    },
    [selectCategory, setSelectCategory],
  );
  const renderCountryItem = useCallback(
    (info: ListRenderItemInfo<Country>) => {
      const isSelected = info.item._id === selectCountry?._id;
      return (
        <TouchRippleSingle
          delay={300}
          onPress={() => {
            setSelectCountry?.(info?.item);
            setOpen(false);
          }}>
          <Box height={heightLize(20)}>
            <Text
              size={fontSizeLine(16)}
              weight="700"
              color={
                isSelected ? defaultColor.primary : defaultColor.text_primary
              }>
              {info?.item?.name}
            </Text>
          </Box>
        </TouchRippleSingle>
      );
    },
    [selectCountry?._id, setSelectCountry],
  );
  const filterStyled = useAnimatedStyle(() => {
    return {
      height: withTiming(open ? 100 : 0, {
        duration: 300,
        easing: Easing.linear,
      }),
    };
  });
  const filterFlatLishStyled = useAnimatedStyle(() => {
    return {
      opacity: withTiming(open ? 1 : 0, {duration: 300}),
    };
  });
  return (
    <React.Fragment>
      <Box>
        <Box row alignItems="center">
          <TouchRippleSingle onPress={() => setOpen(v => !v)}>
            <IconFilter />
          </TouchRippleSingle>
          <FlatList
            data={DATA_CATEGORY}
            renderItem={renderItem}
            horizontal
            style={styles.root}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={item => item._id}
          />
        </Box>

        <Animated.View style={[filterStyled]}>
          <Animated.FlatList
            data={DATA_COUNTRY}
            renderItem={renderCountryItem}
            keyExtractor={item => item._id}
            style={filterFlatLishStyled}
          />
        </Animated.View>
      </Box>
    </React.Fragment>
  );
});

export default memo(Filter);

const styles = StyleSheet.create({
  root: {
    marginVertical: heightLize(4),
    marginLeft: widthLize(16),
    maxHeight: heightLize(40),
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  touch: {
    paddingHorizontal: widthLize(12),
    borderRadius: 6,
    borderWidth: 1,
    borderColor: defaultColor.border,
    overflow: 'hidden',
    height: heightLize(22),
    justifyContent: 'center',
    marginRight: widthLize(16),
  },
  filterContent: {
    backgroundColor: 'red',
  },
});
