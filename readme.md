<h1>📙 Resultados Escolares API 📙</h1>

<p>Bem-vindo à API de Resultados Escolares, uma aplicação em Node.js que permite gravar, excluir e listar resultados escolares por bimestre, disciplina, nota, data de criação e data de atualização. Esta API foi desenvolvida utilizando TypeScript, Prisma, Fastify e seguindo os princípios do padrão SOLID e Clean Code.</p>

## 📝 Pré-requisitos

<p>Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:</p>

✅ Node.js (v14 ou superior)</br>

✅ npm (v6 ou superior)</br>

✅ TypeScript</br>

✅ Prisma</br>

✅ Fastify</br>

## ⚙️ Instalação

<p>Clone este repositório:</p>

```bash
git clone https://github.com/seu-usuario/api-resultados-escolares.git
```

<p>Instale as dependências:</p>

```bash
cd api-resultados-escolares

npm install
```

<p>Execute as migrações do banco de dados com Prisma:</p>

```bash
npx prisma migrate dev
```

<p>Inicie o servidor:</p>

```bash
npm run start
```

A API estará acessível em <http://localhost:3333>.

## 📍 Endpoints

1.Gravar Resultado Escolar
URL: /resultados
Método: POST
Exemplo de corpo da requisição:

```bash
{
  "bimestre": "PRIMEIRO",
  "disciplina": "Sociologia",
  "nota": 9.5
}
```

2.Excluir Resultado Escolar

URL: /deletarResultado/:id

Método: DELETE

3. Listar Resultados Escolares

URL: /listarResultados

Método: GET

Parâmetros de Consulta Opcionais:

id

## 🔩 Estrutura do Projeto

A estrutura do projeto segue o padrão de arquitetura limpa (Clean Architecture) para garantir a separação de responsabilidades e a manutenibilidade do código. Os principais diretórios são:

src/controllers: Controladores que lidam com as requisições HTTP.
src/services: Lógica de negócios e interação com o banco de dados.
src/routes: Definição das rotas da aplicação.

Espero que esta API seja útil para o gerenciamento de resultados escolares. Se precisar de ajuda ou tiver sugestões, não hesite em entrar em contato. ¡Boa codificação! 🚀

<h4 align="center">
  Feito com ❤️ por Gabriel Rodrigues 👋️ <a rel="no-referrer no-follow" href="mailto:gabriel_rodrigues_perez@hotmail.com">Entre em contato!</a>
</h4>

<p align="center">

  <a href="https://www.linkedin.com/in/gabriel-rodrigues-perez-2069b072/">
    <img alt="Gabriel Rodrigues Perez" src="https://img.shields.io/badge/LinkedIn-Gabriel_Rodrigues-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
  <a href="https://www.facebook.com/gabriel.rodrigues.perez">
    <img alt="Gabriel Rodrigues Perez" src="https://img.shields.io/badge/Facebook-Gabriel_Rodrigues-1778F2?style=flat&logoColor=white&logo=facebook">
  </a>
  <a href="https://www.instagram.com/gabriel_rodrigues_perez/">
    <img alt="Gabriel Rodrigues Perez" src="https://img.shields.io/badge/Instagram-@gabriel4420-833AB4?style=flat&logoColor=white&logo=instagram">
  </a>
  
</p>
