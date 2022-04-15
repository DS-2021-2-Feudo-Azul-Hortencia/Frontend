import {useState, useEffect} from 'react';
import { Text, View, ScrollView, Pressable, Image, Modal, TextInput} from 'react-native'
import styles from './styles';

import Button from '../../components/Button';

const TravelList = ({navigation, route}) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const [modal, setModal] = useState(false)

  const [travels, setTravels] = useState([
    { //0
      name: 'Viagem da firma',
      start: "2013-10-01T00:00:00.000Z",
      end: "2013-10-01T00:00:00.000Z",
      countries: ['Argentina', 'Brasil', 'Chile'],
      cities: ['Ushuaia', 'El Calafate'],
      files: [
        
      ]
    },
    { //1
      name: 'Viagem com a família',
      start: "2013-10-01T00:00:00.000Z",
      end: "2013-10-01T00:00:00.000Z",
      countries: ['França', 'Itália'],
      cities: ['Paris', 'Lyon', 'Veneza', 'Roma']
    },
    { //2
      name: 'Viagem com a família',
      start: "2013-10-01T00:00:00.000Z",
      end: "2013-10-01T00:00:00.000Z",
      countries: ['França', 'Itália'],
      cities: ['Paris', 'Lyon', 'Veneza', 'Roma']
    },
    { //3
      name: 'Viagem com a família',
      start: "2013-10-01T00:00:00.000Z",
      end: "2013-10-01T00:00:00.000Z",
      countries: ['França', 'Itália'],
      cities: ['Paris', 'Lyon', 'Veneza', 'Roma']
    }
  ])

  useEffect(() => {
    if(route.params?.travel) setTravels([route.params.travel, ...travels])
  }, [route.params])

  return (
    <>
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Selecione Sua Viagem</Text>
        <Pressable 
          onPress={() => setModal(true)}
          style={({pressed}) => [styles.filterButton, { backgroundColor: pressed ? '#2B529D' : '#3E67B1'}]}
          >
          <Text style={styles.filterButtonText}>Filtros</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContainer}>
        {travels.filter(travel => {
          if(start.length >= 10 && end.length >= 10) {
            const travelStart = new Date(travel.start);
            const range = {
              start: new Date(start),
              end: new Date(end)
            }
            console.log(range)
            return travelStart >= range.start && travelStart <= range.end
          }else{
            return true
          }
        }).map((travel, index) => (
          <Pressable
            key={travel.name + index}
            onPress={() => navigation.navigate('TravelFiles', {travel})}
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
                <Text style={styles.cardText}>Início: {new Date(travel.start).toLocaleDateString("pt-BR")}</Text>
                <Text style={styles.cardText}>Fim: {new Date(travel.end).toLocaleDateString("pt-BR")}</Text>
              </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
    <Modal
      onDismiss={() => setModal(false)}
      visible={modal}
      onRequestClose={() => setModal(false)}
      animationType="slide"
      style={styles.modal}
      transparent
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Filtro</Text>

          <Text style={styles.modalText}>Data Inicial</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="DD/MM/AAAA"
            onChangeText={(text) => setStart(text)}
          />
          <Text style={styles.modalText}>Data Final</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="DD/MM/AAAA"
            onChangeText={(text) => setEnd(text)}
          />
          <Button text="Fechar" onPress={() => setModal(!modal)}/>
        </View>
      </View>
    </Modal>
    {/* {modal && 
      <>
        <Pressable style={styles.backdrop} onPress={() => setModal(false)}>
        </Pressable>
      </>
    } */}
    </>
  )
}

export default TravelList