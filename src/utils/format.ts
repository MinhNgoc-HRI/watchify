export const convertNumberToView = (param: number) => {
  if (param >= 1000000) {
    return Math.round(param / 1000000) + 'Tr lượt xem';
  } else if (param >= 1000) {
    return Math.round(param / 1000) + 'K lượt xem';
  } else {
    return param.toString();
  }
};

export const removeHtmlTags = (input?: string): string => {
  if (!input) {
    return '';
  }
  return input.replace(/<[^>]*>/g, '');
};
export const convertStringToTime = (inputStr: string): string => {
  const match = inputStr.match(/\d+/);
  const minutes = match ? parseInt(match[0], 10) : 0;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${remainingMinutes
    .toString()
    .padStart(2, '0')}`;
};
