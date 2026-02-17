# 💌 Typed Love Whispers - Guia para Seus Amigos

Bem-vindo ao **Typed Love Whispers**! Este é um aplicativo web que exibe mensagens de amor digitadas com efeito typewriter. Aqui está tudo que você precisa saber para usar e compartilhar com seus amigos.

---

## 🎯 O Que É?

Um app minimalista e elegante que mostra mensagens de amor sendo digitadas caractere por caractere, como em uma máquina de escrever antiga. A interface é simples, bonita e funciona em qualquer navegador.

---

## 🚀 Como Usar (3 Opções)

### ✅ Opção 1: Usar Online (Mais Fácil - Sem Instalação)

Se o app estiver publicado online, basta acessar o link:

```
https://seu-dominio.com
```

Abra em qualquer navegador e pronto! Nenhuma instalação necessária.

### 💻 Opção 2: Executar Localmente (Recomendado para Desenvolvedores)

Se você quer rodar o app no seu computador:

#### Passo 1: Instale os Pré-requisitos

- **Node.js**: [Baixe aqui](https://nodejs.org/) (versão 18+)
- **pnpm**: Abra o terminal e execute: `npm install -g pnpm`
- **Git**: [Baixe aqui](https://git-scm.com/)

#### Passo 2: Clone o Repositório

```bash
git clone https://github.com/MKX-GASPAR/typed-love-whispers.git
cd typed-love-whispers
```

#### Passo 3: Instale as Dependências

```bash
pnpm install
```

#### Passo 4: Inicie o App

```bash
pnpm dev
```

Abra seu navegador em: `http://localhost:3000`

### 📱 Opção 3: Usar no Celular

O app funciona perfeitamente em celulares! Basta acessar o link no navegador do seu celular (Chrome, Safari, etc.).

---

## 🎨 Personalizar o App

### Adicionar Suas Próprias Mensagens

1. Abra o arquivo: `client/src/pages/Home.tsx`
2. Encontre a seção com `const messages = [`
3. Substitua as mensagens:

```typescript
const messages = [
  "Sua primeira mensagem aqui",
  "Sua segunda mensagem aqui",
  "Sua terceira mensagem aqui",
];
```

4. Salve e o app recarregará automaticamente!

### Mudar as Cores

As cores estão em `client/src/pages/Home.tsx`. Procure por `bg-red-500` e substitua por:

- `bg-blue-500` (azul)
- `bg-green-500` (verde)
- `bg-purple-500` (roxo)
- `bg-pink-500` (rosa)

### Mudar a Velocidade

Encontre o `setTimeout` com `50` e mude para:
- `30` = mais rápido
- `100` = mais lento

---

## 📤 Compartilhar com Amigos

### Se o App Estiver Online

Basta enviar o link:
```
https://seu-dominio.com
```

### Se Quiser Compartilhar o Código

1. Envie o link do repositório GitHub:
   ```
   https://github.com/MKX-GASPAR/typed-love-whispers
   ```

2. Seus amigos podem clonar e rodar localmente seguindo a **Opção 2** acima

---

## 🌐 Publicar Online (Grátis)

### Vercel (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up" com GitHub
3. Clique em "New Project"
4. Selecione o repositório `typed-love-whispers`
5. Clique em "Deploy"
6. Pronto! Seu app estará em: `https://typed-love-whispers-xxxxx.vercel.app`

### Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Sign up" com GitHub
3. Clique em "New site from Git"
4. Selecione o repositório
5. Configure:
   - Build command: `pnpm build`
   - Publish directory: `dist`
6. Clique em "Deploy site"

---

## 🎯 Estrutura de Arquivos (Para Entender)

```
typed-love-whispers/
├── client/
│   ├── src/
│   │   ├── pages/Home.tsx      ← Aqui está o código principal
│   │   ├── index.css           ← Estilos e cores
│   │   └── App.tsx             ← Configuração do app
│   └── index.html              ← Página HTML
├── README.md                   ← Documentação completa
├── SETUP.md                    ← Guia de instalação detalhado
└── package.json                ← Dependências
```

---

## ❓ Dúvidas Comuns

### P: Preciso de um computador poderoso?
**R:** Não! Qualquer computador moderno funciona. Até em Chromebooks!

### P: Posso usar em celular?
**R:** Sim! Funciona em qualquer navegador mobile (Chrome, Safari, Firefox).

### P: Como adiciono mais mensagens?
**R:** Edite o array `messages` em `client/src/pages/Home.tsx`.

### P: Posso mudar as cores?
**R:** Sim! Procure por `bg-red-500` e mude para outra cor Tailwind.

### P: Como faço deploy?
**R:** Use Vercel ou Netlify (ambos grátis e muito fáceis).

### P: Preciso pagar por algo?
**R:** Não! Tudo é open source e gratuito.

---

## 📞 Precisa de Ajuda?

1. Leia o [README.md](README.md) completo
2. Leia o [SETUP.md](SETUP.md) para instruções detalhadas
3. Abra uma [issue no GitHub](https://github.com/MKX-GASPAR/typed-love-whispers/issues)

---

## 🎁 Próximos Passos

- ✅ Clonar o repositório
- ✅ Instalar as dependências
- ✅ Adicionar suas mensagens
- ✅ Personalizar as cores
- ✅ Fazer deploy online
- ✅ Compartilhar com amigos

---

**Desenvolvido com ❤️ por VINCENTY AI**

Divirta-se! 🚀
