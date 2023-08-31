import { View } from "react-native"
import { NumberButton } from "../numberButton"

interface IFrameButtons{
    title: string[],
    click?: any[]
}

export const FrameButtons = ({title, click}:IFrameButtons)=>{

    return(
        <View style={{flexDirection:'column', flex:1}}>
            <View style={{flexDirection:'row', flex:1}}>
            {
                title.map((t, index)=>{
                    if(index >= 0 && index < 3){
                        return(
                            <NumberButton key={index} title={title[index]} click={click![index]}/>
                        )
                    }
                })
            }
        </View>
        <View style={{flexDirection:'row', flex: 1}}>
            {
                title.map((t, index)=>{
                    if(index >= 3 && index < 6){
                        return(
                            <NumberButton key={index} title={title[index]} click={click![index]}/>
                        )
                    }
                })
            }
        </View>
        <View style={{flexDirection:'row', flex: 1}}>
            {
                title.map((t, index)=>{
                    if(index >= 6 && index < 9){
                        return(
                            <NumberButton key={index} title={title[index]} click={click![index]}/>
                        )
                    }
                })
            }
        </View>
        <View style={{flexDirection:'row', flex: 1}}>
            {
                title.map((t, index)=>{
                    if(index >= 9 && index < 12){
                        return(
                            <NumberButton key={index} title={title[index]} click={click![index]}/>
                        )
                    }
                })
            }
        </View>
        </View>
    )
}