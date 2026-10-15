# Plano — Aula ao vivo 02

## Direção e objetivo

**Título:** Modelos de fábrica de software: organizar demandas, equipes e entregas.

Tipo visível Aula ao vivo 02; URL `/tecnologias-emergentes-aula-ao-vivo-02/` preservada. Refatoração integral do conteúdo existente, sem criar página ou alterar o layout aprovado. O estudo retoma a ideia de fábrica desenvolvida na aula01 apenas pelo necessário à autonomia do leitor: operação organizada por acordos, qualidade e fluxo. Oferecer link real para aula01 como aprofundamento prévio opcional, sem fazer da leitura um pré-requisito.

Ao terminar, o estudante deve distinguir processos, produtos, projetos e programas; escolher e combinar arranjos a partir das demandas; relacionar cada um a responsabilidades, ciclos e indicadores; propor uma mudança observável na organização de uma operação. Definir termos e siglas antes do uso. Ideia central da abertura: a natureza do trabalho orienta a organização, e uma fábrica pode combinar arranjos sobre uma base técnica compartilhada. Nenhum modelo vence em todos os contextos.

## Progressão: 10 seções principais

### 01 · A demanda orienta a organização (`#organizacao`)

E201–E202. Explicar o que o modelo distribui: decisões, prioridades, fluxo, indicadores e responsabilidades. Partir de problema concreto fictício: pedidos repetitivos atrasam, plataforma duplica componentes e uma obrigação com prazo disputa equipe; comprar ferramenta ou mudar reunião não resolve por si só essa mistura. Definir processo como modo organizado de executar; projeto como esforço temporário com objetivo/entrega e término; programa como coordenação de iniciativas relacionadas para resultado compartilhado. Introduzir produto como evolução contínua a ser desenvolvida na seção03. Processo pode existir dentro de projeto; produto pode receber projeto regulatório. Portfólio é conjunto que disputa capacidade e não sinônimo obrigatório de programa. Distinguir camada organizacional e método cotidiano; antecipar coexistência sem aprofundar a aula01 novamente.

### 02 · Processos: repetição com critérios e evidências (`#processos`)

E203–E207. Desenvolver entradas→atividades→validações→saídas, explicando previsibilidade, auditoria, rastreabilidade e necessidade de demonstrar como se entregou. Catálogo exemplificativo com três serviços documentados: nova interface de programação de aplicações (API), evolução de tela e correção crítica P1; definir P1 funcionalmente como prioridade crítica no catálogo do exemplo, sem norma externa. Para cada serviço, associar entrada, saída e prova: contrato inicial/teste/documentação; protótipo/aceite/testes/notas de versão; evidência de defeito/hotfix (correção emergencial) validado/rollback (retorno de versão) testado. Não inventar prazos ou tratar esse catálogo como universal.

Ensinar fluxo por raias: fila priorizada (backlog) de serviços→planejamento→implementação→revisão/gate→testes→homologação→publicação. Explicar cada passagem e responsabilidades de gestão, engenharia, qualidade e operação; versão, lições e métricas retroalimentam o fluxo. Definir gates como pontos de verificação objetiva, sem atribuir tudo a uma equipe de inspeção final.

Indicadores: lead time (entrada→entrega), throughput (conclusões por intervalo), percentual no acordo de nível de serviço (SLA), reabertura. Explicar diferença entre rapidez de codificação e tempo total com exemplo fictício sem cifras: fila na homologação pode dominar o prazo. Apresentar P50 como mediana e P90 como observação da cauda da distribuição, sem valores nem garantia de prazo; não detalhar estatística além do suporte. Limitar trabalho em andamento (WIP) liga-se à investigação de filas, sem promessa automática. Contrapor controle útil e teatro de processo: etapa/documento/aprovação merece revisão se não reduz risco/tempo ou melhora qualidade; revisão trimestral pode ser rotina exemplificativa, nunca obrigação universal.

### 03 · Produtos: evolução contínua e reuso governado (`#produtos`)

E208–E210. Explicar orientação à evolução, plataforma e componentes compartilhados; arquitetura de referência orienta a base, enquanto variabilidades são diferenças previstas entre produtos. Exemplos documentados: autenticação, catálogo, pagamento, notificações. Reuso não é copiar e colar; requer contratos testáveis de API/eventos, documentação, histórico de mudanças (changelog), versões e compatibilidade. Definir evento somente na função de acordo de integração citado, sem inventar arquitetura ou implementação.

Desenvolver kit de produto: visão, diretrizes arquiteturais, catálogo de componentes e modelos de serviço (templates). Exemplo fictício de autenticação v1→v2: expor necessidade de plano de adoção, janela de migração e descontinuação, sem ensinar semver ou impor datas. Autonomia com padrões exige responsabilidade pelo ativo interno.

Indicadores: adoção de componentes, defeitos por versão e lead time de evolução mostram reuso/capacidade de mudança; número de tarefas sozinho não expressa esses objetivos. Preservar cycle time por épica como indicador citado: definir épica como agrupamento de evolução no roteiro e explicar que seu tempo de execução depende do recorte explicitado pela equipe, sem inventar fronteira universal nem equiparar ao lead time. Termo pode aparecer em nota curta com referência específica, sem tornar-se eixo do texto.

### 04 · Projetos: objetivo temporário com entregas incrementais (`#projetos`)

E211–E212. Definir objetivo, escopo, prazo, orçamento e marcos. Explicar estrutura analítica do projeto (EAP) enxuta como desdobramento de entregas com aceite/checagem; baseline como referência para avaliar desvios, não imutabilidade cega. Exemplo fictício de migração/adequação com data: dividir entregas verificáveis, prever validações e janelas de liberação; usar esteira comum de geração do artefato (build), testes, homologação e implantação (deploy). Explicar flags como controle de disponibilização e rollback testado como possibilidade de retorno; antes de entrada em operação (go-live), conferir contratos, métricas e retorno. Prazo fixo não obriga implantação única big bang. Indicadores: marcos, desvios prazo/custo, defeitos por etapa; não inventar fórmulas de valor agregado.

### 05 · Programas: dependências e resultado compartilhado (`#programas`)

E213–E214. Desenvolver objetivo estratégico que exige frentes relacionadas, como identidade, integração, aplicações, interoperabilidade e infraestrutura. Explicar por que otimizar uma frente isoladamente pode não liberar o resultado: outra dependência ainda bloqueia. Exemplo fictício com mapa simples identidade→integração→aplicações, usando as categorias documentadas e identificando a disposição como ilustração própria. Priorizar o que desbloqueia outras entregas, mapear riscos e contingências e sincronizar janelas. Pontos periódicos devem produzir decisões sobre bloqueios e prioridades, não apenas colecionar status; frequência proporcional às dependências, sem prazo obrigatório. Indicadores: dependências resolvidas, grandes entregas, throughput do conjunto e alinhamento ao objetivo. Evitar tratar programa e portfólio como conceitos idênticos.

### 06 · Escolher, combinar e ajustar os modelos (`#escolha`)

E215–E218. Tabela comparativa com natureza da demanda, decisão central, evidência de avanço e risco de excesso: processos/repetição auditável; produtos/plataforma e evolução; projetos/data/escopo/custo; programas/frentes relacionadas. Explicar desequilíbrios documentados: burocracia, volatilidade, fragmentação e complexidade. Combinar no caso educacional: suporte/correções, plataforma acadêmica, portal com prazo regulatório, articulação secretaria/financeiro/biblioteca/tecnologia da informação (TI). Cada classificação exige seu porquê; não classificar a instituição inteira por um rótulo.

Sinais para rever o arranjo: lead time instável/filas→investigar processos, WIP e SLA; duplicação→examinar base de produto/plataforma; marcos em risco→disciplina de projeto; equipes bloqueadas→coordenação de programa. Separar sinal, hipótese, verificação e possível ajuste: indicador isolado não prova causa. Reclassificação é aprendizado sobre o trabalho, não fracasso de um rótulo. O caso E215 integra-se a E218, sem apagar seus quatro arranjos.

### 07 · Equipes, ciclos e base técnica comum (`#equipes`)

E219–E222. Responsabilidades por modelo em quadro compacto: catálogo/gates/SLA; gestão de produto/arquitetura/versões/equipe multidisciplinar; escopo/prazo/riscos/marcos; dependências/prioridades/objetivo global. Traduzir product ownership como responsabilidade pela gestão de produto, sem curso externo de papéis Scrum.

Explicar handoff (passagem de trabalho/responsabilidade), espera, perda de contexto e retrabalho. Carga cognitiva aqui é quantidade/complexidade de ferramentas, sistemas e processos que a equipe precisa dominar; não fazer alegação médica. Equipe multidisciplinar, padrões, plataformas e automação podem diminuir atrito, com responsabilidades explícitas; evidências automáticas e painéis simples apoiam governança.

Relacionar ciclos: processos quase contínuos/repetitivos; produtos com roteiro de evolução (roadmap), épicas e incrementos; projetos com marcos/incrementos; programas com sincronização. Cascata, ágil e híbrido dependem do contexto; arranjo não impõe único método.

Ensinar pipeline de integração contínua/entrega contínua (CI/CD), definindo cada etapa: lint verifica padrões/problemas básicos; build gera artefato; teste unitário verifica parte isolada; teste de contrato verifica acordos de integração; publicação disponibiliza artefato; deploy instala no destino; pós-deploy confere funcionamento. Publicação e implantação têm funções distintas. Qualidade/segurança atravessam o percurso; automação não dispensa validação. Não adicionar testes/técnicas externos ao mapa.

### 08 · Três aplicações para conectar as decisões (`#aplicacoes`)

E223–E225. Cenários explicitamente didáticos, com problema→escolha→mecanismo→evidência a acompanhar→limite, não relatos reais nem slogans de resultado.

1. Secretaria de Saúde: pedidos dispersos, retrabalho e auditoria→entrada única, catálogo, fluxo, gates, SLA e evidências. Percentuais62→89 omitidos na explicação por não serem necessários; se utilizados em prática, rotular fictícios e distinguir27 pontos percentuais de27%.
2. Banco/fintech: duplicação de autenticação/pagamentos/catálogo→ativos internos testados/versionados/documentados e arquitetura comum; exigência regulatória com data→projeto sobre essa base de produto. Changelog torna mudanças e compatibilidade examináveis, sem ensinar regras major/minor/patch.
3. Software como serviço (SaaS): crescimento de suporte/correções/pequenas melhorias→processos de atendimento; produto mantém roadmap, épicas e releases (versões entregues). Autenticação comum governada e mesma esteira; flags controlam disponibilização. Melhorias são hipóteses/objetivos a acompanhar, sem causalidade garantida.

Casos ficam sucintos o bastante para não repetir definições, mas explicam a decisão específica e a coexistência; nenhuma cifra empírica inventada.

### 09 · Síntese e prática comentada (`#pratica`)

E226 e retomada dos demais. Síntese em prosa: organizar a complexidade exige decidir conforme demanda, conectar responsabilidades, preservar base técnica, olhar evidências e ajustar. Engenharia abrange requisitos, arquitetura, testes e operação além do código, sem previsões sobre substituição profissional.

Atividade aplicada inspirada no plano30dias do livro47: usar20 demandas fictícias ou anonimizadas de contexto permitido; classificar natureza, justificar arranjo, escolher indicador e seu recorte, ajustar triagem e comparar dados após período. Não afirmar eficácia comprovada, não solicitar dado sensível ou inventar simulador. Alternativa individual com quatro demandas educacionais do texto para quem não dispõe de operação real. Resposta comentada apresenta critérios: repetição, evolução, término/data, dependências; coerência entre problema/indicador; mudanças são hipóteses verificáveis. Não há classificação automática por nome do departamento.

Exercício1: API nova em catálogo, autenticação compartilhada evolutiva, adequação com prazo e integração de várias frentes. Pedir arranjo predominante e coexistência possível. Respostas derivam E203–E216, admitindo combinações justificadas.

Exercício2: código fica pronto cedo, mas entrega atrasa na homologação. Pedir diferença entre tempo total e throughput, duas evidências para investigar e mudança testável. Resposta: medir espera/fluxo/WIP e critérios; não culpar programador nem assumir causa por métrica isolada (E206/E217).

Exercício3: componente v2 quebra consumidores e projeto chega à data sem retorno testado. Pedir quais acordos faltam e como respeitar autonomia com padrões. Resposta: contratos, versão/changelog, documentação, migração/depreciação; validação e rollback, conforme E208–E212.

Questionário final breve com respostas comentadas: processo pode estar em projeto? programa é lista de projetos? produto implica ausência de governança? modelo impõe método único? publicação equivale a deploy? A resposta explica distinção e aponta referência. Respostas expansíveis na tela, completas na impressão; cada bloco recebe suporte numérico. Nenhuma pergunta depende de notícia/biografia excluída ou de assistir à aula.

### 10 · Referências (`#referencias`)

Entradas na ordem da primeira chamada efetiva; números só serão congelados após redação. Livro explicitamente base conceitual, slides/transcrição materiais da aula. Localizadores diferentes exigem entrada distinta; mesma fonte/localizador reutiliza número. Toda chamada é sobrescrita clicável junto ao trecho; referências finais completas com retornos únicos. Bibliografia/localizadores nunca interrompem o desenvolvimento. Registrar mapa número→EIDs→fonte/localizador no dossiê.

Locais a usar conforme trecho: livro35–36/E201–202;37–38/E203–207;38–39/E208–210;40–41/E211–212;41–42/E213–214;43–44/E215–218;44–45/E219–220;45–46/E221–225;47–48/E226. Citar S2 slides5–9 para exemplos/quadros específicos; slides10–14 para escolha/sinais/caso educacional;15–16 para equipe/pipeline;17–19 para aplicações. T2 trechos de cada linha apoiam exemplos/explicações adicionais e interação prática (especialmente E202/E220/E226), sem agrupar toda aula em referência vaga. Marcadores temporais ficam exclusivamente nas entradas finais e no dossiê.

## Visuais e layout

Preservar cabeçalho, índice à esquerda, índice móvel, paleta, tipografia e barra de leitura aprovados. Dez títulos principais geram dez itens de índice, com subníveis livres no conteúdo. Tabelas responsivas em table-wrap; casos em case; notas apenas quando explicam limite real. Não transformar cada parágrafo em cartão.

Visual1: matriz HTML comparativa dos quatro modelos em06 (E201–E216), com propósito de decisão. Fonte conceitual por chamada numérica na legenda/trecho.

Visual2: mapa próprio de dependências em05 (E213): três frentes e setas de dependência identificadas como exemplo fictício, explicadas também em prosa/alt. Priorizar clareza no celular; não reproduzir imagem microscópica dos slides.

Visual3: pipeline HTML/SVG próprio em07 (E222), com etapas e qualidade/segurança transversais; diferenciar publicação e deploy. Referência na legenda e descrição acessível sem conceitos adicionais.

Podem ser dois visuais próprios mais matriz, evitando duplicação de fluxograma textual. Registrar autoria própria, origem conceitual, caminhos/legendas/alt em visuais.md. Caso haja SVG, salvar só resultado em /assets/tecnologias-emergentes-aula-ao-vivo-02/, sem scripts embutidos.

## Cobertura integral, limites e instrução ao redator

IDs reais do mapa são **E201–E226** (não E001–E026). Destinos: E201–202→01; E203–207→02; E208–210→03; E211–212→04; E213–214→05; E215–218→06; E219–222→07; E223–225→08; E226→09. Todas reaparecem na prática quando pertinente. Nenhum assunto substantivo da matriz é excluído. Indicadores com definição limitada recebem formulação prudente; detalhes de semver, implementação de flags/contratos e ferramentas não são inventados. Percentuais fictícios dispensáveis podem ser omitidos mantendo os casos e seus raciocínios. Notícias/biografias/rumores, saudações, avisos e digressões pessoais seguem exclusões justificadas em evidencias.md; não entram no texto nem no questionário.

Redigir estudo autossuficiente integral em post.md, sem resumir cada seção em lista de nomes. Explicar conceito, relação causal sustentada, aplicação e limite. Não narrar fontes ou falas; resolver divergências exatamente como evidencias.md, sem apresentar escolha ao estudante. Definir siglas/termos antes do uso, traduzir jargão e evitar repetir todas as definições da aula01. Identificar ficção junto aos exemplos e não atribuir sua elaboração ao professor. Prática e respostas devem ter evidência, assim como tabelas, figuras/alt e síntese. Sem bloqueio factual central; limitações pontuais já tratadas pela pesquisa.
