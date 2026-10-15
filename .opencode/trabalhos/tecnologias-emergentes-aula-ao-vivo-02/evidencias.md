# Evidências — aula ao vivo 02

Regras: `/Users/dionia.oliveira/sources/BlogAprendizado/.opencode/editorial.md`.
Dossiê: `/Users/dionia.oliveira/sources/BlogAprendizado/.opencode/trabalhos/tecnologias-emergentes-aula-ao-vivo-02`.
Base exclusiva: `Matérias/Tecnologias emergentes em engenharia de software/`.

## Inventário e método

| Arquivo relativo à base | Classificação | Papel |
| --- | --- | --- |
| `transcrição/aula02.txt` | Registro de aula ao vivo, com timestamps e interação | Principal; lido integralmente em blocos |
| `slides/aula02.pdf` | Apresentação Aula 2, Prof. Rômulo Santos, 20 páginas físicas | Complementar; texto extraído com pypdf; imagens dos casos 10, 14, 17, 18, 19 extraídas e inspecionadas visualmente |
| `transcrição/aula01.txt` | Aula anterior | Disponível; não utilizado como evidência desta aula |
| `slides/aula01.pdf` | Slides anteriores | Disponível; não utilizado como evidência desta aula |

Nenhum livro ou aula conceitual separado foi encontrado. A extração intermediária `slides-extraidos.txt` deve ser removida antes do commit. Os números abaixo são páginas físicas do PDF, contadas a partir de 1; o documento não apresenta numeração impressa independente. Páginas 10, 14 e 17–19 contêm o núcleo dos casos em imagens e não são páginas vazias: a extração textual simples não as representa.

## Mapa localizável

Nas entradas, T significa `transcrição/aula02.txt` e S significa `slides/aula02.pdf`. As afirmações são paráfrases de trabalho, não citações literais do professor.

| ID | Afirmação sustentada e relação | Localização e trecho identificável |
| --- | --- | --- |
| E001 | Identificação de aula ao vivo 02 e núcleo: arranjos variam com demanda, produto, especialização, equipe e objetivos do negócio. | T 1:23–1:47 (“Boa noite”, “Nossa segunda aula”) e 4:03–4:55 (“modelos organizacionais”, “dependendo do tipo de demanda”); S 2–3. |
| E002 | Modelo organizacional estrutura prioridades, decisões, fluxos e indicadores; dificuldades podem resultar de arranjo inadequado. | T 9:57–10:29 (“problema ... próprio modelo organizacional”); S 4. |
| E003 | Processos priorizam padronização e controle; produtos, evolução e valor; projetos, entregas delimitadas; programas, coordenação estratégica de iniciativas relacionadas. Não são excludentes. | T 5:15–7:14 e 10:41–13:23; S 4, 11. |
| E004 | Processo pode ser permanente/repetível e usado dentro de projeto temporário; um programa não é simples amontoado de projetos isolados. | T 8:28–9:48, sobretudo 8:59–9:07 (“processo ... mais duradouro ... projeto ... temporário”) e 9:23–9:39 (“projetos ... alinhados”). A frase isolada em 8:43 chama projeto de “duradouro”; a própria correção posterior e S 8/11 eliminam essa leitura literal equivocada. |
| E005 | Fluxo por processos define entradas, atividades, validação e saídas; adequado a alto volume repetitivo, SLA, rastreabilidade e auditoria. | T 13:42–16:27; S 5. |
| E006 | Exemplos de entrada/saída: API com contrato inicial e testes/documentação; tela com protótipo e aceite, testes/release notes; defeito crítico com evidência, hotfix validado e rollback testado. | T 16:34–19:00; S 5. Exemplos apresentados, não obrigações universais. |
| E007 | Fluxo de atendimento: backlog, planejamento, implementação, testes, homologação, publicação. Gates condicionam avanço a critérios mínimos de qualidade/segurança. | T 19:15–20:52 (“backlog”, “pontos de controle”, “Não basta ... programação”); S 17, imagem do caso público. |
| E008 | Lead time é intervalo da entrada da demanda até entrega; throughput é quantidade concluída por período; cumprimento de SLA e reabertura ajudam a observar fluxo e gargalos. | T 20:57–22:03, sobretudo 21:07–21:25. S 6, 12. Não repetir a formulação oral confusa que iguala SLA a quantidade de defeitos. |
| E009 | Evitar teatro de processo: etapas, documentos ou aprovações sem redução de risco, qualidade ou valor devem ser questionados; processo precisa revisão. | T 22:12–23:07; S 6. O intervalo trimestral só consta no slide, é sugestão daquele material, não regra geral. |
| E010 | Produto mantém evolução contínua e responsabilidade ao longo do ciclo; arquitetura de referência e componentes compartilhados reduzem reconstrução e inconsistências. | T 11:26–12:20 e 23:14–24:40; S 4, 7. Exemplos de componentes: autenticação, catálogo, pagamentos, notificações. |
| E011 | Kit de produto reúne visão, diretrizes de arquitetura, catálogo, templates e módulos, permitindo autonomia com padrões comuns. | T 24:55–25:27 (“kit ... reúne ... visão ... catálogo ... templates”). Não inventar conteúdo operacional de kits. |
| E012 | Governança leve estabelece regras mínimas de evolução, descontinuação e migração. Contratos de API/eventos claros, versionados/testáveis, testes de contrato e changelog ajudam a controlar dependências. | T 25:27–26:20 (exemplo versão 1 para 2) e 27:00–27:21; S 7. Adoção de componentes e defeitos podem acompanhar evolução, T 26:20–27:00. Não ensinar regras específicas de versionamento sem fonte. |
| E013 | Projeto atende entrega com escopo, prazo, orçamento e marcos; exemplos: migração de gateway, adequação regulatória e implantação. Critérios de aceite e verificações objetivos não exigem burocracia excessiva. | T 27:32–29:09; S 8, 11–12. |
| E014 | Projeto temporário pode usar CI/CD comum, marcos com entregas incrementais e janelas de liberação para reduzir risco da implantação única; verificar retorno à versão anterior. | T 29:17–31:03; S 8. Métricas possíveis: marcos, desvios de prazo/custo e defeitos por etapa, T 31:03–31:25. Não equiparar projeto a cascata. |
| E015 | Programa coordena iniciativas interdependentes com objetivo estratégico; atrasos em uma frente afetam outras. Governança deve resolver bloqueios e dependências, e não apenas comunicar status. | T 31:38–34:24; S 9. Exemplo de transformação digital: identidade, integração, app e infraestrutura. |
| E016 | Programa prioriza valor/risco, pode elevar prioridade de iniciativa que desbloqueia outras e sincroniza releases; indicadores incluem dependências resolvidas e alinhamento estratégico. | T 34:30–35:54; S 9. Não apresentar throughput de portfólio como fórmula formal definida pela aula. |
| E017 | Quatro modelos podem coexistir e compartilhar base técnica. Desequilíbrios: excesso de processo/burocracia; produto sem governança/volatilidade; projeto isolado/fragmentação; programa sem foco/complexidade. | T 36:26–41:54; S 10, imagem “Fábrica ... organização brasileira”, blocos centrais e riscos. São relações discutidas, não resultados garantidos. |
| E018 | Escolha depende do trabalho: repetição/auditoria → processos; evolução permanente → produto; objetivo com prazo/escopo → projeto; frentes relacionadas → programa. | T 42:24–44:49; S 11–12. Usar como diagnóstico contextual, não regra rígida que proíbe combinações. |
| E019 | Modelos podem mudar: filas desorganizadas/lead time instável sugerem processos com WIP/SLA; duplicação sugere produto/reuso; prazo crítico sugere disciplina de projeto; bloqueios entre equipes sugerem programa. | T 47:14–50:32; S 13. A transcrição diz “lead time estável” em 47:49, mas a própria descrição das filas/problemas e slide 13 dizem “instável”; usar “instável”, sustentado explicitamente por S13, sem citação literal oral. |
| E020 | Caso educacional combina serviços recorrentes/processos, plataforma acadêmica/produto, portal de matrícula com prazo/projeto e transformação com secretaria, financeiro, biblioteca e TI/programa. | T 50:57–54:51; S 14, imagem. Práticas: catálogo, SLA, WIP, roadmap, arquitetura, versionamento, marcos/riscos/mudanças e coordenação. Tratar como cenário didático apresentado. |
| E021 | Modelos alteram responsabilidades, autonomia, handoffs e carga cognitiva. Processos precisam responsáveis por catálogo/gates/métricas; produto enfatiza ownership e equipes multidisciplinares; projeto, riscos/prazo/escopo; programa, dependências e objetivos comuns. | T 56:25–1:01:12; S 15. Não transformar papéis citados em organograma obrigatório. |
| E022 | Handoff é passagem de atividade entre equipes, com risco de espera, perda de contexto e retrabalho. Multidisciplinaridade e automação ajudam; responsabilidades e padrões precisam distribuir a carga. | T 1:01:12–1:03:21. Evitar promessas de saúde ou causalidade médica; texto deve se concentrar em contexto e produtividade documentados. |
| E023 | Ciclos: processos curtos/repetitivos; produtos com roadmap, épicas e incrementos; projetos com marcos e incrementos; programas com sincronização. Abordagens cascata, ágil ou híbrida dependem do contexto e não equivalem aos quatro modelos. | T 1:03:31–1:06:02; S 16. |
| E024 | Esteira exemplificada: lint/análise básica → build/artefato → testes unitários/partes isoladas → testes de contrato/acordos de integração → publicação de artefatos → deploy no ambiente → verificação pós-deploy. É suporte comum aos quatro arranjos. | T 1:06:11–1:07:16; S 16 e faixa inferior de S10. A aula a chama CI/CD e cita integração/entrega contínuas em 8:05–8:12 e 29:17–29:36; não ampliar para técnicas não documentadas. |
| E025 | Caso público: centralizar entrada, criar catálogo e critérios, padronizar fluxo, gates leves, SLA e evidências automáticas para auditoria. Número 62% → 89% pertence ao exemplo da aula. | T 1:07:55–1:11:31; S 17 (imagem). Professor enquadra resultados como ficção/exemplo em 1:10:57–1:11:06, transcrição “fic e fico”. Se usar número, rotular explicitamente como dado ilustrativo do caso, nunca estatística real. |
| E026 | Caso banco/fintech: combinar produto (plataforma, componentes versionados, arquitetura, roadmap) com projeto (adequação com prazo, marcos e incrementos). Ganhos apresentados: reuso, menos retrabalho/defeitos e menor risco de big bang. | T 1:13:33–1:22:03; S 18, imagem. Os benefícios são resultados do cenário didático; não prova empírica universal. |
| E027 | Caso SaaS: produto para evolução contínua e processos para suporte/correções recorrentes; componente comum de autenticação versionado/documentado; dois fluxos compartilham CI/CD, com feature flags para liberar de modo controlado. | T 1:22:13–1:28:49; S 19, imagem. Fluxos explícitos: roadmap → épicas → implementação → release; catálogo → priorização → correção/ajuste → publicação. Resultados ilustrados: menos defeitos, menor lead time, previsibilidade e continuidade da evolução. |

## Limites e uso editorial

- Fontes não sustentam guia prático completo de ferramentas, regras de SemVer, tipos de rollout, percentis, metodologia de métricas, simulação quantitativa ou garantias de melhoria. O slide 18 cita versionamento semântico, mas não explica suas regras. O slide 6 cita P50/P90, mas não os define: omitir ou manter apenas a expressão de medição sem explicação inventada.
- Nomes de ferramentas, frameworks e práticas além do mapa não devem ser acrescentados por memória do modelo.
- Os slides citam bibliografia externa (ABNT, Softex, TCU etc.); tais obras não estão na pasta, não foram consultadas e não podem virar referências primárias do post.
- Notícias e afirmações incidentais a partir de 1:31:51 não integram o tema e não serão reproduzidas. Não se pesquisou a veracidade fora da base autorizada.
- Definições e respostas de exercícios devem se apoiar nos IDs acima. Exercícios novos podem adaptar o caso educacional com rótulo “exemplo fictício/didático”; não atribuir o texto criado ao professor.
- Diagramas próprios indicados: comparação dos quatro modelos (E003/E018); decisão pelo tipo de demanda (E019/E020); duas trilhas de produto/processos com esteira comum (E024/E027). Recortes dos slides 14/17–19 são possíveis, mas densos; diagramas próprios favorecem leitura móvel.
- Não há bloqueio factual para uma aula ao vivo com este recorte. Há limitação explícita de livro ausente, transcrição automática e casos didáticos sem validação empírica externa.
