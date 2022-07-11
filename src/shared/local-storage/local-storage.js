import AsyncStorage from "@react-native-async-storage/async-storage";

const LocalStorage = () => {
  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);

      return value;
    } catch {
      throw new Error("Failed to get data");
    }
  };

  const setData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch {
      throw new Error("Failed to set data");
    }
  };

  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch {
      throw new Error("Failed to remove data");
    }
  };

  const clear = async () => {
    try {
      await AsyncStorage.clear();
    } catch {
      throw new Error("Failed to clear storage");
    }
  };

  return {
    getData,
    setData,
    removeData,
    clear,
  };
};

export default LocalStorage;
