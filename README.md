# Caderno de estudo

Blog de estudos em Astro, com páginas estáticas e atividades em JavaScript. O conteúdo, o visual e as imagens do projeto original foram preservados.

## Executar

É necessário Node.js 22.12 ou superior (versão par).

Execute os comandos na raiz do projeto:

```sh
npm install
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:4321).

## Gerar o site

```sh
npm run build
npm run preview
```

O build gera o site estático em `dist/`, pronto para hospedagem. O preview serve essa pasta localmente. Para estudar sem internet, instale as dependências antes e use o servidor local; não abra os arquivos de origem diretamente no navegador.

## Estrutura

- `src/pages/`: catálogo, matéria e aulas. Cada arquivo `.astro` cria uma página.
- `src/layouts/BaseLayout.astro`: estrutura HTML, metadados e estilos.
- `src/components/SiteHeader.astro`: cabeçalho compartilhado.
- `src/styles/`: estilos originais.
- `src/scripts/`: questionários, anotações, exportação, slides e impressão.
- `public/assets/`: imagens, acessíveis por `/assets/`.
- `astro.config.mjs`: configuração do Astro.
- `public/*.html`: redirecionamentos dos antigos endereços das aulas e da matéria.

As páginas são `/`, `/gestao-de-projetos/`, `/aula-01/` e `/aula-02/`. Os endereços antigos têm páginas de redirecionamento no build estático.

## Adicionar conteúdo

Crie uma página em `src/pages/` usando `BaseLayout` e `SiteHeader`, seguindo uma das páginas existentes. Atualize os cartões e as contagens no catálogo e na matéria. Coloque novas imagens em `public/assets/` e use caminhos iniciados por `/assets/`. Importe scripts de atividades apenas na aula correspondente.

As respostas das atividades são armazenadas no navegador por aula. O botão “Baixar minhas respostas” permite guardar uma cópia. As fontes dos materiais continuam indicadas no final das aulas.

## Criar posts com agentes do OpenCode

O agente principal `editor-do-blog` coordena pesquisa, planejamento, redação, revisão, enriquecimento visual e publicação. Após reiniciar o OpenCode, use:

```text
/criar-post matéria="Gestão de Projetos" aula="02"
/criar-post matéria="Gestão de Projetos" aula="02" tema="Comunicação e gestão de conflitos"
```

O fluxo utiliza os materiais da pasta da matéria, cria um novo post, atualiza o catálogo e valida o build. Após revisão final, cria o commit e envia os arquivos da entrega ao remoto na branch `main`. O envio ao repositório não confirma publicação na internet; isso depende de hospedagem e deploy configurados.

Consulte [o guia dos agentes](.opencode/README.md) para conhecer as etapas, ferramentas necessárias e recuperação de trabalhos. As regras editoriais estão em [`.opencode/editorial.md`](.opencode/editorial.md), e as instruções gerais em [`AGENTS.md`](AGENTS.md).
