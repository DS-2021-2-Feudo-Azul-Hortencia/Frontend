import { StyleSheet, Dimensions } from "react-native";
const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
console.log(widthScreen);

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingVertical: 20,
    backgroundColor: "#A99BFC",
  },
  btnUploadWrapper: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 10
  },
  uploadBtn: {
    justifyContent: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    width: 130,
    height: 40,
    marginTop: 15,
  },
  textBtnUploadMargin: {
    marginLeft: 10,
  },
  titleTravel: {
    fontSize: 20,
    color: "#333",
    fontWeight: "700",
  },
  imagesWrapper: {
    justifyContent: "space-between",
    height: heightScreen + 50,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 20,
    padding: 5,
  },
  btnImage: {
    height: widthScreen * 0.49 + 30,
    width: widthScreen * 0.43,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageContainer: {
    width: "100%",
    height: "100%",
  },
  imageContent: {
    width: "100%",
    height: "70%",
  },
  titleImage: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "700",
    color: "#333",
  },

  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#ddd",
    shadowColor: "#000",
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalWrapper: {
    backgroundColor: "#00000088",
    justifyContent: "center",
    flex: 1,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  imagePreview: {
      flex: 1,
      backgroundColor: '#fff'
  },
  noImageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noImagesText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#333'
  }
});
