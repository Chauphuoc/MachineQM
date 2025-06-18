export const NewObject = (
  object: {[key: string]: any},
  deleteKey: string[],
) => {
  let newObject = {...object};
  deleteKey.map(i => {
    delete newObject[i];
  });
  return newObject;
};