(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],[,,,function(s,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"b",function(){return n});var i=t(0),r=t.n(i),o=t(1);const a=new r.a({methods:{listen(s,e,t){const i=e?`@${e._uid}`:"";this.$on(`${s}${i}`,t)},stop(s,e,t){const i=e?`@${e._uid}`:"";this.$off(`${s}${i}`,t)},sendBack(s,e){this.$emit("panel:send",{action:s,data:e})},send(s,e,t={}){const i=e?`@${e._uid}`:"";this.$emit(`${s}${i}`,t)},requestPanel(s){this.$emit("panel:request",s)},closePanel(){this.$emit("panel:close")}}}),n={template:'\n        <aside class="main-panel" :class="open ? \'on\' : \'\'">\n            <header v-if="!customHeader" class="tab unselectable open">\n                <h2><span v-show="closeButtonVisible"><: t(headerLabel) | humanize :></span> &nbsp;</h2>\n                <a href="#" @click.prevent="close()"><: t(closeButtonLabel) :></a>\n            </header>\n\n            <section class="fieldset main-panel-body">\n                <slot :data="data" :action="action"></slot>\n            </section>\n\n            <footer v-if="!customFooter">\n                <p>\n                    <button v-show="saveButtonVisible" class="has-background-info has-text-white"\n                        @click.prevent="save()"><: t(saveButtonLabel) :></button>\n                </p>\n            </footer>\n        </aside>\n    ',props:{customHeader:{type:Boolean,default:!1},customFooter:{type:Boolean,default:!1},saveButtonVisible:{type:Boolean,default:!0},headerLabel:{type:String,default:()=>Object(o.t)("Panel")},saveButtonLabel:{type:String,default:()=>Object(o.t)("save")},closeButtonLabel:{type:String,default:()=>Object(o.t)("close")},closeButtonVisible:{type:Boolean,default:!0}},data:()=>({open:!1,stack:[]}),computed:{from(){return this.stack.length&&this.stack.slice().pop().from||null},action(){return this.stack.length&&this.stack.slice().pop().action||""},data(){return this.stack.length&&this.stack.slice().pop().data||{}}},watch:{open(s){s?window.document.body.classList.add("panel-is-open"):window.document.body.classList.remove("panel-is-open")}},created(){a.listen("panel:request",null,s=>{let{data:e,from:t}=s;this.open=!0,this.stack.push(s),a.send("panel:requested",null,s)}),a.listen("panel:send",null,s=>{let{action:e,data:t}=s;a.send(e,this.from,t)}),a.listen("panel:save",null,s=>{a.sendBack("panel:saved",this.from,s),this.pop()}),a.listen("panel:open",null,s=>{this.open=!0,a.send("panel:opened",null,s)}),a.listen("panel:hide",null,s=>{this.open=!1,a.send("panel:hidden",null,s)}),a.listen("panel:close",null,()=>{this.open=!1,this.pop()})},methods:{pop(){const s=this.stack,e=s.pop();s.length?this.open=!0:(this.open=!1,a.$emit("panel:closed",e))},save(s){a.$emit("panel:save",s)},close(){a.$emit("panel:close")}}}},,,,,,function(s,e,t){"use strict";(function(s){t.d(e,"a",function(){return o});var i=t(0),r=t.n(i);const o={loadBeditaPlugins(){BEDITA.plugins.forEach(e=>{const t=window[e]||s[e];if(t){const s=t.default;Object.keys(s).forEach(t=>{"object"==typeof s[t]&&(r.a.component(t,s[t]),console.debug(`%c[${t}]%c component succesfully registred from %c${e}%c Plugin`,"color: blue","color: black","color: red","color: black"))})}})}}}).call(this,t(2))},function(s,e,t){"use strict";var i=t(0),r=t.n(i),o=t(1);t(19);t.d(e,"a",function(){return m}),t.d(e,"b",function(){return d});const a={devtools:!0},n={delimiters:["<:",":>"]};for(let s in a)a.hasOwnProperty(s)&&(r.a.config[s]=a[s]);for(let s in n)n.hasOwnProperty(s)&&(r.a.options[s]=n[s]);!function(s){if(s){const e=t(16)(`./${s}/default.po`);Object(o.addLocale)(s,e),Object(o.useLocale)(s)}}(BEDITA.locale);const m=["media","image","video","audio","files"];r.a.mixin({methods:{t:s=>Object(o.t)([s])}});const d={configFull:{toolbar:[{name:"document",groups:["mode"],items:["Source"]},{name:"basicstyles",groups:["basicstyles","cleanup"],items:["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"]},{name:"paragraph",groups:["list","blocks","align"],items:["NumberedList","BulletedList","-","Blockquote","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"]},{name:"links",items:["Link","Unlink","Anchor"]},{name:"editAttributes",items:["Attr"]},{name:"editing",groups:["find"],items:["Find","Replace"]},{name:"insert",items:["Image","Table","HorizontalRule","SpecialChar","Formula"]},{name:"tools",items:["ShowBlocks","AutoCorrect"]},{name:"styles",items:["Format","Styles"]},{name:"clipboard",groups:["clipboard","undo"],items:["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"]}],allowedContent:!0,language:BEDITA.currLang2,entities:!1,fillEmptyBlocks:!1,forcePasteAsPlainText:!0,startupOutlineBlocks:!0,height:200},configNormal:{toolbar:[{name:"basicstyles",groups:["basicstyles","cleanup"],items:["Bold","Italic","Underline","Strike","-","RemoveFormat"]},{name:"paragraph",groups:["list","blocks","align"],items:["NumberedList","BulletedList"]},{name:"styles",items:["Format"]},{name:"links",items:["Link","Unlink"]},{name:"clipboard",groups:["clipboard","undo"],items:["PasteText","PasteFromWord","-","Undo","Redo"]},{name:"document",groups:["mode"],items:["Source"]}],format_tags:"p;h2",allowedContent:!0,language:BEDITA.currLang2,entities:!1,fillEmptyBlocks:!1,forcePasteAsPlainText:!0,startupOutlineBlocks:!0,height:200},configSimple:{toolbar:[{name:"document",groups:["mode"],items:["Source"]},{name:"basicstyles",groups:["basicstyles","cleanup"],items:["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"]},{name:"links",items:["Link","Unlink"]},{name:"clipboard",groups:["clipboard","undo"],items:["Undo","Redo"]},{name:"tools",items:["ShowBlocks"]}],allowedContent:!0,language:BEDITA.currLang2,entities:!1,fillEmptyBlocks:!1,forcePasteAsPlainText:!0,startupOutlineBlocks:!0,height:200}}},function(s,e,t){s.exports=t(21)},,,,,function(s,e,t){var i={"./en_US/default.po":17,"./it_IT/default.po":18};function r(s){var e=o(s);return t(e)}function o(s){var e=i[s];if(!(e+1)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return e}r.keys=function(){return Object.keys(i)},r.resolve=o,s.exports=r,r.id=16},function(s,e){s.exports={charset:"utf-8",headers:{"project-id-version":"BEdita 4","pot-creation-date":"2019-03-07 11:39:32","po-revision-date":"","last-translator":"","language-team":"BEdita I18N & I10N Team",language:"","mime-version":"1.0","content-type":"text/plain; charset=UTF-8","content-transfer-encoding":"8bit","plural-forms":"nplurals=2; plural=(n != 1);"},translations:{"":{"":{msgid:"",msgstr:["Project-Id-Version: BEdita 4 \nPOT-Creation-Date: 2019-03-07 11:39:32 \nPO-Revision-Date:  \nLast-Translator:  \nLanguage-Team: BEdita I18N & I10N Team \nLanguage:  \nMIME-Version: 1.0 \nContent-Type: text/plain; charset=UTF-8 \nContent-Transfer-Encoding: 8bit \nPlural-Forms: nplurals=2; plural=(n != 1); \n"]},"&":{msgid:"&",msgstr:[""]},"Actions on selected items":{msgid:"Actions on selected items",msgstr:[""]},"Add objects to":{msgid:"Add objects to",msgstr:[""]},Advanced:{msgid:"Advanced",msgstr:[""]},All:{msgid:"All",msgstr:[""]},"All Types":{msgid:"All Types",msgstr:[""]},"All media":{msgid:"All media",msgstr:[""]},"All objects":{msgid:"All objects",msgstr:[""]},"An extension stopped the file upload":{msgid:"An extension stopped the file upload",msgstr:[""]},Any:{msgid:"Any",msgstr:[""]},"BEdita Web site":{msgid:"BEdita Web site",msgstr:[""]},"BEdita {0}":{msgid:"BEdita {0}",msgstr:[""]},"Bulk Action failed on: ":{msgid:"Bulk Action failed on: ",msgstr:[""]},"Cannot create abstract objects or objects without schema":{msgid:"Cannot create abstract objects or objects without schema",msgstr:[""]},"Cannot produce a thumbnail for this file":{msgid:"Cannot produce a thumbnail for this file",msgstr:[""]},"Change File":{msgid:"Change File",msgstr:[""]},Children:{msgid:"Children",msgstr:[""]},"Create new":{msgid:"Create new",msgstr:[""]},"Current password":{msgid:"Current password",msgstr:[""]},Dashboard:{msgid:"Dashboard",msgstr:[""]},"Data Import":{msgid:"Data Import",msgstr:[""]},"Data modeling":{msgid:"Data modeling",msgstr:[""]},Delete:{msgid:"Delete",msgstr:[""]},Description:{msgid:"Description",msgstr:[""]},"Direct access by id or unique name":{msgid:"Direct access by id or unique name",msgstr:[""]},Documents:{msgid:"Documents",msgstr:[""]},Download:{msgid:"Download",msgstr:[""]},Draft:{msgid:"Draft",msgstr:[""]},"Edit Params":{msgid:"Edit Params",msgstr:[""]},"Empty request data":{msgid:"Empty request data",msgstr:[""]},'Empty translation "id"':{msgid:'Empty translation "id"',msgstr:[""]},'Empty translation "object_id"':{msgid:'Empty translation "object_id"',msgstr:[""]},"Empty-verb":{msgid:"Empty-verb",msgstr:["Empty"]},"Error ":{msgid:"Error ",msgstr:[""]},"Error retrieving the requested content":{msgid:"Error retrieving the requested content",msgstr:[""]},Events:{msgid:"Events",msgstr:[""]},Export:{msgid:"Export",msgstr:[""]},"Export All":{msgid:"Export All",msgstr:[""]},"Failed to write file to disk":{msgid:"Failed to write file to disk",msgstr:[""]},"File is too big, form MAX_FILE_SIZE exceeded":{msgid:"File is too big, form MAX_FILE_SIZE exceeded",msgstr:[""]},"File is too big, max allowed size is {0}":{msgid:"File is too big, max allowed size is {0}",msgstr:[""]},"File only partially uploaded":{msgid:"File only partially uploaded",msgstr:[""]},"File type":{msgid:"File type",msgstr:[""]},Files:{msgid:"Files",msgstr:[""]},Folders:{msgid:"Folders",msgstr:[""]},From:{msgid:"From",msgstr:[""]},"Image not acceptable for thumb":{msgid:"Image not acceptable for thumb",msgstr:[""]},Images:{msgid:"Images",msgstr:[""]},Import:{msgid:"Import",msgstr:[""]},"Import error":{msgid:"Import error",msgstr:[""]},"Import filter not selected":{msgid:"Import filter not selected",msgstr:[""]},"Import warn":{msgid:"Import warn",msgstr:[""]},"Invalid username or password":{msgid:"Invalid username or password",msgstr:[""]},Language:{msgid:"Language",msgstr:[""]},Locations:{msgid:"Locations",msgstr:[""]},"Log out":{msgid:"Log out",msgstr:[""]},Login:{msgid:"Login",msgstr:[""]},"Login required":{msgid:"Login required",msgstr:[""]},Media:{msgid:"Media",msgstr:[""]},Metadata:{msgid:"Metadata",msgstr:[""]},"Missing import file":{msgid:"Missing import file",msgstr:[""]},"Missing thumb url":{msgid:"Missing thumb url",msgstr:[""]},"Module access not authorized":{msgid:"Module access not authorized",msgstr:[""]},"Move to trash":{msgid:"Move to trash",msgstr:[""]},"New entry in":{msgid:"New entry in",msgstr:[""]},"New relations (save to keep)":{msgid:"New relations (save to keep)",msgstr:[""]},News:{msgid:"News",msgstr:[""]},No:{msgid:"No",msgstr:[""]},"No items found":{msgid:"No items found",msgstr:[""]},"No options for this file type":{msgid:"No options for this file type",msgstr:[""]},"Number of created objects":{msgid:"Number of created objects",msgstr:[""]},"Number of created resources":{msgid:"Number of created resources",msgstr:[""]},"Number of errors":{msgid:"Number of errors",msgstr:[""]},"Number of updated objects":{msgid:"Number of updated objects",msgstr:[""]},"Number of updated resources":{msgid:"Number of updated resources",msgstr:[""]},"Object deleted from trash":{msgid:"Object deleted from trash",msgstr:[""]},"Object saved":{msgid:"Object saved",msgstr:[""]},"Object types":{msgid:"Object types",msgstr:[""]},"Object(s) deleted":{msgid:"Object(s) deleted",msgstr:[""]},Objects:{msgid:"Objects",msgstr:[""]},Off:{msgid:"Off",msgstr:[""]},On:{msgid:"On",msgstr:[""]},"Open image":{msgid:"Open image",msgstr:[""]},Options:{msgid:"Options",msgstr:[""]},Other:{msgid:"Other",msgstr:[""]},Password:{msgid:"Password",msgstr:[""]},"Preferences and Tools":{msgid:"Preferences and Tools",msgstr:[""]},Priority:{msgid:"Priority",msgstr:[""]},Profiles:{msgid:"Profiles",msgstr:[""]},"Property types":{msgid:"Property types",msgstr:[""]},"Publish End":{msgid:"Publish End",msgstr:[""]},"Publish Start":{msgid:"Publish Start",msgstr:[""]},Relations:{msgid:"Relations",msgstr:[""]},Remove:{msgid:"Remove",msgstr:[""]},"Reset filters":{msgid:"Reset filters",msgstr:[""]},'Resource "%s" not available. Error: %s':{msgid:'Resource "%s" not available. Error: %s',msgstr:[""]},'Resource "%s" not found':{msgid:'Resource "%s" not found',msgstr:[""]},Restore:{msgid:"Restore",msgstr:[""]},Result:{msgid:"Result",msgstr:[""]},"Retype password":{msgid:"Retype password",msgstr:[""]},Save:{msgid:"Save",msgstr:[""]},Search:{msgid:"Search",msgstr:[""]},"Search in BEdita":{msgid:"Search in BEdita",msgstr:[""]},"Set selected":{msgid:"Set selected",msgstr:[""]},Settings:{msgid:"Settings",msgstr:[""]},"Show more":{msgid:"Show more",msgstr:[""]},"Sign in":{msgid:"Sign in",msgstr:[""]},Size:{msgid:"Size",msgstr:[""]},Status:{msgid:"Status",msgstr:[""]},"System users":{msgid:"System users",msgstr:[""]},"Temporary folder missing":{msgid:"Temporary folder missing",msgstr:[""]},"The thumbnail is not available":{msgid:"The thumbnail is not available",msgstr:[""]},"Thumb not available":{msgid:"Thumb not available",msgstr:[""]},"Thumb not ready: coming soon":{msgid:"Thumb not ready: coming soon",msgstr:[""]},"Thumbnail is not ready":{msgid:"Thumbnail is not ready",msgstr:[""]},To:{msgid:"To",msgstr:[""]},"Translation(s) deleted":{msgid:"Translation(s) deleted",msgstr:[""]},Translations:{msgid:"Translations",msgstr:[""]},Trash:{msgid:"Trash",msgstr:[""]},"Trash can":{msgid:"Trash can",msgstr:[""]},"Trash-verb":{msgid:"Trash-verb",msgstr:["Trash"]},Trashcan:{msgid:"Trashcan",msgstr:[""]},Uname:{msgid:"Uname",msgstr:[""]},"Unknown upload error":{msgid:"Unknown upload error",msgstr:[""]},Untitled:{msgid:"Untitled",msgstr:[""]},Upload:{msgid:"Upload",msgstr:[""]},"User Profile":{msgid:"User Profile",msgstr:[""]},"User profile saved":{msgid:"User profile saved",msgstr:[""]},Username:{msgid:"Username",msgstr:[""]},Users:{msgid:"Users",msgstr:[""]},Videos:{msgid:"Videos",msgstr:[""]},View:{msgid:"View",msgstr:[""]},"View original":{msgid:"View original",msgstr:[""]},"View trashed ":{msgid:"View trashed ",msgstr:[""]},Yes:{msgid:"Yes",msgstr:[""]},"You are not authorized to access that location.":{msgid:"You are not authorized to access that location.",msgstr:[""]},"add objects":{msgid:"add objects",msgstr:[""]},"add to":{msgid:"add to",msgstr:[""]},cancel:{msgid:"cancel",msgstr:[""]},"click to remove":{msgid:"click to remove",msgstr:[""]},close:{msgid:"close",msgstr:[""]},code:{msgid:"code",msgstr:[""]},"confirm password":{msgid:"confirm password",msgstr:[""]},create:{msgid:"create",msgstr:[""]},"create new":{msgid:"create new",msgstr:[""]},"current password":{msgid:"current password",msgstr:[""]},download:{msgid:"download",msgstr:[""]},id:{msgid:"id",msgstr:[""]},"last modified":{msgid:"last modified",msgstr:[""]},modified:{msgid:"modified",msgstr:[""]},"move to":{msgid:"move to",msgstr:[""]},"new password":{msgid:"new password",msgstr:[""]},objects:{msgid:"objects",msgstr:[""]},of:{msgid:"of",msgstr:[""]},open:{msgid:"open",msgstr:[""]},original:{msgid:"original",msgstr:[""]},position:{msgid:"position",msgstr:[""]},reload:{msgid:"reload",msgstr:[""]},remove:{msgid:"remove",msgstr:[""]},status:{msgid:"status",msgstr:[""]},title:{msgid:"title",msgstr:[""]},"translation of":{msgid:"translation of",msgstr:[""]},type:{msgid:"type",msgstr:[""]},undo:{msgid:"undo",msgstr:[""]},"undo remove":{msgid:"undo remove",msgstr:[""]},"view file":{msgid:"view file",msgstr:[""]},"www.bedita.com":{msgid:"www.bedita.com",msgstr:[""]}}}}},function(s,e){s.exports={charset:"utf-8",headers:{"project-id-version":"BEdita 4","pot-creation-date":"2019-03-07 11:39:32","po-revision-date":"","last-translator":"","language-team":"BEdita I18N & I10N Team",language:"","mime-version":"1.0","content-type":"text/plain; charset=UTF-8","content-transfer-encoding":"8bit","plural-forms":"nplurals=2; plural=(n != 1);"},translations:{"":{"":{msgid:"",msgstr:["Project-Id-Version: BEdita 4 \nPOT-Creation-Date: 2019-03-07 11:39:32 \nPO-Revision-Date:  \nLast-Translator:  \nLanguage-Team: BEdita I18N & I10N Team \nLanguage:  \nMIME-Version: 1.0 \nContent-Type: text/plain; charset=UTF-8 \nContent-Transfer-Encoding: 8bit \nPlural-Forms: nplurals=2; plural=(n != 1); \n"]},"&":{msgid:"&",msgstr:[""]},"Actions on selected items":{msgid:"Actions on selected items",msgstr:["Azioni sugli oggetti selezionati"]},"Add objects to":{msgid:"Add objects to",msgstr:["Aggiungi oggetti a"]},Advanced:{msgid:"Advanced",msgstr:["Avanzate"]},All:{msgid:"All",msgstr:["Tutti"]},"All Types":{msgid:"All Types",msgstr:["Tutti i tipi"]},"All media":{msgid:"All media",msgstr:["Tutti i media"]},"All objects":{msgid:"All objects",msgstr:["Tutti gli oggetti"]},"An extension stopped the file upload":{msgid:"An extension stopped the file upload",msgstr:["Un'estensione ha fermato il caricamento del file"]},Any:{msgid:"Any",msgstr:["Qualsiasi"]},"BEdita Web site":{msgid:"BEdita Web site",msgstr:["Sito BEdita"]},"BEdita {0}":{msgid:"BEdita {0}",msgstr:[""]},"Bulk Action failed on: ":{msgid:"Bulk Action failed on: ",msgstr:["Operazione massiva non riuscita:"]},"Cannot create abstract objects or objects without schema":{msgid:"Cannot create abstract objects or objects without schema",msgstr:["Impossibile creare oggetti astratti o oggetti senza schema"]},"Cannot produce a thumbnail for this file":{msgid:"Cannot produce a thumbnail for this file",msgstr:["Impossibile produrre una miniatura per questo file"]},"Change File":{msgid:"Change File",msgstr:["Cambia File"]},Children:{msgid:"Children",msgstr:["Contenuti"]},"Create new":{msgid:"Create new",msgstr:["Crea nuovo"]},"Current password":{msgid:"Current password",msgstr:["Password corrente"]},Dashboard:{msgid:"Dashboard",msgstr:["Cruscotto"]},"Data Import":{msgid:"Data Import",msgstr:["Importazione dati"]},"Data modeling":{msgid:"Data modeling",msgstr:["Modellazione"]},Delete:{msgid:"Delete",msgstr:["Elimina"]},Description:{msgid:"Description",msgstr:["Descrizione"]},"Direct access by id or unique name":{msgid:"Direct access by id or unique name",msgstr:["Link diretto per ID o nome univoco"]},Documents:{msgid:"Documents",msgstr:["Documenti"]},Download:{msgid:"Download",msgstr:[""]},Draft:{msgid:"Draft",msgstr:[""]},"Edit Params":{msgid:"Edit Params",msgstr:["Modifica Parametri"]},"Empty request data":{msgid:"Empty request data",msgstr:["Nessuno dato in request"]},'Empty translation "id"':{msgid:'Empty translation "id"',msgstr:['Identificatore traduzione vuoto ("id")']},'Empty translation "object_id"':{msgid:'Empty translation "object_id"',msgstr:['Identificatore oggetto tradotto vuoto ("object_id") ']},"Empty-verb":{msgid:"Empty-verb",msgstr:["Svuota"]},"Error ":{msgid:"Error ",msgstr:["Errore "]},"Error retrieving the requested content":{msgid:"Error retrieving the requested content",msgstr:["Errore nel caricamento del contenuto richiesto"]},Events:{msgid:"Events",msgstr:["Eventi"]},Export:{msgid:"Export",msgstr:["Esporta"]},"Export All":{msgid:"Export All",msgstr:["Esporta Tutti"]},"Failed to write file to disk":{msgid:"Failed to write file to disk",msgstr:["Scrittura file su disco fallita"]},"File is too big, form MAX_FILE_SIZE exceeded":{msgid:"File is too big, form MAX_FILE_SIZE exceeded",msgstr:["File troppo grande, dimensione massima form superata (MAX_FILE_SIZE)"]},"File is too big, max allowed size is {0}":{msgid:"File is too big, max allowed size is {0}",msgstr:["File troppo grande, dimensione massima consentita {0}"]},"File only partially uploaded":{msgid:"File only partially uploaded",msgstr:["File caricato solo parzialmente"]},"File type":{msgid:"File type",msgstr:["Tipo di file"]},Files:{msgid:"Files",msgstr:["File"]},Folders:{msgid:"Folders",msgstr:["Cartelle"]},From:{msgid:"From",msgstr:["Da"]},"Image not acceptable for thumb":{msgid:"Image not acceptable for thumb",msgstr:["Immagine non valida per miniatura"]},Images:{msgid:"Images",msgstr:["Immagini"]},Import:{msgid:"Import",msgstr:["Importa da file"]},"Import error":{msgid:"Import error",msgstr:["Errore in importazione"]},"Import filter not selected":{msgid:"Import filter not selected",msgstr:["Filtro di importazione non selezionato"]},"Import warn":{msgid:"Import warn",msgstr:["Avviso in importazione"]},"Invalid username or password":{msgid:"Invalid username or password",msgstr:[""]},Language:{msgid:"Language",msgstr:["Lingua"]},Locations:{msgid:"Locations",msgstr:["Luoghi"]},"Log out":{msgid:"Log out",msgstr:["Esci"]},Login:{msgid:"Login",msgstr:["Accedi"]},"Login required":{msgid:"Login required",msgstr:["È richiesto il login"]},Media:{msgid:"Media",msgstr:[""]},Metadata:{msgid:"Metadata",msgstr:["Metadati"]},"Missing import file":{msgid:"Missing import file",msgstr:["File di importazione mancante"]},"Missing thumb url":{msgid:"Missing thumb url",msgstr:["Url miniatura mancante"]},"Module access not authorized":{msgid:"Module access not authorized",msgstr:["Accesso al modulo non autorizzato"]},"Move to trash":{msgid:"Move to trash",msgstr:["Sposta nel cestino"]},"New entry in":{msgid:"New entry in",msgstr:["Nuova voce in"]},"New relations (save to keep)":{msgid:"New relations (save to keep)",msgstr:["Nuove relazioni (salvare per mantenerle)"]},News:{msgid:"News",msgstr:["Novità"]},No:{msgid:"No",msgstr:["No"]},"No items found":{msgid:"No items found",msgstr:["Nessun elemento trovato"]},"No options for this file type":{msgid:"No options for this file type",msgstr:["Nessuna opzione per questo tipo di file"]},"Number of created objects":{msgid:"Number of created objects",msgstr:["Numero di oggetti creati"]},"Number of created resources":{msgid:"Number of created resources",msgstr:["Numero di risorse create"]},"Number of errors":{msgid:"Number of errors",msgstr:["Numero di errori"]},"Number of updated objects":{msgid:"Number of updated objects",msgstr:["Numero di oggetti aggiornati"]},"Number of updated resources":{msgid:"Number of updated resources",msgstr:["Numero di risorse aggiornate"]},"Object deleted from trash":{msgid:"Object deleted from trash",msgstr:["Oggetto rimosso dal cestino"]},"Object saved":{msgid:"Object saved",msgstr:["Oggetto salvato"]},"Object types":{msgid:"Object types",msgstr:["Tipi di oggetto"]},"Object(s) deleted":{msgid:"Object(s) deleted",msgstr:["Oggetto(i) rimosso(i)"]},Objects:{msgid:"Objects",msgstr:["Oggetti"]},Off:{msgid:"Off",msgstr:[""]},On:{msgid:"On",msgstr:[""]},"Open image":{msgid:"Open image",msgstr:["Apri immagine"]},Options:{msgid:"Options",msgstr:["Opzioni"]},Other:{msgid:"Other",msgstr:["Altro"]},Password:{msgid:"Password",msgstr:[""]},"Preferences and Tools":{msgid:"Preferences and Tools",msgstr:["Preferenze e Strumenti"]},Priority:{msgid:"Priority",msgstr:["Priorità"]},Profiles:{msgid:"Profiles",msgstr:["Profili"]},"Property types":{msgid:"Property types",msgstr:["Tipi di priorità"]},"Publish End":{msgid:"Publish End",msgstr:["Data revoca pubblicazione"]},"Publish Start":{msgid:"Publish Start",msgstr:["Data inizio pubblicazione"]},Relations:{msgid:"Relations",msgstr:["Relazioni"]},Remove:{msgid:"Remove",msgstr:["Rimuovi"]},"Reset filters":{msgid:"Reset filters",msgstr:["Reset filtri"]},'Resource "%s" not available. Error: %s':{msgid:'Resource "%s" not available. Error: %s',msgstr:['Risorsa "%s" non disponibile. Error: %s']},'Resource "%s" not found':{msgid:'Resource "%s" not found',msgstr:['Risorsa "%s" non trovata']},Restore:{msgid:"Restore",msgstr:["Ripristina"]},Result:{msgid:"Result",msgstr:["Risultato"]},"Retype password":{msgid:"Retype password",msgstr:["Ridigita password"]},Save:{msgid:"Save",msgstr:["Salva"]},Search:{msgid:"Search",msgstr:["Cerca"]},"Search in BEdita":{msgid:"Search in BEdita",msgstr:["Cerca in BEdita"]},"Set selected":{msgid:"Set selected",msgstr:["Applica a selezione"]},Settings:{msgid:"Settings",msgstr:["Impostazioni"]},"Show more":{msgid:"Show more",msgstr:["Mostra di più"]},"Sign in":{msgid:"Sign in",msgstr:["Accedi"]},Size:{msgid:"Size",msgstr:["Dimensione"]},Status:{msgid:"Status",msgstr:["Stato"]},"System users":{msgid:"System users",msgstr:[""]},"Temporary folder missing":{msgid:"Temporary folder missing",msgstr:["Cartella temporanea mancante"]},"The thumbnail is not available":{msgid:"The thumbnail is not available",msgstr:["La miniatura non è disponibile"]},"Thumb not available":{msgid:"Thumb not available",msgstr:["Miniatura non disponibile"]},"Thumb not ready: coming soon":{msgid:"Thumb not ready: coming soon",msgstr:["Miniatura non pronta: in lavorazione"]},"Thumbnail is not ready":{msgid:"Thumbnail is not ready",msgstr:["La miniatura non è pronta"]},To:{msgid:"To",msgstr:["A"]},"Translation(s) deleted":{msgid:"Translation(s) deleted",msgstr:["Traduzione(i) rimossa(e)"]},Translations:{msgid:"Translations",msgstr:["Traduzioni"]},Trash:{msgid:"Trash",msgstr:["Cestino"]},"Trash can":{msgid:"Trash can",msgstr:["Cestino"]},"Trash-verb":{msgid:"Trash-verb",msgstr:["Cestina"]},Trashcan:{msgid:"Trashcan",msgstr:["Cestino"]},Uname:{msgid:"Uname",msgstr:["Nome univoco"]},"Unknown upload error":{msgid:"Unknown upload error",msgstr:["Errore sconosciuto durante caricamento"]},Untitled:{msgid:"Untitled",msgstr:["Senza titolo"]},Upload:{msgid:"Upload",msgstr:["Caricare"]},"User Profile":{msgid:"User Profile",msgstr:["Profilo Utente"]},"User profile saved":{msgid:"User profile saved",msgstr:["Profilo utente salvato"]},Username:{msgid:"Username",msgstr:["Nome utente"]},Users:{msgid:"Users",msgstr:["Utenti"]},Videos:{msgid:"Videos",msgstr:["Video"]},View:{msgid:"View",msgstr:["Visualizza"]},"View original":{msgid:"View original",msgstr:["Vedi originale"]},"View trashed ":{msgid:"View trashed ",msgstr:[""]},Yes:{msgid:"Yes",msgstr:["Sì"]},"You are not authorized to access that location.":{msgid:"You are not authorized to access that location.",msgstr:["Non sei autorizzato ad accedere a quest'area."]},"add objects":{msgid:"add objects",msgstr:["aggiungi oggetti"]},"add to":{msgid:"add to",msgstr:[""]},cancel:{msgid:"cancel",msgstr:["annulla"]},"click to remove":{msgid:"click to remove",msgstr:["clicca per rimuovere"]},close:{msgid:"close",msgstr:["chiudi"]},code:{msgid:"code",msgstr:["codice"]},"confirm password":{msgid:"confirm password",msgstr:["conferma password"]},create:{msgid:"create",msgstr:["crea"]},"create new":{msgid:"create new",msgstr:["crea nuovo"]},"current password":{msgid:"current password",msgstr:["password corrente"]},download:{msgid:"download",msgstr:[""]},id:{msgid:"id",msgstr:[""]},"last modified":{msgid:"last modified",msgstr:["ultima modifica"]},modified:{msgid:"modified",msgstr:["modificato"]},"move to":{msgid:"move to",msgstr:["sposta in"]},"new password":{msgid:"new password",msgstr:["nuova password"]},objects:{msgid:"objects",msgstr:["oggetti"]},of:{msgid:"of",msgstr:["di"]},open:{msgid:"open",msgstr:[""]},original:{msgid:"original",msgstr:["originale"]},position:{msgid:"position",msgstr:["posizione"]},reload:{msgid:"reload",msgstr:["ricarica"]},remove:{msgid:"remove",msgstr:["rimuovi"]},status:{msgid:"status",msgstr:["stato"]},title:{msgid:"title",msgstr:["titolo"]},"translation of":{msgid:"translation of",msgstr:["traduzione di"]},type:{msgid:"type",msgstr:["tipo"]},undo:{msgid:"undo",msgstr:[""]},"undo remove":{msgid:"undo remove",msgstr:["annulla rimozione"]},"view file":{msgid:"view file",msgstr:["mostra file"]},"www.bedita.com":{msgid:"www.bedita.com",msgstr:[""]}}}}},,function(s,e,t){},function(s,e,t){"use strict";t.r(e);var i=t(0),r=t.n(i);r.a.filter("humanize",function(s){return s.split("_").map(function(s){return s.charAt(0).toUpperCase()+s.substring(1)}).join(" ")});t(10),t(20);var o=t(9),a=t(3),n={install(s){s.directive("datepicker",{inserted(e,i,r){const o=r.data&&r.data.attrs;Promise.all([t.e("vendors/async/flatpickr"),t.e("vendors/async/moment"),t.e("vendors"),t.e("menu")]).then(t.bind(null,86)).then(s=>s.default).then(t=>{new(s.extend(t))({propsData:{attrs:o,el:e}}).$mount()})}})}},m={install(s){s.directive("jsoneditor",{inserted(e){Promise.all([t.e("vendors/async/jsoneditor"),t.e("vendors"),t.e("tree-list")]).then(t.bind(null,87)).then(s=>s.default).then(t=>{new(s.extend(t))({propsData:{el:e}}).$mount()})}})}},d={install(s){s.directive("richeditor",{inserted(e){t.e("menu").then(t.bind(null,88)).then(s=>s.default).then(t=>{new(s.extend(t))({propsData:{el:e}}).$mount()})}})}},g={install(s,e){s.prototype.$helpers={buildViewUrl:s=>`${BEDITA.base}/view/${s}`,forceDownload(s,e){let t=document.createElement("a");t.download=e,t.href=s,t.click()},downloadResource(s,e){e||(e=s.split("\\").pop().split("/").pop());const t={headers:new Headers({Origin:location.origin}),mode:"cors"};fetch(s,t).then(s=>s.blob()).then(s=>{let t=window.URL.createObjectURL(s);this.forceDownload(t,e)}).catch(s=>console.error(s))}}}},l=t(8),c=t(1);const u=new r.a({el:"main",components:{PanelView:a.b,ModulesIndex:()=>t.e("vendors").then(t.bind(null,31)),ModulesView:()=>t.e("vendors").then(t.bind(null,40)),TrashIndex:()=>t.e("tree-list").then(t.bind(null,77)),TrashView:()=>t.e("tree-list").then(t.bind(null,78)),ImportView:()=>t.e("tree-list").then(t.bind(null,79)),ModelIndex:()=>t.e("menu").then(t.bind(null,80)),RelationsAdd:()=>Promise.all([t.e("vendors"),t.e("relations-add")]).then(t.bind(null,81)),EditRelationParams:()=>t.e("edit-relation-params").then(t.bind(null,82)),FilterBoxView:()=>t.e("filter-box-view").then(t.bind(null,41)),FilterTypeView:()=>t.e("menu").then(t.bind(null,83)),MainMenu:()=>t.e("menu").then(t.bind(null,84)),FlashMessage:()=>t.e("tree-list").then(t.bind(null,85)),UploadFilesView:()=>Promise.all([t.e("vendors/async/axios"),t.e("tree-list"),t.e("upload-files-view")]).then(t.bind(null,91))},data:()=>({vueLoaded:!1,urlPagination:"",searchQuery:"",pageSize:"",page:"",sort:"",dataChanged:!1,urlFilterQuery:{q:"",filter:{}},pagination:{page:"",page_size:""},selectedTypes:[]}),provide:()=>({getCSFRToken:(...s)=>BEDITA.csrfToken}),beforeCreate(){r.a.use(m),r.a.use(n),r.a.use(d),r.a.use(g),o.a.loadBeditaPlugins()},created(){this.vueLoaded=!0,this.dataChanged=new Map,this.loadUrlParams();let s=document.querySelector("html").classList;a.a.listen("panel:requested",null,()=>{s.add("is-clipped")}),a.a.listen("panel:closed",null,()=>{s.remove("is-clipped")})},watch:{pageSize(s){this.pagination.page_size=s}},mounted:function(){this.$nextTick(function(){this.alertBeforePageUnload(BEDITA.template)})},methods:{onFilterObjects(s){this.urlFilterQuery=s,this.page="",this.applyFilters(this.urlFilterQuery)},onUpdatePageSize(s){this.pageSize=s,this.page="",this.applyFilters(this.urlFilterQuery)},onUpdateCurrentPage(s){this.page=s,this.applyFilters(this.urlFilterQuery)},onUpdateQueryTypes(s){this.selectedTypes=s},pageClick(s){},loadUrlParams(){if(window.location.search){const s=window.location.search,e=/[?&]q=([^&#]*)/g;let t=s.match(e);t&&t.length&&(t=t.map(s=>s.replace(e,"$1")),this.urlFilterQuery.q=t[0]);const i=/[?&]filter(\[.*?\])=([^&#]*)/g,r=/\[(.*?)\]/g;let o={};for(;t=i.exec(s);)if(t&&3===t.length){const s=t[1],e=t[2];let i=[],a=[];for(;a=r.exec(s);)i.push(a[1]);const n=i.reverse().reduce((s,e)=>{let t={};return t[e]=s,t},e);o=Object(l.a)(o,n)}this.urlFilterQuery.filter=o;const a=/[?&]page_size=([^&#]*)/g;(t=s.match(a))&&t.length&&(t=t.map(s=>s.replace(a,"$1")),this.pageSize=this.isNumeric(t[0])?t[0]:"");const n=/[?&]page=([^&#]*)/g;(t=s.match(n))&&t.length&&(t=t.map(s=>s.replace(n,"$1")),this.page=this.isNumeric(t[0])?t[0]:"");const m=/[?&]sort=([^&#]*)/g;(t=s.match(m))&&t.length&&(t=t.map(s=>s.replace(m,"$1")),this.sort=t[0])}},buildUrlParams(s){let e=`${window.location.origin}${window.location.pathname}`;const t=Object.keys(s);if(t&&t.length){let i=[];t.forEach(e=>{if(s[e]&&""!==s[e]){const t=s[e];if("filter"===e){Object.keys(t).forEach(s=>{if("object"==typeof t[s]){const e=t[s];Object.keys(e).forEach(t=>{""!==e[t]&&i.push(`filter[${s}][${t}]=${e[t]}`)})}else""!==t[s]&&i.push(`filter[${s}]=${t[s]}`)})}else i.push(`${e}=${t}`)}}),e+=i.length?"?":"",e+=i.join("&")}return e},resetFilters(){this.page="",this.pageSize="";this.applyFilters({filter:{},q:""})},applyFilters(s){let e=this.buildUrlParams({q:s.q,filter:s.filter,page_size:this.pageSize,page:this.page,sort:this.sort});window.location.replace(e)},alertBeforePageUnload(s){this.$el.addEventListener("focusin",s=>{const e=s.target,t=e&&e.form;if(t&&"true"===t.getAttribute("check-changes")&&void 0===e.dataset.originalValue)if("INPUT"===e.nodeName)if("radio"===e.type){const s=e.name,t=document.querySelectorAll(`input[name=${s}]`),i=document.querySelector(`input[name=${s}]:checked`);t.forEach(s=>s.dataset.originalValue=i.value)}else if("checkbox"===e.type){const s=e.name;if(s){const t=document.querySelectorAll(`input[name=${s}]:checked`);e.dataset.originalValue=JSON.stringify(t)}}else e.dataset.originalValue=e.value;else"TEXTAREA"===e.nodeName&&(e.dataset.originalValue=e.value)},!0),this.$el.addEventListener("change",s=>{const e=s.target,t=e&&e.form,i=s.detail;if(void 0!==i&&i.id)this.dataChanged.set(i.id,{changed:i.isChanged});else{if(t&&"true"===t.getAttribute("check-changes")&&e.name){const s=e.name,t=e.form.getAttribute("id"),i=e.id,r=e.dataset.originalValue;let o=e.value,a=`${t}#${i}`;if("radio"===e.type||"checkbox"===e.type){if("checkbox"===e.type){const e=document.querySelectorAll(`input[name=${s}]:checked`);o=JSON.stringify(e)}a=`${t}#${s}`}if(!a||""===a)return!0;this.dataChanged.set(a,{changed:o!==r})}}}),this.$el.addEventListener("submit",s=>{const e=s.target;if(e){let t="";if(e.action.endsWith("/trash/delete")?t=c["t"]`If you confirm, this data will be gone forever`:e.action.endsWith("/delete")&&(t=c["t"]`Do you really want to trash the object?`),u.dataChanged.clear(),t&&!confirm(t))return void s.preventDefault()}}),window.onbeforeunload=function(s){let e=!1;for(const[s,t]of u.dataChanged)if(t.changed){e=!0;break}if(e)return"There are unsaved changes, are you sure you want to leave page?"}},isNumeric:s=>!isNaN(s)}});window._vueInstance=u}],[[11,"manifest","vendors"]]]);