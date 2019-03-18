/** @license
 * Copyright (c) 2013-2017 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(a){return function(){return a}},b=function(a,b){var c=a.src.indexOf("?");return a.src.indexOf(b)+b.length===c},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,b){if(a){var d=a.getAttribute("data-main");if(d){a.removeAttribute("data-main");var e=c(d);if("function"==typeof e)return e;console.warn("attribute on "+b+" does not reference a global method")}else console.warn("no data-main attribute found on "+b+" script tag")}};!function(a,c){var e=d(document.currentScript,c);if(e)return e;for(var f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(b(f[g],a)){var h=d(f[g],c);if(h)return h}throw"cannot locate "+c+" script tag"}("help_nl.js","help for language nl")({version:"2.4.0",about:a('\ufeff<div role=presentation class="ephox-polish-help-article ephox-polish-help-about">\n  <div class="ephox-polish-help-h1" role="heading" aria-level="1">Over</div>\n  <p>Textbox.io is een WYSIWYG-programma voor het maken van prachtig ogende inhoud voor online apps. Of het nu sociale media, blogs, e-mails of varianten daarop betreft, Textbox.io helpt mensen zichzelf te uiten op het web.</p>\n  <p>&nbsp;</p>\n  <p>Textbox.io @@FULL_VERSION@@</p>\n  <p>Client build @@CLIENT_VERSION@@</p>\n  <p class="ephox-polish-help-integration">Integratie voor @@INTEGRATION_TYPE@@, versie @@INTEGRATION_VERSION@@</p>\n  <p>&nbsp;</p>\n  <p>Copyright 2017 Ephox Corporation. Alle rechten voorbehouden.</p>\n  <p><a href="javascript:void(0)" class="ephox-license-link">Licenties van derden</a></p>\n</div>'),accessibility:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Toetsenbordnavigatie</div>\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Toetsenbordnavigatie activeren</div>\n  <p>Druk om toetsenbordnavigatie op de werkbalk mogelijk te maken voor Windows op F10 of voor Mac OSX op ALT + F10. Het eerste item op de werkbalk wordt met een blauwe omtrek gemarkeerd om aan te geven dat het is geselecteerd. </p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Navigeren tussen groepen</div>\n  <p>De knoppen op de werkbalk zijn ingedeeld in groepen van vergelijkbare acties. Wanneer toetsenbordnavigatie actief is, wordt door te drukken op de Tab-toets de selectie verplaatst naar de volgende groep, terwijl met Shift + Tab de selectie naar de vorige groep wordt verplaatst. Wanneer bij de laatste groep op Tab wordt gedrukt, gaat de selectie terug naar de eerste groep knoppen.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Navigeren tussen items of knoppen</div>\n  <p>Gebruik de pijltjestoetsen om van het ene naar het andere item te gaan. Hierbij blijft u binnen dezelfde groep; druk op Tab om naar de volgende groep te springen en gebruik de pijltjestoetsen om door de groep te lopen.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Opdrachten uitvoeren</div>\n  <p>Navigeer om een opdracht uit te voeren naar de bedoelde knop en druk op Spatie of Enter.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Menu\'s openen, doorlopen en sluiten</div>\n  <p>Wanneer een werkbalkknop een menu bevat, wordt dit geopend door op Spatie of Enter te drukken. Na openen van het menu wordt het eerste item geselecteerd, gebruik de pijltjestoetsen om door het menu te navigeren. Druk om omhoog of omlaag te gaan in een menu op de betreffende pijltjestoetsen, dit geldt ook voor submenu\'s.</p>\n\n  <p>Menu-items met een submenu worden aangegeven door een punthaak. Door op de pijltjestoets met dezelfde richting als de punthaak te drukken wordt het submenu uitgevouwen, met de tegengestelde pijltjestoets wordt het gesloten.</p>\n\n  <p>Druk op Escape om een menu te sluiten. Na sluiten van een menu keert de selectie terug naar de eerdere situatie.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Hyperlinks bewerken of verwijderen</div>\n\n  <p>Navigeer om een link te bewerken of te verwijderen naar het menu Invoegen en selecteer Link invoegen. De editor geeft het dialoogvenster Link bewerken weer. </p>\n\n  <p>Bewerk de link door de nieuwe url in te voeren in het invoervak Link bijwerken en daarna op Enter te drukken. Verwijder de link uit het document met de knop Verwijderen. Druk op Escape om het dialoogvenster te verlaten zonder wijzigingen aan te brengen.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Tekengrootte en kaderdikte tabellen wijzigen</div>\n\n  <p>Wijzig tekengroottes door te navigeren naar het menu Lettertype en dan Tekengrootte te selecteren. De editor geeft het betreffende dialoogvenster in het menu op de voorgrond weer.</p>\n\n  <p>Wijzig kaderdiktes door te navigeren naar het werkbalk-item Kaderdikte en dan Kaderdikte tabel te selecteren. De editor geeft het betreffende dialoogvenster in het menu op de voorgrond weer. Opmerking: het werkbalk-item Kaderdikte tabel is alleen beschikbaar wanneer de cursor zich in een tabel bevindt.</p>\n\n  <p>Druk binnen het dialoogvenster op de Tab-toets om de selectie naar het volgende besturingselement te verplaatsen. Druk op Shift+Tab om de selectie naar het vorige besturingselement te verplaatsen.</p>\n\n  <p>Pas de grootte aan door de nieuwe waarde in te voeren in het betreffende invoervak. Bijvoorbeeld: 14px of 1em. Druk op Enter om wijzigingen te verzenden. Merk op dat door op Enter te drukken het dialoogvenster wordt gesloten en naar het document wordt teruggekeerd.</p>\n\n  <p>U kunt met de knoppen Grootte vergroten of Grootte verkleinen de grootte aanpassen zonder het dialoogvenster te verlaten. Door de grootte met deze knoppen aan te passen wordt de grootte van het geselecteerde element onmiddellijk gewijzigd, maar blijft de waarde van de huidige eenheid gehandhaafd. Verlaat dit dialoogvenster door te drukken op Escape.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Een afbeelding bijsnijden</div>\n\n  <p>Voor toegang tot de functie Bijsnijden moet een afbeelding worden geselecteerd, waarna de afbeeldingsbewerkingen op de werkbalk worden weergegeven. Deze bewerkingen zijn ook beschikbaar in het contextmenu. Wanneer Bijsnijden wordt geactiveerd, wordt over de afbeelding een bijsnijdmasker gelegd, met de linkerbovenhoek geselecteerd.</p>\n\n  <p>Navigeer met de Tab-toets. Elk van de vier hoeken kan worden geselecteerd, evenals het gehele maskervak. Elke hoek kan afzonderlijk worden gepositioneerd en ook kunnen alle hoeken tegelijkertijd worden verplaatst door het totale bijsnijdmaskervak te verplaatsen.</p>\n\n  <p>Het verplaatsen van de selectie over de afbeelding wordt uitgevoerd door middel van de pijltjestoetsen. Elke druk op een pijltjestoets verplaatst de selectie over 10 pixels, houd voor kleinere aanpassingen over \xe9\xe9n pixel tegelijk Shift ingedrukt terwijl u op een pijltjestoets drukt.</p>\n\n  <p>Druk op Enter om het bijsnijden op de afbeelding toe te passen.</p>\n\n  <p>Druk op Escape om de bijsnijdbewerking zonder effecten op de afbeelding te annuleren.</p>\n\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-shortcuts">\n      <caption>Toetsenbordnavigatie</caption>\n      <thead>\n        <tr>\n          <th scope="col">Actie</th>\n          <th scope="col">Windows</th>\n          <th scope="col">Mac OS</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Werkbalk activeren</td>\n        <td>F10</td>\n        <td>ALT + F10</td>\n      </tr>\n      <tr>\n        <td>Volgende/vorige knop van groep selecteren</td>\n        <td>\u2190 of \u2192</td>\n        <td>\u2190 of \u2192</td>\n      </tr>\n      <tr>\n        <td>Naar volgende groep gaan</td>\n        <td>Tab</td>\n        <td>Tab</td>\n      </tr>\n      <tr>\n        <td>Naar vorige groep gaan</td>\n        <td>Shift + Tab</td>\n        <td>Shift + Tab</td>\n      </tr>\n      <tr>\n        <td>Opdracht uitvoeren</td>\n        <td>Spatie of Enter</td>\n        <td>Spatie of Enter</td>\n      </tr>\n      <tr>\n        <td>Hoofdmenu openen</td>\n        <td>Spatie of Enter</td>\n        <td>Spatie of Enter</td>\n      </tr>\n      <tr>\n        <td>Submenu openen/uitvouwen</td>\n        <td>Spatie of Enter of \u2192</td>\n        <td>Spatie of Enter of \u2192</td>\n      </tr>\n      <tr>\n        <td>Volgend/vorig menu-item selecteren</td>\n        <td>\u2193 of \u2191</td>\n        <td>\u2193 of \u2191</td>\n      </tr>\n      <tr>\n        <td>Menu sluiten</td>\n        <td>Esc</td>\n        <td>Esc</td>\n      </tr>\n      <tr>\n        <td>Submenu sluiten/samenvouwen</td>\n        <td>Esc of \u2190</td>\n        <td>Esc of \u2190</td>\n      </tr>\n      <tr>\n        <td>Selectie afbeelding bijsnijden verplaatsen</td>\n        <td>\u2190 of \u2192 of \u2193 of \u2191</td>\n        <td>\u2190 of \u2192 of \u2193 of \u2191</td>\n      </tr>\n      <tr>\n        <td>Selectie afbeelding bijsnijden minimaal verplaatsen</td>\n        <td>Houd Shift ingedrukt tijdens verplaatsen</td>\n        <td>Houd Shift ingedrukt tijdens verplaatsen</td>\n      </tr>\n      <tr>\n        <td>Bijsnijden toepassen</td>\n        <td>Enter</td>\n        <td>Enter</td>\n      </tr>\n      <tr>\n        <td>Bijsnijden annuleren</td>\n        <td>Esc</td>\n        <td>Esc</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n'),a11ycheck:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Toegankelijkheid controleren</div>\n  <p>De functie Toegankelijkheid controleren (indien ingeschakeld) kan de volgende toegankelijkheidsproblemen in HTML-documenten aangeven.</p>\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-a11ycheck-table">\n      <caption>Probleembeschrijvingen</caption>\n      <thead>\n        <tr>\n          <th scope="col">Probleem</th>\n          <th scope="col">WCAG</th>\n          <th scope="col">Beschrijving</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Afbeeldingen moeten een alternatieve tekstbeschrijving hebben</td>\n        <td>1.1.1</td>\n        <td>Voor afbeeldingen moet een alternatieve tekstbeschrijving zijn ingesteld, die het onderwerp van de afbeelding beschrijft voor gebruikers met een beperkt gezichtsvermogen.  </td>\n      </tr>\n      <tr>\n        <td>De alternatieve tekst moet verschillen van de bestandsnaam van de afbeelding</td>\n        <td>1.1.1</td>\n        <td>Vermijd gebruik van de bestandsnaam van de afbeelding in de alternatieve tekst. Kies een alternatieve tekst die het onderwerp van de afbeelding beschrijft.</td>\n      </tr>\n      <tr>\n        <td>Tabellen moeten een bijschrift hebben</td>\n        <td>1.3.1</td>\n        <td>Tabellen moeten vergezeld gaan van een korte beschrijvende tekst die de inhoud van de tabel aangeeft.</td>\n      </tr>\n      <tr>\n        <td>Complexe tabellen moeten een samenvatting hebben</td>\n        <td>1.3.1</td>\n        <td>Tabellen met complexe structuren (cellen die meerdere rijen of kolommen beslaan) moeten vergezeld gaan van een samenvattende beschrijving van de tabelstructuur. </td>\n      </tr>\n      <tr>\n        <td>Bijschrift en samenvatting van een tabel kunnen niet dezelfde waarde hebben</td>\n        <td>1.3.1</td>\n        <td>Het bijschrift van de tabel moet de inhoud van de tabel beschrijven, terwijl de samenvatting juist de structuur van complexe tabellen beschrijft. </td>\n      </tr>\n      <tr>\n        <td>Tabellen moeten minstens \xe9\xe9n kopcel bevatten</td>\n        <td>1.3.1</td>\n        <td>Tabellen moeten toepasselijke rij- of kolomkoppen hebben die de inhoud van de rij of kolom beschrijven.<br/><a href="http://webaim.org/techniques/tables/data#th" target="_blank">Meer info over dit onderwerp (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Tabelkoppen moeten op een rij of kolom worden toegepast</td>\n        <td>1.3.1</td>\n        <td>Tabelkoppen moeten worden gekoppeld aan de rij of kolom die ze beschrijven.<br/><a href="http://webaim.org/techniques/tables/data#th" target="_blank">Meer info over dit onderwerp (webaim.org)</a> </td>\n      </tr>\n      <tr>\n        <td>Deze paragraaf lijkt op een kop. Selecteer een kopniveau als het ook een kop is.</td>\n        <td>1.3.1</td>\n        <td>Gebruik koppen om documenten te scheiden in secties. Vermijd het gebruik van paragrafen met opmaak in plaats van koppen.<br/><a href="http://webaim.org/techniques/semanticstructure/#correctly" target="_blank">Meer info over dit onderwerp (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Koppen moeten opeenvolgend worden toegepast. Bijvoorbeeld: kop 1 moet worden gevolgd door kop 2, niet door kop 3.</td>\n        <td>1.3.1</td>\n        <td>Opeenvolgende documentkoppen moeten hi\xebrarchisch worden weergegeven in oplopende of daarmee vergelijkbare volgorde.<br/><a href="http://webaim.org/techniques/semanticstructure/#contentstructure" target="_blank">Meer info over dit onderwerp (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Gebruik lijstopmaak voor lijsten</td>\n        <td>1.3.1</td>\n        <td>Zorg dat lijsten met items bij weergave de HTML-lijststructuur gebruiken (<code>&lt;ul&gt;</code> of <code>&lt;ol&gt;</code> &amp; <code>&lt;li&gt;</code>).</td>\n      </tr>\n      <tr>\n        <td>Tekst moet een contrastverhouding 4,5:1 hebben</td>\n        <td>1.4.3</td>\n        <td>Tekst en achtergrond moeten een zodanige contrastverhouding hebben dat de tekst kan worden gelezen door personen met een betrekkelijk gering gezichtsvermogen.</td>\n      </tr>\n      <tr>\n        <td>Naast elkaar staande links moeten worden samengevoegd.</td>\n        <td>2.4.4</td>\n        <td>Naast elkaar staande hyperlinks die verwijzen naar dezelfde bron moeten worden samengevoegd tot \xe9\xe9n hyperlink.</td>\n      </tr>\n    </tbody>\n  </table>\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Meer informatie</div>\n  <p>\n    <a href="http://webaim.org/intro/" target="_blank">Introductie tot webtoegankelijkheid (webaim.org)</a> <br/>\n    <a href="http://www.w3.org/WAI/intro/wcag" target="_blank">Introductie tot WCAG 2.0 (w3.org)</a> <br/>\n    <a href="http://www.section508.gov/" target="_blank">Artikel 508 van de Amerikaanse Rehabilitation Act (section508.gov)</a>\n  </p>\n</div>'),markdown:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div class="ephox-polish-help-h1" role="heading" aria-level="1">Markdown-opmaak</div>\n  <p>Markdown is een syntaxis voor het maken van HTML-structuren en -opmaak zonder dat het nodig is om sneltoetsen te gebruiken of menu\'s te openen. Voor het gebruiken van markdown-opmaak voert u de gewenste syntaxis in, gevolgd door een enter of spatie.</p>\n  <table cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-markdown" aria-readonly="true">\n      <caption>Syntaxis voor opmaak met toetsenbord</caption>\n      <thead>\n        <tr>\n          <th scope="col">Syntaxis</th>\n          <th scope="col">HTML-resultaat</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td><pre># Grootste kop</pre></td>\n        <td><pre>&lt;h1&gt;Grootste kop&lt;/h1&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>## Grotere kop</pre></td>\n        <td><pre>&lt;h2&gt;Grotere kop&lt;/h2&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>### Grote kop</pre></td>\n        <td><pre>&lt;h3&gt;Grote kop&lt;/h3&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>#### Kop</pre></td>\n        <td><pre>&lt;h4&gt;Kop&lt;/h4&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>##### Kleine kop</pre></td>\n        <td><pre>&lt;h5&gt;Kleine kop&lt;/h5&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>###### Kleinste kop</pre></td>\n        <td><pre>&lt;h6&gt;Kleinste kop&lt;/h6&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>* Niet-geordende lijst</pre></td>\n        <td><pre>&lt;ul&gt;&lt;li&gt;Niet-geordende lijst&lt;/li&gt;&lt;/ul&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>1. Geordende lijst</pre></td>\n        <td><pre>&lt;ol&gt;&lt;li&gt;Geordende lijst&lt;/li&gt;&lt;/ol&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>*Cursief*</pre></td>\n        <td><pre>&lt;em&gt;Cursief&lt;/em&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>**Vet**</pre></td>\n        <td><pre>&lt;strong&gt;Vet&lt;/strong&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>---</pre></td>\n        <td><pre>&lt;hr/&gt;</pre></td>\n      </tr>\n    </tbody>\n  </table>\n</div>'),shortcuts:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Sneltoetsen</div>\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-shortcuts">\n    <caption>Editor-opdrachten</caption>\n    <thead>\n      <tr>\n        <th scope="col">Actie</th>\n        <th scope="col">Windows</th>\n        <th scope="col">Mac OS</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Ongedaan maken</td>\n        <td>Ctrl + Z</td>\n        <td>\u2318Z</td>\n      </tr>\n      <tr>\n        <td>Opnieuw uitvoeren</td>\n        <td>Ctrl + Y</td>\n        <td>\u2318\u21e7Z</td>\n      </tr>\n      <tr>\n        <td>Vet</td>\n        <td>Ctrl + B</td>\n        <td>\u2318B</td>\n      </tr>\n      <tr>\n        <td>Cursief</td>\n        <td>Ctrl + I</td>\n        <td>\u2318I</td>\n      </tr>\n      <tr>\n        <td>Onderstrepen</td>\n        <td>Ctrl + U</td>\n        <td>\u2318U</td>\n      </tr>\n      <tr>\n        <td>Inspringing vergroten</td>\n        <td>Ctrl + M</td>\n        <td>\u2318M</td>\n      </tr>\n      <tr>\n        <td>Inspringing verkleinen</td>\n        <td>Ctrl + Shift + M</td>\n        <td>\u2318\u21e7M</td>\n      </tr>\n      <tr>\n        <td>Koppeling toevoegen</td>\n        <td>Ctrl + K</td>\n        <td>\u2318K</td>\n      </tr>\n      <tr>\n        <td>Zoeken</td>\n        <td>CTRL + F</td>\n        <td>\u2318F</td>\n      </tr>\n      <tr>\n        <td>Modus Volledig scherm (in-/uitschakelen)</td>\n        <td>Ctrl + Shift + F</td>\n        <td>\u2318\u21e7F</td>\n      </tr>\n      <tr>\n        <td>Dialoogvenster Help (openen)</td>\n        <td>Ctrl + Shift + H</td>\n        <td>\u2303\u2325H</td>\n      </tr>\n      <tr>\n        <td>Contextmenu (openen)</td>\n        <td>Shift + F10</td>\n        <td>\u21e7F10\u200e\u200f</td>\n      </tr>\n      <tr>\n        <td>Code automatisch aanvullen</td>\n        <td>Ctrl + Spatie</td>\n        <td>\u2303Spatie</td>\n      </tr>\n      <tr>\n        <td>Toegankelijke codeweergave</td>\n        <td>Ctrl + Shift + U</td>\n        <td>\u2318\u2325U</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class="ephox-polish-help-note" role="note">*Opmerking: sommige functies kunnen door uw beheerder worden uitgeschakeld.</div>\n</div>\n')})}();