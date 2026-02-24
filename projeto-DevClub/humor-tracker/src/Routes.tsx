import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import { Text } from "react-native"

import { HomePage } from "./screens/Home";
import { Detail } from "./screens/Detail";
import { SetUserNamePage } from "./screens/SetUserNamePage";

type TScreenDefiitions = {
    home: undefined;
    setUserName: undefined;
    detail: {rate: number};
}


const Stack = createNativeStackNavigator<TScreenDefiitions>();

export const AppRoutes = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomePage}/>
                <Stack.Screen name="detail" component={Detail}/>
                <Stack.Screen name="setUserName" component={SetUserNamePage}/>
            </Stack.Navigator>
        </NavigationContainer>



    );
}


export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefiitions>;

export type TRouteProps<T extends keyof TScreenDefiitions> = RouteProp<TScreenDefiitions, T>