import type {TextStyle, ViewStyle} from 'react-native';

type keys =
  | 'row'
  | 'rowReverse'
  | 'column'
  | 'columnReverse'
  | 'centeredItem'
  | 'flexEqual'
  | 'flexAuto'
  | 'flexWrap'
  | 'flexNowrap'
  | 'flex_0'
  | 'flex_1'
  | 'flexGrow_0'
  | 'flexGrow_1'
  | 'flexShrink_0'
  | 'flexShrink_1'
  | 'alignItemsStart'
  | 'alignItemsEnd'
  | 'alignItemsCenter'
  | 'alignItemsBaseline'
  | 'alignItemsStretch'
  | 'selfStart'
  | 'selfEnd'
  | 'selfCenter'
  | 'selfBaseline'
  | 'selfStretch'
  | 'justifyStart'
  | 'justifyEnd'
  | 'justifyCenter'
  | 'justifyBetween'
  | 'justifyAround'
  | 'justifyEvenly'
  | 'contentStart'
  | 'contentEnd'
  | 'contentCenter'
  | 'contentBetween'
  | 'contentAround'
  | 'contentStretch'
  | 'fillHeight'
  | 'fillWidth';

const grids: Record<keys, ViewStyle | TextStyle> = {
  row: {flexDirection: 'row'},
  rowReverse: {flexDirection: 'row-reverse'},
  column: {flexDirection: 'column'},
  columnReverse: {flexDirection: 'column-reverse'},
  centeredItem: {justifyContent: 'center', alignItems: 'center'},
  flexEqual: {flexGrow: 1, flexShrink: 1, flexBasis: 0},
  flexAuto: {flexGrow: 1, flexShrink: 1, flexBasis: 'auto'},
  flexWrap: {flexWrap: 'wrap'},
  flexNowrap: {flexWrap: 'nowrap'},
  flex_0: {flex: 0},
  flex_1: {flex: 1},
  flexGrow_0: {flexGrow: 0},
  flexGrow_1: {flexGrow: 1},
  flexShrink_0: {flexShrink: 0},
  flexShrink_1: {flexShrink: 1},
  alignItemsStart: {alignItems: 'flex-start'},
  alignItemsEnd: {alignItems: 'flex-end'},
  alignItemsCenter: {alignItems: 'center'},
  alignItemsBaseline: {alignItems: 'baseline'},
  alignItemsStretch: {alignItems: 'stretch'},
  selfStart: {alignSelf: 'flex-start'},
  selfEnd: {alignSelf: 'flex-end'},
  selfCenter: {alignSelf: 'center'},
  selfBaseline: {alignSelf: 'baseline'},
  selfStretch: {alignSelf: 'stretch'},
  justifyStart: {justifyContent: 'flex-start'},
  justifyEnd: {justifyContent: 'flex-end'},
  justifyCenter: {justifyContent: 'center'},
  justifyBetween: {justifyContent: 'space-between'},
  justifyAround: {justifyContent: 'space-around'},
  justifyEvenly: {justifyContent: 'space-evenly'},
  contentStart: {alignContent: 'flex-start'},
  contentEnd: {alignContent: 'flex-end'},
  contentCenter: {alignContent: 'center'},
  contentBetween: {alignContent: 'space-between'},
  contentAround: {alignContent: 'space-around'},
  contentStretch: {alignContent: 'stretch'},
  fillHeight: {height: '100%'},
  fillWidth: {width: '100%'},
};

export default grids;
