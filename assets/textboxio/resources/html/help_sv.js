/** @license
 * Copyright (c) 2013-2017 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(a){return function(){return a}},b=function(a,b){var c=a.src.indexOf("?");return a.src.indexOf(b)+b.length===c},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,b){if(a){var d=a.getAttribute("data-main");if(d){a.removeAttribute("data-main");var e=c(d);if("function"==typeof e)return e;console.warn("attribute on "+b+" does not reference a global method")}else console.warn("no data-main attribute found on "+b+" script tag")}};!function(a,c){var e=d(document.currentScript,c);if(e)return e;for(var f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(b(f[g],a)){var h=d(f[g],c);if(h)return h}throw"cannot locate "+c+" script tag"}("help_sv.js","help for language sv")({version:"2.4.0",about:a('\ufeff<div role=presentation class="ephox-polish-help-article ephox-polish-help-about">\n  <div class="ephox-polish-help-h1" role="heading" aria-level="1">Om</div>\n  <p>Textbox.io \xe4r ett WYSIWYG-verktyg avsett f\xf6r att skapa snyggt inneh\xe5ll i onlineappar. Oavsett om det \xe4r sociala n\xe4tverk, bloggar, e-postmeddelanden eller n\xe5got d\xe4remellan, kan m\xe4nniskor uttrycka sig p\xe5 n\xe4tet med hj\xe4lp av Textbox.io.</p>\n  <p>&nbsp;</p>\n  <p>Textbox.io @@FULL_VERSION@@</p>\n  <p>Klientversion @@CLIENT_VERSION@@</p>\n  <p class="ephox-polish-help-integration">Integrering f\xf6r @@INTEGRATION_TYPE@@, version @@INTEGRATION_VERSION@@</p>\n  <p>&nbsp;</p>\n  <p>Copyright 2017 Ephox Corporation. Med ensamr\xe4tt.</p>\n  <p><a href="javascript:void(0)" class="ephox-license-link">Tredjepartslicenser</a></p>\n</div>'),accessibility:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Tangentbordsnavigering</div>\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Aktivering av tangentbordsnavigering</div>\n  <p>Aktivera tangentbordsnavigering i verktygsf\xe4ltet genom att trycka p\xe5 F10 f\xf6r Windows eller p\xe5 ALT + F10 f\xf6r Mac OSX. Det f\xf6rsta objektet p\xe5 verktygsf\xe4ltet kommer att markeras med en bl\xe5 kontur, vilket indikerar att det har valts. </p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Flytta mellan grupper</div>\n  <p>Knapparna p\xe5 verktygsf\xe4ltet \xe4r indelade i grupper av liknande \xe5tg\xe4rder. N\xe4r tangentbordsnavigering \xe4r aktiverad kommer en tryckning p\xe5 tabbtangenten att flytta markeringen till n\xe4sta grupp medan skift + tabbtangenten flyttar markeringen tillbaka till f\xf6reg\xe5ende grupp. Tryckning p\xe5 tabbtangenten i den sista gruppen \xe5terf\xf6r markeringen till den f\xf6rsta gruppen av knappar.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Flytta mellan objekt eller knappar</div>\n  <p>Flytta fram och tillbaka mellan olika objekt med hj\xe4lp av piltangenterna. Objekten v\xe4xlas cykliskt inom sina respektive grupper. Hoppa till n\xe4sta grupp genom att trycka p\xe5 tabbtangenten och anv\xe4nd sedan piltangenterna f\xf6r att v\xe4xla cykliskt inom den gruppen.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Utf\xf6ra kommandon</div>\n  <p>N\xe4r du beh\xf6ver utf\xf6ra ett kommando flyttar du markeringen till \xf6nskad knapp och trycker sedan p\xe5 mellanslag eller Enter.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\xd6ppna, navigera och st\xe4nga menyer</div>\n  <p>N\xe4r en knapp p\xe5 verktygsf\xe4ltet inneh\xe5ller en meny kommer tryckning p\xe5 mellanslag eller Enter att \xf6ppna den menyn. N\xe4r menyn \xf6ppnas det f\xf6rsta objektet kommer att v\xe4ljas genom att anv\xe4nda piltangenterna f\xf6r att navigera i menyn. Flytta upp\xe5t eller ned\xe5t i menyn genom att trycka p\xe5 upp\xe5t- respektive ned\xe5tpilen. Samma g\xe4ller f\xf6r undermenyer.</p>\n\n  <p>Menyalternativ som inkluderar undermenyer visas med ett vinkeltecken \xe5t sidan. Anv\xe4nd den piltangent som motsvarar riktningen f\xf6r vinkeltecknet F\xd6R ATT \xf6ppna den ut\xf6kade menyn och piltangenten i motsatt riktning kommer sedan att st\xe4nga undermenyn.</p>\n\n  <p>En \xf6ppnad meny kan \xe4ven st\xe4ngas genom att trycka p\xe5 escape-tangenten. N\xe4r en meny st\xe4ngs \xe5terst\xe4lls markeringen till det objekt som menyn \xf6ppnades f\xf6r.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Redigering eller borttagande av hyperl\xe4nkar</div>\n\n  <p>Om du vill redigera eller ta bort en l\xe4nk navigerar du till menyn Infoga och v\xe4ljer Infoga l\xe4nk. Redigeraren visar dialogrutan f\xf6r redigering av l\xe4nk. </p>\n\n  <p>Redigera l\xe4nken genom att ange den nya webbadressen i inmatningsrutan f\xf6r uppdatering av l\xe4nk och tryck sedan p\xe5 Enter. En l\xe4nk kan tas bort fr\xe5n dokumentet genom att v\xe4lja knappen Ta bort. Om du vill avsluta dialogrutan utan att g\xf6ra n\xe5gra \xe4ndringar trycker du p\xe5 Esc.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\xc4ndra teckenstorlek och tjocklek f\xf6r tabellkantlinje</div>\n\n  <p>\xc4ndra teckenstorlek genom att g\xe5 till teckenmenyn och v\xe4lj \xf6nskad teckenstorlek. Redigeraren visar storleksdialogrutan i menyn och fokuseringen \xe4ndras till dialogrutan.</p>\n\n  <p>\xc4ndra kantlinjens tjocklek genom att navigera till verktygsf\xe4ltobjektet f\xf6r tabellkantlinjens tjocklek och sedan v\xe4lja \xf6nskad tjocklek. Redigeraren visar storleksdialogrutan i menyn och fokuseringen \xe4ndras till dialogrutan. Obs! Verktygsf\xe4ltobjektet f\xf6r tabellkantlinjens tjocklek \xe4r endast tillg\xe4ngligt medan mark\xf6ren befinner sig i en tabell.</p>\n\n  <p>Inom dialogrutan f\xf6r storlek kan du trycka p\xe5 tabbtangenten f\xf6r att flytta markeringen till n\xe4sta kontroll. Tryck p\xe5 skift + tabbtangenten om du vill flytta markeringen till f\xf6reg\xe5ende kontroll.</p>\n\n  <p>\xc4ndra storlek genom att ange det nya v\xe4rdet i inmatningsrutan f\xf6r storlek. Till exempel,14px eller 1em. Tryck p\xe5 Enter n\xe4r du vill skicka \xe4ndringarna. Observera att n\xe4r du trycker p\xe5 Enter s\xe5 st\xe4ngs dialogrutan och fokuseringen \xe5terg\xe5r till dokumentet.</p>\n\n  <p>\xc4ndra storlek utan att l\xe4mna dialogrutan genom att anv\xe4nda knapparna f\xf6r \xf6kning eller minskning av storlek. Om du \xe4ndrar storleken med hj\xe4lp av knapparna f\xf6r \xf6kning eller minskning av storlek \xe4ndras storleken f\xf6r det valda elementet omedelbart samtidigt som det aktuella enhetsv\xe4rdet bevaras. St\xe4ng storleksdialogrutan genom att trycka p\xe5 Esc.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Besk\xe4ra en bild</div>\n\n  <p>Besk\xe4rningsfunktionen blir tillg\xe4nglig n\xe4r du v\xe4ljer en bild och de m\xf6jliga bild\xe5tg\xe4rderna visas i verktygsf\xe4ltet. Dessa \xe5tg\xe4rder kan \xe4ven n\xe5s genom en snabbmeny. N\xe4r besk\xe4rning har aktiverats kommer en besk\xe4rningsmask att visas \xf6ver bilden och det \xf6vre v\xe4nstra h\xf6rnet har valts.</p>\n\n  <p>Navigera med hj\xe4lp av tabbtangenten. Var och en av de 4 h\xf6rnen kan v\xe4ljas, liksom hela rutan f\xf6r besk\xe4rningsmasken. Varje h\xf6rn kan flyttas individuellt eller alla h\xf6rn kan flyttas samtidigt genom att flytta hela rutan f\xf6r besk\xe4rningsmasken.</p>\n\n  <p>Flyttning av markeringen \xf6ver bilden g\xf6rs med piltangenterna. Varje g\xe5ng du trycker p\xe5 en piltangent sker en f\xf6rflyttning med 10 bildpunkter, om du vill g\xf6ra mindre r\xf6relser h\xe5ller du ner skift samtidigt som du trycker p\xe5 en piltangent f\xf6r att flytta en pixel i taget.</p>\n\n  <p>N\xe4r du vill aktivera besk\xe4rningen trycker du p\xe5 Enter.</p>\n\n  <p>Om du vill avbryta besk\xe4rningen utan n\xe5gon effekt p\xe5 bilden trycker du p\xe5 Esc.</p>\n\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-shortcuts">\n      <caption>Tangentbordsnavigering</caption>\n      <thead>\n        <tr>\n          <th scope="col">\xc5tg\xe4rd</th>\n          <th scope="col">Windows</th>\n          <th scope="col">Mac OS</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Aktivera verktygsf\xe4lt</td>\n        <td>F10</td>\n        <td>ALT + F10</td>\n      </tr>\n      <tr>\n        <td>Knappen V\xe4lj n\xe4sta/f\xf6reg\xe5ende grupp</td>\n        <td>\u2190 eller \u2192</td>\n        <td>\u2190 eller \u2192</td>\n      </tr>\n      <tr>\n        <td>Flytta till N\xe4sta grupp</td>\n        <td>TAB</td>\n        <td>TAB</td>\n      </tr>\n      <tr>\n        <td>Flytta till F\xf6reg\xe5ende grupp</td>\n        <td>SHIFT + TAB</td>\n        <td>SHIFT + TAB</td>\n      </tr>\n      <tr>\n        <td>Utf\xf6r kommando</td>\n        <td>MELLANSLAG eller ENTER</td>\n        <td>MELLANSLAG eller ENTER</td>\n      </tr>\n      <tr>\n        <td>\xd6ppna huvudmenyn</td>\n        <td>MELLANSLAG eller ENTER</td>\n        <td>MELLANSLAG eller ENTER</td>\n      </tr>\n      <tr>\n        <td>\xd6ppna/expandera undermeny</td>\n        <td>MELLANSLAG eller RETUR eller \u2192</td>\n        <td>MELLANSLAG eller RETUR eller \u2192</td>\n      </tr>\n      <tr>\n        <td>V\xe4lj N\xe4sta/f\xf6reg. menyalternativ</td>\n        <td>\u2193 eller \u2191</td>\n        <td>\u2193 eller \u2191</td>\n      </tr>\n      <tr>\n        <td>St\xe4ng meny</td>\n        <td>ESC</td>\n        <td>ESC</td>\n      </tr>\n      <tr>\n        <td>St\xe4ng/d\xf6lj undermeny</td>\n        <td>ESC eller \u2190</td>\n        <td>ESC eller \u2190</td>\n      </tr>\n      <tr>\n        <td>Flytta bildbesk\xe4rningen</td>\n        <td>\u2190 eller \u2192 eller \u2193 eller \u2191</td>\n        <td>\u2190 eller \u2192 eller \u2193 eller \u2191</td>\n      </tr>\n      <tr>\n        <td>Flytta bildbesk\xe4rningen exakt</td>\n        <td>H\xe5ll ned SKIFT under f\xf6rflyttningen</td>\n        <td>H\xe5ll ned SKIFT under f\xf6rflyttningen</td>\n      </tr>\n      <tr>\n        <td>Till\xe4mpa besk\xe4rningen</td>\n        <td>ANGE</td>\n        <td>ANGE</td>\n      </tr>\n      <tr>\n        <td>Avbryt besk\xe4rningen</td>\n        <td>ESC</td>\n        <td>ESC</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n'),a11ycheck:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Tillg\xe4nglighetskontroll</div>\n  <p>Verktyget Tillg\xe4nglighetskontroll kan (om det \xe4r aktiverat) identifiera f\xf6ljande tillg\xe4nglighetsproblem i HTML-dokument.</p>\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-a11ycheck-table">\n      <caption>Definitioner av olika problem</caption>\n      <thead>\n        <tr>\n          <th scope="col">Problem</th>\n          <th scope="col">WCAG</th>\n          <th scope="col">Beskrivning</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Bilder m\xe5ste ha en alternativ beskrivande text</td>\n        <td>1.1.1</td>\n        <td>Bilderna m\xe5ste ha en alternativ angiven textv\xe4rdeupps\xe4ttning som beskriver bildens inneh\xe5ll f\xf6r anv\xe4ndare med nedsatt syn. </td>\n      </tr>\n      <tr>\n        <td>Den alternativa texten f\xe5r inte vara densamma som filnamnet f\xf6r bilden</td>\n        <td>1.1.1</td>\n        <td>Undvik att anv\xe4nda filnamnet f\xf6r bilden i den alternativa texten. V\xe4lj ett alternativt textv\xe4rde som beskriver bildens inneh\xe5ll.</td>\n      </tr>\n      <tr>\n        <td>Tabeller m\xe5ste ha en bildtext</td>\n        <td>1.3.1</td>\n        <td>Tabeller ska ha kort beskrivande text som anger inneh\xe5llet i tabellen.</td>\n      </tr>\n      <tr>\n        <td>Invecklade tabeller ska ha en sammanfattning</td>\n        <td>1.3.1</td>\n        <td>Tabeller med invecklade strukturer (celler som sp\xe4nner \xf6ver flera rader eller kolumner) ska inneh\xe5lla en sammanfattning som beskriver tabellstrukturen. </td>\n      </tr>\n      <tr>\n        <td>Tabellens bildtext och sammanfattning kan inte ha samma v\xe4rde</td>\n        <td>1.3.1</td>\n        <td>Tabellens bildtext ska beskriva inneh\xe5llet i tabellen, medan tabellens sammanfattning ska beskriva strukturen f\xf6r invecklade tabeller. </td>\n      </tr>\n      <tr>\n        <td>Tabeller m\xe5ste ha minst en rubrikcell</td>\n        <td>1.3.1</td>\n        <td>Tabeller ska inneh\xe5lla l\xe4mpliga rad- eller kolumnrubriker som beskriver inneh\xe5llet i den raden eller kolumnen.<br/><a href="http://webaim.org/techniques/tables/data#th" target="_blank">Mer information om detta \xe4mne (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Tabellrubriker m\xe5ste till\xe4mpas p\xe5 en rad eller en kolumn</td>\n        <td>1.3.1</td>\n        <td>Tabellrubriker m\xe5ste vara associerade med den rad eller kolumn som de beskriver.<br/><a href="http://webaim.org/techniques/tables/data#th" target="_blank">Mer information om detta \xe4mne (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Detta stycke verkar vara en rubrik. Om det \xe4r en rubrik ska du v\xe4lja en rubrikniv\xe5.</td>\n        <td>1.3.1</td>\n        <td>Anv\xe4nd rubriker f\xf6r att indela ett dokument i olika avsnitt. Undvik att anv\xe4nda s\xe4rskilt formaterade stycken i st\xe4llet f\xf6r rubriker.<br/><a href="http://webaim.org/techniques/semanticstructure/#correctly" target="_blank">Mer information om detta \xe4mne (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Rubriker m\xe5ste till\xe4mpas i ordningsf\xf6ljd. Till exempel: Rubrik 1 ska f\xf6ljas av Rubrik 2 och inte av Rubrik 3.</td>\n        <td>1.3.1</td>\n        <td>Efterf\xf6ljande dokumentrubriker ska visas hierarkiskt, det vill s\xe4ga i stigande ordning eller liknande.<br/><a href="http://webaim.org/techniques/semanticstructure/#contentstructure" target="_blank">Mer information om detta \xe4mne (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Anv\xe4nd listmarkeringar f\xf6r listor</td>\n        <td>1.3.1</td>\n        <td>Se till att listor med poster anv\xe4nder HTML-liststruktur f\xf6r att representera listor (<code>&lt;ul&gt;</code> eller <code>&lt;ol&gt;</code> och <code>&lt;li&gt;</code>).</td>\n      </tr>\n      <tr>\n        <td>Text m\xe5ste ha ett kontrastf\xf6rh\xe5llande p\xe5 4,5:1</td>\n        <td>1.4.3</td>\n        <td>Text och dess bakgrund m\xe5ste ha ett kontrastf\xf6rh\xe5llande som g\xf6r att den kan l\xe4sas \xe4ven av personer med m\xe5ttligt nedsatt syn.</td>\n      </tr>\n      <tr>\n        <td>Intilliggande l\xe4nkar b\xf6r sl\xe5s samman.</td>\n        <td>2.4.4</td>\n        <td>Intilliggande hyperl\xe4nkar som leder till samma resurs b\xf6r sl\xe5s samman till en enda hyperl\xe4nk.</td>\n      </tr>\n    </tbody>\n  </table>\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Mer information</div>\n  <p>\n    <a href="http://webaim.org/intro/" target="_blank">Introduktion till webbtillg\xe4nglighet (webaim.org)</a> <br/>\n    <a href="http://www.w3.org/WAI/intro/wcag" target="_blank">Introduktion till WCAG 2.0 (w3.org)</a> <br/>\n    <a href="http://www.section508.gov/" target="_blank">Avsnitt 508 av US Rehabilitation Act (section508.gov)</a>\n  </p>\n</div>'),markdown:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div class="ephox-polish-help-h1" role="heading" aria-level="1">Nedskrivningsformatering</div>\n  <p>Nedskrivningsformatering \xe4r syntax f\xf6r att skapa HTML-strukturer och formatering utan att tangentbordsgenv\xe4gar eller \xe5tkomstmenyer beh\xf6ver anv\xe4ndas. Ange \xf6nskad syntax f\xf6ljt av enter eller mellanslag f\xf6r att anv\xe4nda nedskrivningsformatering.</p>\n  <table cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-markdown" aria-readonly="true">\n      <caption>Syntax f\xf6r tangentbordsformatering</caption>\n      <thead>\n        <tr>\n          <th scope="col">Syntax</th>\n          <th scope="col">HTML-resultat</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td><pre># St\xf6rsta rubrik</pre></td>\n        <td><pre>&lt;h1&gt; St\xf6rsta rubrik&lt;/h1&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>## St\xf6rre rubrik</pre></td>\n        <td><pre>&lt;h2&gt;St\xf6rre rubrik&lt;/h2&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>### Stor rubrik</pre></td>\n        <td><pre>&lt;h3&gt;Stor rubrik&lt;/h3&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>####  Rubrik</pre></td>\n        <td><pre>&lt;h4&gt;Rubrik&lt;/h4&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>##### Liten rubrik</pre></td>\n        <td><pre>&lt;h5&gt;Liten rubrik&lt;/h5&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>###### Minsta rubrik</pre></td>\n        <td><pre>&lt;h6&gt;Minsta rubrik&lt;/h6&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>* Oordnad lista</pre></td>\n        <td><pre>&lt;ul&gt;&lt;li&gt;Oordnad lista&lt;/li&gt;&lt;/ul&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>1. Ordnad lista</pre></td>\n        <td><pre>&lt;ol&gt;&lt;li&gt;Ordnad lista&lt;/li&gt;&lt;/ol&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>*Kursiv*</pre></td>\n        <td><pre>&lt;em&gt;Kursiv&lt;/em&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>**Fet**</pre></td>\n        <td><pre>&lt;strong&gt;Fet&lt;/strong&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>---</pre></td>\n        <td><pre>&lt;hr/&gt;</pre></td>\n      </tr>\n    </tbody>\n  </table>\n</div>'),shortcuts:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Tangentbordsgenv\xe4gar</div>\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-shortcuts">\n    <caption>Redigerarkommandon</caption>\n    <thead>\n      <tr>\n        <th scope="col">\xc5tg\xe4rd</th>\n        <th scope="col">Windows</th>\n        <th scope="col">Mac OS</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>\xc5ngra</td>\n        <td>CTRL + Z</td>\n        <td>\u2318Z</td>\n      </tr>\n      <tr>\n        <td>G\xf6r om</td>\n        <td>CTRL + Y</td>\n        <td>\u2318\u21e7Z</td>\n      </tr>\n      <tr>\n        <td>Fet</td>\n        <td>CTRL + B</td>\n        <td>\u2318B</td>\n      </tr>\n      <tr>\n        <td>Kursiv</td>\n        <td>CTRL + I</td>\n        <td>\u2318I</td>\n      </tr>\n      <tr>\n        <td>Understruken</td>\n        <td>CTRL + U</td>\n        <td>\u2318U</td>\n      </tr>\n      <tr>\n        <td>Indrag</td>\n        <td>CTRL + M</td>\n        <td>\u2318M</td>\n      </tr>\n      <tr>\n        <td>Minska indrag</td>\n        <td>CTRL + SHIFT + M</td>\n        <td>\u2318\u21e7M</td>\n      </tr>\n      <tr>\n        <td>L\xe4gg till l\xe4nk</td>\n        <td>CTRL + K</td>\n        <td>\u2318K</td>\n      </tr>\n      <tr>\n        <td>S\xf6k</td>\n        <td>CTRL + F</td>\n        <td>\u2318F</td>\n      </tr>\n      <tr>\n        <td>Helsk\xe4rmsl\xe4ge (v\xe4xla)</td>\n        <td>CTRL + SHIFT + F</td>\n        <td>\u2318\u21e7F</td>\n      </tr>\n      <tr>\n        <td>Hj\xe4lpdialog (\xd6ppna)</td>\n        <td>CTRL + SHIFT + H</td>\n        <td>\u2303\u2325H</td>\n      </tr>\n      <tr>\n        <td>Sammanhangsmeny (\xf6ppna)</td>\n        <td>SHIFT + F10</td>\n        <td>\u21e7F10\u200e\u200f</td>\n      </tr>\n      <tr>\n        <td>Kod Autoslutf\xf6r</td>\n        <td>CTRL + Space</td>\n        <td>\u2303Mellanslag</td>\n      </tr>\n      <tr>\n        <td>Tillg\xe4nglig kodvy</td>\n        <td>CTRL + SKIFT + U</td>\n        <td>\u2318\u2325U</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class="ephox-polish-help-note" role="note">*Obs! Din administrat\xf6r kan inaktivera vissa funktioner.</div>\n</div>\n')})}();