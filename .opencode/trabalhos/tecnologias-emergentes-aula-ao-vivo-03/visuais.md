# Inventário visual — aula ao vivo 03

SVGs de elaboração própria, construídos diretamente com elementos vetoriais; não gerados por ferramenta de imagens. Sem fontes externas, scripts, links externos ou dados pessoais. Paleta compartilhada: papel #faf9f5, texto #183b36, verde #216453, cinza #66746e, bordas #dce2da e dourado #e5b96c. Fonte local de sistema, com Arial/Helvetica como preferências. Referências numéricas abaixo seguem o mapa definitivo, que substitui a numeração provisória do plano.

## 1. Mapa das responsabilidades

- Finalidade: localizar cinco responsabilidades e associar evidências, preservando CLP no controle e SCADA/MES na execução; sem representar categorias ou etapas da entrega.
- Caminho: `/assets/tecnologias-emergentes-aula-ao-vivo-03/mapa-responsabilidades.svg`
- Dimensões: 1120 × 1060
- Alt: Cinco faixas: sensores, atuadores e CLP no controle físico; SCADA supervisiona e MES acompanha ordens na execução; ERP concilia registros na gestão; IIoT, APIs e eventos conectam dados e serviços; análises e IA apoiam decisões. Cada faixa associa indicadores à sua responsabilidade.
- Legenda: Cinco camadas ajudam a localizar responsabilidades e escolher evidências antes de atribuir uma causa.
- Crédito: Elaboração própria, com base nas referências **1 e 2**.
- Origem conceitual: E002–E006; livro, páginas físicas 57–60, e slides da aula ao vivo 03, slides 4–8. Autoria gráfica desta execução editorial; sem reprodução de imagens de terceiros.
- Montagem: inserir ao final de `camadas`, imediatamente antes de `tipos`, com ampliação acessível. Usar chamadas sobrescritas próprias às referências 1 e 2 e acrescentar retornos nas entradas finais.

## 2. Confirmação perdida, efeito preservado

- Finalidade: mostrar diferença entre operação aplicada e confirmação recebida, com a mesma chave na nova tentativa e retorno do resultado registrado.
- Caminho: `/assets/tecnologias-emergentes-aula-ao-vivo-03/confirmacao-idempotencia.svg`
- Dimensões: 1120 × 1130
- Alt: Exemplo fictício: o cliente envia pedido com chave 12345; o serviço processa e registra o resultado, mas a confirmação se perde. O cliente reenvia com a mesma chave. O serviço consulta o registro e retorna o resultado anterior sem nova cobrança.
- Legenda: Quando a confirmação se perde, a identidade da operação permite reconhecer a repetição e evitar efeitos duplicados.
- Crédito: Elaboração própria, com base nas referências **14 e 15**.
- Origem conceitual: E021–E023; livro, página física 66, e slides da aula ao vivo 03, slides 13–14. Chave 12345 é exemplo didático fictício; nenhuma garantia de execução física exatamente uma vez é representada. Autoria gráfica desta execução editorial; sem reprodução de imagens de terceiros.
- Montagem: inserir em `pedidos`, imediatamente antes de `### Idempotência`, com ampliação acessível. Usar chamadas sobrescritas próprias às referências 14 e 15 e acrescentar retornos nas entradas finais.

## Verificação real

- SVGs inspecionados estruturalmente: XML válido; dimensões/viewBox declarados; título e descrição acessíveis; textos visíveis explícitos; ausência de scripts e recursos externos.
- Letras de 26–40 unidades em 1120 unidades de largura: tamanho projetado de 13–20 px quando renderizado a 560 px. A figura permanece ampliável na montagem.
- Tentativa de renderização pelo visualizador local `qlmanage` não executada: erro de inicialização do sandbox (“invalid data type of path filter”). Nenhuma inspeção visual raster foi obtida por esse método. A revisão em navegador na montagem continua pendente; não declarar inspeção visual concluída a partir da análise estrutural.
