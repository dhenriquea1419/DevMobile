import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      alert('Preencha todos os campos');
      return;
    }

    router.replace('/'); // vai para home
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>■</Text>
          </View>
        </View>

        {/* CARD */}
        <View style={styles.card}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#666"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#666"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Don’t have any account?{' '}
            <Text style={styles.link} onPress={() => router.push('/signup')}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },

  header: {
    height: 180,
    backgroundColor: '#111',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    fontSize: 30,
    color: '#111',
  },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },

  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#f5f5f5',
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
    color: '#000',
    borderWidth: 1,
    borderColor: '#ddd',
  },

  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },

  link: {
    color: '#000',
    fontWeight: 'bold',
  },
});