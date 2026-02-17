# Guia Completo de Instalação e Deploy

Este documento fornece instruções passo a passo para instalar, executar e fazer deploy do **Typed Love Whispers**.

## 📋 Índice

1. [Instalação Local](#instalação-local)
2. [Executar Localmente](#executar-localmente)
3. [Personalização](#personalização)
4. [Build para Produção](#build-para-produção)
5. [Deploy Online](#deploy-online)
6. [Solução de Problemas](#solução-de-problemas)

---

## 🖥️ Instalação Local

### Passo 1: Instalar Pré-requisitos

#### Windows

1. **Instale Node.js:**
   - Visite [nodejs.org](https://nodejs.org/)
   - Baixe a versão LTS (Long Term Support)
   - Execute o instalador e siga as instruções
   - Abra o Prompt de Comando e verifique: `node --version`

2. **Instale pnpm:**
   - Abra o Prompt de Comando
   - Execute: `npm install -g pnpm`
   - Verifique: `pnpm --version`

3. **Instale Git:**
   - Visite [git-scm.com](https://git-scm.com/)
   - Baixe e execute o instalador
   - Siga as instruções padrão

#### macOS

1. **Instale Homebrew (se não tiver):**
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Instale Node.js e pnpm:**
   ```bash
   brew install node pnpm git
   ```

3. **Verifique as instalações:**
   ```bash
   node --version
   pnpm --version
   git --version
   ```

#### Linux (Ubuntu/Debian)

```bash
# Atualize o gerenciador de pacotes
sudo apt update

# Instale Node.js e npm
sudo apt install nodejs npm

# Instale pnpm
npm install -g pnpm

# Instale Git
sudo apt install git

# Verifique
node --version
pnpm --version
git --version
```

### Passo 2: Clonar o Repositório

Abra o terminal/prompt de comando e execute:

```bash
git clone https://github.com/MKX-GASPAR/typed-love-whispers.git
cd typed-love-whispers
```

### Passo 3: Instalar Dependências

```bash
pnpm install
```

Este comando baixará todas as bibliotecas necessárias (~500MB). Pode levar alguns minutos.

---

## 🚀 Executar Localmente

### Iniciar o Servidor de Desenvolvimento

```bash
pnpm dev
```

Você verá uma mensagem como:

```
➜  Local:   http://localhost:3000/
```

### Abrir no Navegador

1. Abra seu navegador web
2. Digite na barra de endereços: `http://localhost:3000`
3. Você verá o app com as mensagens de amor digitando

### Parar o Servidor

Pressione `Ctrl+C` no terminal

---

## 🎨 Personalização

### Adicionar Suas Próprias Mensagens

1. Abra o arquivo: `client/src/pages/Home.tsx`
2. Encontre a seção `const messages = [`
3. Substitua as mensagens existentes pelas suas:

```typescript
const messages = [
  "Minha primeira mensagem de amor",
  "Minha segunda mensagem de amor",
  "Minha terceira mensagem de amor",
];
```

4. Salve o arquivo (Ctrl+S)
5. O app será recarregado automaticamente no navegador

### Mudar a Cor do Cursor

1. Abra: `client/src/pages/Home.tsx`
2. Encontre a linha com `bg-red-500`
3. Substitua `red` por outra cor:
   - `bg-blue-500` (azul)
   - `bg-green-500` (verde)
   - `bg-purple-500` (roxo)
   - `bg-pink-500` (rosa)
   - `bg-yellow-500` (amarelo)

### Mudar a Velocidade de Digitação

1. Abra: `client/src/pages/Home.tsx`
2. Encontre: `setTimeout(() => {` (dentro do useEffect)
3. Mude o valor `50` para outro:
   - Menor número = digitação mais rápida
   - Maior número = digitação mais lenta
   - Padrão: `50` milissegundos

Exemplo para digitação mais rápida:
```typescript
setTimeout(() => {
  setDisplayedText((prev) => prev + currentMessage[charIndex]);
  setCharIndex((prev) => prev + 1);
}, 30);  // Mais rápido
```

### Mudar o Tempo entre Mensagens

1. Abra: `client/src/pages/Home.tsx`
2. Encontre: `const timer = setTimeout(() => {` (fora do useEffect de digitação)
3. Mude o valor `3000` para outro:
   - `2000` = 2 segundos
   - `5000` = 5 segundos
   - `10000` = 10 segundos

---

## 📦 Build para Produção

Quando estiver pronto para publicar online:

```bash
pnpm build
```

Isso criará uma pasta `dist/` com os arquivos otimizados para produção.

Para testar a build localmente:

```bash
pnpm preview
```

---

## 🌐 Deploy Online

### Opção 1: Deploy no Vercel (Mais Fácil)

**Vercel** é a plataforma mais simples para fazer deploy de apps React.

#### Passos:

1. **Faça push do código para GitHub:**
   ```bash
   git add -A
   git commit -m "Pronto para deploy"
   git push origin main
   ```

2. **Acesse [vercel.com](https://vercel.com)**

3. **Clique em "Sign Up"** e crie uma conta com GitHub

4. **Clique em "New Project"**

5. **Selecione o repositório `typed-love-whispers`**

6. **Configure:**
   - Framework: Vite
   - Root Directory: ./
   - Build Command: `pnpm build`
   - Output Directory: `dist`

7. **Clique em "Deploy"**

8. **Pronto!** Seu app estará disponível em: `https://typed-love-whispers-xxxxx.vercel.app`

### Opção 2: Deploy no Netlify

**Netlify** é outra opção excelente.

#### Passos:

1. **Faça push do código para GitHub** (mesmo que Vercel)

2. **Acesse [netlify.com](https://netlify.com)**

3. **Clique em "Sign up"** e escolha GitHub

4. **Clique em "New site from Git"**

5. **Selecione seu repositório**

6. **Configure:**
   - Build command: `pnpm build`
   - Publish directory: `dist`

7. **Clique em "Deploy site"**

8. **Pronto!** Seu app estará em: `https://seu-site-xxxxx.netlify.app`

### Opção 3: Deploy em Servidor Próprio (Avançado)

Se você tem um servidor Linux (AWS, DigitalOcean, etc.):

#### No seu servidor:

1. **Instale Node.js e pnpm:**
   ```bash
   curl -fsSL https://get.pnpm.io/install.sh | sh -
   ```

2. **Clone o repositório:**
   ```bash
   git clone https://github.com/MKX-GASPAR/typed-love-whispers.git
   cd typed-love-whispers
   ```

3. **Instale dependências:**
   ```bash
   pnpm install
   ```

4. **Build:**
   ```bash
   pnpm build
   ```

5. **Inicie o servidor:**
   ```bash
   pnpm start
   ```

6. **Configure um reverse proxy (Nginx):**
   ```nginx
   server {
       listen 80;
       server_name seu-dominio.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 🔧 Solução de Problemas

### Erro: "Port 3000 is already in use"

**Solução:** Use outra porta:
```bash
pnpm dev -- --port 3001
```

### Erro: "pnpm: command not found"

**Solução:** Instale pnpm globalmente:
```bash
npm install -g pnpm
```

### Mudanças não aparecem no navegador

**Solução:** Limpe o cache:
- **Chrome**: Ctrl+Shift+Delete (Windows) ou Cmd+Shift+Delete (Mac)
- **Firefox**: Ctrl+Shift+Delete
- **Safari**: Cmd+Option+E

### Erro ao fazer push para GitHub

**Solução:** Configure seu Git:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com"
```

### Dependências não instalam

**Solução:** Limpe e reinstale:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### App não carrega após deploy

**Solução:** Verifique se o build foi bem-sucedido:
```bash
pnpm build
pnpm preview
```

---

## 📞 Suporte

Se tiver dúvidas:

1. Verifique o [README.md](README.md)
2. Abra uma [issue no GitHub](https://github.com/MKX-GASPAR/typed-love-whispers/issues)
3. Procure por soluções em [Stack Overflow](https://stackoverflow.com/)

---

**Bom deploy! 🚀**
