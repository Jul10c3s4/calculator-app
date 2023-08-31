import { TouchableOpacity, Text } from "react-native"
import { NumberButtonStyles } from "./numberButton.styles"

interface INumberButton{
    title: string,
    click?: any
}

export const NumberButton = ({title, click}:INumberButton)=>{
    
    function handleClick(){
        click(title.toString())
    }

    return(
        <TouchableOpacity onPress={handleClick} style={NumberButtonStyles.numberButton}>
            <Text style={NumberButtonStyles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}