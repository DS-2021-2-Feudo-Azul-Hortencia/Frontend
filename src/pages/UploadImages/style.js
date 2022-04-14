import {StyleSheet, Dimensions} from 'react-native';
const widthScreen = Dimensions.get("window").width;

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#A99BFC',
        alignItems: 'center',
        padding: 20,
    },
    textInputName: {
        fontSize: 15,
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold'
    },
    inputNameFile: {
        width: widthScreen * 0.9,
        backgroundColor: '#fff',
        paddingLeft: 10,
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 5,
        height: 50,
    },
    containerAction: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
    },
    searchImageButton: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: widthScreen * 0.9,
        borderRadius: 10,
        height: 200
    },
    textMainBtn: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 20,
    },
    uploadImage: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        width: widthScreen * 0.9,
        borderRadius: 10,
        height: 50,
    },
    textUploadBtn: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: '700',
    },
    uploadImageDisabled: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaa',
        width: widthScreen * 0.9,
        borderRadius: 10,
        height: 50,
    }
});