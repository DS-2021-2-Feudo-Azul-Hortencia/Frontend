import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet} from 'react-native';
import styles from './styles';
import Images from './images';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Axios from 'axios';

export default function Midia() {

  let deviceHeight = Dimensions.get('window').height;
  let deviceWidth = Dimensions.get('window').width;

  const[midia, setMidia] = useState();

  async function imagePickerCall() {
    if(Constants.platform.ios){
      const {status} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
      if(status != 'granted'){
        alert("A permissão é necessária.");
        return;
      }
    }

    const data = await ImagePicker.launchCameraAsync({})

  }
  
  async function uploadImage() {
    const data = new FormData();
    data. append('midia', {
      fileName: midia.filename,
      uri: midia.uri,
      type: midia.type,
    });

    await Axios.post('http://localhost:3333/files', data);
  }
  
  return (
     <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          
        <Text style={styles.white1}>Mídias</Text>

          <TouchableOpacity 
            style={styles.button}
            onPress={imagePickerCall}>
              <View style={styles.aligntxt}>
                <Text style={styles.black1}>Fotografar</Text>
              </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={uploadImage}>
              <View style={styles.aligntxt}>
                <Text style={styles.black1}>Fazer Upload</Text>
              </View>
          </TouchableOpacity>
          
          
          <View style={{backgroundColor: '#A99BFC', 
          display: 'flex', 
          flexDirection: 'row', 
          flexWrap: 'wrap',
          marginTop: 30,}}>
            {
            Images.map((image, index) => (
              <TouchableOpacity key={index} onPress=
              {() => {}}>
                <Image source={image.url} style={
                  {height: deviceHeight / 3, 
                  width: deviceWidth / 3 - 6, 
                  borderRadius: 10, margin: 2}}/>
              </TouchableOpacity>
            ))
            }
          </View>

        </View>
      </ScrollView>
     
  );
}