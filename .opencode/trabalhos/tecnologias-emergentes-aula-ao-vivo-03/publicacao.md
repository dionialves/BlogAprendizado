# Montagem e validação — aula ao vivo 03

## Entrega montada e revisão final aprovada

- Título: Software industrial: camadas, qualidade e integração resiliente.
- URL relativa: `/tecnologias-emergentes-aula-ao-vivo-03/`.
- Página: `src/pages/tecnologias-emergentes-aula-ao-vivo-03.astro`.
- Reaproveita `StudyPostLayout`, BaseLayout, SiteHeader e script compartilhado, já compatíveis com a matéria, índice móvel e impressão. Não alterados esses arquivos compartilhados.
- `src/lib/render-study.ts`: acrescentada apenas condição lesson03 para posições dos visuais; caminhos e conteúdo 01/02 preservados.
- `src/pages/index.astro`: total 5 posts e cartão da matéria com 3 aulas ao vivo.
- `src/pages/tecnologias-emergentes-em-engenharia-de-software.astro`: contagem 3 e novo cartão da aula03.
- Assets próprios: `public/assets/tecnologias-emergentes-aula-ao-vivo-03/mapa-responsabilidades.svg` e `confirmacao-idempotencia.svg`.
- Dossiê completo: `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-03/`.

## Resultados reais

- `npm run build`: aprovado, 8 páginas estáticas. Reexecutado após ajuste de apresentação na abertura: retirada somente expressão redundante “Ideia central”, pois layout já imprime esse rótulo. Conceito preservado.
- HTML gerado: 143 chamadas sobrescritas (139 texto + 4 figuras), 18 referências, 143 retornos; IDs únicos e nenhum destino interno ausente. Todos links locais e ambos assets existem. Alt e dimensões declarados nas duas imagens. Nenhum PDF/TXT/MD editorial publicado em dist.
- Dez seções com IDs únicos; índice desktop e móvel numerados 01–10. Sete respostas recolhidas (3 atividades fictícias e 4 perguntas) e sete campos com IDs isolados `te-03-rascunho-*`; sem armazenamento misturado com outros posts.
- Transcrição, livro e slides continuam somente nas referências bibliográficas, sem disponibilizar documentos internos ao público.

## Navegador — IAB, prévia local do build

- Desktop 1280px: abertura inspecionada por screenshot; cabeçalho com marca completa e botão único de impressão, título serifado/verde, paleta e colunas compartilhadas. Nenhuma rolagem horizontal geral.
- Índice longo tem rolagem interna e todos os dez links acessíveis. Âncora “Caso de pedidos” leva ao título; índice a 40px do topo no meio e fim. Marca e retornos apontam à matéria correta e catálogo.
- Progresso medido no DOM: 0% no início, 53,4846% no caso de pedidos e 100% no fim (distância restante zero). Após mudança de viewport continuou acompanhando a rolagem.
- Móvel 390 × 844: screenshot da abertura; marca e impressão cabem sem sobreposição, lateral oculta, controle “Neste post” visível e expansível. Link “Referências” funciona; largura total sem overflow. Override restaurado ao final.
- Retorno da referência 5 para `#citacao-5-22` testado: abre automaticamente a resposta antes recolhida e exibe o destino. Destaque de destino visível. Links e summaries são controles nativos; CSS compartilhado tem foco visível. Não executada sequência exaustiva por teclado.
- Dois SVGs abertos em tamanho original no navegador e inspecionados por screenshot: textos legíveis, hierarquia e cores coerentes. Inseridos com legenda, crédito, chamadas e acesso ao original.
- Impressão: regras e script conferidos, com abertura de respostas em beforeprint, restauração em afterprint, ocultação de cabeçalho/índice/progresso/rascunhos e referências preservadas. **Prévia de impressão/PDF não executada**, pois interface de navegador disponível não expõe emulação de mídia ou captura PDF. Não declarar validação visual impressa.
- Não simuladas página curta, carregamento tardio de imagens ou todos os tamanhos intermediários; código compartilhado já contempla range zero, load e ResizeObserver.

## Git e escopo de publicação

Revisão final independente explicitamente APROVADA em revisao.md. Publicação no repositório em execução: main e origin git@github.com:dionialves/BlogAprendizado.git conferidos, status/diff/log recente inspecionados. Não houve alteração de código ou conteúdo após a revisão final. Commit seletivo com --only, preservando fontes alheias staged. SHA e resultado real do push serão informados na entrega, sem segundo commit para registrar o próprio SHA. Não há deploy verificado.

Preservar e excluir do commit editorial as duas fontes preexistentes: `Matérias/Tecnologias emergentes em engenharia de software/slides/aula03.pdf` (A staged) e `Matérias/Tecnologias emergentes em engenharia de software/transcrição/aula03.txt` (AM). Nenhuma operação de stage foi realizada nesta montagem.

Arquivos autorizados desta execução: página03, alteração isolada render-study, dois catálogos, pasta dos dois assets e todos os documentos finais deste dossiê. Excluir intermediários de /tmp, dist e fontes preexistentes. Inspeção final de branch/remoto/status/log/diff e seleção explícita são responsabilidade do estágio de publicação.

## Lista explícita dos 14 arquivos do commit

- `src/lib/render-study.ts`
- `src/pages/index.astro`
- `src/pages/tecnologias-emergentes-aula-ao-vivo-03.astro`
- `src/pages/tecnologias-emergentes-em-engenharia-de-software.astro`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-03/escopo.md`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-03/evidencias.md`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-03/mapa-referencias.md`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-03/plano.md`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-03/post.md`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-03/publicacao.md`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-03/revisao.md`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-03/visuais.md`
- `public/assets/tecnologias-emergentes-aula-ao-vivo-03/confirmacao-idempotencia.svg`
- `public/assets/tecnologias-emergentes-aula-ao-vivo-03/mapa-responsabilidades.svg`
