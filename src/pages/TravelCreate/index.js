import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native'
//import DateTimePicker from '@react-native-community/datetimepicker';
//DateTimePickerAndroid.open(params: AndroidNativeProps)
//DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services'
import Header from '../../components/Header';

import styles from './styles'


const TravelCreate = ({navigation}) => {
  const [travel, setTravel] = useState({
    travelName: '',
    initialDate: '',
    finalDate: '',
    country: '',
    city: ''
  })

  const handleSubmit = async () => {
    const token = await AsyncStorage.getItem('@token')
    const user = await AsyncStorage.getItem('@user')
    api.post('/travel/planning', {
      travelName: travel.travelName,
      start: new Date(travel.initialDate).toISOString(),
      end: new Date(travel.finalDate).toISOString(),
      country: travel.country,
      cities: travel.city,
      user,
    }, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      navigation.navigate('TravelList', {travel: response.data.travel})
    }).catch(err => console.log(err))
  }

  return (
    <>
      <Header
        title="Criar viagem"
        left="Voltar"
        onLeft={() => navigation.navigate('TelaInicio')}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Crie sua viagem</Text>
        <TextInput
          style={styles.input}
          value={travel.travelName}
          placeholder="Nome da viagem"
          onChangeText={travelName => setTravel({...travel, travelName})}
        />
        <TextInput
          style={styles.input}
          value={travel.initialDate}
          placeholder="Início da viagem (MM/DD/YYYY)"
          onChangeText={initialDate => setTravel({...travel, initialDate})}
        />
        <TextInput
          style={styles.input}
          value={travel.finalDate}
          placeholder="Fim da viagem (MM/DD/YYYY)"
          onChangeText={finalDate => setTravel({...travel, finalDate})}
        />
        <TextInput
          style={styles.input}
          value={travel.country}
          placeholder="Paíse(s) da viagem"
          onChangeText={country => setTravel({...travel, country})}
        />
        <TextInput
          style={styles.input}
          value={travel.city}
          placeholder="Cidade(s) da viagem"
          onChangeText={city => setTravel({...travel, city})}
        />
        <Pressable
          style={({pressed}) => [styles.submit, {backgroundColor: pressed ? '#4A4D9C' : '#4F5BFC'}]}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>Criar viagem</Text>
        </Pressable>
      </View>
    </>
  )
}

export default TravelCreate