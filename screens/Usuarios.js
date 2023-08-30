import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { database } from "./database/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const Usuarios = ({ id, email, name, phone, onDelete }) => {
  const navigation = useNavigation()
  const handleDelete = async () => {
    try {
      const userRef = doc(database, "usuarios", id);
      await deleteDoc(userRef);
      onDelete(id);
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  const handleViewUser = () => {
    navigation.navigate("UserDetailScreen", {
      user: { id, email, name, phone },
    });
  };
  return (
    <View style={styles.card}>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.viewButton} onPress={handleViewUser}>
          <Text style={styles.buttonText}>Ver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  email: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    marginBottom: 4,
  },
  phone: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  viewButton: {
    backgroundColor: "#007AFF",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Usuarios;
