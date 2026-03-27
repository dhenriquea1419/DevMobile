import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface UsuarioProps {
  nome: string;
}

export default function Usuario({ nome }: UsuarioProps) {
  const [saudacao, setSaudacao] = useState(`Olá, ${nome}!`);
  const [original, setOriginal] = useState(true);

  const alternarSaudacao = () => {
    if (original) {
      setSaudacao(`Bem-vindo(a) de volta, ${nome}!`);
    } else {
      setSaudacao(`Olá, ${nome}!`);
    }
    setOriginal(!original);
  };

  return (
    <ThemedView style={styles.card}>
      <ThemedText style={styles.texto}>{saudacao}</ThemedText>
      <Pressable style={styles.button} onPress={alternarSaudacao}>
        <Text style={styles.buttonText}>Mudar Mensagem</Text>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
