import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
  SectionList,
  Vibration,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { router } from 'expo-router';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const {
    darkMode,
    setDarkMode,
    notifications,
    setNotifications,
    sound,
    setSound,
    vibration,
    setVibration,
    autoSave,
    setAutoSave,
  } = useTheme();

  const handleVibration = (value: boolean) => {
    setVibration(value);
    if (value) {
      Vibration.vibrate([0, 100, 50, 100]);
    }
  };

  const handleSound = async (value: boolean) => {
    setSound(value);
    if (value) {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });

        const { sound: soundObject, status } = await Audio.Sound.createAsync(
          {
            uri: 'https://assets.mixkit.co/sfx/preview/mixkit-click-1109.mp3',
          },
          { shouldPlay: true, volume: 1.0, positionMillis: 0 }
        );

        if (!status.isLoaded || status.isPlaying) {
          await soundObject.playAsync();
        }

        setTimeout(() => {
          soundObject.unloadAsync();
        }, 2000);
      } catch (error) {
        console.log('Falha ao reproduzir som; usando vibração como fallback', error);
        Vibration.vibrate([0, 100, 50, 100]);
      }
    }
  };

  const handleDarkMode = (value: boolean) => {
    setDarkMode(value);
  };

  const handleClearCache = () => {
    Alert.alert(
      'Limpar Cache',
      'Tem certeza que deseja limpar o cache do aplicativo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          style: 'destructive',
          onPress: () => {
            Alert.alert('Sucesso', 'Cache limpado com sucesso!');
          },
        },
      ]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair da aplicação?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: () => {
            Alert.alert('Até logo!', 'Você foi desconectado');
            router.push('/');
          },
        },
      ]
    );
  };

  const handleAbout = () => {
    Alert.alert(
      'Sobre o Aplicativo',
      'DA.WEB Perfil\nVersão 1.0.0\n\nDesenvolvido com React Native & Expo\nPor Daniel Araújo\n\n© 2026 - Todos os direitos reservados'
    );
  };

  const handlePrivacy = () => {
    Alert.alert(
      'Política de Privacidade',
      'Sua privacidade é importante para nós. Seus dados são armazenados localmente e nunca serão compartilhados com terceiros.'
    );
  };

  const sections = [
    {
      title: 'EXIBIÇÃO',
      data: [
        {
          id: 'darkMode',
          icon: 'moon',
          label: 'Modo Escuro',
          value: darkMode,
          setter: handleDarkMode,
          type: 'toggle',
        },
      ],
    },
    {
      title: 'NOTIFICAÇÕES E SOM',
      data: [
        {
          id: 'notifications',
          icon: 'notifications',
          label: 'Notificações',
          value: notifications,
          setter: setNotifications,
          type: 'toggle',
        },
        {
          id: 'sound',
          icon: 'volume-high',
          label: 'Som',
          value: sound,
          setter: handleSound,
          type: 'toggle',
        },
        {
          id: 'vibration',
          icon: 'phone-portrait',
          label: 'Vibração',
          value: vibration,
          setter: handleVibration,
          type: 'toggle',
        },
      ],
    },
    {
      title: 'DADOS',
      data: [
        {
          id: 'autoSave',
          icon: 'save',
          label: 'Salvar Automaticamente',
          value: autoSave,
          setter: setAutoSave,
          type: 'toggle',
        },
        {
          id: 'clearCache',
          icon: 'trash',
          label: 'Limpar Cache',
          type: 'button',
          onPress: handleClearCache,
        },
      ],
    },
    {
      title: 'SOBRE',
      data: [
        {
          id: 'about',
          icon: 'information-circle',
          label: 'Sobre o Aplicativo',
          type: 'button',
          onPress: handleAbout,
        },
        {
          id: 'privacy',
          icon: 'shield-checkmark',
          label: 'Política de Privacidade',
          type: 'button',
          onPress: handlePrivacy,
        },
      ],
    },
    {
      title: 'CONTA',
      data: [
        {
          id: 'logout',
          icon: 'log-out',
          label: 'Sair',
          type: 'button',
          onPress: handleLogout,
          isDestructive: true,
        },
      ],
    },
  ];

  const renderItem = ({ item }: { item: any }) => {
    if (item.type === 'toggle') {
      return (
        <View
          style={[
            styles.settingItem,
            darkMode && styles.settingItemDark,
          ]}
        >
          <View style={styles.settingLeft}>
            <Ionicons name={item.icon} size={24} color="#6C5CE7" />
            <Text style={[styles.settingLabel, darkMode && styles.settingLabelDark]}>
              {item.label}
            </Text>
          </View>
          <Switch
            value={item.value}
            onValueChange={item.setter}
            trackColor={{ false: darkMode ? '#444444' : '#E0E0E0', true: '#6C5CE7' }}
            thumbColor={item.value ? '#6C5CE7' : darkMode ? '#666666' : '#F0F0F0'}
          />
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={[
          styles.settingItem,
          darkMode && styles.settingItemDark,
        ]}
        onPress={item.onPress}
      >
        <View style={styles.settingLeft}>
          <Ionicons
            name={item.icon}
            size={24}
            color={item.isDestructive ? '#F44336' : '#6C5CE7'}
          />
          <Text
            style={[
              styles.settingLabel,
              darkMode && styles.settingLabelDark,
              item.isDestructive && styles.destructiveText,
            ]}
          >
            {item.label}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color={darkMode ? '#555555' : '#CCCCCC'} />
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({ section: { title } }: { section: any }) => (
    <View style={[styles.sectionHeader, darkMode && styles.sectionHeaderDark]}>
      <Text style={[styles.sectionTitle, darkMode && styles.sectionTitleDark]}>
        {title}
      </Text>
    </View>
  );

  const renderSectionFooter = () => <View style={styles.sectionFooter} />;

  return (
    <View style={[styles.wrapper, darkMode && styles.wrapperDark]}>
      <Header title="Configurações" showBack={true} />
      <View style={[styles.container, darkMode && styles.containerDark]}>
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          renderSectionFooter={renderSectionFooter}
          contentContainerStyle={styles.listContent}
          scrollEnabled={true}
        />
      </View>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  listContent: {
    paddingTop: 10,
  },
  sectionHeader: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#999999',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sectionFooter: {
    height: 12,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  settingLabelDark: {
    color: '#FFFFFF',
  },
  settingItemDark: {
    backgroundColor: '#2A2A2A',
    borderBottomColor: '#3A3A3A',
  },
  sectionHeaderDark: {
    backgroundColor: '#1E1E1E',
  },
  sectionTitleDark: {
    color: '#999999',
  },
  wrapperDark: {
    backgroundColor: '#1E1E1E',
  },
  containerDark: {
    backgroundColor: '#1E1E1E',
  },
  destructiveText: {
    color: '#F44336',
  },
});
