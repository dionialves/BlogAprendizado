# Fábrica de software: do pedido à operação com qualidade e rastreabilidade

**Tecnologias emergentes em engenharia de software · Aula ao vivo 01**

## Introdução {#inicio}

Como transformar um pedido em entrega verificável sem perder o controle depois da implantação? Essa pergunta reúne o núcleo da aula: sair de uma operação dependente de conhecimentos individuais e organizar um caminho compartilhado para receber, executar, verificar, entregar e acompanhar demandas de software. A fábrica apresentada na aula não é uma proposta de produzir sistemas idênticos. É uma forma de padronizar processos, responsabilidades, artefatos e controles, tornando o trabalho repetível, mensurável e rastreável. [E001, E003–E004, E021]

**Ideia central:** a fábrica organiza a operação; a metodologia organiza o trabalho da equipe. Dentro dessa operação, demandas diferentes podem exigir tratamentos diferentes, sem abandonar uma base comum de qualidade e evidências. Governança leve significa escolher controles adequados à demanda, não eliminar controles. [E019, E030–E032]

Este é um guia de estudo da **aula ao vivo**, orientado por `transcrição/aula01.txt`. Os slides `slides/aula01.pdf` são complemento identificado, não substituto da fala. Não há livro disponível para complementar o estudo, e a aula 02 não integra o recorte. As explicações a seguir são paráfrases e sínteses didáticas, salvo a citação literal sinalizada. Os exemplos da Universidade Horizonte e as atividades são criações fictícias deste texto, não falas atribuídas ao professor.

Ao final, você deverá conseguir estruturar uma demanda com entrada e conclusão verificáveis, diferenciar controles e indicadores, reconstruir os vínculos de uma mudança e justificar seu encaminhamento entre serviços, produto, projeto e programa/portfólio. [E005–E022, E026–E033]

### Percurso de leitura

1. [Do artesanal à fábrica](#fabrica)
2. [Da necessidade ao suporte](#fluxo)
3. [Prontidão, conclusão e controles](#controles)
4. [Métricas para investigar](#metricas)
5. [Fábrica e metodologia](#camadas)
6. [ALM e rastreabilidade](#rastreabilidade)
7. [Modelos de operação](#modelos)
8. [Governança leve e triagem](#triagem)
9. [Síntese e prática comentada](#pratica)
10. [Questionário com respostas](#questionario)
11. [Referências e limites](#referencias)

## 1. Do artesanal à fábrica: o que realmente muda? {#fabrica}

Na comparação da aula, o modelo artesanal concentra conhecimento em pessoas: decisões pouco formalizadas, documentação que varia entre projetos e dependência de especialistas. Isso pode funcionar em um projeto pequeno; o problema se torna mais evidente quando crescem o número de sistemas, as integrações e os módulos que precisam ser mantidos. A dificuldade não está em uma pessoa ter conhecimento, mas em a continuidade da operação depender exclusivamente desse conhecimento. [E003; T, 15:16–16:16]

A fábrica procura transformar essa dependência em um processo compartilhado. Para isso, estabelece documentação, critérios de entrada e saída, divisão de responsabilidades e mecanismos de qualidade. Em vez de acompanhar o trabalho somente pela percepção individual, utiliza sinais como tempo de atendimento, quantidade de entregas, defeitos, retrabalho e cumprimento de SLA. Automação e processos repetíveis apoiam a ampliação da capacidade com controle. São mecanismos e objetivos da organização, não uma garantia de sucesso em qualquer contexto. [E004; T, 16:28–19:01]

| Questão de diagnóstico | Situação artesanal descrita | Organização proposta pela fábrica |
| --- | --- | --- |
| Onde está o conhecimento? | Concentrado em especialistas, com documentação irregular. | Em artefatos e procedimentos compartilháveis, com responsabilidades definidas. |
| Como o trabalho entra? | Pedidos recebidos por canais e formatos diferentes. | Catálogo e triagem ajudam a estabelecer uma linguagem comum. |
| Como sabemos que terminou? | A conclusão pode ficar dependente da interpretação de cada equipe. | Critérios de conclusão exigem evidências. |
| Como acompanhamos o desempenho? | Predominam percepções individuais. | Indicadores de fluxo, qualidade e prazo apoiam acompanhamento e investigação. |

*Síntese didática da aula e da ilustração da autarquia; não é comparação empírica entre organizações. [E003–E004, E010–E011, E023]*

Padronizar esse processo **não significa padronizar o resultado de todos os sistemas**. Um relatório e uma integração podem ser produtos diferentes e, ainda assim, ter responsabilidades claras, critérios de aceite e evidências de entrega. O padrão está na organização do trabalho e nos controles, não na obrigação de todas as soluções serem iguais. [E001]

### O caso da autarquia e o alcance da ilustração

A aula apresenta uma autarquia que recebe manutenção, funcionalidades, integrações e relatórios por e-mail, mensagens e planilhas. O caso ilustra a passagem para catálogo, triagem, prontidão, conclusão, automação e métricas. Não há identificação institucional, dados brutos ou método que permitam tratar o caso como comprovação empírica de ganhos. [E023; T, 19:17–25:00; S, p. 6]

Há também um ruído importante: o registro usa “formal” em um trecho sobre acompanhamento da produtividade, enquanto o painel dos slides diz “informal”. Não reconstruímos uma citação supostamente corrigida. O contraste aqui utilizado se apoia na explicação legível sobre percepções individuais e indicadores, além da comparação dos slides. [D02; T, L138–159; S, p. 5–6]

### Um panorama histórico, não uma cronologia validada

A aula situa qualitativamente um percurso de práticas artesanais para formalização de processos, normas, práticas ágeis e integração entre desenvolvimento, operação e segurança. Nesse percurso, a qualidade deixa de ser tratada apenas como verificação final e passa a acompanhar o ciclo. [E002]

As datas não são reproduzidas como uma sequência definitiva: transcrição e slides divergem sobre o período do desenvolvimento estruturado, e texto e linha do tempo da página 4 também não apresentam uma ordenação inteiramente consistente. Sem evidência adicional, não cabe escolher uma versão como consenso histórico. [D01; T, 12:39–13:04; S, p. 4]

### Exemplo transversal — Universidade Horizonte

**Exemplo fictício criado para estudo; não é instituição nem resultado observado.** Na Universidade Horizonte, pedidos de declaração de matrícula chegam por mensagens diferentes. Uma pessoa concentra as informações necessárias, e não está registrado o que o solicitante considera uma emissão correta.

O diagnóstico inicial tem três partes: entrada dispersa, dependência individual e aceite pouco claro. A resposta didática não é começar imediatamente a escrever código: é definir o tipo de serviço, as informações necessárias, o responsável pelo aceite e as evidências que permitirão acompanhar a entrega. Os detalhes da Horizonte são inventados; a relação entre diagnóstico e organização deriva da aula. [E003–E005, E010–E011, E023]

## 2. Da necessidade ao suporte: o fluxo não termina no código {#fluxo}

O fluxo apresentado conecta requisitos, análise/projeto, implementação, testes, implantação e suporte/operação. Para estudá-lo, vale perguntar em cada etapa: **o que precisa ser compreendido, o que precisa ser verificado e o que permitirá demonstrar o trabalho realizado?** A tabela organiza didaticamente os papéis descritos na aula; não impõe um formulário universal. [E005–E009, E020]

| Etapa | Papel no fluxo | O que acompanhar ou registrar |
| --- | --- | --- |
| Requisitos | Identificar necessidades e informações mínimas: objetivo, regras de negócio, aceite e prioridades. | A demanda e seus critérios, para não implementar algo sem saber como será aceito. |
| Análise e projeto | Examinar impactos, dependências, arquitetura, integrações, dados e riscos técnicos. | As dependências e decisões pertinentes à solução, antes de avançar sem compreender consequências. |
| Implementação | Desenvolver código com verificações durante o desenvolvimento. | Revisão, Pull Request, análise estática, lint, build e testes unitários, conforme o trabalho exigir. |
| Testes | Verificar se o comportamento corresponde ao esperado. | Resultados dos testes pertinentes: funcionais, integração, contrato, segurança e ponta a ponta quando necessários. |
| Implantação | Levar a solução à produção com apoio de integração/entrega contínuas e capacidade de resposta a problemas. | Evidências da implantação e meios de voltar ou reajustar quando necessário. |
| Suporte e operação | Acompanhar o software depois de colocado em produção. | Disponibilidade, desempenho, erros, segurança e níveis de serviço. |

*Base principal: T, 25:01–30:05; complemento: S, p. 7–8, 10 e 12. [E005–E009, E020]*

> **Citação literal do registro:** “Código é uma parte do processo de implementação.” — `transcrição/aula01.txt`, L207, marcador 27:01. [E007]

Essa frase ajuda a desfazer duas confusões. Primeiro, escrever código não esgota a implementação, porque revisão e verificações já fazem parte dela. Segundo, implementação não esgota o ciclo, porque ainda há testes, implantação e acompanhamento operacional. Uma entrega não se torna satisfatória apenas porque o código existe. [E007–E009, E011]

Também não devemos transformar essa sequência em cascata obrigatória. A aula ressalta que etapas podem ser iterativas e ocorrer simultaneamente; o essencial é manter critérios claros de passagem e controles. Rever requisitos ou análise não contradiz o fluxo: o que não deve desaparecer é a clareza sobre as condições para avançar. [E012; T, 30:15–31:44]

**Complemento identificado dos slides:** a página 7 traz uma sequência textual compatível com a explicação, mas seu desenho apresenta ligações inconsistentes, como Requisitos → Implementação e Análise e Projeto → Suporte. Por isso, a síntese deste guia segue a explicação oral e o texto, não reproduz essas setas. [D06]

**Necessidade visual V1 — diagrama próprio do fluxo com controles.** Representar as seis etapas com retornos possíveis e controles transversais; não sugerir uma sequência rígida. Legenda proposta: “Percurso didático do pedido à operação, com verificações ao longo do trabalho. Elaboração própria a partir da aula ao vivo 01 e dos slides.” Alt proposto: “Requisitos, análise e projeto, implementação, testes, implantação e suporte conectados, com retornos possíveis e verificações de qualidade.” Base: E005–E012, E018, E020; T, 25:01–37:32, 43:44–44:11 e 55:17–58:15; S, texto p. 7 e p. 10. Visual ainda não produzido; nenhum caminho de imagem é afirmado como existente.

### Aplicando o percurso à Horizonte

No exemplo fictício, a equipe precisa primeiro esclarecer a declaração esperada. Depois, examina de quais dados acadêmicos a emissão depende e quais integrações ou riscos merecem atenção. Durante a implementação, registra revisão e verificações. Os testes confrontam o resultado com o aceite definido. A implantação deixa uma evidência da versão entregue; a operação acompanha se a emissão continua disponível e se surgem erros. Essa é uma aplicação didática do fluxo, não uma prescrição técnica de arquitetura. [E005–E009, E020]

O caso da prefeitura apresentado na aula ilustra esse mesmo percurso, incluindo catálogo, verificações e monitoramento depois da entrega. Seus resultados são explicitamente chamados de fictícios no registro. Estratégias como blue/green, canary, rollback e feature flags são citadas com o propósito de reduzir riscos da entrada em produção, mas não recebem desenvolvimento suficiente para um tutorial neste guia. [E024; T, 44:23–50:49; S, p. 10; D07–D08]

## 3. Entrada pronta, entrega concluída e controles proporcionais {#controles}

Uma fábrica não funciona apenas por reunir desenvolvedores e ferramentas. A aula enfatiza uma linguagem comum entre quem pede e quem executa. O **catálogo de serviços** ajuda a transformar solicitações genéricas em tipos reconhecíveis, como evolução de tela, nova API, correção crítica, integração e migração. Cada tipo pode ter fluxo, aceite, prazo e evidências próprios. [E010, E020]

É importante separar três perguntas que aparecem próximas, mas não são equivalentes:

| Pergunta | Conceito | Exemplo fictício da Horizonte |
| --- | --- | --- |
| **Está pronta para começar?** | DoR/prontidão: condições mínimas de entrada. | Objetivo, regra, aceite, responsável e dependência de dados acadêmicos estão definidos. |
| **O que comprova a conclusão?** | DoD: evidências necessárias para considerar a entrega concluída. | Há revisão, testes pertinentes, documentação atualizada e implantação registrada, conforme os critérios escolhidos neste cenário. |
| **Pode avançar neste ponto?** | Gate: verificação de uma condição de passagem. | Se um teste exigido falha, a versão não avança até que a condição seja atendida. |

*Quadro textual para futura montagem acessível, sem necessidade de imagem. Critérios concretos do exemplo são escolhas fictícias do exercício. [E010–E012, E020]*

Nos slides, **DoD** aparece como *Definition of Done*; aqui usamos **DoR/prontidão** sem reconstruir a expansão em inglês ruidosa da transcrição. A distinção relevante é operacional: informação suficiente para iniciar não comprova que o trabalho terminou; um gate aprovado também não substitui todas as evidências exigidas para a conclusão. [E010–E012; S, p. 8 e 11; D04]

### Uma ficha didática de serviço

**Todos os campos e regras abaixo pertencem ao cenário fictício Horizonte. Não representam política real de uma universidade.**

- **Tipo:** emissão automática de declaração de matrícula.
- **Objetivo:** permitir que o estudante obtenha o documento pelo portal.
- **Regra fictícia:** emitir a declaração para uma matrícula identificada como ativa nos dados consultados.
- **Aceite fictício:** o documento deve corresponder ao estudante e à matrícula consultados; sem matrícula ativa, deve informar que a emissão não foi realizada, em vez de produzir uma declaração incorreta.
- **Prioridade:** registrada pelo solicitante e considerada no encaminhamento.
- **Responsável pelo aceite:** secretaria acadêmica designada no cenário.
- **Dependência conhecida:** acesso aos dados de matrícula necessários à emissão.
- **Prontidão:** esses elementos devem estar suficientemente esclarecidos antes de iniciar o desenvolvimento.
- **Conclusão escolhida para o exercício:** revisão registrada, testes dos comportamentos definidos, documentação pertinente atualizada e implantação registrada.
- **Gate ilustrativo:** impedir avanço se um teste exigido para esse comportamento falhar.

Objetivo, regra, aceite e prioridade derivam do tratamento dos requisitos; responsáveis e dependências integram a prontidão; revisão, testes, documentação e implantação sustentam a conclusão. A ficha demonstra a relação entre esses elementos, não um template obrigatório. [E005, E010–E012, E020, E033]

### Prazo e simultaneidade são controles diferentes

O **SLA de ciclo** estabelece uma expectativa de prazo por tipo de serviço. Uma correção crítica pode ter acordo diferente de uma funcionalidade nova. Os prazos numéricos citados na aula são exemplos, não padrões que este guia transforma em obrigação universal. Cumprir um prazo não dispensa os critérios de qualidade e conclusão. [E011–E012]

O **WIP**, tratado aqui como trabalho em andamento, se refere à quantidade de atividades executadas simultaneamente. Na explicação da aula, iniciar muitas tarefas e concluir poucas acumula trabalho e aumenta filas. Limitar a simultaneidade busca melhorar o fluxo; não define, por si só, um prazo de atendimento. As fontes não fornecem fórmula para escolher o limite adequado. [E012]

### Automação, reuso e conformidade atravessam o fluxo

Automatizar integração, validação e entrega, sempre que possível, reduz tarefas manuais e oportunidades de erro e favorece entregas mais frequentes. Isso não implica eliminar todo erro nem tornar desnecessárias análise, revisão, aceite e priorização. Evidências automáticas, como resultados de testes, build, aprovação de PR e logs de implantação, ajudam a demonstrar o trabalho realizado. [E015, E020]

O reuso descrito é de **componentes padronizados, versionados e reutilizáveis**, e não simples cópia de código entre projetos. Segurança, conformidade e interoperabilidade também devem integrar a esteira, preferencialmente com verificações automatizadas e pontos de controle, em vez de aparecer somente no final. [E017–E018]

**Complemento identificado dos slides:** a página 12 explicita gates proporcionais ao risco; a página 9 confirma a sigla LGPD. Esses registros apoiam a terminologia e a proporcionalidade dos controles, mas não sustentam detalhamento jurídico, limiares técnicos universais ou uma receita de implementação. [E012, E018; D04, D08]

## 4. Medir para investigar, não para prometer {#metricas}

Os indicadores ajudam a substituir avaliações exclusivamente intuitivas por perguntas verificáveis. Entretanto, a medida não entrega automaticamente uma explicação causal. A própria aula apresenta causas possíveis diferentes para o aumento do tempo e para reaberturas. [E013–E014]

| Conceito | O que significa neste recorte | Cuidado de interpretação |
| --- | --- | --- |
| **Lead time** | Tempo da solicitação até a chegada à produção. | Não confundir duração observada com prazo prometido; manter essas fronteiras de medição. |
| **Cumprimento de SLA** | Acompanhamento dos prazos combinados. | Saber que o acordo foi atendido não demonstra, sozinho, qualidade da entrega. |
| **Reabertura** | Sinal de possível retrabalho, problema nos testes ou aceite pouco claro. | Não escolher uma causa apenas pelo sinal. |
| **SLI** | Indicador operacional, como disponibilidade, latência ou erros. | O indicador não é a meta que se deseja atingir. |
| **SLO** | Meta estabelecida para um indicador. | Não inventar janela de medição ou procedimento de cálculo ausente nas fontes. |
| **Orçamento de erro** | Tolerância a falhas ou indisponibilidade que pode orientar prioridades. | Não é uma promessa de sistema perfeito nem uma fórmula operacional fornecida pela aula. |

*Síntese de T, 37:41–42:41, e S, p. 9 e 12. [E013–E016, E011–E012]*

Se o lead time cresce, a aula sugere investigar gargalos, excesso de trabalho em andamento e etapas pouco eficientes. Não diz que todo aumento é necessariamente causado por WIP. Se demandas são reabertas, pode haver problema de teste, mas também falta de clareza no aceite: a equipe pode julgar algo correto sem que corresponda ao que o solicitante considera aceitável. [E013–E014]

**Situação fictícia:** a Horizonte observa mais demora entre solicitação e produção, muitas demandas iniciadas e mais retornos de entregas consideradas concluídas. Uma investigação coerente examina em que pontos o trabalho se acumula e, nas reaberturas, compara critérios de aceite com verificações realizadas. Não seria sustentado concluir imediatamente que um desenvolvedor específico causou a demora ou que todos os testes são inadequados. [E012–E014]

SLI e SLO deslocam o olhar para a operação. Medir disponibilidade é diferente de definir uma meta de disponibilidade. O orçamento de erro acrescenta a ideia de tolerância: quando os limites começam a ser ultrapassados, a aula orienta priorizar estabilidade e confiabilidade em relação a novas funcionalidades. A decisão envolve o comportamento observado, não apenas a quantidade de entregas. [E016]

O registro apresenta uma inconsistência entre um exemplo de meta de disponibilidade e o número de indisponibilidade associado. Não reproduzimos esse número nem atribuímos uma conta corrigida ao professor. Sem áudio e sem janela operacional especificada, este guia permanece na distinção conceitual. [D03; T, 41:25–41:41]

## 5. Fábrica e metodologia: camadas que coexistem {#camadas}

A metodologia ou abordagem organiza a forma de a equipe trabalhar. A fábrica tem alcance operacional mais amplo: define como receber, classificar, executar, controlar e medir demandas. Por isso, a aula não as trata como alternativas excludentes. Scrum e Kanban aparecem como exemplos que podem existir dentro de uma fábrica, sem que isso transforme a fábrica em outra metodologia concorrente. [E019]

Uma maneira didática de distinguir o alcance é observar as perguntas:

- **Na operação da fábrica:** o que pode ser solicitado? Como a demanda entra? Quais critérios precisa atender? Quais evidências demonstram a conclusão? Como qualidade e desempenho serão acompanhados?
- **Na organização do trabalho da equipe:** como as atividades serão coordenadas e acompanhadas no dia a dia?

Essas perguntas sintetizam a diferença apresentada, sem acrescentar papéis ou cerimônias específicos de Scrum ou Kanban. [E019–E020]

O caso universitário da aula reúne matrícula online, portal, documentos e integrações chegando com prioridades e prazos diferentes. A fábrica organiza catálogo, entradas, saídas, esteira, acordos e controles; a abordagem da equipe apoia a organização cotidiana. O exemplo também retoma a necessidade de não acumular indefinidamente novas tarefas quando o trabalho em andamento já atingiu seu limite. [E025; T, 58:24–1:02:10; S, p. 13]

Os resultados percentuais desse caso não são apresentados aqui como pesquisa. Não há método de medição, amostra ou base verificável nos materiais disponíveis. Isso é diferente do caso da prefeitura, cujo caráter fictício é explicitado oralmente: para a universidade, a formulação rigorosa é **ilustração do material sem comprovação empírica disponível**, não uma declaração de ficção atribuída ao professor. [D07]

**Necessidade visual V2 — camadas da fábrica, opcional.** Mostrar a organização operacional de entrada, controle e medição envolvendo o trabalho da equipe, sem hierarquia de pessoas nem cerimônias inventadas. Legenda: “Fábrica e metodologia têm alcances distintos e podem coexistir. Elaboração própria a partir da aula e dos slides.” Alt: “A fábrica organiza entrada, controle e medição; a metodologia organiza o trabalho da equipe nessa operação.” Base: E019–E020; T, 50:54–58:15; S, p. 11–12. Produzir apenas se acrescentar compreensão à comparação textual.

## 6. ALM: reconstruir o caminho de uma mudança {#rastreabilidade}

A aula apresenta ALM como visão integrada do ciclo de vida: planejamento, desenvolvimento, testes, entrega e operação conectados no mesmo fluxo de gestão. **Complemento identificado dos slides:** a página 14 registra o nome *Application Lifecycle Management*, cuja forma oral está incompleta na transcrição. [E021; D04]

O elemento central é a rastreabilidade: acompanhar uma demanda desde sua origem até seus efeitos em produção. Não basta reunir arquivos isolados se não conseguimos relacionar o requisito à alteração, aos responsáveis, às verificações e ao comportamento observado. A relação entre as evidências permite reconstruir o caminho da mudança. [E021–E022]

As cinco perguntas da aula formam um roteiro de investigação:

1. **Por que a mudança foi realizada?** Procurar a demanda ou requisito original.
2. **O que foi alterado?** Relacionar o requisito ao commit e examinar os componentes modificados.
3. **Quem participou?** Identificar desenvolvimento, revisão e aprovação.
4. **Quais testes e verificações foram executados?** Consultar as evidências associadas.
5. **Qual foi o impacto em produção?** Relacionar a mudança aos efeitos observados depois da implantação.

*[E022; T, 1:03:41–1:06:06; S, p. 14]*

### Incidente hipotético na Horizonte, passo a passo

**Exemplo fictício autoral. Todos os IDs e o incidente são inventados.** Depois da implantação, a emissão da declaração falha em uma situação não coberta pelo teste escolhido no cenário. Os registros disponíveis são:

| ID fictício | Papel na investigação | Pergunta que ajuda a responder |
| --- | --- | --- |
| `REQ-17` | Requisito da emissão. | Qual necessidade e qual aceite motivaram o trabalho? |
| `C-42` | Alteração de código. | O que foi efetivamente modificado? |
| `PR-08` | Registro de revisão. | Quem revisou e quais aprovações estão documentadas? |
| `T-05` | Evidência de teste. | Que comportamento foi verificado e com qual resultado? |
| `DEP-03` | Registro de implantação. | Qual versão foi levada à produção? |
| `OP-02` | Sinal operacional do problema. | Que efeito foi observado e em que momento? |

Comece pelo vínculo entre `REQ-17` e `C-42`, não por uma suposição de culpado. Em seguida, confira a revisão `PR-08` e o alcance de `T-05`: o teste aprovado pode não cobrir o comportamento que falhou. Relacione o que foi implantado em `DEP-03` ao sinal `OP-02`. Se um vínculo estiver ausente, registre a lacuna; não a preencha como fato. [Aplicação didática de E020–E022]

A aula ressalta que uma alteração pode passar nos testes e ainda gerar latência, erro ou incidente depois do deploy. Logo, a aprovação das verificações é uma evidência relevante, mas não prova funcionamento perfeito. A rastreabilidade ajuda a investigar essa diferença entre o que foi verificado e o que aconteceu em produção. [E022]

**Necessidade visual V3 — cadeia de rastreabilidade, prioritária.** Representar `REQ-17` → `C-42` → `PR-08`/`T-05` → `DEP-03` → `OP-02`, com todos os IDs rotulados como fictícios. Setas representam vínculos de evidência, não prova de causalidade. Legenda: “Vínculos para investigar uma mudança; IDs fictícios. Elaboração própria a partir da aula e dos slides.” Alt: “Requisito fictício ligado à alteração de código, revisão, testes, implantação e sinal operacional.” Base: E020–E022; T, 55:17–58:15 e 1:02:18–1:06:06; S, p. 12 e 14. Visual ainda não produzido.

## 7. Escolher o modelo e manter uma base comum {#modelos}

A aula apresenta quatro modelos, que podem coexistir na mesma organização. O critério não é o nome da tecnologia ou do sistema, mas a natureza da demanda: repetição, incerteza, restrições e dependências entre iniciativas. [E026–E030]

| Modelo | Natureza da demanda | Organização e acompanhamento destacados |
| --- | --- | --- |
| **Serviços** | Grande volume de solicitações semelhantes e relativamente previsíveis. | Tipos do catálogo, entrada, execução e conclusão claras; SLA, lead time e reabertura. |
| **Produto** | Incerteza e evolução contínua, com necessidade de aprender. | Equipes multidisciplinares e estáveis, backlog, discovery e delivery; indicadores técnicos e de uso do produto. |
| **Projeto** | Objetivo e restrições definidos, como prazo, escopo, orçamento ou obrigação. | Cronograma, baseline e marcos; acompanhamento de escopo, defeitos e SLO; entregas incrementais são possíveis. |
| **Programa/portfólio** | Várias iniciativas interdependentes que precisam ser coordenadas. | Priorização, alocação de capacidade, gestão de dependências e sincronização de entregas segundo valor e risco. |

*Matriz textual para futura montagem, derivada de T, 1:06:15–1:20:41, e S, p. 15–17. [E026–E030]*

### Serviços: organizar a repetição

Quando solicitações são semelhantes e o percurso é conhecido, organizar tipos de serviço permite estabelecer entradas e conclusões claras e acompanhar como o trabalho se comporta. A repetição favorece comparação e identificação de gargalos. Isso não significa que toda demanda possa ser tratada como uma ordem recorrente. [E026]

Na Horizonte fictícia, a emissão recorrente de uma declaração, com procedimento e aceite conhecidos, é um bom cenário para serviço. A justificativa está nessa recorrência, não em o sistema pertencer a uma universidade. [Aplicação de E026, E033]

### Produto: aprender e evoluir

Na orientação a produto, não se trata apenas de executar pedidos repetidos. Há incerteza sobre problemas, hipóteses, valor e evolução. A aula associa **discovery** a entender o problema, validar hipóteses e identificar valor; **delivery**, a desenvolver e entregar a solução. Equipes multidisciplinares que conhecem o produto acompanham sua evolução. Componentes, versionamento e contratos apoiam a continuidade dessa evolução. [E027]

No exemplo fictício, melhorar o portal quando ainda é necessário descobrir quais mudanças respondem às necessidades dos estudantes aponta para produto. A aula menciona adoção, conversão, retenção e engajamento, mas não fornece definições operacionais para calcular essas medidas. Não acrescentamos fórmulas nem métodos de pesquisa ausentes. [E027; D08]

### Projeto: respeitar restrições sem concentrar tudo no final

Objetivo, prazo, escopo, orçamento ou obrigação definidos favorecem tratamento de projeto. Cronograma e marcos ajudam a acompanhar a iniciativa, mas isso não obriga uma única grande entrega final. A aula recomenda incrementos quando possível, para verificar resultados e avaliar riscos ao longo do caminho. Prazo cumprido também não substitui qualidade e confiabilidade. [E028]

Uma adequação fictícia da Horizonte com objetivo delimitado e data obrigatória pode ser organizada como projeto, admitindo marcos e entregas incrementais compatíveis com as restrições. Não se presume nenhuma lei real nesse cenário. [Aplicação de E028, E032–E033]

### Programa/portfólio: coordenar dependências

Quando portal, matrícula, financeiro e identidade digital dependem uns dos outros, executar cada iniciativa isoladamente não resolve toda a necessidade de gestão. A coordenação precisa considerar o que depende de quê, onde alocar capacidade, quais riscos tratar primeiro e quais entregas sincronizar. A aula agrupa programa e portfólio neste modelo; não oferece base para uma diferenciação formal entre os termos. [E029–E030]

A coexistência não elimina padrões comuns. Entradas claras, qualidade, automação, rastreabilidade e métricas continuam formando a base da operação, embora sua aplicação concreta varie conforme a demanda. Uma API ou migração pode aparecer tanto no catálogo quanto em projeto ou coordenação: a palavra, sozinha, não determina a classificação. [E030; D09]

## 8. Governança leve: porta única, triagem e encaminhamento {#triagem}

Governança leve combina modelos sem criar excesso de aprovações. A aula propõe uma porta de entrada única, seguida de triagem para encaminhar a solicitação ao fluxo adequado. O objetivo não é aumentar burocracia, mas organizar o trabalho desde a entrada e aplicar controles proporcionais. [E031]

As **três perguntas** apresentadas são:

1. **A demanda é rotineira e repetível?** Isso aponta para o catálogo de serviços, com informações mínimas e conclusão claras.
2. **Envolve descoberta, hipóteses ou evolução contínua?** Isso aponta para produto, com roadmap e backlog apoiando ajustes contínuos.
3. **Existe data inegociável, obrigação legal ou marco regulatório?** Isso aponta para projeto, com cronograma e marcos. [E032]

Essas perguntas são um guia de encaminhamento, não um algoritmo completo de respostas exclusivas. As fontes não estabelecem qual critério sempre deve prevalecer quando uma demanda é repetitiva e também tem prazo obrigatório. Dependências entre iniciativas podem exigir coordenação de programa/portfólio, mas essa coordenação não é apresentada como uma quarta pergunta exclusiva no roteiro dos slides. [E029–E032; D09]

O caso final da aula ilustra declaração de matrícula como serviço, melhoria contínua do portal como produto e adequação regulatória financeira como projeto. O que explica os encaminhamentos é a natureza apresentada em cada cenário. Não se deve concluir que todo documento é serviço ou que toda mudança financeira é projeto. [E033, E032]

**Situação fictícia com sobreposição:** a Horizonte executa migrações semelhantes com frequência, mas uma migração específica também precisa cumprir uma data obrigatória. A recorrência sugere aproveitar procedimentos do catálogo; a restrição exige atenção a prazo e marcos. Para justificar o tratamento, é necessário esclarecer o que há de singular, quais restrições existem e se há dependências com outras iniciativas. A aula permite reconhecer essa sobreposição, mas não fornece um desempate universal. [Aplicação de E026, E028–E032; D09]

Os dois extremos a evitar são tratar tudo como projeto, criando controles desnecessários para pequenas demandas recorrentes, e tratar tudo como operação, perdendo o controle de iniciativas complexas. “Leve” qualifica a adequação do controle, não a ausência de responsabilidade ou evidência. [E031]

**Necessidade visual V4 — triagem, prioritária.** Mostrar porta única e as três perguntas em paralelo, com nota sobre sobreposição e coordenação entre iniciativas; não desenhar árvore binária com regra de precedência inventada. Legenda: “Guia de encaminhamento da aula; critérios podem se sobrepor. Elaboração própria a partir da aula e dos slides.” Alt: “Triagem considera repetição, descoberta e prazo obrigatório; iniciativas interdependentes podem exigir coordenação.” Base: E029–E032; T, 1:13:48–1:24:31; S, p. 16–18. Visual ainda não produzido. A capa opcional do plano pode ser dispensada por repetir o fluxo.

## 9. Síntese e aplicação {#pratica}

O percurso pode ser retomado por cinco perguntas:

1. **Que demanda é esta?** Examine recorrência, incerteza, restrições e dependências antes de escolher o modelo. [E026–E032]
2. **Está pronta para começar?** Verifique objetivo, regras, aceite, prioridades, responsáveis e dependências. [E005, E010]
3. **O que comprova a conclusão?** Procure as evidências exigidas, não apenas a declaração de que o código ficou pronto. [E011, E020]
4. **Que vínculos e sinais permitem acompanhá-la?** Relacione origem, mudança, verificações, implantação e comportamento operacional; utilize indicadores para abrir investigação. [E013–E016, E021–E022]
5. **Tratamento e controle são proporcionais?** Mantenha uma base comum sem impor o mesmo percurso detalhado a todas as demandas. [E012, E030–E031]

Essas perguntas conectam entrada, execução, entrega e operação. Nenhum mecanismo apresentado elimina a possibilidade de falha: automação apoia verificações, métricas orientam investigação e rastreabilidade ajuda a reconstruir mudanças. [E015, E020–E022]

### Atividade 1 — Diagnosticar e construir uma ficha

**Enunciado — cenário fictício.** Na Horizonte, pedidos repetidos de declaração chegam por mensagens e não têm aceite documentado. Proponha uma ficha de serviço e explique como acompanhar a demanda até a operação.

Siga seis passos: identifique os problemas; escolha um tipo do catálogo; registre objetivo, regras, aceite e prioridade; explicite responsável e dependências; separe evidências de conclusão de gate; indique o que acompanhar depois da produção.

**Resposta-modelo comentada.** O diagnóstico aponta entrada dispersa e aceite pouco claro, além de dependência individual se só uma pessoa souber interpretar os pedidos. Como a solicitação é recorrente e o procedimento é conhecido no cenário, pode ser organizada como serviço de declaração. A ficha registra objetivo, regra fictícia de emissão, critérios de aceite, prioridade, responsável e dependência de dados acadêmicos. Isso sustenta a prontidão. [E003–E005, E010, E026, E033]

Para concluir, o cenário pode exigir revisão registrada, testes pertinentes, documentação atualizada e implantação demonstrada. Um gate impede avanço quando uma verificação exigida falha, mas não substitui toda essa conclusão. Depois da entrega, acompanhar erros e disponibilidade mantém a operação no ciclo. Os critérios específicos são escolhas didáticas, não política institucional real. [E007–E012, E020]

**Critério de avaliação:** aceite formas equivalentes que diferenciem entrada, conclusão e passagem e incluam acompanhamento operacional. Não é necessário inventar SLA numérico, limiar de qualidade nem exigir indiscriminadamente todos os testes citados. Base legível: T, 15:16–19:01, 25:01–37:32, 55:17–58:15, 1:06:15–1:07:59 e 1:24:40–1:29:08; S, p. 5–12, 15 e 19.

### Atividade 2 — Ler sinais sem concluir causalidade

**Enunciado — dados qualitativos fictícios.** O lead time aumentou, há várias demandas em andamento e cresceram as reaberturas. O que investigar? Diferencie esses sinais de SLA, SLI e SLO.

**Resposta-modelo comentada.** Lead time, neste recorte, vai da solicitação à produção. Seu aumento sugere examinar gargalos, excesso de simultaneidade e etapas ineficientes; o sinal não identifica uma causa única. Nas reaberturas, investigar verificações realizadas e clareza do aceite, porque uma entrega pode voltar tanto por falha não detectada quanto por desencontro sobre o esperado. [E012–E014]

SLA trata o prazo combinado e seu cumprimento; SLI observa o comportamento operacional, como disponibilidade ou erros; SLO estabelece uma meta para esse indicador. Nenhum deles deve ser confundido com uma prova automática da causa do retrabalho. [E014–E016]

**Critério de avaliação:** apresentar hipóteses e distinguir observação, acordo e meta, sem criar taxas ou janelas de medição. Base legível: T, 35:37–42:41; S, p. 8–9 e 12.

### Atividade 3 — Reconstruir uma mudança

**Enunciado — incidente e IDs fictícios.** A emissão de declaração falhou depois da implantação. Usando `REQ-17`, `C-42`, `PR-08`, `T-05`, `DEP-03` e `OP-02`, organize a investigação e diga o que fazer se faltar um vínculo.

**Resposta-modelo comentada.** Parta do motivo e aceite de `REQ-17`; identifique o que mudou em `C-42`; confira participantes, revisão e aprovação em `PR-08`; examine alcance e resultados de `T-05`; verifique a versão implantada em `DEP-03`; relacione o sinal `OP-02` ao impacto observado. Se faltar uma ligação, declare que não é possível reconstruir aquele trecho com as evidências disponíveis. Não atribua causa ou culpa por suposição. [E020–E022]

Um teste aprovado não elimina a possibilidade de incidente: pode haver diferença entre o comportamento coberto e o observado. Por isso, rastrear exige relacionar verificação e operação, e não encerrar a análise ao encontrar um resultado de teste aprovado. [E022]

**Critério de avaliação:** a resposta deve construir vínculos e admitir lacunas, não apenas listar ferramentas. Base legível: T, 55:17–58:15 e 1:02:18–1:06:06; S, p. 12 e 14.

### Atividade 4 — Triagem contextual

**Enunciado — situações fictícias.** Classifique e justifique: (a) declaração recorrente com procedimento conhecido; (b) evolução do portal dependente de hipóteses sobre necessidades; (c) adequação com objetivo delimitado e prazo obrigatório; (d) iniciativas interdependentes com entregas a sincronizar; (e) migração recorrente também sujeita a prazo obrigatório.

**Resposta-modelo comentada.** (a) Serviços, pela repetição e previsibilidade. (b) Produto, pela incerteza e necessidade de aprender. (c) Projeto, pelas restrições e objetivo definidos, podendo admitir incrementos. (d) Programa/portfólio, pela coordenação de dependências. Em todos, preservar entradas claras, qualidade, rastreabilidade e acompanhamento. [E026–E030]

No item (e), há critérios sobrepostos. É adequado perguntar sobre singularidade, restrições e dependências, e justificar como o procedimento recorrente será articulado ao acompanhamento do prazo. Não há resposta única sustentada apenas pela palavra “migração”, nem uma regra universal de precedência fornecida pela aula. [E031–E032; D09]

**Critério de avaliação:** aceitar justificativas contextuais compatíveis, inclusive combinações explicitadas; não premiar classificações por palavra-chave. Base legível: T, 1:06:15–1:29:08; S, p. 15–19.

## 10. Questionário com respostas comentadas {#questionario}

Tente responder antes de ler cada comentário. Formulações equivalentes são válidas quando preservam a distinção conceitual e a justificativa.

### 1. Padronizar uma fábrica significa construir sistemas iguais?

**Resposta:** não. O objeto da padronização é a organização dos processos, da qualidade, dos artefatos, das responsabilidades e dos controles. Produtos podem ser diferentes e compartilhar condições de trabalho verificáveis. [E001, E004; T, 5:37–6:47 e 16:28–19:01; S, p. 5–6]

### 2. Por que código concluído pode não representar entrega concluída?

**Resposta:** podem faltar testes, revisão, documentação, implantação ou outras evidências exigidas pelo DoD. Além disso, o acompanhamento continua em produção. O erro é reduzir o ciclo à escrita ou compilação do código. [E007–E009, E011; T, 26:56–30:05 e 34:10–35:33; S, p. 7–8 e 11]

### 3. Diferencie DoR, DoD e gate em uma demanda.

**Resposta:** DoR define condições mínimas para começar; DoD define evidências para concluir; gate verifica uma condição para avançar e pode barrar a passagem. No exemplo fictício da declaração, aceite e dependências conhecidos sustentam a entrada; revisão, testes e implantação escolhidos sustentam a conclusão; um teste obrigatório reprovado impede avanço. [E010–E012; T, 31:55–37:32; S, p. 8 e 11–12]

### 4. Se o lead time aumentou, qual é a causa?

**Resposta:** não é possível determinar apenas por esse sinal. É preciso investigar gargalos, trabalho simultâneo excessivo e ineficiências. A medida considerada pela aula é da solicitação à produção, não apenas o tempo de codificação. [E012–E013; T, 35:37–38:42; S, p. 8–9]

### 5. Qual a diferença entre SLI e SLO? Como participa o orçamento de erro?

**Resposta:** SLI é o indicador; SLO, sua meta. O orçamento de erro representa tolerância a falhas ou indisponibilidade e pode orientar a prioridade de estabilidade quando limites são ultrapassados. As fontes não autorizam inventar uma janela operacional nem repetir o número inconsistente do registro. [E016, D03; T, 40:53–42:41; S, p. 9]

### 6. Fábrica e metodologia são alternativas excludentes?

**Resposta:** não. A fábrica organiza demandas e operação; a metodologia organiza o trabalho da equipe. A diferença é de alcance, não uma obrigação de escolher uma contra a outra. Scrum e Kanban são exemplos citados de coexistência, não conteúdos metodológicos detalhados nesta aula. [E019–E020; T, 50:54–58:15; S, p. 11–12]

### 7. O que rastrear quando uma mudança passou nos testes e falhou em produção?

**Resposta:** motivo/requisito, alteração de código, participantes e aprovações, testes e verificações, implantação e efeitos em produção. Testes aprovados não excluem falhas; a investigação precisa relacionar a cobertura das verificações com o comportamento observado. [E021–E022; T, 1:02:18–1:06:06; S, p. 14]

### 8. Toda migração é projeto e toda API é serviço?

**Resposta:** não. Recorrência, incerteza, prazo e dependências precisam ser analisados no contexto. Esses nomes aparecem em tratamentos diferentes nos materiais, e não há desempate universal para critérios sobrepostos. [E026–E032, D09; T, 1:06:15–1:24:31; S, p. 15–18]

### 9. Um projeto precisa entregar tudo apenas ao final?

**Resposta:** não. Cronograma, restrições e marcos podem coexistir com entregas incrementais, permitindo verificar resultados e avaliar riscos ao longo do percurso. Projeto não é sinônimo de entrega única final. [E028; T, 1:10:42–1:13:42; S, p. 16]

### 10. Governança leve dispensa controle? Os percentuais dos casos comprovam benefícios?

**Resposta:** não em ambos os casos. Controle deve ser proporcional à demanda. Os casos ilustram mecanismos, mas não há base empírica verificável para usar seus percentuais como comprovação. A prefeitura tem resultados explicitamente fictícios no registro; os demais casos não devem ser transformados em pesquisas reais nem ter uma declaração de ficção oral inventada. [E024–E025, E031–E033, D07; T, 44:23–50:49, 58:24–1:02:10 e 1:20:52–1:29:08; S, p. 10, 13 e 18–19]

## Referências e limites deste estudo {#referencias}

Os rastreadores E001–E033 e D01–D09 preservam a ligação editorial com o mapa de evidências. As referências legíveis abaixo permitem localizar os conteúdos sem depender desses IDs. Todos os arquivos factuais utilizados estão em `Matérias/Tecnologias emergentes em engenharia de software/`.

### Fonte principal — registro da aula ao vivo 01

**`transcrição/aula01.txt` — aula ao vivo 01.** Tempos são marcadores existentes no registro textual, não tempos conferidos contra áudio. Linhas são as linhas físicas do arquivo consultado.

| Núcleo de conteúdo | Localização no registro |
| --- | --- |
| Padronização de processos, não igualdade de sistemas | L39–48; 5:37–6:47. |
| Panorama histórico qualitativo e ressalvas cronológicas | L81–113; 11:06–15:02; divergência específica em L93–96, 12:39–13:04. |
| Artesanal, fábrica e indicadores iniciais | L115–143; 15:16–19:01. |
| Caso da autarquia | L145–191; 19:17–25:00. |
| Requisitos, análise, implementação, testes, implantação e operação | L192–230; 25:01–30:05; citação literal em L207, 27:01. |
| Iteração, critérios de passagem e gates | L231–243; 30:15–31:44. |
| Catálogo, prontidão, conclusão, SLA e WIP | L244–288; 31:55–37:32. |
| Lead time, SLA e reaberturas | L289–307; 37:41–40:13. |
| Automação, SLI, SLO e orçamento de erro | L308–325; 40:24–42:41; inconsistência numérica em L315–317, 41:25–41:41. |
| Reuso, segurança e conformidade | L326–338; 42:47–44:11. |
| Caso da prefeitura e resultados fictícios | L339–391; 44:23–50:49; ficção explicitada em L389, 50:35. |
| Fábrica versus metodologia e evidências automáticas | L392–451; 50:54–58:15. |
| Caso universitário de modernização | L452–480; 58:24–1:02:10. |
| ALM e investigação de mudança | L481–512; 1:02:18–1:06:06. |
| Modelos de serviços e produto | L513–546; 1:06:15–1:10:29. |
| Projeto e programa/portfólio | L547–582; 1:10:42–1:15:20. |
| Coexistência e base comum dos modelos | L583–624; 1:15:31–1:20:41. |
| Governança leve e três perguntas de triagem | L625–653; 1:20:52–1:24:31. |
| Caso final de encaminhamento de demandas | L654–688; 1:24:40–1:29:08. |

### Complemento — slides da aula 01

**SANTOS, Rômulo. *Tecnologias Emergentes em Engenharia de Software — Aula 1*. UniCesumar. Arquivo `slides/aula01.pdf`, 20 páginas físicas.** A identificação do professor aparece na página 2. “Página” abaixo significa posição física no PDF, contada desde a capa; não há numeração impressa sendo presumida.

- **P. 4:** panorama histórico; texto e linha do tempo exigem a ressalva cronológica.
- **P. 5–6:** comparação artesanal/fábrica e caso da autarquia; o caso da p. 6 é um infográfico rasterizado.
- **P. 7–8:** fluxo textual, catálogo, DoR, DoD, SLA, inspeções e WIP. O desenho da p. 7 não foi reproduzido por inconsistência nas setas.
- **P. 9–10:** indicadores, automação, reuso, conformidade e caso da prefeitura; p. 10 contém infográfico rasterizado.
- **P. 11–13:** diferença fábrica/metodologia, evidências de entrega e caso universitário; p. 13 contém infográfico rasterizado.
- **P. 14:** *Application Lifecycle Management* e perguntas de rastreabilidade.
- **P. 15–17:** modelos de serviços, produto, projeto e programa/portfólio e sua coexistência; p. 17 contém infográfico rasterizado.
- **P. 18–19:** três perguntas da governança leve e caso de encaminhamento; p. 19 contém infográfico rasterizado.

### Limites e divergências preservados

1. **Cronologia — D01:** datas e ordenação divergem entre transcrição, texto e linha do tempo dos slides. Mantivemos somente o panorama qualitativo atribuído à aula.
2. **Contexto da autarquia — D02:** há palavras ruidosas no contraste formal/informal. Não apresentamos uma citação reconstruída como correção do áudio.
3. **Indisponibilidade — D03:** o exemplo numérico do registro é inconsistente. Foi omitido; não há janela ou cálculo operacional validado para desenvolver esse exemplo.
4. **Terminologia — D04:** grafias foram normalizadas apenas quando sustentadas pelo complemento, como Scrum, Kanban, PR, lead time, CI/CD, DoR/prontidão, DoD e LGPD. Não expandimos siglas por conteúdo externo nem reconstruímos nomes ruidosos como fala literal.
5. **Leitura dos slides — D05:** infográficos rasterizados não são páginas vazias, embora a extração textual seja insuficiente. Erros gráficos não foram tratados como conceitos, e os visuais propostos são sínteses próprias, ainda não imagens produzidas.
6. **Fluxograma — D06:** não reproduzimos as setas inconsistentes da p. 7. O percurso segue a explicação textual, com possibilidade de iteração.
7. **Resultados dos casos — D07:** percentuais foram omitidos. A prefeitura é explicitamente fictícia no registro; autarquia e universidade são tratadas como ilustrações sem comprovação empírica disponível.
8. **Assuntos apenas citados — D08:** não há tutoriais de implantação, configuração de pipeline, comparações de ferramentas nem fórmulas de CFR/MTTR. Post-mortem sem culpa e release trains aparecem nos slides sem desenvolvimento que autorize uma explicação aprofundada aqui.
9. **Triagem — D09:** nomes como API, integração e migração não determinam um modelo. Não inventamos regra de precedência quando recorrência, incerteza, prazo e dependências se sobrepõem.

Não há livro, aula conceitual nem áudio/vídeo original disponíveis para esta complementação. Isso limita a conferência dos ruídos e dos tempos, mas não substitui nem invalida o registro como fonte principal deste guia da aula ao vivo. Avisos institucionais, encerramento e aula 02 ficaram fora do recorte. Não foram usados internet ou conhecimentos externos para completar lacunas.

**Estado editorial:** texto integral preparado para revisão factual/editorial independente. Os marcadores visuais são solicitações para a etapa visual, não assets existentes. Este documento não representa página montada, revisão aprovada ou publicação.
