import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const UserDetailScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <ImageBackground
      source={{ uri: 'https://cdn.andro4all.com/andro4all/2023/01/Fondo-de-pantalla-aesthetic-de-cielo-y-mar.jpg?height=600' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>User Detail</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.text}>{user.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.text}>{user.email}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.text}>{user.phone}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#000000',
  },
  text: {
    fontSize: 16,
    color: '#000000',
  },
});

export default UserDetailScreen;
