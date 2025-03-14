# Frontend para Aplicação de Blogging

## Descrição do Projeto

Este projeto consiste no desenvolvimento da interface grafica de uma aplicação de blogging, utilizando React, para proporcionar uma experiencia de usuário intuitiva e eficiente para professores(as) e estudantes. A aplicação permite a interacao com os endpoints REST ja implementados no backend, garantindo funcionalidades essenciais como listagem, criação, edição e exclusao de postagens.

## Tecnologias Utilizadas

- React com componentes funcionais e hooks
- Tailwind para estilização
- Axios para consumo da API REST
- Context API

## Funcionalidades

### 1. Página Principal (Lista de Posts)

- Exibição de uma lista de posts com título, autor e descrição breve
- Campo de busca para filtragem de posts

rota: `/`

### 2. Página de Leitura de Post

- Exibe o conteúdo completo de um post

rota: `/posts/:id`

### 3. Página de Criação de Postagens

- Formulário para criação de postagens por docentes
- Campos para título, conteúdo e autor
- Botão para enviar post ao servidor

rota: `/new-post`

### 4. Página de Edição de Postagens

- Formulário para edição de postagens existentes
- Carregamento dos dados do post para edição
- Botão para salvar alterações

rota: `/edit-post/:id`

### 5. Página Administrativa

- Lista de todas as postagens
- Opções para editar e excluir posts
- Controles de administração restritos a usuarios autenticados

rota: `/admin`

### 6. Autenticação e Autorização

- Login para professores(as)
- Restrição de acesso para paginas de criação, edição e administração
- Credenciais para login:
  - Email: `admin@example.com`
  - Senha: `admin123`

## Como Executar o Projeto

### Requisitos

- Node.js instalado
- Gerenciador de pacotes npm ou yarn

### Passos para Execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/fiap-techchallenge/tech-challenge-3.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd tech-challenge-3
   ```
3. Instale as dependências:

   ```sh
   yarn install
   ```

   ou

   ```sh
   npm install
   ```

4. Clone o repositório do backend e siga as instruções para executá-lo:

   ```sh
   git clone https://github.com/fiap-techchallenge/techChallenge2.git
   ```

   Certifique-se de seguir as instruções deste repositório para que o backend esteja rodando corretamente.

5. Atualize a configuracao do arquivo `.env.development`:
   - Localize a variavel `NEXT_PUBLIC_IS_MOCK` e altere seu valor para `false` quando estiver rodando o backend:
   ```env
   NEXT_PUBLIC_IS_MOCK=false
   ```
6. Inicie a aplicação:

   ```sh
   yarn dev
   ```

   ou

   ```sh
   npm run dev
   ```

## Estrutura do Projeto

```
/ tech-challenge-3
  |-- src/
      |-- components/      # Componentes reutilizaveis
      |-- pages/           # Paginas da aplicação
      |-- hooks/           # Hooks custom
      |-- context/         # Gerenciamento de estado
      |-- styles/          # Estilizacao global
      |-- lib/             # Funcoes utilitarias
  |-- public/              # Arquivos estaticos
  |-- package.json         # Dependencias do projeto
  |-- README.md            # Documentacao do projeto
  |-- .gitignore           # Arquivos ignorados pelo git
  |-- .eslintrc.json       # Configuracao do ESLint
  |-- .eslintrc.config.mjs # Configuracao do ESLint
  |-- .env.development     # Variáveis de ambiente para desenvolvimento
  |-- .env.production      # Variáveis de ambiente para producao
  |-- tailwind.config.js   # Configuracao do Tailwind CSS
  |-- postcss.config.js    # Configuracao do PostCSS
  |-- tsconfig.json        # Configuracao do TypeScript
  |-- next.config.js       # Configuracao do Next.js
  |-- components.json      # Configuracao do Storybook
  |-- next-env.d.ts        # Tipagem do Next.js
```
