# Montagem — aula ao vivo 03 de Gestão de Projetos

## Entrega

Título: PMBOK: como integrar as decisões de um projeto tecnológico.
URL relativa: `/aula-03/`. Página: `src/pages/aula-03.astro`.

Arquivos desta montagem: página nova; `src/layouts/StudyPostLayout.astro` (destinos e nome da matéria opcionais, mantendo defaults de Tecnologias); `src/lib/render-study.ts` (pontos de inserção e prefixo de rascunhos opcionais, mantendo comportamento anterior); `src/pages/gestao-de-projetos.astro` (cartão e três posts); `src/pages/index.astro` (três posts de Gestão e seis no total); dois SVGs em `public/assets/gestao-projetos-aula-ao-vivo-03/`; dossiê completo em `.opencode/trabalhos/gestao-projetos-aula-ao-vivo-03/`.

Materiais originais staged/preexistentes `Matérias/Gestão de Projetos/slides/aula03.pdf` e `Matérias/Gestão de Projetos/transcrição/aula03.txt` preservados, sem nenhuma operação de stage/commit nesta etapa. Não devem ser incluídos no commit editorial.

## Validações técnicas realizadas

- Lidos BaseLayout, SiteHeader, estilos compartilhados/aula-02, estrutura aprovada de aulas 01/02 e scripts; reutilizado script study-post, independente de dados de outros posts.
- `npm run build`: aprovado, nove páginas estáticas incluindo `/aula-03/`. Compilação final após ajustes das legendas aprovada.
- HTML gerado conferido: IDs únicos; todos os destinos e retornos internos existentes; 28 referências, 104 ocorrências de citação com retornos individuais. As cinco ocorrências adicionadas às legendas estão registradas no mapa.
- Dois SVGs com dimensões intrínsecas, alt informativo, legendas e crédito visível; arquivos locais encontrados. Links de páginas e estilos gerados existentes. Sem marcadores editoriais ou IDs de evidências no conteúdo público.
- Sete respostas comentadas recolhíveis e sete campos de rascunho `gp-03-*`, sem armazenamento; índice móvel distinto, sem duplicar IDs. Script abre respostas antes de imprimir e restaura o estado depois; retorno a citação dentro de resposta a abre antes de rolar.
- Cartão novo identifica Aula ao vivo 03; matéria três posts e catálogo seis posts, sem remoção de páginas anteriores.
- Preview persistente: `http://127.0.0.1:4321/aula-03/`, processo 21208, iniciado com permissão de execução local após tentativa restrita não disponibilizar a porta.

## Revisão visual e estado de publicação

Inspeção renderizada pelo coordenador em navegador: desktop 862 × 827 e 1360 × 1100; celular 390 × 844. Sem rolagem horizontal geral; cabeçalho e destinos corretos; índice com dez seções, sticky a 40px; progresso em 0 no início e 49,9514% na seção 5. Índice móvel “Neste post” expande e seu link Referências funciona. Retorno da referência 16, ocorrência 5, abre automaticamente a resposta 4 e posiciona o destino a aproximadamente 130px do topo. Os dois SVGs foram abertos integralmente em desktop e considerados legíveis.

Pequeno ajuste solicitado após inspeção: retirada do prefixo duplicado “Ideia central:” somente na transformação do texto da nova página, mantendo `post.md` e páginas anteriores intactos. Nova compilação aprovada após o ajuste.

Prévia real de impressão/PDF não executada: API do navegador disponível não oferece emulação. Conferidos CSS e script: cabeçalho/índice/progresso/controles ocultos; corpo em branco e largura útil; números e referências legíveis; respostas abertas em `beforeprint` e estado restaurado em `afterprint`. Conferência adicional do coordenador no fim da rolagem: progresso 100%, distância restante 0 e índice sticky ainda a 40px; viewport restaurado. Percurso completo por teclado/foco não foi relatado como observado nesta conferência. Esses limites não são equivalentes a validação visual de impressão.

Montagem pronta para revisão final independente. Sem commit e sem push por este agente; sem alegação de deploy/site online. Registro deve receber os resultados observados pelo coordenador antes da publicação autorizada.

## Liberação final e preparação do commit

Revisão final independente explicitamente APROVADA em revisao.md, sem alteração posterior do conteúdo. Inspecionados status, diff, arquivos não rastreados e dez commits recentes; `git diff --check` aprovado. Branch `main`; remoto esperado confirmado `origin`, `git@github.com:dionialves/BlogAprendizado.git`. Fontes preexistentes tiveram hashes do índice e da árvore de trabalho guardados em arquivo temporário para conferência após commit.

Lista explícita do commit: `src/pages/aula-03.astro`, `src/pages/gestao-de-projetos.astro`, `src/pages/index.astro`, `src/layouts/StudyPostLayout.astro`, `src/lib/render-study.ts`; os dois SVGs em `public/assets/gestao-projetos-aula-ao-vivo-03/`; os oito documentos deste dossiê (escopo, evidencias, mapa-referencias, plano, post, publicacao, revisao e visuais). Nenhum material de Matérias/ faz parte da entrega.

Execução autorizada: stage por caminhos explícitos e commit `--only` com a mesma lista, seguido de push para `origin main`. Resultado e SHA serão informados na entrega, sem segundo commit para registrar o próprio SHA. Não há mecanismo de hospedagem/deploy verificado; entrega ao repositório.
