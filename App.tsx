import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Arreglo } from './src/Screen/componentes/Arreglo'
import { Posicionamiento } from './src/Screen/Posicionamiento';
import { Screen1 } from './src/Screen/Screen1';
import { Screen2 } from './src/Screen/Screen2';
import { Screen3 } from './src/Screen/Screen3';
import { Screen4 } from './src/Screen/Screen4';
import { Screen5 } from './src/Screen/Screen5';
import { Screen6 } from './src/Screen/Screen6';
import { Screen7 } from './src/Screen/Screen7';
import { Screen8 } from './src/Screen/Screen8';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Arreglo/> */}
      {/* < Posicionamiento/>  */}
      {/* <Screen1/>  */}
      {/* <Screen2/>  */}
       <Screen3/>  
      {/* <Screen4/>  */}
      {/* <Screen5/>  */}
      {/* <Screen6/>  */}
      {/* <Screen7/>  */}
      {/* <Screen8 /> */}
    </SafeAreaView>
  )
}
export default App;