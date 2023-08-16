export const normalizeResult = (data) => {
  console.log(Object.keys(data[0]));
  const normalizedObject = [];
  data?.forEach((list) => {
    const modifiedObj = {};
    Object.entries(list)?.forEach(([keys, values]) => {
      const modifiedKeys = keys.split(" ")[1];
      modifiedObj[modifiedKeys] = values;
    });
    normalizedObject.push(modifiedObj);
  });
  console.log(">normalizedObject", normalizedObject);
  return normalizedObject;
};
