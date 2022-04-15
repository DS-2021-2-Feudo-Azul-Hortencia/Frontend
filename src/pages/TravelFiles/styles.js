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
  title: {
    flex:1,
    fontSize: 20,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#fff',
    fontWeight: 'bold'
  },
  backButton: {
    height: 20,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1
  },
  backButtonText: {
    fontSize: 16,
    paddingHorizontal: 20,
    color: '#fff',
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