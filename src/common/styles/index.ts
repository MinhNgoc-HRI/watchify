import {StyleSheet} from 'react-native';
import gridStyles from './grids';

const defaultStyles = StyleSheet.create({
  ...gridStyles,
});
export default defaultStyles;

export const grid = StyleSheet.create(gridStyles);
