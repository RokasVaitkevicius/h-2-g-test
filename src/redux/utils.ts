const updateObjectInArray = (array, { payload }) => {
  return array.map(item => {
    if (item.id === payload.id) {
      return {
        ...item,
        ...payload,
      };
    }

    return item;
  });
};

const update = (state, { payload }) => ({ ...state, ...payload });

const set = (state, { payload }) => payload;

const updateValueByKey = (state, key, { payload }) => ({
  ...state,
  [key]: payload,
});

export { updateObjectInArray, update, set, updateValueByKey };
