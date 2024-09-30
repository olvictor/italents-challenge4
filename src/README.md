# APPLOGIN
Este projeto é um aplicativo básico de cadastro e login de usuários, construído com React e Vite. O projeto utiliza json-server para simular um backend que armazena os dados dos usuários e AuthContext para gerenciar o estado de autenticação do usuário logado.

## Pré-requisitos

Certifique-se de que você tem as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [json-server]

## Como rodar o projeto localmente

Siga estas etapas para configurar e rodar o projeto em seu ambiente local.

### 1. Clone o repositório

```bash
git clone https://github.com/olvictor/italents-challenge2.git
```

### 2. Entre no diretório do projeto

```bash
cd seu-repositorio
```

### 3. Instale as dependências
Execute o seguinte comando para instalar todas as dependências necessárias do projeto:
```bash
npm install
```




### 4. Configuração do json-server
Para simular um backend, utilizamos o json-server. O banco de dados será armazenado em um arquivo db.json na raiz do projeto. Certifique-se de que o arquivo esteja configurado corretamente:

Crie um arquivo users.json na pasta public do projeto com o seguinte conteúdo:
```bash
{
  "dados": [
  
  ]
}
```

### 5. Inicie o json-server
Em uma nova aba do terminal, inicie o json-server para simular o backend:
```bash
{
 npm run json-server
}
```
Isso fará com que o json-server rode em http://localhost:3001.


### 6. Rode o projeto em ambiente de desenvolvimento
Agora, execute o seguinte comando para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
O projeto estará disponível em http://localhost:5173/.



### Funcionalidades
- Cadastro de novos usuários.
- Login com credenciais de usuário existentes.
- Manutenção do estado de autenticação usando o AuthContext.
- Simulação de um banco de dados local usando o json-server.

### Utilização
Cadastro: O usuário pode se registrar através da página de cadastro, que adiciona o novo usuário ao db.json.
Login: O usuário pode fazer login com as credenciais que foram registradas.
Autenticação: O estado de autenticação é mantido com o AuthContext e as rotas protegidas podem ser implementadas para usuários logados.