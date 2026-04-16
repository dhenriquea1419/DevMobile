# 📱 Meu Perfil - Aplicativo React Native com Expo

Bem-vindo ao seu primeiro aplicativo React Native! Este é um cartão digital de apresentação pessoal.

## 🎯 O que foi desenvolvido

✅ **Componentes principais utilizados:**
- `View` - Container para organizar elementos
- `Text` - Exibição de textos (nome, curso, frase motivacional)
- `Image` - Foto de perfil
- `Button` - Botão com ação (alerta)
- `ScrollView` - Para tornar o app scrollável em telas pequenas
- `Alert` - Mostrar mensagem ao clicar no botão

✅ **Estilização com StyleSheet:**
- Cores personalizadas (#6C5CE7, #F0F3FF, etc)
- Card com sombra e border-radius
- Imagem circular com borda
- Layout centralizado e responsivo
- Espaçamento adequado

## 📋 Estrutura do App

### Elementos Exibidos:
1. **Foto de Perfil** - Imagem circular (120x120)
2. **Nome** - "Daniel Araújo" em destaque
3. **Cursos** - Dev React Native, Dev Java, QA
4. **Frase Motivacional** - "Código hoje, sucesso amanhã"
5. **Botão Interativo** - "Clique aqui" (mostra alerta)

## 🚀 Como Rodar o Projeto

### Opção 1: Usar Expo Go (Mais rápido)

```bash
cd c:\Users\Daniel Araújo\Documents\devmobile\MeuPerfil
npm start
```

Depois, escaneie o QR code com seu telefone usando:
- **iPhone**: Câmera ou App Expo Go
- **Android**: App Expo Go (get.expo.dev)

### Opção 2: Emulador Android

```bash
npm start
# Após aparecer o menu, pressione 'a' para abrir no Android Emulator
```

### Opção 3: Emulador iOS (macOS apenas)

```bash
npm start
# Após aparecer o menu, pressione 'i' para abrir no iOS Simulator
```

## 📁 Estrutura dos Arquivos

```
MeuPerfil/
├── App.jsx                 # Componente principal do app
├── app/
│   ├── index.tsx          # Rota principal
│   └── _layout.tsx        # Layout da navegação
├── assets/                # Imagens estáticas
├── package.json           # Dependências do projeto
└── app.json              # Configuração do Expo
```

## 🎨 Elementos de Estilo Importantes

### Cores Utilizadas:
- **Primária**: `#6C5CE7` (Roxo)
- **Fundo**: `#F0F3FF` (Roxo claro)
- **Texto**: `#2D3436` (Cinza escuro)
- **Secundário**: `#DFE6E9` (Cinza claro)

### Dimensões:
- **Foto**: 120x120 com border-radius 60
- **Card**: 90% da largura, máximo 400px
- **Nome**: fontSize 32, fontWeight bold

## 🛠️ Modificações Sugeridas

Você pode customizar o app alterando:

1. **Nome**: Altere "Daniel Araújo" no arquivo `App.jsx`
2. **Cursos**: Edite a lista de cursos
3. **Frase**: Mude a frase motivacional
4. **Foto**: Altere a URL da imagem
5. **Cores**: Modifique os valores em `StyleSheet`
6. **Texto do Botão**: Mude "Clique aqui" para outra opção

## 📚 Aprendizados Principais

### 1. Estrutura Básica
```javascript
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá!</Text>
    </View>
  );
}
```

### 2. StyleSheet
```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

### 3. Image Component
```javascript
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={{ width: 100, height: 100 }}
/>
```

### 4. Button com Ação
```javascript
<Button
  title="Clique"
  onPress={() => Alert.alert('Olá!')}
  color="#6C5CE7"
/>
```

## 🐛 Troubleshooting

**Erro: "Cannot find module"**
- Execute: `npm install`

**App não atualiza**
- Pressione `r` no terminal do Expo para recarregar
- Ou use Ctrl + S para hot reload

**Imagem não carrega**
- Verifique a URL da imagem
- A imagem deve estar acessível na internet

**Alerta não aparece**
- Certifique-se de ter importado `Alert` do 'react-native'

## 🎓 Próximos Passos

1. Adicionar mais componentes (TextInput, FlatList)
2. Usar navegação com Expo Router
3. Integrar com bibliotecas como React Navigation
4. Fazer requisições HTTP com Fetch/Axios
5. Usar AsyncStorage para dados locais

---

**Desenvolvido com ❤️ usando React Native e Expo**
