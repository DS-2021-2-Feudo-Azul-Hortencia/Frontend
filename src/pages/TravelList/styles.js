import {StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: 'rgb(169, 155, 252)',
  },
  scrollContainer:{
    alignItems: 'center'
  },
  travelCard: {
    width: '90%',
    marginVertical: 10,
  },
  infoTravel: {
    backgroundColor: '#4A4D9C',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
  },
  infoTravelText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardBackground: {
    minHeight: 75
  },
  cardImage: {
    width: width * 0.9,
    height: width * 0.6,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
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