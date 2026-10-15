# Revisão independente — aula ao vivo 02

## Revisão factual e editorial: APROVADA

Revisor independente do redator. Regras aplicadas: `.opencode/editorial.md` e `.opencode/agents/revisor.md`. Objeto: `escopo.md`, `evidencias.md`, `plano.md` e texto integral de `post.md` deste dossiê. Apenas este relatório foi escrito pelo revisor.

### Confronto com as fontes

Conferida a transcrição original `Matérias/Tecnologias emergentes em engenharia de software/transcrição/aula02.txt`, incluindo os trechos que sustentam todas as seções e respostas. Conferidos o conteúdo textual dos slides e as imagens locais extraídas das páginas físicas 10, 14, 17, 18 e 19 de `slides/aula02.pdf`; a parte central desses slides é imagem, portanto não se tomou ausência de texto extraído como ausência de conteúdo.

- Identidade e escopo: as saudações, a identificação da segunda aula e as perguntas dos participantes sustentam `aula-ao-vivo`. A transcrição organiza o post; os slides complementam. Não há substituição do livro ausente nem atribuição indevida de complementos ao professor.
- Quatro modelos e coexistência: confrontados 4:03–13:23, 36:26–44:49 e slides 4, 10–12. O texto preserva diferenças entre processo duradouro, projeto temporário e programa de iniciativas relacionadas. A formulação equivocada isolada de 8:43 é resolvida pelo esclarecimento explícito de 8:59–9:07.
- Processos, exemplo de correção, gates e indicadores: confrontados 13:42–23:07 e slides 5–6/17. O fluxo novo está rotulado fictício/didático e deriva do fluxo da aula. A distinção lead time/throughput está correta; SLA não foi indevidamente equiparado a quantidade de defeitos. A discussão de teatro de processo mantém o sentido da fonte.
- Produtos, componentes, kit e governança: confrontados 23:14–27:21 e slide 7. As explicações de contratos, testes e changelog se limitam ao apresentado. Não foram inventadas regras de versionamento.
- Projetos e programas: confrontados 27:32–35:54 e slides 8–9. Marcos, incrementos, possibilidade de retorno e coordenação de dependências estão sustentados. Exemplos novos identificados; não há guia técnico de migração inventado.
- Diagnóstico e caso educacional: confrontados 41:20–54:51 e slides 10–14. A expressão “lead time instável” corresponde ao slide 13 e ao contexto de baixa previsibilidade; a imprecisão oral está explicitada no dossiê. O caso educacional e a classificação das quatro necessidades coincidem com a imagem do slide 14.
- Equipes, handoff e ciclos: confrontados 56:25–1:06:02 e slides 15–16. Não há organograma obrigatório inventado nem alegações médicas. A distinção entre modelo organizacional e abordagem de desenvolvimento é preservada.
- Esteira: confrontados 1:06:11–1:07:16 e slide 16. Etapas e definições correspondem ao registro. O texto não transforma a sequência exemplificada em regra universal.
- Casos finais: confrontados 1:07:55–1:11:31, 1:13:33–1:22:03, 1:22:13–1:28:49 e imagens dos slides 17–19. Resultados aparecem expressamente como didáticos. O texto não usa o salto 62% → 89% como estatística real. Os dois fluxos SaaS, seu suporte comum, autenticação e feature flags estão sustentados.
- Prática e questionário: conferidas individualmente as cinco respostas de prática e oito respostas do questionário. As respostas recuperam os conceitos documentados, admitem combinações justificadas e não exigem informação externa.
- Referências: arquivos e intervalos permitem localizar o conteúdo; páginas são corretamente identificadas como físicas. Fonte principal e complemento estão separados. Obras externas mencionadas nos slides não são apresentadas como consultadas.

### Achados

Não foram encontrados erros factuais/editoriais impeditivos nesta versão. Não há correção obrigatória do texto antes da montagem.

| Gravidade | Trecho/arquivo | Evidência | Ação e responsável |
| --- | --- | --- | --- |
| Baixa, sugestão didática | `post.md`, primeira ocorrência de “SaaS” | T 1:22:22–1:22:39 explicita “software como serviço” | Montador pode expandir a sigla na primeira ocorrência para facilitar leitura; não condiciona aprovação. |
| Controle de montagem | `post.md`, marcadores `[E...]`, `{#...}` e visuais planejados | Contrato editorial exige página legível e ativos reais | Publicador deve remover marcadores internos, converter âncoras e inserir apenas SVGs concluídos com crédito e texto alternativo. Verificar na revisão final. |

## Revisão final: APROVADA

Inspecionados pelo revisor: página Astro montada; conteúdo e estrutura dos dois SVGs; `visuais.md` e `publicacao.md`; cartões e contagens nos dois catálogos; HTML compilado em `dist/tecnologias-emergentes-aula-ao-vivo-02/index.html`.

- O conteúdo integral aprovado permanece na saída pública, com tipo “Aula ao vivo 02”, continuidade para aula 01, referências separadas e limites das fontes. A expansão “SaaS (software como serviço)” foi incorporada. Não foram detectadas alterações factuais na conversão.
- Os diagramas correspondem aos conceitos já conferidos nas fontes: quatro focos com coexistência, duas trilhas do caso SaaS e sequência exemplificada de CI/CD. Nenhum novo dado ou relação causal foi acrescentado. Os SVGs contêm título/descrição e não contêm scripts ou recursos externos.
- Os dois ativos têm dimensões e textos alternativos informativos no HTML, legendas visíveis com origem e crédito de elaboração própria, além de links para tamanho original. As aspas delimitadoras antes indevidamente exibidas foram retiradas.
- Auditoria independente do HTML: nenhum ID repetido, nenhuma âncora ausente, nenhuma rota local/ativo referenciado ausente; treze campos de rascunho com labels associados e treze respostas recolhíveis. As cinco respostas da prática e oito do questionário continuam separadas e completas. A última resposta termina antes das referências.
- Não restam marcadores de evidência, notas de produção ou marcadores de visuais planejados na saída. Os documentos de trabalho são usados na compilação, sem link público para o dossiê.
- O cartão da nova aula identifica o tipo e descreve corretamente cinco atividades/oito perguntas. A matéria contém dois posts e o catálogo geral quatro posts em duas matérias. A página da aula anterior foi preservada.
- O script está restrito ao identificador desta página; rascunhos possuem IDs exclusivos e a interface avisa que não são salvos. O código de impressão abre respostas e restaura o estado após imprimir. O revisor verificou o código; não executou o diálogo de impressão.

### Validação visual e funcional informada pelo coordenador

O coordenador informou build aprovado e inspeção própria no preview `localhost:4322`: topo e respostas em desktop, preenchimento de rascunho e abertura do primeiro `details`; viewport móvel 390 × 844 sem transbordamento global, com tabelas rolando localmente; primeiro diagrama integralmente legível, segundo diagrama aberto em tamanho original com trilhas e esteira legíveis e sem sobreposição; imagens carregadas; viewport restaurado. Esses resultados são registrados como verificação do coordenador, não como inspeção de navegador executada por este revisor. A leitura independente da saída gerada e do código não encontrou inconsistências com o relato.

### Resultado e pendências de registro

**APROVADA a revisão final, sem bloqueios editoriais, factuais ou funcionais identificados.** Achados de controle de montagem da revisão anterior resolvidos.

Responsável coordenador/publicador: atualizar em `publicacao.md` o trecho que ainda diz inspeção “a realizar” e o estado de aprovação para refletir as verificações já concluídas, antes do commit. Atualizar também o estado das etapas em `escopo.md`. São registros administrativos da execução, sem mudança no conteúdo aprovado. Commit, push e eventual deploy ainda não foram realizados ou aprovados por evidência nesta revisão; seu resultado deve ser registrado pelo publicador sem confundir envio ao repositório com site online.
