/** @license
 * Copyright (c) 2013-2017 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(a){return function(){return a}},b=function(a,b){var c=a.src.indexOf("?");return a.src.indexOf(b)+b.length===c},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,b){if(a){var d=a.getAttribute("data-main");if(d){a.removeAttribute("data-main");var e=c(d);if("function"==typeof e)return e;console.warn("attribute on "+b+" does not reference a global method")}else console.warn("no data-main attribute found on "+b+" script tag")}};!function(a,c){var e=d(document.currentScript,c);if(e)return e;for(var f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(b(f[g],a)){var h=d(f[g],c);if(h)return h}throw"cannot locate "+c+" script tag"}("help_zh.js","help for language zh")({version:"2.4.0",about:a('\ufeff<div role=presentation class="ephox-polish-help-article ephox-polish-help-about">\n  <div class="ephox-polish-help-h1" role="heading" aria-level="1">\u5173\u4e8e</div>\n  <p>Textbox.io\u662f\u7528\u4e8e\u5728\u7ebf\u5e94\u7528\u7a0b\u5e8f\u4e2d\u521b\u5efa\u4f18\u7f8e\u5185\u5bb9\u7684\u201c\u6240\u89c1\u5373\u6240\u5f97\u201d(WYSIWYG)\u7684\u5de5\u5177\u3002\u65e0\u8bba\u662f\u5728\u7f51\u7edc\u793e\u7fa4\u3001\u535a\u5ba2\u3001\u7535\u90ae\uff0c\u8fd8\u662f\u5f53\u4e2d\u4efb\u4f55\u9014\u5f84\uff0cTextbox.io\u90fd\u80fd\u8ba9\u4eba\u4eec\u5728\u7f51\u7edc\u4e0a\u53d1\u8868\u81ea\u5df1\u7684\u5fc3\u58f0\u3002</p>\n  <p>&nbsp;</p>\n  <p>Textbox.io @@FULL_VERSION@@</p>\n  <p>\u5ba2\u6237\u677f\u5757@@CLIENT_VERSION@@</p>\n  <p class="ephox-polish-help-integration">\u6574\u5408@@INTEGRATION_TYPE@@\u3001\u7248\u672c@@INTEGRATION_VERSION@@</p>\n  <p>&nbsp;</p>\n  <p>2017\u5e74Ephox\u516c\u53f8\u7248\u6743\u6240\u6709\u3002\u4fdd\u7559\u6240\u6709\u6743\u5229\u3002</p>\n  <p><a href="javascript:void(0)" class="ephox-license-link">\u7b2c\u4e09\u65b9\u6388\u6743</a></p>\n</div>'),accessibility:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">\u952e\u76d8\u5bfc\u822a</div>\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\u542f\u52a8\u952e\u76d8\u5bfc\u822a</div>\n  <p>\u82e5\u8981\u542f\u7528\u5de5\u5177\u680f\u4e0a\u7684\u952e\u76d8\u5bfc\u822a\uff0c\u53ef\u4ee5\u6309Windows\u7684F10\u6216Mac OSX \u4e0a\u7684F10\u3002\u5728\u5de5\u5177\u680f\u4e0a\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee\u5c06\u4eae\u663e\u4e3a\u84dd\u8272\u8f6e\u5ed3\u7ebf\uff0c\u6307\u51fa\u9009\u5b9a\u72b6\u6001\u3002 </p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\u7ec4\u4e4b\u95f4\u79fb\u52a8</div>\n  <p>\u5de5\u5177\u680f\u4e2d\u7684\u6309\u94ae\u6309\u7c7b\u4f3c\u52a8\u4f5c\u7ec4\u5206\u5f00\u3002\u5f53\u952e\u76d8\u5bfc\u822a\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u65f6\uff0c\u6309tab\u952e\u4f1a\u628a\u9009\u9879\u79fb\u52a8\u5230\u4e0b\u4e00\u7ec4\uff0c\u540c\u65f6\u6309shift\u548ctab\u952e\uff0c\u5c06\u628a\u9009\u9879\u8fd4\u56de\u5230\u524d\u4e00\u4e2a\u7ec4\u3002\u6309\u6700\u540e\u4e00\u7ec4\u4e0a\u7684tab\u952e\uff0c\u5c06\u5faa\u73af\u56de\u5230\u7b2c\u4e00\u7ec4\u6309\u94ae\u3002</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\u5728\u9879\u76ee\u6216\u6309\u94ae\u4e4b\u95f4\u79fb\u52a8</div>\n  <p>\u5728\u9879\u76ee\u4e4b\u95f4\u6765\u56de\u79fb\u52a8\uff0c\u8bf7\u4f7f\u7528\u65b9\u5411\u952e\u3002\u9879\u76ee\u5c06\u5728\u5176\u7ec4\u5185\u5faa\u73af\u3002\u8981\u8df3\u8f6c\u5230\u4e0b\u4e00\u7ec4\uff0c\u6309tab\u952e\u3002\u6309\u65b9\u5411\u952e\uff0c\u8fd4\u56de\u5230\u539f\u7ec4\u3002</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\u6267\u884c\u6307\u4ee4</div>\n  <p>\u8981\u6267\u884c\u6307\u4ee4\uff0c\u8bf7\u5bfc\u822a\u5230\u6240\u9700\u6309\u94ae\u9009\u9879\u5e76\u70b9\u51fbspace\u6216enter\u952e\u3002</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\u6253\u5f00\u3001\u5bfc\u822a\u548c\u5173\u95ed\u83dc\u5355</div>\n  <p>\u5f53\u5de5\u5177\u680f\u6309\u94ae\u5305\u542b\u4e00\u4e2a\u83dc\u5355\u65f6\uff0c\u6309space\u6216enter\u952e\u5c06\u6253\u5f00\u83dc\u5355\u3002\u83dc\u5355\u6253\u5f00\u65f6\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee\u5c06\u88ab\u9009\u4e2d\uff0c\u4f7f\u7528\u65b9\u5411\u952e\u5bfc\u822a\u83dc\u5355\u3002\u4e0a\u79fb\u6216\u4e0b\u79fb\u83dc\u5355\uff0c\u5206\u522b\u6309\u5411\u4e0a\u6216\u5411\u4e0b\u65b9\u5411\u952e\u3002\u5728\u5b50\u83dc\u5355\u5185\u7684\u52a8\u4f5c\u662f\u76f8\u540c\u7684\u3002</p>\n\n  <p>\u6709\u5b50\u83dc\u5355\u7684\u83dc\u5355\u9879\u76ee\u662f\u7531v\u5f62\u7b26\u53f7\u8868\u793a\u7684\u3002\u4f7f\u7528\u5bf9\u5e94v\u5f62\u65b9\u5411\u7684\u65b9\u5411\u952e\u5c06\u5c55\u5f00\u5b50\u83dc\u5355\uff0c\u800c\u5728\u76f8\u53cd\u65b9\u5411\u7684\u65b9\u5411\u952e\u5c06\u5173\u95ed\u5b50\u83dc\u5355\u3002</p>\n\n  <p>\u82e5\u8981\u5173\u95ed\u4efb\u4f55\u6d3b\u52a8\u7684\u83dc\u5355\uff0c\u8bf7\u70b9\u51fb\u9000\u51fa\u952e\u3002\u5173\u95ed\u83dc\u5355\u65f6\uff0c\u9009\u9879\u5c06\u6062\u590d\u5230\u5176\u4ee5\u524d\u7684\u9009\u9879\u3002</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\u7f16\u8f91\u6216\u5220\u9664\u8d85\u94fe\u63a5</div>\n\n  <p>\u82e5\u8981\u7f16\u8f91\u6216\u5220\u9664\u94fe\u63a5\uff0c\u5bfc\u822a\u5230\u63d2\u5165\u83dc\u5355\uff0c\u5e76\u9009\u62e9\u63d2\u5165\u94fe\u63a5\u3002\u7f16\u8f91\u5668\u5c06\u663e\u793a\u7f16\u8f91\u94fe\u63a5\u5bf9\u8bdd\u6846\u3002 </p>\n\n  <p>\u901a\u8fc7\u5728\u66f4\u65b0\u94fe\u63a5\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u65b0\u7684url\u5e76\u6309enter\u952e\uff0c\u7f16\u8f91\u94fe\u63a5\u3002\u901a\u8fc7\u9009\u62e9\u5220\u9664\u6309\u94ae\uff0c\u4ece\u6587\u4ef6\u4e2d\u5220\u9664\u8be5\u94fe\u63a5\u3002\u4e0d\u9700\u8981\u505a\u51fa\u4efb\u4f55\u66f4\u6539\u800c\u9000\u51fa\u5bf9\u8bdd\u6846\uff0c\u8bf7\u6309esc\u952e\u3002</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\u66f4\u6539\u5b57\u4f53\u5c3a\u5bf8\u548c\u56fe\u8868\u8fb9\u6846\u5c3a\u5bf8</div>\n\n  <p>\u901a\u8fc7\u5bfc\u822a\u5230\u5b57\u4f53\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u5b57\u4f53\u5c3a\u5bf8\u6765\u66f4\u6539\u5b57\u4f53\u5c3a\u5bf8\u3002\u7f16\u8f91\u5668\u663e\u793a\u83dc\u5355\u4e2d\u7684\u5c3a\u5bf8\u5bf9\u8bdd\u6846\uff0c\u5e76\u5c06\u7126\u70b9\u8bbe\u7f6e\u5230\u5bf9\u8bdd\u6846\u3002</p>\n\n  <p>\u901a\u8fc7\u5bfc\u822a\u5230\u56fe\u8868\u8fb9\u6846\u5c3a\u5bf8\u5de5\u5177\u680f\u9879\u76ee\u5e76\u9009\u62e9\u56fe\u8868\u8fb9\u6846\u5c3a\u5bf8\uff0c\u66f4\u6539\u8fb9\u6846\u5c3a\u5bf8\u3002\u7f16\u8f91\u5668\u663e\u793a\u83dc\u5355\u4e2d\u7684\u5c3a\u5bf8\u5bf9\u8bdd\u6846\uff0c\u5e76\u5c06\u7126\u70b9\u8bbe\u7f6e\u5230\u5bf9\u8bdd\u6846\u3002\u5907\u6ce8\ufe30\u56fe\u8868\u8fb9\u6846\u5c3a\u5bf8\u5de5\u5177\u680f\u9879\u76ee\u53ea\u5728\u4f4d\u4e8e\u56fe\u8868\u5185\u7684\u6e38\u6807\u65f6\u624d\u63d0\u4f9b\u3002</p>\n\n  <p>\u5728\u5c3a\u5bf8\u5bf9\u8bdd\u6846\u4e2d\uff0c\u6309tab\u952e\u5c06\u6240\u9009\u5185\u5bb9\u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u63a7\u5236\u9009\u9879\u3002\u6309\u4f4fshift+tab\u952e\u5c06\u6240\u9009\u5185\u5bb9\u79fb\u52a8\u5230\u524d\u4e00\u4e2a\u63a7\u5236\u9879\u3002</p>\n\n  <p>\u901a\u8fc7\u5728\u5c3a\u5bf8\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u65b0\u503c\u6765\u4fee\u6539\u5c3a\u5bf8\u3002\u4f8b\u5982\uff1a14px\u6216\u80051em\u3002\u8981\u63d0\u4ea4\u66f4\u6539\uff0c\u6309enter\u952e\u3002\u8bf7\u6ce8\u610f\uff0c\u6309enter\u952e\u5173\u95ed\u5bf9\u8bdd\u6846\uff0c\u5c06\u6ce8\u610f\u529b\u8fd4\u56de\u5230\u6587\u4ef6\u3002</p>\n\n  <p>\u901a\u8fc7\u542f\u52a8\u589e\u52a0\u5c3a\u5bf8\u6216\u51cf\u5c0f\u5c3a\u5bf8\u6309\u94ae\uff0c\u6765\u66f4\u6539\u5c3a\u5bf8\uff0c\u800c\u65e0\u9700\u9000\u51fa\u8be5\u5bf9\u8bdd\u6846\u3002\u7528\u589e\u52a0\u5c3a\u5bf8\u6216\u51cf\u5c0f\u5c3a\u5bf8\u6309\u94ae\u6539\u53d8\u5c3a\u5bf8\uff0c\u5c06\u8fc5\u901f\u6539\u53d8\u9009\u5b9a\u7684\u5143\u7d20\u5c3a\u5bf8\u5e76\u4fdd\u6301\u5f53\u524d\u5355\u4f4d\u503c\u3002\u901a\u8fc7\u6309esc\u952e\u9000\u51fa\u5c3a\u5bf8\u5bf9\u8bdd\u6846\u3002</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\u88c1\u526a\u56fe\u50cf</div>\n\n  <p>\u82e5\u8981\u8bbf\u95ee\u88c1\u526a\u529f\u80fd\uff0c\u8bf7\u9009\u62e9\u663e\u793a\u5728\u5de5\u5177\u680f\u4e0a\u7684\u56fe\u50cf\uff0c\u663e\u793a\u56fe\u50cf\u64cd\u4f5c\u3002\u8fd9\u4e9b\u64cd\u4f5c\u5728\u5185\u5bb9\u83dc\u5355\u4e2d\u4e5f\u63d0\u4f9b\u3002\u4e00\u65e6\u542f\u52a8\u4e86\u88c1\u526a\uff0c\u88c1\u526a\u906e\u7f69\u5c06\u5b9a\u4f4d\u5728\u56fe\u50cf\u9876\u90e8\u5e76\u5c06\u9009\u4e2d\u5de6\u4e0a\u89d2\u3002</p>\n\n  <p>\u4f7f\u7528\u9009\u9879\u952e\u5bfc\u822a\u3002\u53ef\u4ee5\u9009\u62e94\u4e2a\u89d2\u843d\u7684\u4efb\u4f55\u4e00\u4e2a\u89d2\u4ee5\u53ca\u6574\u4f53\u88c1\u526a\u906e\u7f69\u6846\u3002\u6bcf\u4e2a\u89d2\u843d\u53ef\u4ee5\u5355\u72ec\u5b9a\u4f4d\u6216\u901a\u8fc7\u79fb\u52a8\u6574\u4f53\u88c1\u526a\u906e\u7f69\u6846\u540c\u65f6\u79fb\u52a8\u5404\u4e2a\u89d2\u843d\u3002</p>\n\n  <p>\u5728\u56fe\u50cf\u4e0a\u79fb\u52a8\u6240\u9009\u5185\u5bb9\u662f\u7528\u65b9\u5411\u952e\u3002\u6bcf\u6b21\u6309\u65b9\u5411\u952e\u5c06\u79fb\u52a810\u4e2a\u50cf\u7d20\uff0c\u82e5\u8981\u5c0f\u91cf\u79fb\u52a8\uff0c\u6309shift\u952e\u7684\u540c\u65f6\u6309\u65b9\u5411\u952e\uff0c\u6bcf\u6309\u4e00\u6b21\u79fb\u52a8\u4e00\u4e2a\u50cf\u7d20\u3002</p>\n\n  <p>\u8981\u628a\u88c1\u526a\u5e94\u7528\u5230\u56fe\u50cf\uff0c\u6309enter\u952e\u3002</p>\n\n  <p>\u8981\u53d6\u6d88\u88c1\u526a\uff0c\u5bf9\u56fe\u50cf\u4e0d\u505a\u4efb\u4f55\u6539\u52a8\uff0c\u8bf7\u6309ESC\u952e\u3002</p>\n\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-shortcuts">\n      <caption>\u952e\u76d8\u5bfc\u822a</caption>\n      <thead>\n        <tr>\n          <th scope="col">\u52a8\u4f5c</th>\n          <th scope="col">Windows</th>\n          <th scope="col">Mac OS</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>\u6fc0\u6d3b\u5de5\u5177\u680f</td>\n        <td>F10</td>\n        <td>ALT + F10</td>\n      </tr>\n      <tr>\n        <td>\u9009\u62e9\u201c\u4e0b\u4e00\u4e2a\u5c0f\u7ec4\u201d/\u201c\u4e0a\u4e00\u4e2a\u5c0f\u7ec4\u201d\u6309\u94ae</td>\n        <td>\u2190 \u6216 \u2192</td>\n        <td>\u2190 \u6216 \u2192</td>\n      </tr>\n      <tr>\n        <td>\u79fb\u52a8\u81f3\u4e0b\u4e00\u4e2a\u5c0f\u7ec4</td>\n        <td>TAB</td>\n        <td>TAB</td>\n      </tr>\n      <tr>\n        <td>\u79fb\u52a8\u81f3\u4e0a\u4e00\u4e2a\u5c0f\u7ec4</td>\n        <td>SHIFT + TAB</td>\n        <td>SHIFT + TAB</td>\n      </tr>\n      <tr>\n        <td>\u6267\u884c\u547d\u4ee4</td>\n        <td>SPACE\u6216ENTER\u952e</td>\n        <td>SPACE\u6216ENTER\u952e</td>\n      </tr>\n      <tr>\n        <td>\u6253\u5f00\u4e3b\u83dc\u5355</td>\n        <td>SPACE\u6216ENTER\u952e</td>\n        <td>SPACE\u6216ENTER\u952e</td>\n      </tr>\n      <tr>\n        <td>\u6253\u5f00/\u6269\u5c55\u5b50\u83dc\u5355</td>\n        <td>SPACE\u6216ENTER\u952e\u6216\u2192</td>\n        <td>SPACE\u6216ENTER\u952e\u6216\u2192</td>\n      </tr>\n      <tr>\n        <td>\u9009\u62e9\u4e0b\u4e00\u4e2a/\u4e0a\u4e00\u4e2a\u83dc\u5355\u9879</td>\n        <td>\u2193\u6216\u2191</td>\n        <td>\u2193\u6216\u2191</td>\n      </tr>\n      <tr>\n        <td>\u5173\u95ed\u83dc\u5355</td>\n        <td>ESC</td>\n        <td>ESC</td>\n      </tr>\n      <tr>\n        <td>\u5173\u95ed/\u6298\u8fed\u5b50\u83dc\u5355</td>\n        <td>\u6309ESC\u952e\u6216\u2190</td>\n        <td>\u6309ESC\u952e\u6216\u2190</td>\n      </tr>\n      <tr>\n        <td>\u79fb\u52a8\u56fe\u50cf\u88c1\u526a\u9009\u9879</td>\n        <td>\u2190\u6216\u2192\u6216\u2193\u6216\u2191</td>\n        <td>\u2190\u6216\u2192\u6216\u2193\u6216\u2191</td>\n      </tr>\n      <tr>\n        <td>\u7cbe\u786e\u79fb\u52a8\u56fe\u50cf\u88c1\u526a\u9009\u9879</td>\n        <td>\u6309\u4f4fshift\u952e\u540c\u65f6\u79fb\u52a8</td>\n        <td>\u6309\u4f4fshift\u952e\u540c\u65f6\u79fb\u52a8</td>\n      </tr>\n      <tr>\n        <td>\u9002\u7528\u88c1\u526a</td>\n        <td>ENTER</td>\n        <td>ENTER</td>\n      </tr>\n      <tr>\n        <td>\u53d6\u6d88\u88c1\u526a</td>\n        <td>ESC</td>\n        <td>ESC</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n'),a11ycheck:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">\u8fdb\u5165\u68c0\u67e5</div>\n  <p>\uff08\u82e5\u542f\u7528\uff09\u8fdb\u5165\u68c0\u67e5\u5de5\u5177\u53ef\u4ee5\u8bc6\u522bHTML\u6587\u4ef6\u4e2d\u7684\u4ee5\u4e0b\u8fdb\u5165\u95ee\u9898\u3002</p>\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-a11ycheck-table">\n      <caption>\u95ee\u9898\u5b9a\u4e49</caption>\n      <thead>\n        <tr>\n          <th scope="col">\u95ee\u9898</th>\n          <th scope="col">WCAG\uff08\u7f51\u7ad9\u5185\u5bb9\u53ef\u8bbf\u95ee\u6027\u6307\u5357\uff09</th>\n          <th scope="col">\u8bf4\u660e</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>\u56fe\u50cf\u5fc5\u987b\u6709\u4e00\u4e2a\u53ef\u9009\u6587\u5b57\u8bf4\u660e</td>\n        <td>1.1.1</td>\n        <td>\u56fe\u50cf\u5fc5\u987b\u6709\u4e00\u4e2a\u53ef\u9009\u6587\u5b57\u503c\u8bbe\u7f6e\uff0c\u5411\u6709\u89c6\u89c9\u969c\u788d\u7684\u7528\u6237\u8bf4\u660e\u56fe\u50cf\u4e3b\u9898\u3002 </td>\n      </tr>\n      <tr>\n        <td>\u53ef\u9009\u6587\u5b57\u4e0d\u80fd\u4e0e\u56fe\u50cf\u6587\u4ef6\u540d\u76f8\u540c</td>\n        <td>1.1.1</td>\n        <td>\u5728\u53ef\u9009\u6587\u5b57\u503c\u5185\u907f\u514d\u4f7f\u7528\u56fe\u50cf\u6587\u4ef6\u540d\u3002\u9009\u62e9\u8bf4\u660e\u56fe\u50cf\u4e3b\u9898\u7684\u53ef\u9009\u6587\u5b57\u503c\u3002</td>\n      </tr>\n      <tr>\n        <td>\u56fe\u8868\u5fc5\u987b\u6709\u8bf4\u660e\u6587\u5b57</td>\n        <td>1.3.1</td>\n        <td>\u56fe\u8868\u5e94\u5177\u6709\u7b80\u77ed\u7684\u8bf4\u660e\u6587\u5b57\uff0c\u6307\u51fa\u56fe\u8868\u7684\u5185\u5bb9\u3002</td>\n      </tr>\n      <tr>\n        <td>\u590d\u6742\u7684\u56fe\u8868\u5e94\u8be5\u6709\u6982\u62ec\u8bf4\u660e</td>\n        <td>1.3.1</td>\n        <td>\u5177\u6709\u590d\u6742\u7ed3\u6784\u7684\u56fe\u8868\uff08\u8de8\u8d8a\u591a\u4e2a\u884c\u6216\u5217\u7684\u50a8\u5b58\u683c\uff09\u5e94\u5305\u542b\u6982\u62ec\u8bf4\u660e\uff0c\u63cf\u8ff0\u56fe\u8868\u7684\u7ed3\u6784\u3002 </td>\n      </tr>\n      <tr>\n        <td>\u56fe\u8868\u8bf4\u660e\u6587\u5b57\u4e0d\u80fd\u6709\u76f8\u540c\u7684\u503c</td>\n        <td>1.3.1</td>\n        <td>\u56fe\u8868\u8bf4\u660e\u6587\u5b57\u5e94\u63cf\u8ff0\u56fe\u8868\u7684\u5185\u5bb9\uff0c\u800c\u56fe\u8868\u6982\u62ec\u8bf4\u660e\u5e94\u63cf\u8ff0\u590d\u6742\u56fe\u8868\u7684\u7ed3\u6784\u3002 </td>\n      </tr>\n      <tr>\n        <td>\u56fe\u8868\u5fc5\u987b\u81f3\u5c11\u6709\u4e00\u4e2a\u6807\u9898\u50a8\u5b58\u683c</td>\n        <td>1.3.1</td>\n        <td>\u56fe\u8868\u5e94\u5305\u62ec\u9002\u5f53\u7684\u884c\u6216\u5217\u6807\u9898\uff0c\u63cf\u8ff0\u884c\u6216\u5217\u7684\u5185\u5bb9\u3002<br/><a href="http://webaim.org/techniques/tables/data#th" target="_blank">\u66f4\u591a\u5173\u4e8e\u8fd9\u4e00\u4e3b\u9898\u7684\u4fe1\u606f(\u8bf7\u53c2\u9605webaim.org)\u3002</a> </td>\n      </tr>\n      <tr>\n        <td>\u56fe\u8868\u6807\u9898\u5fc5\u987b\u5e94\u7528\u5230\u884c\u6216\u5217</td>\n        <td>1.3.1</td>\n        <td>\u56fe\u8868\u6807\u9898\u5fc5\u987b\u4e0e\u63cf\u8ff0\u7684\u884c\u6216\u5217\u76f8\u5173\u8054\u3002<br/><a href="http://webaim.org/techniques/tables/data#th" target="_blank">\u66f4\u591a\u5173\u4e8e\u8fd9\u4e00\u4e3b\u9898\u7684\u4fe1\u606f(\u8bf7\u53c2\u9605webaim.org)\u3002</a> </td>\n      </tr>\n      <tr>\n        <td>\u8fd9\u4e00\u6bb5\u770b\u8d77\u6765\u50cf\u4e00\u4e2a\u6807\u9898\u3002\u5982\u679c\u5b83\u662f\u4e00\u4e2a\u6807\u9898\uff0c\u8bf7\u9009\u62e9\u4e00\u4e2a\u6807\u9898\u7ea7\u522b\u3002</td>\n        <td>1.3.1</td>\n        <td>\u4f7f\u7528\u6807\u9898\u628a\u6587\u4ef6\u5206\u6210\u6863\u3002\u5728\u6807\u9898\u4f4d\u7f6e\u907f\u514d\u4f7f\u7528\u683c\u5f0f\u5316\u6bb5\u843d\u3002<br/><a href="http://webaim.org/techniques/semanticstructure/#correctly" target="_blank">\u66f4\u591a\u5173\u4e8e\u8fd9\u4e00\u4e3b\u9898\u7684\u4fe1\u606f(\u8bf7\u53c2\u9605webaim.org)\u3002</a> </td>\n      </tr>\n      <tr>\n        <td>\u6807\u9898\u5fc5\u987b\u6309\u987a\u5e8f\u5e94\u7528\u3002\u4f8b\u5982\ufe30\u6807\u98981\u5e94\u4f9d\u5e8f\u8ddf\u968f\u6807\u98982\u3001\u6807\u98983\u3002</td>\n        <td>1.3.1</td>\n        <td>\u968f\u540e\u7684\u6587\u4ef6\u6807\u9898\u5e94\u8be5\u51fa\u73b0\u5206\u5c42\uff0c\u51fa\u73b0\u5347\u5e8f\u6216\u7b49\u5e8f\u3002<br/><a href="http://webaim.org/techniques/semanticstructure/#contentstructure" target="_blank">\u66f4\u591a\u5173\u4e8e\u8fd9\u4e00\u4e3b\u9898\u7684\u4fe1\u606f(\u8bf7\u53c2\u9605webaim.org)\u3002</a> </td>\n      </tr>\n      <tr>\n        <td>\u4f7f\u7528\u5217\u8868\u6807\u8bb0\u5217\u8868</td>\n        <td>1.3.1</td>\n        <td>\u786e\u4fdd\u9879\u76ee\u5217\u8868\u4f7f\u7528HTML\u5217\u8868\u7ed3\u6784\u6765\u8868\u793a\u5217\u8868(<code>&lt;ul&gt;</code>\u6216<code>&lt;ol&gt;</code>\u4e0e<code>&lt;li&gt;</code>)\u3002</td>\n      </tr>\n      <tr>\n        <td>\u6587\u5b57\u5fc5\u987b\u67094.5:1\u7684\u5bf9\u6bd4\u5ea6</td>\n        <td>1.4.3</td>\n        <td>\u6587\u5b57\u53ca\u5176\u80cc\u666f\u5fc5\u987b\u5177\u6709\u5bf9\u6bd4\u5ea6\uff0c\u4ee5\u5229\u4e8e\u89c6\u529b\u8f83\u4f4e\u7684\u4eba\u9605\u8bfb\u3002</td>\n      </tr>\n      <tr>\n        <td>\u5e94\u5408\u5e76\u76f8\u90bb\u7684\u94fe\u63a5\u3002</td>\n        <td>2.4.4</td>\n        <td>\u6307\u5411\u76f8\u540c\u8d44\u6e90\u7684\u76f8\u90bb\u8d85\u94fe\u63a5\uff0c\u5e94\u5408\u5e76\u5230\u5355\u4e00\u8d85\u94fe\u63a5\u5185\u3002</td>\n      </tr>\n    </tbody>\n  </table>\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\u66f4\u591a\u7684\u4fe1\u606f</div>\n  <p>\n    <a href="http://webaim.org/intro/" target="_blank">\u7f51\u7edc\u8fdb\u5165\u7b80\u4ecb(webaim.org)</a> <br/>\n    <a href="http://www.w3.org/WAI/intro/wcag" target="_blank">WCAG 2.0(w3.org)\u7b80\u4ecb</a> <br/>\n    <a href="http://www.section508.gov/" target="_blank">\u300a\u7f8e\u56fd\u5eb7\u590d\u6cd5\u6848\u300b\u7b2c508\u8282(section508.gov)</a>\n  </p>\n</div>'),markdown:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div class="ephox-polish-help-h1" role="heading" aria-level="1">Markdown\u683c\u5f0f\u8bbe\u7f6e</div>\n  <p>\u6807\u8bb0\u662f\u5728\u4e0d\u9700\u8981\u4f7f\u7528\u952e\u76d8\u5feb\u6377\u952e\u6216\u8bbf\u95ee\u83dc\u5355\u65f6\uff0c\u7528\u4e8e \u521b\u5efaHTML\u7ed3\u6784\u548c\u683c\u5f0f\u7684\u8bed\u6cd5\u3002\u4f7f\u7528\u6807\u8bb0\u683c\u5f0f\u5316\u65f6\uff0c\u8bf7\u8f93\u5165\u6240\u9700\u7684\u8bed\u6cd5\uff0c\u7136\u540e\u518d\u6309\u56de\u8f66\u6216\u7a7a\u683c\u952e\u3002</p>\n  <table cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-markdown" aria-readonly="true">\n      <caption>\u952e\u76d8\u683c\u5f0f\u5316\u8bed\u6cd5</caption>\n      <thead>\n        <tr>\n          <th scope="col">\u8bed\u6cd5</th>\n          <th scope="col">HTML\u7ed3\u679c</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td><pre>#\u6700\u5927\u7684\u6807\u9898</pre></td>\n        <td><pre>&lt;h1&gt;\u6700\u5927\u7684\u6807\u9898&lt;/h1&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>##\u66f4\u5927\u7684\u6807\u9898</pre></td>\n        <td><pre>&lt;h2&gt;\u66f4\u5927\u7684\u6807\u9898&lt;/h2&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>###\u5927\u6807\u9898</pre></td>\n        <td><pre>&lt;h3&gt;\u5927\u6807\u9898&lt;/h3&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>####\u6807\u9898</pre></td>\n        <td><pre>&lt;h4&gt;\u6807\u9898&lt;/h4&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>##### \u5c0f\u6807\u9898</pre></td>\n        <td><pre>&lt;h5&gt;\u5c0f\u6807\u9898&lt;/h5&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>######\u6700\u5c0f\u7684\u6807\u9898</pre></td>\n        <td><pre>&lt;h6&gt;\u6700\u5c0f\u7684\u6807\u9898&lt;/h6&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>*\u65e0\u5e8f\u5217\u8868</pre></td>\n        <td><pre>&lt;ul&gt;&lt;li&gt;\u65e0\u5e8f\u5217\u8868&lt;/li&gt;&lt;/ul&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>1. \u6709\u5e8f\u5217\u8868</pre></td>\n        <td><pre>&lt;ol&gt;&lt;li&gt;\u6709\u5e8f\u5217\u8868&lt;/li&gt;&lt;/ol&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>*\u659c\u4f53*</pre></td>\n        <td><pre>&lt;em&gt;\u659c\u4f53&lt;/em&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>**\u7c97\u4f53**</pre></td>\n        <td><pre>&lt;strong&gt;\u7c97\u4f53&lt;/strong&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>---</pre></td>\n        <td><pre>&lt;hr/&gt;</pre></td>\n      </tr>\n    </tbody>\n  </table>\n</div>'),shortcuts:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">\u5feb\u6377\u952e</div>\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-shortcuts">\n    <caption>\u7f16\u8f91\u5668\u6307\u4ee4</caption>\n    <thead>\n      <tr>\n        <th scope="col">\u52a8\u4f5c</th>\n        <th scope="col">Windows</th>\n        <th scope="col">Mac OS</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>\u64a4\u9500</td>\n        <td>CTRL + Z</td>\n        <td>\u2318Z</td>\n      </tr>\n      <tr>\n        <td>\u91cd\u505a</td>\n        <td>CTRL + Y</td>\n        <td>\u2318\u21e7Z</td>\n      </tr>\n      <tr>\n        <td>\u7c97\u4f53</td>\n        <td>CTRL + B</td>\n        <td>\u2318B</td>\n      </tr>\n      <tr>\n        <td>\u659c\u4f53</td>\n        <td>CTRL + I</td>\n        <td>\u2318I</td>\n      </tr>\n      <tr>\n        <td>\u4e0b\u5212\u7ebf</td>\n        <td>CTRL + U</td>\n        <td>\u2318U</td>\n      </tr>\n      <tr>\n        <td>\u7f29\u8fdb</td>\n        <td>CTRL + ]</td>\n        <td>\u2318]</td>\n      </tr>\n      <tr>\n        <td>\u51cf\u5c11\u7f29\u8fdb</td>\n        <td>CTRL + [</td>\n        <td>\u2318[</td>\n      </tr>\n      <tr>\n        <td>\u6dfb\u52a0\u94fe\u63a5</td>\n        <td>CTRL + K</td>\n        <td>\u2318K</td>\n      </tr>\n      <tr>\n        <td>\u5bfb\u627e</td>\n        <td>CTRL + F</td>\n        <td>\u2318F</td>\n      </tr>\n      <tr>\n        <td>\u5168\u5c4f\u6a21\u5f0f(\u5207\u6362)</td>\n        <td>CTRL + SHIFT + F</td>\n        <td>\u2318\u21e7F</td>\n      </tr>\n      <tr>\n        <td>\u5e2e\u52a9\u5bf9\u8bdd\u6846(\u6253\u5f00)</td>\n        <td>CTRL + SHIFT + H</td>\n        <td>\u2303\u2325H</td>\n      </tr>\n      <tr>\n        <td>\u4e0a\u4e0b\u6587\u83dc\u5355(\u6253\u5f00)</td>\n        <td>SHIFT + F10</td>\n        <td>\u21e7F10\u200e\u200f</td>\n      </tr>\n      <tr>\n        <td>\u7f16\u7801\u81ea\u52a8\u5b8c\u6210</td>\n        <td>CTRL + Space</td>\n        <td>\u2303\u7a7a\u683c\u952e</td>\n      </tr>\n      <tr>\n        <td>\u8fdb\u5165\u4ee3\u7801\u89c6\u7a97</td>\n        <td>CTRL + SHIFT + U</td>\n        <td>\u2318\u2325U</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class="ephox-polish-help-note" role="note">*\u5907\u6ce8\uff1a\u7ba1\u7406\u5458\u53ef\u80fd\u4f1a\u7981\u7528\u67d0\u4e9b\u529f\u80fd\u3002</div>\n</div>\n')})}();