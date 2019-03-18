/** @license
 * Copyright (c) 2013-2017 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(){return{a11y:{widget:{title:"Verificador de Acessibilidade",running:"Verificando...",issue:{counter:"Problema {0} de {1}",help:"Refer\xeancia WCAG 2.0 - abre em nova janela",none:"N\xe3o foi detectado nenhum problema de acessibilidade"},previous:"Problema anterior",next:"Problema seguinte",repair:"Reparar problema",available:"Reparo dispon\xedvel",ignore:"Ignorar"},image:{alttext:{empty:"As imagens devem ter uma descri\xe7\xe3o de texto alternativa",filenameduplicate:"O texto alternativo n\xe3o deve ser igual ao nome do arquivo de imagem",set:"Forne\xe7a o texto alternativo:",validation:{empty:"O texto alternativo n\xe3o pode ficar em branco",filenameduplicate:"O texto alternativo n\xe3o pode ser igual ao nome do arquivo"}}},table:{caption:{empty:"As tabelas devem ter legendas",summaryduplicate:"A legenda e o resumo da tabela n\xe3o podem ter o mesmo valor",set:"Forne\xe7a a legenda:",validation:{empty:"A legenda n\xe3o pode ficar em branco",summaryduplicate:"A legenda n\xe3o pode ser igual ao resumo da tabela"}},summary:{empty:"As tabelas complexas devem ter resumos",set:"Forne\xe7a um resumo para a tabela:",validation:{empty:"O resumo n\xe3o pode ficar em branco",captionduplicate:"O resumo n\xe3o pode ser igual \xe0 legenda da tabela"}},rowscells:{none:"Os elementos da tabela devem conter tags tr e td"},headers:{none:"As tabelas devem ter pelo menos uma c\xe9lula de cabe\xe7alho",set:"Escolha o cabe\xe7alho da tabela:",validation:{none:"Selecione se \xe9 cabe\xe7alho de linha ou coluna"}},headerscope:{none:"Os cabe\xe7alhos de tabela devem ser aplicados a uma linha ou coluna",set:"Selecione o escopo do cabe\xe7alho:",scope:{row:"Linha",col:"Coluna",rowgroup:"Grupo de linhas",colgroup:"Grupo de colunas"}}},heading:{nonsequential:"Os t\xedtulos devem ser aplicados sequencialmente. Por exemplo: o T\xedtulo 1 deve ser seguido do T\xedtulo 2, e n\xe3o do T\xedtulo 3.",paragraphmisuse:"Este par\xe1grafo parece ser um t\xedtulo. Se for um t\xedtulo, selecione um n\xedvel de t\xedtulo.",set:"Selecione um n\xedvel de t\xedtulo:"},link:{adjacent:"Os links adjacentes com o mesmo URL devem ser mesclados em um s\xf3 link"},list:{paragraphmisuse:"O texto selecionado parece ser uma lista. As listas devem ser formatadas usando-se uma tag de lista."},contrast:{smalltext:"O texto deve ter uma rela\xe7\xe3o de contraste m\xednima de 4,5:1",largetext:"O texto grande deve ter uma rela\xe7\xe3o de contraste m\xednima de 3:1"},severity:{error:"Erro",warning:"Aviso",info:"Informa\xe7\xe3o"}},aria:{autocorrect:{announce:"Corrigir {0} automaticamente"},label:{toolbar:"Barra de Ferramentas do Editor de Rich Text",editor:"Editor de Rich Text do Textbox.io \u2013 {0}",fullscreen:"Editor de Rich Text em Tela Cheia do Textbox.io \u2013 {0}",content:"Conte\xfado edit\xe1vel",more:"Clique para expandir ou recolher"},help:{mac:"Pressione \u2303\u2325H para ajuda",ctrl:"Pressione CTRL SHIFT H para ajuda"},color:{picker:"Seletor de Cores",menu:"Menu do Seletor de Cores"},font:{color:"Cores do Texto",highlight:"Cores de Realce",palette:"Paleta de cores"},context:{menu:{generic:"Menu de Contexto"}},stepper:{input:{invalid:"O valor do tamanho \xe9 inv\xe1lido"}},table:{headerdescription:"Pressione a barra de espa\xe7o para ativar a configura\xe7\xe3o. Pressione Tab para retornar ao seletor de tabelas.",cell:{border:{size:"Tamanho da Borda"}}},input:{invalid:"Entrada inv\xe1lida"},widget:{navigation:"Use as teclas de seta para navegar."},image:{crop:{size:"O tamanho do recorte \xe9 de {0} pixels por {1} pixels"}}},color:{white:"Branco",black:"Preto",gray:"Cinza",metal:"Cinza met\xe1lico",smoke:"Cinza esfuma\xe7ado",red:"Vermelho",darkred:"Vermelho escuro",darkorange:"Laranja escuro",orange:"Laranja",yellow:"Amarelo",green:"Verde",darkgreen:"Verde escuro",mediumseagreen:"Verde marinho m\xe9dio",lightgreen:"Verde claro",lime:"Verde lim\xe3o",mediumblue:"Azul m\xe9dio",navy:"Azul marinho",blue:"Azul",lightblue:"Azul claro",violet:"Violeta"},directionality:{rtldir:"Sentido da direita para a esquerda",ltrdir:"Sentido da esquerda para a direita"},parlance:{menu:"Menu de Idioma",set:"Definir Idioma",ar:"\xc1rabe",ca:"Catal\xe3o",zh_cn:"Chin\xeas (Simplificado)",zh_tw:"Chin\xeas (Tradicional)",hr:"Croata",cs:"Tcheco",da:"Dinamarqu\xeas",nl:"Holand\xeas",en:"Ingl\xeas",en_au:"Ingl\xeas (Austr\xe1lia)",en_ca:"Ingl\xeas (Canad\xe1)",en_gb:"Ingl\xeas (Reino Unido)",en_us:"Ingl\xeas (Estados Unidos)",fa:"Persa",fi:"Finland\xeas",fr:"Franc\xeas",fr_ca:"Franc\xeas (Canad\xe1)",de:"Alem\xe3o",el:"Grego",he:"Hebraico",hu:"H\xfangaro",it:"Italiano",ja:"Japon\xeas",kk:"Cazaque",ko:"Coreano",no:"Noruegu\xeas",pl:"Polon\xeas",pt_br:"Portugu\xeas (Brasil)",pt_pt:"Portugu\xeas (Portugal)",ro:"Romeno",ru:"Russo",sk:"Eslovaco",sl:"Esloveno",es:"Espanhol",es_419:"Espanhol (Am\xe9rica Latina)",es_es:"Espanhol (Espanha)",sv:"Sueco",tt:"T\xe1rtaro",th:"Tailand\xeas",tr:"Turco",uk:"Ucraniano"},taptoedit:"Toque para editar",plaincode:{dialog:{title:"Exibi\xe7\xe3o de C\xf3digo",editor:"Editor de c\xf3digo fonte HTML"}},help:{dialog:{accessibility:"Navega\xe7\xe3o pelo Teclado",a11ycheck:"Verifica\xe7\xe3o de Acessibilidade",about:"Sobre o Textbox.io",markdown:"Formata\xe7\xe3o com Markdown",shortcuts:"Atalhos de Teclado"}},spelling:{context:{more:"Mais",morelabel:"Submenu de Mais Op\xe7\xf5es de Ortografia"},none:"Nenhum",menu:"Idioma de Ortografia"},specialchar:{open:"Caractere Especial",dialog:"Inserir Caractere Especial",latin:"Latino",insert:"Inserir",punctuation:"Pontua\xe7\xe3o",currency:"Moedas","extended-latin-a":"Latino Estendido A","extended-latin-b":"Latino Estendido B",arrows:"Setas",mathematical:"Matem\xe1tico",miscellaneous:"Diversos",selects:"Caracteres Selecionados",grid:"Caracteres Especiais"},insert:{"menu-button":"Menu de Inserir",menu:"Inserir",link:"Link",bookmark:"Marcador",image:"Imagem",table:"Tabela",horizontalrule:"R\xe9gua Horizontal",media:"M\xeddia"},media:{embed:"C\xf3digo de incorpora\xe7\xe3o de m\xeddia",insert:"Inserir",placeholder:"Colar c\xf3digo de incorpora\xe7\xe3o aqui."},bookmark:{name:"Nome do Marcador",insert:"Inserir",placeholder:"Inserir Nome do Marcador"},wordcount:{open:"Contagem de Palavras",dialog:"Contagem de Palavras",counts:"Contagem",selection:"Sele\xe7\xe3o",document:"Documento",characters:"Caracteres",charactersnospaces:"Caracteres (sem espa\xe7os)",words:"Palavras"},list:{unordered:{menu:"Op\xe7\xf5es de Lista N\xe3o Ordenada",default:"Padr\xe3o N\xe3o Ordenado",circle:"C\xedrculo N\xe3o Ordenado",square:"Quadrado N\xe3o Ordenado",disc:"Disco N\xe3o Ordenado"},ordered:{menu:"Op\xe7\xf5es de Lista Ordenada",default:"Padr\xe3o Ordenado",decimal:"Decimal Ordenado","upper-alpha":"Letra Mai\xfasc. Ordenada","lower-alpha":"Letra Min\xfasc. Ordenada","upper-roman":"Romano Mai\xfasc. Ordenado","lower-roman":"Romano Min\xfasc. Ordenado","lower-greek":"Grego Min\xfasc. Ordenado"}},tag:{inline:{class:"span ({0})"},img:"imagem"},block:{normal:"Normal",p:"Par\xe1grafo",h1:"T\xedtulo 1",h2:"T\xedtulo 2",h3:"T\xedtulo 3",h4:"T\xedtulo 4",h5:"T\xedtulo 5",h6:"T\xedtulo 6",div:"Div",pre:"Pre",li:"Item de Lista",td:"C\xe9lula",th:"C\xe9lula do Cabe\xe7alho",styles:"Menu de Estilos",dropdown:"Blocos",describe:"Estilo atual {0}",menu:"Estilos",label:{inline:"Estilos Embutidos",table:"Estilos de Tabela",line:"Estilos de Linha",media:"Estilos de M\xeddia",list:"Estilos de Lista",link:"Estilos de Link"}},font:{"menu-button":"Menu de Fontes",menu:"Fonte",face:"Face de Tipos",size:"Tamanho da Fonte",coloroption:"Cor",describe:"Fonte atual {0}",color:"Texto",highlight:"Realce",stepper:{input:"Definir Tamanho da Fonte",increase:"Aumentar Tamanho da Fonte",decrease:"Diminuir Tamanho da Fonte"}},cog:{"menu-button":"Menu de Configura\xe7\xf5es",menu:"Configura\xe7\xf5es",spellcheck:"Verifica\xe7\xe3o Ortogr\xe1fica",capitalisation:"Uso de Mai\xfasculas",autocorrect:"Corre\xe7\xe3o Autom\xe1tica",linkpreviews:"Visualiza\xe7\xf5es de Link",help:"Ajuda"},alignment:{toolbar:"Menu de Alinhamento",menu:"Alinhamento",left:"Alinhar \xe0 Esquerda",center:"Alinhar no Centro",right:"Alinhar \xe0 Direita",justify:"Alinhar Justificado",describe:"Alinhamento atual {0}"},category:{language:"Grupo de idiomas",undo:"Grupo Desfazer e Refazer",insert:"Grupo Inserir",style:"Grupo Estilos",emphasis:"Grupo Formata\xe7\xe3o",align:"Grupo Alinhamento",listindent:"Grupo Lista e Recuo",format:"Grupo Fonte",tools:"Grupo Ferramentas",table:"Grupo Tabela",image:"Grupo Edi\xe7\xe3o de Imagem"},action:{undo:"Desfazer",redo:"Refazer",bold:"Negrito",italic:"It\xe1lico",underline:"Sublinhado",strikethrough:"Tachado",subscript:"Subscrito",superscript:"Sobrescrito",removeformat:"Remover Formata\xe7\xe3o",bullist:"Lista N\xe3o Ordenada",numlist:"Lista Ordenada",indent:"Recuar Mais",outdent:"Recuar Menos",blockquote:"Blockquote",fullscreen:"Tela Inteira",search:"Caixa de Di\xe1logo Localizar e Substituir",a11ycheck:"Verificar Acessibilidade",toggle:{fullscreen:"Sair de Tela Inteira"}},table:{menu:"Inserir Tabela","column-header":"Coluna de Cabe\xe7alho","row-header":"Linha de Cabe\xe7alho",float:"Alinhamento Flutuante",cell:{alignment:{top:"Alinhar no Topo",middle:"Alinhar no Meio",bottom:"Alinhar em Baixo",toolbar:"Alinhamento Vertical da C\xe9lula"},color:{border:"Cor da Borda",background:"Cor do Fundo"},border:{width:"Largura da Borda",stepper:{input:"Definir Largura da Borda",increase:"Aumentar Largura da Borda",decrease:"Diminuir Largura da Borda"}}},context:{row:{title:"Submenu de Linha",menu:"Linha",insertabove:"Inserir Acima",insertbelow:"Inserir Abaixo"},column:{title:"Submenu de Coluna",menu:"Coluna",insertleft:"Inserir \xe0 Esquerda",insertright:"Inserir \xe0 Direita"},cell:{merge:"Mesclar C\xe9lulas",unmerge:"Dividir C\xe9lula","split-cols":"Dividir em Colunas","split-rows":"Dividir em Linhas"},table:{title:"Submenu de Tabela",menu:"Tabela",properties:"Propriedades",delete:"Excluir"},common:{delete:"Excluir",normal:"Definir como Normal",header:"Definir como Cabe\xe7alho"},palette:{show:"Op\xe7\xf5es de edi\xe7\xe3o de tabela dispon\xedveis na barra de ferramentas",hide:"Op\xe7\xf5es de edi\xe7\xe3o de tabela que j\xe1 n\xe3o est\xe3o dispon\xedveis"}},picker:{header:"Cabe\xe7alho definido",label:"Seletor de tabelas",describepicker:"Use as teclas de seta para definir o tamanho da tabela.  Pressione Tab para ir para as configura\xe7\xf5es de cabe\xe7alho de tabela. Pressione a tecla de espa\xe7o ou Enter para inserir tabela.",rows:"{0} de altura",cols:"{0} de largura"},border:"Borda",summary:"Resumo",dialog:"Propriedades da Tabela",caption:"Legenda da Tabela",width:"Largura",height:"Altura"},align:{none:"Sem Alinhamento",center:"Alinhar no Centro",left:"Alinhar \xe0 Esquerda",right:"Alinhar \xe0 Direita"},button:{ok:"OK",cancel:"Cancelar",close:"Cancelar Caixa de Di\xe1logo"},banner:{close:"Fechar Faixa"},border:{on:"Ativado",off:"Desativado",labels:{on:"Borda ativada",off:"Borda desativada"}},loading:{wait:"Aguarde"},toolbar:{more:"Mais",backbutton:"Voltar","switch-code":"Mudar para Exibi\xe7\xe3o de C\xf3digo","switch-pencil":"Mudar para Exibi\xe7\xe3o de Projeto"},link:{context:{edit:"Editar Link",follow:"Abrir Link",ignore:"Ignorar Link Desfeito",remove:"Remover Link"},dialog:{aria:{update:"Atualizar link",insert:"Inserir link",properties:"Propriedades do link",quick:"Op\xe7\xf5es r\xe1pidas"},autocomplete:{open:"Lista de preenchimento autom\xe1tico de link dispon\xedvel. Continue a digitar ou use as teclas para cima e para baixo para selecionar as sugest\xf5es.",close:"Lista de preenchimento autom\xe1tico de link fechada",accept:"Sugest\xe3o de link selecionada {0}"},edit:"Editar",remove:"Remover",preview:"Visualizar",update:"Atualizar",insert:"Inserir",tooltip:"Link"},properties:{dialog:{title:"Propriedades do Link"},text:{label:"Texto a ser exibido",placeholder:"Digite ou cole o texto de exibi\xe7\xe3o"},url:{label:"URL do Link ou Marcador",placeholder:"Inserir URL do Link ou Marcador",invalid:"A sua URL do Link pode estar incorreta"},title:{label:"T\xedtulo",placeholder:"Digite ou cole o t\xedtulo do link"},button:{remove:"Remover"},target:{label:"Destino",none:"Nenhum",blank:"Nova Janela",top:"P\xe1gina Inteira",self:"Mesmo Quadro",parent:"Quadro Pai"}},anchor:{top:"In\xedcio do Documento",bottom:"Fim do Documento"}},fileupload:{title:"Inserir Imagens",tablocal:"Arquivos Locais",tabweburl:"URL da Web",dropimages:"Solte Imagens Aqui",chooseimage:"Escolha a Imagem para Carregar",web:{url:"URL da Imagem da Web:"},weburlhelp:"Digite sua URL para visualizar a imagem. Imagens grandes podem demorar um pouco para aparecer.",invalid1:"N\xe3o \xe9 poss\xedvel encontrar uma imagem na URL que voc\xea est\xe1 usando.",invalid2:"Verifique se h\xe1 erros de digita\xe7\xe3o na URL.",invalid3:"Verifique se a imagem que voc\xea est\xe1 acessando \xe9 p\xfablica e n\xe3o est\xe1 protegida por senha ou est\xe1 em uma rede privada."},image:{context:{properties:"Propriedades da Imagem",palette:{show:"Op\xe7\xf5es de edi\xe7\xe3o de imagem dispon\xedveis na barra de ferramentas",hide:"Op\xe7\xf5es de edi\xe7\xe3o de imagem que j\xe1 n\xe3o est\xe3o dispon\xedveis"}},dialog:{title:"Propriedades da Imagem",fields:{align:"Alinhamento Flutuante",url:"URL",urllocal:"Imagem ainda n\xe3o salva",alt:"Texto Alternativo",width:"Largura",height:"Altura",constrain:{label:"Restringir Propor\xe7\xf5es",on:"Propor\xe7\xf5es bloqueadas",off:"Propor\xe7\xf5es desbloqueadas"}}},menu:"Inserir Imagem","menu-button":"Menu de Inserir Imagem","from-url":"URL da Web","from-camera":"Imagens da C\xe2mera",toolbar:{rotateleft:"Girar para a Esquerda",rotateright:"Girar para a Direita",fliphorizontal:"Inverter na Horizontal",flipvertical:"Inverter na Vertical",properties:"Propriedades da Imagem"},crop:{announce:"Entrando na interface de recorte. Pressione Enter para aplicar, Esc para cancelar.",cancel:"Cancelando a opera\xe7\xe3o de recorte",begin:"Recortar Imagem",apply:"Aplicar Recorte",handle:{nw:"Al\xe7a de Recorte Superior Esquerda",ne:"Al\xe7a de Recorte Superior Direita",se:"Al\xe7a de Recorte Inferior Direita",sw:"Al\xe7a de Recorte Inferior Esquerda",shade:"M\xe1scara de Recorte"}}},units:{"amount-of-total":"{0} de {1}"},search:{menu:"Localizar e Substituir",field:{replace:"Campo de Substitui\xe7\xe3o",search:"Campo de Pesquisa"},search:"Pesquisar",previous:"Anterior",next:"Pr\xf3xima",replace:"Substituir","replace-all":"Substituir Tudo",matchcase:"Diferenciar Mai\xfascula/Min\xfascula"},mentions:{initiated:"Men\xe7\xe3o criada, continue a teclar para obter sugest\xf5es",lookahead:{open:"Caixa de listagem de digita\xe7\xe3o preditiva",cancelled:"Men\xe7\xe3o cancelada",searching:"Pesquisando",selected:"Inserida men\xe7\xe3o a {0}",noresults:"Nenhum resultado"}},cement:{dialog:{paste:{title:"Op\xe7\xf5es de Formata\xe7\xe3o de Colagem",instructions:"Optar por manter ou remover a formata\xe7\xe3o do conte\xfado colado.",merge:"Manter Formata\xe7\xe3o",clean:"Remover Formata\xe7\xe3o"},flash:{title:"Importa\xe7\xe3o de Imagem Local","trigger-paste":"Acione a colagem novamente a partir do teclado para colar conte\xfado com imagens.",missing:'\xc9 necess\xe1rio o Adobe Flash para importar imagens do Microsoft Office. Instale o <a href="http://get.adobe.com/flashplayer/" target="_blank">Adobe Flash Player</a>.',"press-escape":'Pressione <span class="ephox-polish-help-kbd">ESC</span> para ignorar as imagens locais e continuar editando.'}}},cloud:{error:{apikey:"Sua chave de API \xe9 inv\xe1lida.",domain:"Sua chave de API n\xe3o suporta o seu dom\xednio ({0}).",plan:"Voc\xea ultrapassou o n\xfamero de downloads de editores dispon\xedvel no seu plano. Visite o site para fazer um upgrade."},dashboard:"V\xe1 para o Painel do Administrador"},errors:{paste:{notready:"A funcionalidade de importa\xe7\xe3o do Word n\xe3o foi carregada. Aguarde e tente novamente.",generic:"Erro ao colar conte\xfado."},toolbar:{missing:{custom:{string:'Comandos personalizados devem ter a propriedade "{0}\u201d, e ela deve ser uma cadeia de caracteres'}},invalid:"A configura\xe7\xe3o da barra de ferramentas \xe9 inv\xe1lida ({0}). Veja o console para obter detalhes."},spelling:{missing:{service:"O servi\xe7o de ortografia n\xe3o foi encontrado: ({0})."}},images:{edit:{needsproxy:"\xc9 necess\xe1rio um proxy para editar imagens deste dom\xednio: ({0})",proxyerror:"Imposs\xedvel comunicar com o proxy para editar esta imagem. Veja o console para obter detalhes.",generic:"Ocorreu um erro durante a opera\xe7\xe3o de edi\xe7\xe3o da imagem. Veja o console para obter detalhes."},disallowed:{local:"A colagem da imagem local foi desabilitada. Imagens locais foram removidas do conte\xfado colado.",dragdrop:"O recurso de arrastar e soltar foi desabilitado."},upload:{unknown:"Falha ao carregar a imagem",invalid:"Nem todos os arquivos foram processados \u2013 alguns n\xe3o eram imagens v\xe1lidas",failed:"Falha ao carregar a imagem: ({0}).",cors:"Imposs\xedvel contatar o servi\xe7o de carregamento de imagens. Poss\xedvel erro no CORS: ({0})"},missing:{service:"O servi\xe7o de imagens n\xe3o foi encontrado: ({0}).",flash:"As configura\xe7\xf5es de seguran\xe7a do navegador podem estar impedindo a importa\xe7\xe3o das imagens."},import:{failed:"N\xe3o foi poss\xedvel importar algumas imagens.",unsupported:"Tipo de imagem sem suporte.",invalid:"A imagem \xe9 inv\xe1lida."}},webview:{image:"Imagens copiadas diretamente n\xe3o podem ser coladas."},safari:{image:"O Safari n\xe3o oferece suporte para colagem direta de imagens.",url:"Solu\xe7\xf5es alternativas sugeridas",rtf:"Aprender","browser-settings":"Para colar imagens, ajuste as configura\xe7\xf5es do seu navegador."},flash:{crashed:"O Adobe Flash parece ter travado e as imagens n\xe3o foram importadas. A colagem de documentos grandes pode causar isso."},http:{400:"Erro de Solicita\xe7\xe3o: {0}",401:"N\xe3o Autorizado: {0}",403:"Proibido: {0}",404:"N\xe3o Encontrado: {0}",407:"Autentica\xe7\xe3o de Proxy Necess\xe1ria: {0}",409:"Conflito de Arquivos: {0}",413:"Carga Muito Grande: {0}",415:"Tipo de M\xeddia Sem Suporte: {0}",500:"Erro Interno do Servidor: {0}",501:"N\xe3o Implementado: {0}"}}}},b=function(a,b){var c=a.src.indexOf("?");return a.src.indexOf(b)+b.length===c},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,b){if(a){var d=a.getAttribute("data-main");if(d){a.removeAttribute("data-main");var e=c(d);if("function"==typeof e)return e;console.warn("attribute on "+b+" does not reference a global method")}else console.warn("no data-main attribute found on "+b+" script tag")}};!function(a,c){var e=d(document.currentScript,c);if(e)return e;for(var f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(b(f[g],a)){var h=d(f[g],c);if(h)return h}throw"cannot locate "+c+" script tag"}("tbio_pt.js","strings for language pt")({version:"2.4.0",strings:a})}();