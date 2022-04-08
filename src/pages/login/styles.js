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

    buttons:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      paddingBottom: 90,
    },

    input:{
      backgroundColor: '#FFF',
      width: '90%',
      marginBottom: 15,
      color: '#222',
      borderRadius:7,
      padding:10,
    },

    btnSubmit: {
      backgroundColor: '#35AAFF',
      width: '90%',
      height:45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
    },

    btnSubmitText: {
      color:'#FFF',
    },

    btnRegister: {
      marginTop: 10,
    },

    btnRegisterText: {
      color: '#FFF',
    },
  });

  export default styles