import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer() {
  const handleSettings = () => {
    Alert.alert('Configurações', 'Abrindo configurações...');
  };

  const handleHelp = () => {
    Alert.alert('Ajuda', 'Central de ajuda e suporte');
  };

  const handleAbout = () => {
    Alert.alert('Sobre', 'Versão 1.0.0\nDesenvolvido com React Native & Expo\nPor Daniel Araújo');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.footerItem}
          onPress={handleSettings}
        >
          <Ionicons name="settings" size={24} color="#6C5CE7" />
          <Text style={styles.footerText}>Configurações</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerItem}
          onPress={handleHelp}
        >
          <Ionicons name="help-circle" size={24} color="#6C5CE7" />
          <Text style={styles.footerText}>Ajuda</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerItem}
          onPress={handleAbout}
        >
          <Ionicons name="information-circle" size={24} color="#6C5CE7" />
          <Text style={styles.footerText}>Sobre</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.copyright}>
        <Text style={styles.copyrightText}>© 2026 DA.WEB - Todos os direitos reservados</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  footerItem: {
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    fontSize: 12,
    color: '#6C5CE7',
    fontWeight: '600',
    textAlign: 'center',
  },
  copyright: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  copyrightText: {
    fontSize: 10,
    color: '#999999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
