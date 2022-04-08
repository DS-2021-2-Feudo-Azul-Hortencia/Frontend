import {useState} from 'react';
import { Text, View, ScrollView, Pressable, Image} from 'react-native'
import styles from './styles';

const TravelList = () => {
  const handleFilter = () => {
    alert('Clicou no filter')
  }

  const [travels, setTravels] = useState([
    { //0
      name: 'Viagem da firma',
      initialDate: '01/04/2022',
      finalDate: '15/04/2022',
      countries: ['Argentina', 'Brasil', 'Chile'],
      cities: ['Ushuaia', 'El Calafate']
    },
    { //1
      name: 'Viagem com a família',
      initialDate: '01/06/2035',
      finalDate: '15/06/2035',
      countries: ['França', 'Itália'],
      cities: ['Paris', 'Lyon', 'Veneza', 'Roma']
    }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Selecione Sua Viagem</Text>
        <Pressable 
          onPress={handleFilter}
          style={({pressed}) => [styles.filterButton, { backgroundColor: pressed ? '#2B529D' : '#3E67B1'}]}
          >
          <Text style={styles.filterButtonText}>Filtros</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContainer}>
        {travels.map((travel, index) => (
          <Pressable
            key={travel.name + index}
            onPress={() => alert(`Viagem ${travel.name} selecionada`)}
            style={styles.travelCard}
            >
              <View style={styles.cardBackground}>
                <Image
                  source={{uri: 'https://travelourplanet.com/wp-content/uploads/2010/03/Guida-per-Visitare-Rio-de-Janeiro-in-2-e-3-Giorni.jpg'}}
                  style={styles.cardImage}
                  resizeMode="cover"
                  />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{travel.name}</Text>
                <Text style={styles.cardText}>País: {travel.countries.join(', ')} ({travel.cities.join(', ')})</Text>
                <Text style={styles.cardText}>Início: {travel.initialDate}</Text>
                <Text style={styles.cardText}>Fim: {travel.finalDate}</Text>
              </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default TravelList