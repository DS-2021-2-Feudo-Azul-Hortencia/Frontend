import React, {useState} from "react";
import {
  View,
  Image,
  Platform,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import DefaultImage from "../../assets/document_icon.png";
import style from "./style";
import styles from "./style";

const SERVER_URL = "http://localhost:3002";
// const SERVER_URL = 'https://680f-2804-d59-857f-5600-6d4-c4ff-fe29-56a4.ngrok.io';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  const currentPhoto = photo.assets[0];

  data.append("photo", {
    name: currentPhoto.fileName,
    type: currentPhoto.type,
    uri:
      Platform.OS === "ios"
        ? currentPhoto.uri.replace("file://", "")
        : currentPhoto.uri,
  });

  data.append("name", body);

  //   Object.keys(body).forEach((key) => {
  //     data.append(key, body[key]);
  //   });

  return data;
};

const UploadImages = () => {
  const [photo, setPhoto] = React.useState(null);
  const [name, setName] = useState("");

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      if (response) {
        setPhoto(response);
      }
    });
  };

  const handleUploadPhoto = () => {
    const teste = createFormData(photo, { name });
    console.log(teste);
    // fetch(`${SERVER_URL}/api/upload`, {
    //   method: "POST",
    //   body: createFormData(photo, { name }),
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log("response", response);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
  };

  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   {photo && (
    //     <>
    //       <Image
    //         source={{ uri: photo.assets[0].uri }}
    //         style={{ width: 300, height: 300 }}
    //       />
    //       <Button title="Upload Photo" onPress={handleUploadPhoto} />
    //     </>
    //   )}
    //   <Button title="Choose Photo" onPress={handleChoosePhoto} />
    // </View>
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
        style={style.uploadImage}
        onPress={() => handleUploadPhoto()}
      >
        <Text style={style.textUploadBtn}>Enviar Arquivo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadImages;
