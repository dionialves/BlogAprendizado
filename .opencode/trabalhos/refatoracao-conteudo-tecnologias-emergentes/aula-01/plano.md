# Plano — Aula ao vivo 01

## Direção editorial

Título proposto: **Fábrica de software: da demanda à entrega confiável**. Tipo visível: Aula ao vivo 01. URL preservada: `/tecnologias-emergentes-aula-ao-vivo-01/`. Reescrever o conteúdo existente, preservando o layout aprovado, sem criar aprofundamento ou alterar Gestão de Projetos.

Objetivo: ao terminar, o estudante deve conseguir explicar o paradigma da fábrica, percorrer seu fluxo, distinguir acordos e medidas, reconhecer rastreabilidade e escolher uma organização operacional coerente com a demanda. Pré-requisitos: noção cotidiana de software como solução para uma necessidade; definir termos técnicos ao longo do estudo. Não pressupor leitura anterior nem presença na aula.

Ideia central da abertura: a fábrica torna a entrega repetível por meio de acordos, responsabilidades, verificações e aprendizado; sistemas diferentes podem compartilhar uma operação organizada. A introdução deve anunciar o percurso e propor a pergunta concreta: como transformar um pedido de melhoria de um portal em uma entrega verificável e acompanhada em produção?

## Progressão e índice

### 01 · Do trabalho artesanal à fábrica (`#paradigma`)

E001–E003 e contexto E002. Definir fábrica como organização da operação, explicar dependência de conhecimento tácito e diferença entre padronizar o processo e produzir sistemas idênticos. Desenvolver relação causal: pedido disperso → informação insuficiente → dependência de especialista → baixa previsibilidade; catálogo e critérios tornam o fluxo examinável. Panorama histórico curto mas explicado: artesanal; estruturado; normas/modelos; ágil/automação; DevOps e engenharia de confiabilidade de sites (SRE), sem transformar períodos em fronteiras universais. Situação didática de autarquia: antes/depois com os elementos documentados, sem cifras ou pretensão de caso empírico. Fechar com limite: padrão sem critério de valor pode virar burocracia.

### 02 · Da demanda à operação (`#fluxo`)

E004–E006, E011, E015. Explicar seis atividades com entrada, trabalho e resultado: requisitos, análise, implementação, testes, implantação, suporte/operação. Exemplo fictício de portal de serviços públicos acompanha as seis atividades: necessidade e aceite → impacto/integrações/riscos → mudança pequena revisável → verificação → liberação controlada → observação e retorno. Descrever atividades iterativas, com retornos, sem impor cascata. Explicar solicitação de revisão de mudança (PR), revisão por pares, análise estática/lint e build em linguagem simples. Distinguir teste unitário, integração, contrato e ponta a ponta (E2E); exemplificar o que cada um procura, apenas dentro da distinção sustentada. Definir gates como critérios objetivos para avançar. Definir integração contínua e entrega contínua (CI/CD) e conectar automação às verificações, segurança, proteção de dados, conformidade e interoperabilidade. Se mencionar LGPD, expandir corretamente e limitar à presença da proteção de dados no processo. Implantação: ondas, flags/toggles e rollback com funções documentadas; registrar blue-green/canary como nomes de alternativas de liberação controlada mencionadas, sem tutorial ou definição não sustentada. Ferramentas Fortify/Sonar, se usadas, são apenas exemplos citados da categoria análise estática, sem características inventadas.

### 03 · Acordos que tornam a entrega verificável (`#acordos`)

E007–E009. Definir catálogo por tipos concretos de demanda; expandir interface de programação de aplicações (API) antes da sigla. Comparar prontidão para iniciar (Definition of Ready, DoR) e conclusão demonstrável (Definition of Done, DoD) numa tabela com momento, pergunta e evidências; não confundir critérios de aceite de uma demanda com uma declaração genérica de conclusão. Acrescentar acordo de nível de serviço (SLA) específico ao serviço, inspeções intermediárias e quantidade de trabalho em andamento (WIP). Exemplo fictício: pedido de integração não entra só porque existe um título; precisa de responsável, dependências e aceite. Código escrito não encerra sozinho a entrega. Limite de WIP procura favorecer conclusão e reduzir filas, não servir de promessa automática de velocidade.

### 04 · Medir fluxo e confiabilidade (`#metricas`)

E010–E012. Definir lead time por seus marcos exatos solicitação→produção, percentual no SLA e taxa de reabertura. Ensinar leitura conjunta: demora pede investigação do fluxo; reabertura sugere examinar aceite e testes; métrica não identifica sozinha uma causa. Comparar sistema antes/depois e serviços com contexto, sem ranking de pessoas. Distinguir indicador de nível de serviço (SLI), objetivo de nível de serviço (SLO) e SLA. Exemplo aritmético fictício de meta 99,9% e orçamento de erro 0,1% para a mesma base e período, sem converter em minutos. Explicar como tolerância orienta estabilização versus inovação. P50/P90 não serão incluídos: desnecessários ao objetivo e pouco trabalhados na aula. Caso prefeitura E014 incorporado como aplicação integrada do fluxo e das medidas, sem repetir números fictícios do slide.

### 05 · Reuso e rastreabilidade do ciclo de vida (`#ciclo`)

E013 e E018. Reuso: diferenciar componente versionado com contratos de copiar e colar; explicar ganho e necessidade de compatibilidade. Expandir Application Lifecycle Management (ALM), em português gestão do ciclo de vida da aplicação, e ensinar integração de práticas/processos/ferramentas sem reduzi-lo a produto. Desenvolver rastro requisito→tarefa→branch/commit/PR→testes→release→indicadores de produção, traduzindo cada termo ao introduzi-lo. Problema didático de erros na matrícula: rastrear motivo, alteração, participantes, verificação e efeito permite investigar e corrigir; não prometer causa automática. Visual de rastreabilidade serve de mapa para essa investigação.

### 06 · Fábrica, método e modelos de organização (`#modelos`)

E016–E023. Primeiro separar escala operacional da fábrica e organização cotidiana de equipe: papéis/cadências/artefatos podem ser diferentes dentro da mesma operação; Scrum e Kanban são exemplos de abordagens, não regras universais. Universidade E017 ilustra coexistência, sem percentuais de resultado. Depois desenvolver quatro orientações com situação adequada, organização, entrega e indicadores: serviços para repetição/catálogo; produto para incerteza/evolução contínua/time estável; projeto para objetivo/escopo/prazo/orçamento/marcos; programa/portfólio para coordenação/priorização/dependências/capacidade. Não igualar programa a portfólio: dizer que o quadro agrupa necessidades de coordenação de iniciativas, sem inventar definição formal ausente. Definir backlog, discovery (compreender problema e hipóteses) e delivery (desenvolver/entregar). Indicadores de adoção, conversão, retenção e engajamento ficam como medidas de uso/valor sem fórmulas; falhas após mudanças e recuperação podem ser descritas em português sem siglas não necessárias. Projeto com data fixa pode entregar incrementalmente. Caso universitário E023 articula correções/APIs, AVA/aplicativo, migração e integração entre sistemas; definir ambiente virtual de aprendizagem (AVA).

### 07 · Governança leve: escolher a pista e acompanhar (`#governanca`)

E024–E025. Explicar porta única, triagem por rotina/repetição, incerteza/evolução e data/obrigação. Comparar a natureza do trabalho antes de escolher organização; programa coordena dependências entre pistas. Controle proporcional ao risco; reclassificar se a incerteza aparecer. Situação didática universitária: declaração de matrícula→serviço, melhoria do portal→produto, adequação financeira com prazo→projeto. Não chamar toda alteração de projeto nem transformar produto em fila de tarefas sem aprendizado. Encerrar com síntese de conexão entre catálogo, critérios, engenharia, rastreabilidade e medidas.

### 08 · Pratique e confira (`#pratica`)

Atividade 1 (E007–E009): pedido fictício de integração com informação incompleta. Pedir três informações para DoR e três evidências para DoD. Resposta comentada deve distinguir prontidão de comprovação do resultado; aceitar variações coerentes com responsável/dependências/aceite e testes/revisão/documentação/implantação.

Atividade 2 (E010–E012): lead time sobe e reabertura cresce. Pedir hipóteses verificáveis, dados a consultar e por que não culpar indivíduos. Resposta: examinar filas/WIP, clareza do aceite, revisões e testes; medidas são sinais e não demonstram causa. Perguntar diferença SLI/SLO/SLA e orçamento da meta 99,9%; resposta 0,1% sob mesma base/período.

Atividade 3 (E019–E025): classificar os três pedidos universitários e explicar um sinal que justificaria reclassificação. Resposta deve usar natureza da demanda, não nome do departamento; aceitar descoberta de incerteza como motivo para rever o encaminhamento. Pergunta final de transferência: por que uma fábrica pode operar com métodos distintos? Resposta: operação define serviços/critérios/métricas; método organiza rotina da equipe (E016).

Questionário curto com respostas comentadas (não mera repetição): padronização versus uniformidade; distinção testes contrato/E2E; PR escrito versus DoD; ALM versus ferramenta; data fixa versus big bang. Cada resposta retoma evidência e explica o erro conceitual, sem pegadinhas externas. Pode compartilhar a seção com as atividades, com subtítulos e detalhes expansíveis preservados na impressão.

### 09 · Referências (`#referencias`)

Entradas completas pela ordem efetiva de primeira ocorrência na redação. Livro identificado como base conceitual, transcrição e slides como materiais da aula. Cada novo localizador exige entrada própria; mesmo localizador pode reutilizar o número. Não fixar números antes do texto final. Registrar tabela número↔EIDs↔arquivo/localizador no dossiê. Referências precisas propostas: livro pp10–14 (paradigma/histórico); T1 19:17–25:00 e S1 slide6 (autarquia); livro pp15–19 e T1 25:01–31:44 (fluxo); T1 47:47–48:20/1:12:17–1:12:57 (extras implantação); livro pp16–18 + S1 slides8/11/12 (acordos); livro pp23–26/45–46 e S1 slide9 (métricas/confiabilidade); livro pp19–21 e T1 1:02:18–1:06:06 (ALM/reuso); livro pp17–24, S1 slides11–19 e trechos E016–E025 para modelos/cases. Ajustar ao trecho realmente usado, evitando referência ampla por conveniência.

## Plano visual e montagem

Preservar BaseLayout/SiteHeader, paleta/tipografia, duas colunas, índice sticky, barra superior e índice móvel. Não acrescentar identidade da matéria. Reutilizar classes aprovadas: takeaway para ideia central, table-wrap nas comparações, case nos exemplos fictícios e note em limites conceituais.

1. SVG próprio/HTML semântico do fluxo de seis atividades, com retorno da operação e gates transversais (E004–E006/E011). Finalidade: mostrar que qualidade atravessa o fluxo e atividades iteram; legenda/alt sem alegação adicional.
2. Encadeamento de rastreabilidade requisito→produção (E018), preferencialmente HTML/SVG legível no celular. Finalidade: ligar mudança e efeito, não representar ALM como ferramenta.
3. Quadro de triagem única para três pistas e coordenação de dependências (E024–E025). Finalidade: aplicação da classificação; não diagrama rígido universal.

Pode priorizar dois visuais para evitar redundância; nenhuma figura meramente decorativa. Se arquivos próprios, registrar em visuais.md e /assets/tecnologias-emergentes-aula-ao-vivo-01/. Todas as figuras/tabelas/respostas recebem referências numéricas de suporte.

## Cobertura e exclusões

Destino integral: E001–003→01; E004–006/E011/E015→02; E007–009→03; E010–012/E014→04; E013/E018→05; E016–017/E019–023→06; E024–025→07 e prática. E014 também conecta 02–04; E017/E023 integram universidade sem repetir casos. Nenhum assunto substantivo da matriz é excluído. Percentuais dos cases omitidos por não acrescentarem compreensão e não terem valor empírico; casos permanecem explicitamente didáticos. P50/P90 omitidos conforme justificativa da seção04. Saudações, avisos, nomes pessoais, piadas, contatos e adaptação cinematográfica seguem exclusões documentadas na pesquisa. Não omitir extras sem livro; limitar o desenvolvimento ao suporte real.

## Entrega ao redator e limites

Redigir o texto integral em post.md com a explicação antes da referência, sem falas atribuídas, confronto de fontes ou timestamps no desenvolvimento. Definir cada sigla na primeira ocorrência e evitar siglas dispensáveis. Não usar o post antigo como evidência. Resolver divergências conforme evidencias.md; não reapresentar erro de0,01%, confusão contrato/E2E ou datas conflitantes. Usar exemplos passo a passo com motivação, decisão, evidência e limite, sem criar estatísticas. Não reduzir seções a listas de nomes; explicar como os elementos se relacionam. Referências clicáveis e retornos únicos serão conferidos na montagem. Não há evidência essencial faltante; limites pontuais estão registrados na pesquisa.

## Ajustes após revisão independente

R01: manter somente Fortify como exemplo nominal de análise estática, com localizador56:24–57:04. R02: seção02 incorpora análise estruturada do incidente/post-mortem sem culpa com apoio livro15/23/67 e slides7/10, investigando contrato,alerta,correção e registrando aprendizado; integra E004/E014/E018. R03: expansão de SRE recebe fonte específica livro174, sem desenvolvimento externo à confiabilidade já tratada. Novas referências renumeradas por primeira ocorrência.
