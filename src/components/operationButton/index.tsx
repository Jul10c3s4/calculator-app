import { TouchableOpacity, Text } from "react-native"
import { OperationButtonStyles } from "./operationButton.styles"

interface INumberButton{
    title: string,
    click?: any
}

export const OperationButton = ({title, click}:INumberButton)=>{
    
    function handleClick(){
        click(title)
    }

    return(
        <TouchableOpacity onPress={handleClick} style={OperationButtonStyles.operationButton}>
            <Text style={OperationButtonStyles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}