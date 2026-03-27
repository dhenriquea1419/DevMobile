// Arquivo: components/ProfileSection.jsx
// Este arquivo mostra como criar componentes reutilizáveis em React Native

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Componente reutilizável para seções do perfil
 * @param {string} title - Título da seção
 * @param {array} items - Array de itens para exibir
 */
export function ProfileSection({ title, items }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {items.map((item, index) => (
        <Text key={index} style={styles.item}>
          {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#DFE6E9',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6C5CE7',
    marginBottom: 8,
  },
  item: {
    fontSize: 14,
    color: '#636E72',
    marginVertical: 3,
  },
});

// =====================================
// Como usar este componente:
// =====================================

// import { ProfileSection } from './components/ProfileSection';

// // Em seu App.jsx:
// <ProfileSection 
//   title="Cursos"
//   items={['Dev React Native', 'Dev Java', 'QA']}
// />

// <ProfileSection 
//   title="Habilidades"
//   items={['JavaScript', 'React', 'React Native']}
// />
