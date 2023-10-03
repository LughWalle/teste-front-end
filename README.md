Este é um projeto [Next.js](https://nextjs.org/) desenvolvido para teste.

## Tecnologias usadas

![TypeScript](https://img.shields.io/badge/TypeScript--%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white)
![SASS](https://img.shields.io/badge/-SASS-bf4080?style=flat-square&logo=sass&logoColor=ffffff)


## Iniciando

>Primeiro faça o clone do repositorio em sua maquina:

```bash
#http
git clone https://github.com/LughWalle/teste-front-end.git

# ou

#ssh
git clone git@github.com:LughWalle/teste-front-end.git
```

>entre na pasta do projeto
```bash
cd teste-front-end
```
>instale todas as dependências
```bash
npm i
#ou
npm install
```
>configure o arquivo .env com as chaves, publica e privada

crie o arquivo .env na raiz do projeto e adicione essa chave:
```
NEXTAUTH_SECRET=PODE_SER_QUALQUER_COISA_AQUI
```
#
OPCIONAL - você também pode adicionar essas duas chaves em seu arquivo para poder fazer login com a conta google
```
GOOGLE_CLIENT_ID=XXXXXXXXXXXXXX
GOOGLE_CLIENT_SECRET=XXXXXXXXXXXXXXX
```
elas são obtidas em [Google cloud](https://console.cloud.google.com/welcome)

>agora inicie o servidor
```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

Credenciais para login
```
login: admin@admin.com
senha: 1515ggyyGG
```

## O projeto

O projeto consiste na ultilização da [Punk API](https://punkapi.com/documentation/v2)

- Página responsiva
- Modal de login
- Home com bebida aleatoria
- Lista de bebidas
