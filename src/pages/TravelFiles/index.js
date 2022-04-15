import {useState, useEffect} from 'react';
import { Text, View, ScrollView, Pressable, Image} from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const TravelFiles = ({route}) => {
  const navigation = useNavigation()

  const [travel, setTravel] = useState({
    name: 'Viagem não selecionada'
  })

  useEffect(() => {
    if(route.params?.travel) setTravel(route.params.travel)
  }, [route.params])

  const handleBack = () => {
    navigation.navigate('TravelList')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable 
          onPress={handleBack}
          style={({pressed}) => [styles.backButton, { backgroundColor: pressed ? '#2B529D' : '#3E67B1'}]}
          >
          <Text style={styles.backButtonText}>Voltar</Text>
        </Pressable>
        <Text style={styles.title}>{travel.name}</Text>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContainer}>

      </ScrollView>
    </View>
  )
}

export default TravelFiles