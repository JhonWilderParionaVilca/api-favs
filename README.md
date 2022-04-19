<h1 align="center"> Express TSC </h1>

## Construcción

```sh
$ yarn init -y
$ yarn add -DE typescript
$ yarn tsc --init
$ npx eslint --init
$ yarn add -DE @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@2.25.2 @typescript-eslint/parser@latest prettier eslint-config-prettier jest ts-jest @types/jest eslint-plugin-jest
# config eslint prettier editor config jest package json
$ yarn add -DE @commitlint/{config-conventional,cli}
$ echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
$ npx mrm@2 lint-staged
$ npx husky add .husky/commit-msg 'npx --no-install commitlint --edit'
$ yarn prepare
$ chmod +x .husky/*
```

## Conceptos

### API

interfaz que pone a disposición funcionalidades complejas de manera facil para que sean usadas por otra aplicación o programa.

### REST

técnica de arquitectura de como debe estar construida una api web

### RestFull

Implementación de rest
