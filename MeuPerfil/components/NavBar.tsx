import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.navItem, isActive('/') && styles.activeItem]}
        onPress={() => router.push('/')}
      >
        <Ionicons 
          name="home" 
          size={28} 
          color={isActive('/') ? '#6C5CE7' : '#999999'} 
        />
        <Text style={[styles.navText, isActive('/') && styles.activeText]}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.navItem, isActive('/lista-usuarios') && styles.activeItem]}
        onPress={() => router.push('/lista-usuarios')}
      >
        <Ionicons 
          name="people" 
          size={28} 
          color={isActive('/lista-usuarios') ? '#6C5CE7' : '#999999'} 
        />
        <Text style={[styles.navText, isActive('/lista-usuarios') && styles.activeText]}>Usuários</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.navItem, isActive('/settings') && styles.activeItem]}
        onPress={() => router.push('/settings')}
      >
        <Ionicons 
          name="settings" 
          size={28} 
          color={isActive('/settings') ? '#6C5CE7' : '#999999'} 
        />
        <Text style={[styles.navText, isActive('/settings') && styles.activeText]}>Config</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 12,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 12,
    minWidth: 70,
  },
  activeItem: {
    backgroundColor: '#F0E8FF',
  },
  navText: {
    fontSize: 12,
    color: '#999999',
    fontWeight: '500',
    marginTop: 4,
  },
  activeText: {
    color: '#6C5CE7',
    fontWeight: '700',
  },
});
