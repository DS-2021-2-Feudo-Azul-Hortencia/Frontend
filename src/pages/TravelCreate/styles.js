import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(169, 155, 252)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
  },
  input: {
    backgroundColor: '#FFF',
    width: '80%',
    height: 40,
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  submit: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  submitText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
})