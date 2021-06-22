import*as e from"react";import{createContext as n,useState as t,useContext as r}from"react";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var a=function(){return(a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},u="undefined"!=typeof navigator?navigator.language.split("-")[0]:null,o=n({locale:"",setLocale:function(){return null},languages:{},defaultLanguage:""});function l(n){var r=n.children,a=n.languages,l=n.defaultLanguage,i=n.detectBrowserLanguage,c=t(i&&u?u:l),g=c[0],f=c[1];return e.createElement(o.Provider,{value:{locale:g,setLocale:f,languages:a,defaultLanguage:l}},r)}function i(e,n){var t=r(o),u=t.locale,l=t.languages,i=t.defaultLanguage,c=l[u]?u:i,g=l[c],f=e;if(n&&Object.keys(n).includes("count")){var s=new Intl.PluralRules(c).select(n.count);f=0===n.count?e+".zero":"other"===s?e+".many":e+"."+s}if(f.split(".").forEach((function(e){if(g[e])return g=g[e]})),"string"!=typeof g)return console.warn("Talkr bot: Missing translation for "+e),null;var p=n&&Object.entries(n).reduce((function(e,n){var t;return a(a({},e),((t={})[n[0]]=n[1].toString(),t))}),{});return p?g.split("__").map((function(e){return p[e]?p[e]:e})).join(""):g}function c(){return r(o)}export{i as T,l as Talkr,c as useLocale};
