// 📚 EXEMPLOS DE CUSTOMIZAÇÃO - App.jsx

// =====================================
// 1. ALTERAR DADOS PESSOAIS
// =====================================

// Você pode criar constantes para seus dados:
const PROFILE_DATA = {
  name: "Daniel Araújo",
  image: "https://avatars.githubusercontent.com/u/60323734?v=4",
  courses: ["Dev React Native", "Dev Java", "QA"],
  motivation: "Código hoje, sucesso amanhã",
  greeting: "Bem-vindo ao meu app!"
};

// Depois usar assim:
// <Text style={styles.name}>{PROFILE_DATA.name}</Text>

// =====================================
// 2. CORES PERSONALIZADAS
// =====================================

// Crie um arquivo colors.js:
// export const colors = {
//   primary: '#6C5CE7',
//   background: '#F0F3FF',
//   text: '#2D3436',
//   lightGray: '#DFE6E9',
//   white: '#FFFFFF',
//   success: '#00B894',
//   error: '#D63031',
// };

// Depois importe e use:
// import { colors } from './colors';
// <View style={{ backgroundColor: colors.primary }}>

// =====================================
// 3. ADICIONAR MAIS INFORMAÇÕES
// =====================================

// Exemplo: Adicionar email, telefone, redes sociais
const ContactSection = () => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.contactTitle}>Contato</Text>
      <Text style={styles.contactText}>📧 daniel@email.com</Text>
      <Text style={styles.contactText}>📱 (11) 98765-4321</Text>
      <Text style={styles.contactText}>💼 LinkedIn: /in/daniel</Text>
    </View>
  );
};

// =====================================
// 4. MÚLTIPLOS BOTÕES COM AÇÕES
// =====================================

// const handleContact = () => {
//   Alert.alert('Contato', 'Email: daniel@email.com');
// };

// const handleShare = () => {
//   Alert.alert('Compartilhar', 'Seu perfil foi compartilhado!');
// };

// <View style={styles.buttonRow}>
//   <TouchableOpacity style={styles.button} onPress={handleContact}>
//     <Text style={styles.buttonText}>Contato</Text>
//   </TouchableOpacity>
//   <TouchableOpacity style={styles.button} onPress={handleShare}>
//     <Text style={styles.buttonText}>Compartilhar</Text>
//   </TouchableOpacity>
// </View>

// =====================================
// 5. MODO ESCURO
// =====================================

// import { useColorScheme } from 'react-native';

// export default function App() {
//   const colorScheme = useColorScheme();
//   const isDarkMode = colorScheme === 'dark';

//   const themes = {
//     light: { bg: '#F0F3FF', text: '#2D3436' },
//     dark: { bg: '#1E1E1E', text: '#FFFFFF' }
//   };

//   const theme = isDarkMode ? themes.dark : themes.light;

//   return (
//     <View style={{ backgroundColor: theme.bg }}>
//       <Text style={{ color: theme.text }}>...</Text>
//     </View>
//   );
// }

// =====================================
// 6. ANIMAÇÕES SIMPLES
// =====================================

// import { Animated, useEffect } from 'react-native';

// export default function App() {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   }, [fadeAnim]);

//   return (
//     <Animated.View style={{ opacity: fadeAnim }}>
//       <Text>Conteúdo com fade-in</Text>
//     </Animated.View>
//   );
// }

// =====================================
// 7. DADOS DINÂMICOS COM STATE
// =====================================

// import { useState } from 'react';

// export default function App() {
//   const [likes, setLikes] = useState(0);

//   const handleLike = () => {
//     setLikes(likes + 1);
//     Alert.alert(`Você marcou ${likes + 1} gosto!`);
//   };

//   return (
//     <>
//       <Button title={`❤️ ${likes} Gostos`} onPress={handleLike} />
//     </>
//   );
// }

// =====================================
// 8. LISTA DE HABILIDADES
// =====================================

// import { FlatList } from 'react-native';

// const SkillsSection = () => {
//   const skills = ['JavaScript', 'React', 'React Native', 'Java'];

//   return (
//     <FlatList
//       data={skills}
//       renderItem={({ item }) => (
//         <View style={styles.skillItem}>
//           <Text style={styles.skillText}>{"✓ " + item}</Text>
//         </View>
//       )}
//       keyExtractor={(item, index) => index.toString()}
//       scrollEnabled={false}
//     />
//   );
// };

// =====================================
// 9. LAYOUT RESPONSIVO
// =====================================

// import { Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   card: {
//     width: width > 400 ? 400 : width * 0.9,
//     paddingHorizontal: width > 400 ? 30 : 20,
//   }
// });

// =====================================
// 10. COMPONENTE REUTILIZÁVEL
// =====================================

// Create file: components/ProfileCard.jsx

// import { View, Text, Image, StyleSheet } from 'react-native';

// export function ProfileCard({ name, image, subtitle }) {
//   return (
//     <View style={styles.card}>
//       <Image source={{ uri: image }} style={styles.image} />
//       <Text style={styles.name}>{name}</Text>
//       <Text style={styles.subtitle}>{subtitle}</Text>
//     </View>
//   );
// }

// Depois use em App.jsx:
// import { ProfileCard } from './components/ProfileCard';
// <ProfileCard 
//   name="Daniel Araújo" 
//   image="..." 
//   subtitle="Dev Mobile"
// />

// =====================================
// DICAS IMPORTANTES
// =====================================

// ✅ Use View para containers
// ✅ Use Text para qualquer texto
// ✅ Use Image para fotos
// ✅ Use Button ou TouchableOpacity para botões
// ✅ Use StyleSheet para melhor performance
// ✅ Use ScrollView se conteúdo for maior que tela
// ✅ Use cores hexadecimais (#6C5CE7) ou RGB
// ✅ Dimensões em pontos (pt), não pixels
// ✅ Flex: 1 para ocupar todo espaço disponível
// ✅ justifyContent e alignItems para centralizar

// ✗ Não use IDs do web (id="nome")
// ✗ Não use classes CSS (className)
// ✗ Não use tags HTML (<div>, <span>)
// ✗ Não use inline styles complexos
// ✗ Não esqueça de importar componentes
