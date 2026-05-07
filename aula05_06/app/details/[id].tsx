import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

const data = [
  { id: '1', title: 'Item 1', description: 'Descrição do Item 1' },
  { id: '2', title: 'Item 2', description: 'Descrição do Item 2' },
  { id: '3', title: 'Item 3', description: 'Descrição do Item 3' },
  { id: '4', title: 'Item 4', description: 'Descrição do Item 4' },
];

const DetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const item = data.find((d) => d.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ID recebido: {id}</Text>
      {item ? (
        <>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </>
      ) : (
        <Text>Item não encontrado</Text>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default DetailsScreen;