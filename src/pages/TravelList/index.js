import { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from "react-native";
import styles from "./styles";
import Header from "../../components/Header";

import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../../services";

const TravelList = ({ navigation, route }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [modal, setModal] = useState(false);

  const [travels, setTravels] = useState();

  useEffect(() => {
    if (route.params?.travel) {
      setTravels(
        travels ? [route.params.travel, ...travels] : [route.params.travel]
      );
    }
  }, [route.params]);

  useEffect(async () => {
    if (!travels) {
      const token = await AsyncStorage.getItem("@token");
      const user = await AsyncStorage.getItem("@user");
      console.log('aqui', user);
      api
        .get(`/travel?id=${user}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          if (response.data) setTravels(response.data);
        })
        .catch((err) => console.log(err.response.data));
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Header
          title="Selecione sua viagem"
          left="Voltar"
          onLeft={() => navigation.navigate("TelaInicio")}
          right="Filtros"
          onRight={() => setModal(true)}
        />
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContainer}
        >
          {travels &&
            travels
              .filter((travel) => {
                if (start.length >= 10 && end.length >= 10) {
                  const travelStart = new Date(travel.start);
                  const range = {
                    start: new Date(start),
                    end: new Date(end),
                  };
                  return travelStart >= range.start && travelStart <= range.end;
                } else {
                  return true;
                }
              })
              .map((travel, index) => (
                <TouchableOpacity
                  key={`${travel.travelName}${index}`}
                  onPress={() => navigation.navigate('ListFiles', {travel})}
                  style={styles.travelCard}
                >
                  <View style={styles.cardBackground}>
                    <Image
                      source={{uri: 'https://travelourplanet.com/wp-content/uploads/2010/03/Guida-per-Visitare-Rio-de-Janeiro-in-2-e-3-Giorni.jpg'}}
                      style={styles.cardImage}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.infoTravel}>
                    <Text style={[styles.infoTravelText, styles.title]}>
                      {travel.travelName}
                    </Text>
                    <Text style={[styles.infoTravelText]}>
                      Pa??s: {travel.countries} (
                      {travel.cities}
                    </Text>
                    <Text style={[styles.infoTravelText]}>
                      In??cio:{" "}
                      {new Date(travel.start).toLocaleDateString("pt-BR")}
                    </Text>
                    <Text style={[styles.infoTravelText]}>
                      Fim: {new Date(travel.end).toLocaleDateString("pt-BR")}
                    </Text>
                  </View>
                </TouchableOpacity>
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
              placeholder="MM/DD/AAAA"
              onChangeText={(text) => setStart(text)}
            />
            <Text style={styles.modalText}>Data Final</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="MM/DD/AAAA"
              onChangeText={(text) => setEnd(text)}
            />
            <Button text="Fechar" onPress={() => setModal(!modal)} />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default TravelList;
