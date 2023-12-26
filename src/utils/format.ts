export const convertNumberToView = (param: number) => {
  if (param >= 1000000) {
    return Math.round(param / 1000000) + 'Tr lượt xem';
  } else if (param >= 1000) {
    return Math.round(param / 1000) + 'K lượt xem';
  } else {
    return param.toString();
  }
};
