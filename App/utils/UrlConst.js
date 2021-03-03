import AsyncStorage from '@react-native-community/async-storage';



export const _storeData = async (key, value) => {
  console.log(key, value)
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error)
  }
};

export const _retrieveItem = async (key) => {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    // console.warn("Item:"+item)
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return
};

export const _removeItem = async (key) => {

  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error.message);
  }
}
