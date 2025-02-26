## 🚀 Instalação e Execução

### 1️⃣ Instalar Dependências

```sh
npm install
```

### 2️⃣ Iniciar o Servidor JSON

```sh
npx json-server --watch db.json --port 8000
```

### 3️⃣ Rodar o Projeto em Desenvolvimento

```sh
npm run dev
```

### 4️⃣ Rodar o Storybook

```sh
npm run storybook
```

## 📂 Estrutura do Projeto

```
├── src
│   ├── assets/            # Recursos estáticos (imagens, fontes, etc.)
│   ├── components/        # Componentes reutilizáveis
│   ├── features/          # Módulos Redux
│   ├── hooks/             # Hooks customizados
│   ├── i18n/              # Arquivos de internacionalização
│   ├── pages/             # Páginas da aplicação
│   ├── store/             # Configuração global do Redux
│   ├── stories/           # Componentes para Storybook
│   ├── main.tsx           # Ponto de entrada do React
│   ├── App.tsx            # Componente principal da aplicação
```

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Material UI](https://mui.com/)
- [i18next](https://www.i18next.com/) (Internacionalização)
- [Storybook](https://storybook.js.org/)
- [Json Server](https://github.com/typicode/json-server) (Mock de API)

## 📌 Gerenciamento de Estado

O projeto utiliza Redux Toolkit para gerenciar o estado global. Os principais slices são:

- **authSlice.ts** → Gerencia a autenticação do usuário (login/logout)
- **carSlice.ts** → Gerencia informações de carros

## 📜 Scripts Disponíveis

| Comando                                       | Descrição                                     |
| --------------------------------------------- | --------------------------------------------- |
| `npm run dev`                                 | Inicia a aplicação em modo de desenvolvimento |
| `npm run build`                               | Compila a aplicação para produção             |
| `npm run lint`                                | Executa o linting no código                   |
| `npm run storybook`                           | Inicia o Storybook                            |
| `npx json-server --watch db.json --port 8000` | Inicia o backend fake                         |

````js
export default tseslint.config({
languageOptions: {
// other options...
parserOptions: {
project: ["./tsconfig.node.json", "./tsconfig.app.json"],
tsconfigRootDir: import.meta.dirname,
},
},
});



- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
````
