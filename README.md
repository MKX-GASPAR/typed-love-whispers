# Typed Love Whispers

Um aplicativo web elegante que exibe mensagens de amor digitadas com efeito typewriter autêntico. A experiência minimalista combina tipografia monoespacial, fundo escuro e animações suaves para criar uma atmosfera poética e intimista.

## 🎨 Características

- **Efeito Typewriter Autêntico**: Mensagens aparecem caractere por caractere com cursor piscante
- **Design Minimalista**: Interface limpa com fundo preto e texto branco
- **Múltiplas Mensagens**: Rotação automática entre diferentes mensagens de amor
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Sem Dependências Externas**: Apenas React, Tailwind CSS e componentes nativos
- **Marca Discreta**: "VINCENTY AI" no canto inferior direito

## 🚀 Início Rápido

### Pré-requisitos

Você precisa ter instalado:
- **Node.js** (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
- **pnpm** (gerenciador de pacotes) - Instale com: `npm install -g pnpm`
- **Git** (para clonar o repositório) - [Download aqui](https://git-scm.com/)

### Instalação Local

1. **Clone o repositório:**

```bash
git clone https://github.com/MKX-GASPAR/typed-love-whispers.git
cd typed-love-whispers
```

2. **Instale as dependências:**

```bash
pnpm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
pnpm dev
```

4. **Abra no navegador:**

Acesse `http://localhost:3000` no seu navegador. O app será recarregado automaticamente quando você fizer alterações no código.

## 📝 Estrutura do Projeto

```
typed-love-whispers/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/
│   │   │   └── Home.tsx     # Página principal com efeito typewriter
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Ponto de entrada React
│   │   └── index.css        # Estilos globais e tema
│   └── index.html           # Template HTML
├── server/
│   └── index.ts             # Servidor Express (para produção)
├── package.json             # Dependências do projeto
└── README.md                # Este arquivo
```

## 🎯 Como Usar

### Adicionar Novas Mensagens

Para adicionar suas próprias mensagens de amor, edite o arquivo `client/src/pages/Home.tsx`:

```typescript
const messages = [
  "Sua primeira mensagem aqui",
  "Sua segunda mensagem aqui",
  "Sua terceira mensagem aqui",
];
```

Salve o arquivo e o app será recarregado automaticamente.

### Personalizar Cores

As cores são definidas em `client/src/index.css`. Para mudar a cor do cursor ou das linhas decorativas, procure por:

- `bg-red-500` - Cor do cursor piscante
- `bg-red-500/30` - Cor das linhas decorativas

Substitua `red` por qualquer cor Tailwind CSS (blue, green, purple, etc.).

### Personalizar Tipografia

A fonte padrão é **JetBrains Mono** (monoespacial). Para mudar, edite `client/src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=SUA_FONTE_AQUI&display=swap');
```

## 🛠️ Desenvolvimento

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia servidor de desenvolvimento com hot reload |
| `pnpm build` | Compila o projeto para produção |
| `pnpm preview` | Visualiza a build de produção localmente |
| `pnpm check` | Verifica tipos TypeScript |
| `pnpm format` | Formata o código com Prettier |

### Stack Tecnológico

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Utilitários de estilo
- **Vite** - Build tool e dev server
- **Wouter** - Roteamento leve
- **shadcn/ui** - Componentes UI prontos

## 🌐 Deploy

### Opção 1: Vercel (Recomendado)

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione seu repositório `typed-love-whispers`
5. Clique em "Deploy"

O app será publicado automaticamente em `seu-nome.vercel.app`

### Opção 2: Netlify

1. Faça push do código para GitHub
2. Acesse [netlify.com](https://netlify.com)
3. Clique em "New site from Git"
4. Selecione seu repositório
5. Configure:
   - Build command: `pnpm build`
   - Publish directory: `dist`
6. Clique em "Deploy site"

### Opção 3: Servidor Próprio (Node.js)

1. **Build do projeto:**

```bash
pnpm build
```

2. **Inicie o servidor:**

```bash
pnpm start
```

O app estará disponível em `http://seu-servidor:3000`

## 📱 Compatibilidade

- ✅ Chrome/Edge (versão 90+)
- ✅ Firefox (versão 88+)
- ✅ Safari (versão 14+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### Porta 3000 já está em uso

Se receber erro "Port 3000 is already in use", use outra porta:

```bash
pnpm dev -- --port 3001
```

### Dependências não instalam

Limpe o cache e reinstale:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Mudanças não aparecem

Limpe o cache do navegador:
- **Chrome/Edge**: Ctrl+Shift+Delete (ou Cmd+Shift+Delete no Mac)
- **Firefox**: Ctrl+Shift+Delete
- **Safari**: Cmd+Option+E

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 💬 Suporte

Se tiver dúvidas ou encontrar problemas, abra uma [issue no GitHub](https://github.com/MKX-GASPAR/typed-love-whispers/issues).

---

**Desenvolvido com ❤️ usando React e Tailwind CSS**

**Marca:** Chevel ai
