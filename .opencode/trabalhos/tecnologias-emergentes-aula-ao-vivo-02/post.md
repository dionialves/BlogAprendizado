# Aula ao vivo 02 — Como organizar uma fábrica de software: processos, produtos, projetos e programas

**Tecnologias emergentes em engenharia de software · Aula ao vivo · Aula 02**

## Visão geral {#visao-geral}

Que tipo de trabalho a equipe precisa organizar? Essa pergunta conduz a segunda aula ao vivo. Atender solicitações recorrentes, manter uma plataforma em evolução, entregar uma mudança com prazo definido e coordenar iniciativas relacionadas são necessidades diferentes. A maneira de distribuir prioridades, decisões e responsabilidades precisa considerar essas diferenças.

A ideia central é que **processos, produtos, projetos e programas podem coexistir**. Uma equipe responsável por um produto pode usar processos de qualidade; uma mudança desse produto pode ser tratada como projeto; vários projetos relacionados podem exigir coordenação por um programa. Escolher o arranjo envolve compreender a demanda e os objetivos do negócio. [E001–E004]

Este guia acompanha os assuntos efetivamente tratados na aula ao vivo 02. Os slides da mesma aula complementam a exposição. O livro da matéria não está disponível na pasta de fontes e não foi utilizado. As explicações são paráfrases didáticas; os exemplos novos estão identificados como fictícios.

Para retomar a sequência da matéria, consulte a [aula ao vivo 01](/tecnologias-emergentes-aula-ao-vivo-01/).

### Roteiro de estudo

1. [Quatro modelos, quatro focos](#quatro-modelos)
2. [Processos: tornar a demanda observável](#processos)
3. [Produtos: manter responsabilidade pela evolução](#produtos)
4. [Projetos: delimitar a entrega](#projetos)
5. [Programas: coordenar dependências](#programas)
6. [Diagnosticar e combinar](#escolha)
7. [Pessoas e ciclos](#equipes-ciclos)
8. [Uma base técnica compartilhada](#esteira)
9. [Casos para consolidar](#casos)
10. [Síntese](#sintese)
11. [Prática guiada](#pratica)
12. [Questionário](#questionario)
13. [Respostas comentadas](#respostas)
14. [Referências e limites](#referencias)

## Quatro modelos, quatro focos {#quatro-modelos}

Um modelo organizacional orienta como o trabalho é estruturado: o que ganha prioridade, quem toma decisões, como a demanda circula e quais indicadores ajudam a acompanhar os resultados. Na aula, dificuldades de uma fábrica de software são relacionadas também à inadequação desse arranjo às necessidades da organização. [E002]

| Modelo | Foco principal | Continuidade do trabalho | Exemplo do recorte da aula | Cuidado discutido |
| --- | --- | --- | --- | --- |
| Processos | Padronização, controle e repetibilidade | Fluxos usados repetidamente | Atendimento de demandas recorrentes | Evitar burocracia sem benefício |
| Produtos | Evolução contínua e geração de valor | Responsabilidade mantida ao longo do ciclo do produto | Plataforma acadêmica | Evitar evolução sem governança |
| Projetos | Entrega específica com limites definidos | Início, desenvolvimento e encerramento da iniciativa | Portal de matrícula com prazo | Evitar iniciativas isoladas que fragmentem soluções |
| Programas | Coordenação estratégica de iniciativas relacionadas | Acompanhamento das dependências e dos objetivos comuns | Transformação digital entre áreas | Evitar complexidade sem foco |

A tabela sintetiza a exposição e o quadro comparativo dos slides; os cuidados são riscos discutidos, não consequências inevitáveis de cada escolha. [E003, E017–E020]

**Processo e projeto não são sinônimos.** O processo pode ser duradouro e repetido em várias ocasiões. O projeto é temporário e busca uma entrega delimitada. Durante um projeto, a equipe pode utilizar processos para alcançar seu objetivo: a existência de um fluxo de testes, por exemplo, não elimina o caráter temporário da iniciativa. [E004]

O programa também exige uma distinção: reunir projetos em uma lista não basta. As iniciativas precisam estar relacionadas e contribuir para um resultado estratégico mais amplo. Essa ligação torna a coordenação das dependências parte central do trabalho. [E004, E015]

> **Visual planejado — SVG próprio:** mapa dos quatro focos, com os quatro blocos no mesmo nível e uma base técnica comum. Evidências: E003, E017 e E018. Caminho sugerido pelo plano, ainda a produzir: `/assets/tecnologias-emergentes-aula-ao-vivo-02/quatro-modelos.svg`.

## Processos: tornar a demanda observável {#processos}

A orientação a processos dá atenção ao caminho percorrido por uma demanda: **entrada → atividades → validação → saída**. Definir esse percurso permite tornar explícitos os critérios de atendimento e as evidências de conclusão. A aula relaciona esse modelo a trabalho repetitivo, alto volume de solicitações, compromissos de atendimento, rastreabilidade e auditoria. [E005]

Padronizar não significa que toda demanda produz a mesma coisa. Na exposição, uma API pode partir de um contrato e terminar com testes e documentação; uma tela pode partir de um protótipo e de critérios de aceite; um defeito crítico exige evidências e uma correção validada. O padrão organiza o trabalho considerando o tipo de entrada e a saída esperada. Esses são exemplos apresentados, não uma lista obrigatória para qualquer organização. [E006]

### Percorrendo uma correção

**Exemplo fictício/didático, elaborado a partir do fluxo e do exemplo de defeito crítico da aula.** Imagine um chamado informando que uma função deixou de funcionar. Para acompanhar a demanda, descreva o percurso:

1. **Entrada:** registrar a evidência do problema e incluí-lo no backlog, a lista de demandas a atender.
2. **Planejamento:** organizar o atendimento da correção dentro do fluxo.
3. **Implementação:** realizar a alteração necessária.
4. **Testes:** verificar a correção.
5. **Homologação:** conferir se a entrega atende ao que foi solicitado.
6. **Publicação:** disponibilizar a correção, com o hotfix validado e o retorno à versão anterior testado, conforme o exemplo de saída discutido na aula.

O percurso combina o fluxo de atendimento e os elementos do defeito crítico apresentados na exposição. Sua função aqui é mostrar que “a programação terminou” não constitui, por si só, toda a evidência de conclusão. [E006–E007]

Entre etapas podem existir **gates**, pontos de controle que condicionam o avanço a critérios mínimos de qualidade e segurança. No exemplo, a validação da correção pode funcionar como um desses pontos: a demanda só segue quando há evidência de que o critério foi atendido. O gate precisa corresponder a uma verificação compreensível. [E007]

### O que observar no fluxo

| Observação | Pergunta que ajuda a responder |
| --- | --- |
| Lead time | Quanto tempo decorreu entre a entrada da demanda e sua entrega? |
| Throughput | Quantas demandas foram concluídas em determinado período? |
| Cumprimento de SLA | Os compromissos de atendimento estabelecidos estão sendo cumpridos? |
| Reabertura | Demandas dadas como concluídas estão retornando ao atendimento? |

Lead time e throughput descrevem aspectos diferentes: o primeiro acompanha um intervalo; o segundo, uma quantidade por período. Cumprimento de SLA e reabertura complementam a observação do atendimento. A aula apresenta esses indicadores para acompanhar o fluxo e reconhecer gargalos; não fornece aqui uma metodologia completa de medição. [E008]

O limite é o **teatro de processo**: etapas, documentos e aprovações que não contribuem para reduzir risco, melhorar qualidade ou entregar valor precisam ser questionados. O próprio processo deve ser revisto. Acrescentar controles sem examinar sua função pode afastar o fluxo da necessidade que deveria atender. [E009]

## Produtos: manter responsabilidade pela evolução {#produtos}

Na orientação a produtos, a responsabilidade pela solução continua ao longo do tempo. A equipe acompanha sua evolução, manutenção e geração de valor. Isso muda o centro da atenção: cada entrega participa da trajetória de uma solução que continuará sendo desenvolvida. [E010]

A aula relaciona essa continuidade a uma **arquitetura de referência** e a componentes compartilhados, como autenticação, catálogo, pagamentos e notificações. Essas referências comuns ajudam a evitar que cada frente reconstrua soluções e introduza inconsistências. O compartilhamento precisa vir acompanhado de condições para que outros times consigam utilizar e acompanhar os componentes. [E010]

Um **kit de produto**, na exposição, reúne visão, diretrizes de arquitetura, catálogo, templates e módulos. Sua função é oferecer referências comuns para a evolução: a autonomia da equipe pode se apoiar em padrões já estabelecidos. O material não detalha a implementação de um kit específico. [E011]

### Compartilhar também exige combinar a evolução

Considere o componente de autenticação mencionado na aula. Se várias partes de uma solução dependem dele, alterar seu funcionamento exige atenção aos acordos de uso. A governança leve discutida estabelece regras mínimas para evolução, descontinuação e migração. [E010, E012]

Nesse contexto, **contratos de API e eventos** tornam explícitos os acordos de integração; contratos claros, versionados e testáveis ajudam a acompanhar mudanças. Os testes de contrato verificam esses acordos, enquanto o changelog registra alterações. Esses elementos permitem discutir dependências de maneira concreta: o que mudou e o que precisa ser acompanhado por quem utiliza o componente? [E012]

A aula apresenta o cuidado com a passagem de uma versão para outra, mas não desenvolve regras técnicas completas de versionamento. O ponto de estudo é a responsabilidade pela continuidade: reutilizar um componente envolve também coordenar sua evolução. [E012]

## Projetos: delimitar a entrega {#projetos}

Projetos organizam iniciativas com escopo, prazo, orçamento e marcos. Uma migração de gateway, uma adequação regulatória ou uma implantação são exemplos tratados na aula. A delimitação permite discutir o que deve ser entregue, em quais condições será aceito e como o avanço será acompanhado. [E013]

**Exemplo fictício/didático, inspirado na migração de gateway citada na aula.** Uma equipe recebe a responsabilidade por uma migração com prazo e objetivo definidos. Para organizar a iniciativa, precisa explicitar a entrega pretendida, seus marcos e critérios de aceite. Pode planejar incrementos e janelas de liberação, verificando também a possibilidade de retorno à versão anterior. Esse é um raciocínio organizacional; a fonte não fornece um roteiro técnico de migração. [E013–E014]

**Projeto não exige uma única liberação ao final.** A aula admite marcos com entregas incrementais e o uso de uma esteira comum de integração e entrega contínuas, identificada como CI/CD. A disciplina de prazo e escopo pode conviver com incrementos e verificações ao longo da iniciativa. [E014]

O acompanhamento pode observar marcos, desvios de prazo e custo e defeitos por etapa. Os critérios de aceite precisam ser objetivos, sem se transformar automaticamente em burocracia excessiva. Assim, a delimitação do projeto deve ajudar a decidir e verificar a entrega. [E013–E014]

## Programas: coordenar dependências {#programas}

Programas coordenam iniciativas interdependentes em direção a um objetivo estratégico. Na transformação digital usada como exemplo na aula, aparecem frentes de identidade, integração, aplicativo e infraestrutura. O avanço de uma pode depender de condições produzidas por outra. [E015]

Por isso, acompanhar somente o andamento isolado de cada frente é insuficiente para compreender o conjunto. Um atraso que bloqueia outras iniciativas precisa ser tratado na coordenação. A governança do programa deve ajudar a resolver impedimentos e dependências, além de comunicar o estado das entregas. [E015]

A priorização pode considerar **valor e risco**, inclusive o efeito de desbloqueio. Uma iniciativa que permite o avanço de outras pode precisar subir de prioridade. Sincronizar liberações é outra forma de tratar a relação entre as frentes: a entrega de uma parte deve ser coordenada com aquilo de que as demais precisam. [E016]

**Exemplo fictício/didático, derivado das frentes de transformação da aula.** Se uma entrega do aplicativo depende de uma iniciativa de identidade ainda pendente, a coordenação precisa tornar essa dependência visível e decidir como tratá-la. A justificativa da prioridade passa a incluir o trabalho que poderá avançar quando o bloqueio for resolvido. A fonte sustenta esse raciocínio de coordenação, sem impor uma sequência técnica universal. [E015–E016]

## Diagnosticar e combinar {#escolha}

A escolha começa pelo trabalho que precisa ser organizado. A aula apresenta pistas para o diagnóstico e admite que o arranjo mude conforme as dificuldades observadas. [E018–E019]

| Situação observada | Foco que merece atenção | Justificativa |
| --- | --- | --- |
| Muitas solicitações repetidas, necessidade de auditoria ou fila com lead time instável | Processos | Tornar entrada, fluxo, critérios e acompanhamento mais explícitos |
| Evolução permanente e reconstrução de soluções semelhantes | Produtos | Sustentar continuidade, arquitetura e reutilização |
| Entrega com prazo e escopo definidos | Projetos | Dar atenção a marcos, riscos e critérios de aceite |
| Bloqueios entre iniciativas relacionadas | Programas | Coordenar dependências e objetivos comuns |

Essa tabela reúne os critérios de escolha e os sinais de mudança discutidos na aula e nos slides. Ela orienta a análise do contexto; as combinações continuam possíveis. [E018–E019]

### O caso educacional

O cenário educacional apresentado permite enxergar os quatro focos na mesma organização:

- **Serviços recorrentes:** o atendimento pode ser organizado por processos, com catálogo, compromissos de atendimento e controle do trabalho em andamento, identificado como WIP no material.
- **Plataforma acadêmica:** a continuidade da evolução favorece o foco em produto, com roadmap, arquitetura e versionamento.
- **Portal de matrícula com prazo:** a entrega delimitada pede atenção de projeto, com marcos, riscos e mudanças.
- **Transformação envolvendo secretaria, financeiro, biblioteca e TI:** as relações entre as frentes pedem coordenação de programa.

O caso é didático e foi apresentado na aula; não constitui relato empírico verificado. Sua utilidade é mostrar que diferentes demandas da mesma instituição podem precisar de focos distintos. [E020]

A combinação também exige cuidado com excessos: processos podem se tornar burocráticos; produtos sem governança podem apresentar volatilidade; projetos isolados podem fragmentar soluções; programas sem foco podem elevar a complexidade. A discussão da aula não oferece uma mistura fixa: pede atenção ao equilíbrio e às necessidades concretas. [E017]

## Pessoas e ciclos {#equipes-ciclos}

O modelo organizacional afeta responsabilidades, autonomia e passagens de trabalho entre equipes. Em processos, aparecem responsáveis pelo catálogo, pelos gates e pelas métricas. Em produtos, ganha destaque a responsabilidade continuada pela solução, chamada de ownership, com equipes multidisciplinares. Em projetos, o acompanhamento enfatiza riscos, prazo e escopo; em programas, dependências e objetivos compartilhados. Esses papéis expressam necessidades de coordenação, não um organograma obrigatório. [E021]

**Handoff** é a passagem de uma atividade entre equipes. A aula associa essas passagens a riscos de espera, perda de contexto e retrabalho. Se uma equipe recebe o trabalho sem compreender o que já foi decidido ou o que ainda precisa ser validado, a continuidade da atividade fica prejudicada. Multidisciplinaridade, automação, responsabilidades claras e padrões são apoios discutidos para lidar com as passagens e distribuir a carga de trabalho. [E022]

Os ciclos também apresentam ênfases diferentes:

| Foco organizacional | Forma de acompanhar o ciclo apresentada |
| --- | --- |
| Processos | Ciclos curtos e repetitivos |
| Produtos | Roadmap, épicas e incrementos |
| Projetos | Marcos e incrementos |
| Programas | Sincronização das iniciativas |

Na trilha de produto apresentada, o roadmap orienta a evolução, que se desdobra em épicas e implementação até a liberação. O interesse aqui é reconhecer essa organização do percurso, sem transformar os termos em um método detalhado que as fontes não desenvolvem. [E023, E027]

**Modelo organizacional e abordagem de desenvolvimento são dimensões distintas.** A aula admite abordagens cascata, ágeis ou híbridas conforme o contexto. Portanto, identificar uma iniciativa como projeto não permite concluir que ela terá uma única entrega; identificar um produto também não define, sozinho, todos os passos do desenvolvimento. [E014, E023]

## Uma base técnica compartilhada {#esteira}

Os quatro arranjos podem compartilhar suporte técnico. A aula exemplifica uma esteira de CI/CD com a sequência abaixo: [E024]

1. **Lint:** análise básica do código.
2. **Build:** construção do artefato.
3. **Testes unitários:** verificação de partes isoladas.
4. **Testes de contrato:** verificação dos acordos de integração.
5. **Publicação de artefatos:** disponibilização dos artefatos produzidos.
6. **Deploy:** implantação no ambiente.
7. **Verificação pós-deploy:** conferência após a implantação.

A sequência serve para compreender a base exemplificada na aula. Ela não é um tutorial de ferramentas nem uma definição de todas as esteiras possíveis. Sua presença em diferentes arranjos mostra como o suporte técnico pode ser comum mesmo quando as prioridades organizacionais mudam. [E017, E024]

### Duas trilhas no mesmo SaaS

No cenário didático de SaaS apresentado na aula, há evolução contínua do produto e atendimento de suporte ou correções recorrentes. O material distingue dois percursos: [E027]

- **Produto:** roadmap → épicas → implementação → release.
- **Processos:** catálogo → priorização → correção ou ajuste → publicação.

As duas trilhas compartilham CI/CD. O cenário também utiliza um componente comum de autenticação, versionado e documentado, e menciona feature flags para uma liberação controlada. As fontes não detalham a implementação desse mecanismo. [E027]

A relação importante é organizacional: o fluxo de evolução e o fluxo de atendimento mantêm finalidades diferentes, mas podem utilizar a mesma base de construção, testes e implantação. Logo, observar somente a existência da esteira não permite identificar se o trabalho está sendo organizado prioritariamente como produto, processo, projeto ou programa. [E017, E024, E027]

> **Visual planejado — SVG próprio:** duas trilhas do caso SaaS e uma faixa comum com a esteira exemplificada. Evidências: E024 e E027. Caminho sugerido pelo plano, ainda a produzir: `/assets/tecnologias-emergentes-aula-ao-vivo-02/fluxos-esteira.svg`.

## Casos para consolidar {#casos}

Os três casos abaixo são **cenários didáticos apresentados na aula**. Os resultados descritos pertencem aos exemplos e não demonstram ganhos garantidos em organizações reais. [E025–E027]

| Cenário | Arranjo enfatizado | O que o caso ajuda a compreender |
| --- | --- | --- |
| Atendimento no setor público | Processos | Entrada centralizada, catálogo, critérios, fluxo, gates leves e evidências automáticas para auditoria organizam o atendimento e sua rastreabilidade. |
| Banco ou fintech | Produto e projeto | Plataforma, componentes e roadmap sustentam a continuidade; uma adequação com prazo recebe marcos e incrementos. O exemplo relaciona a combinação a reuso, menos retrabalho e menor risco de uma implantação única. |
| SaaS | Produto e processos | A evolução pelo roadmap convive com o atendimento pelo catálogo, compartilhando a esteira técnica. O cenário ilustra previsibilidade do atendimento junto à continuidade da evolução. |

No primeiro caso, a pergunta é como tornar o atendimento controlável e verificável. No segundo, como atender uma entrega delimitada preservando referências de uma plataforma. No terceiro, como sustentar evolução e demandas recorrentes na mesma organização. A contribuição dos casos está em explicitar a relação entre necessidade e arranjo. [E025–E027]

## Síntese {#sintese}

Para estudar os modelos, associe cada um à necessidade que destaca: **processos tornam o trabalho repetido acompanhável; produtos sustentam a evolução contínua; projetos delimitam entregas; programas coordenam iniciativas relacionadas**. Depois, examine como as necessidades se encontram no mesmo contexto. [E003–E004, E018]

A qualidade do arranjo depende de prioridades, responsabilidades, fluxos e critérios coerentes com a demanda. Equipes, ciclos e indicadores participam dessa organização, enquanto uma esteira técnica pode apoiar os diferentes focos. [E002, E021–E024]

## Prática guiada {#pratica}

**Exercício fictício, elaborado a partir dos conceitos e do caso educacional da aula.** Uma instituição atende chamados recorrentes, mantém uma plataforma acadêmica em evolução, prepara um portal de matrícula com data definida e conduz iniciativas de secretaria, financeiro, biblioteca e TI que dependem umas das outras.

1. Associe cada demanda a um foco organizacional e justifique. Se combinar modelos, explique qual necessidade cada um atende.
2. Desenhe o fluxo de um chamado: entrada, planejamento, implementação, testes, homologação e publicação. Indique uma evidência de entrada, um gate e uma saída verificável.
3. Escolha observações para acompanhar o tempo de atendimento, a quantidade de demandas concluídas e o retorno de chamados. Explique a diferença entre essas observações.
4. Uma iniciativa está impedindo o avanço de outra. Descreva o que a coordenação precisa tornar visível e como pode justificar a prioridade de uma entrega que desbloqueie outras.
5. Explique como uma esteira compartilhada pode apoiar tanto a evolução da plataforma quanto o atendimento recorrente. A existência dessa esteira define o modelo organizacional?

## Questionário de recuperação ativa {#questionario}

Tente responder antes de consultar os comentários.

1. Processo e projeto são sinônimos? Como podem se relacionar?
2. A orientação a produtos exige que cada equipe reconstrua seus componentes?
3. Um projeto precisa terminar em uma única liberação?
4. O que diferencia um programa de vários projetos independentes?
5. Qual é a diferença entre lead time e throughput?
6. Um modelo organizacional determina uma abordagem exclusivamente ágil ou cascata?
7. Qual risco existe na passagem de trabalho entre equipes?
8. Como produto e processos coexistem no caso SaaS da aula?

## Respostas comentadas {#respostas}

### Prática guiada

**1. Classificação justificada.** Chamados recorrentes favorecem processos; a plataforma em evolução, produto; o portal com data definida, projeto; as iniciativas relacionadas entre áreas, programa. A justificativa deve explicitar repetição, continuidade, delimitação ou dependência. Combinações coerentes também são válidas: um projeto pode usar processos e contribuir para um produto. Retome [diagnosticar e combinar](#escolha). [E004, E018, E020]

**2. Fluxo e validação.** Uma resposta possível começa com evidência do problema e segue pelo planejamento, implementação, testes, homologação e publicação. O gate pode exigir a validação da correção antes do avanço; a saída precisa corresponder a uma entrega verificável, como a correção validada. O critério central é incluir validação além da programação; não há um único desenho aceitável. Retome [processos](#processos). [E005–E007]

**3. Observações distintas.** Lead time acompanha o intervalo entre entrada e entrega; throughput acompanha quantas demandas terminam por período; reabertura acompanha demandas que voltam ao atendimento. Cumprimento de SLA também pode observar o atendimento diante dos compromissos definidos. Não se deve tratar tempo, quantidade e retorno como a mesma medida. [E008]

**4. Dependência e prioridade.** A coordenação deve explicitar qual entrega bloqueia qual frente e tratar o impedimento à luz do objetivo comum. Uma iniciativa pode ganhar prioridade pelo trabalho que desbloqueia; a sincronização das liberações também precisa ser considerada. A resposta não depende de inventar uma sequência técnica, mas de justificar a coordenação. Retome [programas](#programas). [E015–E016]

**5. Suporte compartilhado.** Construção, testes, publicação, implantação e verificação podem apoiar os dois percursos. O modelo depende de como prioridades e responsabilidades são organizadas: o caso SaaS mantém uma trilha de evolução e outra de atendimento utilizando a mesma base técnica. Retome [a esteira](#esteira). [E017, E024, E027]

### Questionário

**1. Não.** O processo pode ser repetido e mantido ao longo do tempo; o projeto busca uma entrega temporária e delimitada. Um projeto pode usar processos para alcançar seu objetivo. [E004]

**2. Não.** Arquitetura de referência e componentes compartilhados ajudam a evitar reconstruções e inconsistências. A governança de evolução, os contratos e os registros de mudanças ajudam a coordenar o uso dessas referências. [E010–E012]

**3. Não.** A aula admite marcos com entregas incrementais, janelas de liberação e uma esteira comum de CI/CD. O fato de haver prazo e escopo não exige concentrar toda a implantação no encerramento. [E014]

**4. A relação estratégica e as dependências coordenadas.** Um programa conecta iniciativas em direção a um resultado mais amplo. A coordenação precisa tratar bloqueios, prioridades e sincronização, além de acompanhar o estado de cada frente. [E015–E016]

**5. Lead time é intervalo; throughput é quantidade por período.** O primeiro acompanha da entrada à entrega de uma demanda; o segundo acompanha o volume concluído em um período. As duas observações respondem a perguntas diferentes sobre o fluxo. [E008]

**6. Não.** A aula distingue o arranjo organizacional das abordagens cascata, ágeis ou híbridas. Essas escolhas precisam considerar o contexto, e um projeto pode trabalhar com incrementos. [E014, E023]

**7. Espera, perda de contexto e retrabalho.** A passagem, chamada de handoff, exige atenção à continuidade do trabalho e às responsabilidades. Multidisciplinaridade, automação e padrões são apoios discutidos na aula. [E021–E022]

**8. Por dois percursos com uma base comum.** O produto segue roadmap, épicas, implementação e release; o atendimento recorrente segue catálogo, priorização, correção ou ajuste e publicação. Ambos usam a mesma esteira técnica. [E027]

## Referências e limites {#referencias}

### Fonte principal — aula ao vivo

**Tecnologias emergentes em engenharia de software — transcrição da aula ao vivo 02.** Arquivo: `Matérias/Tecnologias emergentes em engenharia de software/transcrição/aula02.txt`.

- **4:03–13:23:** contexto, quatro modelos e distinções entre processo, projeto e programa.
- **13:42–23:07:** processos, entradas e saídas, gates, indicadores e revisão do processo.
- **23:14–27:21:** produtos, componentes, kit e governança de evolução.
- **27:32–31:25:** projetos, marcos, incrementos e acompanhamento.
- **31:38–35:54:** programas, dependências, prioridades e sincronização.
- **36:26–54:51:** coexistência, escolha, sinais de mudança e caso educacional.
- **56:25–1:07:16:** equipes, handoffs, ciclos e esteira técnica.
- **1:07:55–1:11:31:** caso didático de atendimento no setor público.
- **1:13:33–1:22:03:** caso didático de banco ou fintech.
- **1:22:13–1:28:49:** caso didático de SaaS.

### Complemento — slides da aula

**Rômulo Santos. Aula 2 — Tecnologias emergentes em engenharia de software.** Arquivo: `Matérias/Tecnologias emergentes em engenharia de software/slides/aula02.pdf`. A numeração abaixo corresponde às páginas físicas do PDF, contadas a partir de 1.

- **Páginas 3–4:** contexto e caracterização dos modelos.
- **Páginas 5–6:** processos e indicadores.
- **Página 7:** produtos e governança.
- **Página 8:** projetos.
- **Página 9:** programas.
- **Páginas 10–13:** combinação, escolha e transição entre arranjos.
- **Página 14:** caso educacional.
- **Páginas 15–16:** equipes, ciclos e esteira técnica.
- **Páginas 17–19:** casos didáticos de setor público, banco ou fintech e SaaS.

### Limites do material

A transcrição é automática e contém formulações imprecisas; este guia utiliza os trechos contextualizados e o apoio dos slides para preservar as distinções entre projeto temporário e processo duradouro, os indicadores de fluxo e os sinais de instabilidade. Os casos e seus resultados são didáticos, sem validação empírica externa neste estudo. [E004, E008, E019, E025–E027]

Não foi utilizado livro, pois ele está ausente na pasta da matéria. As fontes disponíveis também não sustentam um tutorial de ferramentas, regras completas de versionamento ou uma metodologia quantitativa de métricas; por isso, esses tópicos não são desenvolvidos aqui. A bibliografia externa citada pelos slides não foi consultada.

<!-- Nota de produção: IDs E001–E027 são rastreabilidade do dossiê; remover marcadores [E...] na montagem pública, preservando referências legíveis. Converter âncoras {#...} para IDs HTML. Substituir marcadores de visuais somente por ativos efetivamente produzidos. -->
