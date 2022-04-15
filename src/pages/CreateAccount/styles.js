import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(169, 155, 252)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    containerLogo:{
      flex: 1,
      justifyContent: 'center',
    },

    title: {
      fontSize: 50,
    },

    subtitle: {
        fontSize: 30,
        marginBottom: 20,
      },

    form: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
      },

    input:{
      backgroundColor: '#FFF',
      height: 50,
      width: '90%',
      marginBottom: 15,
      color: '#222',
      borderRadius:7,
      padding:20,
    },

  });

  export default styles