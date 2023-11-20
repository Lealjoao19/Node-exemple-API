# Node-exemple-API
 esse código é um exemplo básico de como criar uma API simples usando o framework Express em Node.js. Vou explicar passo a passo:

Importando módulos:

javascript


const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')
Aqui, são importados os módulos necessários para o funcionamento da aplicação.
express: O framework utilizado para criar o servidor.
body-parser: Um middleware que ajuda a lidar com dados recebidos no corpo das requisições HTTP.
Inicialização do Expresso e definição de variáveis:

javascript


const app = express()
const port = 3000
appé uma instância do Express, responsável por criar e configurar o servidor.
porté a porta na qual o servidor estará escutando por requisições. Neste caso, é a porta 3000.
Configurando o middleware body-parser:

javascript


app.use(bodyParser.urlencoded({ extended: false }))
Aqui está configurado o body-parserpara lidar com dados de requisições do tipo x-www-form-urlencoded. Ele ajuda a processar os dados enviados via formulários HTML.
Configurando as rotas:

javascript


userRoute(app)
Provavelmente, o arquivo userRoute.jscontém definições de rotas para usuários que serão aplicadas à instância do Express ( app). Esse arquivo pode conter operações CRUD (Criar, Ler, Atualizar e Deletar) para usuários.
Definindo a rota raiz (/) com uma resposta simples:

javascript

Copiar código
app.get('/', (req, res) => res.send('Olá mundo pelo Project'))
Aqui, é definida uma rota para o caminho raiz ( /) da aplicação. Quando alguém acessa essa rota através de um navegador ou cliente HTTP, a resposta será um simples texto "Olá mundo pelo Projeto".
Iniciando o servidor:

javascript


app.listen(port, () => console.log('Api rodando na porta:', port))
Este faz o comando com que o aplicativo Express inicia a escuta de requisições na porta especificada (3000 neste caso). Quando o servidor estiver pronto para receber requisições, uma mensagem será exibida no console informando que a API está rodando na porta definida.
Em resumo, esse código cria um servidor Express básico, define uma rota raiz simples e configura um middleware para lidar com dados de requisições HTTP, além de possivelmente adicionar rotas relacionadas aos usuários.


Execução:
Certifique-se de ter o Node.js instalado.
Clone o repositório.
Execute npm install para instalar as dependências.
Inicie o servidor com node app.js.

Utilizar o comando install yarn.

Depois de usarmos o comando yarn install teremos que utilizar o comando yarn run.

Agora já conseguimos aceder ao servidor http://localhost:3000/



* Exemplo de endpoint para users:


- Listar usuários (GET)
- Criar Usuário (Post)
- Modificar Uuário (PUT)
- Remover Usuário (DELETE)

Agora temos que criar um get, um post, um put e um delete e para isso iremos usar o insomnia.
O get iremos inserir o link http://localhost:3000/users para listar usuários e iremos criar usuários com id, nome, email e senha aqui está um exemplo:
{
	"users": [
		{
			"id": 0,
			"name": "João",
			"email": "usuario@email.com",
			"password": "senha123"
		},
		{
			"id": 0,
			"name": "Pedro",
			"email": "usuario@email.com",
			"password": "senha123"
		},
		{
			"id": 0,
			"name": "Castro",
			"email": "Silva",
			"password": "senha123"
		},
		{
			"id": 0,
			"name": "Diogo",
			"email": "usuario@email.com",
			"password": "senha123"
		},
		{
			"id": 0,
			"name": "Vasco",
			"email": "usuario@email.com",
			"password": "senha123"
		},
		{
			"id": 0,
			"name": "Rute",
			"email": "usuario@email.com",
			"password": "senha123"
		},
		{},
		{},
		{},
		{},
		{},
		{},
		{}
	]
}

Para o post iremos criar usuários aqui está um exemplo de um post.
{
		"name": "Rute",
		"email": "usuario@email.com",
		"password": "senha123"
	}
	
	Para o put iremos introduzir um Id de um usuário aqui está um exemplo:
	{
	"id": 1
}

Para o delete teremos que escolher um Id de um usuário aqui está um exemplo:
{
	Id:1
} 
