import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UsersList from './screens/UsersList';
import UserDetailScreen from './screens/UserDetailScreen';
import CreateUserScreen from './screens/CreateUserScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} />
      <Stack.Screen name="UsersList" component={UsersList} />
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={({ route }) => ({ title: route.params.user.name })} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#ffffff',
            }}
          >
            <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} />
            <Stack.Screen name="UsersList" component={UsersList} />
            <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
