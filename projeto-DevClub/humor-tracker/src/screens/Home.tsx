
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";
import { TNavigationScreenProps } from "../Routes";




export const HomePage = () => {

    const navigation = useNavigation<TNavigationScreenProps>();
    
    return <>
            <Text>HomePage</Text>

            <Button
                title='Go to Details'
                onPress={() => navigation.navigate('details', { rate: 3 })}
            />
        </>;
    }