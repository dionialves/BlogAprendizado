# Revisão independente — aula ao vivo 01

## Resultado da etapa factual/editorial pré-montagem

**APROVADO após correções e reconferência.** R01, R02 e R03 resolvidos na segunda passagem, conforme registro ao final. Os achados abaixo preservam o histórico da primeira passagem, então reprovada. A revisão final de Astro, visuais e navegador ainda não foi realizada e não está implicitamente aprovada.

## Método e extensão

Regras lidas: `.opencode/agents/revisor.md`, `.opencode/editorial.md` e `.opencode/layout.md`. Consultados escopo, matriz E001–E025, plano, texto integral e mapa de referências desta pasta. A revisão confrontou todas as seções, definições, exemplos, tabelas, três atividades e cinco respostas do questionário; não apenas uma amostra.

Consulta independente à transcrição original `Matérias/Tecnologias emergentes em engenharia de software/transcrição/aula01.txt`, lida integralmente em blocos. Consulta ao livro original em PDF por extração independente com pypdf das páginas 10–24, 35, 45–46, 67 e 174, além das extrações auxiliares de pesquisa. Consulta de todos os slides na extração e inspeção dos casos nos renders dos slides 6, 10, 13, 17 e 19. Nenhuma pesquisa externa. As mensagens de objetos de offset inválido emitidas por pypdf não impediram recuperar os trechos consultados; o texto conferido coincide com a extração auxiliar.

## Achados

### R01 — Média, impeditivo de rastreabilidade: localizador de ferramenta incorreto

- **Trecho/arquivo:** `post.md`, parágrafo “O que significa verificar a implementação”, menções a Fortify e Sonar, chamada 7; entrada final `referencia-7`; linha 7 do `mapa-referencias.md`.
- **Evidência:** a referência aponta 26:56–28:39. O trecho original nesse intervalo lista revisão, análise estática, lint, compilação e testes, sem citar Fortify ou Sonar. A menção a ferramentas está em **56:24–57:04**, especificamente Fortify em 56:39 e “Sonac” em 56:47. O próprio E005 inclui o intervalo correto, mas a referência final perdeu esse localizador.
- **Ação:** corrigir a entrada 7 e o mapa para 56:24–57:04. Manter o tratamento como exemplos de análise estática, sem descrever características não documentadas. Como há ruído “Sonac”, registrar a normalização da grafia no dossiê; se não houver confirmação local inequívoca, o nome próprio pode ser omitido, preservando a categoria e o exemplo claramente identificado Fortify.
- **Responsável:** redator; pesquisador para a decisão sobre grafia.

### R02 — Média, impeditivo de cobertura: análise de incidentes sem culpa ausente

- **Trecho/arquivo:** `post.md`, item “Suporte e operação” e seção de rastreabilidade; `evidencias.md` E004 e exclusões.
- **Evidência:** slide 7 e livro p. 15 incluem expressamente **“post-mortem sem culpa”** na operação. Slide 10 repete esse elemento no caso da prefeitura. Livro p. 23 associa-o à base comum de governança. O texto ensina monitorar, corrigir e aprender, mas não ensina a análise estruturada do incidente nem seu caráter sem culpa, e a matriz não registra destino ou exclusão desse tópico. Não é necessário estender o estudo a técnicas externas: o livro p. 67 exemplifica a análise apoiada no contrato que não cobriu um caso, no alerta que não disparou e na correção que estabilizou a taxa de erro.
- **Ação:** incorporar explicação breve integrada a operação/ALM: revisar o incidente com os registros para entender falhas de contrato, verificação ou alerta, registrar correções e aprendizado, sem buscar culpados individuais. Usar chamada numérica com localizador que sustente o desenvolvimento, atualizar matriz/plano/mapa e preservar numeração por primeira ocorrência. Não basta inserir o nome sem explicação.
- **Responsável:** pesquisador/planejador para mapa de cobertura; redator para texto.

### R03 — Baixa, precisão recomendada de fonte para expansão de SRE

- **Trecho:** histórico, “engenharia de confiabilidade de sites, conhecida como SRE”, chamada 2 que localiza apenas p. 12.
- **Evidência:** p. 12 cita DevOps/SRE, mas não expande a sigla. O livro original p. 174 registra “Site Reliability Engineering (SRE)” e relaciona a prática à confiabilidade ao longo do tempo.
- **Ação recomendada:** acrescentar localizador específico para a expansão, ou usar formulação que conecte explicitamente a sigla à expressão inglesa documentada, com a referência pertinente. Não foi detectada falsidade conceitual.
- **Responsável:** redator.

## Conferências sem achados impeditivos adicionais

- E001–E025 encontram destino substantivo no texto, com a ressalva R02 sobre o subassunto não capturado pela matriz. Artesanal/fábrica e a distinção entre processo compartilhado e sistemas idênticos estão ensinados; história segue formulação ampla do livro p. 12 sem atribuir datas de criação a normas.
- Fluxo em seis atividades mantém requisitos, análise/projeto, implementação, testes, implantação e operação, com iteração. Distinções DoR/DoD/aceite, catálogo, SLA por serviço e limite de WIP são coerentes com transcrição 32:15–37:32 e livro pp. 16–18/35.
- Testes unitário, integração, contrato e E2E têm alcances diferentes; não se reproduz a confusão verbal em 56:54. Quality gates, automação, controles de segurança e observação após a entrega mantêm a finalidade documental de reduzir risco e produzir evidências.
- Lead time conserva os marcos solicitação→produção, percentual no SLA e reabertura são lidos em conjunto, sem causa automática ou ranking de pessoas. A distinção medida/meta/compromisso está sustentada. **100% − 99,9% = 0,1%** está correto, explicitamente fictício e condicionado à mesma base/período, sem conversão indevida em minutos.
- Reuso mantém versionamento/contratos/compatibilidade sem prometer ausência de defeitos. ALM liga requisito a tarefa, mudança, PR, testes, release e efeito; não é reduzido a uma ferramenta.
- Modelos de serviços, produto, projeto e coordenação de iniciativas seguem pp. 20–23 e a transcrição 1:06:15–1:29:08. Projeto com prazo fixo admite incrementos. Programa e portfólio não são declarados sinônimos. Triagem admite reclassificação ao surgir incerteza, e controles são proporcionais ao risco.
- Situações de autarquia, prefeitura e universidade são explicitamente didáticas/fictícias. Percentuais dos slides não viraram resultados empíricos. Blue-green/canary aparecem como nomes de alternativas, sem funcionamento técnico inventado.
- Exercícios: respostas de DoR/DoD retomam os critérios documentados; hipóteses sobre filas, simultaneidade, testes e aceite são apresentadas como hipóteses investigáveis; classificação dos três pedidos usa natureza do trabalho; questionário explica diferenças sem pressupor ter assistido à aula.
- A narrativa ensina diretamente; não há “o professor disse”, transcrição comentada, timestamps ou escolha entre versões no desenvolvimento. Divergências ficam no dossiê.
- Conferência estrutural das referências em `post.md`: **79 chamadas, 24 entradas, 103 IDs únicos**; nenhuma âncora HTML sem destino; números exibidos coincidem com os destinos; primeira aparição contínua de 1 a 24; retornos presentes para todas as ocorrências. Esse resultado é estrutural do rascunho, não comprova funcionamento no navegador ou impressão.

## Pendências da revisão final

Após correções e montagem, conferir fidelidade do Astro ao texto aprovado, visuais/legendas/alt/créditos, capítulos e âncoras, referências e retornos, respostas no impresso, cabeçalho e destino da matéria, índice persistente, progresso, celular, teclado, foco, impressão e registro do build. Nenhuma dessas verificações visuais/funcionais foi alegada como concluída nesta etapa.

## Segunda passagem — correções conferidas

**Resultado factual/editorial pré-montagem: APROVADO.**

- **R01 resolvido:** Fortify permanece como exemplo de análise estática, agora com entrada 9 apontando 56:24–57:04, menção 56:39. O nome incerto “Sonac” não foi normalizado nem publicado como Sonar. A decisão está registrada em evidencias.md e o mapa acompanha a referência.
- **R02 resolvido:** novo parágrafo após as seis atividades explica post-mortem como análise do incidente com registros, contrato, alerta e correção, para aprender sem buscar culpados. Conferido com livro original pp. 15, 23 e 67 e slides 7/10. A entrada 8 localiza a explicação; E026 registra o tema na matriz e E004 foi atualizado. A explicação complementa o recorte sem desenvolver todo o tema de integrações.
- **R03 resolvido:** histórico explicita Site Reliability Engineering (SRE) e acrescenta entrada específica 3 para livro p. 174, original consultado na primeira passagem.
- Refeito o controle estrutural após renumeração: **81 chamadas, 26 entradas e 107 IDs únicos**, primeira ocorrência contínua 1–26, sem números divergentes, retornos sem destino ou colisões HTML. As referências novas não interrompem a redação com nomes ou localizadores.

Demais conclusões factuais/editoriais da primeira passagem permanecem válidas. O texto pode seguir à montagem e à revisão final funcional/visual; esta aprovação não substitui essa etapa.

## Revisão final — montagem e HTML gerado

**APROVADO na inspeção final estática de conteúdo e HTML.** A aprovação visual/funcional aguarda os registros do navegador abaixo; a inspeção visual de impressão não foi concluída.

Inspecionados independentemente `src/pages/tecnologias-emergentes-aula-ao-vivo-01.astro`, `src/lib/render-study.ts`, `src/layouts/StudyPostLayout.astro`, `src/scripts/study-post.js`, componentes/estilos compartilhados, SVGs utilizados, `visuais.md`, `publicacao.md` e `dist/tecnologias-emergentes-aula-ao-vivo-01/index.html`.

- Conferência integral do texto aprovado contra a saída HTML: **128 blocos e células**, sem nenhum trecho ausente, mediante normalização de marcação/espaços/pontuação. A abertura e a ideia central estão preservadas; não há resumo substituindo o texto. Tabelas, listas, detalhes e referências são montados pelo renderer local, sem servir documentos editoriais como arquivos.
- Verificador do HTML final executado novamente: **26 referências e 84 chamadas**; IDs únicos, número exibido correto, sequência de primeira ocorrência contínua, nenhum destino ausente, todas as chamadas e referências com retornos. As ocorrências novas das figuras estão incluídas nas entradas finais.
- Conferidos os textos integrais dos dois SVGs utilizados, legendas e alt: fatos e relações permanecem sustentados no livro/slides/transcrição. Os diagramas são identificados como elaboração própria; não há imagens externas sem licença ou procedência escrita interrompendo a explicação. Links para SVGs locais permitem abrir o tamanho original.
- Estrutura semântica contém um título principal, seções numeradas, navegações rotuladas, índice móvel expansível e retorno à matéria correta. Cabeçalho reutiliza a marca e o botão de impressão. A largura, tipografia e paleta usam o padrão compartilhado aprovado.
- Quatro rascunhos possuem rótulos e IDs distintos por post, com aviso explícito de não persistência; não há chave de armazenamento misturada com outra aula. Respostas usam details/summary nativos. Retornos por hash abrem ancestrais recolhidos antes de levar ao destino.
- Script de progresso usa altura rolável com limites e caso sem rolagem; atualiza em início, scroll passivo, resize, carregamento e mudança de tamanho do corpo. Impressão abre respostas e restaura seu estado anterior; estilos ocultam controles e preservam números e referências. Essa inspeção de código não comprova paginação/legibilidade real no PDF.
- `publicacao.md` registra build aprovado e validações de âncoras; build não foi usado como prova visual. Nenhum achado impeditivo adicional na revisão estática.

### Evidência visual e limites

A inspeção visual é executada pelo coordenador principal e comunicada ao revisor, distinguindo-a da revisão independente do HTML. A tentativa de prévia de impressão no navegador integrado excedeu o tempo e não produziu imagem utilizável: **impressão/PDF não validada visualmente**. Comportamento e estilos de impressão foram inspecionados no código.

Evidência recebida do navegador para o post 01: abertura e nove seções, 26 referências/84 chamadas, ausência de rolagem horizontal; citação 1 → referência 1 → retorno funcionando; retorno à citação recolhida da referência 11/ocorrência 5 abre a resposta e mostra o destino. A revisão identificou negrito interno do bloco de ideia central em maiúsculas; o publicador registrou ajuste pontual e repetição bem-sucedida do build/verificador em publicacao.md. Conferência de celular e segundo post pendente de evidência.

## Fechamento da revisão final — evidências de navegador recebidas

**APROVADO na revisão final, com limitação explícita: impressão/PDF não inspecionada visualmente.** A aprovação reúne revisão independente de conteúdo, fontes, código e HTML com os registros de interação/visualização fornecidos pelo coordenador principal. A prévia de impressão do navegador integrado excedeu o tempo; não há evidência visual utilizável do impresso. Os estilos e eventos beforeprint/afterprint foram revisados, sem alegar que isso comprove paginação ou aparência do PDF.

- Desktop: abertura e nove seções; 26 referências e 84 chamadas; ausência de rolagem horizontal; citação 1, referência final e retorno funcionando; retorno para a ocorrência 5 da referência 11 abre a resposta recolhida e mostra o destino.
- Celular: ausência de rolagem horizontal global e índice compacto visível; correção da ideia central confirmada com `textTransform: none` no negrito interno, preservando a hierarquia do rótulo.
- Teclado: Enter na citação 1 navega à referência 1, com alvo a aproximadamente 130px do topo, sem encobrimento.
- Override `.takeaway p strong` reconferido no layout; publicador registrou build e verificador repetidos após a correção.

Não restam achados impeditivos conhecidos. A limitação de impressão deve acompanhar a entrega ao usuário; não se declara publicação externa nem validação visual do PDF. Nenhuma alteração de texto, código ou Git foi executada pelo revisor.
