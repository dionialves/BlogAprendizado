# Revisão independente — aula ao vivo 02

## Resultado factual/editorial pré-montagem

**APROVADO.** Não foram encontrados erros factuais, contradições essenciais, referências inventadas ou omissões substantivas impeditivas nesta versão. A aprovação refere-se ao texto e mapa, antes da montagem. Astro, visuais, interações, celular e impressão aguardam a revisão final.

## Método independente

Regras aplicadas: `.opencode/agents/revisor.md`, `.opencode/editorial.md` e `.opencode/layout.md`. Lidos escopo, evidências E201–E226, plano, texto integral e mapa de referências. Conferidos todos os parágrafos relevantes, definições, exemplos, tabelas, proposta de aplicação, três exercícios e cinco respostas do questionário; não apenas uma amostra.

Fontes factuais exclusivas da pasta `Matérias/Tecnologias emergentes em engenharia de software/`: transcrição original aula02.txt integralmente, slides aula02.pdf completos na extração e seus renders, livro original por extração independente com pypdf (páginas 35–48 e trechos de apoio 10–24). Os renders de slides 5–10, 14 e 17–19 permitiram conferir o texto incorporado em figuras. Extrações auxiliares `/tmp/te-*` foram cotejadas com o PDF e transcrição, sem tomar a matriz do pesquisador como prova única. Nenhuma pesquisa externa ou uso factual de posts antigos.

## Cobertura integral e correspondência documental

| Evidências | Destino e conferência |
| --- | --- |
| E201–E202 | Abertura e vocabulário distinguem decisões, prioridades, fluxo e indicadores; processo/produto/projeto/programa, temporariedade e coexistência. A transcrição corrige “duradouro” para “temporário” em 09:07; o texto ensina diretamente a formulação sustentada. Portfólio é conjunto que disputa capacidade (livro p. 35), sem identidade automática com programa. |
| E203–E207 | Processos explicam entradas/atividades/validação/saída, catálogo, nova API, tela e correção P1. Tabela mantém os acordos do livro p. 37 e fala 16:34–19:00. Fluxo por raias corresponde à figura p. 38/slide 6. Lead time, throughput, percentual no SLA e reabertura conservam dimensões diferentes; a confusão verbal de SLA/defeito não reaparece. Filas e WIP são investigados sem inferência causal automática. Teatro de processo e revisão trimestral preservam finalidade, sem criar obrigação universal. |
| E208–E210 | Produtos cobrem arquitetura de referência, componentes, variabilidades, contratos de API/eventos, versionamento, changelog, kit, janelas de migração e depreciação. Exemplo fictício v1→v2 mantém a necessidade de orientar consumidores. Adoção, defeitos e tempo de evolução têm os recortes documentados; cycle time por épica aparece com limite explícito, sem inventar uma fronteira universal. |
| E211–E212 | Projetos mantêm escopo/prazo/orçamento/marcos, EAP enxuta, baseline e aceite, conforme livro pp. 40–41 e fala 27:32–31:25. Exemplo de migração integra build, testes, homologação, liberação, métricas e retorno testado. Prazo fixo não implica implantação única. |
| E213–E214 | Programas ensinam dependências, priorização por valor/risco, contingência, desbloqueio e sincronização. Exemplo identidade→integração→aplicações está identificado como desenho ilustrativo próprio, não ordem arquitetural universal. Reunião produz decisões; intervalos diferentes das fontes são tratados como adaptáveis. KPIs correspondem ao livro p. 42 e fala 34:53–35:54. |
| E215–E218 | Matriz, caso educacional e diagnóstico mantêm os quatro arranjos e a possibilidade de combiná-los. Os riscos de burocracia, volatilidade, fragmentação e complexidade correspondem ao slide 10/livro p. 45. Os sinais geram hipóteses e ajustes verificáveis, sem classificação automática de empresas ou confusão de preferência com necessidade. |
| E219–E220 | Quadro de responsabilidades cobre catálogo/gates/métricas, gestão de produto/arquitetura/versões, projeto e programa. Handoff, perda de contexto e carga cognitiva são explicados com base na fala 56:25–1:03:21 e livro pp. 44–45. A redação evita alegação clínica e ensina distribuir responsabilidades e simplificar trabalho. |
| E221–E222 | Ciclos curtos, roadmap/épicas/incrementos, marcos e sincronização mantêm relação com a demanda, sem método único. Pipeline define lint, build, testes unitário/contrato, publicação, deploy e verificação pós-deploy. A diferença publicação/implantação é sustentada explicitamente na transcrição 1:06:35–1:06:51. |
| E223–E225 | Saúde, banco/fintech e SaaS preservam problema, escolha, mecanismos e indicadores. Saúde enfatiza catálogo/entrada única/evidências; banco combina produto interno e projeto regulatório; SaaS combina evolução e atendimento recorrente com componente de autenticação e mesma esteira. Os casos estão explicitamente fictícios/didáticos e não transformam resultados em dados empíricos nem promessas universais. |
| E226 | Síntese preserva engenharia além da codificação, requisitos/arquitetura/testes/operação e prática com decisões/evidências. A proposta de 20 demandas e 30 dias é adaptação identificada do livro p. 47, com contexto fictício ou autorizado. Não inventa simulador nem repete notícias/biografia sem suporte no encerramento. |

As exclusões de saudações, avisos, ruído, digressões pessoais e notícias/biografia sem relação necessária ao objetivo estão justificadas internamente. Não faltam materiais essenciais nem assuntos adicionais conceituais da interação. Repetições foram integradas por conceito em vez de preservar a ordem da fala.

## Qualidade didática, exercícios e respostas

A redação ensina a quem não assistiu à aula: define termos, estabelece relações e aplica critérios em situações trabalhadas. Não estrutura a narrativa em relatos do professor, timestamps ou comparação pública das fontes. O leitor não precisa escolher uma versão. Siglas e termos técnicos relevantes recebem explicação; nenhuma cifra fictícia é apresentada como resultado de pesquisa.

- **Aplicação em 30 dias:** classificação, um indicador coerente, ajuste de triagem e comparação com dados seguem o livro p. 47. A adaptação identifica simulação e não confunde dados fictícios com demonstração de eficácia.
- **Exercício 1:** classificação de API/autenticação/adequação/integração e combinação entre arranjos são sustentadas pelos tipos de demanda. A justificativa e a possibilidade de rever o encaminhamento evitam resposta mecânica por nome do sistema.
- **Exercício 2:** distingue tempo total e volume concluído; examinar filas/critérios e testar ajustes de WIP ou passagem decorre dos materiais, sem afirmar causa comprovada a partir de um sinal.
- **Exercício 3:** verifica contratos, versões, documentação, migração e retorno antes de implantar; não afirma que publicar v2 ou atingir uma data comprove segurança/compatibilidade.
- **Questionário:** cinco respostas comentadas coerentes com processo em projeto, programa além de lista, autonomia responsável, método contextual e diferença entre publicação e deploy. As explicações não introduzem fatos externos nem contradizem o desenvolvimento.

## Referências e navegação do rascunho

Conferidos todos os localizadores das 25 entradas contra os assuntos sustentados. O livro é identificado como base conceitual e slides/transcrição como materiais da aula ao vivo. Dados bibliográficos ficam no fim; o desenvolvimento usa somente chamadas sobrescritas clicáveis.

Controle estrutural: **89 chamadas, 25 entradas, 114 IDs HTML únicos**; primeira ocorrência de 1 a 25 contínua; números exibidos e destinos coincidem; nenhum href interno HTML sem destino; referências e respectivas ocorrências têm retornos. A reutilização dos números preserva fonte/localizador. Não há exposição dos PDFs ou documentos de trabalho para fazer os links funcionarem.

Esse controle do Markdown/HTML não equivale a inspeção no navegador. Foco, teclado, aparência e impressão das chamadas serão conferidos na montagem.

## Achados e responsabilidades

**Nenhum achado impeditivo ou correção editorial obrigatória nesta passagem.** Coordenador/publicador podem montar o texto aprovado. O revisor permanece responsável pela conferência final independente.

## Revisão final pendente

Conferir Astro versus texto aprovado, visuais/legendas/alt/créditos e suporte conceitual, links/âncoras/retornos, índice e contagem de seções, respostas no impresso, cabeçalho e destinos da matéria, tipografia/paleta, índice persistente ao longo da leitura, progresso no começo/meio/fim e redimensionamento, celular, ausência de sobreposição/rolagem horizontal, teclado/foco, impressão/PDF e registro de build. Não se declara layout validado nem publicação nesta etapa.

## Revisão final — montagem e HTML gerado

**APROVADO na inspeção final estática de conteúdo e HTML.** A aprovação visual/funcional aguarda os registros do navegador abaixo; a inspeção visual de impressão não foi concluída.

Inspecionados independentemente `src/pages/tecnologias-emergentes-aula-ao-vivo-02.astro`, `src/lib/render-study.ts`, `src/layouts/StudyPostLayout.astro`, `src/scripts/study-post.js`, componentes/estilos compartilhados, SVGs utilizados, `visuais.md`, `publicacao.md` e `dist/tecnologias-emergentes-aula-ao-vivo-02/index.html`.

- Conferência integral do texto aprovado contra a saída HTML: **170 blocos e células**, sem nenhum trecho ausente, mediante normalização de marcação/espaços/pontuação. A abertura e a ideia central estão preservadas; não há resumo substituindo o texto. Tabelas, listas, detalhes e referências são montados pelo renderer local, sem servir documentos editoriais como arquivos.
- Verificador do HTML final executado novamente: **25 referências e 93 chamadas**; IDs únicos, número exibido correto, sequência de primeira ocorrência contínua, nenhum destino ausente, todas as chamadas e referências com retornos. As ocorrências novas das figuras estão incluídas nas entradas finais.
- Conferidos os textos integrais dos dois SVGs utilizados, legendas e alt: fatos e relações permanecem sustentados no livro/slides/transcrição. Os diagramas são identificados como elaboração própria; não há imagens externas sem licença ou procedência escrita interrompendo a explicação. Links para SVGs locais permitem abrir o tamanho original.
- Estrutura semântica contém um título principal, seções numeradas, navegações rotuladas, índice móvel expansível e retorno à matéria correta. Cabeçalho reutiliza a marca e o botão de impressão. A largura, tipografia e paleta usam o padrão compartilhado aprovado.
- Quatro rascunhos possuem rótulos e IDs distintos por post, com aviso explícito de não persistência; não há chave de armazenamento misturada com outra aula. Respostas usam details/summary nativos. Retornos por hash abrem ancestrais recolhidos antes de levar ao destino.
- Script de progresso usa altura rolável com limites e caso sem rolagem; atualiza em início, scroll passivo, resize, carregamento e mudança de tamanho do corpo. Impressão abre respostas e restaura seu estado anterior; estilos ocultam controles e preservam números e referências. Essa inspeção de código não comprova paginação/legibilidade real no PDF.
- `publicacao.md` registra build aprovado e validações de âncoras; build não foi usado como prova visual. Nenhum achado impeditivo adicional na revisão estática.

### Evidência visual e limites

A inspeção visual é executada pelo coordenador principal e comunicada ao revisor, distinguindo-a da revisão independente do HTML. A tentativa de prévia de impressão no navegador integrado excedeu o tempo e não produziu imagem utilizável: **impressão/PDF não validada visualmente**. Comportamento e estilos de impressão foram inspecionados no código.

Conferência visual de desktop/celular deste post pendente de evidência do coordenador no navegador.

## Fechamento da revisão final — evidências de navegador recebidas

**APROVADO na revisão final, com limitação explícita: impressão/PDF não inspecionada visualmente.** A aprovação reúne revisão independente de conteúdo, fontes, código e HTML com os registros de interação/visualização fornecidos pelo coordenador principal. A prévia de impressão do navegador integrado excedeu o tempo; não há evidência visual utilizável do impresso. Os estilos e eventos beforeprint/afterprint foram revisados, sem alegar que isso comprove paginação ou aparência do PDF.

- Desktop: título e abertura corretos, dez seções, 25 referências e 93 chamadas. Não aparecem relatos “professor”, “transcrição”, “slides” ou “segundo o livro” fora das Referências para indicar procedência.
- Índice: item 07 navega a `#equipes`; lateral mantém topo a 40px; progresso observado em 53,5% no meio da leitura.
- Celular de 390 × 844: ausência de rolagem horizontal global; índice abre e item 09 navega a `#pratica`. Os dois SVGs carregam, com largura natural de 560px, preservando a adaptação da página.
- Final da página: barra de progresso em 100%, com distância rolável restante igual a zero.

Não restam achados impeditivos conhecidos. A limitação de impressão deve acompanhar a entrega ao usuário; não se declara publicação externa nem validação visual do PDF. Nenhuma alteração de texto, código ou Git foi executada pelo revisor.
