import Toast from "@components/toast/toast";
import MainNavigator from "@navigation/main-navigator";
import theme from "@styles/theme";
import { SafeAreaView, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import { Provider } from "react-redux";
import { store, persistor } from "@store/index";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
              <MainNavigator />
              <Toast />
            </PersistGate>
          </Provider>
        </SafeAreaView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
