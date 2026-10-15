# Montagem e publicação — aula ao vivo 02

## Entrega montada

- Título: Como organizar uma fábrica de software: processos, produtos, projetos e programas.
- Tipo: Aula ao vivo 02.
- URL relativa: `/tecnologias-emergentes-aula-ao-vivo-02/`.
- Página: `src/pages/tecnologias-emergentes-aula-ao-vivo-02.astro`.
- Integração: `src/pages/index.astro` e `src/pages/tecnologias-emergentes-em-engenharia-de-software.astro`.
- Ativos: `public/assets/tecnologias-emergentes-aula-ao-vivo-02/quatro-modelos.svg` e `fluxos-esteira.svg`.
- Dossiê: todos os sete arquivos Markdown desta pasta; intermediário `slides-extraidos.txt` removido.

Reutilizados BaseLayout e SiteHeader. O renderizador local converte o post revisado para HTML durante a compilação, sem servir os documentos editoriais. Foram removidos marcadores de evidência e notas de produção, convertidas âncoras e links internos e inseridos os dois SVGs com dimensões, texto alternativo, legenda e crédito visível.

A página oferece cinco atividades e oito perguntas, treze rascunhos acessíveis e treze respostas recolhíveis. Os rascunhos usam IDs exclusivos da aula 02 e não são salvos; a nota pública avisa o leitor. O script de impressão atua somente nesta página, abre respostas antes da impressão e restaura o estado depois. Nenhum script de outra aula foi importado. As páginas anteriores foram preservadas; há vínculo para a aula 01.

## Validação da montagem

- `npm run build`: aprovado; sete páginas geradas, incluindo a nova rota.
- Auditoria da saída HTML: links locais e âncoras resolvem, IDs são únicos, dois ativos SVG existem com texto alternativo, treze `details` começam recolhidos, treze `textarea` possuem label associado e aviso de rascunho não salvo.
- Corrigida a retirada de aspas tipográficas delimitadoras nos textos alternativos e legendas, após achado do navegador; novo build aprovado.
- Conferidos marcadores internos ausentes e ausência de `post.md` no diretório público gerado.
- Contagens: duas matérias, quatro posts no total; dois posts em tecnologias emergentes.
- Revisão factual/editorial anterior: aprovada em `revisao.md`.
- Inspeção executada pelo coordenador no preview `localhost:4322`: topo e respostas em desktop; rascunho preenchido e resposta expandida; imagens carregadas; móvel 390 × 844 sem transbordamento global, tabelas com rolagem local; SVG 1 integral legível no móvel e SVG 2 com trilhas, convergência e esteira legíveis em tamanho original. Viewport restaurado.
- Revisão final independente: APROVADA em `revisao.md`, sem bloqueios. O diálogo de impressão não foi executado; código conferido pelo revisor.

## Estado

Revisão final aprovada e publicação autorizada. Conferidos branch `main`, remoto `origin` (`git@github.com:dionialves/BlogAprendizado.git`), histórico recente, alterações e arquivos novos da execução. Commit e push para `origin main` serão executados com stage explícito dos três arquivos Astro, dois SVGs e sete documentos Markdown desta execução; SHA e resultado real serão informados na entrega, sem segundo commit apenas para registrar o próprio SHA. Nenhum deploy online verificado.
