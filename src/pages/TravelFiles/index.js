import {useState, useEffect} from 'react';
import { Text, View, ScrollView, Pressable, Image} from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {Header} from '../../components/Header';

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
      <Header
        title={travel.name}
        left="Voltar"
        onLeft={handleBack}
      />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContainer}>

      </ScrollView>
    </View>
  )
}

export default TravelFiles