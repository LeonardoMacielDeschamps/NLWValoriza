import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  "type": "sqlite",
  "database": "src/database/database.sqlite",
  "migrations": [
    "src/database/migrations/*.ts"
  ],
  "entities": [
    "src/entity/*.ts"
  ]
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized.')
  })
  .catch(error => {
    console.error('Error during Data Source initialization', error);
  })

export { AppDataSource }