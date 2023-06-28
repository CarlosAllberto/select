## Como correr:

Na pasta /backend/src/ digite:

```
npm install -g yarn
yarn
yarn global add sequelize-cli
yarn global add nodemon
npx sequelize-cli init

coloque o usuario e senha no arquivo localizado em "backend/src/config.json"

npx sequelize-cli db:create
npx sequelize-cli db:migrate
yarn dev
```

## Mesma coisa mas com menos trabalho. (caso não queira digitar os comandos acima):

Na pasta "/backend/src" digite:

```
npm install -g yarn && yarn && yarn global add sequelize-cli && yarn global add nodemon && npx sequelize-cli init
```

Coloque o usuario e senha no arquivo localizado em "backend/src/config.json"
Volte para a pasta "/backend/src" e digite:

```
npx sequelize-cli db:create && npx sequelize-cli db:migrate && yarn dev
```