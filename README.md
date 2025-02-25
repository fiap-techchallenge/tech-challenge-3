# Frontend para Aplicação de Blogging

## Descrição do Projeto

Este projeto consiste no desenvolvimento da interface gráfica de uma aplicação de blogging, utilizando React, para proporcionar uma experiencia de usuário intuitiva e eficiente para professores(as) e estudantes. A aplicação permite a interação com os endpoints REST ja implementados no backend, garantindo funcionalidades essenciais como listagem, criação, edição e exclusão de postagens.

## Tecnologias Utilizadas

- React com componentes funcionais e hooks
- Tailwind para estilização
- Axios para consumo da API REST
- Context API

## Funcionalidades

### 1. Página Principal (Lista de Posts)

- Exibicao de uma lista de posts com titulo, autor e descricao breve
- Campo de busca para filtragem de posts

rota: `/`

### 2. Página de Leitura de Post

- Exibe o conteudo completo de um post

rota: `/posts/:id`

### 3. Página de Criação de Postagens

- Formulario para criação de postagens por docentes
- Campos para titulo, conteudo e autor
- Botao para enviar post ao servidor

rota: `/new-post`

### 4. Página de Edição de Postagens

- Formulário para edição de postagens existentes
- Carregamento dos dados do post para edição
- Botão para salvar alteracoes

rota: `/edit-post/:id`

### 5. Página Administrativa

- Lista de todas as postagens
- Opções para editar e excluir posts
- Controles de administracao restritos a usuários autenticados

rota: `/admin`

### 6. Autenticação e Autorização

- Login para professores(as)
- Restrição de acesso para páginas de criação, edição e administração

## Como Executar o Projeto

### Requisitos

- Node.js instalado
- Gerenciador de pacotes npm ou yarn

### Passos para Execucao

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
   npm install
   ```
4. Inicie a aplicação:
   ```sh
   npm start
   ```

## Estrutura do Projeto

```
/ tech-challenge-3
  |-- src/
      |-- components/      # Componentes reutilizáveis
      |-- pages/           # Páginas da aplicação
      |-- hooks/           # Hooks custom
      |-- context/         # Gerenciamento de estado
      |-- styles/          # Estilizacao global
      |-- lib/             # Funcoes utilitárias
  |-- public/              # Arquivos estáticos
  |-- package.json         # Dependencias do projeto
  |-- README.md            # Documentacao do projeto
  |-- .gitignore           # Arquivos ignorados pelo git
  |-- .eslintrc.json       # Configuração do ESLint
  |-- .eslintrc.config.mjs # Configuração do ESLint
  |-- .env.development     # Variaveis de ambiente para desenvolvimento
  |-- .env.production      # Variaveis de ambiente para produção
  |-- tailwind.config.js   # Configuração do Tailwind CSS
  |-- postcss.config.js    # Configuração do PostCSS
  |-- tsconfig.json        # Configuração do TypeScript
  |-- next.config.js       # Configuração do Next.js
  |-- components.json      # Configuração do Storybook
  |-- next-env.d.ts        # Tipagem do Next.js
```
