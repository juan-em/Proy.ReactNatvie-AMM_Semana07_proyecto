import React, {useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { database } from './database/firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Usuarios from './Usuarios'

const UsersList = () => {

  const [users, setUsers] = useState([])

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  useEffect(() =>{
    const collectionRef = collection(database, 'usuarios')
    const q = query(collectionRef, orderBy('name','desc'))

    const unsuscribe = onSnapshot (q, querySnapshot => {
      setUsers(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          phone: doc.data().phone
        }))
      )
    })
    return unsuscribe
  }, [])

  return (
    <ImageBackground
        source={{ uri: 'https://cdn.andro4all.com/andro4all/2023/01/Fondo-de-pantalla-aesthetic-de-cielo-y-mar.jpg?height=600' }}
        style={styles.backgroundImage}
      >

    <View style={styles.container}>
      <Text style={styles.title}>UsersList</Text>
      {users.map((usuario) => (
        <Usuarios key={usuario.id} {...usuario} onDelete={handleDeleteUser}/>
      ))}
    </View>

      </ImageBackground>
  )
}

export default UsersList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color:"#fff"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      }
  });
  