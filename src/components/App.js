import React from "react";
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Card from "./card/Card";
import styleSheet from "./card/Card.style";

let MyFunction = () => {
  return (
    <SafeAreaView style={styleSheet.container}>
<Card title="Oğuz Atay" text="Can çekişmek nasıl bir şey bilir misin Olric?"/>
<Card title="Nazim Hikmet" text="Sen yanmasan, ben yanmasam, biz yanmasak nasıl çıkar karanlıklar aydınlığa."/>
<Card title="Asik Veysel" text="Şu geniş dünyaya sığmayan gönül, şimdi bir odaya kapandı kaldı."/>
</SafeAreaView>
  );
};



export default MyFunction;
