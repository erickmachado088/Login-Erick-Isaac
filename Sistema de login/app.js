// Verifica se estamos na página de LOGIN
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Login realizado com sucesso!');
                // Redireciona para a página de boas-vindas do front-end
                window.location.href = 'usuarios.html';
            } else {
                alert('Erro no login: ' + data.message);
            }
        } catch (error) {
            console.error(error);
            alert('Não foi possível conectar ao back-end. Certifique-se de que o servidor está rodando na porta 3000.');
        }
    });
}

// Verifica se a página atual possui o formulário de CADASTRO
const cadastroForm = document.getElementById('cadastroForm');
if (cadastroForm) {
    cadastroForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Impede o recarregamento automático da página

        // Captura todos os valores digitados pelo usuário na tela
        const name = document.getElementById('cadastroName').value;
        const email = document.getElementById('cadastroEmail').value;
        const password = document.getElementById('cadastroPassword').value;
        const confirmPassword = document.getElementById('cadastroConfirmPassword').value;

        // Validação básica no Front-End: impede o envio se as senhas forem diferentes
        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        try {
            // Faz a requisição POST enviando name, email e password para o Back-End
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Se o Back-End salvou com sucesso e respondeu um status 200/201
                alert('Cadastro realizado com sucesso! Redirecionando para o login...');
                window.location.href = 'index.html'; // Manda o usuário de volta para a tela de login
            } else {
                // Exibe a mensagem de erro vinda do próprio servidor (ex: "E-mail já cadastrado")
                alert('Erro no cadastro: ' + data.message);
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
            alert('Não foi possível conectar ao servidor de Back-End. Ele está ligado na porta 3000?');
        }
    });
}

// LÓGICA PARA A PÁGINA DE LISTAGEM DE USUÁRIOS
const tabelaUsuarios = document.getElementById('tabelaUsuarios');

// Se o elemento 'tabelaUsuarios' existir na página atual, significa que estamos em usuarios.html
if (tabelaUsuarios) {
    // Função que busca os dados no Back-End
    async function carregarUsuarios() {
        try {
            const response = await fetch('http://localhost:3000/users');
            const usuarios = await response.json();

            // Limpa o texto de "Carregando..."
            tabelaUsuarios.innerHTML = '';

            if (usuarios.length === 0) {
                tabelaUsuarios.innerHTML = `
                    <tr>
                        <td colspan="2" style="text-align: center;">Nenhum usuário cadastrado ainda.</td>
                    </tr>
                `;
                return;
            }

            // Percorre a lista de usuários trazida do servidor e cria as linhas da tabela
            usuarios.forEach(user => {
                const linha = document.createElement('tr');

                linha.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                `;

                tabelaUsuarios.appendChild(linha);
            });

        } catch (error) {
            console.error('Erro ao listar usuários:', error);
            tabelaUsuarios.innerHTML = `
                <tr>
                    <td colspan="2" style="text-align: center; color: #ffcccc;">Erro ao carregar dados do servidor.</td>
                </tr>
            `;
        }
    }

    // Executa a função automaticamente assim que a página termina de carregar
    carregarUsuarios();
}
