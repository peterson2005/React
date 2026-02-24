import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Text } from "react-native"

import { HomePage } from "./screens/Home";
import { Detail } from "./screens/Detail";
import { SetUserNamePage } from "./screens/SetUserNamePage";
import { SafeAreaView } from "react-native-safe-area-context";

type TScreenDefiitions = {
    home: undefined;
    setUserName: undefined;
    detail: { rate: number };
}


const Stack = createNativeStackNavigator<TScreenDefiitions>();

export const AppRoutes = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="home"
                screenOptions={{ headerShown: false }}
                screenLayout={({ children }) => <SafeAreaView>{children}</SafeAreaView>}>

                <Stack.Screen name="home" component={HomePage} />

                <Stack.Group
                    screenOptions={{
                        presentation: 'formSheet',
                        sheetCornerRadius: 24,
                    }}>
                    <Stack.Screen
                        name="detail" component={Detail}
                        options={{
                            sheetAllowedDetents: [0.8, 0.95]
                        }}
                    />
                    <Stack.Screen name="setUserName" component={SetUserNamePage}
                        options={{
                            sheetAllowedDetents: [0.4, 0.6]
                        }}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>



    );
}


export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefiitions>;

export type TRouteProps<T extends keyof TScreenDefiitions> = RouteProp<TScreenDefiitions, T>