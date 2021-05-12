export const filteredData = (array, filter) => {
  const regExp = new RegExp(filter, 'gi');

  if (!filter) {
    return array;
  }
  return array.filter(item => regExp.test(item.name));
};
