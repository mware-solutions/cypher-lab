# BigConnect Cypher Lab

BigConnect Cypher Lab is the general purpose user interface for working with Cypher queries. Query and visualize the database
with modern and easy-to-use tools.

![neo4j browser screenshot](./.github/neo4j-browser-screenshot.png)

## Development setup

1.  Clone this repo
1.  Install yarn globally (not required but recommended): `npm install -g yarn`
1.  Install project dependencies: `yarn`

### Development server

`yarn start` and point your web browser to `http://localhost:8080`.

## Devtools

Download these two chrome extensions:

- [Redux devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
- [React devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)


## Production build
yarn build
yarn prepare-jar
mvn clean install

