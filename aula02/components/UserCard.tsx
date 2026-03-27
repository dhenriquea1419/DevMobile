import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface UserCardProps {
  nome: string;
  profissao: string;
}

export default function UserCard({ nome, profissao }: UserCardProps) {
  const [online, setOnline] = useState(false);

  const statusColor = online ? '#10B981' : '#EF4444';
  const statusText = online ? 'Online' : 'Offline';

  const toggleStatus = () => {
    setOnline(!online);
  };

  return (
    <ThemedView style={styles.card}>
      <View style={styles.header}>
        <View style={styles.info}>
          <ThemedText style={styles.nome}>{nome}</ThemedText>
          <ThemedText style={styles.profissao}>{profissao}</ThemedText>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
          <Text style={styles.statusText}>{statusText}</Text>
        </View>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={toggleStatus}
      >
        <Text style={styles.buttonText}>
          Mudar para {online ? 'Offline' : 'Online'}
        </Text>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    gap: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  profissao: {
    fontSize: 14,
    opacity: 0.7,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
    backgroundColor: '#0051D5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
