# Padrão visual dos posts do Caderno de estudo

## Referência aprovada e alcance

Todos os posts, de qualquer matéria ou tipo de estudo, seguem o layout dos dois primeiros posts de Gestão de Projetos Tecnológicos: `src/pages/aula-01.astro` e `src/pages/aula-02.astro`. Essas páginas são referência visual, não fonte factual nem modelo de redação. Não reproduza seus problemas editoriais ou referências antigas. O padrão alternativo presente nos posts de Tecnologias Emergentes não deve orientar novas montagens.

Antes da montagem, examine `src/layouts/BaseLayout.astro`, `src/components/SiteHeader.astro`, `src/styles/styles.css`, `src/styles/aula-02.css` e os scripts das duas aulas. Reutilize a estrutura e estilos compartilhados; acrescente apenas o necessário para o post. Não copie scripts completos com questionários, dados ou seletores de outra aula. Não crie uma identidade visual por matéria nem estilos locais que substituam este padrão.

Este contrato orienta criação e revisões solicitadas. Sua edição, por si só, não autoriza reescrever páginas existentes nem publicar alterações no site.

## Cabeçalho

- À esquerda: marca “CADERNO DE ESTUDO / TECNOLOGIA”, com a tipografia, espaçamento e cores das páginas de referência.
- À direita: um único botão “Imprimir / salvar PDF”, acionando a impressão do navegador. Não substituir por rótulo de matéria ou outro cabeçalho.
- Use `SiteHeader` e `BaseLayout`. A marca e os caminhos de retorno devem funcionar na matéria atual. Atualmente `SiteHeader` com `lesson` aponta para Gestão de Projetos; ao generalizar seu uso, adapte o componente para receber o destino correto, sem enviar posts de outras matérias para Gestão.
- O cabeçalho permanece no fluxo da página. O índice é o elemento que permanece visível durante a leitura; a barra de progresso fica presa ao topo da janela.

## Duas colunas e índice persistente

No desktop, coloque o índice à esquerda e o conteúdo à direita, conforme as duas aulas aprovadas. O índice lista as seções do próprio post, e não capítulos do livro nem outros posts. Use numeração sequencial com dois dígitos: “01 · Título”, “02 · Título”, etc., incluindo as seções finais pertinentes e Referências. Gere os rótulos a partir da estrutura real, sem impor quantidade fixa.

Use `.layout` com largura máxima de 1320px, margens automáticas, colunas de 250px e espaço restante, intervalo de 70px e espaçamento horizontal de 45px. O conteúdo principal tem `min-width: 0` e largura máxima de 870px. O `aside` usa `position: sticky`, afastamento superior de 40px e altura ajustada ao conteúdo, preservando a navegação enquanto o texto rola. Não aplique `overflow` ou alturas em ancestrais que impeçam o comportamento sticky. Se o índice exceder a altura disponível, limite sua altura ao espaço da janela e permita rolagem interna para que todos os links permaneçam acessíveis.

Acima do índice, ofereça retorno a todas as matérias e à matéria correta. Cada item deve apontar para um ID único na seção correspondente. O clique deve levar diretamente ao título, com margem superior suficiente para não encobri-lo. Use navegação semântica com rótulo acessível, links reais e foco visível; preserve o funcionamento das âncoras sem JavaScript. Respeite a preferência por redução de movimento ao fazer rolagem suave.

## Cores, tipografia e hierarquia

Reutilize as variáveis existentes, sem criar uma paleta paralela:

| Uso | Valor de referência |
| --- | --- |
| Texto principal (`--ink`) | `#183b36` |
| Texto secundário (`--muted`) | `#66746e` |
| Verde de destaque (`--green`) | `#216453` |
| Fundo de papel (`--paper`) | `#faf9f5` |
| Bordas (`--line`) | `#dce2da` |
| Destaque dourado (`--accent`) | `#e5b96c` |

O corpo usa fonte de sistema, 17px e entrelinha 1.75 no desktop. O título principal usa Georgia/serif, peso 500, tamanho fluido de 38px a 62px e entrelinha 1.1; destaques em itálico usam o verde. Os títulos de seção usam Georgia/serif, 36px, peso 500 e entrelinha 1.2. Subtítulos usam fonte de sistema, em torno de 21px. Identificadores de seção usam `.eyebrow`, com letras pequenas, espaçadas e verdes.

Preserve a abertura `.hero`, título com destaque quando adequado, introdução `.lead`, metadados discretos e bloco `.takeaway` de ideia central. Use cartões, notas, tabelas e exemplos com os padrões existentes (`.cards`, `.note`, `.callout`, `.case`, `.table-wrap`) quando necessários. Mantenha respiros, bordas suaves e cantos discretos das referências; não transforme cada parágrafo em cartão nem imponha elementos decorativos sem função. Esta orientação define apresentação, não exige texto ou seções artificiais.

Chamadas numéricas de referências devem ser discretas, sobrescritas e clicáveis, conforme `.opencode/editorial.md`. Preserve foco e legibilidade, sem inserir os nomes das fontes no corpo para cumprir uma função visual.

## Barra de progresso de leitura

Use uma barra fina de 4px, dourada (`--accent`), fixa no topo da janela e alinhada à esquerda, acima dos demais elementos (`z-index: 20`, conforme `#progress`). Ela cresce horizontalmente à medida que a página é percorrida: 0% no início e 100% no fim da rolagem. Não use uma barra com altura ou texto que dispute atenção com a leitura.

Calcule a proporção entre o deslocamento vertical e a altura total rolável (`scrollHeight - clientHeight`), limitada ao intervalo de 0 a 100%. Em página sem rolagem, considere a leitura integral visível e a barra completa, sem divisão por zero. Atualize na inicialização, na rolagem, no redimensionamento e após carregamentos que alterem a altura, como imagens. Use listener passivo e evite trabalho excessivo durante a rolagem. Não dependa do script específico de atividades de outra aula. Como indicador visual redundante, a barra pode usar `aria-hidden="true"`; não anuncie percentuais continuamente a leitores de tela.

## Telas menores e impressão

Siga os pontos de adaptação existentes: até 1000px, índice de 190px, intervalo de 30px e espaçamento lateral de 28px; até 720px, conteúdo em uma coluna, espaçamento lateral de 22px e corpo de 16px. Reduza títulos conforme os estilos de referência. Tabelas podem rolar dentro de seu contêiner, sem provocar rolagem horizontal na página.

No celular, a lateral deixa de ocupar uma coluna. Ofereça o mesmo índice em um controle compacto e expansível “Neste post”, acessível por teclado, antes do conteúdo; não duplique IDs. Não mantenha uma coluna fixa que reduza o espaço de leitura. A marca e o botão de impressão devem caber sem sobreposição; a barra de progresso continua no topo.

Na impressão/PDF, remova cabeçalho, índice, barra de progresso e controles de interação. Use fundo branco, texto legível, conteúdo em largura útil e referências numeradas preservadas. Mostre respostas e explicações que ficariam recolhidas, quando necessárias ao estudo impresso, e restaure o estado da tela depois. Evite cortar figuras, cartões e tabelas quando possível.

## Conferência obrigatória

O publicador monta e o revisor confere a página contra as duas referências aprovadas, sem se limitar ao build. Registre em `publicacao.md` e `revisao.md`:

- Cabeçalho correto, destino da marca e retornos da matéria atual.
- Tipografia, paleta, larguras e espaçamentos consistentes com Gestão de Projetos.
- Índice esquerdo visível no começo, meio e fim da rolagem; todos os links levam aos títulos corretos, inclusive em índice longo.
- Barra no começo, meio e fim, após redimensionamento e carregamento de imagens, sem erros em páginas curtas.
- Leitura em desktop e celular, índice móvel, teclado, foco, âncoras das referências e ausência de sobreposição ou rolagem horizontal geral.
- Impressão/PDF com conteúdo e referências completos e controles ocultos.

Execute `npm run build` ao alterar páginas, componentes, estilos ou scripts. Use navegador e prévia de impressão quando disponíveis; se indisponíveis, registre quais verificações visuais ou de interação não foram realizadas. Não declare layout validado apenas porque a compilação passou.
