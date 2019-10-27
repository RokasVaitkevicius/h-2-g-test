export const selectColors = state => state.colors;
export const selectAmountOfColorsChecked = state =>
  state.colors.filter(c => c.isChecked).length;
