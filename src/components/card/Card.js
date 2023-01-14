import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity ,Alert} from "react-native";
import styleSheet from "./Card.style";

const Card = (props) => {
  return (
    <View style={styleSheet.card}>
      <View style={styleSheet.card_body}>
        <Text style={styleSheet.text_bold} >{props.title}</Text>
        <Text>{props.text}</Text>
      </View>
      <View style={styleSheet.card_footer}>
        <TouchableOpacity onPress={()=>Alert.alert(props.title,props.text)} >
          <Text style={styleSheet.text_center}>İceriği Göster</Text>
        </TouchableOpacity>
      </View>
    </View>


    
  );
};

export default Card;