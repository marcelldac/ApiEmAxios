import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { KEY } from '@env' //Importando a variável de ambiente KEY (react-native-dotenv)

import api from './src/services/api'

export default function App() {

  const [cars, setCars] = React.useState([]);

  api.get('/cars').then((response) => {
    //console.log(response.data)
    console.log('Updated Cars')
    setCars(response.data)
  }) // Possible Unhandled Promise Rejection | [AxiosError: Network Error] <- Resolver esse erro.

  return (
    <View style={styles.container}>
      <Text>{`O valor da variável KEY é = ${KEY} `}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
