import {ListRenderItemInfo, StyleSheet} from 'react-native';
import React, {forwardRef, memo, useCallback, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {
  Text,
  TouchRippleSingle,
  fontSizeLine,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import {defaultColor} from '@src/utils/theme';
const DATA = [
  'Tất cả',
  'Chiếu rạp',
  'Tâm lý tình cảm',
  'Hành động',
  'Khoa học',
  'Chiến tranh',
];
export type IFilter = {};
export type OFilter = {};
const Filter = forwardRef<OFilter, IFilter>((props, _ref) => {
  const {} = props;
  const [selectItem, setSelectItem] = useState<string>(DATA[0]);
  const renderItem = useCallback(
    (info: ListRenderItemInfo<string>) => {
      const isSelecte = info.item === selectItem;
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
            {info.item}
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
