import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#2B529D'
  },
  scroll: {
    flex: 1,
    backgroundColor: 'rgb(169, 155, 252)',
  },
  scrollContainer:{
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  },
})

export default styles