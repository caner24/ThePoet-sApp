import { StyleSheet } from "react-native";

const styleSheet = StyleSheet.create({
  container: {
    flex:1,
    margin:5,
justifyContent:"space-evenly",
  },
  font_10: {
    fontSize: 20,
  },
  text_bold: {
    fontWeight: "bold",
    fontSize: 20,
  },
  card: {
    marginTop: 80,
    display: "flex",
  },
  card_body: {
    backgroundColor: "#FF8B13",
    padding: 30,
    borderRadius: 5,
  },
  text_center: {
    textAlign: "center",
  },
  card_footer: {
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "#ECECEC",
  },
});

export default styleSheet;
