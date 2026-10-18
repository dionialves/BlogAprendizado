# Revisão independente — aula ao vivo 03

## Primeira etapa: factual e editorial

**Resultado: APROVADO para visuais e montagem. Sem bloqueios factuais ou editoriais identificados.**

Revisor independente do redator. Regras consultadas: `.opencode/agents/revisor.md`, `.opencode/editorial.md` e `.opencode/layout.md`. Conferidos escopo, evidências, plano, texto integral e mapa de referências. Não foi utilizada internet nem conhecimento externo como fonte factual.

### Conferência das fontes originais

- Transcrição original `Matérias/Gestão de Projetos/transcrição/aula03.txt`: conferida do início ao encerramento, incluindo identificação do terceiro encontro, avisos excluídos e desenvolvimento conceitual.
- Slides originais `slides/aula03.pdf`: todos os 27 slides examinados visualmente nas pranchas locais de renderização `/private/tmp/gp-sheet-{1,7,13,19,25}.png`. As pranchas contêm numeração individual; os slides 4–26 cobrem os assuntos substantivos.
- Livro original `livro.pdf`: conferido em extração local `/private/tmp/gp_livro.txt`, com delimitadores de página física; trechos pertinentes pp. 13, 24–27, 48–54, 63 e gabarito p. 143. A extração tem perda de algumas letras em certos trechos, mas permite conferir as afirmações utilizadas com o confronto dos materiais da aula. Não foi feita inspeção visual de todas as páginas do livro.

### Fatos, cobertura e decisões

Conferidos todos os assuntos E001–E018 e os desenvolvimentos correspondentes do post, incluindo tabelas, exemplos e respostas. O texto integra projeto/operação, restrições e valor, PMI/PMBOK/PMP, cinco grupos, dez áreas, integração, TAP, requisitos/escopo, mudanças, EAP e caso de aluguéis, dependências/Gantt/marcos/caminho crítico, orçamento/desvios, qualidade, recursos humanos/físicos, stakeholders, comunicação, riscos/oportunidades e aquisições. Não há assunto substantivo da matriz omitido sem justificativa.

As exclusões de avisos, apreciações mercadológicas, geopolítica e anúncio das aulas futuras são compatíveis com o recorte e não removem conteúdo necessário. A aula está corretamente classificada como ao vivo. O livro é base conceitual e os materiais da aula preservam assuntos adicionais efetivamente documentados.

Conferidas e consideradas sustentadas as decisões sobre nomenclatura PMI/PMBOK, dez versus nove áreas, grupos de processos inter-relacionados, ausência de afirmação sobre edição atual, exclusão de percentual de aprovação PMP, não reprodução do cronograma inconsistente, distinção entre caminho e barra individual e exclusão dos exemplos orais de estratégias de risco com classificação duvidosa. Nenhuma contradição essencial ficou transferida ao estudante.

Os exemplos fictícios ou hipotéticos estão identificados. O caso de aluguéis e seus cinco agrupamentos correspondem ao slide 15; a ressalva sobre transição evita confundir projeto e operação contínua. O exemplo dos caminhos compara 8 e 5 dias com hipóteses explícitas. O exemplo de custos calcula corretamente 30 previstos, 33 realizados, diferença de 3. O critério 100%/72 horas e resultado de 90% são expressamente hipotéticos e correspondem ao desenvolvimento da transcrição. A tabela de riscos identifica as classificações inventadas. Não há promessa de sucesso nem recomendação atual de certificação.

### Referências e qualidade didática

As 28 entradas finais localizam livro, slides ou transcrição com papel e tipo identificados. As chamadas são numéricas, sobrescritas e clicáveis; não há nomes de arquivos/timestamps usados como procedência no desenvolvimento. Conferência estrutural de `post.md`: 127 IDs, nenhum duplicado, nenhum destino interno ausente; primeira ocorrência dos números em ordem contínua de 1 a 28. Entradas e reutilizações correspondem ao mapa. Respostas comentadas possuem suporte numérico junto à explicação.

A narrativa organiza conceitos e relações, é autossuficiente para quem não assistiu à aula e não se estrutura como relato de falas. Define termos antes do uso, desenvolve aplicação e limites e oferece prática com comentários. Não foram identificadas reproduções extensas nem atribuições inventadas.

### Achados e ações

Não há correção factual/editorial impeditiva nesta versão. Responsáveis por próximas verificações: editor visual/publicador, com conferência independente final pelo revisor. Os dois marcadores de visual devem ser substituídos pelos arquivos efetivos; legendas e conceitos devem usar as referências existentes, adicionando IDs únicos e retornos correspondentes.

## Etapa final: montagem e validação

**Resultado: APROVADO para publicação no repositório. Sem bloqueios identificados.**

Conferência independente da página `src/pages/aula-03.astro`, saída efetiva `dist/aula-03/index.html`, layout compartilhado `StudyPostLayout.astro`, renderizador `src/lib/render-study.ts`, `study-post.js`, BaseLayout/SiteHeader, estilos compartilhados, alterações de catálogos, dois SVGs e registros de publicação/visuais.

### Conteúdo, referências e integração

- A saída mantém os dez segmentos de estudo previstos e o texto aprovado, sem marcadores de trabalho, HTML escapado indevido, IDs de evidência ou dossiê público. Tipo Aula ao vivo 03, matéria e título identificados.
- Conferência do HTML final: 104 chamadas de citação, 28 referências, nenhum ID duplicado e nenhum destino interno ausente. Os retornos individuais são regenerados a partir das ocorrências reais. As cinco chamadas adicionais de legenda são 9-6, 10-4, 13-7, 14-7 e 15-5, corretas para os conceitos representados.
- Há sete respostas comentadas e sete rascunhos exclusivos `gp-03-*`, sem armazenamento compartilhado. Mais um `details` corresponde ao índice móvel. Código abre ancestrais recolhidos em navegação para citação e trata hash inválido sem interromper a página.
- Os SVGs mostram somente relações sustentadas nas evidências aprovadas: integração e nove áreas; requisitos → escopo → EAP/pacotes → atividades → cronograma. Nenhuma equivalência incorreta entre pacote e atividade. Arquivos próprios sem scripts/recursos externos, com título/descrição, dimensões, alt informativo, crédito e legenda com referência numérica.
- Cartão novo leva à página existente no build, identifica Aula ao vivo 03; matéria apresenta três posts e catálogo seis no total. Páginas anteriores preservadas. Alterações compartilhadas introduzem opções com defaults anteriores mantidos; não modificam a seleção de posições ou prefixos das páginas existentes. Saída dos três posts de Tecnologias continua gerada.

### Layout e funcionamento

O código usa BaseLayout e SiteHeader, marca e retorno para Gestão, um botão de impressão, tipografia/paleta/espaçamentos compartilhados, índice esquerdo com dez âncoras sequenciais, área rolável para índice longo e `sticky` a 40px, índice móvel sem IDs duplicados e barra fina dourada. Links, summary, botões e campos têm foco visível; navegação usa âncoras reais e preferência de redução de movimento é respeitada pelo CSS. O progresso é limitado entre 0 e 100%, trata página curta e atualiza com scroll passivo, resize, load e ResizeObserver.

Evidência visual/funcional recebida e registrada pelo coordenador, **não executada pessoalmente pelo revisor**: desktop 862×827 e 1360×1100 e celular 390×844 sem overflow geral; índice persistente no começo/meio/fim; progresso 0%, aproximadamente 49,95% e 100%; índice móvel expansível com Referências funcional; retorno à ocorrência 5 da referência 16 abre resposta 4; ambos SVGs completos e legíveis em ampliação. Essa inspeção é compatível com a estrutura e estilos examinados independentemente.

Build aprovado pelo publicador/coordenador, com saída gerada examinada nesta revisão. Não foi repetido sem necessidade, pois não houve mudança em código pelo revisor.

### Impressão e limites reais

CSS de impressão oculta cabeçalho, índice, progresso e controles, conserva texto/referências em largura útil e fundo branco, evita quebra de figuras e preserva legibilidade dos números. Script abre respostas em `beforeprint`, guarda estado e restaura em `afterprint`. **Prévia real de impressão/PDF não foi executada**; não se declara verificação visual da paginação. Percurso completo por teclado e foco não foi observado em navegador; semântica e estilos foram conferidos no código. O revisor não realizou uma segunda inspeção visual própria de desktop/celular, utilizando os registros de observação do coordenador com essas limitações explícitas.

Nenhuma correção impeditiva restante. Não há aprovação ou declaração de deploy: esta revisão libera commit/push autorizados, cuja execução e resultado cabem ao coordenador. Somente `revisao.md` foi alterado pelo revisor.
