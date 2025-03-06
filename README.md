# Frontend para Aplicacao de Blogging

## Descricao do Projeto

Este projeto consiste no desenvolvimento da interface grafica de uma aplicacao de blogging, utilizando React, para proporcionar uma experiencia de usuario intuitiva e eficiente para professores(as) e estudantes. A aplicacao permite a interacao com os endpoints REST ja implementados no backend, garantindo funcionalidades essenciais como listagem, criacao, edicao e exclusao de postagens.

## Tecnologias Utilizadas

- React com componentes funcionais e hooks
- Tailwind para estilizacao
- Axios para consumo da API REST
- Context API

## Funcionalidades

### 1. Pagina Principal (Lista de Posts)

- Exibicao de uma lista de posts com titulo, autor e descricao breve
- Campo de busca para filtragem de posts

rota: `/`

### 2. Pagina de Leitura de Post

- Exibe o conteudo completo de um post

rota: `/posts/:id`

### 3. Pagina de Criacao de Postagens

- Formulario para criacao de postagens por docentes
- Campos para titulo, conteudo e autor
- Botao para enviar post ao servidor

rota: `/new-post`

### 4. Pagina de Edicao de Postagens

- Formulario para edicao de postagens existentes
- Carregamento dos dados do post para edicao
- Botao para salvar alteracoes

rota: `/edit-post/:id`

### 5. Pagina Administrativa

- Lista de todas as postagens
- Opcoes para editar e excluir posts
- Controles de administracao restritos a usuarios autenticados

rota: `/admin`

### 6. Autenticacao e Autorizacao

- Login para professores(as)
- Restricao de acesso para paginas de criacao, edicao e administracao
- Credenciais para login:
  - Email: `admin@example.com`
  - Senha: `admin123`

## Como Executar o Projeto

### Requisitos

- Node.js instalado
- Gerenciador de pacotes npm ou yarn

### Passos para Execucao

1. Clone o repositorio:
   ```sh
   git clone https://github.com/fiap-techchallenge/tech-challenge-3.git
   ```
2. Acesse o diretorio do projeto:
   ```sh
   cd tech-challenge-3
   ```
3. Instale as dependencias:

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
6. Inicie a aplicacao:

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
      |-- pages/           # Paginas da aplicacao
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
  |-- .env.development     # Variaveis de ambiente para desenvolvimento
  |-- .env.production      # Variaveis de ambiente para producao
  |-- tailwind.config.js   # Configuracao do Tailwind CSS
  |-- postcss.config.js    # Configuracao do PostCSS
  |-- tsconfig.json        # Configuracao do TypeScript
  |-- next.config.js       # Configuracao do Next.js
  |-- components.json      # Configuracao do Storybook
  |-- next-env.d.ts        # Tipagem do Next.js
```
