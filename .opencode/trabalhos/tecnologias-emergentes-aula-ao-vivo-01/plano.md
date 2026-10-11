# Plano editorial — aula ao vivo 01

## 1. Identidade, propósito e contrato

- **Título:** Fábrica de software: do pedido à operação com qualidade e rastreabilidade.
- **Identificação visível:** Tecnologias emergentes em engenharia de software · Aula ao vivo 01.
- **Tipo:** `aula-ao-vivo`, guia de estudo dos assuntos efetivamente tratados na transcrição, não estudo dirigido do livro nem aprofundamento temático separado.
- **Objetivo de aprendizagem:** ao final, o estudante deve conseguir diagnosticar uma operação dependente de pessoas, estruturar uma demanda com entrada e conclusão verificáveis, explicar controles e medidas sem confundi-los, reconstruir a rastreabilidade de uma mudança e justificar seu encaminhamento entre serviços, produto, projeto e programa/portfólio.
- **Ideia central:** a fábrica não uniformiza os sistemas nem substitui a metodologia da equipe; organiza uma operação repetível, mensurável e rastreável, com tratamento proporcional à natureza das demandas (E001, E004, E019, E030–E032).
- **Público/pré-requisitos:** estudantes de engenharia de software; familiaridade inicial com requisito, código, teste e implantação ajuda, mas não exigir experiência com ferramentas. Apresentar esses termos pelo papel no fluxo (E005–E009). Não pressupor estudo da aula 02, Scrum, Kanban ou livro ausente.
- **Regra de profundidade:** explicar relações, decisões e limites; não impor contagem de palavras, seções de tamanho igual ou tutorial de cada sigla mencionada.
- **Regras consultadas:** `AGENTS.md` e `.opencode/editorial.md`. Entradas: `escopo.md` e `evidencias.md` deste dossiê. As evidências E001–E033 e os limites D01–D09 são o universo factual deste plano; exemplos novos são construções didáticas, nunca fatos atribuídos à aula.

## 2. Fontes e vínculos verificados

### Papéis das fontes

- **T — principal:** `Matérias/Tecnologias emergentes em engenharia de software/transcrição/aula01.txt`. Os assuntos de T orientam seleção e progressão; linhas e tempos abaixo são localizadores do mapa, sem conferência por áudio.
- **S — complementar:** `Matérias/Tecnologias emergentes em engenharia de software/slides/aula01.pdf`. Usar para apoiar sínteses, grafias confirmadas e relações explicitadas no mapa. Identificar acréscimos como complemento dos slides, não como fala do professor. Páginas são físicas, contadas desde a capa.
- **Livro:** ausente; não atribuir capítulo, unidade, definição ou explicação a ele. A ausência não bloqueia este tipo de estudo.
- **Aula 02:** fora do recorte; não usar transcrição ou slides, sequer para completar siglas.
- **Referências finais:** separar “Fonte principal — registro da aula ao vivo” de “Complemento — slides da aula 01”. Localizar cada núcleo por arquivo, linhas/tempos de T e páginas físicas de S; IDs E são rastreadores editoriais, não referências públicas suficientes.

### Integração futura, sem alterar páginas nesta etapa

Verificação em `src/pages/**/*.astro`, leitura de `index.astro` e `gestao-de-projetos.astro` e busca dos links existentes:

- Existem `/`, `/gestao-de-projetos/`, `/aula-01/` e `/aula-02/`. Os dois posts atuais pertencem a Gestão de Projetos Tecnológicos; não são origem nem pré-requisito deste post.
- Não foi encontrado post nem página desta nova matéria. Não há vínculo de origem a criar: este pedido cobre a aula inteira. Um futuro aprofundamento deverá gerar outro post e apontar para este, sem recontar a aula integralmente.
- **Slug proposto e sem colisão no inventário atual:** `tecnologias-emergentes-aula-ao-vivo-01`; futura página `src/pages/tecnologias-emergentes-aula-ao-vivo-01.astro`, URL `/tecnologias-emergentes-aula-ao-vivo-01/`.
- **Página da matéria a criar na montagem:** `src/pages/tecnologias-emergentes-em-engenharia-de-software.astro`, URL `/tecnologias-emergentes-em-engenharia-de-software/`. Revalidar disponibilidade dos dois caminhos imediatamente antes da montagem.
- Navegação planejada: Matérias → nova matéria → Aula ao vivo 01. Não incluir botão para aula 02 inexistente no site desta matéria.
- Cartão do post: rótulo “Aula ao vivo 01”, título e resumo voltados a fluxo, qualidade, rastreabilidade e triagem. Na montagem, catálogo passará de 1 matéria/2 posts a 2 matérias/3 posts; nova matéria terá 1 post, Gestão de Projetos permanecerá com 2.
- Reutilizar estrutura visual, não pressupostos de navegação: `SiteHeader` atualmente associa `lesson` a Gestão de Projetos. Ajustar apenas o necessário para destino correto da nova matéria. Scripts atuais usam chaves `gp-aula01-` e `gp-aula02-`; não copiá-las. Reservar `te-aov01-` para respostas desta página e conferir seletores antes de implementar.

## 3. Progressão e seções

Percurso: **reconhecer o problema → organizar o fluxo → explicitar controles → medir e investigar → rastrear → escolher tratamento → praticar**. Não reproduzir a ordem temporal de toda a fala. Abrir com promessa de aprendizagem, ideia central e índice com as âncoras propostas; avisos institucionais e encerramento ficam fora.

| Seção / âncora | Desenvolvimento e função didática | Evidências, localização e papel das fontes |
| --- | --- | --- |
| Introdução / `inicio` | Pergunta orientadora: “Como transformar um pedido em entrega verificável sem perder controle após a implantação?”. Explicitar recorte e caráter de aula ao vivo. Situar a passagem de dependência individual para operação compartilhada. | E001, E003–E004, E021, E031. T principal L39–48, L115–143, L481–491, L625–653; S complemento p. 5–6, 14, 18. |
| 1. O que muda do artesanal à fábrica / `fabrica` | Comparar conhecimento concentrado, documentação irregular e entrada dispersa com responsabilidades, critérios, artefatos e indicadores. Admitir que prática individual pode funcionar em cenário pequeno. Explicar por que escala e integrações tornam a dependência problemática. Panorama histórico apenas qualitativo, breve e atribuído à aula; registrar divergência entre datas sem oferecer cronologia corrigida. Caso da autarquia como ilustração do material, sem ganhos quantificados. | E001–E004, E023; T principal L39–48, L81–191; S p. 4–6 para comparação. D01–D02 impedem linha do tempo e citações ruidosas. |
| 2. Da necessidade ao suporte: o fluxo não termina no código / `fluxo` | Explicar para cada etapa o que recebe, o que verifica e o que deixa como evidência: requisitos; análise/projeto; implementação; testes; implantação; suporte/operação. Mostrar qualidade já durante desenvolvimento e continuidade após produção. Setas representam percurso didático, não obrigação de cascata: atividades podem iterar e ocorrer simultaneamente. | E005–E009, E012; T principal L192–243; S complemento p. 7–8, 10, 12. D06: usar sequência textual, nunca copiar setas inconsistentes da p. 7. |
| 3. Entrada pronta, entrega concluída e controles proporcionais / `controles` | Articular catálogo, DoR/prontidão, DoD, SLA de ciclo, WIP e gates. Comparação central: prontidão autoriza começar; conclusão exige evidências; gate verifica uma condição de avanço; prazo acordado não prova qualidade. Explicar limite de trabalho como resposta ao acúmulo, sem receita de capacidade. Integrar reuso versionado, automação e segurança/conformidade como apoio transversal, não solução mágica. | E010–E012, E015, E017–E018, E020; T principal L244–288, L308–310, L326–338, L428–451; S p. 8–9, 11–12. Não expandir LGPD ou DoR com informação externa (D04). |
| 4. Medir para investigar, não para prometer / `metricas` | Separar duração observada (lead time), cumprimento do acordo (SLA), reabertura (indício), indicador operacional (SLI), meta (SLO) e tolerância/orçamento de erro. Mostrar que aumento de lead time admite hipóteses distintas; reabertura não determina sozinha a causa. Conectar estabilidade à priorização. Omitir percentuais dos casos e o número inconsistente da fala. | E013–E016; T principal L289–325; S complemento p. 9 e 12. D03/D07: não publicar estatísticas empíricas nem janela/fórmula operacional não fornecida. |
| 5. Fábrica e metodologia: camadas que coexistem / `camadas` | Explicar a diferença de alcance: organização da demanda/operação versus organização do trabalho da equipe. Scrum/Kanban apenas como exemplos citados, sem papéis ou cerimônias. Retomar universidade como ilustração do material, sem comprovação empírica. Mostrar que evidências automáticas apoiam entrega e auditoria, mas análise e aceite continuam necessários. | E019–E020, E025; T principal L392–480; S p. 11–13. D07–D08 limitam números, ferramentas e detalhamento metodológico. |
| 6. ALM: reconstruir o caminho de uma mudança / `rastreabilidade` | Apresentar Application Lifecycle Management conforme S e relacionar planejamento, desenvolvimento, testes, entrega e operação. Construir cadeia de evidências que responda por quê, o quê, quem, quais testes e qual impacto. Distinguir rastrear de apenas armazenar arquivos: vínculos permitem reconstrução. Não afirmar que testes aprovados excluem incidentes. | E021–E022, E020; T principal L481–512 e L428–451; S complemento p. 14 e 12. IDs e incidente do exemplo novo devem ser fictícios. |
| 7. Escolher o modelo e manter uma base comum / `modelos` | Comparar serviços (recorrência/previsibilidade), produto (incerteza/evolução, discovery/delivery), projeto (objetivo/restrições/marcos, admitindo incrementos) e programa/portfólio (coordenação de iniciativas interdependentes). Mostrar coexistência. Não diferenciar formalmente programa de portfólio, pois a aula os agrupa. Não classificar pelo nome “API” ou “migração”. | E026–E030; T principal L513–624; S complemento p. 15–17. D08–D09: sem fórmulas MTTR/CFR, release trains ou regra nominal automática. |
| 8. Governança leve: porta única, triagem e encaminhamento / `triagem` | Desenvolver as três perguntas da aula: rotina? descoberta/evolução? prazo inegociável/obrigação? Mostrar que coordenação entre iniciativas pode ser necessária adicionalmente; não inventar quarta pergunta ou árvore exclusiva. Controle leve é proporcional, não ausência de controle. Contextos sobrepostos devem explicitar incerteza e informação adicional necessária. Retomar declaração de matrícula, portal e adequação regulatória como exemplos do material. | E029–E033; T principal L570–688; S complemento p. 16–19. D09: nenhum desempate universal fornecido. |
| 9. Síntese e aplicação / `pratica` | Resumir: natureza da demanda → tratamento → entrada → controles/evidências → entrega/operação → investigação e melhoria. Oferecer atividades com modelo comentado abaixo, sem transformar a síntese em nova teoria. | E001, E005–E022, E026–E033; reutilizar localizadores das seções anteriores. |
| 10. Questionário e respostas comentadas / `questionario` | Revisar distinções e decisões, com respostas acessíveis após tentativa. Aceitar formulações equivalentes e justificativas contextuais; não premiar só memorização de siglas. | Evidências específicas por pergunta no item 6. |
| Referências e limites / `referencias` | Localizar fonte principal e complemento, informar livro/áudio ausentes e limites relevantes; nenhuma referência inventada a capítulo. Não publicar intermediários do dossiê. | Inventário F01–F07; D01–D09. |

## 4. Explicações e exemplos aprofundados autorizados

### Exemplo transversal novo: universidade fictícia Horizonte

Rotular no primeiro uso: **“Exemplo fictício criado para estudo; não é instituição nem resultado observado.”** Retomar somente quando ajudar a decisão da seção, evitando repetir toda a narrativa.

1. **Diagnóstico:** pedidos de declaração chegam por canais diferentes; uma pessoa concentra informações e o aceite não está claro. Pedir ao leitor que identifique dependência, entrada e evidências ausentes (E003–E004, E023).
2. **Ficha de serviço:** “emissão automática de declaração de matrícula”. Definir objetivo, regra de negócio fictícia simples, critérios de aceitação, responsável pelo aceite e dependências conhecidas. Associar os campos à prontidão (E005, E010, E033), sem propor regra legal real.
3. **Percurso:** examinar integração/dados e riscos; implementar com revisão/build/testes; verificar comportamento esperado; registrar implantação; acompanhar sinais de operação. Mostrar que cada etapa acrescenta evidências ao pedido, sem comandos de ferramenta (E006–E009, E020).
4. **Conclusão verificável:** exigir evidências de teste, revisão, documentação pertinente e implantação, explicitamente escolhidas para o exercício. Separar DoD de prontidão e de gate. Se usar prazo, dizer “prazo fictício acordado neste cenário”, não padrão universal (E011–E012).
5. **Incidente hipotético:** após implantação, a emissão falha em uma situação não coberta. Vincular requisito `REQ-17`, commit `C-42`, revisão `PR-08`, teste `T-05`, implantação `DEP-03` e sinal operacional `OP-02` — todos fictícios. Investigar alcance e cobertura, não declarar causa ou culpado sem evidência (E021–E022).
6. **Encaminhamento:** declaração recorrente → serviços; evolução incerta do portal → produto; adequação com data definida → projeto; iniciativas com dependências entre portal, matrícula e financeiro → coordenação programa/portfólio. O contexto, não o nome do sistema, sustenta a escolha (E026–E033).

### Comparações obrigatórias e confusões frequentes

- Padronizar processos ≠ produzir sistemas idênticos (E001).
- Processo previsível/repetível ≠ sucesso garantido ou fábrica totalmente automática (E004, E015, E020).
- Código escrito ≠ serviço concluído e operado (E007–E009, E011).
- DoR ≠ DoD ≠ gate; WIP ≠ prazo de atendimento (E010–E012).
- Lead time observado ≠ SLA combinado; reabertura ≠ prova de uma causa específica (E013–E014).
- SLI ≠ SLO; orçamento de erro não autoriza inventar janela de medição (E016, D03).
- Fábrica ≠ metodologia, e não precisa competir com ela (E019–E020).
- Reuso versionado ≠ simples cópia de código (E017).
- Testes aprovados ≠ garantia de ausência de incidentes (E022).
- Projeto ≠ entrega única ao final; programa/portfólio não é quarta resposta exclusiva da triagem (E028–E032).
- Governança leve ≠ ausência de critérios; demanda com nome igual pode receber tratamento diferente conforme contexto (E031–E032, D09).

## 5. Prática com critérios e modelos comentados

### A1 — Diagnosticar e desenhar uma ficha de serviço

**Enunciado:** no cenário fictício Horizonte, pedidos repetidos chegam por mensagens e não têm aceite documentado. Proponha uma ficha e explique como acompanhar a demanda até operação.

**Passos:** (1) identificar problemas; (2) escolher tipo do catálogo; (3) registrar objetivo, regras, aceite e prioridade; (4) explicitar responsável/dependências e prontidão; (5) descrever evidências de conclusão e gate; (6) indicar acompanhamento operacional.

**Critérios de resposta:** contextualização da recorrência; campos mínimos sustentados; distinção clara entrada/conclusão; evidências além de código; monitoramento pós-produção. Não exigir template único, SLA numérico, limiar de qualidade ou todos os testes citados na aula indiscriminadamente.

**Modelo comentado:** serviço de declaração; entrada com objetivo e aceite, responsável e dependências conhecidas; conclusão com revisão, testes pertinentes, documentação e implantação registradas; gate impede avanço quando uma verificação exigida falha; acompanhamento de erros/disponibilidade depois da entrega. Comentar que os critérios concretos são escolhas didáticas do cenário, não política institucional real. **Suporte:** E003–E012, E020, E026, E033; T L115–143, L192–288, L428–451, L513–526, L654–688; S p. 5–12, 15, 19.

### A2 — Ler sinais sem concluir causalidade

**Enunciado:** dados qualitativos fictícios mostram aumento do lead time, várias demandas em andamento e mais reaberturas. O que investigar? Diferencie esses sinais de SLA, SLI e SLO.

**Critérios:** delimitar lead time da solicitação à produção; apresentar hipóteses, não certeza; relacionar filas/WIP e clareza do aceite/testes; distinguir acordo, observação e meta.

**Modelo comentado:** investigar gargalos, simultaneidade e etapas ineficientes; nas reaberturas, examinar testes e aceite. Só a observação não identifica causa. SLA trata prazo combinado; SLI observa operação e SLO estabelece meta. **Suporte:** E012–E016; T L274–325; S p. 8–9, 12. Sem taxas, janela ou equação operacional criada pelo redator.

### A3 — Reconstruir uma mudança

**Enunciado:** usando os IDs fictícios do exemplo transversal, organize as perguntas necessárias para investigar a falha de declaração após implantação.

**Critérios:** conectar motivo/requisito, mudança de código, autoria/revisão/aprovação, testes, implantação e impacto em produção; reconhecer evidências faltantes; não concluir que “passou no teste, logo não houve falha”.

**Modelo comentado:** partir do motivo em `REQ-17`, identificar alterações de `C-42` e revisão `PR-08`, verificar cobertura e resultados de `T-05`, confirmar o que foi implantado em `DEP-03` e relacionar `OP-02` ao impacto. Um vínculo ausente deve ser registrado, não preenchido por suposição. **Suporte:** E020–E022; T L428–451, L481–512; S p. 12, 14.

### A4 — Triagem contextual, com ambiguidade admitida

**Enunciado:** classifique e justifique (a) declaração recorrente com procedimento conhecido; (b) portal cuja evolução depende de hipóteses sobre necessidades; (c) adequação com prazo obrigatório e objetivo delimitado; (d) iniciativas interdependentes que precisam sincronizar entregas; (e) migração recorrente, mas também sujeita a prazo obrigatório.

**Critérios:** aplicar recorrência, incerteza, prazo e dependências; mencionar controles comuns; aceitar combinação/coordenação e resposta contextual. No item (e), exigir explicitação do conflito e dados necessários, não resposta única por palavra-chave.

**Modelo comentado:** (a) serviços; (b) produto; (c) projeto, podendo ter incrementos; (d) programa/portfólio; (e) os critérios se sobrepõem: perguntar sobre singularidade, restrições e dependências e justificar tratamento contextual. A aula não estabelece desempate universal. **Suporte:** E026–E033 e D09; T L513–688; S p. 15–19.

## 6. Questionário e respostas comentadas planejadas

Preferir perguntas abertas curtas e situações de decisão. Exibir resposta com explicação e referência compreensível; não depender exclusivamente de interação JavaScript para acessar o gabarito.

| Pergunta | Resposta esperada e comentário | Critério e evidências |
| --- | --- | --- |
| 1. Padronizar uma fábrica significa construir sistemas iguais? | Não: padronizam-se processo, qualidade, artefatos, responsabilidades e controles; demandas e sistemas podem diferir. | Mencionar distinção processo/produto. E001, E004; T L39–48, L123–143; S p. 5–6. |
| 2. Por que o código concluído pode não representar entrega concluída? | Ainda podem faltar testes, revisão, documentação, implantação e evidências exigidas pelo DoD; operação continua após produção. | Não reduzir entrega a compilação ou autoria. E007–E009, E011; T L206–230, L262–273; S p. 7–8, 11. |
| 3. Diferencie DoR, DoD e gate usando uma demanda. | Prontidão define condições para começar; DoD, evidências para concluir; gate verifica condição de avanço e pode barrá-lo. | Exemplo coerente, sem confundir gate com toda a conclusão. E010–E012; T L244–288; S p. 8, 11–12. |
| 4. Se o lead time aumentou, qual é a causa? | Não é possível determinar apenas por esse sinal; investigar gargalos, WIP e ineficiências. | Dizer que são hipóteses, mantendo fronteira solicitação→produção. E012–E013; T L274–296; S p. 8–9. |
| 5. Qual a diferença entre SLI e SLO, e como o orçamento de erro participa da decisão? | Indicador versus meta; tolerância a falhas/indisponibilidade pode orientar prioridade de estabilidade. | Sem janela/fórmula inventada nem número ruidoso. E016/D03; T L311–325; S p. 9. |
| 6. Fábrica e metodologia são alternativas excludentes? | Não: fábrica organiza operação/demandas e metodologia organiza trabalho da equipe; coexistem. | Explicar diferença de alcance, não listar cerimônias. E019–E020; T L392–451; S p. 11–12. |
| 7. O que rastrear para investigar uma mudança que passou nos testes e falhou em produção? | Motivo, alteração, responsáveis/revisão/aprovação, testes e impacto/implantação. Testes aprovados não excluem falhas. | Responder com vínculos e evidências, não só nome de ferramenta. E021–E022; T L481–512; S p. 14. |
| 8. Toda migração é projeto e toda API é serviço? | Não. A natureza e o contexto determinam tratamento; recorrência, incerteza, prazo e dependências precisam ser analisados. | Admitir ambiguidade justificada. E026–E032/D09; T L513–653; S p. 15–18. |
| 9. Um projeto precisa entregar tudo apenas ao final? | Não; restrições e marcos podem coexistir com entregas incrementais. | Não converter projeto em sinônimo de cascata. E028; T L547–569; S p. 16. |
| 10. Governança leve dispensa controle? Os percentuais dos casos comprovam seus benefícios? | Não em ambos os casos: controle deve ser proporcional; os casos ilustram mecanismos, sem base empírica verificável para os percentuais. A prefeitura foi explicitamente chamada de fictícia no registro. | Distinguir ilustração e comprovação, sem afirmar que todos os casos foram declarados fictícios pelo professor. E024–E025, E031–E033/D07; T L339–391, L452–480, L625–688; S p. 10, 13, 18–19. |

Não incluir cálculo numérico obrigatório de orçamento de erro: a distinção conceitual atende ao objetivo e evita extrapolar janela ou método. Caso o redator proponha cálculo adicional, deve respeitar D03 e submetê-lo à revisão, identificado como construção didática própria.

## 7. Síntese planejada

Fechar com cinco perguntas de autoavaliação: **Que demanda é esta? Está pronta para começar? O que comprova a conclusão? Que vínculos e sinais permitem acompanhar a mudança? O tratamento e o controle são proporcionais?** Associar, respectivamente, a E026–E032, E005/E010, E011/E020, E013–E016/E021–E022 e E012/E030–E031. A síntese deve mostrar relação entre os conceitos, não só listar siglas. Retomar que indicadores abrem investigação e que nenhum mecanismo apresentado garante eliminar falhas.

## 8. Plano visual

Preferir SVGs próprios, legíveis no móvel e na impressão, sem scripts. Não reproduzir infográficos inteiros. Cada visual terá legenda visível, crédito “Elaboração própria a partir da aula ao vivo 01 e dos slides”, referências específicas e alt informativo. Arquivos propostos em `/assets/tecnologias-emergentes-aula-ao-vivo-01/`; só serão criados na etapa visual. Não há licença livre verificada para os slides: recortes locais não são preferência automática nem devem gerar alegação de permissão de republicação.

| Visual / arquivo proposto | Finalidade e conteúdo | Evidências e origem preferencial | Legenda/alt planejados e restrições |
| --- | --- | --- | --- |
| Capa opcional `capa.svg` | Antecipar pedido → entrega → operação e vínculos de evidência, sem ornamento tecnológico genérico. Pode ser dispensada se repetir o diagrama do fluxo. | SVG próprio; E004, E009, E021; T L123–143, L220–230, L481–491; S p. 5, 7, 14. | Legenda: operação acompanhada além do código. Alt: “Pedido, entrega e operação conectados por evidências”. Sem resultados numéricos. |
| `fluxo-com-controles.svg` | Tornar visíveis seis etapas, controles transversais e possibilidade de revisão/iteração. | SVG próprio; E005–E012, E018, E020; T L192–288, L334–338, L428–451; S texto p. 7 e fluxo p. 10. | Alt descreve requisitos, análise/projeto, implementação, testes, implantação e suporte, com retornos possíveis. Não copiar o fluxo da p. 7 (D06); não sugerir sequência rígida. |
| Quadro textual entrada/conclusão/gate | Comparação acessível ao lado da ficha de serviço; preferir HTML a imagem de tabela. | Elaboração própria; E010–E012, E020; T L244–288, L428–451; S p. 8, 11–12. | Cabeçalhos “para começar”, “para concluir”, “para avançar”. Critérios do exemplo identificados como fictícios. |
| `camadas-da-fabrica.svg` | Mostrar camada operacional envolvendo trabalho da equipe, sem apresentar fábrica como metodologia rival. | SVG próprio; E019–E020; T L392–451; S p. 11. | Alt: “Fábrica organiza entrada, controle e medição; metodologia organiza o trabalho da equipe dentro dessa operação”. Sem hierarquia de pessoas ou cerimônias inventadas. |
| `rastreabilidade.svg` | Exibir vínculos requisito → código → revisão/testes → implantação → sinais de operação, para investigação. | SVG próprio; E020–E022; T L428–451, L481–512; S p. 12, 14. | Legenda identifica IDs fictícios; alt descreve a cadeia. Setas são ligações de evidência, não prova de causalidade nem garantia de qualidade. |
| Matriz textual dos modelos | Comparar natureza da demanda, tratamento e controles comuns, de forma mais legível que quatro painéis pequenos. | HTML próprio; E026–E030; T L513–624; S p. 15–17. | Não incluir definições/fórmulas de métricas só citadas. Programa/portfólio permanece agrupado. |
| `triagem.svg` | Mostrar porta única e três perguntas como guia de encaminhamento, com nota sobre sobreposição e coordenação. | SVG próprio; E029–E032; T L570–653; S p. 16–18. | Alt: “Triagem considera repetição, descoberta e prazo obrigatório; iniciativas interdependentes podem exigir coordenação”. Não desenhar árvore binária com desempate universal ou quarta pergunta atribuída à aula. |

Priorizar fluxo, rastreabilidade e triagem; camadas e capa só se agregarem compreensão. Registrar em `visuais.md` autoria, caminhos, dimensões, referências, legenda e alt efetivos. Não publicar arquivos de extração, páginas rasterizadas do dossiê ou fontes de trabalho.

## 9. Lacunas, evidências faltantes e travas editoriais

Não há evidência essencial faltante para o plano deste guia. Há limites reais de profundidade:

1. **Livro ausente:** impede complementação por capítulos/unidades, não esta aula ao vivo. Para eventual estudo do livro, obter o livro na pasta factual e localizar recorte; não criar vínculo presumido com aula.
2. **Áudio/vídeo ausente:** impede resolver reconhecimento de fala e verificar timestamps. Não apresentar correções como transcrição fiel do áudio.
3. **Cronologia divergente (D01):** falta evidência que resolva datas e ordenação. Panorama qualitativo apenas; não copiar linha do tempo nem inventar consenso histórico.
4. **Ruídos terminológicos/contextuais (D02/D04/D05):** usar apenas normalizações documentadas no mapa, sem citações reconstruídas ou expansão externa de siglas.
5. **Número inconsistente de indisponibilidade (D03):** omitir. Faltam janela e cálculo operacional validado.
6. **Fluxograma inconsistente (D06):** construir visual pela explicação textual; não reproduzir erro gráfico como percurso correto.
7. **Percentuais sem base empírica (D07):** omitir dos exemplos e visuais. Para falar em eficácia medida seriam necessários método, amostra, baseline e dados que não estão disponíveis. A prefeitura é explicitamente fictícia; os demais são ilustrações sem comprovação, não supostas pesquisas reais.
8. **Tecnologias/métricas só citadas (D08):** sem tutoriais blue/green, canary, feature flags, pipelines, ferramentas, CFR/MTTR ou release trains. A aula permite mencionar presença/propósito documentado, não explicar mecanismos ou fórmulas ausentes.
9. **Critérios sobrepostos (D09):** não há desempate universal; pedir contexto e aceitar justificativas compatíveis, sem algoritmo criado por fora.

Ausência desses materiais não autoriza internet, outra matéria, aula 02 ou conhecimento do modelo como preenchimento factual. Se o redator desejar ultrapassar qualquer limite, devolver para pesquisa em vez de expandir silenciosamente.

## 10. Orientações ao redator e passagem de etapa

- Escrever `post.md` com voz de tutor, explicando mecanismos e relações; manter rastreadores E junto às afirmações durante o trabalho. Conferir T e S originais nos localizadores do mapa, principalmente antes de citações literais. O plano não substitui revisão independente das fontes.
- Explicitar “a aula apresenta”, “os slides complementam” e “neste exemplo fictício” nos contextos pertinentes. Não atribuir ao professor a ficha, os IDs, perguntas ou exemplos novos.
- Construir abertura, ideia central, índice, desenvolvimento, síntese, prática, questionário, respostas comentadas e referências. Não criar blocos vazios nem repetir exemplos para alongar.
- Aprofundar pelos contrastes e pelas decisões documentadas, não por ferramentas externas. Segurança/conformidade integra o fluxo, mas não há base para parecer jurídico ou detalhamento da LGPD.
- Nas respostas, avaliar justificativa e evidência, admitindo equivalentes. Dados do cenário e políticas de aceite escolhidos devem ser declarados fictícios.
- Referências públicas precisam de arquivo/título e localizadores compreensíveis, com fonte principal separada do complemento. Não linkar o dossiê nem publicar documentos factuais como assets automaticamente.
- Revisor deverá conferir cobertura de todas as respostas e dos visuais, atribuição das fontes, D01–D09, ausência de números empíricos e coerência dos vínculos.
- Montagem futura deve preservar páginas existentes, usar destinos específicos da matéria e chaves de armazenamento isoladas. Build, links, imagens, âncoras, contagens e comportamento das atividades serão validados quando houver página; inspeção visual requer ferramenta realmente disponível.
- **Estado desta entrega:** planejamento documental concluído; nenhuma página, visual ou script criado. Redação, revisão, montagem e validação permanecem pendentes. Sem stage, commit ou push nesta tarefa; preservar os quatro arquivos factuais já staged e suas alterações de working tree.

## 11. Verificações realizadas nesta etapa

- Contrato, `AGENTS.md`, escopo e mapa completo lidos; seções, atividades, respostas e propostas visuais associados a E001–E033, sem fonte factual adicional.
- E002 mantida apenas no panorama qualitativo; E023–E025/E033 tratadas como ilustrações sem inferência empírica. Todos os nove limites foram incorporados às decisões.
- Páginas existentes inventariadas; catálogo e matéria atual lidos; links e prefixos de armazenamento pesquisados. Slugs propostos não aparecem no inventário atual; não há post de origem pertinente.
- `git status --short` confirmou dois PDFs `A`, duas transcrições `AM` e `.opencode/trabalhos/` não rastreado, compatíveis com o escopo. Não houve operação de índice ou edição das fontes.
- Build não executado: esta etapa altera apenas documentos privados do planejamento, não o site. Nenhuma alegação de publicação ou aprovação de revisão.

**Conclusão:** plano sustentado integralmente pelo mapa de evidências, suficiente para orientar a redação de um guia denso da aula ao vivo 01, com aprofundamento limitado às fontes disponíveis. Sem bloqueio essencial para redação; as lacunas acima vedam apenas extrapolações específicas.
