import { StyleSheet, View } from 'react-native';


export const Screen2 = () => {
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

    flex: 0,
    left: 0,
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 5,
    borderColor: 'white'

  },
  boxOrange: {
    flex: 0,
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 5,
    borderColor: 'white',
    left: '45%'



  },
  boxGreen: {
    position: 'absolute',
    flex: 0,
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 5,
    borderColor: 'white',
    right: 0,
    top: '25%'
  }
})