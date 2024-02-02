import { StyleSheet, View } from 'react-native';


export const Screen5 = () => {
  return (
    <View style={style.container}>
      <View style={style.boxpurple}></View>
      <View style={style.boxOrange}></View>
      <View style={style.boxGreen}></View>

    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'flex-start',

    width: 400,
    height: 400

  },

  boxpurple: {
    flex: 2,
    left: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 5,
    borderColor: 'white',


  },
  boxOrange: {
    flex: 2,
    width: '100%',
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 5,
    borderColor: 'white',




  },
  boxGreen: {
    flex: 3,
    width: '100%',
    height: '80%',
    backgroundColor: 'green',
    borderWidth: 5,
    borderColor: 'white',
    top: "-5%"


  }
})