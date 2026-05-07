import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const ExploreScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Explore</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categorias Populares</Text>
          <Text style={styles.sectionText}>
            Descubra novas categorias como Restaurantes, Parques e Eventos.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lugares em Destaque</Text>
          <Text style={styles.sectionText}>
            Confira os lugares mais visitados da cidade. Planeje sua próxima aventura!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dicas Rápidas</Text>
          <Text style={styles.sectionText}>
            Dicas úteis para explorar com segurança e aproveitar ao máximo.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  section: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#666',
  },
});

export default ExploreScreen;