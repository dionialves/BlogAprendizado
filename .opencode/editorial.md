# Contrato editorial

## Entrada e autonomia

Primeiro identifique a matéria, o assunto e o tipo de estudo, em linguagem natural ou no comando `/criar-post`. O recorte pode ser um assunto, capítulo ou unidade do livro, ou uma aula ao vivo específica, com tema opcional para aprofundamento. Capítulo/unidade não exige número de aula. Não solicite aprovações de rascunho ou de prévia. Resolva escolhas editoriais autonomamente; pergunte somente quando a matéria, o recorte ou o tipo de aula for ambíguo ou houver um bloqueio real para concluir.

Trate `Matérias/` como caminho relativo à raiz do projeto. Localize a pasta real, inclusive acentos e espaços, sem presumir nomes. Todas as fontes conceituais, primárias e complementares, devem estar nessa pasta. Arquivos do site servem como referência de formato, não como evidência conceitual. Links citados nos documentos não autorizam buscar conteúdo externo.

### Tipos de estudo e prioridade das fontes

| Tipo | Fonte principal e organização | Complementos |
| --- | --- | --- |
| `estudo-dirigido` | Livro da matéria: assunto, capítulo ou unidade solicitado orienta a seleção e progressão dos conceitos. | Slides, aulas conceituais e aulas ao vivo pertinentes ao recorte. |
| `aula-ao-vivo` | Registro/transcrição da aula ao vivo solicitada: seus assuntos efetivamente tratados orientam o escopo e o plano. | Trechos pertinentes do livro e slides; aulas conceituais podem esclarecer os mesmos assuntos. |

Pedidos de assunto, capítulo ou unidade adotam `estudo-dirigido` por padrão. Aula conceitual é complemento do estudo dirigido, não deve ser confundida com aula ao vivo. Se uma aula conceitual for indicada como recorte, identifique seus assuntos e desenvolva-os com o livro como base. Para pedidos apenas de “aula 02”, examine os materiais para identificar o tipo; pergunte se os arquivos não permitirem distinguir. Não deduza o tipo só pelo número.

No estudo dirigido, localize o recorte no sumário e nas páginas do livro antes de complementar com aulas. Na aula ao vivo, extraia primeiro os assuntos do registro da aula e depois relacione-os ao livro e slides, sem transformar o post em uma cobertura genérica de todo o capítulo. Identifique explicações complementares como tais, sem atribuí-las ao que foi dito ao vivo. Complementos devem aprofundar o recorte ou explicar pré-requisitos, não ampliá-lo indiscriminadamente.

Registre a função de cada fonte (principal ou complementar) e o tipo de aula (ao vivo ou conceitual). Ausência ou ilegibilidade da fonte principal impede concluir aquele tipo de estudo: não substitua silenciosamente livro por aula, nem registro de aula ao vivo por slides. Divergências não são resolvidas automaticamente pela prioridade; devem ser conferidas e explicitadas com evidência.

Crie um dossiê em `.opencode/trabalhos/<slug>/`, com slug único, contendo:

1. `escopo.md`: pedido, matéria, assunto, tipo de estudo, capítulo/unidade/aula quando aplicável, fonte principal, complementos autorizados, objetivo, público, vínculos com posts existentes, slug e situação inicial do Git.
2. `evidencias.md`: inventário com papel e tipo de cada fonte, IDs como E001, afirmações sustentadas, correspondência entre assuntos e trechos do livro/aulas, arquivo, página/slide/trecho e limitações.
3. `plano.md`: título, progressão didática, seções, evidências por seção, exercícios e plano visual.
4. `post.md`: texto integral com referências às evidências durante o trabalho.
5. `revisao.md`: achados, correções e resultado da revisão factual/editorial e final.
6. `visuais.md`: finalidade, caminho, origem, autoria/licença quando aplicável, legenda e texto alternativo de cada visual.
7. `publicacao.md`: arquivos finais, URL relativa, comandos/resultados de validação, arquivos do commit e estado de publicação.

Atualize o estado de cada etapa em `escopo.md`. Em retomadas, confira artefatos e alterações nas fontes antes de reutilizá-los. Não invente resultados, citações, páginas ou aprovações. Se um documento não puder ser lido, registre a limitação e tente ferramentas locais disponíveis; se faltar evidência essencial, não publique afirmações sem suporte.

## Conteúdo e fontes

- Densidade significa explicar conceitos, relações, aplicações, diferenças e limites com clareza, não repetir conteúdo ou cumprir uma contagem artificial.
- Use voz de professor/tutor, acessível e tecnicamente rigorosa, em português brasileiro.
- Planeje introdução, ideia central, índice de seções, desenvolvimento, exemplos passo a passo, síntese, prática, questionário, respostas comentadas e referências. Adapte seções ao assunto, sem blocos vazios ou artificiais.
- Identifique exemplos e dados inventados como fictícios/didáticos. Não atribua ao professor frases ou explicações criadas pelo redator.
- Todo conceito factual, resposta de exercício e informação em diagramas precisa ter suporte no mapa de evidências. Aplique o mesmo critério a legendas e textos alternativos.
- Distinga citações literais de paráfrases. Evite reproduções extensas dos materiais. Referências finais devem localizar as informações por arquivo/título e página, slide ou trecho; IDs de trabalho não substituem referências compreensíveis no post.
- Divergências entre fontes devem ser explicitadas e resolvidas com evidência; não escolha arbitrariamente nem esconda incertezas.
- Se o aprofundamento exceder as fontes, explique o limite e desenvolva apenas o que estiver sustentado.

## Visuais

Planeje visuais junto com o texto. Priorize recortes legíveis dos materiais e diagramas SVG próprios. Use imagens para explicar exemplos e relações, incluindo capa quando adequada, sem decorar todos os blocos desnecessariamente.

A internet só pode ser usada para obter ilustrações e verificar sua procedência/licença; não para pesquisa conceitual. Registre URL da página de origem, URL do arquivo, autor, licença e data de consulta. Escolha imagens com permissão de reutilização verificável; crédito sozinho não substitui licença. Quando indisponível, use material local ou SVG.

Recortes locais devem indicar documento, página/slide e alterações realizadas. SVGs devem ter crédito de elaboração própria e referências conceituais. Imagens geradas por IA devem usar uma ferramenta realmente disponível, ser identificadas como geradas, registrar ferramenta/modelo quando conhecido e prompt no dossiê. Não simule geração nem configure serviços pagos sem pedido. A ausência dessa ferramenta não bloqueia a entrega.

Guarde os arquivos finais em `public/assets/<slug>/`. Use caminhos `/assets/<slug>/...`, dimensões adequadas, legenda visível com origem e texto alternativo informativo. Evite texto ilegível em imagens e não embuta scripts em SVGs.

## Integração e revisão

Crie uma página nova com slug descritivo e sem colisão. Identifique visivelmente o tipo como “Estudo dirigido do livro” ou “Aula ao vivo” no post e no cartão da matéria, distinguindo unidade/capítulo de número de aula. Nas referências, separe fonte principal e complementos. Aprofundamentos devem apontar para o post de origem quando existente; estudos do livro não exigem vínculo com uma aula. Não invente links. Reutilize BaseLayout, SiteHeader e os padrões atuais de estilos, navegação, ampliação de imagens e atividades quando pertinentes. Examine scripts antes de reutilizá-los: seletores e chaves de armazenamento devem funcionar e não misturar respostas de posts diferentes.

Atualize página da matéria, catálogo, contagens e ligações necessárias. Para nova matéria, crie sua página e cartão. Preserve a experiência de impressão, leitura móvel e navegação por âncoras. Não refatore o site inteiro para publicar um post.

O revisor é independente do redator e deve consultar as fontes originais, não apenas confiar no mapa. Faça revisão factual/editorial antes dos visuais e revisão final depois da montagem. Achados impeditivos retornam ao responsável, são corrigidos e conferidos novamente. Sem limite arbitrário de tentativas: se não houver solução, relate o bloqueio em vez de aprovar.

## Validação e entrega

Execute `npm run build` e confira páginas geradas, links internos, referências de imagens, âncoras, contagens e respostas dos exercícios. Use preview e ferramenta de navegador se disponíveis para revisar desktop/móvel e interações. Se não houver navegador, declare que a inspeção visual não foi executada; build não prova correção visual. Não crie testes que apenas espelham texto; valide os comportamentos relevantes.

Antes do commit, inspecione `git status`, `git diff`, `git log --oneline -10` e os arquivos não rastreados da execução. Confira remoto e branch. Só publique na `main`, sem sobrescrever trabalho alheio. Faça stage por caminhos explícitos, revise o diff staged, crie mensagem concisa no estilo do histórico e execute push para `origin main` se esse for o remoto confirmado. Se houver rejeição, autenticação ausente ou divergência de histórico, não use force-push: relate e mantenha os artefatos recuperáveis. Se hooks falharem, corrija e tente novo commit sem amend.

O dossiê deve acompanhar o commit sem arquivos temporários, binários intermediários ou segredos. Registre as verificações em `publicacao.md` antes do commit; informe SHA e resultado do push na resposta final, evitando um segundo commit só para registrar o próprio SHA.

Entrega final: título, caminho e URL relativa do post, resumo do conteúdo, fontes principais, validações, SHA e resultado do push. Sem hospedagem conhecida, diga “enviado ao repositório”; só declare deploy/site online após verificar o mecanismo e seu resultado.
