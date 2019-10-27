import { SET_IS_COLOR_CHECKED } from './constants';

const defaultColorsState = [
  {
    id: 1,
    value: 'green',
    label: 'Green',
    isChecked: false,
  },
  {
    id: 2,
    value: 'yellow',
    label: 'Yellow',
    isChecked: false,
  },
  {
    id: 3,
    value: 'orange',
    label: 'Orange',
    isChecked: false,
  },
];

const updateColorCheckedInArray = (array, { payload }) => {
  return array.map(item => {
    if (item.id === payload.id) {
      return {
        ...item,
        isChecked: !item.isChecked,
      };
    }

    return item;
  });
};

const colors = (state = defaultColorsState, action) => {
  switch (action.type) {
    case SET_IS_COLOR_CHECKED:
      return updateColorCheckedInArray(state, action);
    default:
      return state;
  }
};

export default colors;
