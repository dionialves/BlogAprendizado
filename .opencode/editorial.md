# Contrato editorial

## Entrada e autonomia

Primeiro identifique a matéria, o assunto e o tipo de estudo, em linguagem natural ou no comando `/criar-post`. O recorte pode ser um assunto, capítulo ou unidade do livro, ou uma aula ao vivo específica, com tema opcional para aprofundamento. Capítulo/unidade não exige número de aula. Não solicite aprovações de rascunho ou de prévia. Resolva escolhas editoriais autonomamente; pergunte somente quando a matéria, o recorte ou o tipo de aula for ambíguo ou houver um bloqueio real para concluir.

Trate `Matérias/` como caminho relativo à raiz do projeto. Localize a pasta real, inclusive acentos e espaços, sem presumir nomes. Todas as fontes conceituais, primárias e complementares, devem estar nessa pasta. Arquivos do site servem como referência de formato, não como evidência conceitual. Links citados nos documentos não autorizam buscar conteúdo externo.

### Tipos de estudo e prioridade das fontes

| Tipo | Fonte principal e organização | Complementos |
| --- | --- | --- |
| `estudo-dirigido` | Livro da matéria: assunto, capítulo ou unidade solicitado orienta a seleção e progressão dos conceitos. | Slides, aulas conceituais e aulas ao vivo pertinentes ao recorte. |
| `aula-ao-vivo` | Transcrição e slides delimitam os assuntos da aula; o livro em PDF é a base conceitual para desenvolver o estudo. | Conteúdos pertinentes de aulas conceituais; assuntos adicionais documentados na aula são preservados mesmo quando ausentes do livro. |

Pedidos de assunto, capítulo ou unidade adotam `estudo-dirigido` por padrão. Aula conceitual é complemento do estudo dirigido, não deve ser confundida com aula ao vivo. Se uma aula conceitual for indicada como recorte, identifique seus assuntos e desenvolva-os com o livro como base. Para pedidos apenas de “aula 02”, examine os materiais para identificar o tipo; pergunte se os arquivos não permitirem distinguir. Não deduza o tipo só pelo número.

No estudo dirigido, localize o recorte no sumário e nas páginas do livro antes de complementar com aulas. Na aula ao vivo, extraia primeiro os assuntos do registro da aula e depois relacione-os ao livro e slides, sem transformar o post em uma cobertura genérica de todo o capítulo. Integre as explicações pertinentes em uma progressão de aprendizagem, preservando a origem no dossiê e nas referências finais, sem interromper o ensino com relatos sobre cada fonte. Complementos devem aprofundar o recorte ou explicar pré-requisitos, não ampliá-lo indiscriminadamente.

Registre a função específica de cada fonte e o tipo de aula (ao vivo ou conceitual). Para aula ao vivo, leia e confronte transcrição, slides e livro em PDF: os dois primeiros determinam a cobertura e o livro fornece a base conceitual. Ausência ou ilegibilidade de um desses três materiais deve ser registrada como bloqueio para concluir o estudo integrado; não substitua silenciosamente um material por outro. No estudo dirigido, o livro continua indispensável e não se exige aula. Divergências devem ser investigadas no dossiê conforme as regras abaixo.

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
- Investigue divergências com evidência no dossiê. Não transfira ao leitor a tarefa de decidir entre versões; siga o tratamento de divergências abaixo.
- Se o aprofundamento exceder as fontes, explique o limite e desenvolva apenas o que estiver sustentado.

## Estudo integrado da aula: ensinar o conteúdo

O post deve permitir que alguém que não assistiu à aula aprenda os assuntos nela trabalhados. É um material autossuficiente de estudo, com definições, relações, explicações, exemplos e prática. Não é uma ata, uma transcrição comentada ou uma comparação pública entre professor, slides e livro.

### Pesquisa e cobertura obrigatórias

- Leia a transcrição integralmente, examine todos os slides e localize no livro em PDF os conceitos pertinentes. O livro é sempre a base conceitual, mas não limita a cobertura aos assuntos que contém.
- Em `evidencias.md`, construa uma matriz por assunto com: assunto/subassunto, localização na transcrição, slide pertinente, capítulo/página do livro, síntese sustentada, divergências ou lacunas, encaminhamento e seção prevista do post. Use “não localizado” quando não houver correspondência; não invente equivalências.
- Preserve assuntos e exemplos substantivos documentados na aula mesmo quando ausentes do livro. Nesses casos, use o suporte efetivamente disponível na transcrição e nos slides, sem inventar confirmação no livro nem completar com conhecimento externo.
- Registre todos os assuntos identificados e seu destino no plano. Saudações, avisos administrativos, repetições e digressões sem conteúdo de estudo podem ser excluídos com justificativa interna. Em aprofundamento temático, registre quais assuntos ficam fora do recorte solicitado.

### Síntese e divergências

Compare as fontes antes de redigir. Investigue diferenças de terminologia, simplificações, possíveis erros de transcrição e contradições nas fontes originais. Registre no dossiê a evidência e a decisão editorial; a prioridade do livro não autoriza apagar assuntos adicionais da aula nem decidir contradições sem suporte.

Quando houver solução sustentada, ensine diretamente a formulação conferida. Quando duas formulações descreverem contextos diferentes, explique os conceitos e suas condições de aplicação. Não use “o professor disse X, mas o slide diz Y” como substituto de uma explicação. Não peça ao estudante que escolha uma versão.

Se uma incerteza material não puder ser resolvida, não apresente nenhuma versão duvidosa como fato. Registre o bloqueio no dossiê e retorne ao coordenador; uma contradição essencial impede a aprovação. Uma limitação pontual pode ser informada de forma breve e conceitual quando não prejudicar os objetivos de aprendizagem, sem transformar o artigo em um relatório de apuração.

### Redação e critérios de aprovação

Organize por conceitos e progressão didática, não pela ordem de falas, timestamps ou slides. Explique termos antes de usá-los; desenvolva relações, aplicações e limites com suporte documental. Referências finais garantem rastreabilidade; IDs, timestamps, trechos de conferência e a matriz comparativa ficam no dossiê. Localizadores da transcrição podem aparecer nas referências finais, sem pontuar o desenvolvimento.

Reprove texto que dependa de ter assistido à aula, omita assuntos substantivos sem justificativa de recorte ou substitua explicações por “o professor falou”, “na transcrição”, “no minuto”, “o slide diz” e citações de falas. Atribuições pontuais só cabem quando indispensáveis ao próprio conceito estudado; não devem estruturar a narrativa. Não exponha decisões editoriais, conflitos entre fontes ou instruções de escolha ao estudante. O revisor deve conferir a cobertura da matriz e a qualidade didática, além da exatidão factual.

## Referências numeradas e navegação

Toda indicação de fonte de um trecho deve aparecer como um número sobrescrito clicável ao lado da frase ou do parágrafo sustentado, levando à entrada correspondente na seção “Referências”, ao final da mesma página. Não escreva no corpo nomes de arquivos, títulos de fontes, páginas, slides, timestamps ou expressões como “segundo o livro” para indicar procedência. A explicação deve continuar fluida; os detalhes bibliográficos ficam nas referências finais. A regra vale também para fontes conceituais de tabelas, figuras e respostas comentadas; créditos de autoria e licença de imagens continuam visíveis quando necessários.

- Numere as entradas pela ordem da primeira citação no texto, mantendo numeração única e contínua na página, inclusive quando as fontes forem agrupadas por função. Reutilize o número quando a mesma fonte e o mesmo localizador sustentarem outro trecho. Para localizadores diferentes, crie entradas distintas. Se um trecho depender de várias entradas, acrescente os números correspondentes.
- Em `post.md`, use marcadores numerados com links internos e registre a correspondência entre número, IDs de evidência e fonte/localizador no dossiê. IDs como E001 são internos e não aparecem na página publicada.
- Na página Astro, use HTML semântico, por exemplo: `<sup><a id="citacao-1-1" href="#referencia-1" aria-label="Ver referência 1">1</a></sup>`. Cada ocorrência deve ter um ID único (`citacao-1-2` etc.) e o destino final deve existir, por exemplo `<li id="referencia-1">…</li>`. Não dependa de JavaScript para navegar.
- Cada entrada final deve conter número, título/arquivo, tipo de material e localização precisa: página do livro/PDF, slide ou trecho/seção da transcrição (timestamp somente se disponível). Inclua links de retorno às respectivas citações, com rótulos acessíveis. Não invente endereços nem publique documentos internos para criar links: a ligação obrigatória é com a referência ao final da página.
- Confira que todos os números levam à entrada correta, que todas as entradas são citadas e que a numeração visível corresponde ao destino. Verifique IDs únicos, retornos, navegação por teclado, foco visível e leitura em dispositivos móveis. Na impressão, números e referências devem continuar legíveis.

## Visuais

Planeje visuais junto com o texto. Priorize recortes legíveis dos materiais e diagramas SVG próprios. Use imagens para explicar exemplos e relações, incluindo capa quando adequada, sem decorar todos os blocos desnecessariamente.

A internet só pode ser usada para obter ilustrações e verificar sua procedência/licença; não para pesquisa conceitual. Registre URL da página de origem, URL do arquivo, autor, licença e data de consulta. Escolha imagens com permissão de reutilização verificável; crédito sozinho não substitui licença. Quando indisponível, use material local ou SVG.

Recortes locais devem indicar documento, página/slide e alterações realizadas. SVGs devem ter crédito de elaboração própria e referências conceituais. Imagens geradas por IA devem usar uma ferramenta realmente disponível, ser identificadas como geradas, registrar ferramenta/modelo quando conhecido e prompt no dossiê. Não simule geração nem configure serviços pagos sem pedido. A ausência dessa ferramenta não bloqueia a entrega.

Guarde os arquivos finais em `public/assets/<slug>/`. Use caminhos `/assets/<slug>/...`, dimensões adequadas, legenda visível com origem e texto alternativo informativo. Evite texto ilegível em imagens e não embuta scripts em SVGs.

## Integração e revisão

Crie uma página nova com slug descritivo e sem colisão. Identifique visivelmente o tipo como “Estudo dirigido do livro” ou “Aula ao vivo” no post e no cartão da matéria, distinguindo unidade/capítulo de número de aula. Nas referências, identifique o livro como base conceitual e, em aulas ao vivo, transcrição e slides como materiais da aula; no estudo dirigido, separe livro e complementos. Aprofundamentos devem apontar para o post de origem quando existente; estudos do livro não exigem vínculo com uma aula. Não invente links. Reutilize BaseLayout, SiteHeader e os padrões atuais de estilos, navegação, ampliação de imagens e atividades quando pertinentes. Examine scripts antes de reutilizá-los: seletores e chaves de armazenamento devem funcionar e não misturar respostas de posts diferentes.

Atualize página da matéria, catálogo, contagens e ligações necessárias. Para nova matéria, crie sua página e cartão. Preserve a experiência de impressão, leitura móvel e navegação por âncoras. Não refatore o site inteiro para publicar um post.

O revisor é independente do redator e deve consultar as fontes originais, não apenas confiar no mapa. Faça revisão factual/editorial antes dos visuais e revisão final depois da montagem. Achados impeditivos retornam ao responsável, são corrigidos e conferidos novamente. Sem limite arbitrário de tentativas: se não houver solução, relate o bloqueio em vez de aprovar.

## Validação e entrega

Execute `npm run build` e confira páginas geradas, links internos, referências de imagens, âncoras, contagens e respostas dos exercícios. Use preview e ferramenta de navegador se disponíveis para revisar desktop/móvel e interações. Se não houver navegador, declare que a inspeção visual não foi executada; build não prova correção visual. Não crie testes que apenas espelham texto; valide os comportamentos relevantes.

Antes do commit, inspecione `git status`, `git diff`, `git log --oneline -10` e os arquivos não rastreados da execução. Confira remoto e branch. Só publique na `main`, sem sobrescrever trabalho alheio. Faça stage por caminhos explícitos, revise o diff staged, crie mensagem concisa no estilo do histórico e execute push para `origin main` se esse for o remoto confirmado. Se houver rejeição, autenticação ausente ou divergência de histórico, não use force-push: relate e mantenha os artefatos recuperáveis. Se hooks falharem, corrija e tente novo commit sem amend.

O dossiê deve acompanhar o commit sem arquivos temporários, binários intermediários ou segredos. Registre as verificações em `publicacao.md` antes do commit; informe SHA e resultado do push na resposta final, evitando um segundo commit só para registrar o próprio SHA.

Entrega final: título, caminho e URL relativa do post, resumo do conteúdo, fontes principais, validações, SHA e resultado do push. Sem hospedagem conhecida, diga “enviado ao repositório”; só declare deploy/site online após verificar o mecanismo e seu resultado.

## Contrato de layout

Leia e aplique `.opencode/layout.md` em toda criação, montagem e revisão visual. O padrão aprovado são os dois primeiros posts de Gestão de Projetos, independentemente da matéria. O coordenador deve fornecer explicitamente esse caminho aos agentes junto das regras editoriais e do dossiê. A revisão final deve conferir os critérios visuais e funcionais desse contrato.
