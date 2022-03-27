# udacity-project

## Scripts

### test:

npm run build && jasmine

### dev:

nodemon src/index.ts

### build:

tsc

### start:

npm run build && node dist/index.js

### lint:

eslint src/\*\*/\*.ts

### lint:f

eslint src/\*\*/\_.ts --fix

### format:

prettier --write src/\*\*/\_.ts

## Endpoint usage

localhost:3000/resize?fileName=fjord&height=400&width=300
