# Caderno de estudo — instruções para agentes

Este projeto é um blog estático em Astro. Leia `.opencode/editorial.md` antes de criar ou revisar posts. Os agentes especializados e o comando `/criar-post` estão em `.opencode/`.

## Projeto

- `Matérias/<matéria>/`: única base factual autorizada para os posts.
- `src/pages/`: páginas de matérias, aulas e aprofundamentos.
- `src/layouts/BaseLayout.astro` e `src/components/SiteHeader.astro`: estrutura compartilhada.
- `src/styles/` e `src/scripts/`: estilos e interações existentes.
- `public/assets/`: imagens públicas; não exponha os documentos de trabalho editoriais.
- `npm run build`: validação obrigatória antes de publicar um post.

## Trabalho editorial

Use `editor-do-blog` para coordenar pesquisador, planejador-editorial, redator, revisor, editor-visual e publicador. A criação de posts autoriza essa delegação. O coordenador deve fornecer explicitamente o caminho das regras editoriais e do dossiê a cada subagente.

Escreva em português brasileiro, com voz de tutor didático e profundidade sustentada pelas fontes. Não use a internet nem conhecimento do modelo para preencher lacunas factuais. Exemplos fictícios e exercícios são permitidos quando identificados e derivados dos conceitos documentados.

Identifique primeiro matéria, assunto e tipo de estudo. No estudo dirigido de assunto, capítulo ou unidade, o livro é a base e slides, aulas conceituais e aulas ao vivo são complementos. Para aula ao vivo, confronte transcrição e slides para cobrir os assuntos tratados, usando o livro em PDF como base conceitual. Preserve assuntos adicionais documentados na aula mesmo quando ausentes do livro. O post deve ensinar de forma integrada a quem não assistiu à aula; comparativos, timestamps e decisões sobre divergências ficam no dossiê, sem transferir escolhas ao leitor. Diferencie os tipos no escopo, texto, referências e cartões. Não exija aula para um estudo do livro nem substitua silenciosamente uma fonte principal ausente.

Cada aprofundamento gera um novo post vinculado ao post de origem quando existente, seja estudo do livro ou aula ao vivo. Preserve páginas existentes, salvo ajustes de navegação e catálogo. Atualize cartões e contagens ao adicionar posts.

## Publicação e Git

Ao executar `/criar-post` ou um pedido equivalente dirigido ao agente editorial, commit e push para `main` fazem parte da entrega autorizada. Isso não autoriza commits em tarefas gerais de manutenção.

Inspecione alterações existentes e preserve trabalho do usuário. Inclua somente arquivos da execução. Não use `git add .`, force-push, amend ou comandos destrutivos. Se não estiver em `main`, não troque de branch silenciosamente: registre o impedimento. Nunca declare um site publicado na internet apenas porque o push terminou.

Toda indicação de fonte no conteúdo usa número sobrescrito clicável junto ao trecho, com destino na referência completa ao final da página; nomes de fontes e localizadores não interrompem o texto didático. Siga o padrão de numeração e navegação de `.opencode/editorial.md`.

Antes de criar, montar ou revisar o layout de um post, leia `.opencode/layout.md`. O padrão visual aprovado para todas as matérias são `src/pages/aula-01.astro` e `src/pages/aula-02.astro`, de Gestão de Projetos: cabeçalho com impressão, índice persistente à esquerda, tipografia/paleta compartilhadas e barra superior de progresso.
