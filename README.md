## Design System

Projeto de Desing System do Figma ao React estudado durante o Ignite Lab | React na Rocketseat.

Ferramentas utilizadas:

- Figma
- React - vite - `npm create vite@latest`
- Typescript

Dependencias utilizadas:

- `npm i -D tailwindcss postcss autoprefixer`

Interface do Projeto:

- <a href="https://www.figma.com/file/UypXRXWaZLTCGA1x1MyrVW/Ignite-Lab-%7C-design-system?node-id=0%3A1">Protótipo do projeto no Figma.</a>

### Linhas de comandos ultizados:

- `npx tailwindcss init -p`

Configurar o storybook:

- `npx sb init --builder @storybook/builder-vite --use-npm`
- `npm run storybook`

Outras linhas de comando:

- `npm install --save clsx`.

Para usar componentes não estilizados do Redix UI.

- `npm install @radix-ui/react-slot` para usar slot.

- `npm install @radix-ui/react-checkbox` para usar checkbox.

Para usar a biblioteca de ícones Phosphor.

- `npm i phosphor-react`

Para realizar deploy da Aplicação no GitHub

- `npm i @storybook/storybook-deployer --save-dev`

Para realizar build da Aplicação

- `npm run build-storybook`

Para adicionar o addon de acessibilidade

- `npm install @storybook/addon-a11y`

Para converter SVG do Figma em componente do React:

- <a href="https://transform.tools/">transform.tools</a>

Para addicionar o plugin de interações do Storybook:

- `npm install @storybook/addon-interactions @storybook/jest @storybook/testing-library @storybook/test-runner -D`

Para realizar test na Aplicação:

- `npm run test-storybook` ou `npm run test-storybook -- --watch`

Para realizar chamadas HTTP:

- `npm install axios`

Para adicionar o msw:

- `npm i msw msw-storybook-addon -D`

- `npx msw init public/`
