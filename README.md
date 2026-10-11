# Teste Técnico Front-end — Econverse

Aplicação de vitrine de produtos desenvolvida como parte do teste técnico para a vaga de **Desenvolvedor Front-end Júnior da Econverse**. O projeto reproduz a interface proposta no Figma e integra dados de produtos disponibilizados pela empresa.

## Tecnologias

- **React 19** — construção da interface em componentes.
- **TypeScript 6** — tipagem estática.
- **Vite 8** — ambiente de desenvolvimento e build.
- **Sass (SCSS)** — estilização.
- **Lucide React** — ícones.
- **Oxlint** — análise estática do código.

## Funcionalidades

- Página de vitrine com cabeçalho, banner promocional, categorias, marcas e rodapé.
- Exibição de produtos obtidos do JSON oficial da Econverse.
- Vitrines com navegação em carrossel.
- Modal com imagem, nome, descrição, preço e controle de quantidade do produto selecionado.
- Fechamento do modal pelo botão, pela tecla `Escape` ou por clique fora do conteúdo.
- Formulário de newsletter com validação no navegador.
- Layout responsivo baseado no protótipo fornecido.
- Cuidados com HTML semântico e acessibilidade.

## Pré-requisitos

- **Node.js** e **npm** instalados. Recomenda-se utilizar uma versão recente do Node.js compatível com o Vite 8.
- Acesso à internet para instalar as dependências e carregar os produtos.

## Instalação e execução

Clone o repositório e acesse a pasta:

```bash
git clone https://github.com/pfonseca-dev/teste-front-end.git
cd teste-front-end
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Verificação e build

Execute a análise estática:

```bash
npm run lint
```

Gere o build de produção (inclui verificação de TypeScript):

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

O comando de build gera os arquivos estáticos na pasta `dist/`.

> **Nota:** não há um script de testes automatizados configurado no `package.json`. A validação funcional pode ser feita manualmente, verificando carregamento dos produtos, carrosséis, modal e formulário.

## Integração com a API

Os produtos são fornecidos pelo arquivo JSON oficial da Econverse:

[`produtos.json`](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json)

A aplicação consulta a rota local `/api/products`. Durante o desenvolvimento, o **proxy do Vite** encaminha essa rota ao JSON oficial, evitando restrições de CORS no navegador.

**Importante:** o proxy do servidor de desenvolvimento não é incluído automaticamente nos arquivos estáticos de `dist/`. Para publicar o projeto em uma hospedagem estática, é necessário configurar um proxy ou uma reescrita equivalente no ambiente de hospedagem, ou adaptar a estratégia de consumo da API. O comando `npm run preview` é uma ferramenta de verificação local e não substitui a configuração do servidor de produção.

## Escopo e observações

O foco do teste é a reprodução da interface e a interação com a vitrine de produtos. O botão **Comprar** não está integrado a carrinho, pagamento ou checkout. A newsletter apresenta validação na interface, sem integração declarada com um serviço de inscrição.

## Referências

- [Repositório do desafio — Econverse](https://github.com/EconverseAG/teste-front-end)
- [Protótipo no Figma](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1)
- [JSON de produtos da Econverse](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json)

---

Projeto desenvolvido para fins de avaliação técnica. Design e dados de referência fornecidos pela **Econverse**.
