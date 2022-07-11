import AsyncStorage from "@react-native-async-storage/async-storage";
import LocalStorage from "./local-storage";

jest.mock(
  "@react-native-async-storage/async-storage",
  () => jest.requireActual("@test/mocks/async-storage-mock").default
);

describe("LocalStorage", () => {
  beforeEach(jest.clearAllMocks);

  describe("get key value", () => {
    it("should return null if key does not exist", async () => {
      const result = await LocalStorage().getData("key");

      expect(result).toBeUndefined();
    });

    describe("When throw an error", () => {
      it("should return custom error message", async () => {
        AsyncStorage.getItem.mockRejectedValueOnce(new Error());

        await expect(LocalStorage().getData("key")).rejects.toThrowError(
          "Failed to get data"
        );
      });
    });
  });

  describe("set key value", () => {
    it("should return value that was added", async () => {
      await LocalStorage().setData("key", "new value");

      const result = await LocalStorage().getData("key");

      expect(result).toBe("new value");
    });

    describe("When throw an error", () => {
      it("should return custom error message", async () => {
        AsyncStorage.setItem.mockRejectedValueOnce(new Error());

        await expect(
          LocalStorage().setData("key", "new value")
        ).rejects.toThrowError("Failed to set data");
      });
    });
  });

  describe("remove key", () => {
    it("should remove key", async () => {
      await LocalStorage().setData("key", "new value");

      const result = await LocalStorage().getData("key");

      expect(result).toBe("new value");

      await LocalStorage().removeData("key");

      const result2 = await LocalStorage().getData("key");

      expect(result2).toBeUndefined();
    });

    describe("When throw an error", () => {
      it("should return custom error message", async () => {
        AsyncStorage.removeItem.mockRejectedValueOnce(new Error());

        await expect(LocalStorage().removeData("key")).rejects.toThrowError(
          "Failed to remove data"
        );
      });
    });
  });

  describe("clear", () => {
    it("should clear all keys", async () => {
      await LocalStorage().setData("key", "new value");
      await LocalStorage().setData("key2", "new value2");

      expect(await LocalStorage().getData("key")).toBe("new value");
      expect(await LocalStorage().getData("key2")).toBe("new value2");

      await LocalStorage().clear();

      expect(await LocalStorage().getData("key")).toBeUndefined();
      expect(await LocalStorage().getData("key2")).toBeUndefined();
    });

    describe("When throw an error", () => {
      it("should return custom error message", async () => {
        AsyncStorage.clear.mockRejectedValueOnce(new Error());

        await expect(LocalStorage().clear()).rejects.toThrowError(
          "Failed to clear storage"
        );
      });
    });
  });
});
