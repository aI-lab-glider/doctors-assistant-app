// eslint-disable-next-line import/prefer-default-export
export const parseFormFieldValuesToObject = (
  values,
  keysWithParingFunctions
) => {
  const object = values;
  Object.keys(keysWithParingFunctions).forEach((key) => {
    const parsingFunction = keysWithParingFunctions[key];
    object[key] = parsingFunction(values[key]);
  });
  return object;
};
