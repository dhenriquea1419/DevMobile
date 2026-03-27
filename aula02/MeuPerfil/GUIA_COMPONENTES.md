# 🧩 Guia dos Componentes React Native

## Componentes Utilizados no App "Meu Perfil"

### 1. **View** 🔲
Componente container mais básico do React Native. Similar a `<div>` no web.

```javascript
import { View } from 'react-native';

<View style={styles.container}>
  {/* Seus componentes aqui */}
</View>
```

**Principais props:**
- `style` - Estilos (StyleSheet)
- `onPress` - Ação ao clicar (pode usar em View touchable)

**Exemplo no app:**
```javascript
<View style={styles.card}>
  <Text>Conteúdo do card</Text>
</View>
```

---

### 2. **Text** 📝
Único componente para renderizar texto no React Native.

```javascript
import { Text } from 'react-native';

<Text style={styles.title}>Meu Título</Text>
```

**Principais props:**
- `style` - Estilos
- `numberOfLines` - Número máximo de linhas
- `ellipsizeMode` - Truncar com "..."
- `onPress` - Ação ao clicar

**Exemplo no app:**
```javascript
<Text style={styles.name}>Daniel Araújo</Text>
<Text style={styles.courseText}>Dev React Native</Text>
```

---

### 3. **Image** 🖼️
Componente para exibir imagens.

```javascript
import { Image } from 'react-native';

<Image source={{ uri: 'https://...' }} style={{ width: 100, height: 100 }} />
```

**Props obrigatórias:**
- `source` - URL ou arquivo local
- `style` - Dimensões (width e height são obrigatórias!)

**Exemplo no app:**
```javascript
<Image
  source={{
    uri: 'https://avatars.githubusercontent.com/u/60323734?v=4',
  }}
  style={styles.profileImage}  // width: 120, height: 120
/>
```

**Dica:** Image precisa de width e height definidos!

---

### 4. **Button** 🔘
Componente de botão padrão do React Native.

```javascript
import { Button } from 'react-native';

<Button title="Clique aqui" onPress={() => console.log('Clicado!')} color="#6C5CE7" />
```

**Props principais:**
- `title` (obrigatório) - Texto do botão
- `onPress` (obrigatório) - Função ao clicar
- `color` - Cor (default: blue)
- `disabled` - Desabilitar botão
- `testID` - Para testes

**Exemplo no app:**
```javascript
<Button
  title="Clique aqui"
  onPress={handleButtonPress}
  color="#6C5CE7"
/>
```

**Limitações:** O Button é simples e não é muito customizável em iOS/Android. Use `TouchableOpacity` para mais controle.

---

### 5. **ScrollView** 📜
Componente que permite scroll quando conteúdo é maior que a tela.

```javascript
import { ScrollView } from 'react-native';

<ScrollView contentContainerStyle={styles.container}>
  {/* Conteúdo aqui */}
</ScrollView>
```

**Props principais:**
- `contentContainerStyle` - Estilo do container interno
- `scrollEnabled` - Habilitar/desabilitar scroll
- `showsVerticalScrollIndicator` - Mostrar indicador

**Exemplo no app:**
```javascript
<ScrollView contentContainerStyle={styles.container}>
  <View style={styles.card}>
    {/* Conteúdo do perfil */}
  </View>
</ScrollView>
```

**Melhor prática:** Use ScrollView quando não souber a altura exata do conteúdo.

---

### 6. **Alert** ⚠️
API para mostrar caixas de diálogo (alertas) nativas.

```javascript
import { Alert } from 'react-native';

Alert.alert(
  'Título',
  'Mensagem',
  [
    { text: 'Cancelar', onPress: () => {} },
    { text: 'OK', onPress: () => {} }
  ]
);
```

**Sintaxe:**
```javascript
Alert.alert(titulo, mensagem, botoes, opcoes);
```

**Exemplo no app:**
```javascript
const handleButtonPress = () => {
  Alert.alert('Bem-vindo!', 'Bem-vindo ao meu app!', [
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);
};
```

---

### 7. **StyleSheet** 🎨
API para criar estilos otimizados em React Native.

```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#2D3436',
  }
});
```

**Vantagens:**
- ✅ Validação de propriedades
- ✅ Melhor performance
- ✅ Hot reload funciona bem
- ✅ Falha silenciosa em props inválidas

**Exemplo no app:**
```javascript
const styles = StyleSheet.create({
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#6C5CE7',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3436',
  },
});
```

---

## Propriedades de Estilo Comuns

### Layout
- `flex` - Crescimento flexível (0, 1, 2, etc)
- `flexDirection` - 'row' ou 'column' (default: column)
- `justifyContent` - Alinhar no eixo principal
- `alignItems` - Alinhar no eixo secundário
- `width` / `height` - Dimensões
- `padding` - Espaçamento interno
- `margin` - Espaçamento externo

### Cores
- `backgroundColor` - Cor de fundo
- `color` - Cor do texto
- `borderColor` - Cor da borda

### Tamanho
- `fontSize` - Tamanho da fonte
- `fontWeight` - Peso da fonte ('bold', '600', 'normal')
- `borderRadius` - Cantos arredondados
- `borderWidth` - Espessura da borda

### Sombra (iOS)
- `shadowColor` - Cor da sombra
- `shadowOffset` - Posição da sombra
- `shadowOpacity` - Opacidade da sombra
- `shadowRadius` - Desfoque da sombra

### Sombra (Android)
- `elevation` - Altura/sombra (0-24)

---

## Estrutura De Árvore de Componentes

```
App (função principal)
├── ScrollView (permite scroll)
│   └── View (card container)
│       ├── Image (foto de perfil)
│       ├── Text (nome)
│       ├── View (course container)
│       │   ├── Text (label "Cursos:")
│       │   ├── Text (curso 1)
│       │   ├── Text (curso 2)
│       │   └── Text (curso 3)
│       ├── View (motivation container)
│       │   └── Text (frase motivacional)
│       ├── View (button container)
│       │   └── Button (botão com ação)
│       └── Text (footer)
```

---

## Dicas e Boas Práticas

### ✅ Faça
```javascript
// Use StyleSheet para melhor performance
const styles = StyleSheet.create({...});

// Use componentização
function ProfileCard() {...}

// Use constantes para dados
const PROFILE_NAME = "Daniel Araújo";

// Organize imports
import { View, Text, Image } from 'react-native';
```

### ❌ Evite
```javascript
// Não use dados hardcoded sem estrutura
<Text>{'Daniel Araújo'.toUpperCase()}</Text>

// Não adicione estilos inline complexos
<View style={{ flex: 1, padding: 20, backgroundColor: '#F0F3FF', ... }}>

// Não faça requisições no render
export default function App() {
  fetch('...'); // ❌ Evite!
  return ...
}

// Não use console.log para debug em produção
console.log(variable); // ❌ Remova antes de publicar
```

---

## Dimensões vs Pixels

React Native usa **pontos lógicos**, não pixels:
- Um ponto no React Native ≠ um pixel na tela
- A densidade da tela faz a conversão automática
- Use números sem unidade: `width: 100` (não `width: 100px`)

```javascript
// ✅ Correto
<View style={{ width: 100, height: 100 }} />

// ❌ Incorreto
<View style={{ width: '100px', height: '100px' }} />
```

---

## Próximos Componentes a Aprender

- **TouchableOpacity** - Botão customizável com opacidade
- **TextInput** - Campo de entrada de texto
- **FlatList** - Lista eficiente de itens
- **Modal** - Diálogos customizados
- **ActivityIndicator** - Loading spinner
- **Switch** - Toggle on/off
- **Picker** - Seleção de opções

---

**Documentação oficial:** https://reactnative.dev/docs/components-and-apis
