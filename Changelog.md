Dia 01:
# Instalação:
    Criado o repositório, acessado com o terminal e executado "npm init -y"
    Instalado tambem o sequelize, "npm install sequelize"
    Criado o .gitignore, conteúdo: "node_modules"
    Instalando express, pg e pg-hstore para utilizar postgre
    Instalado o nodemon
    Criei script "start" para iniciar a aplicação
    Criado a pasta src e ./src/routes.js e ./src/server.js
## Primeiro commit finalizado

# Configurando database:
    Criado database/index.js, para conectar ao banco de dados
    Criado config/database.js, para configurar o banco de dados
    Erro ao executar "npx sequelize db:create", 
        ERROR: Error reading "config\config.json". Error: Error: Cannot find module 'C:\Users\rafael.mello\Documents\GitHub\Treinando-Autenticacao-Com-Node.js\config\config.json'
    Resolução:
        Criação de ./.sequelizerc para informar o caminho do arquivo
    Erro ao executar "npx sequelize db:create",
        ERROR: getaddrinfo EAI_FAIL postgres://rhcvhoyy:LbkbHqgKa_MskKcbl-HeEywXn9uwMN0P@kesavan.db.elephantsql.com/rhcvhoyy
    Resolução:
        Instalei postgres na maquina, porta: 5432
### Finalizando o dia, commit realizado, problema não resolvido
Dia 02
# Resolvendo problema do dia anterior
    Problema: Erro ao executar "npx sequelize db:create",
    Resolução:
        Reinstalado o portgres e conectando à servido local ao invés de elephantsql
    Base de dados "sqlnode" criada com sucesso, através do comando "npx sequelize db:create"
# Configurando database Parte 02:
    Implementando as Migrações
    O caminho para as migrações será src/database/migrations, e para o sequelize ficar ciente disso,
    foi feita uma alteração no .sequelizerc, para avisar o caminho
    Criando a micração com o comando "npx sequelize migration:create --name=create-users", criando a tabela de usuários