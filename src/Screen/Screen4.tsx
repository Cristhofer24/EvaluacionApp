import { StyleSheet, View } from 'react-native';


export const Screen4 = () => {
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',

    width: 400,
    height: 400

  },

  boxpurple: {
    left: 0,
    width: 100,
    height: '98%',
    backgroundColor: 'purple',
    borderWidth: 5,
    borderColor: 'white',


  },
  boxOrange: {

    width: 100,
    height: '98%',
    backgroundColor: 'orange',
    borderWidth: 5,
    borderColor: 'white',




  },
  boxGreen: {
    width: 100,
    height: '98%',
    backgroundColor: 'green',
    borderWidth: 5,
    borderColor: 'white',


  }
})