import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface User {
  id: string;
  name: string;
  profession: string;
  status: 'Online' | 'Offline';
}

const initialUsers: User[] = [
  {
    id: '1',
    name: 'João Silva',
    profession: 'Desenvolvedor Back-End',
    status: 'Online',
  },
  {
    id: '2',
    name: 'Maria Santos',
    profession: 'UX/UI Designer',
    status: 'Offline',
  },
  {
    id: '3',
    name: 'Pedro Oliveira',
    profession: 'Gerente de Projetos',
    status: 'Online',
  },
  {
    id: '4',
    name: 'Ana Costa',
    profession: 'Desenvolvedora Front-End',
    status: 'Online',
  },
  {
    id: '5',
    name: 'Carlos Pereira',
    profession: 'Engenheiro de Software',
    status: 'Offline',
  },
  {
    id: '6',
    name: 'Fernanda Lima',
    profession: 'Analista de QA',
    status: 'Online',
  },
  {
    id: '7',
    name: 'Roberto Almeida',
    profession: 'DevOps Engineer',
    status: 'Offline',
  },
  {
    id: '8',
    name: 'Juliana Ferreira',
    profession: 'Cientista de Dados',
    status: 'Online',
  },
  {
    id: '9',
    name: 'Lucas Rodrigues',
    profession: 'Arquiteto de Software',
    status: 'Offline',
  },
  {
    id: '10',
    name: 'Patrícia Gomes',
    profession: 'Analista de Segurança da Informação',
    status: 'Online',
  },
];

export default function ListaUsuarios() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const toggleStatus = (id: string) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id ? { ...user, status: user.status === 'Online' ? 'Offline' : 'Online' } : user
      )
    );
  };

  const renderUser = ({ item }: { item: User }) => {
    const cardBackgroundColor = item.status === 'Online' ? '#E8F5E8' : '#FFEBEE';
    return (
      <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
        <View style={styles.avatar}>
          <Ionicons name="person-circle" size={50} color="#6C5CE7" />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.profession}>{item.profession}</Text>
          <View style={styles.statusContainer}>
            <Ionicons
              name={item.status === 'Online' ? 'radio-button-on' : 'radio-button-off'}
              size={16}
              color={item.status === 'Online' ? '#4CAF50' : '#F44336'}
            />
            <Text style={[styles.status, { color: item.status === 'Online' ? '#4CAF50' : '#F44336' }]}>
              {item.status}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => toggleStatus(item.id)}>
          <Text style={styles.buttonText}>Alterar Status</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderUser}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Fundo escuro para contraste
    paddingTop: 50,
  },
  title: {
    fontSize: 28, // Maior fonte
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30, // Mais margem
    color: '#FFFFFF', // Branco para contraste no fundo escuro
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20, // Espaçamento inferior
  },
  card: {
    borderRadius: 15, // Bordas mais arredondadas
    padding: 20, // Mais padding para espaçamento
    marginBottom: 20, // Mais margem entre cards
    flexDirection: 'row',
    alignItems: 'center', // Alinhamento horizontal dos itens
    justifyContent: 'space-between', // Distribui espaço entre elementos
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5, // Sombra mais pronunciada
  },
  avatar: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  userInfo: {
    flex: 1, // Distribui espaço
    justifyContent: 'center', // Alinhamento vertical
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profession: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    fontSize: 14,
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20, // Bordas mais arredondadas
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});