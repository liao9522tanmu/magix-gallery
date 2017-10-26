/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-effect/__test__/index',["magix","../../mx-form/index","../count","../dance","mx-dropdown/index"],function(require,exports,module){
/*Magix,Form*/
require("../count");
require("../dance");
require("mx-dropdown/index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Form = require('../../mx-form/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-effect</h2><h3>count</h3><div class=\"B ag\"><input mx-guid=\"g0\u001f\" class=\"an\" mx-view=\"mx-effect/count?to=<%!$eu($$.toNumber)%>\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-effect/count?to=<%@$$.toNumber%>&duration=2000&fixed=2\" style=\"font-size: 30px;line-height: 50px;letter-spacing: 2px\"></div><button class=\"al am s\" type=\"button\" mx-click=\"\u001f\u001echangeNumber({i:true})\">increase number</button><button class=\"al am s\" type=\"button\" mx-click=\"\u001f\u001echangeNumber()\">decrease number</button></div><div class=\"B\"><div>HTML Code:</div><pre>\n&lt;input class=\"input\" mx-view=\"mx-effect/count\" view-to=\"&lt;%@toNumber%&gt;\"&gt;\n&lt;div mx-view=\"mx-effect/count\" view-to=\"&lt;%@toNumber%&gt;\" view-duration=\"2000\" view-fixed=\"2\" style=\"font-size: 30px;line-height: 50px;letter-spacing: 2px;\"&gt;&lt;/div&gt;\n&lt;button class=\"btn btn-brand ml5\" type=\"button\" mx-click=\"changeNumber({i:true})\"&gt;increase number&lt;/button&gt;\n&lt;button class=\"btn btn-brand ml5\" type=\"button\" mx-click=\"changeNumber()\"&gt;decrease number&lt;/button&gt;</pre><div class=\"z\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            toNumber: 20\n        });\n    },\n    'changeNumber&lt;click&gt;'(e) {\n        let me = this;\n        let to = me.updater.get('toNumber');\n        let diff = 300;\n        if (!e.params.i) {\n            diff = -diff;\n        }\n        me.updater.digest({\n            toNumber: to + diff\n        });\n    }\n});</pre></div><h3 class=\"f\">dance</h3><div class=\"B ag\"><div mx-guid=\"g2\u001f\" mx-view=\"mx-effect/dance?value=<%!$eu($$.content)%>&duration=<%!$eu($$.duration)%>&dance=<%!$eu($$.dance)%>\"></div><div mx-guid=\"g3\u001f\" mx-ssid=\"\u001f0\" style=\"width:180px\" mx-change=\"\u001f\u001e_b({c:[{p:'duration',f:{refresh:true},n:'selected'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" mx-view=\"mx-dropdown/index?emptyText=%E5%8D%95%E5%AD%97%E6%95%88%E6%9E%9C%E9%97%B4%E9%9A%94%E6%97%B6%E9%97%B4&selected=<%@$$.duration%>\"><item value=\"10\">10ms</item><item value=\"30\">30ms</item><item value=\"60\">60ms</item><item value=\"90\">90ms</item><item value=\"120\">120ms</item></div><div mx-guid=\"g4\u001f\" mx-ssid=\"\u001f1\" style=\"width:180px\" class=\"t\" mx-change=\"\u001f\u001e_b({c:[{p:'dance',f:{refresh:true},n:'selected'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" mx-view=\"mx-dropdown/index?emptyText=%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C&selected=<%@$$.dance%>\"><item value=\"d1\">效果一</item><item value=\"d2\">效果二</item><item value=\"d3\">效果三</item><item value=\"d4\">效果四</item><item value=\"d5\">效果五</item><item value=\"d6\">效果六</item><item value=\"d7\">效果七</item><item value=\"d8\">效果八</item><item value=\"d9\">效果九</item><item value=\"d10\">效果十</item><item value=\"d11\">效果十一</item></div></div><div class=\"B\"><div>HTML Code:</div><pre>\n&lt;mx-effect.dance value=\"&lt;%=content%&gt;\" duration=\"&lt;%=duration%&gt;\" dance=\"&lt;%=dance%&gt;\"  /&gt;\n&lt;mx-dropdown empty-text=\"单字效果间隔时间\" style=\"width:180px\" selected=\"&lt;%:duration{refresh:true}%&gt;\"&gt;\n    &lt;item value=\"10\"&gt;10ms&lt;/item&gt;\n    &lt;item value=\"30\"&gt;30ms&lt;/item&gt;\n    &lt;item value=\"60\"&gt;60ms&lt;/item&gt;\n    &lt;item value=\"90\"&gt;90ms&lt;/item&gt;\n    &lt;item value=\"120\"&gt;120ms&lt;/item&gt;\n&lt;/mx-dropdown&gt;\n&lt;mx-dropdown empty-text=\"动画效果\" style=\"width:180px\" class=\"ml10\" selected=\"&lt;%:dance{refresh:true}%&gt;\"&gt;\n    &lt;item value=\"d1\"&gt;效果一&lt;/item&gt;\n    &lt;item value=\"d2\"&gt;效果二&lt;/item&gt;\n    &lt;item value=\"d3\"&gt;效果三&lt;/item&gt;\n    &lt;item value=\"d4\"&gt;效果四&lt;/item&gt;\n    &lt;item value=\"d5\"&gt;效果五&lt;/item&gt;\n    &lt;item value=\"d6\"&gt;效果六&lt;/item&gt;\n    &lt;item value=\"d7\"&gt;效果七&lt;/item&gt;\n    &lt;item value=\"d8\"&gt;效果八&lt;/item&gt;\n    &lt;item value=\"d9\"&gt;效果九&lt;/item&gt;\n    &lt;item value=\"d10\"&gt;效果十&lt;/item&gt;\n    &lt;item value=\"d11\"&gt;效果十一&lt;/item&gt;\n&lt;/mx-dropdown&gt;\n    </pre><div class=\"z\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet Form = require('app/gallery/mx-form/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',\n            dance: 'd1',\n            duration: '60'\n        });\n    }\n});\n    \n    </pre></div>","subs":[{"keys":["toNumber"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-effect/count?to=<%!$eu($$.toNumber)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["toNumber"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-effect/count?to=<%@$$.toNumber%>&duration=2000&fixed=2\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["content","duration","dance"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-effect/dance?value=<%!$eu($$.content)%>&duration=<%!$eu($$.duration)%>&dance=<%!$eu($$.dance)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["duration"],"path":"div[mx-guid=\"g3\u001f\"]","attr":"mx-view=\"mx-dropdown/index?emptyText=%E5%8D%95%E5%AD%97%E6%95%88%E6%9E%9C%E9%97%B4%E9%9A%94%E6%97%B6%E9%97%B4&selected=<%@$$.duration%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["dance"],"path":"div[mx-guid=\"g4\u001f\"]","attr":"mx-view=\"mx-dropdown/index?emptyText=%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C&selected=<%@$$.dance%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    mixins: [Form],
    render: function () {
        var me = this;
        me.updater.digest({
            toNumber: 20,
            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',
            dance: 'd1',
            duration: '60'
        });
    },
    'changeNumber<click>': function (e) {
        var me = this;
        var to = me.updater.get('toNumber');
        var diff = 300;
        if (!e.params.i) {
            diff = -diff;
        }
        me.updater.digest({
            toNumber: to + diff
        });
    }
});

});