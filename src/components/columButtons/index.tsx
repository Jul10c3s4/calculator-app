import { View } from "react-native"
import { NumberButton } from "../numberButton"
import { OperationButton } from "../operationButton"

interface IColumnButtons{
    title: string[],
    click?: any[]
}
export const ColumButtons = ({title, click}:IColumnButtons)=>{
    return(
        <View>
            {
                title.map((t, index)=>{
                    return(
                        <OperationButton key={index} title={title[index]} click={click![index]}/>
                    )
                })
            }
        </View>
    )
}