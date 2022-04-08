import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native'
//import DateTimePicker from '@react-native-community/datetimepicker';
//DateTimePickerAndroid.open(params: AndroidNativeProps)
//DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])


import styles from './styles'


const TravelCreate = () => {
  const [travel, setTravel] = useState({
    name: '',
    initialDate: '',
    finalDate: '',
    country: '',
    city: ''
  })

  const handleSubmit = () => {
    console.log(travel)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar viagem</Text>
      <TextInput
        style={styles.input}
        value={travel.name}
        placeholder="Nome da viagem"
        onChangeText={name => setTravel({...travel, name})}
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
//fazer para cada textInput o que foi feito para o name.
}

export default TravelCreate