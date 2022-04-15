import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    zIndex:0
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
  scroll: {
    flex: 1,
    backgroundColor: 'rgb(169, 155, 252)',
  },
  scrollContainer:{
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  },
  filterButton: {
    height: 20,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1
  },
  filterButtonText: {
    fontSize: 16,
    paddingHorizontal: 20,
    color: '#fff',
  },
  travelCard: {
    width: '95%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderRadius: 10,
    marginVertical: 10
  },
  cardInfo: {
    backgroundColor: '#4A4D9C',
    borderRadius: 10,
    padding: 10,
    flex: 1
  },
  cardBackground: {
    minHeight: 75
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  cardTitle:{
    fontSize: 20,
    color: '#fff',
  },
  cardText:{
    fontSize: 16,
    color: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
  }
})

export default styles