# Modelos de fábrica de software: organizar demandas, equipes e entregas

**Aula ao vivo 02 · Tecnologias Emergentes em Engenharia de Software**

Uma operação pode ter, ao mesmo tempo, correções recorrentes, uma plataforma em evolução e uma obrigação com data fixa. Tratar tudo como uma fila indiferenciada dificulta a prioridade e o acompanhamento. O modelo organizacional distribui decisões, responsabilidades, fluxo e indicadores conforme a natureza do trabalho. Processos, produtos, projetos e programas são quatro arranjos que podem coexistir; nenhum responde melhor a todas as situações.<sup><a id="citacao-1-1" href="#referencia-1" aria-label="Ver referência 1">1</a></sup>

Neste estudo, você aprenderá a escolher e combinar esses arranjos, reconhecer seus limites e relacioná-los às equipes e à entrega técnica. Para retomar a base operacional com mais detalhes, há o estudo [Fábrica de software: da demanda à entrega confiável](/tecnologias-emergentes-aula-ao-vivo-01/). A leitura anterior é opcional: os conceitos necessários serão definidos aqui.

## A demanda orienta a organização {#organizacao}

**Exemplo didático fictício:** uma organização recebe muitos pedidos semelhantes, mantém componentes duplicados em vários sistemas e precisa cumprir uma adequação com prazo obrigatório. Uma ferramenta nova pode tornar a fila mais visível, mas não decide sozinha quem prioriza a adequação, quem cuida dos componentes e como os pedidos rotineiros serão atendidos. A dificuldade envolve a organização do trabalho, não apenas a rotina de reuniões ou o recurso utilizado para registrar tarefas.<sup><a id="citacao-1-2" href="#referencia-1" aria-label="Ver referência 1">1</a></sup>

O modelo define **quem decide, como se prioriza, por onde a demanda passa e o que demonstra avanço**. Se o trabalho é repetitivo, faz sentido explicitar entradas e saídas. Se uma base comum evolui continuamente, alguém precisa cuidar de seus componentes e sua direção. Se há término e objetivo delimitados, é necessário acompanhar marcos. Se várias frentes dependem umas das outras, é preciso coordená-las.<sup><a id="citacao-1-3" href="#referencia-1" aria-label="Ver referência 1">1</a></sup>

### Um vocabulário para não confundir as camadas

Um **processo** organiza como o trabalho acontece do pedido à entrega. Um **produto** mantém uma solução ou plataforma em evolução contínua. Um **projeto** é temporário: tem objetivo e entrega delimitados, com término. Um **programa** coordena iniciativas relacionadas para um resultado estratégico compartilhado; não é apenas uma lista de projetos independentes.<sup><a id="citacao-1-4" href="#referencia-1" aria-label="Ver referência 1">1</a></sup><sup><a id="citacao-2-1" href="#referencia-2" aria-label="Ver referência 2">2</a></sup>

Essas definições não criam caixas que se excluem. Um processo de revisão pode ser usado dentro de um projeto. Uma plataforma de produto pode precisar de um projeto regulatório com prazo. Um programa pode coordenar iniciativas que usam processos padronizados. Já o **portfólio** é o conjunto de iniciativas que disputam capacidade; não deve ser automaticamente tratado como sinônimo de programa.<sup><a id="citacao-1-5" href="#referencia-1" aria-label="Ver referência 1">1</a></sup><sup><a id="citacao-2-2" href="#referencia-2" aria-label="Ver referência 2">2</a></sup>

A camada organizacional também não escolhe, por si só, um único método de equipe. Ela orienta decisões e conexões entre áreas; a abordagem cotidiana organiza o modo de executar. Essa distinção permite combinar arranjos sem imaginar que toda a operação precisa seguir uma única cadência.<sup><a id="citacao-3-1" href="#referencia-3" aria-label="Ver referência 3">3</a></sup>

## Processos: repetição com critérios e evidências {#processos}

A orientação a processos é adequada ao alto volume de trabalho repetitivo, à necessidade de previsibilidade e às exigências de rastreabilidade. O fluxo explicita **entrada, atividades, validações e saída**. Não basta declarar que algo foi entregue: também é preciso conseguir demonstrar como passou pelas verificações combinadas. A padronização orienta o trabalho sem eliminar o julgamento técnico diante de risco ou exceção.<sup><a id="citacao-4-1" href="#referencia-4" aria-label="Ver referência 4">4</a></sup>

O **catálogo de serviços** é um acordo que torna os tipos de pedido reconhecíveis. Antes de prometer um prazo, a equipe precisa saber que informação permite começar e que evidência demonstra conclusão. Os três serviços abaixo formam um catálogo exemplificativo; não são uma lista universal nem impõem o mesmo prazo a trabalhos diferentes.<sup><a id="citacao-4-2" href="#referencia-4" aria-label="Ver referência 4">4</a></sup>

| Serviço exemplificativo | Entrada mínima | Saída verificável |
| --- | --- | --- |
| Nova interface de programação de aplicações — API, uma interface de integração entre sistemas | Contrato inicial e exemplos de uso | Teste de contrato aprovado e documentação publicada. |
| Evolução de tela | Protótipo simples e critérios de aceite | Casos de teste executados e notas de versão, ou *release notes*, visíveis. |
| Correção crítica P1 — prioridade crítica no catálogo deste exemplo | Evidência do defeito | Correção emergencial, ou *hotfix*, validada e retorno de versão, ou *rollback*, testado. |

A tabela liga o pedido à comprovação do resultado. Um contrato descreve os acordos da integração; seu teste verifica se esses acordos são respeitados. Critérios de aceite descrevem o resultado esperado. O teste de retorno importa porque uma correção em produção também precisa de condições de recuperação.<sup><a id="citacao-4-3" href="#referencia-4" aria-label="Ver referência 4">4</a></sup>

### Do catálogo à versão liberada

O **backlog de serviços** é a fila visível de demandas. A triagem e a priorização organizam o que chega; o planejamento prepara o trabalho; a implementação produz a mudança; a revisão por pares e os **gates**, pontos de verificação objetiva, examinam condições de avanço. Testes verificam o comportamento, a homologação valida a entrega conforme os acordos e a publicação disponibiliza o resultado preparado. As saídas incluem versão liberada, lições aprendidas e métricas para revisar a operação.<sup><a id="citacao-5-1" href="#referencia-5" aria-label="Ver referência 5">5</a></sup>

Um fluxo por **raias** distribui visualmente responsabilidades entre gestão, engenharia, qualidade e operação. Sua finalidade é deixar claras as conexões: quem fornece informação para a próxima atividade, quem verifica e qual resultado precisa seguir adiante. A qualidade não deve aparecer apenas como uma equipe que recebe problemas no fim; as evidências precisam ser produzidas ao longo do fluxo.<sup><a id="citacao-5-2" href="#referencia-5" aria-label="Ver referência 5">5</a></sup>

### Medir o percurso, e não apenas a programação

O **lead time** mede o tempo total da entrada até a entrega, conforme os marcos definidos para o serviço. O **throughput** mede quantas demandas são concluídas em um intervalo. O **percentual no acordo de nível de serviço**, ou SLA, mostra a proporção que cumpre o compromisso combinado. A **taxa de reabertura** sinaliza trabalho que retorna e pode indicar retrabalho ou qualidade não confirmada. Cumprir prazo e evitar reabertura são dimensões diferentes; um indicador não substitui o outro.<sup><a id="citacao-6-1" href="#referencia-6" aria-label="Ver referência 6">6</a></sup>

**Exemplo didático fictício:** o código fica pronto rapidamente, mas aguarda na fila de homologação. O tempo de programação pode ser pequeno e o lead time continuar alto. A investigação deve acompanhar o percurso inteiro, inclusive espera e passagem entre áreas. O **WIP**, trabalho em andamento, mostra a simultaneidade de itens; examinar e ajustar seus limites pode ajudar a tratar filas, sem garantir sozinho uma melhora.<sup><a id="citacao-6-2" href="#referencia-6" aria-label="Ver referência 6">6</a></sup><sup><a id="citacao-7-1" href="#referencia-7" aria-label="Ver referência 7">7</a></sup>

P50 e P90 permitem observar diferentes partes dos tempos de atendimento: P50 indica a mediana e P90 ajuda a olhar a cauda dos atendimentos mais demorados. Essa leitura complementa o tempo típico e evita ignorar casos de espera prolongada. Os números precisam de um recorte comum por serviço; não são garantia de prazo para cada pedido isolado.<sup><a id="citacao-6-3" href="#referencia-6" aria-label="Ver referência 6">6</a></sup>

### Quando o controle vira burocracia

O “teatro de processo” ocorre quando etapas, aprovações ou documentos permanecem sem reduzir risco, encurtar o caminho ou sustentar qualidade. Simplificar não significa retirar controles úteis: significa perguntar qual função cada controle cumpre e qual evidência demonstra essa utilidade. Uma revisão trimestral pode ser uma rotina de melhoria, mas a frequência é uma escolha da operação, não uma obrigação universal.<sup><a id="citacao-8-1" href="#referencia-8" aria-label="Ver referência 8">8</a></sup>

## Produtos: evolução contínua e reuso governado {#produtos}

Na orientação a produtos, o centro é a evolução contínua de uma solução, plataforma ou base compartilhada. Uma **arquitetura de referência** orienta como as partes se organizam; componentes reutilizáveis e versionados evitam recriar a mesma solução em vários lugares. Autenticação, catálogo, pagamentos e notificações são exemplos de componentes que podem servir a diferentes produtos.<sup><a id="citacao-9-1" href="#referencia-9" aria-label="Ver referência 9">9</a></sup>

As **variabilidades** são diferenças previstas entre produtos que compartilham uma base. Compartilhar não obriga todas as soluções a serem iguais: é necessário reconhecer o que é comum e o que varia. O benefício do reuso depende de uma evolução controlada, porque alterar uma parte compartilhada pode afetar vários consumidores.<sup><a id="citacao-9-2" href="#referencia-9" aria-label="Ver referência 9">9</a></sup>

### Reusar não é copiar e abandonar

Componentes precisam de contratos testáveis de API e de eventos, documentação, versões e histórico de mudanças, chamado de **changelog**. Os contratos de eventos também expressam acordos de integração que precisam ser respeitados. Esses elementos permitem examinar o que mudou e orientar a migração. Copiar código cria novas cópias a manter; cuidar de um componente como produto interno mantém responsabilidade por sua evolução e compatibilidade.<sup><a id="citacao-9-3" href="#referencia-9" aria-label="Ver referência 9">9</a></sup>

Um **kit de produto** reúne visão, diretrizes de arquitetura, catálogo de componentes e modelos de serviço, ou *templates*. A visão orienta a evolução; as diretrizes oferecem referências para decisões; o catálogo torna ativos comuns encontráveis; os modelos ajudam a iniciar trabalho dentro desses padrões. A equipe preserva autonomia, acompanhada de responsabilidade pela base que utiliza e oferece.<sup><a id="citacao-10-1" href="#referencia-10" aria-label="Ver referência 10">10</a></sup>

**Exemplo didático fictício:** o componente de autenticação evolui da versão v1 para v2. Não basta publicar a nova versão e presumir que todos os sistemas mudarão juntos. É necessário orientar adoção e migração, explicitar a janela em que a versão anterior será descontinuada e manter documentação das mudanças. A janela de depreciação — a retirada planejada do uso da versão antiga — dá previsibilidade a quem depende dela. Autonomia para evoluir exige cuidar dessa transição.<sup><a id="citacao-10-2" href="#referencia-10" aria-label="Ver referência 10">10</a></sup><sup><a id="citacao-9-4" href="#referencia-9" aria-label="Ver referência 9">9</a></sup>

### Medidas de evolução e reuso

Adoção de componentes, defeitos por versão e lead time de evolução ajudam a observar se a base compartilhada é utilizada e pode mudar com qualidade. Contar tarefas concluídas, sozinho, não responde a essas perguntas: uma equipe pode produzir muitas tarefas enquanto os sistemas continuam duplicando soluções ou sofrendo quebras de compatibilidade.<sup><a id="citacao-11-1" href="#referencia-11" aria-label="Ver referência 11">11</a></sup>

Outro indicador é o **cycle time por épica**. Uma épica agrupa trabalho de evolução do produto; seu tempo de execução exige que a equipe explicite o recorte medido. Não se deve presumir uma fronteira universal nem igualá-lo automaticamente ao lead time da entrada à entrega. Um indicador só ajuda quando todos compreendem o que ele inclui.<sup><a id="citacao-11-2" href="#referencia-11" aria-label="Ver referência 11">11</a></sup>

## Projetos: objetivo temporário com entregas incrementais {#projetos}

Projetos organizam entregas com escopo, prazo, orçamento e marcos definidos. Migração, adequação fiscal e implantação regional são exemplos. A **estrutura analítica do projeto**, ou EAP, pode ser enxuta: desdobrar as entregas de modo que aceite e verificação fiquem visíveis. A **baseline** é a referência de escopo, cronograma e orçamento utilizada para acompanhar desvios; não elimina a necessidade de avaliar mudanças e riscos.<sup><a id="citacao-12-1" href="#referencia-12" aria-label="Ver referência 12">12</a></sup>

O risco de uma data fixa é concentrar tudo em uma única implantação ao final, um *big bang*. A alternativa é combinar marcos com entregas incrementais conectadas à mesma esteira técnica usada pela operação. Ter término definido não impede dividir a transição nem verificar seu resultado em partes.<sup><a id="citacao-13-1" href="#referencia-13" aria-label="Ver referência 13">13</a></sup>

### Exemplo didático fictício: migração com prazo

1. **Delimitar o resultado e os marcos.** A equipe identifica o que deve estar migrado ao término, desdobra entregas e define como cada uma será aceita. A EAP e a referência de acompanhamento tornam os compromissos observáveis.<sup><a id="citacao-12-2" href="#referencia-12" aria-label="Ver referência 12">12</a></sup>
2. **Preparar incrementos e validações.** Cada incremento passa por geração do artefato, o *build*, testes e homologação. As janelas de liberação conectam o cronograma à execução técnica.<sup><a id="citacao-13-2" href="#referencia-13" aria-label="Ver referência 13">13</a></sup>
3. **Verificar condições antes da entrada em operação.** No *go-live*, a equipe precisa conhecer contratos, comportamento dos indicadores e condição de retorno. **Flags** controlam a disponibilização de funcionalidades; **rollback** testado oferece uma possibilidade de retorno. Ter o recurso previsto sem validar seu funcionamento deixa uma condição relevante em aberto.<sup><a id="citacao-13-3" href="#referencia-13" aria-label="Ver referência 13">13</a></sup>
4. **Acompanhar o que foi combinado.** Cumprimento de marcos, desvios de prazo e custo e defeitos por etapa ajudam a rever o plano e tratar riscos. O acompanhamento precisa ligar entrega e evidência, em vez de apenas informar que a equipe está ocupada.<sup><a id="citacao-12-3" href="#referencia-12" aria-label="Ver referência 12">12</a></sup><sup><a id="citacao-13-4" href="#referencia-13" aria-label="Ver referência 13">13</a></sup>

A padronização técnica continua útil em um projeto temporário. Criar uma esteira isolada para cada iniciativa dificulta compartilhar as condições de qualidade; integrar o projeto à base comum conecta o compromisso de prazo ao modo de entregar.<sup><a id="citacao-13-5" href="#referencia-13" aria-label="Ver referência 13">13</a></sup>

## Programas: dependências e resultado compartilhado {#programas}

Um programa coordena frentes relacionadas que precisam convergir para um objetivo estratégico. Identidade, integração, aplicações, interoperabilidade — comunicação entre sistemas e organizações — e infraestrutura podem ser frentes distintas do mesmo resultado. Concluir tarefas de cada frente isoladamente não garante que o serviço conjunto esteja disponível: uma dependência pode continuar bloqueando a entrega.<sup><a id="citacao-14-1" href="#referencia-14" aria-label="Ver referência 14">14</a></sup>

**Exemplo didático fictício:** para um conjunto de aplicações entrar em operação, uma integração precisa estar disponível; essa integração depende de uma solução de identidade. Neste desenho ilustrativo, a relação pode ser lida como **identidade → integração → aplicações**. A disposição é um exemplo próprio, não uma ordem obrigatória de toda arquitetura. Seu propósito é mostrar por que uma entrega que habilita outras merece atenção na prioridade.<sup><a id="citacao-14-2" href="#referencia-14" aria-label="Ver referência 14">14</a></sup>

### Coordenar é produzir decisões

O mapa de dependências torna visível quem depende de quê e em qual momento. A alocação considera valor e risco, e pode priorizar uma entrega que desbloqueia várias outras. Riscos relevantes pedem contingências; janelas de liberação precisam ser sincronizadas para que frentes relacionadas consigam trabalhar juntas.<sup><a id="citacao-14-3" href="#referencia-14" aria-label="Ver referência 14">14</a></sup>

Os pontos periódicos de sincronização devem tratar bloqueios, apostas e prioridades. Uma reunião que apenas coleta status pode registrar o atraso sem remover a condição que o produz. A frequência precisa ser proporcional à necessidade de coordenação: dependências e riscos orientam o intervalo, sem impor uma periodicidade única a todos os programas.<sup><a id="citacao-15-1" href="#referencia-15" aria-label="Ver referência 15">15</a></sup>

Throughput do conjunto de iniciativas, dependências resolvidas por ciclo, cumprimento de grandes entregas e alinhamento aos objetivos estratégicos ajudam a avaliar essa coordenação. Resolver uma dependência é relevante quando permite avançar o resultado compartilhado; contar atividades de reunião não demonstra esse efeito.<sup><a id="citacao-14-4" href="#referencia-14" aria-label="Ver referência 14">14</a></sup>

## Escolher, combinar e ajustar os modelos {#escolha}

A escolha começa pelo tipo de demanda, não pela preferência por um rótulo. Uma organização pode ter atendimento recorrente, plataforma compartilhada, iniciativas com marcos obrigatórios e transformação transversal. O quadro abaixo resume o problema que cada arranjo ajuda a organizar e o risco de perder o equilíbrio.<sup><a id="citacao-16-1" href="#referencia-16" aria-label="Ver referência 16">16</a></sup>

| Arranjo | Natureza da demanda e decisão central | Evidência de avanço | Risco de desequilíbrio |
| --- | --- | --- | --- |
| Processos | Repetição auditável: tornar entrada, fluxo e saída previsíveis | Critérios cumpridos, prazo do serviço e qualidade verificada | Burocracia e isolamento por excesso de processo. |
| Produtos | Plataforma e evolução: cuidar da direção e da base reutilizável | Adoção, componentes compatíveis e evolução com qualidade | Volatilidade quando falta governança. |
| Projetos | Objetivo com limites: organizar escopo, recursos e marcos | Entregas aceitas e desvios acompanhados | Fragmentação quando a iniciativa fica isolada da operação. |
| Programas | Frentes relacionadas: coordenar dependências e prioridades | Bloqueios resolvidos e resultado compartilhado avançando | Complexidade quando a coordenação perde o foco. |

A matriz é uma síntese didática dos quatro arranjos, não uma classificação automática de empresas. Os controles e indicadores devem manter relação com o problema que se pretende resolver.<sup><a id="citacao-16-2" href="#referencia-16" aria-label="Ver referência 16">16</a></sup><sup><a id="citacao-4-4" href="#referencia-4" aria-label="Ver referência 4">4</a></sup><sup><a id="citacao-11-3" href="#referencia-11" aria-label="Ver referência 11">11</a></sup><sup><a id="citacao-12-4" href="#referencia-12" aria-label="Ver referência 12">12</a></sup><sup><a id="citacao-14-5" href="#referencia-14" aria-label="Ver referência 14">14</a></sup>

### Aplicação didática fictícia: uma instituição de ensino

O **suporte e as correções recorrentes** pedem processos que organizem entrada, prioridade e saída verificável. A **plataforma acadêmica** pede orientação a produto para sua evolução e base compartilhada. Um **portal de matrícula com prazo regulatório** pode exigir projeto com marcos e aceite. A articulação entre **secretaria, financeiro, biblioteca e tecnologia da informação — TI** pede coordenação de programa quando suas iniciativas dependem umas das outras para o resultado conjunto.<sup><a id="citacao-17-1" href="#referencia-17" aria-label="Ver referência 17">17</a></sup>

As quatro situações coexistem na mesma instituição. O portal pode ser produto em evolução e, ao mesmo tempo, receber uma adequação temporária organizada como projeto. Esse projeto utiliza processos de engenharia, enquanto o programa coordena as dependências com outras frentes. Classificar serve para tornar decisões claras, não para apagar as demais necessidades.<sup><a id="citacao-16-3" href="#referencia-16" aria-label="Ver referência 16">16</a></sup><sup><a id="citacao-17-2" href="#referencia-17" aria-label="Ver referência 17">17</a></sup>

### Sinal, hipótese, verificação e ajuste

Indicadores e dificuldades operacionais podem mostrar que a configuração precisa ser revista. O sinal inicia uma investigação; não prova uma causa sozinho. A sequência útil é observar o problema, formular uma hipótese, procurar evidências e testar um ajuste.<sup><a id="citacao-7-2" href="#referencia-7" aria-label="Ver referência 7">7</a></sup>

| Sinal observado | Hipótese a examinar | Possível direção de ajuste |
| --- | --- | --- |
| Lead time instável e filas | Entradas, padrões ou simultaneidade não estão ajudando o fluxo | Fortalecer processos, critérios, limites de WIP e acordos do serviço. |
| Duplicação e retrabalho entre equipes | Falta uma base comum mantida | Examinar organização de produto ou plataforma e catálogo de componentes. |
| Marcos obrigatórios em risco | Referências e gestão das mudanças estão insuficientes | Reforçar disciplina de projeto e acompanhamento dos compromissos. |
| Equipes bloqueadas entre si | Dependências não estão visíveis ou coordenadas | Elevar a coordenação de programa e integrar prioridades. |

O quadro orienta perguntas sustentadas pelos sinais. Confirmar a hipótese exige olhar o trabalho concreto; mudar o nome da equipe sem mudar decisões e acordos não resolve a condição investigada.<sup><a id="citacao-7-3" href="#referencia-7" aria-label="Ver referência 7">7</a></sup>

## Equipes, ciclos e base técnica comum {#equipes}

Cada modelo cria responsabilidades que precisam ter responsáveis identificáveis. Autonomia sem clareza sobre quem cuida da decisão pode apenas distribuir indefinições. O quadro relaciona o arranjo ao cuidado que sustenta sua operação.<sup><a id="citacao-18-1" href="#referencia-18" aria-label="Ver referência 18">18</a></sup>

| Arranjo | Responsabilidades que precisam estar cobertas |
| --- | --- |
| Processos | Manter catálogo, gates, acordos de serviço e medidas de fluxo. |
| Produtos | Cuidar da gestão de produto, arquitetura, versões e trabalho multidisciplinar. |
| Projetos | Acompanhar escopo, prazo, riscos e marcos. |
| Programas | Coordenar dependências, prioridades e objetivo global. |

A responsabilidade pela gestão de produto, também chamada de *product ownership*, não dispensa arquitetura e versionamento; da mesma forma, cuidar de projeto exige mais que atualizar datas. O desenho de papéis precisa corresponder às decisões do modelo.<sup><a id="citacao-18-2" href="#referencia-18" aria-label="Ver referência 18">18</a></sup>

### Reduzir atrito entre responsabilidades

Um **handoff** é a passagem de trabalho ou responsabilidade. Cada passagem pode trazer espera, perda de contexto e retrabalho. Não basta tornar cada área eficiente isoladamente se o trabalho para entre elas. Equipes multidisciplinares, automação e padrões compartilhados podem reduzir esse atrito, desde que as responsabilidades continuem explícitas.<sup><a id="citacao-19-1" href="#referencia-19" aria-label="Ver referência 19">19</a></sup>

A **carga cognitiva**, neste contexto, é a quantidade e a complexidade de ferramentas, sistemas e processos que a equipe precisa dominar. Exigir domínio de elementos demais pode comprometer a execução. Distribuir responsabilidades e oferecer plataformas e padrões que simplifiquem o trabalho ajuda a organizar essa carga. Para governança, relatórios automáticos e painéis simples dão visibilidade sem exigir que toda evidência seja reconstruída manualmente.<sup><a id="citacao-19-2" href="#referencia-19" aria-label="Ver referência 19">19</a></sup>

### Ritmos diferentes, operação conectada

Processos podem funcionar em ciclos curtos, repetitivos e quase contínuos. Produtos usam um **roadmap**, roteiro de evolução no tempo, com épicas e incrementos. Projetos conectam marcos e entregas incrementais. Programas criam janelas de sincronização. Abordagens em cascata, ágeis ou híbridas dependem do contexto; nenhum desses arranjos determina um único método para toda a fábrica.<sup><a id="citacao-3-2" href="#referencia-3" aria-label="Ver referência 3">3</a></sup>

### O que a esteira técnica faz

O **pipeline**, ou esteira, organiza verificações e preparação da entrega. A **integração contínua** e a **entrega contínua**, reunidas na sigla CI/CD, conectam mudanças e verificações frequentes a uma entrega organizada com automação. A mesma base pode apoiar todos os modelos, sem dispensar os acordos e validações de cada contexto.<sup><a id="citacao-20-1" href="#referencia-20" aria-label="Ver referência 20">20</a></sup>

1. **Lint:** verifica padrões e problemas básicos do código.
2. **Build:** gera o artefato de software que seguirá na entrega.
3. **Teste unitário:** verifica partes isoladas.
4. **Teste de contrato:** verifica os acordos de uma integração.
5. **Publicação:** disponibiliza o artefato preparado.
6. **Deploy, ou implantação:** instala a entrega no ambiente de destino.
7. **Verificação pós-deploy:** confirma o funcionamento após a implantação.

Esse encadeamento didático distingue preparar e disponibilizar um artefato de instalá-lo em um ambiente. Qualidade e segurança atravessam a esteira; flags podem controlar a disponibilização de funcionalidades. Automatizar atividades produz verificações repetíveis, mas não transforma uma entrega sem validação em resultado comprovado.<sup><a id="citacao-20-2" href="#referencia-20" aria-label="Ver referência 20">20</a></sup>

## Três aplicações para conectar as decisões {#aplicacoes}

Os cenários seguintes são **didáticos e fictícios**. Seu objetivo é praticar a relação entre problema, organização e evidência, sem apresentar resultados como experiências empíricas comprovadas.

### Secretaria de Saúde: organizar o atendimento e as evidências

**Problema:** pedidos dispersos, retrabalho, baixa previsibilidade e necessidade de auditoria. **Escolha:** fortalecer a orientação a processos. **Mecanismo:** entrada única, catálogo, fluxo, gates, SLA e registros que nascem das verificações. O atendimento deixa de depender de reconstruir cada acordo depois de entregar.<sup><a id="citacao-21-1" href="#referencia-21" aria-label="Ver referência 21">21</a></sup>

Acompanhar percentual no SLA, reaberturas e rastros das verificações ajuda a examinar o efeito. O limite é importante: centralizar a entrada sem esclarecer o serviço ou transformar gates em aprovações vazias pode apenas concentrar a fila. A organização precisa demonstrar melhora de fluxo e qualidade; o desenho, sozinho, não garante o resultado.<sup><a id="citacao-21-2" href="#referencia-21" aria-label="Ver referência 21">21</a></sup><sup><a id="citacao-8-2" href="#referencia-8" aria-label="Ver referência 8">8</a></sup>

### Banco ou fintech: produto compartilhado com projeto de prazo fixo

**Problema:** sistemas duplicam autenticação, pagamentos e catálogo. **Escolha:** tratar a base comum como produto interno. Componentes testados, documentados e versionados, com arquitetura de referência e changelog, tornam a evolução e a compatibilidade examináveis.<sup><a id="citacao-22-1" href="#referencia-22" aria-label="Ver referência 22">22</a></sup>

Quando aparece uma exigência regulatória com data, ela pode ser organizada como **projeto sobre essa base de produto**. Planejamento, desenvolvimento, testes e homologação conectam marcos ao go-live incremental. Não é necessário abandonar a orientação a produto nem inventar um novo processo técnico para a obrigação temporária.<sup><a id="citacao-22-2" href="#referencia-22" aria-label="Ver referência 22">22</a></sup>

A evidência a acompanhar inclui adoção, defeitos por versão e cumprimento de marcos. O limite é a responsabilidade pela evolução: publicar um componente sem documentação, contrato e orientação de migração pode transferir a duplicação para um problema compartilhado de compatibilidade.<sup><a id="citacao-22-3" href="#referencia-22" aria-label="Ver referência 22">22</a></sup><sup><a id="citacao-11-4" href="#referencia-11" aria-label="Ver referência 11">11</a></sup>

### Software como serviço: produto com atendimento por processo

**Software como serviço**, ou SaaS, pode precisar combinar a evolução do produto com suporte, correções e pequenas melhorias que crescem com a operação. **Escolha:** manter roadmap, épicas e versões entregues para a evolução, enquanto o catálogo organiza atendimento, prioridade e SLA das demandas rotineiras.<sup><a id="citacao-23-1" href="#referencia-23" aria-label="Ver referência 23">23</a></sup>

Um componente comum de autenticação precisa de versão, documentação e changelog; a esteira compartilhada e as flags apoiam a liberação controlada. O efeito deve ser acompanhado por defeitos, lead time e medidas do atendimento. O reuso governado e o catálogo são mecanismos a avaliar; não se deve prometer que apenas adotá-los produzirá a mesma melhora em qualquer contexto.<sup><a id="citacao-23-2" href="#referencia-23" aria-label="Ver referência 23">23</a></sup>

## Síntese e prática comentada {#pratica}

Organizar uma fábrica exige reconhecer o tipo de trabalho, distribuir decisões, conectar responsabilidades e olhar evidências. A engenharia de software abrange requisitos, arquitetura, testes e operação, além da codificação. Aprender esses modelos significa conseguir justificar uma escolha e observar seu efeito, em vez de apenas decorar quatro nomes.<sup><a id="citacao-24-1" href="#referencia-24" aria-label="Ver referência 24">24</a></sup>

### Um plano de aplicação para estudar o contexto

Use **20 demandas fictícias** ou de um contexto de trabalho autorizado, com registros anonimizados. Quem estuda individualmente pode começar pelas quatro demandas educacionais deste artigo e criar variações didáticas identificadas. A atividade adapta um plano de aplicação em 30 dias; não depende de uma ferramenta ou simulador específico.<sup><a id="citacao-25-1" href="#referencia-25" aria-label="Ver referência 25">25</a></sup>

1. **Observar e classificar.** Registre a natureza de cada demanda e justifique se predomina repetição, evolução, término com limites ou dependência entre frentes.
2. **Escolher medidas.** Defina um indicador coerente com o problema e explicite seu recorte: percentual no SLA para atendimento, adoção de componente para reuso, cumprimento de marcos para projeto ou throughput do conjunto para coordenação.
3. **Ajustar a triagem.** Revise os encaminhamentos e produza um catálogo enxuto e um roteiro de evolução que tornem as decisões compreensíveis.
4. **Comparar e aprender.** Após o período definido, compare os dados e registre o que funcionou, o que ainda dificulta o trabalho e qual ajuste será testado a seguir. Se o exercício for inteiramente fictício, trate os resultados como simulação didática, não como evidência de eficácia real.

O plano transforma a classificação em hipótese de melhoria observável. Os critérios são a natureza da demanda e a relação entre problema, decisão e indicador; nome de departamento ou preferência por um modelo não bastam.<sup><a id="citacao-25-2" href="#referencia-25" aria-label="Ver referência 25">25</a></sup><sup><a id="citacao-16-4" href="#referencia-16" aria-label="Ver referência 16">16</a></sup>

### Exercício 1 · Classificar sem isolar

Considere uma API nova prevista no catálogo, a evolução de autenticação compartilhada, uma adequação com prazo e uma integração que depende de várias frentes. Indique o arranjo predominante e explique uma combinação possível.

<details>
<summary>Conferir resposta comentada</summary>

A API com entrada e saída conhecidas pode ser tratada por **processo**; a autenticação compartilhada em evolução pede **produto**; a adequação delimitada com prazo pede **projeto**; as frentes interdependentes podem exigir **programa**. A justificativa importa mais que o rótulo: se a API revelar necessidade de descoberta de uma base evolutiva, o encaminhamento pode mudar.<sup><a id="citacao-4-5" href="#referencia-4" aria-label="Ver referência 4">4</a></sup><sup><a id="citacao-9-5" href="#referencia-9" aria-label="Ver referência 9">9</a></sup><sup><a id="citacao-12-5" href="#referencia-12" aria-label="Ver referência 12">12</a></sup><sup><a id="citacao-14-6" href="#referencia-14" aria-label="Ver referência 14">14</a></sup>

Uma combinação possível é o projeto de adequação utilizar o componente de autenticação do produto, seguir o processo técnico comum e ter dependências coordenadas no programa. A coexistência evita tratar cada modelo como uma organização isolada.<sup><a id="citacao-16-5" href="#referencia-16" aria-label="Ver referência 16">16</a></sup>

</details>

### Exercício 2 · Código pronto, entrega atrasada

O código fica pronto cedo, mas a entrega aguarda homologação. Diferencie lead time e throughput, indique duas evidências para investigar e proponha uma mudança testável.

<details>
<summary>Conferir resposta comentada</summary>

Lead time é o tempo total entre a entrada e a entrega; throughput é a quantidade concluída em um intervalo. Examine o tempo e a quantidade de itens na fila de homologação e os critérios necessários para que eles avancem. O período de programação sozinho não mostra o percurso inteiro.<sup><a id="citacao-6-4" href="#referencia-6" aria-label="Ver referência 6">6</a></sup>

Uma hipótese de ajuste é explicitar os critérios de passagem ou rever o limite de trabalho em andamento, acompanhando o efeito na fila e no tempo total. É preciso conferir a condição concreta antes de decidir: a existência de espera não prova, sozinha, qual mudança funcionará, nem justifica culpar uma pessoa.<sup><a id="citacao-7-4" href="#referencia-7" aria-label="Ver referência 7">7</a></sup><sup><a id="citacao-6-5" href="#referencia-6" aria-label="Ver referência 6">6</a></sup>

</details>

### Exercício 3 · Evolução que rompe consumidores

Um componente v2 provoca problemas nos sistemas que o utilizam. Ao mesmo tempo, um projeto chega à data de implantação sem retorno testado. Quais acordos e verificações precisam ser examinados?

<details>
<summary>Conferir resposta comentada</summary>

No componente, examine contrato e testes de compatibilidade, versão, changelog, documentação e orientação de migração e descontinuação da versão anterior. Evoluir com autonomia exige considerar quem depende da base compartilhada; disponibilizar a v2 não comprova que seus consumidores conseguirão adotá-la.<sup><a id="citacao-9-6" href="#referencia-9" aria-label="Ver referência 9">9</a></sup><sup><a id="citacao-10-3" href="#referencia-10" aria-label="Ver referência 10">10</a></sup>

No projeto, examine as condições pré-go-live: contratos, indicadores e rollback testado. A data é um compromisso a acompanhar, mas não substitui evidência das condições da transição. Marcos e entregas incrementais precisam estar conectados à esteira de validação.<sup><a id="citacao-13-6" href="#referencia-13" aria-label="Ver referência 13">13</a></sup>

</details>

### Questões de revisão

1. Um processo pode ser utilizado dentro de um projeto?
2. Um programa é apenas uma lista de projetos?
3. Autonomia de produto implica dispensar governança?
4. Um modelo organizacional impõe um único método de desenvolvimento?
5. Publicar equivale a implantar?

<details>
<summary>Conferir respostas comentadas</summary>

**1. Sim.** Processo organiza como executar; projeto organiza um objetivo temporário com entrega e término. Um projeto pode usar o processo comum de engenharia sem deixar de ser temporário.<sup><a id="citacao-2-3" href="#referencia-2" aria-label="Ver referência 2">2</a></sup><sup><a id="citacao-13-7" href="#referencia-13" aria-label="Ver referência 13">13</a></sup>

**2. Não.** Programa coordena iniciativas relacionadas para um resultado compartilhado. Dependências, prioridades e sincronização são parte do problema que precisa resolver; apenas reunir nomes em uma lista não realiza essa coordenação.<sup><a id="citacao-2-4" href="#referencia-2" aria-label="Ver referência 2">2</a></sup><sup><a id="citacao-14-7" href="#referencia-14" aria-label="Ver referência 14">14</a></sup>

**3. Não.** Arquitetura, contratos, versões e orientação de migração sustentam a evolução da base comum. Sem esses acordos, a autonomia de uma equipe pode impor quebra ou incerteza a outras.<sup><a id="citacao-9-7" href="#referencia-9" aria-label="Ver referência 9">9</a></sup><sup><a id="citacao-10-4" href="#referencia-10" aria-label="Ver referência 10">10</a></sup>

**4. Não.** A organização distribui decisões e responsabilidades; ritmos e abordagens podem ser ajustados ao contexto, com uma base técnica compartilhada. Processos, produtos, projetos e programas não prescrevem um único método para todas as equipes.<sup><a id="citacao-3-3" href="#referencia-3" aria-label="Ver referência 3">3</a></sup>

**5. Não.** A publicação disponibiliza o artefato; o deploy o instala no ambiente de destino. A verificação pós-deploy examina seu funcionamento depois da implantação, completando uma condição que a publicação isolada não demonstra.<sup><a id="citacao-20-3" href="#referencia-20" aria-label="Ver referência 20">20</a></sup>

</details>

## Referências {#referencias}

O livro é a base conceitual; transcrição e slides são materiais da aula ao vivo que delimitam os assuntos e sustentam as aplicações e os complementos. Cada entrada oferece retorno aos trechos em que foi utilizada.

<ol class="references">
<li id="referencia-1">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 35–36. Slides da aula ao vivo: slides/aula02.pdf, slides 3–4. Transcrição: transcrição/aula02.txt, 04:03–13:31. <a href="#citacao-1-1" aria-label="Voltar à citação 1, ocorrência 1">↩ 1</a> <a href="#citacao-1-2" aria-label="Voltar à citação 1, ocorrência 2">↩ 2</a> <a href="#citacao-1-3" aria-label="Voltar à citação 1, ocorrência 3">↩ 3</a> <a href="#citacao-1-4" aria-label="Voltar à citação 1, ocorrência 4">↩ 4</a> <a href="#citacao-1-5" aria-label="Voltar à citação 1, ocorrência 5">↩ 5</a></li>
<li id="referencia-2">Transcrição da aula ao vivo 02: transcrição/aula02.txt, 08:19–09:48. Distinções entre processo, projeto e programa; caráter temporário de projeto confirmado em 09:07. Livro, base conceitual: livro.pdf, pp. 40–44. <a href="#citacao-2-1" aria-label="Voltar à citação 2, ocorrência 1">↩ 1</a> <a href="#citacao-2-2" aria-label="Voltar à citação 2, ocorrência 2">↩ 2</a> <a href="#citacao-2-3" aria-label="Voltar à citação 2, ocorrência 3">↩ 3</a> <a href="#citacao-2-4" aria-label="Voltar à citação 2, ocorrência 4">↩ 4</a></li>
<li id="referencia-3">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 45–46, ciclos de desenvolvimento. Slides da aula ao vivo: slides/aula02.pdf, slide 16. Transcrição: transcrição/aula02.txt, 1:03:31–1:06:02. <a href="#citacao-3-1" aria-label="Voltar à citação 3, ocorrência 1">↩ 1</a> <a href="#citacao-3-2" aria-label="Voltar à citação 3, ocorrência 2">↩ 2</a> <a href="#citacao-3-3" aria-label="Voltar à citação 3, ocorrência 3">↩ 3</a></li>
<li id="referencia-4">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 37. Slides da aula ao vivo: slides/aula02.pdf, slide 5. Transcrição: transcrição/aula02.txt, 13:42–19:00. <a href="#citacao-4-1" aria-label="Voltar à citação 4, ocorrência 1">↩ 1</a> <a href="#citacao-4-2" aria-label="Voltar à citação 4, ocorrência 2">↩ 2</a> <a href="#citacao-4-3" aria-label="Voltar à citação 4, ocorrência 3">↩ 3</a> <a href="#citacao-4-4" aria-label="Voltar à citação 4, ocorrência 4">↩ 4</a> <a href="#citacao-4-5" aria-label="Voltar à citação 4, ocorrência 5">↩ 5</a></li>
<li id="referencia-5">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 38, figura do fluxo orientado a processos. Slides da aula ao vivo: slides/aula02.pdf, slide 6. Transcrição: transcrição/aula02.txt, 19:11–20:52. <a href="#citacao-5-1" aria-label="Voltar à citação 5, ocorrência 1">↩ 1</a> <a href="#citacao-5-2" aria-label="Voltar à citação 5, ocorrência 2">↩ 2</a></li>
<li id="referencia-6">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 35 e 37–38, definições e métricas de fluxo. Slides da aula ao vivo: slides/aula02.pdf, slide 6. Transcrição: transcrição/aula02.txt, 20:57–22:03. <a href="#citacao-6-1" aria-label="Voltar à citação 6, ocorrência 1">↩ 1</a> <a href="#citacao-6-2" aria-label="Voltar à citação 6, ocorrência 2">↩ 2</a> <a href="#citacao-6-3" aria-label="Voltar à citação 6, ocorrência 3">↩ 3</a> <a href="#citacao-6-4" aria-label="Voltar à citação 6, ocorrência 4">↩ 4</a> <a href="#citacao-6-5" aria-label="Voltar à citação 6, ocorrência 5">↩ 5</a></li>
<li id="referencia-7">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 44, sinais de troca. Slides da aula ao vivo: slides/aula02.pdf, slide 13. Transcrição: transcrição/aula02.txt, 47:05–50:32. <a href="#citacao-7-1" aria-label="Voltar à citação 7, ocorrência 1">↩ 1</a> <a href="#citacao-7-2" aria-label="Voltar à citação 7, ocorrência 2">↩ 2</a> <a href="#citacao-7-3" aria-label="Voltar à citação 7, ocorrência 3">↩ 3</a> <a href="#citacao-7-4" aria-label="Voltar à citação 7, ocorrência 4">↩ 4</a></li>
<li id="referencia-8">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 37, “teatro de processo”. Transcrição da aula ao vivo: transcrição/aula02.txt, 22:03–23:07. <a href="#citacao-8-1" aria-label="Voltar à citação 8, ocorrência 1">↩ 1</a> <a href="#citacao-8-2" aria-label="Voltar à citação 8, ocorrência 2">↩ 2</a></li>
<li id="referencia-9">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 38–39, arquitetura de referência, componentes e variabilidades. Slides da aula ao vivo: slides/aula02.pdf, slide 7. Transcrição: transcrição/aula02.txt, 23:14–24:46 e 26:32–27:21. <a href="#citacao-9-1" aria-label="Voltar à citação 9, ocorrência 1">↩ 1</a> <a href="#citacao-9-2" aria-label="Voltar à citação 9, ocorrência 2">↩ 2</a> <a href="#citacao-9-3" aria-label="Voltar à citação 9, ocorrência 3">↩ 3</a> <a href="#citacao-9-4" aria-label="Voltar à citação 9, ocorrência 4">↩ 4</a> <a href="#citacao-9-5" aria-label="Voltar à citação 9, ocorrência 5">↩ 5</a> <a href="#citacao-9-6" aria-label="Voltar à citação 9, ocorrência 6">↩ 6</a> <a href="#citacao-9-7" aria-label="Voltar à citação 9, ocorrência 7">↩ 7</a></li>
<li id="referencia-10">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 39, kit de produto e governança leve. Slides da aula ao vivo: slides/aula02.pdf, slide 7. Transcrição: transcrição/aula02.txt, 24:55–26:20. <a href="#citacao-10-1" aria-label="Voltar à citação 10, ocorrência 1">↩ 1</a> <a href="#citacao-10-2" aria-label="Voltar à citação 10, ocorrência 2">↩ 2</a> <a href="#citacao-10-3" aria-label="Voltar à citação 10, ocorrência 3">↩ 3</a> <a href="#citacao-10-4" aria-label="Voltar à citação 10, ocorrência 4">↩ 4</a></li>
<li id="referencia-11">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 39, KPIs de produto. Slides da aula ao vivo: slides/aula02.pdf, slide 7. Transcrição: transcrição/aula02.txt, 26:20–27:21. O recorte de cycle time deve ser explicitado pela equipe. <a href="#citacao-11-1" aria-label="Voltar à citação 11, ocorrência 1">↩ 1</a> <a href="#citacao-11-2" aria-label="Voltar à citação 11, ocorrência 2">↩ 2</a> <a href="#citacao-11-3" aria-label="Voltar à citação 11, ocorrência 3">↩ 3</a> <a href="#citacao-11-4" aria-label="Voltar à citação 11, ocorrência 4">↩ 4</a></li>
<li id="referencia-12">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 40. Slides da aula ao vivo: slides/aula02.pdf, slide 8. Transcrição: transcrição/aula02.txt, 27:32–29:09. <a href="#citacao-12-1" aria-label="Voltar à citação 12, ocorrência 1">↩ 1</a> <a href="#citacao-12-2" aria-label="Voltar à citação 12, ocorrência 2">↩ 2</a> <a href="#citacao-12-3" aria-label="Voltar à citação 12, ocorrência 3">↩ 3</a> <a href="#citacao-12-4" aria-label="Voltar à citação 12, ocorrência 4">↩ 4</a> <a href="#citacao-12-5" aria-label="Voltar à citação 12, ocorrência 5">↩ 5</a></li>
<li id="referencia-13">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 40–41, marcos, esteira e checagens pré-go-live. Slides da aula ao vivo: slides/aula02.pdf, slide 8. Transcrição: transcrição/aula02.txt, 29:17–31:25. <a href="#citacao-13-1" aria-label="Voltar à citação 13, ocorrência 1">↩ 1</a> <a href="#citacao-13-2" aria-label="Voltar à citação 13, ocorrência 2">↩ 2</a> <a href="#citacao-13-3" aria-label="Voltar à citação 13, ocorrência 3">↩ 3</a> <a href="#citacao-13-4" aria-label="Voltar à citação 13, ocorrência 4">↩ 4</a> <a href="#citacao-13-5" aria-label="Voltar à citação 13, ocorrência 5">↩ 5</a> <a href="#citacao-13-6" aria-label="Voltar à citação 13, ocorrência 6">↩ 6</a> <a href="#citacao-13-7" aria-label="Voltar à citação 13, ocorrência 7">↩ 7</a></li>
<li id="referencia-14">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 41–42. Slides da aula ao vivo: slides/aula02.pdf, slide 9. Transcrição: transcrição/aula02.txt, 31:38–35:54. <a href="#citacao-14-1" aria-label="Voltar à citação 14, ocorrência 1">↩ 1</a> <a href="#citacao-14-2" aria-label="Voltar à citação 14, ocorrência 2">↩ 2</a> <a href="#citacao-14-3" aria-label="Voltar à citação 14, ocorrência 3">↩ 3</a> <a href="#citacao-14-4" aria-label="Voltar à citação 14, ocorrência 4">↩ 4</a> <a href="#citacao-14-5" aria-label="Voltar à citação 14, ocorrência 5">↩ 5</a> <a href="#citacao-14-6" aria-label="Voltar à citação 14, ocorrência 6">↩ 6</a> <a href="#citacao-14-7" aria-label="Voltar à citação 14, ocorrência 7">↩ 7</a></li>
<li id="referencia-15">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 42, rituais de sincronização. Slides da aula ao vivo: slides/aula02.pdf, slide 9. Transcrição: transcrição/aula02.txt, 33:28–34:24. Frequências tratadas como ajustáveis ao contexto. <a href="#citacao-15-1" aria-label="Voltar à citação 15, ocorrência 1">↩ 1</a></li>
<li id="referencia-16">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 43–45, escolha, combinação e riscos de desequilíbrio. Slides da aula ao vivo: slides/aula02.pdf, slides 10–12. Transcrição: transcrição/aula02.txt, 36:05–44:49. <a href="#citacao-16-1" aria-label="Voltar à citação 16, ocorrência 1">↩ 1</a> <a href="#citacao-16-2" aria-label="Voltar à citação 16, ocorrência 2">↩ 2</a> <a href="#citacao-16-3" aria-label="Voltar à citação 16, ocorrência 3">↩ 3</a> <a href="#citacao-16-4" aria-label="Voltar à citação 16, ocorrência 4">↩ 4</a> <a href="#citacao-16-5" aria-label="Voltar à citação 16, ocorrência 5">↩ 5</a></li>
<li id="referencia-17">Tecnologias Emergentes em Engenharia de Software — Aula 2. Slides da aula ao vivo: slides/aula02.pdf, slide 14. Transcrição da aula ao vivo: transcrição/aula02.txt, 50:44–54:51. Caso educacional tratado como situação didática. <a href="#citacao-17-1" aria-label="Voltar à citação 17, ocorrência 1">↩ 1</a> <a href="#citacao-17-2" aria-label="Voltar à citação 17, ocorrência 2">↩ 2</a></li>
<li id="referencia-18">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 44–45, equipes e papéis. Slides da aula ao vivo: slides/aula02.pdf, slide 15. Transcrição: transcrição/aula02.txt, 56:25–1:01:12. <a href="#citacao-18-1" aria-label="Voltar à citação 18, ocorrência 1">↩ 1</a> <a href="#citacao-18-2" aria-label="Voltar à citação 18, ocorrência 2">↩ 2</a></li>
<li id="referencia-19">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 44–45, carga cognitiva e governança leve. Slides da aula ao vivo: slides/aula02.pdf, slide 15. Transcrição: transcrição/aula02.txt, 1:01:12–1:03:21. <a href="#citacao-19-1" aria-label="Voltar à citação 19, ocorrência 1">↩ 1</a> <a href="#citacao-19-2" aria-label="Voltar à citação 19, ocorrência 2">↩ 2</a></li>
<li id="referencia-20">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 45–46, esteira comum. Slides da aula ao vivo: slides/aula02.pdf, slide 16. Transcrição: transcrição/aula02.txt, 1:06:02–1:07:16. <a href="#citacao-20-1" aria-label="Voltar à citação 20, ocorrência 1">↩ 1</a> <a href="#citacao-20-2" aria-label="Voltar à citação 20, ocorrência 2">↩ 2</a> <a href="#citacao-20-3" aria-label="Voltar à citação 20, ocorrência 3">↩ 3</a></li>
<li id="referencia-21">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 46, minicase de Saúde. Slides da aula ao vivo: slides/aula02.pdf, slide 17. Transcrição: transcrição/aula02.txt, 1:07:40–1:11:31. Caráter fictício dos resultados explicitado em 1:10:57; cenário apresentado como didático. <a href="#citacao-21-1" aria-label="Voltar à citação 21, ocorrência 1">↩ 1</a> <a href="#citacao-21-2" aria-label="Voltar à citação 21, ocorrência 2">↩ 2</a></li>
<li id="referencia-22">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 46, minicase de banco/fintech. Slides da aula ao vivo: slides/aula02.pdf, slide 18. Transcrição: transcrição/aula02.txt, 1:13:33–1:15:33, 1:18:08–1:20:12 e 1:21:22–1:22:03. Cenário didático. <a href="#citacao-22-1" aria-label="Voltar à citação 22, ocorrência 1">↩ 1</a> <a href="#citacao-22-2" aria-label="Voltar à citação 22, ocorrência 2">↩ 2</a> <a href="#citacao-22-3" aria-label="Voltar à citação 22, ocorrência 3">↩ 3</a></li>
<li id="referencia-23">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 46, minicase de SaaS. Slides da aula ao vivo: slides/aula02.pdf, slide 19. Transcrição: transcrição/aula02.txt, 1:22:13–1:28:40. Cenário didático. <a href="#citacao-23-1" aria-label="Voltar à citação 23, ocorrência 1">↩ 1</a> <a href="#citacao-23-2" aria-label="Voltar à citação 23, ocorrência 2">↩ 2</a></li>
<li id="referencia-24">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 25–26 e 47–48, competências, evidências e aplicação. Transcrição da aula ao vivo: transcrição/aula02.txt, 55:07–56:07, 58:39–59:39 e 1:29:23–1:31:44. <a href="#citacao-24-1" aria-label="Voltar à citação 24, ocorrência 1">↩ 1</a></li>
<li id="referencia-25">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 47, plano de aplicação em 30 dias. Atividade adaptada para estudo com demandas fictícias ou contexto autorizado. <a href="#citacao-25-1" aria-label="Voltar à citação 25, ocorrência 1">↩ 1</a> <a href="#citacao-25-2" aria-label="Voltar à citação 25, ocorrência 2">↩ 2</a></li>
</ol>
