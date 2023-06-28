## Inportante:

1 - Renomeie o arquivo "config-model.json" que está localizado em /backend/src/config/ para "config.json"

2 - coloque o usuario e senha do seu MySQL no arquivo "config.json"

## Como correr:

Na pasta /backend/src/ digite:

```
npm install -g yarn
yarn
yarn global add sequelize-cli
yarn global add nodemon
npx sequelize-cli db:create
npx sequelize-cli db:migrate
yarn dev
```

Mesma coisa mas usando apenas uma linha de comando na pasta /backend/src (caso não queira digitar os comandos acima):

```
npm install -g yarn && yarn && yarn global add sequelize-cli && yarn global add nodemon && npx sequelize-cli db:create && npx sequelize-cli db:migrate && yarn dev
```