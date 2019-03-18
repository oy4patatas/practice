/** @license
 * Copyright (c) 2013-2017 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(){return{a11y:{widget:{title:"Provjeravanje pristupa\u010dnosti",running:"Provjeravanje...",issue:{counter:"Problem {0} od {1}",help:"WCAG 2,0 referenca - otvara se u novom prozoru",none:"Nisu prepoznati problemi pristupa\u010dnosti"},previous:"Prethodni problem",next:"Sljede\u0107i problem",repair:"Popravljanje problema",available:"Popravak dostupan",ignore:"Zanemari"},image:{alttext:{empty:"Slike moraju imati alternativan tekstualni opis",filenameduplicate:"Alternativni tekst ne smije biti isti kao i naziv datoteke slike",set:"Unesite alternativni tekst:",validation:{empty:"Alternativni tekst ne mo\u017ee biti prazan",filenameduplicate:"Alternativni tekst ne smije biti isti kao i naziv datoteke"}}},table:{caption:{empty:"Tablice moraju imati natpise",summaryduplicate:"Natpis tablice i sa\u017eetak ne smiju imati istu vrijednost",set:"Unesite natpis:",validation:{empty:"Natpis ne mo\u017ee biti prazan",summaryduplicate:"Natpis tablice ne mo\u017ee biti isti kao i sa\u017eetak tablice"}},summary:{empty:"Slo\u017eene tablice moraju imati sa\u017eetke",set:"Unesite sa\u017eetak tablice:",validation:{empty:"Sa\u017eetak ne mo\u017ee biti prazan",captionduplicate:"Sa\u017eetak tablice ne mo\u017ee biti isti kao i natpis tablice"}},rowscells:{none:"Elementi tablice moraju sadr\u017eavati oznake TR i TD"},headers:{none:"Tablice moraju imati najmanje jednu \u0107eliju zaglavlja",set:"Odaberite zaglavlje tablice:",validation:{none:"Odaberite zaglavlje reda ili stupca"}},headerscope:{none:"Zaglavlja tablice moraju se upotrijebiti na red ili stupac",set:"Odaberite doseg zaglavlja:",scope:{row:"Redak",col:"Stupac",rowgroup:"Grupa redova",colgroup:"Grupa stupca"}}},heading:{nonsequential:"Zaglavlja se moraju primjenjivati uzastopnim redoslijedom. Primjerice: Zaglavlje 1 trebalo bi do\u0107i nakon Zaglavlja 2, a ne Zaglavlja 3.",paragraphmisuse:"Ovaj odlomak izgleda kao zaglavlje. Ako je zaglavlje, odaberite razinu zaglavlja.",set:"Odaberite razinu zaglavlja:"},link:{adjacent:"Susjedne veze s istim URL-om trebaju se spojiti u jednu vezu"},list:{paragraphmisuse:"Odabrani je tekst popis. Popisi se moraju formatirati s pomo\u0107u oznake popisa."},contrast:{smalltext:"Tekst mora imati omjer kontrasta najmanje 4,5:1",largetext:"Veliki tekst mora imati omjer kontrasta najmanje 3:1"},severity:{error:"Pogre\u0161ka",warning:"Upozorenje",info:"Informativno"}},aria:{autocorrect:{announce:"Samoispravak {0}"},label:{toolbar:"Alatna traka ure\u0111iva\u010da oboga\u0107enog teksta",editor:"Ure\u0111iva\u010d oboga\u0107enog teksta Textbox.io - {0}",fullscreen:"Ure\u0111iva\u010d oboga\u0107enog teksta za puni zaslon Textbox.io - {0}",content:"Sadr\u017eaj koji se mo\u017ee ure\u0111ivati",more:"Kliknite za pro\u0161irivanje ili sa\u017eimanje"},help:{mac:"Pritisnite \u2303\u2325H za pomo\u0107",ctrl:"Pritisnite CTRL SHIFT H za pomo\u0107"},color:{picker:"Izabira\u010d boja",menu:"Izbornik izabira\u010da boja"},font:{color:"Boje teksta",highlight:"Boje isticanja",palette:"Paleta boja"},context:{menu:{generic:"Kontekstni izbornik"}},stepper:{input:{invalid:"Vrijednost veli\u010dine nije ispravna"}},table:{headerdescription:"Pritisnite tipku Space za aktivaciju postavke. Pritisnite Tab za povratak na izabira\u010d tablice.",cell:{border:{size:"Veli\u010dina obruba"}}},input:{invalid:"Nevaljan unos"},widget:{navigation:"Upotrijebite tipke sa strelicama za navigaciju."},image:{crop:{size:"Veli\u010dina obrezivanja je {0} piksela naprema {1} piksela"}}},color:{white:"Bijela",black:"Crna",gray:"Siva",metal:"Metalna",smoke:"Boja dima",red:"Crvena",darkred:"Tamnocrvena",darkorange:"Tamnonaran\u010dasta",orange:"Naran\u010dasta",yellow:"\u017duta",green:"Zelena",darkgreen:"Tamnozelena",mediumseagreen:"Srednje morsko zelena",lightgreen:"Svijetlozelena",lime:"\u017dutozelena",mediumblue:"Srednje plava",navy:"Mornarskoplava",blue:"Plava",lightblue:"Svijetloplava",violet:"Ljubi\u010dasta"},directionality:{rtldir:"Smjer s desna na lijevo",ltrdir:"Smjer s lijeva na desno"},parlance:{menu:"Izbornik jezika",set:"Postavi jezik",ar:"Arapski",ca:"Katalonski",zh_cn:"Kineski (pojednostavljeni)",zh_tw:"Kineski (tradicionalni)",hr:"Hrvatski",cs:"\u010ce\u0161ki",da:"Danski",nl:"Nizozemski",en:"Engleski",en_au:"Engleski (Australija)",en_ca:"Engleski (Kanada)",en_gb:"Engleski (Ujedinjeno Kraljevstvo)",en_us:"Engleski (Sjedinjene dr\u017eave)",fa:"Farsi",fi:"Finski",fr:"Francuski",fr_ca:"Francuski (Kanada)",de:"Njema\u010dki",el:"Gr\u010dki",he:"Hebrejski",hu:"Ma\u0111arski",it:"Talijanski",ja:"Japanski",kk:"Kaza\u0161ki",ko:"Korejski",no:"Norve\u0161ki",pl:"Poljski",pt_br:"Portugalski (Brazil)",pt_pt:"Portugalski (Portugal)",ro:"Rumunjski",ru:"Ruski",sk:"Slova\u010dki",sl:"Slovenski",es:"\u0160panjolski",es_419:"\u0160panjolski (Latinska Amerika)",es_es:"\u0160panjolski (\u0160panjolska)",sv:"\u0160vedski",tt:"Tatarski",th:"Tajlandski",tr:"Turski",uk:"Ukrajinski"},taptoedit:"Dodirni za ure\u0111ivanje",plaincode:{dialog:{title:"Prikaz koda",editor:"HTML Source Editor"}},help:{dialog:{accessibility:"Navigacija na tipkovnici",a11ycheck:"Provjera pristupa\u010dnosti",about:"O programu Textbox.io",markdown:"Oblikovanje s markdownom",shortcuts:"Pre\u010daci na tipkovnici"}},spelling:{context:{more:"Vi\u0161e",morelabel:"Podizbornik za vi\u0161e opcija pravopisa"},none:"Nema",menu:"Jezik za pisanje"},specialchar:{open:"Poseban znak",dialog:"Umetni poseban znak",latin:"Latinski",insert:"Umetni",punctuation:"Interpunkcija",currency:"Valute","extended-latin-a":"Pro\u0161ireni latinski A","extended-latin-b":"Pro\u0161ireni latinski B",arrows:"Strelice",mathematical:"Matemati\u010dki",miscellaneous:"Razno",selects:"Odabrani znakovi",grid:"Posebni znakovi"},insert:{"menu-button":"Umetni izbornik",menu:"Umetni",link:"Veza",bookmark:"Knji\u017ena oznaka",image:"Slika",table:"Tablica",horizontalrule:"Vodoravno ravnalo",media:"Mediji"},media:{embed:"Medijski ulo\u017eeni kod",insert:"Umetni",placeholder:"Zalijepite ulo\u017eeni kod ovdje."},bookmark:{name:"Naziv knji\u017ene oznake",insert:"Umetni",placeholder:"Unesite naziv knji\u017ene oznake"},wordcount:{open:"Broj rije\u010di",dialog:"Broj rije\u010di",counts:"Broj",selection:"Odabir",document:"Dokument",characters:"Znakovi",charactersnospaces:"Znakovi (bez razmaka)",words:"Rije\u010di"},list:{unordered:{menu:"Opcije neure\u0111enog popisa",default:"Zadano neure\u0111eno",circle:"Krug neure\u0111eni",square:"Kvadrat neure\u0111eni",disc:"Disk neure\u0111eni"},ordered:{menu:"Opcije ure\u0111enog popisa",default:"Zadano ure\u0111eno",decimal:"Decimala ure\u0111ena","upper-alpha":"Velika slova ure\u0111ena","lower-alpha":"Mala slova ure\u0111ena","upper-roman":"Velike rimske znamenke ure\u0111ene","lower-roman":"Male rimske znamenke ure\u0111ene","lower-greek":"Mala gr\u010dka slova ure\u0111ena"}},tag:{inline:{class:"span ({0})"},img:"slika"},block:{normal:"Normalno",p:"Odlomak",h1:"Zaglavlje 1",h2:"Zaglavlje 2",h3:"Zaglavlje 3",h4:"Zaglavlje 4",h5:"Zaglavlje 5",h6:"Zaglavlje 6",div:"Div",pre:"Pre",li:"Stavka popisa",td:"\u0106elija",th:"\u0106elija zaglavlja",styles:"Izbornik stilova",dropdown:"Blokovi",describe:"Trenuta\u010dni stil {0}",menu:"Stilovi",label:{inline:"Umetnuti stilovi",table:"Stilovi tablice",line:"Stilovi retka",media:"Stilovi medija",list:"Stilovi popisa",link:"Stilovi veza"}},font:{"menu-button":"Izbornik za font",menu:"Font",face:"Tipografija",size:"Veli\u010dina slova",coloroption:"Boja",describe:"Trenuta\u010dni font {0}",color:"Tekst",highlight:"Istaknuto",stepper:{input:"Postavljanje veli\u010dine slova",increase:"Pove\u0107anje veli\u010dine slova",decrease:"Smanjenje veli\u010dine slova"}},cog:{"menu-button":"Izbornik postavki",menu:"Postavke",spellcheck:"Provjera pravopisa",capitalisation:"Velika slova",autocorrect:"Automatski ispravak",linkpreviews:"Pretpregledi veza",help:"Pomo\u0107"},alignment:{toolbar:"Izbornik poravnanja",menu:"Poravnanje",left:"Poravnaj lijevo",center:"Poravnaj po sredini",right:"Poravnaj desno",justify:"Poravnaj obostrano",describe:"Trenuta\u010dno poravnanje {0}"},category:{language:"Jezi\u010dna skupina",undo:"Poni\u0161ti i ponovi grupu",insert:"Umetni grupu",style:"Grupa stilova",emphasis:"Grupa oblikovanja",align:"Grupa poravnavanja",listindent:"Grupa popisa i uvlaka",format:"Grupa fonta",tools:"Grupa alata",table:"Grupa tablica",image:"Grupa ure\u0111ivanja slike"},action:{undo:"Poni\u0161ti",redo:"Ponovi",bold:"Podebljano",italic:"Kurziv",underline:"Podcrtaj",strikethrough:"Prekri\u017ei",subscript:"Indeks",superscript:"Eksponent",removeformat:"Ukloni oblikovanje",bullist:"Neure\u0111eni popis",numlist:"Ure\u0111eni popis",indent:"Vi\u0161e uvlake",outdent:"Manje uvlake",blockquote:"Blockquote",fullscreen:"Puni zaslon",search:"Prona\u0111i i zamijeni dijalog",a11ycheck:"Provjeri pristupa\u010dnost",toggle:{fullscreen:"Iza\u0111i iz punog zaslona"}},table:{menu:"Umetni tablicu","column-header":"Stupac zaglavlja","row-header":"Redak zaglavlja",float:"Plutaju\u0107e poravnavanje",cell:{alignment:{top:"Poravnaj po vrhu",middle:"Poravnaj po sredini",bottom:"Poravnaj po dnu",toolbar:"Vertikalno poravnanje \u0107elija"},color:{border:"Boja granice",background:"Boja pozadine"},border:{width:"\u0160irina granice",stepper:{input:"Postavi \u0161irinu granice",increase:"Pove\u0107aj \u0161irinu granice",decrease:"Smanji \u0161irinu granice"}}},context:{row:{title:"Podizbornik retka",menu:"Redak",insertabove:"Umetni gore",insertbelow:"Umetni dolje"},column:{title:"Podizbornik stupca",menu:"Stupac",insertleft:"Umetni lijevo",insertright:"Umetni desno"},cell:{merge:"Spoji \u0107elije",unmerge:"Podijeli \u0107eliju","split-cols":"Podijeli na stupce","split-rows":"Podijeli na retke"},table:{title:"Podizbornik tablice",menu:"Tablica",properties:"Svojstva",delete:"Izbri\u0161i"},common:{delete:"Izbri\u0161i",normal:"Postavi kao normalno",header:"Postavi za zaglavlje"},palette:{show:"Opcije ure\u0111ivanja tablice dostupne u alatnoj traci",hide:"Opcije ure\u0111ivanja tablice vi\u0161e nisu dostupne"}},picker:{header:"Zaglavlje postavljeno",label:"Izabira\u010d tablice",describepicker:"Postavite veli\u010dinu tablice tipkama sa strelicama.  Pritisnite Tab za odlazak na postavke zaglavlja. Pritisnite tipku Space ili Enter za umetanje tablice.",rows:"{0} visina",cols:"{0} \u0161irina"},border:"Granica",summary:"Sa\u017eetak",dialog:"Svojstva tablica",caption:"Natpisi tablice",width:"\u0160irina",height:"Visina"},align:{none:"Nema poravnanja",center:"Poravnaj po sredini",left:"Poravnaj lijevo",right:"Poravnaj desno"},button:{ok:"U redu",cancel:"Odustani",close:"Otka\u017ei dijalog"},banner:{close:"Zatvori reklamni natpis"},border:{on:"Uklju\u010di",off:"Isklju\u010di",labels:{on:"Granica uklju\u010dena",off:"Granica isklju\u010dena"}},loading:{wait:"Pri\u010dekajte"},toolbar:{more:"Vi\u0161e",backbutton:"Natrag","switch-code":"Prebaci na prikaz koda","switch-pencil":"Prebaci na prikaz dizajna"},link:{context:{edit:"Uredi vezu",follow:"Otvori vezu",ignore:"Ignoriraj neispravnu vezu",remove:"Ukloni vezu"},dialog:{aria:{update:"A\u017euriraj vezu",insert:"Umetni vezu",properties:"Svojstva veze",quick:"Brze opcije"},autocomplete:{open:"Dostupan je popis automatskog dovr\u0161avanja veze. Nastavite pisati ili pomo\u0107u tipki za gore i dolje odaberite prijedloge.",close:"Popis automatskog dovr\u0161avanja veze zatvoren",accept:"Odabrani prijedlozi veze {0}"},edit:"Uredi",remove:"Ukloni",preview:"Pretpregled",update:"A\u017euriraj",insert:"Umetni",tooltip:"Veza"},properties:{dialog:{title:"Svojstva veze"},text:{label:"Tekst za prikaz",placeholder:"Upi\u0161i ili zalijepi tekst za prikaz"},url:{label:"URL veze ili knji\u017ena oznaka",placeholder:"Unesite URL veze ili knji\u017enu oznaku",invalid:"URL veze mo\u017eda nije ispravan"},title:{label:"Naslov",placeholder:"Upi\u0161i ili zalijepi naslov veze"},button:{remove:"Ukloni"},target:{label:"Cilj",none:"Nema",blank:"Novi prozor",top:"Cijela stranica",self:"Isti okvir",parent:"Nadre\u0111eni okvir"}},anchor:{top:"Vrh dokumenta",bottom:"Dno dokumenta"}},fileupload:{title:"Umetni slike",tablocal:"Lokalne datoteke",tabweburl:"Web URL",dropimages:"Ispusti slike ovdje",chooseimage:"Izaberi sliku za u\u010ditavanje",web:{url:"URL slike s interneta"},weburlhelp:"Upi\u0161ite svoj URL kako biste vidjeli pretpregled slike. Velikim slikama mo\u017eda \u0107e trebati neko vrijeme da se pojave.",invalid1:"Ne mo\u017eemo prona\u0107i sliku na URL-u kojim se koristite.",invalid2:"Provjerite ima li URL pogre\u0161ke u pisanju.",invalid3:"Provjerite je li slika kojoj pristupate javna i nije za\u0161ti\u0107ena lozinkom te se ne nalazi na privatnoj mre\u017ei."},image:{context:{properties:"Svojstva slike",palette:{show:"Opcije ure\u0111ivanja slike dostupne u alatnoj traci",hide:"Opcije ure\u0111ivanja slike vi\u0161e nisu dostupne"}},dialog:{title:"Svojstva slike",fields:{align:"Plutaju\u0107e poravnavanje",url:"URL",urllocal:"Slika jo\u0161 nije spremljena",alt:"Alternativni tekst",width:"\u0160irina",height:"Visina",constrain:{label:"Ograni\u010di omjere",on:"Zaklju\u010dani omjeri",off:"Otklju\u010dani omjeri"}}},menu:"Umetni sliku","menu-button":"Izbornik umetanja slike","from-url":"Web URL","from-camera":"Album kamere",toolbar:{rotateleft:"Rotacija ulijevo",rotateright:"Rotacija udesno",fliphorizontal:"Zrcali vodoravno",flipvertical:"Zrcali okomito",properties:"Svojstva slike"},crop:{announce:"Ulaz u su\u010delje obrezivanja. Pritisnite enter za primjenu, izlaz ili prekid.",cancel:"Prekid radnje obrezivanja",begin:"Obrezivanje slike",apply:"Primjena obrezivanja",handle:{nw:"Gornji lijevi pokaziva\u010d obrezivanja",ne:"Gornji desni pokaziva\u010d obrezivanja",se:"Donji desni pokaziva\u010d obrezivanja",sw:"Donji lijevi pokaziva\u010d obrezivanja",shade:"Maska obrezivanja"}}},units:{"amount-of-total":"{0} od {1}"},search:{menu:"Prona\u0111i i zamijeni",field:{replace:"Polje Zamijeni",search:"Polje Tra\u017ei"},search:"Tra\u017ei",previous:"Prethodno",next:"Sljede\u0107e",replace:"Zamijeni","replace-all":"Zamijeni sve",matchcase:"Prilagodi slova"},mentions:{initiated:"Stvorena referenca, nastavite tipkati za tipkanje unaprijed",lookahead:{open:"Okvir s popisom za tipkanje unaprijed",cancelled:"Prekinuta referenca",searching:"Tra\u017eenje rezultata u tijeku",selected:"Umetnuta referenca {0}",noresults:"Nema rezultata"}},cement:{dialog:{paste:{title:"Zalijepi mogu\u0107nosti oblikovanja",instructions:"Izaberite ho\u0107ete li zadr\u017eati ili ukloniti oblikovanje u zalijepljenom sadr\u017eaju.",merge:"Zadr\u017ei oblikovanje",clean:"Ukloni oblikovanje"},flash:{title:"Uvoz lokalne slike","trigger-paste":"Ponovno aktivirajte lijepljenje na tipkovnici kako biste zalijepili sadr\u017eaj sa slikama.",missing:'Potreban je Adobe Flash za uvoz slika iz programskog paketa Microsoft Office. Instalirajte <a href="http://get.adobe.com/flashplayer/" target="_blank">Adobe Flash Player</a>.',"press-escape":'Pritisnite <span class="ephox-polish-help-kbd">ESC</span> kako biste zanemarili lokalne slike i nastavili s ure\u0111ivanjem.'}}},cloud:{error:{apikey:"Va\u0161 API klju\u010d nije valjan.",domain:"Va\u0161 API klju\u010d ne podr\u017eava va\u0161u domenu ({0}).",plan:"Prekora\u010dili ste broj preuzimanja ure\u0111iva\u010da dostupnih za svoj plan. Posjetite web-mjesto i nadogradite."},dashboard:"Idite na Administratorsku nadzornu plo\u010du"},errors:{paste:{notready:"Nije se u\u010ditala funkcija U\u010ditavanje iz Worda. Pri\u010dekajte i poku\u0161ajte ponovo.",generic:"Do\u0161lo je do pogre\u0161ke tijekom lijepljenja sadr\u017eaja."},toolbar:{missing:{custom:{string:'Prilago\u0111ene naredbe moraju imati svojstvo "{0}" i ono mora biti niz'}},invalid:"Konfiguracija alatne trake neispravna je ({0}). Pogledajte konzolu za detalje."},spelling:{missing:{service:"Usluga pravopisa nije prona\u0111ena: ({0})."}},images:{edit:{needsproxy:"Potreban je proxy da biste ure\u0111ivali slike s ove domene: ({0})",proxyerror:"Nije mogu\u0107a komunikacija s proxyjem za ure\u0111ivanje ove slike. Pogledajte konzolu za detalje.",generic:"Do\u0161lo je do pogre\u0161ke tijekom izvo\u0111enja radnje ure\u0111ivanja slike. Pogledajte konzolu za detalje."},disallowed:{local:"Lijepljenje lokalne slike isklju\u010deno je. Lokalne su slike uklonjene iz zalijepljenog sadr\u017eaja.",dragdrop:"Isklju\u010dena je opcija povla\u010denja i ispu\u0161tanja."},upload:{unknown:"Slika nije u\u010ditana",invalid:"Nisu obra\u0111ene sve datoteke - neke nisu bile va\u017ee\u0107e slike",failed:"Slika nije u\u010ditana: ({0}).",cors:"Nije mogu\u0107 kontakt s uslugom za u\u010ditavanje slika. Mogu\u0107a CORS pogre\u0161ka: ({0})"},missing:{service:"Usluga slika nije prona\u0111ena: ({0}).",flash:"Postavke za\u0161tite preglednika mo\u017eda spre\u010davaju uvoz slika."},import:{failed:"Neke se slike nisu mogle uvesti.",unsupported:"Nepodr\u017eana vrsta slike.",invalid:"Slika je neispravna."}},webview:{image:"Izravno kopirane slike ne mogu se zalijepiti."},safari:{image:"Safari ne podr\u017eava izravno lijepljenje slika.",url:"Predlo\u017eene alternative",rtf:"Saznajte kako","browser-settings":"Da biste zalijepili slike, podesite postavke preglednika."},flash:{crashed:"Slike nisu uvezene jer je do\u0161lo do pada softvera Adobe Flash. Uzrok tome mo\u017ee biti kopiranje velikih dokumenata."},http:{400:"Lo\u0161 zahtjev: {0}",401:"Neovla\u0161teno: {0}",403:"Zabranjeno: {0}",404:"Nije prona\u0111eno: {0}",407:"Potrebno ovla\u0161tenje posredni\u010dkog poslu\u017eitelja: {0}",409:"Sukob datoteka: {0}",413:"Previ\u0161e korisnih podataka: {0}",415:"Nepodr\u017eana vrsta medija: {0}",500:"Unutarnja poslu\u017eiteljska pogre\u0161ka: {0}",501:"Nije provedeno: {0}"}}}},b=function(a,b){var c=a.src.indexOf("?");return a.src.indexOf(b)+b.length===c},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,b){if(a){var d=a.getAttribute("data-main");if(d){a.removeAttribute("data-main");var e=c(d);if("function"==typeof e)return e;console.warn("attribute on "+b+" does not reference a global method")}else console.warn("no data-main attribute found on "+b+" script tag")}};!function(a,c){var e=d(document.currentScript,c);if(e)return e;for(var f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(b(f[g],a)){var h=d(f[g],c);if(h)return h}throw"cannot locate "+c+" script tag"}("tbio_hr.js","strings for language hr")({version:"2.4.0",strings:a})}();