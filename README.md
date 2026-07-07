Criadores do projeto:                                                                                                             
Isaac de Assis Nazaré = Front-End                                                                                                                                             
Erick Nogueira Machado = Back-End 

**🖥️ Desafio Técnico - Sistema de Login e Cadastro**

Um sistema de autenticação web desenvolvido utilizando Node.js, Express, HTML5, CSS3 e JavaScript. O projeto simula um fluxo completo de cadastro e login de usuários, integrando um back-end responsável pelo processamento das requisições e um front-end com uma interface moderna e intuitiva.

Durante a execução do servidor, os dados dos usuários são armazenados temporariamente na memória RAM, simulando o funcionamento de um banco de dados.

---

**✨ Funcionalidades**

**🔑 Login ("index.html")**

- Interface para autenticação de usuários;
- Campos para e-mail e senha;
- Validação dos dados enviados;
- Redirecionamento para a área do usuário após login bem-sucedido;
- Exibição de mensagens de erro em caso de credenciais inválidas.

---

**📝 Cadastro ("cadastro.html")**

- Cadastro de novos usuários;
- Validação de campos obrigatórios;
- Verificação de e-mails duplicados;
- Armazenamento temporário dos usuários durante a execução do servidor.

---

**🔒 Recuperação de Senha ("senha.html")**

- Campo para informar o e-mail cadastrado;
- Simulação do processo de recuperação de senha;
- Retorno para a tela inicial.

---

**👥 Área do Usuário ("usuarios.html")**

- Tela acessível após autenticação;
- Exibição dos usuários cadastrados;
- Botão para sair da aplicação.

---

**🛠️ Tecnologias Utilizadas**

Back-end

- Node.js — Ambiente de execução JavaScript.
- Express — Framework para criação do servidor e gerenciamento das rotas.
- CORS — Middleware responsável por permitir a comunicação entre Front-end e Back-end.

Front-end

- HTML5 — Estruturação semântica das páginas.
- CSS3 — Estilização da interface.
- Flexbox — Organização e centralização responsiva dos elementos.
- JavaScript — Comunicação entre interface e servidor.
- Boxicons — Biblioteca de ícones.
- Google Fonts (Poppins) — Tipografia da interface.

---

**📂 Estrutura do Projeto**

📁 Projeto
│
├── 📁 Backend
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
│
├── 📁 Sistema de Login
│   ├── index.html
│   ├── cadastro.html
│   ├── senha.html
│   ├── usuarios.html
│   ├── style.css
│   ├── senha.css
│   └── app.js
│
└── README.md

---

**⚙️ Instalação**

Clone este repositório:

git clone https://github.com/erickmachado088/Login-Erick-Isaac.git

Entre na pasta do projeto pelo VS Code:

cd Login-Erick-Isaac

Acesse a pasta do Back-end pelo cmd ou command prompt:

cd Backend

Instale as dependências no cmd ou command prompt do terminal do VS Code:
 
npm install express

**Observação:** O "npm install express" Cria o arquivo node_modules necessário para executar o projeto.

---

**🚀 Executando o Projeto**

* 1️⃣ Inicie o servidor

Ainda na pasta Backend, execute no cmd ou command prompt:

node server.js

Se tudo estiver correto, aparecerá a mensagem:

Servidor rodando com sucesso na porta 3000

---

* 2️⃣ Execute o Front-end

Abra a pasta Sistema de Login no Visual Studio Code.

Caso ainda não tenha instalado, baixe a extensão Live Server.

Depois:

- clique com o botão direito no arquivo "index.html";
- selecione Open with Live Server.

O navegador abrirá automaticamente a aplicação.

---

* 3️⃣ Teste o sistema


Agora basta:

- criar um novo usuário;
- realizar o login;
- acessar a área do usuário;
- testar a recuperação de senha.

---

**📚 Conceitos Praticados**

Durante o desenvolvimento deste projeto foram aplicados conceitos como:

- Estruturação de páginas com HTML5;
- Estilização utilizando CSS3;
- Layout responsivo com Flexbox;
- Comunicação entre Front-end e Back-end;
- Criação de APIs REST utilizando Express;
- Rotas HTTP (GET e POST);
- Validação de formulários;
- Manipulação de dados em memória;
- Organização de projetos Full Stack.
