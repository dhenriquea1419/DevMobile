import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>DA.WEB</Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/')}
          >
            <Ionicons name="home" size={24} color="#6C5CE7" />
            <Text style={styles.menuText}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/lista-usuarios')}
          >
            <Ionicons name="people" size={24} color="#6C5CE7" />
            <Text style={styles.menuText}>Usuários</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6C5CE7',
  },
  menuContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  menuItem: {
    alignItems: 'center',
    gap: 5,
  },
  menuText: {
    fontSize: 12,
    color: '#6C5CE7',
    fontWeight: '600',
  },
});
