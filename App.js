import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  
} from "react-native";
//import Snackbar from "react-native-snackbar";
// w

const currencyPerRupeee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = (currency) => {
      // if(!inputValue){
      //   return Snackbar.show({
      //     text: 'plaese enter a value',
      //     backgroundColor: "#EA7773",
      //     textColor: "#FFF", 
      //     duration: Snackbar.LENGTH_INDEFINITE,   
      //   })
      // } 
    //  alert('hello');

      let result = parseFloat(inputValue) * currencyPerRupeee[currency]
      setResultValue(result.toFixed(2));
  }

  return (
    <ScrollView style={{backgroundColor: "#1b262c"}}
    keyboardShouldPersistTaps="handled"
    contentInsertAdjustmentBehavior = " automatic"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter Value"
          placeholderTextColor="#c1c1c1"
          value={inputValue}
          onChangeText={(inputValue) => 
            setInputValue(inputValue)}
          ></TextInput>
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupeee).map((currency) => (
            <TouchableOpacity
            onPress={() => buttonPressed(currency)}
            key={currency} 
            style={styles.convertButton}
            >
              <Text style={styles.temp}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b262c",
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    borderColor: "#bbe1fa",
    borderWidth:2,
    alignItems: "center",
  },
  resultValue: {
    fontSize:30,
    color: "#FFF",
    fontWeight: "bold"
  },
  inputContainer:{
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#bbe1fa",

  },
  input: {
    fontSize: 30,
    textAlign: "center",
    color:"#FFFFFF",
  },
  convertButtonContainer: {
    flexDirection: "row",
    flexWrap:"wrap",
    marginTop: 10,
  },

  convertButton:{
    alignItems:"center",
    justifyContent: "center",
    height: 100,
    width: "33.3%",
    borderWidth: 2,
    borderColor: "#bbe1fa",
    marginTop: 10,
    backgroundColor:"#0f4c75"
  },
  convertButtonText:{
    color: "#FFF",
    fontSize: 15,
  },
});
