import React, { useState, useEffect } from "react";
import styles from "./styles";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ListFiles({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [urlImage, setUrlImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFilesTravel();
  }, []);

  const getFilesTravel = async () => {
    try {
      const response = await axios.get(
        "https://backend-feudo-azul.herokuapp.com/file/user/all-files?id=625781c009dd7b412f1f9162"
      );
      setImages(
        response && response.data && response.data.files
          ? response.data.files
          : []
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error load images", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleTravel}>Viagem: Havaí 20/03/2022</Text>
      <View style={styles.btnUploadWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("UploadFiles")}
          style={styles.uploadBtn}
        >
          <Icon name="upload" size={20} color="#333" />
          <Text style={[styles.textBtnUploadMargin, styles.titleTravel]}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
      {images.length > 0 ? (
        <>
          <ScrollView>
            <View style={styles.imagesWrapper}>
              {images.map((image) => (
                <View key={image._id}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                      setUrlImage(image.url);
                    }}
                    style={styles.btnImage}
                  >
                    <Image
                      style={styles.imageContent}
                      source={{
                        uri: image.url
                          ? image.url
                          : "https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png",
                      }}
                    />
                    <Text style={styles.titleImage}>{image.fileName}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <>
                <View style={styles.header}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Icon name="close" size={30} color="#333" />
                  </TouchableOpacity>
                </View>
                <ImageBackground
                  source={{
                    uri: urlImage,
                  }}
                  resizeMode="contain"
                  style={styles.imagePreview}
                />
              </>
            </Modal>
          </View>
        </>
      ) : (
        <View style={styles.noImageWrapper}>
          {loading ? (
            <ActivityIndicator size="large" color="#333333AA" />
          ) : (
            <Text style={styles.noImagesText}>Não há arquivos</Text>
          )}
        </View>
      )}
    </View>
  );
}
