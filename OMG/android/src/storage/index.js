import AsyncStorage from '@react-native-async-storage/async-storage';
const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)

    } catch (e) {
      // saving error
    }
  }

const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
          console.log(value)
        return value
      }
    } catch(e) {
      // error reading value
    }
  }
const  removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }
export { getData, storeData, removeValue }
  