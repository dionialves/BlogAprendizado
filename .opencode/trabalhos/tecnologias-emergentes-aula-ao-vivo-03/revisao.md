# Revisão independente — aula ao vivo 03

## Etapa factual/editorial: APROVADA

Revisor independente do redator; instruções lidas em `.opencode/agents/revisor.md`, `.opencode/editorial.md` e `.opencode/layout.md`. Conferidos escopo, matriz E001–E027, plano, texto integral e mapa definitivo de referências. A aprovação desta etapa autoriza prosseguir com visuais/montagem; não constitui aprovação da página final.

### Evidência da conferência

- Transcrição original `Matérias/Tecnologias emergentes em engenharia de software/transcrição/aula03.txt`: conferidos os blocos conceituais, categorias/ciclo, camadas e exemplos, cinco lentes, três casos, adiamento explícito e complemento final. Abertura e interação confirmam aula ao vivo; não é estudo dirigido nem aula conceitual.
- Livro original, páginas físicas 57–67: texto extraído e renderizações disponíveis em `/tmp/te-aula03/`, com conferência das passagens pertinentes sobre camadas, categorias, disponibilidade, P95, rastreabilidade, segurança, observabilidade, tipos, domínio, reconciliação e integração. Paginação física expressamente identificada evita repetir glifos corrompidos da extração.
- Slides: conferidos conteúdo textual 4–8, 10–11 e 14 e renderizações dos casos 9, 12 e 13. Seus diagramas/cenários confirmam as aplicações industrial, agrícola e de pedidos. Os materiais 15–16 não foram tomados como prova de ministração.
- Não foi usada pesquisa externa; não foram introduzidos protocolos, algoritmos, marcas de ferramentas ou números de desempenho sem suporte ou identificação didática.

### Cobertura e correção

| Bloco | Resultado |
| --- | --- |
| E001–E006: cinco camadas e diagnóstico | Preservado, com responsabilidades, riscos e indicadores; siglas explicadas e sem tratar sintoma como causa confirmada. |
| E007–E009: sete categorias e ciclo | Separação clara entre categorias, camadas e sete etapas da entrega; não transforma o radar de categorias em hierarquia industrial. |
| E010–E011: continuidade | Buffer, timestamp, retry/backoff, segurança da operação e degradação graciosa incluídos; nenhuma promessa de armazenamento/recuperação ilimitada. |
| E012: caso industrial | Inclui segurança imediata, dispositivos/rede/CLP, confirmação no MES, integração/ERP e evidências; perda de pacote é hipótese a confirmar. |
| E013–E018: qualidade e contexto | Cinco lentes corretas; P95 observado distinto de média, garantia total e SLO; rastreabilidade de mudança distinta de tracing; prioridade contextual, sem regra universal de 24/7. |
| E016: análise estática/dinâmica | Formulação operacional coerente com “paradinho” e aplicação funcionando na transcrição; não transforma produção no requisito definidor nem repete garantia de ausência de vulnerabilidades. |
| E019–E020: agrícola e domínio | Offline-first, IDs, filas, deduplicação, reconciliação, segurança e indicadores presentes. P95 da sincronização tem janela de conectividade explícita. GPS/Bluetooth/irrigação permanecem exemplos de contexto. |
| E021–E025: pedidos e resiliência | Confirmação perdida não prova ausência de execução; chave estável/resultado anterior; timeout, retry, backoff e DLQ distintos; contrato, testes, ordenação/deduplicação e observabilidade presentes. Sem promessa de execução física exatamente uma vez. |
| E026: conteúdo adiado | Caso 4 e bloco pós-implantação não apresentados como ministrados. Adiamento confirmado em 1:25:45–1:26:17. |
| E027: legado | Engenharia reversa, migração/evolução, manutenção e entendimento de hardware/domínio preservados; sem inventar laboratório ou garantir que IA elimina falhas de memória. |

Texto autossuficiente, organizado por conceitos e aplicações; não exige assistir à aula, não relata falas/timestamps no desenvolvimento e não transfere divergências ao estudante. Três atividades fictícias e quatro perguntas têm respostas comentadas coerentes com as evidências e com os conceitos ensinados.

### Referências do texto

Conferência estrutural de `post.md`: **139 chamadas sobrescritas**, **18 entradas**, primeiras ocorrências na ordem contínua **1–18**, nenhum ID duplicado, nenhum destino interno ausente, nenhuma divergência entre número visível e destino, e todas as ocorrências com retorno correspondente. Contagens coincidem com `mapa-referencias.md`. Localizadores e tipo/papel das fontes estão nas referências finais. Os visuais ainda precisam receber chamadas/retornos próprios sem renumerar o conteúdo.

### Achados impeditivos

Nenhum na etapa factual/editorial. Não foi necessária correção no texto pelo revisor.

### Observação para montagem (não impeditiva nesta etapa)

O slide 9 usa uma simplificação visual que situa CLP na execução e divide os blocos finais de modo distinto do mapa geral. O texto mantém a classificação geral sustentada pelo slide 4 e pelo desenvolvimento oral (CLP no controle; SCADA/MES na execução), que é a escolha coerente para o ensino. Responsável: publicador/editor visual deve conservar essa classificação nos SVGs próprios, sem copiar a inconsistência do diagrama simplificado.

## Etapa final: APROVADA

Revisão independente da montagem concluída. Nenhum achado impeditivo. A retirada do rótulo redundante da abertura preservou o conceito aprovado. Página, fontes editoriais, saída `dist`, dois SVGs, catálogos, renderizador e componentes/estilos/scripts compartilhados conferidos. O revisor alterou somente este relatório; não corrigiu o próprio objeto de revisão.

### Verificações reais da página

- `npm run build` reexecutado pelo revisor: sucesso, oito páginas estáticas. Rotas anteriores continuam geradas.
- Saída HTML: 143 chamadas sobrescritas, 18 referências e 143 retornos; ordem da primeira ocorrência 1–18, IDs únicos e nenhum destino interno ausente. As quatro chamadas dos visuais têm IDs/retornos próprios. Todos os links locais e os dois assets têm destino existente; nenhum PDF, TXT ou MD editorial publicado em `dist`.
- Conteúdo aprovado preservado, incluindo três casos, sete respostas comentadas e sete campos de rascunho com prefixo `te-03-rascunho-`. `details` nativos e rótulos associados aos campos; sem persistência de respostas compartilhada com outras aulas.
- Catálogo: cinco posts no total, três na matéria; novo cartão identifica Aula ao vivo 03, tema, casos e atividades. Links anteriores preservados; marca e retornos apontam para catálogo/matéria correta.
- `render-study.ts` tem apenas condição de inserção dos dois visuais para aula 03; posições anteriores preservadas.

### Inspeção independente em navegador

A IAB não estava disponível para o subagente revisor; a prévia do mesmo build foi inspecionada no Chrome conectado em `http://127.0.0.1:4321/tecnologias-emergentes-aula-ao-vivo-03/`. Aba temporária encerrada ao concluir e viewport restaurado.

- Desktop: screenshot da abertura confirmou marca completa, botão único de impressão, título serifado/verde, corpo/paleta/espaçamentos e duas colunas do padrão aprovado. Índice sequencial de dez seções, sem ocultar definitivamente as últimas entradas, com rolagem interna.
- Navegação para Caso de pedidos alcançou `#pedidos`, seção a aproximadamente 90 px do topo após a rolagem suave. Índice persistiu a 40 px. Progresso intermediário observado em 53,7962%; no fim, 100%, distância restante zero, índice a 40 px e ausência de rolagem horizontal geral. Screenshot do fim mostrou referências/retornos e foco visível no link do rodapé.
- Celular 390 × 844: screenshot confirmou marca/botão sem sobreposição, coluna lateral oculta, índice compacto antes da abertura e ausência de overflow geral. Enter no summary abriu “Neste post” e manteve foco em SUMMARY; link Referências funcionou.
- Retorno da referência 5 à chamada `citacao-5-22` testado no celular: hash correto e resposta antes recolhida aberta automaticamente. A funcionalidade preserva acesso ao trecho citado.
- Os dois SVGs foram abertos no navegador; screenshots confirmaram texto legível e hierarquia sem sobreposições nos trechos vistos. Diagrama de idempotência conferido também até a conclusão “Sem nova cobrança”. Conteúdo integral dos SVGs conferido no XML: coincide com evidências e não promete execução física exatamente uma vez. CLP permanece no controle e SCADA/MES na execução, resolvendo a observação da etapa anterior.
- Figuras com dimensões e alt informativos, legendas, crédito de elaboração própria e chamadas conceituais. Não há scripts, recursos externos ou imagem de terceiros com direitos incertos.

### Impressão, robustez e limites de verificação

Conferidas regras de impressão e script: cabeçalho/índice/progresso/controles ocultos, conteúdo/referências preservados, abertura das respostas em `beforeprint` e restauração em `afterprint`. **Não foi executada inspeção visual da prévia de impressão/PDF**, portanto não se declara paginação impressa validada visualmente.

Não foi percorrido exaustivamente todo o post por teclado nem simulados todos os tamanhos intermediários, página curta ou carregamento tardio. Controles nativos, foco visível, links reais e IDs foram conferidos; script contempla faixa zero, resize, load e ResizeObserver; redução de movimento vem do CSS compartilhado. Esses limites são de verificação, sem falha funcional observada.

### Resultado e bloqueios

**APROVADO para seguir à publicação no repositório.** Sem correções pendentes ou bloqueios impeditivos. A aprovação não afirma deploy nem site online; commit/push e confirmação do resultado pertencem ao coordenador/publicador.
