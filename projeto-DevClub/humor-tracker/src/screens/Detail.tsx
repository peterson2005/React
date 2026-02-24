
import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import { TRouteProps } from "../Routes";


export const Detail = () => {

    const { params } = useRoute<TRouteProps<'detail'>>();
    
    return <>
        
        
        
            <Text>Detail {params.rate}</Text>
        </>;
    }