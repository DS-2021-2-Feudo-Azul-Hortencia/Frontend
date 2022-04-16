import React, { useState } from "react";
import {
  View,
  Image,
  Platform,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Toast from 'react-native-toast-message';
import { launchImageLibrary } from "react-native-image-picker";
import api from '../../services';

import DefaultImage from "../../assets/document_icon.png";
import style from "./style";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

const createFormData = (photo, body = {}) => {
  let data = new FormData();

  const currentPhoto = photo.assets[0];

  const nameFormat = `${body.name}.${currentPhoto.fileName.split(".")[1]}`;
  
  data.append("photo", {
    name: nameFormat,
    type: currentPhoto.type,
    uri:
      Platform.OS === "ios"
        ? currentPhoto.uri.replace("file://", "")
        : currentPhoto.uri,
  });

  return data;
};

const UploadImages = ({ navigation, route }) => {
  const [photo, setPhoto] = React.useState(null);
  const [name, setName] = useState("");

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      if (response) {
        setPhoto(response);
      }
    });
  };

  const handleUploadPhoto = async () => {
    const formData = createFormData(photo, { name });
    const userId = await AsyncStorage.getItem("@user");

    (async () => {
      try {
          let response = await new Promise(resolve => {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://backend-feudo-azul.herokuapp.com/file/upload');
            xhr.onload = function(e) {
              resolve(xhr.response);
            };
            xhr.onerror = function () {
              resolve(undefined);
              console.error("** An error occurred during the XMLHttpRequest");
            };
            xhr.send(formData);
         })
        
         if(response !== undefined) {
          const {url, fileName } = JSON.parse(response);
          try {

              await api.post('/file/user', {
                url,
                fileName,
                user: userId,
                travel: route.params.travel._id
              });
          } catch (err) {
            console.log("error", err);
          }
        
          navigation.navigate('ListFiles', {travel: route.params.travel});
        }
      } catch (error) {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: 'Não foi possível fazer o envio do arquivo. Tente Novamente.'
        });
      } 
      
   })()
  };

  return (
    <View style={styles.container}>
      <View style={style.containerAction}>
        <View>
          <Text style={style.textInputName}>Nome do Arquivo</Text>
          <TextInput
            onChangeText={(text) => setName(text)}
            placeholderTextColor="#333"
            style={style.inputNameFile}
            placeholder="Digite Aqui"
          />
        </View>
        {photo ? (
          <TouchableOpacity
            style={style.searchImageButton}
            onPress={handleChoosePhoto}
          >
            <Image
              source={{ uri: photo.assets[0].uri }}
              style={{ width: "100%", height: "100%" }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={style.searchImageButton}
            onPress={handleChoosePhoto}
          >
            <Image source={DefaultImage} style={{ width: 70, height: 70 }} />
            <Text style={style.textMainBtn}>
              Toque para escolher um Arquivo
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        disabled={photo || name ? false : true}
        style={photo && name ? style.uploadImage : style.uploadImageDisabled}
        onPress={() => handleUploadPhoto()}
      >
        <Text style={style.textUploadBtn}>Enviar Arquivo</Text>
      </TouchableOpacity>
      <Toast />
    </View>
  );
};

export default UploadImages;
