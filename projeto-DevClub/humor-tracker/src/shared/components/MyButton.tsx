import { TouchableOpacity, Text, View } from 'react-native';


interface IMyButton {
    order: number;
    children: React.ReactNode;
    onPress: () => void;
}
export const MyButton = (props: IMyButton) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View>
                {props.children}
            </View>
        </TouchableOpacity>
    );
}