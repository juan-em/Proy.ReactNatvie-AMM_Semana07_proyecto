import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet,ImageBackground } from 'react-native';
import { database } from './database/firebase';
import { collection, addDoc } from 'firebase/firestore';

const CreateUserScreen = (props) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === '') {
      alert('Por favor, ingresa un nombre');
    } else {
      await addDoc(collection(database, 'usuarios'), state);
      // alert('usuario guardado')
      props.navigation.navigate('UsersList');
    }
  };

  return (
    <ImageBackground
        source={{ uri: 'https://cdn.andro4all.com/andro4all/2023/01/Fondo-de-pantalla-aesthetic-de-cielo-y-mar.jpg?height=600' }}
        style={styles.backgroundImage}
      >
    <ScrollView style={styles.container}>
    
        <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Name User"
          onChangeText={(value) => handleChangeText('name', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Email User"
          onChangeText={(value) => handleChangeText('email', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Phone User"
          onChangeText={(value) => handleChangeText('phone', value)}
        />
      </View>
      <View>
        <Button title="Save User" onPress={() => saveNewUser()} />
      </View>

      
      
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    color:"#fff"
  },
  inputGroup: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  input: {
    height: 40,
    color:"#fff"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});

export default CreateUserScreen;
