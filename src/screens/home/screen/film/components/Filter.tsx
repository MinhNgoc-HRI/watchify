import {ListRenderItemInfo, StyleSheet} from 'react-native';
import React, {forwardRef, memo, useCallback, useMemo, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {
  Text,
  TouchRippleSingle,
  fontSizeLine,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import {defaultColor} from '@src/utils/theme';
import {Category} from '@src/api/category';

export type IFilter = {
  data?: Category[];
};
export type OFilter = {};
const Filter = forwardRef<OFilter, IFilter>((props, _ref) => {
  const {data = []} = props;
  const DATA = useMemo(
    () => [{_id: '_id', name: 'Tất cả', slug: ''}, ...data],
    [data],
  );
  const [selectItem, setSelectItem] = useState<Category>(DATA[0]);
  const renderItem = useCallback(
    (info: ListRenderItemInfo<Category>) => {
      const isSelecte = info.item._id === selectItem?._id;
      return (
        <TouchRippleSingle
          onPress={() => setSelectItem(info.item)}
          touchProps={{
            style: [
              styles.touch,
              {
                backgroundColor: isSelecte
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
    [selectItem],
  );
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      horizontal
      style={styles.root}
      contentContainerStyle={styles.contentContainerStyle}
    />
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
});
