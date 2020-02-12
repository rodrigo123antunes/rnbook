# Template Rodrigo Basic

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando React Native, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/);
- [React Navigation](https://reactnavigation.org/);
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/);
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons);
- [Native Base](https://github.com/GeekyAnts/NativeBase);


## Começando

Para conseguir utilizar o template, siga os passos abaixo.

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte forma:

```bash
template
├── src/
│   ├── Component/
│   │   └── AppNavigator.js
│   │   └── Header.js
│   │   └── index.js
│   │   └── Spinner.js
│   ├── Util/
│   │   └── AppUtils.js
│   │   └── Constants.js
│   │   └── index.js
│   │   └── Http.js
│   ├── View/
│      └── Page/
│          └── Home.js
│          └── index.js
├── .gitignore
├── App.js
├── app.json
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── metro.config.js.js
├── package.json
└── README.md
```

### Instalação

Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
react-native init AwesomeExample --template rodrigo-basic
```

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.