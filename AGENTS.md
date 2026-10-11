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

Identifique primeiro matéria, assunto e tipo de estudo. No estudo dirigido de assunto, capítulo ou unidade, o livro é a base e slides, aulas conceituais e aulas ao vivo são complementos. Para aula ao vivo, os assuntos efetivamente tratados na aula orientam o post, com livro e slides como complemento. Diferencie os tipos no escopo, texto, referências e cartões. Não exija aula para um estudo do livro nem substitua silenciosamente uma fonte principal ausente.

Cada aprofundamento gera um novo post vinculado ao post de origem quando existente, seja estudo do livro ou aula ao vivo. Preserve páginas existentes, salvo ajustes de navegação e catálogo. Atualize cartões e contagens ao adicionar posts.

## Publicação e Git

Ao executar `/criar-post` ou um pedido equivalente dirigido ao agente editorial, commit e push para `main` fazem parte da entrega autorizada. Isso não autoriza commits em tarefas gerais de manutenção.

Inspecione alterações existentes e preserve trabalho do usuário. Inclua somente arquivos da execução. Não use `git add .`, force-push, amend ou comandos destrutivos. Se não estiver em `main`, não troque de branch silenciosamente: registre o impedimento. Nunca declare um site publicado na internet apenas porque o push terminou.
