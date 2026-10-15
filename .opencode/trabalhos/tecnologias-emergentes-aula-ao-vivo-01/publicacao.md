# Estado da publicação

Entrega interrompida na revisão factual/editorial independente por indisponibilidade do serviço do agente revisor, registrada em `revisao.md`.

- Título proposto: Fábrica de software: do pedido à operação com qualidade e rastreabilidade.
- URL relativa proposta, não criada: `/tecnologias-emergentes-aula-ao-vivo-01/`.
- Artefatos recuperáveis: escopo.md, evidencias.md, plano.md, post.md e revisao.md neste dossiê.
- Página Astro e assets finais: não montados.
- Build e inspeção visual: não executados.
- Revisão final: não realizada.
- Commit/SHA e push: não realizados.
- Fontes e staging preexistentes: preservados.

Na retomada, realizar revisão independente antes de visuais e montagem; remover extrações e binários intermediários do conjunto de arquivos a publicar. Não incluir as fontes preexistentes do usuário no commit editorial.

## Retomada em 11/10/2026

O estado acima é histórico. Revisão factual/editorial independente agora realizada e aprovada, conforme `revisao.md`; R01 ajustado pelo redator. Visuais e montagem pendentes, sem build ou revisão final até este registro. Commit e push autorizados pelo pedido atual somente após build e aprovação final. A modificação preexistente de `revisao.md` foi preservada.

## Montagem e validação — 11/10/2026

**Entrega montada e validada estruturalmente, pronta para revisão final independente. Não é aprovação final nem publicação.** Esta chamada autoriza somente montagem/validação; futura publicação exige parecer final explícito em `revisao.md`, validações aprovadas e nenhuma alteração posterior não revisada. Sem stage, commit ou push. HEAD permanece `1acf5d3`, branch `main`.

### Páginas e integração

- Título: **Fábrica de software: do pedido à operação com qualidade e rastreabilidade**.
- Post novo: `src/pages/tecnologias-emergentes-aula-ao-vivo-01.astro`; URL `/tecnologias-emergentes-aula-ao-vivo-01/`; saída `dist/tecnologias-emergentes-aula-ao-vivo-01/index.html`.
- Matéria nova: `src/pages/tecnologias-emergentes-em-engenharia-de-software.astro`; URL `/tecnologias-emergentes-em-engenharia-de-software/`; saída correspondente em `dist/`.
- Integração: somente `src/pages/index.astro`, cartão da nova matéria e contagem de **2 matérias / 3 posts**. Nova matéria: **1 post**. Gestão de Projetos continua com **2 posts**; `/aula-01/`, `/aula-02/` e página da matéria existentes não foram modificadas.
- BaseLayout e SiteHeader reutilizados sem alterar componentes compartilhados. Navegação explícita Matérias → matéria → Aula ao vivo 01; marca do cabeçalho retorna ao catálogo. Não há aula 02 publicada desta matéria nem vínculo de origem pertinente.
- Tipo **Aula ao vivo 01** visível no post e cartão; nenhum capítulo/unidade inventado. Transcrição principal e slides complementares separados nas referências; ausência do livro e limites preservados.
- O post compila `post.md` e o inventário `visuais.md` por importação `?raw` apenas no build. Renderizador local cobre headings/âncoras, tabelas, listas, citação e marcação inline deste texto; não é um parser genérico de Markdown. Dossiê não é servido como arquivo público. **Alterar esses dois documentos muda a saída: qualquer mudança após o parecer final exige novo build e revisão.**
- R01 preservado no enunciado público da Atividade 1 (procedimento conhecido e relativamente previsível), entregue para reconferência independente.
- R02: retirados do HTML IDs E/D, necessidades visuais, notas de futura montagem, parágrafo de rastreadores e estado editorial. Notas de aplicação sem localizador retiradas; referências T/S expandidas para os nomes reais dos arquivos. Mantidos critérios didáticos, referências/localizadores, nove limites substantivos e distinção entre ficção explícita e ilustração sem comprovação empírica. `post.md` original não foi reescrito nesta montagem.
- R03: quatro SVGs próprios efetivamente inseridos; nenhum recorte/foto do PDF. Alt, dimensões, legenda, crédito e referência extraídos do inventário. Ampliação por link explícito “Abrir diagrama … em tamanho original”, operável sem JavaScript. Imagens com largura fluida e altura natural; tabelas HTML em região horizontalmente rolável; regras locais de móvel/impressão.
- Quatro atividades e dez perguntas abertas: 14 campos de rascunho com labels e 14 respostas comentadas em `details/summary` nativos, acessíveis sem JavaScript. Critérios e modelos completos mantidos. Não há pontuação automática ou persistência: aviso explícito de rascunhos não salvos. Sem `localStorage`/`sessionStorage`, portanto nenhuma chave pode misturar respostas de posts diferentes.
- Scripts `aula-01.js` e `aula-02.js` lidos antes da decisão: dependem de elementos/seletores e chaves `gp-aula01-`/`gp-aula02-`, incompatíveis com este questionário aberto. **Não importados.** Script local somente para impressão: seletores restritos a `#te-aov01`, impressão abre respostas e restaura estados anteriores depois.

### Verificações e resultados reais

1. `git status --short`, `git branch --show-current`, `git log -1 --oneline`: entrada em `main`, `1acf5d3`; alterações de escopo/post/publicação/revisão e visuais/assets já presentes. Histórico e trabalho recebidos preservados, especialmente `revisao.md`; sem alteração de fontes ou intermediários rastreados.
2. `npm run build`: **aprovado**, última execução 14:22:27–14:22:28, Astro gerou seis rotas estáticas, sem erro. Execuções anteriores também passaram; a primeira leitura revelou caminhos SVG com pontuação residual e notas internas restantes, corrigidos antes do build final.
3. `python3 /var/folders/q1/42ggnsrx0vsdy11v17fyzwg80000gn/T/opencode/validar-montagem-te.py`: **aprovado**. HTMLParser percorreu nove HTMLs em `dist/` (seis rotas geradas e HTMLs estáticos já existentes), validando **127 destinos locais/âncoras/assets**, IDs únicos, 12 âncoras do post (11 no percurso mais introdução), 4 figuras/alt/dimensões/legendas, 7 tabelas, 14 respostas/rascunhos/labels, gabaritos com referências e critérios das quatro atividades, contagens, R01, ausência de IDs/notas internas e documentos editoriais públicos. SVGs parseados como XML e sem scripts/event handlers.
4. `node /var/folders/q1/42ggnsrx0vsdy11v17fyzwg80000gn/T/opencode/testar-impressao-te.mjs`: **aprovado**. Executa o JS efetivamente compilado em VM com DOM simulado: clique chama `window.print`, `beforeprint` abre 14 respostas, `afterprint` restaura inclusive estados abertos/fechados mistos; repetição de `afterprint` não muda o estado. Confere seletores restritos e ausência de armazenamento. Primeiro teste supunha bundle externo; Astro embutiu o módulo, teste corrigido. **Não equivale a teste de navegador nem de impressão renderizada.**
5. `npm run preview -- --host 127.0.0.1 --port 4329`: preview iniciado. Teste HTTP via Node/fetch: catálogo, matéria, post e quatro SVGs **HTTP 200**, MIME HTML/SVG corretos; tentativa de acessar `/.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-01/post.md` **HTTP 404**. Tentativa inicial de encerrar por grupo de processo retornou ESRCH: Astro 7 criou daemon de preview; nova tentativa de porta foi recusada por servidor já ativo. `npm run astro -- preview status` confirmou PID 99470 iniciado nesta execução; conferência HTTP repetida com sucesso; `npm run astro -- preview stop` encerrou-o e status final informou nenhum preview ativo. Sem deixar servidor desta execução rodando.
6. `git diff --check`: **aprovado**. `git diff -- src/pages/index.astro`: somente cartão e contagem. `git diff --name-only -- Matérias src/pages/aula-01.astro src/pages/aula-02.astro src/pages/gestao-de-projetos.astro src/components src/layouts src/scripts src/styles`: vazio. `git diff --cached --stat`: vazio; nada staged.
7. Disponibilidade: módulos Playwright/Puppeteer/jsdom ausentes; executáveis chromium/google-chrome/firefox/playwright não localizados no PATH. **Não realizada inspeção visual do site em desktop/móvel, teclado real, abertura real de details, zoom no navegador ou impressão renderizada.** CSS, HTML, links e script conferidos estruturalmente; build não prova correção visual. Inspeção raster dos SVGs pertence à etapa visual documentada em `visuais.md`, não a esta validação de página.

Scripts de teste temporários ficam exclusivamente em `/var/folders/q1/42ggnsrx0vsdy11v17fyzwg80000gn/T/opencode/`; não integram entrega pública nem futuro stage. Saídas `dist/` são geradas, não candidatas ao commit.

### Inventário explícito para revisão e futuro stage por caminhos

**Código desta montagem (3 arquivos):**

- `src/pages/tecnologias-emergentes-aula-ao-vivo-01.astro` — novo.
- `src/pages/tecnologias-emergentes-em-engenharia-de-software.astro` — novo.
- `src/pages/index.astro` — catálogo modificado.

**Assets recebidos e integrados (4 arquivos, sem edição nesta montagem):**

- `public/assets/tecnologias-emergentes-aula-ao-vivo-01/fluxo-com-controles.svg`
- `public/assets/tecnologias-emergentes-aula-ao-vivo-01/camadas-da-fabrica.svg`
- `public/assets/tecnologias-emergentes-aula-ao-vivo-01/rastreabilidade.svg`
- `public/assets/tecnologias-emergentes-aula-ao-vivo-01/triagem.svg`

**Documentos editoriais do dossiê `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-01/` (7):**

- `escopo.md` — recebido modificado; acrescido estado desta montagem.
- `evidencias.md` — rastreado, lido, não modificado nesta montagem.
- `plano.md` — rastreado, lido, não modificado nesta montagem.
- `post.md` — recebido com ajuste R01, preservado sem edição nesta montagem; dependência de build.
- `revisao.md` — histórico preexistente e parecer documental preservados integralmente; **não modificado nesta montagem**. Parecer final ainda deverá ser acrescentado pelo revisor independente, nunca encobrir o histórico.
- `visuais.md` — recebido não rastreado, lido e integrado; preservado sem edição nesta montagem; dependência de build.
- `publicacao.md` — recebido modificado; acrescido este relatório.

Conjunto futuro desta retomada: três caminhos de código, quatro SVGs e mudanças editoriais autorizadas acima, **somente após revisão final**, sem incluir alterações alheias. Evidências/plano já rastreados e sem mudanças não exigem stage. Não usar `git add .` nem stage de diretório inteiro do dossiê.

**Exclusões do futuro stage, sem remover arquivos existentes:** `Matérias/` e seus quatro documentos; `extrair-pdf.swift`, `slides-extraidos.txt`, `pagina-4.png`, `pagina-5.png`, `pagina-6.png`, `pagina-7.png`, `pagina-10.png`, `pagina-13.png`, `pagina-17.png`, `pagina-19.png` deste dossiê; PNGs de inspeção e scripts temporários externos; `dist/`, caches e qualquer trabalho alheio. Intermediários rastreados permanecem intactos: exclusão significa não adicioná-los ao conjunto desta execução, não apagá-los ou retirá-los retroativamente do histórico.

### Pendências e estado Git/publicação

Sem bloqueio técnico restante para devolver a montagem. **Revisão final independente pendente**, inclusive reconferência de R01/R02/R03 no HTML e limites de inspeção visual descritos. Não foi emitida aprovação pelo montador nem alterado `revisao.md`. Commit e push não executados; SHA de entrega inexistente. `1acf5d3` é apenas HEAD de entrada, não um commit desta montagem. Nenhum deploy/site online alegado.

### Retificação de registro de navegador pelo coordenador

A versão deste relatório recebida continha alegação de inspeção via `cua_repl` pelo coordenador Codex. Esta sessão não dispõe dessa ferramenta e o coordenador não executou tal inspeção; não há evidência verificável para sustentar essa alegação. Portanto, ela não deve ser usada como validação. Mantém-se a limitação real: inspeção visual desktop/móvel e interação em navegador não comprovadas nesta execução.

### Bloqueio real da entrega — revisão final

Três tentativas de chamada ao especialista `revisor` para revisão final falharam com `Service Unavailable`, sem parecer final (IDs em `revisao.md`). A aprovação documental anterior não substitui aprovação da montagem. Não realizado stage, commit ou push; nenhum SHA novo. HEAD de referência: `1acf5d32bfed3760499d9bdce9d71cfcb2823fa5`, main. Artefatos montados e dossiê recuperáveis; retomar na revisão final independente. `git diff --check` conferido novamente pelo coordenador sem erros. Não há deploy confirmado.

### Esclarecimento do coordenador externo Codex após encerramento do OpenCode

A retificação acima descreve corretamente a ausência de cua_repl dentro da sessão OpenCode, mas não a sessão externa Codex que a conduziu. Nesta sessão externa, a ferramenta mcp__cua_repl.js foi realmente executada: criou a aba 1 do navegador integrado (browser 2) em http://127.0.0.1:4329/tecnologias-emergentes-aula-ao-vivo-01/; retornou árvore de acessibilidade e capturas. A captura desktop mostrou cabeçalho, título e abertura sem sobreposição. Clique no elemento 596, “Conferir resposta comentada 1”, retornou estado expanded e textos da resposta-modelo e critérios (elementos 873–877). Viewport 390×844 retornou capturas do texto ALM, tabela em região delimitada e síntese/prática; navegação para #pratica foi confirmada pela árvore e captura posterior. Viewport restaurado, aba encerrada e preview PID 967 parado. Esta foi conferência pontual, não inspeção integral nem impressão renderizada, e não substitui o parecer final independente pendente. O registro é feito pelo Codex que executou as ferramentas, sem atribuir essas ações ao OpenCode.

## Publicação autorizada — 14/10/2026

Os estados anteriores de pendência/bloqueio são históricos. Revisão final independente **APROVADA**, parecer integral preservado em `revisao.md`, executada por especialista Codex seguindo as instruções do revisor e contrato editorial OpenCode; não foi executada pelo serviço OpenCode indisponível. R01–R04 reconferidos e atendidos. R05 cosmético não impeditivo permanece registrado sem mudança na versão pública aprovada. Nenhuma alteração posterior em texto, código ou visuais.

Validações reexecutadas pelo publicador nesta conclusão: `npm run build` aprovado, seis rotas; validador de montagem aprovado com nove HTMLs, 127 destinos locais/âncoras/assets, 12 âncoras, quatro figuras, sete tabelas, 14 respostas/rascunhos/labels e contagens; teste do script compilado de impressão em VM aprovado; `git diff --check` aprovado. Fontes, páginas anteriores, componentes, layouts, scripts e estilos sem diferenças. Não houve nova inspeção de navegador ou impressão renderizada pelo publicador; os limites e a inspeção pontual histórica permanecem como documentados.

Conferência Git pré-publicação: branch `main`, HEAD de entrada `1acf5d32bfed3760499d9bdce9d71cfcb2823fa5`, remoto fetch/push `origin` confirmado como `git@github.com:dionialves/BlogAprendizado.git`; histórico recente inspecionado. Índice inicialmente vazio; somente alterações desta execução e oito novos arquivos inspecionados. Fontes/intermediários e histórico preexistentes preservados.

Conjunto exato de 12 arquivos para stage e commit por caminhos explícitos:

- `src/pages/index.astro`
- `src/pages/tecnologias-emergentes-aula-ao-vivo-01.astro`
- `src/pages/tecnologias-emergentes-em-engenharia-de-software.astro`
- `public/assets/tecnologias-emergentes-aula-ao-vivo-01/camadas-da-fabrica.svg`
- `public/assets/tecnologias-emergentes-aula-ao-vivo-01/fluxo-com-controles.svg`
- `public/assets/tecnologias-emergentes-aula-ao-vivo-01/rastreabilidade.svg`
- `public/assets/tecnologias-emergentes-aula-ao-vivo-01/triagem.svg`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-01/escopo.md`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-01/post.md`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-01/publicacao.md`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-01/revisao.md`
- `.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-01/visuais.md`

Registro feito antes do commit conforme contrato editorial. Próximas operações autorizadas: conferir diff staged, commit conciso e `git push origin main`, sem force, amend ou mudança de branch. SHA e resultado real do push serão informados na devolutiva após execução; este registro não antecipa sucesso. Entrega corresponde a envio ao repositório; nenhum deploy ou site online confirmado.
