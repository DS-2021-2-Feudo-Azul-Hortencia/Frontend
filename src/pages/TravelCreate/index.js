import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native'
//import DateTimePicker from '@react-native-community/datetimepicker';
//DateTimePickerAndroid.open(params: AndroidNativeProps)
//DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])

import api from '../../services'

import styles from './styles'


const TravelCreate = ({navigation}) => {
  const [travel, setTravel] = useState({
    travelName: '',
    initialDate: '',
    finalDate: '',
    country: '',
    city: ''
  })

  const handleSubmit = () => {
    api.post('/travel/planning', {
      ...travel,
      start: (new Date(travel.initialDate)).toISOString(),
      end: (new Date(travel.finalDate)).toISOString(),
      countries: travel.country.split(','),
      cities: travel.city.split(',')
    }).then(response => {
      navigation.navigate('TravelList', {travel: response.data.travel})
    }).catch(err => console.log(err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar viagem</Text>
      <TextInput
        style={styles.input}
        value={travel.travelName}
        placeholder="Nome da viagem"
        onChangeText={travelName => setTravel({...travel, travelName})}
      />
      <TextInput
        style={styles.input}
        value={travel.initialDate}
        placeholder="Início da viagem"
        onChangeText={initialDate => setTravel({...travel, initialDate})}
      />
      <TextInput
        style={styles.input}
        value={travel.finalDate}
        placeholder="Fim da viagem"
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
  )
}

export default TravelCreate