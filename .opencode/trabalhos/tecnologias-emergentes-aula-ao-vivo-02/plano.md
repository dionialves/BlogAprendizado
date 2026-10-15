# Plano editorial — aula ao vivo 02

## Identidade e objetivo

- Título: **Aula ao vivo 02 — Como organizar uma fábrica de software: processos, produtos, projetos e programas**.
- Tipo visível no título auxiliar, abertura, cartão e referências: **Aula ao vivo**.
- URL: `/tecnologias-emergentes-aula-ao-vivo-02/`.
- Objetivo: ao final, o estudante distingue os quatro modelos, reconhece o tipo de demanda, justifica combinações e relaciona organização, equipes, ciclos e uma esteira técnica compartilhada.
- Pré-requisitos: leitura introdutória da aula 01 recomendada, sem pressupor domínio de ferramentas. Explicar no próprio texto backlog, handoff, gates, roadmap, componentes e indicadores nos limites das evidências. Link de continuidade: `/tecnologias-emergentes-aula-ao-vivo-01/`.
- Fonte organizadora: transcrição da aula ao vivo 02. Slides 02 complementam a exposição; livro ausente. Não estruturar como estudo de capítulo.
- Ideia central: escolher um arranjo significa ajustar prioridades e responsabilidades ao trabalho; os quatro modelos podem coexistir e compartilhar suporte técnico.

## Progressão e evidências

| Seção/âncora sugerida | Desenvolvimento e função didática | Evidências e papel das fontes |
| --- | --- | --- |
| Abertura e roteiro (`visao-geral`) | Apresentar a pergunta “que tipo de trabalho esta equipe precisa organizar?”. Anunciar distinção e combinação dos quatro modelos. Contextualizar continuidade da aula 01 sem recontá-la. Incluir índice navegável. | E001–E003, principal T; S2–4 complementam. |
| Quatro modelos, quatro focos (`quatro-modelos`) | Quadro comparativo com foco, horizonte, exemplo e cuidado. Processos: repetição/controle; produtos: evolução/valor; projetos: entrega delimitada; programas: coordenação estratégica. Distinguir processo permanente de projeto temporário e programa de simples coleção de projetos. | E003–E004, E017–E018; T organiza; S4/11 complementam. |
| Processos: tornar a demanda observável (`processos`) | Explicar entrada, atividade, validação e saída. Percorrer um defeito crítico: evidência de entrada, implementação, testes, homologação e publicação; saída com hotfix validado e retorno testado. Explicar gates como critérios de avanço. Comparar lead time, throughput, SLA e reabertura; não criar cálculo/metodologia. Fechar com o limite do teatro de processo. | E005–E009; T13:42–23:07; S5–6 e S17 complementam. |
| Produtos: manter responsabilidade pela evolução (`produtos`) | Explicar continuidade, arquitetura de referência e componentes comuns. Usar autenticação como exemplo presente na aula. Mostrar kit com visão, diretrizes, catálogo, templates e módulos. Explicar governança leve, contratos, testes de contrato e changelog sem regras de SemVer. Comparar autonomia com padrões comuns. | E010–E012; T23:14–27:21; S7 complementa. |
| Projetos: delimitar a entrega (`projetos`) | Relacionar escopo, prazo, orçamento, marcos e aceite. Caminhar por migração de gateway: objetivo delimitado, marcos/incrementos, janelas de liberação e verificação de retorno. Não fornecer roteiro técnico inventado. Mostrar que projeto pode usar CI/CD e entregas incrementais. | E013–E014; T27:32–31:25; S8 complementa. |
| Programas: coordenar dependências (`programas`) | Explicar objetivo estratégico, iniciativas interdependentes e sincronização. Exemplo da transformação digital: identidade, integração, app, infraestrutura. Explicar por que uma frente que desbloqueia outras pode subir de prioridade. Distinguir governança que resolve bloqueios de mera reunião de status. | E015–E016; T31:38–35:54; S9 complementa. |
| Diagnosticar e combinar (`escolha`) | Retomar comparação como diagnóstico contextual, sem algoritmo rígido. Sintomas: fila/lead time instável, duplicação, prazo crítico, bloqueios. Desenvolver caso educacional: serviços recorrentes, plataforma acadêmica, portal de matrícula com prazo e transformação entre áreas. Explicitar que mudar o arranjo é possível e que modelos não são excludentes. | E017–E020; T36:26–54:51, S10–14. “Instável” é sustentado por S13; não citar literalmente a formulação oral divergente. |
| Pessoas e ciclos (`equipes-ciclos`) | Relacionar arranjo a responsabilidade, autonomia e passagem entre equipes. Definir handoff e riscos de espera/contexto/retrabalho. Explicar ciclos curtos/repetitivos, roadmap/épicas/incrementos, marcos e sincronização. Separar modelo organizacional de abordagem cascata/ágil/híbrida. | E021–E023; T56:25–1:06:02; S15–16 complementam. |
| Uma base técnica compartilhada (`esteira`) | Descrever sequência exemplificada: lint → build → testes unitários → testes de contrato → publicação de artefatos → deploy → verificação. Explicar somente os termos documentados, sem tutorial de ferramentas. Comparar dois fluxos SaaS: roadmap/épicas/implementação/release e catálogo/priorização/correção/publicação, ambos apoiados na esteira. Feature flags apenas com papel de liberação controlada, sem implementação. | E024/E027; T1:06:11–1:07:16 e 1:22:13–1:28:49; S16/19 e faixa de S10 complementam. |
| Casos para consolidar (`casos`) | Quadro curto de três cenários da aula: setor público/processos; banco ou fintech/produto+projeto; SaaS/produto+processos. Explicar problema, combinação e resultado ilustrado. Evitar repetir todas as seções e preferir não usar números. Rotular cenários e resultados como didáticos apresentados na aula. | E025–E027; T1:07:55–1:28:49; S17–19 complementam. |
| Síntese, prática, questionário, respostas e referências | Reunir critérios de escolha, atividade aplicada e recuperação ativa. Referências distinguem principal de complemento e localizam trechos/páginas físicas. | Evidências especificadas abaixo. |

Aprofundar as relações e os limites no percurso, sem alongar por repetição ou impor quantidade de palavras. Uma tabela comparativa não substitui as explicações de cada modelo.

## Prática guiada e respostas esperadas

**Identificação obrigatória:** “Exercício fictício, elaborado a partir dos conceitos e do caso educacional da aula”. Cenário: instituição com chamados recorrentes, plataforma acadêmica em evolução, portal de matrícula com data definida e iniciativas de secretaria/financeiro/biblioteca/TI que dependem umas das outras. Não inventar métricas de resultados.

1. **Classifique e justifique:** associar as quatro demandas aos modelos. Critério: repetição → processos; evolução permanente → produto; entrega delimitada → projeto; coordenação de frentes relacionadas → programa. Admitir combinação justificada, sem única estrutura universal. E018/E020.
2. **Desenhe o fluxo de um chamado:** entrada com evidência, planejamento, implementação, testes, homologação/publicação; indicar um gate de validação e saída verificável. Resposta comentada aceita variação coerente, mas exige critério de avanço além de “programou”. E005–E007.
3. **Escolha observações do fluxo:** lead time para intervalo entre entrada/entrega; throughput para quantidade concluída por período; SLA/reabertura como acompanhamento. Não exigir percentis ou fórmulas. E008.
4. **Resolva uma dependência:** propor coordenação quando uma entrega bloqueia outra; justificar prioridade pelo desbloqueio e sincronização, sem inventar sequência técnica obrigatória. E015–E016.
5. **Explique o suporte comum:** citar a esteira compartilhada e reconhecer que ela não define sozinha o modelo organizacional. E017/E024/E027.

## Questionário de recuperação ativa

Perguntas e critérios das respostas comentadas:

1. Processo e projeto são sinônimos? Não: repetição/permanência versus entrega temporária; processo pode ser usado dentro do projeto. E004.
2. Produto exige que cada equipe crie novamente seus componentes? Não: arquitetura de referência e compartilhamento ajudam a continuidade; governança orienta evolução. E010–E012.
3. Um projeto precisa terminar em uma liberação única? Não: pode ter marcos e entregas incrementais com suporte comum. E014.
4. O que diferencia programa de vários projetos independentes? Objetivo estratégico e dependências coordenadas. E015–E016.
5. Qual a diferença entre lead time e throughput? Intervalo entrada/entrega e quantidade por período. E008.
6. Um modelo organizacional determina uma abordagem exclusivamente ágil ou cascata? Não; são dimensões distintas, combinadas conforme o contexto. E023.
7. Qual risco existe na passagem de trabalho entre equipes? Espera, perda de contexto e retrabalho; responsabilidades, multidisciplinaridade e automação são apoios citados. E021–E022.
8. Como produto e processos coexistem no SaaS? Evolução pelo roadmap e atendimento recorrente pelo catálogo, com esteira comum. E027.

Respostas devem explicar o motivo em duas ou três frases quando necessário e remeter à seção relevante. Não pontuar como erro uma combinação contextual bem justificada.

## Plano visual

Priorizar SVGs próprios, sem scripts, com tipografia legível e composição vertical ou adaptável ao celular. Crédito: “Elaboração própria com base na aula ao vivo 02 e nos slides indicados”. Registrar cada ativo em `visuais.md`, com legenda e texto alternativo.

1. **Mapa dos quatro focos**, usado após a comparação inicial e, se apropriado, como capa: quatro blocos com processos/repetição, produtos/evolução, projetos/entrega delimitada, programas/coordenação; base comum sem sugerir hierarquia. E003/E017/E018; T5:15–13:23/36:26–44:49, S4/10/11. Caminho sugerido: `/assets/tecnologias-emergentes-aula-ao-vivo-02/quatro-modelos.svg`.
2. **Dois fluxos SaaS com esteira comum**, no tópico de base técnica: trilhas roadmap → épicas → implementação → release e catálogo → priorização → correção/ajuste → publicação; faixa comum com sequência da esteira da aula. E024/E027; T1:06:11–1:07:16/1:22:13–1:28:49, S16/19. Caminho sugerido: `/assets/tecnologias-emergentes-aula-ao-vivo-02/fluxos-esteira.svg`.
3. **Opcional, somente se acrescentar clareza:** mapa do caso educacional com quatro demandas e arranjos, sem transformar em árvore de decisão rígida. E020; S14/T50:57–54:51. Evitar se repetir tabela/atividade. Não exigir recorte de slide denso.

Textos alternativos devem transmitir a relação pedagógica, sem acrescentar alegações ou indicadores não documentados. Tabela HTML deve continuar disponível para a comparação textual; o diagrama não é o único acesso ao conteúdo.

## Orientações e limites para a redação

- Não há evidência essencial faltante para esse recorte. Livro ausente deve ser informado na nota das fontes; não completar com bibliografia citada nos slides nem fontes externas.
- Transcrição automática contém formulações confusas já delimitadas no mapa: projeto temporário, lead time instável e distinção entre SLA/defeitos precisam seguir E004/E008/E019.
- Não apresentar casos como evidência empírica nem percentuais ilustrativos como resultados reais. Preferir descrição qualitativa; se 62% → 89% aparecer, rotular explicitamente dado ilustrativo do caso da aula.
- Não ensinar SemVer, percentis, ferramentas, técnicas de rollout ou efeitos de saúde além do suporte documentado.
- Usar explicações próprias como paráfrases; exemplos novos levam rótulo fictício e não são falas atribuídas ao professor.
- Referências finais: `transcrição/aula02.txt`, intervalos por tema, como fonte principal; `slides/aula02.pdf`, páginas físicas pertinentes, como complemento. IDs E001 etc. ficam apenas no dossiê, nunca como única referência pública.
