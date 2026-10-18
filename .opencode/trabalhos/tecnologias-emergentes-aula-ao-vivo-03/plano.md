# Plano — Aula ao vivo 03

## Identidade e propósito

- Título: **Software industrial: camadas, qualidade e integração resiliente**.
- Identificação visível: **Aula ao vivo 03 · Tecnologias emergentes em engenharia de software**.
- Tipo: aula-ao-vivo; não aprofundamento nem estudo de toda a Unidade 2.
- Objetivo: identificar a responsabilidade de cada camada, escolher indicadores de qualidade conforme o risco e resolver três situações de falha sem confundir ausência de confirmação com ausência de execução.
- Pré-requisitos: nenhum além de noções iniciais de software; definir CLP, SCADA, MES, ERP, API, evento, fila, P95, SLI, SLO, tracing, drift e idempotência antes de empregá-los em raciocínios.
- Vínculos reais: página da matéria e aulas ao vivo 01/02, sem assumir que o leitor já as leu. Preservar páginas existentes. Cartão novo deve identificar “Aula ao vivo 03”, com assunto e contagens atualizadas.
- Regras explícitas: `.opencode/editorial.md` e `.opencode/layout.md`. Fontes conceituais exclusivas da pasta da matéria. `evidencias.md` é o mapa de apoio; não citar IDs internos ao estudante.

## Abertura e ideia central

Abrir com uma pergunta concreta: uma máquina para, uma ordem fica sem confirmação e o estoque diverge; trata-se da mesma falha? Ensinar que sistemas conectados têm responsabilidades diferentes e que o diagnóstico exige localizar camada, risco, indicador e evidência. Evitar atribuir causa só pelo sintoma. Introdução autossuficiente, sem cronologia da aula. Ideia central: qualidade depende do contexto de uso; integração confiável prevê interrupções, atrasos e repetições. E001, E012, E025.

## Progressão, títulos e âncoras

A abertura fica no hero. O índice lista as dez seções abaixo, com números de dois dígitos. Subtítulos não precisam ampliar a lateral.

### 01 · Cinco camadas para localizar uma falha {#camadas}

E001–E006, E010–E011. Primeiro separar controle físico, execução, gestão, integração e decisão. Tabela pedagógica com responsabilidade, exemplos, risco e evidência: sensores/atuadores/CLP; SCADA/MES; ERP; IIoT/APIs/eventos; análise/IA. Explicar que SCADA supervisiona e MES acompanha execução/ordens, sem equipará-los. Produzir diferença clara entre dado medido, execução confirmada e registro empresarial reconciliado. Exemplo de 500 produzidas e 480 registradas: é necessário localizar a discrepância, não assumir que produziram apenas 480. Acompanhamento por turno, taxa de confirmação e tempo de acerto devem ter objeto explicitado.

Após a tabela, explicar buffer temporário, carimbo de tempo, reenvio e backoff como respostas a conexão intermitente, sujeitos a tempo e segurança da operação. Incluir nota curta de degradação graciosa: preservar funções possíveis, sem inventar sigla/padrão. Feature flags em integração: ativação/desativação de função sem nova implantação completa, sem apresentá-las como substituto de investigação. Visual 1 encerra a seção.

### 02 · Tipos de software e prioridades de qualidade {#tipos}

E007–E009, E018. Distinguir três perguntas: camadas dizem onde/responsabilidade; categorias dizem que tipo de software; ciclo de entrega diz quando as mudanças são produzidas. Listar sete categorias sem criar hierarquia: críticos, corporativos, embarcados, Analytics/AIoT, Edge/IoT, SaaS/Cloud, móveis. Definir edge como processamento perto da origem e AIoT como combinação de análise, IA e IoT. Explicar aplicações móveis de inspeção/ordens/alertas e relação com conectividade. Tabela de prioridades: embarcado/tempo e confiabilidade, corporativo/integridade e auditoria, crítico/validação e evidências, móvel/offline e sincronização, nuvem/disponibilidade e latência, decisão/qualidade de dados. Não tornar prioridades exclusivas nem regras absolutas; domínio de saúde, indústria, agro e logística modifica os pesos. Nota do ciclo: descoberta→refino→planejamento→desenvolvimento→testes→homologação→release; sete etapas não são sete camadas.

### 03 · Cinco lentes para tornar qualidade mensurável {#qualidade}

E013–E017. Organizar em cinco agrupamentos exatos: disponibilidade; desempenho; integridade e rastreabilidade; segurança e privacidade; observabilidade. Definir cada um e associar indicador com contexto: minutos indisponíveis por turno separando parada planejada/inesperada; tempo de resposta/P95; reconciliação e cadeia requisito→alteração→teste→pipeline→release; menor privilégio/criptografia/segredos e análises automatizadas; logs/métricas/tracing para entender caminho do pedido. Disponibilidade não implica 24/7 universal. Integridade e rastreabilidade não são sinônimos; tracing entre serviços não é a cadeia de mudanças.

Desenvolver P95 separadamente de SLO: indicador observado versus meta; exemplo fictício “95% das respostas em até 2 s” é meta contextual. Não é média nem garantia para todas as respostas. Definir SLI como indicador e SLO como objetivo. Análise estática examina código sem executar, dinâmica observa aplicação executando; não restringir dinâmica à produção nem prometer segurança total.

### 04 · Caso industrial: investigar sem pular camadas {#caso-industrial}

E012, apoiado por E002–E004 e E013–E017. Apresentar o caso da linha de montagem em texto próprio: máquinas não respondem, ordens sem confirmação, estoque divergente. Passos: (1) priorizar risco a operadores/equipamentos; (2) verificar sensor/rede/CLP com perda/latência/energia; (3) confirmar recebimento/processamento no MES, disponibilidade, filas; (4) reconciliar ERP e quantidade real; (5) correlacionar logs e métricas e verificar correção. Perda elevada é indício, não prova final. Mostrar como um sintoma repercute em outra camada sem concluir que todo incidente tem a mesma causa. Não inventar diagnóstico definitivo.

### 05 · Caso agrícola: operar localmente e sincronizar depois {#caso-agricola}

E019, E010; E020 como ilustração breve. Apresentar sensores de temperatura/umidade e app de campo com conexão limitada. Fluxo explicativo: manter funções essenciais locais; guardar registros com identificadores e carimbo de tempo; enfileirar pendências; reintentar com espaçamento e limite; deduplicar e reconciliar quando a conexão retornar. Não garantir armazenamento ilimitado ou sincronização instantânea. Segurança deve abranger dados locais e nuvem. Explicar métricas: pendências, sucesso/conflitos/reconciliados e P95 da sincronização. GPS/georreferenciamento, celular/Bluetooth e integração com irrigação entram apenas como exemplos mencionados que mostram a importância de conhecer hardware e domínio, sem protocolos ou implantação afirmada como universal.

### 06 · Caso de pedidos: repetir sem duplicar efeitos {#pedidos}

E021–E025. Definir API, evento, gateway e fila no contexto necessário. Explicar caminho loja→gateway→serviço de pedidos/banco→fila→pagamento/ERP. Ponto decisivo: operação pode ser aplicada e resposta perder-se; timeout não prova que nada ocorreu. Visual 2 mostra essa situação e o uso da mesma chave de operação.

Desenvolver idempotência passo a passo com exemplo didático fictício de chave 12345: receber pedido; consultar registro da operação; se já processado, retornar resultado registrado; se novo, processar e associar resultado; em nova tentativa preservar identidade. Não prometer exatamente uma execução física em toda arquitetura. Comparar funções: timeout limita espera; retry repete; backoff espaça progressivamente com limite; DLQ isola mensagens para investigação e reprocessamento controlado. DLQ não corrige a causa. Relacionar timeout à latência medida, sem fórmula inventada.

Contratos explícitos: entradas/saídas, obrigatórios, códigos e compatibilidade; OpenAPI para APIs e esquemas JSON/Avro para eventos. Versionamento e testes no pipeline/regressão antes da implantação; ordenação/deduplicação sem algoritmo inventado. Fechar com taxa de duplicação, P95, erros, mensagens em DLQ e tempo de reconciliação, apoiados por tracing/logs correlacionados.

### 07 · Dados, decisões e evolução de sistemas existentes {#dados-e-evolucao}

E006, E020, E027. Primeiro mostrar dependência de análises/IA em completude, atualidade, acurácia e linhagem dos dados. Distinguir mudança na distribuição dos dados e mudança na relação entre dados e resultado; não acrescentar detectores/algoritmos nem prometer prever toda falha. Em subseção curta, engenharia reversa é compreender projeto existente para evolução/migração e manutenção; IA é apoio sujeito a validação, conhecimento do domínio e hardware. Não inventar laboratório, código, solução de memória ou recomendações de linguagens. O elo pedagógico é entender comportamento real antes de alterar sistemas ou confiar em decisões.

### 08 · Síntese e prática {#pratica}

Síntese com quatro perguntas reutilizáveis: qual camada/tipo/domínio; qual risco; qual indicador/meta; qual evidência sustenta ação e verificação. Seguir com três atividades de aplicação, cada uma com rascunho não salvo e resposta comentada em details, legível na impressão. Enunciados explicitamente fictícios.

1. **Diagnóstico industrial:** 500 peças contadas e 480 no ERP, ordens pendentes e perda de pacotes observada. Solicitar duas hipóteses situadas nas camadas, sequência segura e indicadores. Resposta: priorizar segurança; verificar controle/rede e confirmação MES antes de reconciliar ERP; perda não comprova causa; comparar contagem, confirmação, disponibilidade e tempo de acerto. E002–E004, E012–E015. Critério: separar hipótese/evidência e nunca “corrigir” estoque sem reconciliação.
2. **Campo desconectado:** app registra 12 inspeções fictícias e conexão retorna; alguns envios recebem nova tentativa. Pedir fluxo e métricas. Resposta: persistência local/fila, identificadores estáveis, reenvio com backoff/limite, deduplicação e reconciliação, segurança local/nuvem; pendências, conflitos/sucesso, P95. E010, E019. Não calcular números ausentes nem garantir que 12 tentativas significam 12 registros únicos.
3. **Pedido sem confirmação:** cobrança aplicada, resposta perdida e usuário repete operação com a mesma chave. Solicitar comportamento e diferença de ferramentas. Resposta: recuperar resultado registrado sem nova cobrança; timeout/retry/backoff têm funções distintas; DLQ quando mensagem não é processável e precisa investigação; observar duplicação/latência/erro/reconciliação. E021–E025. Critério: preservar identidade da operação e não tratar timeout como rollback.

### 09 · Questionário com respostas comentadas {#questionario}

Quatro perguntas curtas com gabaritos em details e referência em cada resposta:

1. “As sete categorias formam a sequência entre sensor e ERP?” Não: categorias classificam software; cinco camadas distribuem responsabilidades; ciclo tem sete etapas de entrega. E007–E009.
2. “P95 de 2 s significa média de 2 s ou todas as respostas abaixo disso?” Nenhuma; é limiar observado para 95%; meta de 95% até 2 s é SLO distinto da medição. E014.
3. “Tracing e rastreabilidade da mudança são a mesma coisa?” Não; tracing acompanha o pedido entre serviços; cadeia da mudança conecta requisito, alteração, testes e release. E015, E017.
4. “Uma nova distribuição dos dados e uma nova relação dados/resultado descrevem o mesmo desvio?” Não; distinguir desvio de dados e mudança de conceito, sem deduzir causa/algoritmo. E006.

### 10 · Referências {#referencias}

Lista única contínua; entradas abaixo, numeradas pela primeira ocorrência planejada. Livro identificado como base conceitual, slides/transcrição como materiais da aula ao vivo. Usar páginas físicas do PDF. Sem links aos arquivos de trabalho, IDs internos nem timestamps no desenvolvimento. Cada chamada usa sup/a, ID único e destino real; retornos gerados para todas as ocorrências, inclusive visuais/respostas.

## Mapa de referências e primeira ocorrência

Ordem proposta fixa para o redator; se alterar a progressão, renumerar conjuntamente post, mapa e créditos de visuais. Evitar chamada adiantada que desordene numeração.

| Número | Fonte/localizador completo a publicar | Evidências/primeira aplicação |
|---|---|---|
| 1 | PORFÍRIO, Emerson José. *Tecnologias Emergentes em Engenharia de Software*. Livro, base conceitual, `livro.pdf`, páginas físicas 57–60, “Mapa do terreno” e “Onde cada software vive”. | E001–E006; abertura/camadas |
| 2 | SANTOS, Rômulo. *Tecnologias Emergentes em Engenharia de Software — Aula 3*. Slides da aula ao vivo, `slides/aula03.pdf`, slides 4–8. | E002–E009; camadas |
| 3 | PORFÍRIO. Livro, base conceitual, `livro.pdf`, página física 65, “Domínios e riscos”. | E010–E011; continuidade e degradação |
| 4 | *Aula ao vivo 03*. Transcrição, `transcrição/aula03.txt`, trechos 18:04–24:46 e 27:51–28:45, categorias e ciclo de entrega. | E007–E009; tipos |
| 5 | PORFÍRIO. Livro, base conceitual, `livro.pdf`, páginas físicas 61–65, “Requisitos que mudam a régua”, tipos de software e “Domínios e riscos”. | E013–E019; prioridades |
| 6 | SANTOS. Slides da aula ao vivo 03, `slides/aula03.pdf`, slides 10–11, requisitos e prioridades por produto. | E013–E018; qualidade |
| 7 | PORFÍRIO. Livro, base conceitual, `livro.pdf`, páginas físicas 60–61 e 66, indicadores, metas e “Integração e evidências”. | E014; P95, SLI e SLO |
| 8 | SANTOS. Slides da aula ao vivo 03, `slides/aula03.pdf`, slide 9, “Estudo de caso 1: Falha em uma linha de produção industrial”. | E012; caso industrial |
| 9 | *Aula ao vivo 03*. Transcrição, `transcrição/aula03.txt`, 43:03–50:57, diagnóstico por camadas. | E012; caso industrial |
| 10 | SANTOS. Slides da aula ao vivo 03, `slides/aula03.pdf`, slide 12, “Estudo de caso 2”. | E019; caso agrícola |
| 11 | *Aula ao vivo 03*. Transcrição, `transcrição/aula03.txt`, 1:11:12–1:14:51, operação offline, sincronização e indicadores. | E019; caso agrícola |
| 12 | *Aula ao vivo 03*. Transcrição, `transcrição/aula03.txt`, 1:10:23–1:10:50 e 1:30:54–1:31:58, georreferenciamento, conectividade e domínio agrícola. | E020; exemplo de domínio |
| 13 | PORFÍRIO. Livro, base conceitual, `livro.pdf`, página física 66, “Integração e evidências”. | E021–E025; pedidos |
| 14 | SANTOS. Slides da aula ao vivo 03, `slides/aula03.pdf`, slides 13–14, pedidos duplicados e práticas de integração. | E021–E025; pedidos |
| 15 | *Aula ao vivo 03*. Transcrição, `transcrição/aula03.txt`, 1:16:17–1:25:37, confirmação perdida, idempotência, timeout, backoff, DLQ e contratos. | E021–E025; pedidos |
| 16 | *Aula ao vivo 03*. Transcrição, `transcrição/aula03.txt`, 40:53–42:42, qualidade de dados e tipos de desvio. | E006; dados/decisões |
| 17 | *Aula ao vivo 03*. Transcrição, `transcrição/aula03.txt`, 1:26:41–1:31:58 e 1:32:50–1:33:14, engenharia reversa, evolução e conhecimento do domínio. | E027; evolução |

Nota para precisão: a mesma fonte/localizador reutiliza número. A referência 3 tem recorte próprio para a passagem de continuidade; 5 é conjunto mais amplo de tipos/requisitos. Não alegar que livro sustenta detalhes exclusivos de E020/E027. Se análises estática/dinâmica precisarem suporte adicional do trecho oral, criar entrada própria para 55:22–56:45 e 58:16–1:00:21 na primeira ocorrência e renumerar subsequentes; conferir originais na revisão.

## Visuais próprios

Exatamente dois SVGs próprios, sem scripts, em `public/assets/tecnologias-emergentes-aula-ao-vivo-03/`. Acompanhamento em `visuais.md` no formato aceito por `renderStudy`: dois títulos `## 1. ...` / `## 2. ...`, campos Caminho, Dimensões, Alt, Legenda e Crédito. Crédito com números em negrito para ligação conceitual. Priorizar largura de 1000–1200, letra legível e diagrama também compreensível por texto adjacente, sem cor como único código. Imagem clicável ampliável.

1. **Mapa das responsabilidades.** Cinco faixas com rótulo, função e indicador: dispositivos/controle físico/latência-perda; execução/confirmar ordens/taxa de confirmação; gestão/reconciliar registros/tempo de acerto; integração/conectar dados e serviços/latência-erros-fila; decisão/analisar com dados válidos/completude-atualidade. Setas representam circulação de dados, não sete etapas nem causalidade automática. E002–E006. Legenda: “Cinco camadas ajudam a localizar responsabilidades e escolher evidências antes de atribuir uma causa.” Alt descreve a sequência e responsabilidade. Crédito elaboração própria, referências **1 e 2**. Inserir entre fim de seção camadas e `## Tipos de software`.
2. **Confirmação perdida, efeito preservado.** Fluxo com primeira operação/chave 12345→pedido processado e resultado registrado; resposta perdida; nova tentativa com mesma chave→consulta ao registro→retorno do resultado sem novo efeito. Diferenciar graficamente caminho da operação e caminho da resposta, com rótulos textuais. E021–E023; não desenhar garantia transacional não documentada. Legenda: “Quando a confirmação se perde, a identidade da operação permite reconhecer a repetição e evitar efeitos duplicados.” Alt descreve primeira execução e consulta na repetição. Crédito elaboração própria, referências **13 e 14**. Inserir depois da apresentação do caso, antes de `### Idempotência` na seção pedidos.

## Cobertura integral e exclusões

E001–E006: abertura/camadas e dados; E007–E009: tipos e ciclo; E010–E011: continuidade; E012: caso industrial; E013–E017: qualidade; E018: tipos/prioridades; E019–E020: agrícola e domínio; E021–E025: pedidos/integração; E027: evolução. Todos os assuntos substantivos ministrados têm destino.

E026 fica excluído como seção própria: slides 15–16 e quarto caso foram adiados expressamente. Não criar “caso 4”, pós-deploy, smoke/health checks, evidence as code ou post-mortem como conteúdo ministrado. Cadeia requisito→release e teste no pipeline permanecem onde já sustentados por E015/E024, sem expandir para a próxima aula. Administrativos/digressões excluídos conforme itens 7, 8 e 11 das decisões em evidencias.md; alegações sem confirmação sobre memória, linguagens, aviação e ferramentas fonéticas não entram. Não expor essas decisões no artigo.

## Orientações de redação e montagem

Texto integral em `post.md`, parágrafos curtos o suficiente para leitura, mas com relações explicadas, sem resumo telegráfico. Histórias dos casos têm diagnóstico aberto quando as fontes não concluem causa. Exemplos novos e números fabricados devem ser rotulados didáticos/fictícios. Não escrever “segundo o livro”, “o professor disse”, “a transcrição mostra” nem cronologia de falas. Referências finais guardam procedência.

Compatibilidade: `renderStudy` aceita Markdown simples, tabelas, cabeçalhos com âncoras e detalhes HTML. Evitar listas aninhadas e HTML não suportado. Usar cada heading em bloco separado. Publicador deve adicionar posições específicas da aula 03 ao renderizador; os pontos atuais são exclusivos das aulas 01/02. Não adaptar títulos pedagogicamente apenas para satisfazer agulhas antigas. Sem copiar scripts de questionários de outra aula; rascunhos podem ser não salvos, identificadores exclusivos 03. Índice próprio de dez seções, lateral sticky com rolagem se necessário e controle móvel. Aplicar layout aprovado, impressão, progressão, foco e referências com retornos completos.

## Lacunas e estado

Não há lacuna essencial para a redação. E020/E027 têm suporte oral restrito, que limita a profundidade e impede inventar laboratório. Livro usa páginas físicas do PDF, sem ano duvidoso. Redator e revisor devem conferir formulações nos originais; este plano não substitui leitura factual. Planejamento concluído; pronto para redação.
