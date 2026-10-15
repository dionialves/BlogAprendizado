# Fábrica de software: da demanda à entrega confiável

**Aula ao vivo 01 · Tecnologias Emergentes em Engenharia de Software**

Um pedido como “melhorar o portal” parece simples até surgirem perguntas: melhorar o quê, para quem, com quais dependências e como comprovar que a mudança funcionou? A fábrica de software organiza essa passagem da necessidade à operação. Ela reúne acordos de entrada e saída, responsabilidades, verificações, automação e medidas para tornar o trabalho repetível e examinável. Seu objetivo é reduzir a dependência de improvisos e sustentar entregas consistentes, mesmo quando os sistemas são diferentes.<sup><a id="citacao-1-1" href="#referencia-1" aria-label="Ver referência 1">1</a></sup>

A ideia central deste estudo é acompanhar **o que permite iniciar, o que comprova concluir e o que acontece depois da entrega**. Você aprenderá o fluxo de engenharia, os acordos que o sustentam, as medidas de qualidade e a escolha entre organizar demandas como serviço, produto, projeto ou iniciativas que precisam de coordenação.

## Do trabalho artesanal à fábrica {#paradigma}

No trabalho artesanal, parte importante das decisões permanece no conhecimento de indivíduos: alguém sabe onde alterar, outra pessoa conhece uma integração e uma terceira lembra o que foi combinado. Esse conhecimento pode ser valioso, mas, quando não há processo e registro compartilhados, a capacidade de repetir uma entrega depende da disponibilidade dessas pessoas. O crescimento do volume e da complexidade dos sistemas torna essa dependência uma limitação para escalar com qualidade.<sup><a id="citacao-1-2" href="#referencia-1" aria-label="Ver referência 1">1</a></sup>

A fábrica de software responde com uma **plataforma operacional**: um modo compartilhado de receber, executar, verificar e acompanhar trabalho. Padronizam-se processos, responsabilidades, artefatos — os registros e resultados produzidos — e critérios de qualidade. Isso permite fazer sistemas diferentes com um caminho de trabalho conhecido. Padronização não exige telas, regras de negócio ou soluções idênticas; exige que a organização consiga explicar como uma necessidade se torna uma entrega e quais evidências sustentam essa passagem.<sup><a id="citacao-1-3" href="#referencia-1" aria-label="Ver referência 1">1</a></sup>

### Como esse paradigma se consolidou

Um panorama histórico ajuda a compreender a mudança de ênfase. Nos anos 1950–1960, destacam-se métodos artesanais e dependência de habilidade individual. Nas décadas de 1970–1980, o desenvolvimento estruturado amplia a preocupação com métodos e especificações. Nos anos 1990, normas e modelos de processo reforçam qualidade, auditoria e rastreabilidade. A partir dos anos 2000, práticas ágeis, processos repetíveis e automação aproximam verificações da rotina de entrega. Na década de 2010, DevOps, aproximando desenvolvimento e operação, e a engenharia de confiabilidade de sites (*Site Reliability Engineering*, SRE) dão destaque à observação e à confiabilidade do software em uso. São períodos de consolidação de práticas, não fronteiras que fazem desaparecer as anteriores.<sup><a id="citacao-2-1" href="#referencia-2" aria-label="Ver referência 2">2</a></sup><sup><a id="citacao-3-1" href="#referencia-3" aria-label="Ver referência 3">3</a></sup>

### Exemplo didático fictício: uma autarquia reorganiza os pedidos

Imagine uma autarquia na qual solicitações chegam por canais dispersos. A documentação é irregular e cada demanda precisa encontrar “a pessoa que sabe”. A sequência de problemas é compreensível: informações incompletas dificultam a análise; dependências são descobertas tarde; o caminho varia conforme quem atende; fica difícil prever o término e demonstrar qualidade.<sup><a id="citacao-4-1" href="#referencia-4" aria-label="Ver referência 4">4</a></sup>

Uma reorganização começa por tornar os pedidos comparáveis: classificar o serviço solicitado, reunir as informações mínimas, explicitar a responsabilidade e definir o resultado esperado. Em seguida, revisão e testes passam a gerar evidências, e os indicadores mostram onde há espera ou retrabalho. A mudança principal é sair de acordos implícitos para um fluxo compartilhado. O propósito dos controles é reduzir risco e tornar o trabalho visível; um controle que apenas acrescenta espera precisa ser revisto.<sup><a id="citacao-4-2" href="#referencia-4" aria-label="Ver referência 4">4</a></sup><sup><a id="citacao-5-1" href="#referencia-5" aria-label="Ver referência 5">5</a></sup>

## Da demanda à operação {#fluxo}

A entrega envolve seis atividades relacionadas: requisitos, análise e projeto, implementação, testes, implantação e suporte/operação. Elas ajudam a entender o percurso, mas não obrigam o trabalho a uma sequência rígida. Um teste pode revelar a necessidade de rever uma regra; a análise pode exigir esclarecer um requisito; o acompanhamento em produção pode originar outra mudança.<sup><a id="citacao-6-1" href="#referencia-6" aria-label="Ver referência 6">6</a></sup><sup><a id="citacao-5-2" href="#referencia-5" aria-label="Ver referência 5">5</a></sup>

### Um pedido atravessa as seis atividades

**Exemplo didático fictício:** uma prefeitura deseja melhorar o acompanhamento de solicitações em um portal de serviços públicos. O mesmo raciocínio pode apoiar serviços como alvarás, IPTU e protocolos. Observe o que cada atividade precisa produzir para que a próxima possa trabalhar com menos ambiguidade.<sup><a id="citacao-7-1" href="#referencia-7" aria-label="Ver referência 7">7</a></sup>

1. **Requisitos: esclarecer a necessidade.** O pedido inicial é transformado em objetivo, regras, prioridade e critérios de aceite. Em vez de apenas “melhorar o portal”, a equipe combina que o cidadão deve conseguir consultar o andamento de sua solicitação. O aceite descreve o resultado que será verificado. A saída é uma demanda compreensível, com condições mínimas para iniciar.<sup><a id="citacao-6-2" href="#referencia-6" aria-label="Ver referência 6">6</a></sup>
2. **Análise e projeto: examinar a mudança.** A equipe investiga impacto, arquitetura, integrações e riscos. No exemplo, precisa compreender a relação entre o portal e o sistema que fornece o andamento. O resultado é uma orientação de solução que considera dependências, em vez de descobrir cada uma durante a implantação.<sup><a id="citacao-6-3" href="#referencia-6" aria-label="Ver referência 6">6</a></sup>
3. **Implementação: realizar mudanças verificáveis.** O código é alterado em partes pequenas, com revisão por outra pessoa e verificações automatizadas. A saída não é apenas código escrito: é uma mudança identificável, examinada e acompanhada de verificações compatíveis com seu risco.<sup><a id="citacao-5-3" href="#referencia-5" aria-label="Ver referência 5">5</a></sup>
4. **Testes: produzir evidência do comportamento.** A equipe verifica partes isoladas, interações e jornadas relevantes. No portal, a jornada de consulta precisa ser avaliada de acordo com o aceite; a comunicação entre sistemas também precisa funcionar. O resultado são evidências para decidir se a mudança pode avançar.<sup><a id="citacao-5-4" href="#referencia-5" aria-label="Ver referência 5">5</a></sup>
5. **Implantação: colocar em uso com controle.** A mudança é liberada com verificações e possibilidade de retorno, conforme o serviço. Entregar não consiste em transferir um arquivo e esperar que tudo funcione. É necessário observar o comportamento após a liberação.<sup><a id="citacao-5-5" href="#referencia-5" aria-label="Ver referência 5">5</a></sup>
6. **Suporte e operação: acompanhar o resultado real.** Indicadores e ocorrências mostram o efeito no serviço em uso. Se surgirem erros, essas informações retornam ao fluxo para investigação, correção e aprendizado.<sup><a id="citacao-5-6" href="#referencia-5" aria-label="Ver referência 5">5</a></sup>

Uma análise de incidente, ou **post-mortem sem culpa**, organiza esse aprendizado após uma falha. A equipe usa registros para compreender o que ocorreu: um contrato deixou de cobrir um caso? Um alerta não disparou? Qual correção estabilizou a taxa de erro? O objetivo é registrar condições, verificações e correções para melhorar o sistema, em vez de buscar culpados individuais. Assim, a operação produz conhecimento que retorna aos requisitos, testes e controles da próxima entrega.<sup><a id="citacao-8-1" href="#referencia-8" aria-label="Ver referência 8">8</a></sup>

### O que significa verificar a implementação

Um **pull request**, ou PR, é uma solicitação de revisão e integração de uma mudança. Ele cria um ponto em que outras pessoas podem examinar o que foi alterado antes da integração. Mudanças pequenas favorecem uma revisão delimitada. A análise estática examina o código; o *lint* é uma verificação de regras; o *build* prepara e verifica a construção do software. Esses mecanismos se complementam com testes e revisão por pares. Fortify é um exemplo de ferramenta de análise estática, mas o papel da verificação importa mais que a escolha de um nome de ferramenta.<sup><a id="citacao-5-7" href="#referencia-5" aria-label="Ver referência 5">5</a></sup><sup><a id="citacao-9-1" href="#referencia-9" aria-label="Ver referência 9">9</a></sup>

Os tipos de teste também têm funções distintas. O **unitário** verifica uma parte isolada. O de **integração** verifica a interação entre partes. O de **contrato** verifica a compatibilidade dos acordos de uma integração. O **ponta a ponta**, conhecido como E2E, acompanha uma jornada completa e pode ser concentrado em jornadas críticas, conforme o risco. No exemplo fictício, uma regra de consulta pode ser examinada isoladamente; a comunicação entre portal e sistema de protocolos exige atenção à integração e ao contrato; a jornada inteira de consulta pede uma verificação ponta a ponta. Passar em uma categoria não demonstra automaticamente todas as outras.<sup><a id="citacao-5-8" href="#referencia-5" aria-label="Ver referência 5">5</a></sup>

### Qualidade atravessa o fluxo

Um **quality gate**, ou ponto de verificação de qualidade, usa critérios objetivos para permitir ou bloquear o avanço. Teste reprovado, vulnerabilidade crítica ou requisito não satisfeito são motivos para impedir a passagem. A qualidade, portanto, não fica restrita a uma inspeção no fim: os registros de cada verificação ajudam a decidir ao longo do trabalho. Um gate deve reduzir risco ou encurtar o caminho; se não cumpre função útil, deve ser simplificado ou removido.<sup><a id="citacao-5-9" href="#referencia-5" aria-label="Ver referência 5">5</a></sup>

A **integração contínua** reúne mudanças com verificações frequentes; a **entrega contínua** organiza sua preparação e entrega com automação. A sigla CI/CD reúne essas práticas. A esteira automatizada conecta verificações como análise, construção, testes e publicação, reduzindo tarefas manuais e gerando registros. Segurança, proteção de dados, conformidade e interoperabilidade — a capacidade de integração entre sistemas — precisam fazer parte desse percurso, e não surgir apenas na véspera da liberação.<sup><a id="citacao-5-10" href="#referencia-5" aria-label="Ver referência 5">5</a></sup>

Na implantação, **ondas** dividem a liberação; **feature flags**, também chamadas de *toggles*, controlam a disponibilização de funcionalidades; **rollback** permite retornar quando a mudança provoca problemas. Blue-green e canary são outras alternativas de implantação controlada. Para este estudo, o ponto é compreender a finalidade comum de controlar a liberação e seu risco, sem depender de memorizar nomes de técnicas.<sup><a id="citacao-5-11" href="#referencia-5" aria-label="Ver referência 5">5</a></sup><sup><a id="citacao-10-1" href="#referencia-10" aria-label="Ver referência 10">10</a></sup>

## Acordos que tornam a entrega verificável {#acordos}

O **catálogo de serviços** transforma pedidos genéricos em tipos de trabalho reconhecíveis: evolução de tela, correção crítica, nova interface de programação de aplicações — API, uma interface de integração entre sistemas —, integração externa e migração de versão. Cada tipo recebe condições mínimas de entrada, critérios de saída e compromissos adequados. Assim, a conversa deixa de depender apenas da interpretação de cada solicitante e de cada equipe.<sup><a id="citacao-11-1" href="#referencia-11" aria-label="Ver referência 11">11</a></sup>

### Estar pronto para começar é diferente de ter terminado

**Definition of Ready**, ou DoR, é o acordo de prontidão: o que precisa existir para iniciar. **Definition of Done**, ou DoD, é o acordo sobre o que comprova a conclusão. Critérios de aceite descrevem o resultado esperado daquela demanda; o DoD reúne as evidências e verificações exigidas para declará-la concluída. Relacionam-se, mas não devem ser confundidos.<sup><a id="citacao-11-2" href="#referencia-11" aria-label="Ver referência 11">11</a></sup><sup><a id="citacao-12-1" href="#referencia-12" aria-label="Ver referência 12">12</a></sup>

| Acordo | Momento e pergunta | Evidências no exemplo fictício de integração |
| --- | --- | --- |
| DoR | Antes de iniciar: temos condições mínimas para trabalhar? | Objetivo, responsável, dependências identificadas e critérios de aceite compreensíveis. |
| DoD | Ao concluir: o que demonstra que entregamos? | Aceite verificado, testes e revisão registrados, documentação pertinente e implantação conforme o serviço. |

A tabela aplica os acordos de entrada e saída; seus itens devem ser ajustados ao serviço, sem transformar uma lista genérica em prova automática de conclusão.<sup><a id="citacao-11-3" href="#referencia-11" aria-label="Ver referência 11">11</a></sup><sup><a id="citacao-12-2" href="#referencia-12" aria-label="Ver referência 12">12</a></sup>

**Exemplo didático fictício:** chega o pedido “integrar o portal ao cadastro acadêmico”. O título identifica uma intenção, mas não esclarece o responsável pelo cadastro, a dependência de acesso ou o comportamento esperado. Começar nessas condições pode apenas deslocar a espera para dentro da implementação. A triagem reúne as informações do DoR antes do início. Ao final, dizer “o código está pronto” continua insuficiente: as verificações do DoD demonstram se a integração atende ao combinado.<sup><a id="citacao-12-3" href="#referencia-12" aria-label="Ver referência 12">12</a></sup>

### Compromissos, inspeções e trabalho em andamento

O **acordo de nível de serviço**, ou SLA, explicita o compromisso aplicável àquele serviço, incluindo o prazo acordado. Uma correção crítica e uma integração externa têm naturezas diferentes; não se deve aplicar indistintamente o mesmo prazo a toda demanda. Inspeções intermediárias tornam visíveis condições de qualidade, segurança e conformidade, em vez de descobrir tudo no encerramento.<sup><a id="citacao-12-4" href="#referencia-12" aria-label="Ver referência 12">12</a></sup>

A quantidade de trabalho em andamento é chamada de **WIP**, abreviação de *work in progress*. Limitar quantos itens seguem simultaneamente pelo fluxo ajuda a enfrentar filas e favorece terminar o que já começou. Iniciar mais itens não equivale a concluir mais entregas. O limite precisa ser acompanhado pelas medidas do fluxo; ele não é uma promessa automática de velocidade.<sup><a id="citacao-13-1" href="#referencia-13" aria-label="Ver referência 13">13</a></sup><sup><a id="citacao-11-4" href="#referencia-11" aria-label="Ver referência 11">11</a></sup>

## Medir fluxo e confiabilidade {#metricas}

Os acordos ganham utilidade quando a operação consegue observar seus resultados. Três medidas iniciais ajudam a examinar a entrega: **lead time**, tempo da solicitação até a entrada em produção; **percentual no SLA**, proporção de entregas que cumprem o compromisso acordado; e **taxa de reabertura**, sinal de itens que voltam ao trabalho e podem indicar retrabalho ou problemas de qualidade. Definir claramente os marcos do lead time evita confundir tempo total de atendimento com apenas o período de programação.<sup><a id="citacao-14-1" href="#referencia-14" aria-label="Ver referência 14">14</a></sup>

Essas medidas devem ser lidas em conjunto. Um lead time maior pede investigação de filas, dependências ou pontos de espera. Reaberturas frequentes convidam a examinar clareza do aceite, testes e critérios de conclusão. O número indica um problema a investigar; não identifica sozinho sua causa. Comparar o mesmo sistema antes e depois de uma mudança, considerando os tipos de serviço e seu contexto, ajuda a aprender. Usar esses números para classificar pessoas não explica o funcionamento do fluxo.<sup><a id="citacao-14-2" href="#referencia-14" aria-label="Ver referência 14">14</a></sup>

### Medida, meta e compromisso são coisas diferentes

O **indicador de nível de serviço**, ou SLI, é uma medida observada, como disponibilidade, latência — tempo de resposta — ou taxa de erro. O **objetivo de nível de serviço**, ou SLO, é a meta definida para esse indicador. O SLA é o compromisso acordado para o serviço. Uma medida permite observar; uma meta orienta a decisão; um compromisso explicita o que foi combinado.<sup><a id="citacao-15-1" href="#referencia-15" aria-label="Ver referência 15">15</a></sup>

**Exemplo aritmético fictício:** considere um indicador percentual de disponibilidade cuja meta é **99,9%**, em uma base e um período definidos. O complemento até 100% é **0,1%**. Esse complemento representa o orçamento de erro do exemplo: a tolerância prevista pela meta, nas mesmas condições de medição. Não é uma autorização para ignorar falhas; é uma referência para equilibrar mudanças e estabilidade.<sup><a id="citacao-15-2" href="#referencia-15" aria-label="Ver referência 15">15</a></sup>

Quando o consumo dessa tolerância ameaça a confiabilidade, a operação pode priorizar estabilização em vez de seguir ampliando mudanças. Para decidir, precisa ligar o comportamento observado às entregas realizadas. Medir apenas antes da implantação não permite conhecer o efeito no usuário depois dela.<sup><a id="citacao-15-3" href="#referencia-15" aria-label="Ver referência 15">15</a></sup><sup><a id="citacao-16-1" href="#referencia-16" aria-label="Ver referência 16">16</a></sup>

### Aplicação ao portal da prefeitura

No exemplo didático fictício do portal, o catálogo organiza os pedidos de alvarás, IPTU e protocolos; os critérios de entrada esclarecem o que deve ser feito; testes e gates demonstram condições de avanço; a implantação controlada limita o risco da passagem para uso. Depois, as medidas mostram se a entrega chegou no prazo e como o serviço se comporta. Se o tempo de atendimento melhora enquanto as reaberturas crescem, ainda há uma questão de qualidade a resolver. A leitura conjunta evita confundir rapidez de liberação com entrega confiável.<sup><a id="citacao-7-2" href="#referencia-7" aria-label="Ver referência 7">7</a></sup><sup><a id="citacao-14-3" href="#referencia-14" aria-label="Ver referência 14">14</a></sup>

## Reuso e rastreabilidade do ciclo de vida {#ciclo}

Repetir um processo não significa reescrever a mesma solução a cada pedido. O **reuso** permite compartilhar componentes, mas precisa ser organizado: componentes versionados, mudanças declaradas e contratos verificáveis permitem examinar a compatibilidade entre quem fornece e quem utiliza. Copiar e colar código dispersa soluções; reutilizar um componente controlado mantém uma referência compartilhada. Ainda assim, reuso não elimina a necessidade de testar nem garante ausência de defeitos.<sup><a id="citacao-17-1" href="#referencia-17" aria-label="Ver referência 17">17</a></sup>

**Exemplo didático fictício:** dois sistemas da universidade utilizam um componente comum. Ao alterá-lo para atender um deles, a equipe precisa verificar se o contrato continua compatível com o outro. O benefício do componente compartilhado depende justamente de conhecer sua versão e suas condições de integração. Padronizar o componente sem controlar sua evolução pode transferir o problema de um sistema para vários.<sup><a id="citacao-17-2" href="#referencia-17" aria-label="Ver referência 17">17</a></sup>

### ALM: ligar a necessidade ao efeito observado

**Application Lifecycle Management**, ou ALM, significa gestão do ciclo de vida da aplicação. É a integração de práticas, processos e ferramentas que conecta planejamento, desenvolvimento, testes, entrega e operação. Não se resume a comprar uma ferramenta: o essencial é manter a rastreabilidade, isto é, a possibilidade de relacionar decisões, mudanças e resultados.<sup><a id="citacao-16-2" href="#referencia-16" aria-label="Ver referência 16">16</a></sup>

Um requisito origina uma tarefa. A alteração é identificada em uma **branch**, uma linha de trabalho do código, e em **commits**, registros das mudanças. Um PR reúne a proposta para revisão. Testes e outras verificações documentam condições de avanço. A **release**, uma versão de entrega identificável, reúne o que foi liberado. Os indicadores de produção mostram o comportamento do serviço após essa entrega.<sup><a id="citacao-16-3" href="#referencia-16" aria-label="Ver referência 16">16</a></sup>

**Mapa de rastreabilidade:** requisito → tarefa → branch/commit/PR → testes e verificações → release → indicadores de produção. Elaboração didática própria: o encadeamento representa relações investigáveis; não é uma garantia de que uma causa será encontrada automaticamente.<sup><a id="citacao-16-4" href="#referencia-16" aria-label="Ver referência 16">16</a></sup>

**Exemplo didático fictício:** aumentam os erros na matrícula após uma entrega. O rastro permite perguntar: qual necessidade motivou a mudança? Que parte foi alterada? Quem participou e aprovou? Quais verificações foram realizadas? Em qual versão entrou em produção? Como os indicadores se comportaram? As respostas ajudam a investigar a relação entre mudança e efeito, decidir uma correção ou retorno e aprender com a ocorrência.<sup><a id="citacao-16-5" href="#referencia-16" aria-label="Ver referência 16">16</a></sup>

## Fábrica, método e modelos de organização {#modelos}

A fábrica organiza a operação: catálogo, critérios de entrada e saída, esteira, verificações e medidas. Um método ou abordagem da equipe organiza sua rotina, papéis, cadências e artefatos. Scrum e Kanban são exemplos de abordagens que podem coexistir dentro de uma operação de fábrica. Escolher uma delas não substitui os acordos que tornam a entrega verificável, e uma operação compartilhada não obriga todas as equipes a trabalhar da mesma maneira.<sup><a id="citacao-18-1" href="#referencia-18" aria-label="Ver referência 18">18</a></sup>

**Exemplo didático fictício:** a universidade atende matrícula, portal e emissão de documentos. As equipes podem organizar suas atividades de formas diferentes e ainda compartilhar critérios de prontidão, revisão, testes e acompanhamento. Isso mantém uma base operacional comum sem transformar a rotina de todas as equipes em uma regra única.<sup><a id="citacao-19-1" href="#referencia-19" aria-label="Ver referência 19">19</a></sup>

Dentro dessa base, a organização do trabalho pode enfatizar serviços, produto, projeto ou coordenação de iniciativas. O problema predominante orienta a escolha.

### Serviços: tornar a repetição previsível

A **fábrica de serviços** é adequada quando há alto volume de pedidos relativamente semelhantes. Um catálogo explicita o que pode ser solicitado, quais informações devem chegar e o que comprova o término. Lead time, cumprimento do SLA e reaberturas ajudam a examinar a operação. O cuidado é não reduzir toda necessidade a uma fila de pedidos padronizados: se surge trabalho de descoberta, ele pode exigir outro encaminhamento.<sup><a id="citacao-20-1" href="#referencia-20" aria-label="Ver referência 20">20</a></sup>

### Produto: aprender enquanto a solução evolui

A orientação a **produto** é útil quando há evolução contínua e incerteza sobre necessidades e soluções. Um time estável e multidisciplinar mantém um **backlog**, o conjunto organizado de trabalho do produto. **Discovery** é o esforço de compreender o problema e validar hipóteses; **delivery** é o desenvolvimento e a entrega da solução. Os dois precisam se relacionar: produzir funcionalidades sem examinar hipóteses pode manter a equipe ocupada sem esclarecer o valor da mudança.<sup><a id="citacao-21-1" href="#referencia-21" aria-label="Ver referência 21">21</a></sup>

Medidas de adoção, conversão, retenção e engajamento ajudam a observar uso e valor. Sua leitura deve acompanhar a estabilidade: falhas após mudanças, tempo de recuperação e lead time também importam. Componentes, contratos e observação em produção sustentam a evolução contínua. O backlog não deve se tornar uma lista infinita sem prioridades e sem conexão com o resultado esperado.<sup><a id="citacao-21-2" href="#referencia-21" aria-label="Ver referência 21">21</a></sup>

### Projeto: cumprir um objetivo com limites definidos

A orientação a **projeto** atende situações com objetivo, escopo, prazo e orçamento definidos. Uma **baseline** é a referência combinada para acompanhar o trabalho; marcos tornam visível seu avanço. Cumprimento de marcos, mudanças de escopo e defeitos ajudam a avaliar a execução, junto de metas de serviço quando há impacto para quem usa o sistema.<sup><a id="citacao-22-1" href="#referencia-22" aria-label="Ver referência 22">22</a></sup>

Ter data fixa não exige fazer uma única implantação de tudo ao final, chamada de *big bang*. Marcos incrementais, critérios de aceite observáveis, liberação em ondas, controle de funcionalidades e possibilidade de retorno permitem conciliar prazo e segurança. No exemplo fictício de uma migração, o compromisso de término convive com etapas de entrega verificáveis.<sup><a id="citacao-22-2" href="#referencia-22" aria-label="Ver referência 22">22</a></sup><sup><a id="citacao-10-2" href="#referencia-10" aria-label="Ver referência 10">10</a></sup>

### Programas e portfólio: coordenar dependências e prioridades

Quando iniciativas se multiplicam e dependem umas das outras, é preciso tornar essas relações visíveis, sincronizar janelas de liberação e alocar capacidade considerando valor e risco. Programas e portfólio aparecem nessa camada de coordenação e priorização; isso não torna os dois termos sinônimos. O foco aqui é entender o problema operacional comum: entregas que parecem viáveis isoladamente podem permanecer bloqueadas por uma dependência não tratada.<sup><a id="citacao-23-1" href="#referencia-23" aria-label="Ver referência 23">23</a></sup>

### Os modelos coexistem na universidade

**Quadro didático fictício:** o mesmo ambiente pode conter os quatro tipos de necessidade. A classificação depende da natureza do trabalho, e não apenas do nome do sistema ou do departamento que solicita.<sup><a id="citacao-24-1" href="#referencia-24" aria-label="Ver referência 24">24</a></sup>

| Necessidade | Ênfase de organização | O que precisa ficar visível |
| --- | --- | --- |
| Correções e pedidos semelhantes de APIs | Serviços | Tipo de serviço, entrada, saída, prazo e reaberturas. |
| Evolução do aplicativo e do ambiente virtual de aprendizagem — AVA | Produto | Problemas e hipóteses, prioridades, entregas e uso. |
| Migração ou adequação com data definida | Projeto | Escopo, marcos, aceite e implantação incremental. |
| Integração entre matrícula, biblioteca, AVA, financeiro e identidade | Coordenação de programa | Dependências entre iniciativas e janelas de liberação. |

Esse quadro aplica os modelos ao caso universitário. Todos podem compartilhar critérios, automação, qualidade, rastreabilidade e medidas; o que muda é a necessidade de organização predominante.<sup><a id="citacao-24-2" href="#referencia-24" aria-label="Ver referência 24">24</a></sup><sup><a id="citacao-20-2" href="#referencia-20" aria-label="Ver referência 20">20</a></sup><sup><a id="citacao-21-3" href="#referencia-21" aria-label="Ver referência 21">21</a></sup><sup><a id="citacao-22-3" href="#referencia-22" aria-label="Ver referência 22">22</a></sup><sup><a id="citacao-23-2" href="#referencia-23" aria-label="Ver referência 23">23</a></sup>

## Governança leve: escolher o fluxo e acompanhar {#governanca}

A **governança leve** cria visibilidade e ajuda a remover bloqueios com controles proporcionais ao risco. Uma porta de entrada única permite examinar a natureza do pedido e encaminhá-lo sem criar estruturas paralelas para cada modelo. O trabalho rotineiro e repetível segue o catálogo; a descoberta e a evolução contínua seguem o produto; uma obrigação com data definida pode exigir projeto. A coordenação acompanha as dependências entre essas frentes.<sup><a id="citacao-25-1" href="#referencia-25" aria-label="Ver referência 25">25</a></sup>

A triagem pode usar três perguntas, com decisões revisáveis:

1. O pedido é rotineiro e repetível, com entrada e saída conhecidas? Examine seu enquadramento no catálogo.
2. É preciso descobrir o problema, validar hipóteses ou evoluir continuamente uma solução? Examine o encaminhamento a produto.
3. Existe uma data inegociável ou obrigação que exige organizar marcos e limites? Examine o tratamento como projeto.

As perguntas formam um instrumento de classificação, não uma separação permanente entre organizações. Uma demanda que começou como serviço pode revelar incerteza e exigir descoberta; um produto pode gerar um projeto pontual por uma obrigação com prazo. A base de engenharia compartilhada permite rever o encaminhamento sem reconstruir todo o processo.<sup><a id="citacao-25-2" href="#referencia-25" aria-label="Ver referência 25">25</a></sup>

### Exemplo didático fictício: três pedidos acadêmicos

Uma **declaração de matrícula** com procedimento conhecido pode ser atendida como serviço: identificar a entrada e comprovar a emissão. Uma **melhoria do portal** que exige entender dificuldades de uso pede investigação e evolução de produto. Uma **adequação financeira com prazo obrigatório** pede organização de projeto, com marcos e aceite. A decisão resulta da repetição, incerteza e restrição envolvidas; a palavra “melhoria” ou o setor financeiro, sozinhos, não classificam a demanda.<sup><a id="citacao-26-1" href="#referencia-26" aria-label="Ver referência 26">26</a></sup>

O acompanhamento fecha o ciclo. Se crescem as reaberturas, examine os acordos de entrada e conclusão, contratos e verificações. Se aparecem bloqueios entre iniciativas, dê visibilidade às dependências. Acrescentar formulários sem corrigir a condição que gera o problema apenas amplia o controle aparente. Catálogo, critérios, engenharia, rastreabilidade e medidas precisam atuar juntos para sustentar a melhoria da operação.<sup><a id="citacao-25-3" href="#referencia-25" aria-label="Ver referência 25">25</a></sup>

## Pratique e confira {#pratica}

As situações abaixo são **exercícios didáticos fictícios**, derivados dos conceitos desenvolvidos. Tente responder antes de abrir os comentários.

### Atividade 1 · Prontidão e conclusão

Uma equipe recebe “integrar o portal ao cadastro”, sem responsável pelo sistema de origem, sem dependências descritas e sem aceite. Liste três informações para tornar o pedido pronto para iniciar e três evidências para demonstrar a conclusão. Explique por que um título de tarefa e código escrito não bastam.

<details>
<summary>Conferir resposta comentada</summary>

Para o **DoR**, uma resposta possível é identificar o responsável, explicitar as dependências e registrar critérios de aceite. O objetivo também precisa estar compreensível. Esses elementos reduzem ambiguidades e mostram condições de iniciar. Para o **DoD**, são exemplos coerentes os resultados de testes, a revisão registrada e a comprovação de implantação e aceite conforme o serviço, com documentação pertinente. O título apenas nomeia uma intenção; código escrito não demonstra atendimento ao resultado nem cumprimento das verificações. Variações são válidas quando distinguem claramente informação de entrada e evidência de saída.<sup><a id="citacao-11-5" href="#referencia-11" aria-label="Ver referência 11">11</a></sup><sup><a id="citacao-12-5" href="#referencia-12" aria-label="Ver referência 12">12</a></sup>

</details>

### Atividade 2 · Investigar medidas

O lead time de um serviço subiu e aumentaram as reaberturas. Apresente duas hipóteses verificáveis e indique registros que consultaria. Depois, diferencie SLI, SLO e SLA e calcule a tolerância de uma meta de 99,9% na mesma base e período.

<details>
<summary>Conferir resposta comentada</summary>

Uma hipótese é acúmulo de itens em filas ou excesso de simultaneidade: examine o percurso e o WIP. Outra é aceite ambíguo ou verificação insuficiente: examine os critérios, resultados de testes e motivos de reabertura. Os indicadores justificam a investigação, mas não provam uma causa nem autorizam culpar indivíduos. A comparação pertinente acompanha o sistema e seu contexto.<sup><a id="citacao-14-4" href="#referencia-14" aria-label="Ver referência 14">14</a></sup><sup><a id="citacao-13-2" href="#referencia-13" aria-label="Ver referência 13">13</a></sup>

**SLI** é o indicador observado; **SLO**, sua meta; **SLA**, o compromisso acordado do serviço. No cálculo proposto, 100% − 99,9% = **0,1%**. A interpretação só vale mantendo a mesma base e período; a tolerância ajuda a decidir quando priorizar estabilização.<sup><a id="citacao-15-4" href="#referencia-15" aria-label="Ver referência 15">15</a></sup>

</details>

### Atividade 3 · Encaminhar e rever

Classifique os pedidos de declaração de matrícula, investigação de melhoria do portal e adequação financeira com prazo. Que descoberta poderia justificar rever a classificação? Por que equipes com métodos diferentes ainda podem compartilhar uma fábrica?

<details>
<summary>Conferir resposta comentada</summary>

A declaração com procedimento conhecido se aproxima de **serviço**; a melhoria que exige descoberta, de **produto**; a adequação com prazo e objetivo delimitados, de **projeto**. Se o pedido supostamente repetível revelar um problema ainda não compreendido, deve-se examinar sua passagem para descoberta de produto. O critério é a natureza do trabalho, e o encaminhamento pode ser revisto.<sup><a id="citacao-26-2" href="#referencia-26" aria-label="Ver referência 26">26</a></sup><sup><a id="citacao-25-4" href="#referencia-25" aria-label="Ver referência 25">25</a></sup>

As equipes podem usar métodos diferentes porque método organiza a rotina da equipe, enquanto a fábrica compartilha catálogo, critérios, verificações e medidas da operação. Essa base mantém o trabalho examinável sem impor uma única cadência a todos.<sup><a id="citacao-18-2" href="#referencia-18" aria-label="Ver referência 18">18</a></sup>

</details>

### Questões de revisão

1. Padronizar uma fábrica exige criar sistemas iguais?
2. Testar o contrato de uma integração equivale a testar uma jornada inteira?
3. Um PR com código escrito comprova sozinho o DoD?
4. Instalar uma ferramenta garante ALM?
5. Um projeto com data fixa precisa de uma implantação única ao final?

<details>
<summary>Conferir respostas comentadas</summary>

**1. Não.** Padronizam-se processos, responsabilidades e critérios para que sistemas diferentes possam ser entregues com um caminho conhecido. Confundir padrão de operação com uniformidade de solução elimina a distinção central da fábrica.<sup><a id="citacao-1-4" href="#referencia-1" aria-label="Ver referência 1">1</a></sup>

**2. Não.** O contrato verifica compatibilidade dos acordos da integração; o teste ponta a ponta acompanha uma jornada completa. As verificações têm alcances diferentes e devem ser escolhidas conforme o risco.<sup><a id="citacao-5-12" href="#referencia-5" aria-label="Ver referência 5">5</a></sup>

**3. Não.** O PR oferece um ponto de revisão da mudança. A conclusão depende das evidências combinadas, como aceite, testes, revisão, documentação e implantação conforme o serviço.<sup><a id="citacao-5-13" href="#referencia-5" aria-label="Ver referência 5">5</a></sup><sup><a id="citacao-11-6" href="#referencia-11" aria-label="Ver referência 11">11</a></sup>

**4. Não.** ALM integra práticas, processos e ferramentas. Sem ligação entre requisito, mudança, verificações, entrega e efeito em produção, a existência de uma ferramenta não demonstra rastreabilidade.<sup><a id="citacao-16-6" href="#referencia-16" aria-label="Ver referência 16">16</a></sup>

**5. Não.** O prazo organiza os compromissos, mas pode ser atendido por marcos e entregas incrementais, com aceite observável e implantação controlada. Dividir a transição ajuda a tratar seu risco.<sup><a id="citacao-22-4" href="#referencia-22" aria-label="Ver referência 22">22</a></sup>

</details>

## Referências {#referencias}

O livro é a base conceitual; transcrição e slides são materiais da aula ao vivo que delimitam os assuntos e sustentam seus exemplos e complementos. Os números retornam aos trechos correspondentes.

<ol class="references">
<li id="referencia-1">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 10–14. <a href="#citacao-1-1" aria-label="Voltar à citação 1, ocorrência 1">↩ 1</a> <a href="#citacao-1-2" aria-label="Voltar à citação 1, ocorrência 2">↩ 2</a> <a href="#citacao-1-3" aria-label="Voltar à citação 1, ocorrência 3">↩ 3</a> <a href="#citacao-1-4" aria-label="Voltar à citação 1, ocorrência 4">↩ 4</a></li>
<li id="referencia-2">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 12, “Panorama histórico e consolidação do paradigma”. <a href="#citacao-2-1" aria-label="Voltar à citação 2, ocorrência 1">↩ 1</a></li>
<li id="referencia-3">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 174, Site Reliability Engineering (SRE) e confiabilidade ao longo do tempo. <a href="#citacao-3-1" aria-label="Voltar à citação 3, ocorrência 1">↩ 1</a></li>
<li id="referencia-4">Tecnologias Emergentes em Engenharia de Software — Aula 1. Slides da aula ao vivo: slides/aula01.pdf, slide 6. Transcrição da aula ao vivo: transcrição/aula01.txt, 19:17–25:00. Caso tratado como situação didática. <a href="#citacao-4-1" aria-label="Voltar à citação 4, ocorrência 1">↩ 1</a> <a href="#citacao-4-2" aria-label="Voltar à citação 4, ocorrência 2">↩ 2</a></li>
<li id="referencia-5">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 15–19. <a href="#citacao-5-1" aria-label="Voltar à citação 5, ocorrência 1">↩ 1</a> <a href="#citacao-5-2" aria-label="Voltar à citação 5, ocorrência 2">↩ 2</a> <a href="#citacao-5-3" aria-label="Voltar à citação 5, ocorrência 3">↩ 3</a> <a href="#citacao-5-4" aria-label="Voltar à citação 5, ocorrência 4">↩ 4</a> <a href="#citacao-5-5" aria-label="Voltar à citação 5, ocorrência 5">↩ 5</a> <a href="#citacao-5-6" aria-label="Voltar à citação 5, ocorrência 6">↩ 6</a> <a href="#citacao-5-7" aria-label="Voltar à citação 5, ocorrência 7">↩ 7</a> <a href="#citacao-5-8" aria-label="Voltar à citação 5, ocorrência 8">↩ 8</a> <a href="#citacao-5-9" aria-label="Voltar à citação 5, ocorrência 9">↩ 9</a> <a href="#citacao-5-10" aria-label="Voltar à citação 5, ocorrência 10">↩ 10</a> <a href="#citacao-5-11" aria-label="Voltar à citação 5, ocorrência 11">↩ 11</a> <a href="#citacao-5-12" aria-label="Voltar à citação 5, ocorrência 12">↩ 12</a> <a href="#citacao-5-13" aria-label="Voltar à citação 5, ocorrência 13">↩ 13</a></li>
<li id="referencia-6">Tecnologias Emergentes em Engenharia de Software — Aula 1. Slides da aula ao vivo: slides/aula01.pdf, slide 7. Transcrição da aula ao vivo: transcrição/aula01.txt, 25:01–31:44. <a href="#citacao-6-1" aria-label="Voltar à citação 6, ocorrência 1">↩ 1</a> <a href="#citacao-6-2" aria-label="Voltar à citação 6, ocorrência 2">↩ 2</a> <a href="#citacao-6-3" aria-label="Voltar à citação 6, ocorrência 3">↩ 3</a></li>
<li id="referencia-7">Tecnologias Emergentes em Engenharia de Software — Aula 1. Slides da aula ao vivo: slides/aula01.pdf, slide 10. Transcrição da aula ao vivo: transcrição/aula01.txt, 44:23–50:49. Situação didática; caráter fictício dos resultados explicitado em 50:35. <a href="#citacao-7-1" aria-label="Voltar à citação 7, ocorrência 1">↩ 1</a> <a href="#citacao-7-2" aria-label="Voltar à citação 7, ocorrência 2">↩ 2</a></li>
<li id="referencia-8">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 15 e 23, operação e post-mortem sem culpa; p. 67, análise do incidente apoiada em contrato, alerta e correção. Slides da aula ao vivo: slides/aula01.pdf, slides 7 e 10. <a href="#citacao-8-1" aria-label="Voltar à citação 8, ocorrência 1">↩ 1</a></li>
<li id="referencia-9">Transcrição da aula ao vivo 01: transcrição/aula01.txt, 56:24–57:04; menção a Fortify em 56:39. Exemplo de ferramenta de análise estática. <a href="#citacao-9-1" aria-label="Voltar à citação 9, ocorrência 1">↩ 1</a></li>
<li id="referencia-10">Transcrição da aula ao vivo 01: transcrição/aula01.txt, 47:47–48:20 e 1:12:17–1:12:57. Complementos sobre implantação controlada, incluindo as menções a blue-green e canary. <a href="#citacao-10-1" aria-label="Voltar à citação 10, ocorrência 1">↩ 1</a> <a href="#citacao-10-2" aria-label="Voltar à citação 10, ocorrência 2">↩ 2</a></li>
<li id="referencia-11">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 16–18. <a href="#citacao-11-1" aria-label="Voltar à citação 11, ocorrência 1">↩ 1</a> <a href="#citacao-11-2" aria-label="Voltar à citação 11, ocorrência 2">↩ 2</a> <a href="#citacao-11-3" aria-label="Voltar à citação 11, ocorrência 3">↩ 3</a> <a href="#citacao-11-4" aria-label="Voltar à citação 11, ocorrência 4">↩ 4</a> <a href="#citacao-11-5" aria-label="Voltar à citação 11, ocorrência 5">↩ 5</a> <a href="#citacao-11-6" aria-label="Voltar à citação 11, ocorrência 6">↩ 6</a></li>
<li id="referencia-12">Tecnologias Emergentes em Engenharia de Software — Aula 1. Slides da aula ao vivo: slides/aula01.pdf, slide 8. Transcrição da aula ao vivo: transcrição/aula01.txt, 32:15–37:32. <a href="#citacao-12-1" aria-label="Voltar à citação 12, ocorrência 1">↩ 1</a> <a href="#citacao-12-2" aria-label="Voltar à citação 12, ocorrência 2">↩ 2</a> <a href="#citacao-12-3" aria-label="Voltar à citação 12, ocorrência 3">↩ 3</a> <a href="#citacao-12-4" aria-label="Voltar à citação 12, ocorrência 4">↩ 4</a> <a href="#citacao-12-5" aria-label="Voltar à citação 12, ocorrência 5">↩ 5</a></li>
<li id="referencia-13">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 35, definição de WIP. <a href="#citacao-13-1" aria-label="Voltar à citação 13, ocorrência 1">↩ 1</a> <a href="#citacao-13-2" aria-label="Voltar à citação 13, ocorrência 2">↩ 2</a></li>
<li id="referencia-14">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 16, métricas de fluxo e comparação do sistema antes/depois. Transcrição da aula ao vivo: transcrição/aula01.txt, 37:41–40:13. <a href="#citacao-14-1" aria-label="Voltar à citação 14, ocorrência 1">↩ 1</a> <a href="#citacao-14-2" aria-label="Voltar à citação 14, ocorrência 2">↩ 2</a> <a href="#citacao-14-3" aria-label="Voltar à citação 14, ocorrência 3">↩ 3</a> <a href="#citacao-14-4" aria-label="Voltar à citação 14, ocorrência 4">↩ 4</a></li>
<li id="referencia-15">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 45–46, indicadores, objetivos e orçamento de erro. Slides da aula ao vivo: slides/aula01.pdf, slide 9. Transcrição: transcrição/aula01.txt, 40:53–42:41. Complemento de 99,9% calculado aritmeticamente: 0,1%. <a href="#citacao-15-1" aria-label="Voltar à citação 15, ocorrência 1">↩ 1</a> <a href="#citacao-15-2" aria-label="Voltar à citação 15, ocorrência 2">↩ 2</a> <a href="#citacao-15-3" aria-label="Voltar à citação 15, ocorrência 3">↩ 3</a> <a href="#citacao-15-4" aria-label="Voltar à citação 15, ocorrência 4">↩ 4</a></li>
<li id="referencia-16">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 19–20. Slides da aula ao vivo: slides/aula01.pdf, slide 14. Transcrição: transcrição/aula01.txt, 1:02:18–1:06:06. <a href="#citacao-16-1" aria-label="Voltar à citação 16, ocorrência 1">↩ 1</a> <a href="#citacao-16-2" aria-label="Voltar à citação 16, ocorrência 2">↩ 2</a> <a href="#citacao-16-3" aria-label="Voltar à citação 16, ocorrência 3">↩ 3</a> <a href="#citacao-16-4" aria-label="Voltar à citação 16, ocorrência 4">↩ 4</a> <a href="#citacao-16-5" aria-label="Voltar à citação 16, ocorrência 5">↩ 5</a> <a href="#citacao-16-6" aria-label="Voltar à citação 16, ocorrência 6">↩ 6</a></li>
<li id="referencia-17">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 12 e 16, componentes versionados, contratos e compatibilidade. Transcrição da aula ao vivo: transcrição/aula01.txt, 42:47–43:35. <a href="#citacao-17-1" aria-label="Voltar à citação 17, ocorrência 1">↩ 1</a> <a href="#citacao-17-2" aria-label="Voltar à citação 17, ocorrência 2">↩ 2</a></li>
<li id="referencia-18">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 17–19, “Fábrica ≠ metodologia”. Slides da aula ao vivo: slides/aula01.pdf, slides 11–12. Transcrição: transcrição/aula01.txt, 50:54–55:11. <a href="#citacao-18-1" aria-label="Voltar à citação 18, ocorrência 1">↩ 1</a> <a href="#citacao-18-2" aria-label="Voltar à citação 18, ocorrência 2">↩ 2</a></li>
<li id="referencia-19">Tecnologias Emergentes em Engenharia de Software — Aula 1. Slides da aula ao vivo: slides/aula01.pdf, slide 13. Transcrição da aula ao vivo: transcrição/aula01.txt, 58:24–1:02:10. Caso universitário tratado como situação didática. <a href="#citacao-19-1" aria-label="Voltar à citação 19, ocorrência 1">↩ 1</a></li>
<li id="referencia-20">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 20–21, fábrica de serviços. Slides da aula ao vivo: slides/aula01.pdf, slide 15. Transcrição: transcrição/aula01.txt, 1:06:15–1:07:59. <a href="#citacao-20-1" aria-label="Voltar à citação 20, ocorrência 1">↩ 1</a> <a href="#citacao-20-2" aria-label="Voltar à citação 20, ocorrência 2">↩ 2</a></li>
<li id="referencia-21">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 21, orientação a produto. Slides da aula ao vivo: slides/aula01.pdf, slide 15. Transcrição: transcrição/aula01.txt, 1:08:06–1:10:29. <a href="#citacao-21-1" aria-label="Voltar à citação 21, ocorrência 1">↩ 1</a> <a href="#citacao-21-2" aria-label="Voltar à citação 21, ocorrência 2">↩ 2</a> <a href="#citacao-21-3" aria-label="Voltar à citação 21, ocorrência 3">↩ 3</a></li>
<li id="referencia-22">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, p. 21, modelo de projeto. Slides da aula ao vivo: slides/aula01.pdf, slide 16. Transcrição: transcrição/aula01.txt, 1:10:42–1:13:42. <a href="#citacao-22-1" aria-label="Voltar à citação 22, ocorrência 1">↩ 1</a> <a href="#citacao-22-2" aria-label="Voltar à citação 22, ocorrência 2">↩ 2</a> <a href="#citacao-22-3" aria-label="Voltar à citação 22, ocorrência 3">↩ 3</a> <a href="#citacao-22-4" aria-label="Voltar à citação 22, ocorrência 4">↩ 4</a></li>
<li id="referencia-23">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 21–22, coordenação de programas/portfólio. Slides da aula ao vivo: slides/aula01.pdf, slide 16. Transcrição: transcrição/aula01.txt, 1:13:48–1:15:20. <a href="#citacao-23-1" aria-label="Voltar à citação 23, ocorrência 1">↩ 1</a> <a href="#citacao-23-2" aria-label="Voltar à citação 23, ocorrência 2">↩ 2</a></li>
<li id="referencia-24">Tecnologias Emergentes em Engenharia de Software — Aula 1. Slides da aula ao vivo: slides/aula01.pdf, slide 17. Transcrição da aula ao vivo: transcrição/aula01.txt, 1:15:31–1:20:41. Aplicação didática dos modelos na universidade. <a href="#citacao-24-1" aria-label="Voltar à citação 24, ocorrência 1">↩ 1</a> <a href="#citacao-24-2" aria-label="Voltar à citação 24, ocorrência 2">↩ 2</a></li>
<li id="referencia-25">PORFÍRIO, Emerson José. Tecnologias Emergentes em Engenharia de Software. Livro, base conceitual: livro.pdf, pp. 22–24. Slides da aula ao vivo: slides/aula01.pdf, slide 18. Transcrição: transcrição/aula01.txt, 1:20:52–1:24:31. <a href="#citacao-25-1" aria-label="Voltar à citação 25, ocorrência 1">↩ 1</a> <a href="#citacao-25-2" aria-label="Voltar à citação 25, ocorrência 2">↩ 2</a> <a href="#citacao-25-3" aria-label="Voltar à citação 25, ocorrência 3">↩ 3</a> <a href="#citacao-25-4" aria-label="Voltar à citação 25, ocorrência 4">↩ 4</a></li>
<li id="referencia-26">Tecnologias Emergentes em Engenharia de Software — Aula 1. Slides da aula ao vivo: slides/aula01.pdf, slide 19. Transcrição da aula ao vivo: transcrição/aula01.txt, 1:24:40–1:29:08. Triagem universitária tratada como situação didática, sem reproduzir percentuais como resultados empíricos. <a href="#citacao-26-1" aria-label="Voltar à citação 26, ocorrência 1">↩ 1</a> <a href="#citacao-26-2" aria-label="Voltar à citação 26, ocorrência 2">↩ 2</a></li>
</ol>
