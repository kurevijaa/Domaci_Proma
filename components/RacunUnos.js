import React, {useState} from "react";
	
import {View, TextInput, Button, StyleSheet, Modal, TouchableOpacity, Text} from 'react-native'

const RacunUnos = (props) => {
    const [tekst, postaviTekst] = useState('');
    const [iznos, postaviIznos] = useState('');

    const noviTekst = (tekst) => {
        postaviTekst(tekst);
      };    
    
    const noviIznos = (iznos) => {
        postaviIznos(iznos);
      };
    
    const noviRacun = () => {
        props.postaviRacun(tekst, iznos);
        postaviTekst('');
        postaviIznos('');
    }
    
 
    return (
        <Modal visible={props.vidljiv} animationType="slide">      
        <View
        style={stilovi.viewUnos}>
        <TextInput
          placeholder="dodaj racun"
          style={stilovi.unos}
          value={tekst}
          onChangeText = {noviTekst}
        />        
        <TextInput
          placeholder="dodaj iznos"
          style={stilovi.unos}
          value={iznos}
          onChangeText = {noviIznos}
        />

        <TouchableOpacity style={stilovi.botunUnos} onPress={noviRacun}>
          <Text style={stilovi.btnText}>Dodaj</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stilovi.botunOdustani} onPress={props.odustani}>
          <Text style={stilovi.btnText}>Odustani </Text>
        </TouchableOpacity>

      </View>
      </Modal>

    )
  }
  const stilovi = StyleSheet.create({
    viewUnos: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
    },

    unos: {
    width: '70%',
    marginBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    },
    botun: {
    margin: 20,
    },

    botunUnos: {
        width: '50%',
        marginTop: 20,
        backgroundColor: '#2196F3',
        borderRadius: 30,    
        padding: 10,
    },

    botunOdustani: {
        width: '50%',
        marginTop: 10,
        backgroundColor: "red",
        padding: 10,
        borderRadius: 30,
      },
      btnText: {
        color: "white",
        fontSize: 20,
        justifyContent: "center",
        textAlign: "center",
      },
    });
   
  export default RacunUnos