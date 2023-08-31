import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { FrameButtons } from './src/components/frameButtons';
import { ColumButtons } from './src/components/columButtons';

export default function App() {
  const [display, setDisplay] = useState<string>(" ")
  const [display2, setDisplay2] = useState<string>(" ")
  const [value1, setValue1] = useState<number>()
  const [value2, setValue2] = useState<number>()
  const [controller, setController] = useState<boolean>(true)
  const operation = useRef((valor1: number, valor2:number)=>{})

  const numbersTitle = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "="]
  
   const handleClick = (title:any)=>{
    if(controller == true){      
      setDisplay(prevState => prevState+title.toString())
      setValue1(Number.parseFloat(display))      
    }else if(controller == false){      
      setDisplay(prevState => prevState.toString()+title)
      setDisplay2((prevState:any) => prevState+title.toString())
      setValue2(Number.parseFloat(display2))
    }
  }
  const clicks = [handleClick, handleClick, handleClick, handleClick, handleClick, handleClick, handleClick, handleClick, handleClick, handleClick, handleClick, igual]
  
  const operations = ["DEL", "+", "-", "*", "/"]

  function soma(title:string){
    setDisplay(prevState => prevState+title)
    setController(false)
    
     operation.current = (valor1: number, valor2:number) => {
      const soma = valor1 + valor2

      setDisplay(soma.toString())
     }
  }

  function sub(title:string){
    setDisplay(prevState => prevState+title)
    setController(false)

    
     operation.current = (valor1: number, valor2:number) => {
      const sub = valor1 - valor2

      setDisplay(sub.toString())
     }
  }
  
  function div(title:string){
    setDisplay(prevState => prevState+title)
    setController(false)

    
     operation.current = (valor1: number, valor2:number) => {
      const div = valor1 / valor2

      setDisplay(div.toString())
     }
  }
  
  function mult(title:string){
    setDisplay(prevState => prevState+title)
    setController(false)
    
     operation.current = (valor1: number, valor2:number) => {
      const mult = valor1 * valor2
      setDisplay(mult.toString())
     }
  }
  
  function del(){
    setDisplay("")
    setDisplay2(""),
    setController(true)
    setValue1(0)
    setValue2(0)
    operation.current = (()=>{})
  }

  function igual(){
    operation.current(value1!, value2!)
    
  }

  const functiosOperations = [del, soma, sub, mult, div]
  return (
    <View style={styles.container}>
      <View style={styles.frameUp}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Text style={styles.title}>{display}</Text>
        </ScrollView>
        <Text>{value1}</Text>
      </View>
      <View style={styles.frameDown}>
        <View style={styles.frameDownRow}>
        <FrameButtons title={numbersTitle} click={clicks}/>
        <ColumButtons title={operations} click={functiosOperations} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  frameUp:{
    marginTop:26,
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20
  },

  title:{
    fontSize: 40,
    fontWeight: '300',
  },
  frameDownRow:{
    flexDirection:'row',
    flex: 1,
    backgroundColor: '#eeeeee'
  },

  frameDown:{
    flexDirection:'column',
    flex: 8,
    backgroundColor: '#eeeeee'
  }

});
