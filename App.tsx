import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";

import { Loading } from "@components/Loading";

import { Routes } from "./src/routes/";

import { ActivityIndicator, StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
