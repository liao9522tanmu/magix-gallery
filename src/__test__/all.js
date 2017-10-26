/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('__test__/all',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
Magix.applyStyle("_","body,dd,dl,fieldset,figure,form,h1,h2,h3,h4,h5,h6,hr,input,legend,ol,p,pre,tbody,td,textarea,tfoot,th,thead,ul{margin:0;padding:0}ol,ul{list-style-type:none;list-style-image:none}a{background-color:transparent}a:active,a:hover{outline-width:0}a:focus{outline:1px dotted}html{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;font-size:62.5%}body{font-size:14px;line-height:1.8}body,button,input,textarea{font-family:helvetica neue,arial,hiragino sans gb,stheiti,wenquanyi micro hei,sans-serif;-ms-text-autospace:ideograph-alpha ideograph-numeric ideograph-parenthesis;-ms-text-spacing:ideograph-alpha ideograph-numeric ideograph-parenthesis;text-spacing:ideograph-alpha ideograph-numeric ideograph-parenthesis}h1,h2,h3,h4,h5,h6{font-weight:400}h1{font-size:36px}h2{font-size:30px}h3{font-size:22px}h4{font-size:18px}h5{font-size:14px}h6{font-size:12px}b,strong{font-weight:700}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word;overflow:auto}q{quotes:none}q:after,q:before{content:\"\";content:none}small{font-size:85.7%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}table{border-collapse:collapse;border-spacing:0}th{text-align:left}td,th{border:1px solid #ddd;padding:8px 10px}th{font-weight:inherit;border-bottom-width:2px;border-bottom-color:#ccc}img{border-style:none;width:auto\\9;height:auto;max-width:100%;vertical-align:top;-ms-interpolation-mode:bicubic}svg:not(:root){overflow:hidden}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border-style:none;white-space:normal;*margin-left:-7px}button,input,textarea{font-family:inherit;font-size:100%;margin:0;vertical-align:middle;*vertical-align:middle}button,input{*overflow:visible}button{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;-moz-appearance:button;appearance:button;cursor:pointer}button[disabled],input[disabled]{cursor:not-allowed}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;*height:13px;*width:13px}button::-moz-focus-inner,input::-moz-focus-inner{border-style:none;padding:0}textarea{overflow:auto;resize:vertical}@media screen and (-webkit-min-device-pixel-ratio:0){input{line-height:normal!important}}input::-moz-placeholder,textarea::-moz-placeholder{color:#a9a9a9;opacity:1}label{cursor:pointer}audio,canvas,video{display:inline-block;vertical-align:baseline}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}a:focus,button:focus,input:focus,textarea:focus{outline:none;resize:none}a{color:#6363e6;text-decoration:none}a:focus,a:hover{color:#3838a9}a:active,a:focus,a:hover,a:visited{outline:0;text-decoration:none}label{cursor:default;display:inline-block;max-width:100%;font-weight:400}[mx-view] item{display:none}@font-face{font-family:a;src:url(\"data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAagAAsAAAAACeQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZXOEjOY21hcAAAAYAAAACKAAAB9Gl6OhxnbHlmAAACDAAAAmsAAAMUgksUmWhlYWQAAAR4AAAALwAAADYOp9rVaGhlYQAABKgAAAAcAAAAJAfeA4lobXR4AAAExAAAABQAAAAgH+kAAGxvY2EAAATYAAAAEgAAABIEcAOSbWF4cAAABOwAAAAfAAAAIAEXAF1uYW1lAAAFDAAAAUUAAAJtPlT+fXBvc3QAAAZUAAAASwAAAGGg4UTheJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/ss4gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDy7z9zwv4EhhrmB4RRQmBEkBwA4Ig2aeJzFkUsKg0AQRKsz/gguPIEnyJkCgodw595V8ILu6hqmelowAfdW8wa6mB/VAEoASbxEAdgHBtci17Kf8Mx+gbf6TuX7JzbsOXDmym3fL51fWT55ljtJd5Z4oEKttsJtsvue/leb1/HolAqmA32RTeD5sw98ZhwCnyXnQKmCa6B8wS1A/QVrUykYAAB4nH1Sv2/TQBR+785nx21yThzHTtL8ctzYoYHQpq4zVKQLC9ABCSkSEgz8ATAw0IUhIuqPgYH/AClCQioDVOmCVMaOMGZuRSVYSMvGEsO5pFIHxOl0371P39O7d98DBvD7mB7QLKShDktwE+4CoNzAKidFtD2/SRqYsVnGMjj1HM9WnGqT3kCrKhtmK/BdS1ZkDTmWcNluBV6TeLjid8gqtswiYm4uf0+vFXT6CmeyXmkzvE0GmCk7Ba1zLbx1dc1oVdKxjbiu53T9ZUxmLEaIpHF8bJkqU2fk8A3T8pmD8hVSxnjOy6/fT1Tm9Ec7/pNizVIRez1Mz1X427VUPiX287yZ1nNKMhHL5hPOvIEbJ7PZdLzofgWxiOg1oL+oC7OwGnUJiglWAG0XqGUaGsrV6+hWp+ivYeBPsVVGszXFSGcQGIUnsoyF0QgLshyerPc5r2k1rc9d3hdY47yfSPyLpK6Qjy6lT8b/T7hE/u3hBZ3QZ5CDGgDzXK+DK030OColtFpB24zeGvg1wXWwLTiO9MeRojYW2Xh/f8zEeWczkJSj1EJlsr89pHS4fX46x4oUbN4ZnkrS6VAIFxuqcqxVFg6FYGsoScOt7SGgqN+j87Qn5gVUYhpy1UPL9duLS+J7TINmwi7u8lJdCzWHc/yi1Ut0IeyGXXHh+NPR6kn8rJXqwg+MTKEPyTfhB6CdclJ2xk4tp2z6IDzbCc8wuYNJHGFyGsFFDjnEcVT/3CzPFaNYjuYviBwjn5iuDF7Lepx9oCqdZXsMvzM2GLCZtPKeSijvUf2idhc/AgVIi7rvyO5EhE8B/gB5X5wLAHicY2BkYGAAYvvPJpLx/DZfGbhZGEDg6hHviQj6vxkLA3MDkMvBwAQSBQAZkAngAHicY2BkYGBu+N/AEMPCAAJAkpEBFXAAAEcOAnF4nGNhYGBgfsnAwMKAHQMAGtcBCQAAAAAAdgDYARgBPgFYAXwBigAAeJxjYGRgYOBgCGRgZQABJiDmAkIGhv9gPgMAEX4BdQB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxtxzEOgCAMBdB+RKzehiPVBapJGUgTwumNcfVtjwJ9DvrHCFgQsSJhA2MnjFRc7NTUm3dvPFSsTG/xUsk8q9gtmt8Z0QOGGg+dAA==\") format(\"woff\")}._{font-family:a;line-height:1;font-size:16px;font-style:normal;font-weight:400;font-variant:normal;display:inline-block;speak:none;position:relative;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.a{margin-top:5px}.b{margin-top:10px}.c{margin-top:15px}.d{margin-top:20px}.e{margin-top:25px}.f{margin-top:30px}.g{margin-right:5px}.h{margin-right:10px}.i{margin-right:15px}.j{margin-right:20px}.k{margin-right:25px}.l{margin-right:30px}.m{margin-bottom:5px}.n{margin-bottom:10px}.o{margin-bottom:15px}.p{margin-bottom:20px}.q{margin-bottom:25px}.r{margin-bottom:30px}.s{margin-left:5px}.t{margin-left:10px}.u{margin-left:15px}.v{margin-left:20px}.w{margin-left:25px}.x{margin-left:30px}.y{padding-top:5px}.z{padding-top:10px}.A{padding-top:15px}.B{padding-top:20px}.C{padding-top:25px}.D{padding-top:30px}.E{padding-right:5px}.F{padding-right:10px}.G{padding-right:15px}.H{padding-right:20px}.I{padding-right:25px}.J{padding-right:30px}.K{padding-bottom:5px}.L{padding-bottom:10px}.M{padding-bottom:15px}.N{padding-bottom:20px}.O{padding-bottom:25px}.P{padding-bottom:30px}.Q{padding-left:5px}.R{padding-left:10px}.S{padding-left:15px}.T{padding-left:20px}.U{padding-left:25px}.V{padding-left:30px}.W{text-align:right}.X{text-align:left}.Y{text-align:center}.Z{float:left}.a_{float:right}html .aa{display:inline-block}.ab{cursor:pointer}.ac{cursor:move}.ad{position:absolute}.ae{position:relative}html .af{display:none}.ag:after,.ag:before{content:\" \";display:table}.ag:after{clear:both}.ah{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ai::-webkit-scrollbar{width:10px;height:10px;overflow:auto}.ai::-webkit-scrollbar-thumb{background-color:#ccc;border-radius:6px;height:30px;border:2px solid #e5e5e5}.ai::-webkit-scrollbar-thumb:hover{background-color:#6a6a6a}.ai::-webkit-scrollbar-track{background-color:#e5e5e5}.aj{white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}.ak{color:#d2d2d2;cursor:not-allowed}.al{display:inline-block;font-weight:400;text-align:center;vertical-align:middle;cursor:pointer;background-image:none;background-color:#eaeaea;white-space:nowrap;padding:9px 14px;font-size:14px;line-height:1;border:0;color:#333;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.al:focus{outline:none}.al:hover{background-color:#ccc;color:#333}.am{background-color:#6363e6;color:#fff}.am:focus,.am:hover{background-color:#3838a9;color:#fff}.al[disabled]{background-color:#fbfbfb}.al[disabled]:hover{border-color:#e6e6e6}::-webkit-input-placeholder{color:#999}:-ms-input-placeholder,::-ms-input-placeholder{color:#999}::placeholder{color:#999}.an,.ao{display:inline-block;height:32px;padding:6px 9px;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;border:1px solid #e6e6e6;background-color:#fff;color:#333;width:340px;max-width:100%}.an:hover,.ao:hover{border-color:#ccc}.an:focus,.ao:focus,.ap,.ap:hover{border-color:#6363e6!important}.ao{height:auto}.an[disabled],.ao[disabled]{background-color:#fbfbfb}.an[disabled]:hover,.ao[disabled]:hover{border-color:#e6e6e6}.aq,.ar{width:14px;height:14px;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;border-radius:2px;-webkit-transition:all .25s;transition:all .25s;background-color:#fff;border:1px solid #e6e6e6;margin-right:8px;cursor:pointer}.ar{border-radius:50%}.aq:checked,.aq:indeterminate,.ar:checked{background-color:#6363e6;border-color:#6363e6}.aq:checked:after{content:\"\";display:block;margin:1px auto;height:8px;width:5px;border:2px solid #fff;border-top:0;border-left:0;-webkit-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}.aq:indeterminate:after{content:\"\";display:block;height:2px;width:8px;margin:40% auto;background-color:#fff}.ar:checked:after{content:\"\";display:block;height:4px;width:4px;border-radius:50%;margin:4px auto;background-color:#fff}.aq:disabled,.ar:disabled{background-color:#fbfbfb;border-color:#e6e6e6}.aq:disabled:after{border-color:rgba(0,0,0,.25)}.aq:indeterminate:disabled:after,.ar:disabled:after{background-color:rgba(0,0,0,.25)}.as{width:42px;height:21px;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;border-radius:10.5px;background-color:#eaeaea;margin-right:8px;cursor:pointer;position:relative}.as,.as:after{-webkit-transition:all .25s;transition:all .25s}.as:after{content:\"\";display:block;position:absolute;height:17px;width:17px;background:#fff;margin:2px;border-radius:50%;left:0}.as:disabled,.as:disabled:checked{background-color:#fbfbfb}.as:checked:after{margin-left:-20px;left:100%}.as:checked{background-color:#6363e6}.at{margin-bottom:22px}.au{height:32px;line-height:32px;text-align:right;width:140px;vertical-align:top;white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}.av:before{margin-right:4px;content:\"*\";font-family:SimSun;line-height:1;color:#f04134}.av:before,.aw{display:inline-block}.aw{position:relative;min-height:32px;line-height:32px;margin-left:15px}.ax{margin-left:140px}.ay{width:100%;border:1px solid #e6e6e6}.ay th{border:0 none;border-bottom:2px solid #e6e6e6;font-weight:700}.ay td{border:0 none;border-top:1px solid #e6e6e6}.az tbody tr:nth-child(odd) td{background-color:rgba(0,0,0,.05)}.ay tfoot td{padding:0}.aA{padding:150px 0;margin:0 auto;width:150px;text-align:center;line-height:0}.aA:after,.aA:before{content:\"\"}.aA:after,.aA:before,.aB{width:14px;height:14px;background-color:#eaeaea;border-radius:100%;display:inline-block;-webkit-animation:_ 1s infinite ease-in-out both;animation:_ 1s infinite ease-in-out both}.aA:before{-webkit-animation-delay:-.32s;animation-delay:-.32s}.aB{margin:0 10px;-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes _{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes _{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.aC{padding:15px 40px;border-bottom:1px solid #e6e6e6;color:#333;margin:0;line-height:1.42857143}.aD{padding:18px 40px}.aE{padding:15px 40px;text-align:left;border-top:1px solid #e6e6e6}");
Magix.applyStyle("b",".aG{color:red}.aH{padding:50px}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"aH\" mx-view=\"<%=$$.view%>\"><div class=\"aA\"><span class=\"aB\"></span></div></div>","subs":[{"keys":["view"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"<%=$$.view%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    init: function () {
        this.observeLocation({
            path: true
        });
        this.owner.on('created', function () {
            $('pre').each(function (i, it) {
                if (!it.rendered) {
                    it.rendered = true;
                    hljs.highlightBlock(it);
                }
            });
        });
    },
    render: function () {
        var me = this;
        var loc = Magix.Router.parse();
        var view = loc.path;
        view = view.slice(1);
        if (view == 'list') {
            view = '__test__/list';
        }
        else {
            var i = view.indexOf('/');
            view = view.slice(0, i) + '/__test__' + view.slice(i);
        }
        me.updater.digest({
            view: view
        });
    }
});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('__test__/list',["magix"],function(require,exports,module){
/*Magix*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
Magix.applyStyle("a",".aF{color:red}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<a href=\"#!/mx-calendar/index\">mx-calendar/index(日历)</a><br><a href=\"#!/mx-calendar/datepicker\">mx-calendar/datepicker(日期选择)</a><br><a href=\"#!/mx-calendar/rangepicker\">mx-calendar/rangepicker(日期范围选择)</a><br><a href=\"#!/mx-checkbox/linkage\">mx-checkbox/linkage(联动)</a><br><a href=\"#!/mx-checkbox/storestate\">mx-checkbox/storestate(保存状态)</a><br><a href=\"#!/mx-color/index\">mx-color/index(颜色选择)</a><br><a href=\"#!/mx-copy/index\">mx-copy/index(复制)</a><br><a href=\"#!/mx-dialog/index\">mx-dialog/index(对话框)</a><br><a href=\"#!/mx-dragselect/index\">mx-dragselect/index(拖动选取)</a><br><a href=\"#!/mx-dragsort/index\">mx-dragsort/index(拖动排序)</a><br><a href=\"#!/mx-dropdown/index\">mx-dropdown/index(下拉框)</a><br><a href=\"#!/mx-effect/index\">mx-effect/index(效果库)</a><br><a href=\"#!/mx-form/index\">mx-form/index(表单)</a><br><a href=\"#!/mx-gtip/index\">mx-gtip/index(提示)</a><br><a href=\"#!/mx-hour/index\">mx-hour/index(小时)</a><br><a href=\"#!/mx-linkage/index\">mx-linkage/index(联动选择)</a><br><a href=\"#!/mx-loading/mask\">mx-loading/mask(加载动画)</a><br><a href=\"#!/mx-number/index\">mx-number/index</a><br><a href=\"#!/mx-pagination/index\">mx-pagination/index(分页)</a><br><a href=\"#!/mx-popconfirm/index\">mx-popconfirm/index</a><br><a href=\"#!/mx-popmenu/index\">mx-popmenu/index</a><br><a href=\"#!/mx-popover/index\">mx-popover/index</a><br><a href=\"#!/mx-progress/index\">mx-progress/index</a><br><a href=\"#!/mx-slider/index\">mx-slider/index(滑块)</a><br><a href=\"#!/mx-slider/range\">mx-slider/range(范围滑块)</a><br><a href=\"#!/mx-suggest/index\">mx-suggest/index</a><br><a href=\"#!/mx-table/index\">mx-table/index(表格)</a><br><a href=\"#!/mx-taginput/index\">mx-taginput/index(标签输入)</a><br><a href=\"#!/mx-time/index\">mx-time/index(时间)</a><br><a href=\"#!/mx-time/picker\">mx-time/picker(时间选取)</a><br><a href=\"#!/mx-tree/index\">mx-tree/index(tree)</a><br><a href=\"#!/mx-uploader/index\">mx-uploader/index(上传)</a><br>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/__test__/index',["magix","mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar</h2><h3>默认情形</h3><div class=\"B ag\"><div mx-view=\"mx-calendar/index\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"app/gallery/mx-calendar/index\" /&gt;</pre></div><h3 class=\"f\">默认选中某天</h3><div class=\"B ag\"><div mx-view=\"mx-calendar/index?selected=2018-01-01\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"app/gallery/mx-calendar/index\"\n    selected=\"2018-01-01\"/&gt;</pre></div><h3 class=\"f\">设置可选择的范围</h3><div class=\"B ag\"><div mx-view=\"mx-calendar/index?min=2017-08-05&max=2017-08-22&selected=2017-08-12\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"app/gallery/mx-calendar/index\"\n    min=\"2017-08-05\"\n    max=\"2017-08-22\"\n    selected=\"2017-08-12\"/&gt;</pre></div><h3 class=\"f\">设置周二为一周的开始</h3><div class=\"B ag\"><div mx-view=\"mx-calendar/index?weekStart=<%@2%>\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"app/gallery/mx-calendar/index\"\n    week-start=\"&lt;%@ 2 %&gt;\"/&gt;</pre></div><h3 class=\"f\">带时分秒</h3><div class=\"B ag\"><div mx-view=\"mx-calendar/index?timeType=all\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"app/gallery/mx-calendar/index\"\n    time-type=\"all\"&gt;</pre></div><h3 class=\"f\">带时分秒的选中</h3><div class=\"B ag\"><div mx-view=\"mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"app/gallery/mx-calendar/index\"\n    time-type=\"all\"\n    selected=\"2018-08-08 18:08:20\"/&gt;</pre></div><h3 class=\"f\">带时分秒,只能选择小时和分钟</h3><div class=\"B ag\"><div mx-view=\"mx-calendar/index?timeType=hour%2Cminute\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"app/gallery/mx-calendar/index\"\n    time-type=\"hour,minute\"/&gt;</pre></div><h3 class=\"f\">change事件</h3><div class=\"B ag\"><div mx-view=\"mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20\" mx-change=\"\u001f\u001eshowDatetime()\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"app/gallery/mx-calendar/index\"\n    time-type=\"all\"\n    selected=\"2018-08-08 18:08:20\"\n    mx-change=\"showDatetime()\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        this.gtipRT('日期：' + e.date + '，时间：' + e.time);\n    }\n});</pre></div>","subs":[]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showDatetime<change>': function (e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/__test__/datepicker',["magix","mx-gtip/index","../datepicker"],function(require,exports,module){
/*Magix,GTip*/
require("../datepicker");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar</h2><h3>默认情形</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker\" class=\"an\" placeholder=\"请选择日期\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallerymx-calendar/datepicker\" class=\"input\" placeholder=\"请选择日期\"/&gt;</pre></div><h3 class=\"f\">默认选中某天</h3><div class=\"B ag\"><input class=\"an\" placeholder=\"请选择日期\" mx-view=\"mx-calendar/datepicker?selected=2018-01-01\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" class=\"input\" placeholder=\"请选择日期\"\n    path=\"app/gallery/mx-calendar/datepicker\"\n    selected=\"2018-01-01\"&gt;</pre></div><h3 class=\"f\">从input中读取日期</h3><div class=\"B ag\"><input class=\"an\" placeholder=\"请选择日期\" value=\"2018-03-02\" mx-view=\"mx-calendar/datepicker\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" class=\"input\" placeholder=\"请选择日期\"\n    value=\"2018-03-02\"\n    path=\"app/gallery/mx-calendar/datepicker\"&gt;</pre></div><h3 class=\"f\">设置可选择的范围</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?min=2017-08-05&max=2017-08-22\" value=\"2017-08-12\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    min=\"2017-08-05\"\n    max=\"2017-08-22\"\n    value=\"2017-08-12\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">设置周二为一周的开始</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?weekStart=<%@2%>\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    week-start=\"&lt;%@ 2 %&gt;\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">右下对齐</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?align=right\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    align=\"right\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">右上对齐</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?align=right&placement=top\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    align=\"right\"\n    placement=\"top\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">带时分秒</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?timeType=all\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    time-type=\"all\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">带时分秒的选中</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?timeType=all\" value=\"2018-08-08 18:08:20\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    time-type=\"all\"\n    value=\"2018-08-08 18:08:20\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">带时分秒,只能选择小时</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?timeType=hour\" value=\"2018-08-08 18:08:20\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    time-type=\"hour\"\n    value=\"2018-08-08 18:08:20\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">change事件</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?timeType=all&selected=2018-08-08%2018%3A08%3A20\" mx-change=\"\u001f\u001eshowDatetime()\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    time-type=\"all\"\n    selected=\"2018-08-08 18:08:20\"\n    mx-change=\"showDatetime()\"\n    class=\"input\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        this.gtipRT('日期：' + e.date + '，时间：' + e.time);\n    }\n});</pre></div><h3 class=\"f\">只选择年月</h3><div class=\"B ag\"><input class=\"an\" mx-view=\"mx-calendar/datepicker?dateType=year%2Cmonth&selected=2010-02\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker class=\"input\" date-type=\"year,month\" selected=\"2010-02\" /&gt;</pre></div>","subs":[]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showDatetime<change>': function (e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/__test__/rangepicker',["magix","mx-gtip/index","../rangepicker"],function(require,exports,module){
/*Magix,GTip*/
require("../rangepicker");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar</h2><h3>默认情形</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/rangepicker\" class=\"an\" placeholder=\"请选择日期范围\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    tag=\"input\"\n    path=\"app/gallery/mx-calendar/rangepicker\"\n    class=\"input\"\n    placeholder=\"请选择日期范围\"/&gt;</pre></div><h3 class=\"f\">指定开始结束日期</h3><div class=\"B ag\"><input class=\"an\" placeholder=\"请选择日期范围\" mx-view=\"mx-calendar/rangepicker?start=2018-01-01&end=2019-01-01\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    tag=\"input\"\n    class=\"input\"\n    placeholder=\"请选择日期范围\"\n    path=\"app/gallery/mx-calendar/rangepicker\"\n    start=\"2018-01-01\"\n    end=\"2019-01-01\"/&gt;</pre></div><h3 class=\"f\">不显示快捷日期</h3><div class=\"B ag\"><input class=\"an\" placeholder=\"请选择日期范围\" mx-view=\"mx-calendar/rangepicker?shortcuts=false\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    tag=\"input\"\n    class=\"input\"\n    placeholder=\"请选择日期范围\"\n    path=\"app/gallery/mx-calendar/datepicker\"\n    shortcuts=\"false\"/&gt;</pre></div><h3 class=\"f\">设置可选择的范围</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/rangepicker?min=2017-08-05&max=2017-08-22&start=2017-08-08&end=2017-08-20&shortcuts=false\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    tag=\"input\"\n    path=\"app/gallery/mx-calendar/rangepicker\"\n    min=\"2017-08-05\"\n    max=\"2017-08-22\"\n    start=\"2017-08-08\"\n    end=\"2017-08-20\"\n    shortcuts=\"false\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">右上对齐</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/rangepicker?align=right&placement=top\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    tag=\"input\"\n    path=\"app/gallery/mx-calendar/rangepicker\"\n    align=\"right\"\n    placement=\"top\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">带时分秒</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/rangepicker?timeType=all\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    tag=\"input\"\n    path=\"app/gallery/mx-calendar/rangepicker\"\n    time-type=\"all\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">带时分秒的选中</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/rangepicker?timeType=all&start=2017-07-07%2018%3A08%3A08&end=2017-12-30%2015%3A15%3A15\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    tag=\"input\"\n    path=\"app/gallery/mx-calendar/rangepicker\"\n    time-type=\"all\"\n    start=\"2017-07-07 18:08:08\"\n    end=\"2017-12-30 15:15:15\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">change事件</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/rangepicker?timeType=all\" mx-change=\"\u001f\u001eshowDatetime()\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    tag=\"input\"\n    path=\"app/gallery/mx-calendar/rangepicker\"\n    time-type=\"all\"\n    mx-change=\"showDatetime()\"\n    class=\"input\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@rangepicker.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        console.log(e.dates);\n        this.gtipRT('日期：' + JSON.stringify(e.dates));\n    }\n});</pre></div><h3 class=\"f\">只有年月</h3><div class=\"B ag\"><input class=\"an\" mx-view=\"mx-calendar/rangepicker?dateType=year%2Cmonth&start=2017-07&end=2017-12&formatter=YYYY-MM&shortcuts=false\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-calendar.rangepicker\n    class=\"input\"\n    date-type=\"year,month\"\n    start=\"2017-07\"\n    end=\"2017-12\"\n    formatter=\"YYYY-MM\"\n    shortcuts=\"false\" /&gt;</pre></div>","subs":[]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showDatetime<change>': function (e) {
        console.log(e.dates);
        this.gtipRT('日期：' + JSON.stringify(e.dates));
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-checkbox/__test__/linkage',["magix","../linkage","../../mx-gtip/index"],function(require,exports,module){
/*Magix,Linkage,GTip*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Linkage = require('../linkage');
var GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-checkbox</h2><div class=\"B ag\"><table class=\"ay az\"><thead><tr><th><input type=\"checkbox\" class=\"aq\" linkage=\"example1\"></th><%for(var a=0;a<5;a++){%><th>示例字段<%=a%></th><%}%></tr></thead><tbody><%for(var b=0;b<10;b++){%><tr><td><input type=\"checkbox\" class=\"aq\" linkage-parent=\"example1\" value=\"ex1_<%=b%>\"></td><%for(var c=0;c<5;c++){%><td>示例字段内容<%=c%></td><%}%></tr><%}%></tbody></table><div class=\"ag\"><button class=\"a_ a al am\" mx-click=\"\u001f\u001eshowEx1()\">显示选中的checkbox</button></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n&lt;div class=\"clearfix\"&gt;\n    &lt;button class=\"fr mt5 btn btn-brand\" mx-click=\"showEx1()\"&gt;显示示例1选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Linkage = require('app/gallery/mx-checkbox/linkage');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@linkage.html',\n    mixins: [Linkage, GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showEx1&lt;click&gt;' () {\n        this.gtipRT(this.getSelectedIds('example1'));\n    }\n});</pre></div>","subs":[]},
    mixins: [Linkage, GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showEx1<click>': function () {
        this.gtipRT(this.getSelectedIds('example1'));
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-checkbox/__test__/storestate',["magix","../linkage","../../mx-gtip/index","../storestate","mx-pagination/index"],function(require,exports,module){
/*Magix,Linkage,GTip,StoreState*/
require("mx-pagination/index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Linkage = require('../linkage');
var GTip = require('../../mx-gtip/index');
var StoreState = require('../storestate');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-checkbox</h2><div class=\"B ag\"><table class=\"ay az\"><thead><tr><th><input type=\"checkbox\" class=\"aq\" linkage=\"example1\"></th><%for(var a=0;a<5;a++){%><th>示例字段<%=a%></th><%}%></tr></thead><tbody mx-guid=\"g1\u001f\">2\u001d</tbody><tfoot><tr><td mx-guid=\"g2\u001f\" colspan=\"6\" mx-view=\"mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list1Page%>&size=<%@$$.list1Size%>\" mx-change=\"\u001f\u001echageList1()\" style=\"height:60px\"></td></tr></tfoot></table><div class=\"ag\"><button class=\"a_ a al am\" mx-click=\"\u001f\u001eshowEx1()\">显示选中的checkbox</button></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;list1.length;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"&lt;%=list1[i].id%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;&lt;%=list1[i]['f'+j]%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n    &lt;tfoot&gt;\n        &lt;tr&gt;\n            &lt;mx-view\n                tag=\"td\"\n                colspan=\"6\"\n                path=\"app/gallery/mx-pagination/index\"\n                total=\"&lt;%@100%&gt;\"\n                step=\"3\"\n                page=\"&lt;%@list1Page%&gt;\"\n                size=\"&lt;%@list1Size%&gt;\"\n                mx-change=\"chageList1()\"/&gt;\n        &lt;/tr&gt;\n    &lt;/tfoot&gt;\n&lt;/table&gt;\n\n&lt;div class=\"clearfix\"&gt;\n    &lt;button class=\"fr mt5 btn btn-brand\" mx-click=\"showEx1()\"&gt;显示选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Linkage = require('app/gallery/mx-chekcbox/linkage');\nlet GTip = require('app/gallery/mx-gtip/index');\nlet StoreState = require('app/gallery/mx-chekcbox/storestate');\nmodule.exports = Magix.View.extend({\n    tmpl: '@storestate.html',\n    mixins: [Linkage, GTip, StoreState],\n    init() {\n        let list1 = [];\n        for (let j = 0; j &lt; 100; j++) {\n            let temp = {\n                id: j\n            };\n            for (let i = 0; i &lt; 5; i++) {\n                temp['f' + i] = '字段内容' + j + '_' + i;\n            }\n            list1.push(temp);\n        }\n        let me = this;\n        me.$list1 = list1;\n        me.$list1Page = 1;\n        me.$list1Size = 10;\n    },\n    getList(type) {\n        let me = this;\n        let list = me['$' + type];\n        let page = me['$' + type + 'Page'];\n        let size = me['$' + type + 'Size'];\n        return list.slice((page - 1) * size, page * size);\n    },\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: me.getList('list1'),\n            list1Page: me.$list1Page,\n            list1Size: me.$list1Size\n        });\n    },\n    'chageList1&lt;change&gt;' (e) {\n        let me = this;\n        me.$list1Page = e.page;\n        me.$list1Size = e.size;\n        me.render();\n    },\n    'showEx1&lt;click&gt;' () {\n        let list = this.getStoreState('example1');\n        if (list.length) {\n            this.gtipRT('选中的值：' + list.join(','));\n        } else {\n            this.gtipRT('请选择checkbox');\n        }\n    }\n});</pre></div>","subs":[{"keys":["list1"],"path":"tbody[mx-guid=\"g1\u001f\"]","tmpl":"<%for(var b=0;b<$$.list1.length;b++){%><tr><td><input type=\"checkbox\" class=\"aq\" linkage-parent=\"example1\" value=\"<%=$$.list1[b].id%>\"></td><%for(var c=0;c<5;c++){%><td><%=$$.list1[b]['f'+c]%></td><%}%></tr><%}%>","s":"2\u001d"},{"keys":["list1Page","list1Size"],"path":"td[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list1Page%>&size=<%@$$.list1Size%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    mixins: [GTip, StoreState, Linkage],
    init: function () {
        var list1 = [];
        for (var j = 0; j < 100; j++) {
            var temp = {
                id: j
            };
            for (var i = 0; i < 5; i++) {
                temp['f' + i] = '字段内容' + j + '_' + i;
            }
            list1.push(temp);
        }
        var me = this;
        me.$list1 = list1;
        me.$list1Page = 1;
        me.$list1Size = 10;
    },
    getList: function (type) {
        var me = this;
        var list = me['$' + type];
        var page = me['$' + type + 'Page'];
        var size = me['$' + type + 'Size'];
        return list.slice((page - 1) * size, page * size);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            list1: me.getList('list1'),
            list1Page: me.$list1Page,
            list1Size: me.$list1Size
        });
    },
    'chageList1<change>': function (e) {
        var me = this;
        me.$list1Page = e.page;
        me.$list1Size = e.size;
        me.render();
    },
    'showEx1<click>': function () {
        var list = this.getStoreState('example1');
        if (list.length) {
            this.gtipRT('选中的值：' + list.join(','));
        }
        else {
            this.gtipRT('请选择checkbox');
        }
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-color/__test__/index',["magix","../index","../picker"],function(require,exports,module){
/*Magix*/
require("../index");
require("../picker");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-color</h2><h3>默认情形</h3><div class=\"B ag\"><div mx-view=\"mx-color/index\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-color/index\"/&gt;</pre></div><h3 class=\"f\">颜色选择</h3><div class=\"B ag\"><input mx-view=\"mx-color/picker\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"mx-color/picker\" class=\"input\" /&gt;</pre></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-copy/__test__/index',["magix","../../mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-copy</h2><div class=\"B ag\"><div mx-guid=\"g0\u001f\" id=\"text_<%=$$.viewId%>\">这里是要复制的<span style=\"font-weight:bold\">内容</span>的节点</div><button mx-guid=\"g1\u001f\" type=\"button\" class=\"al am j\" mx-success=\"\u001f\u001edone()\" mx-error=\"\u001f\u001ebad()\" mx-view=\"mx-copy/index?copyNode=text_<%!$eu($$.viewId)%>\">复制</button></div><div class=\"B\"><div>HTML Code:</div><pre>\n&lt;div id=\"text_&lt;%=viewId%&gt;\"&gt;这里是要复制的&lt;span style=\"font-weight:bold\"&gt;内容&lt;/span&gt;的节点&lt;/div&gt;\n&lt;mx-copy copy-node=\"text_&lt;%=viewId%&gt;\" tag=\"button\" type=\"button\" class=\"btn btn-brand mr20\" mx-success=\"done()\" mx-error=\"bad()\"&gt;复制&lt;/mx-copy&gt;</pre><div class=\"z\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    'done&lt;success&gt;'() {\n        this.gtipRT('复制成功～');\n    },\n    'bad&lt;error&gt;'() {\n        this.gtipRT('复制失败～');\n    }\n});    \n</pre></div>","subs":[{"keys":["viewId"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"id=\"text_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]},{"keys":["viewId"],"path":"button[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-copy/index?copyNode=text_<%!$eu($$.viewId)%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'done<success>': function () {
        this.gtipRT('复制成功～');
    },
    'bad<error>': function () {
        this.gtipRT('复制失败～');
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dragselect/__test__/index',["magix","$","../index"],function(require,exports,module){
/*Magix,$*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
Magix.applyStyle("c",".aI{width:500px;cursor:default}.aI li{width:100px;height:100px;text-align:center;float:left;line-height:100px;background:#f8f6f6;border:1px solid #fff;margin:10px}.aI li[select]{background:#ccc}.aI .aJ{border:1px solid #5665eb;background:#4d4fa8;opacity:.5;color:#fff}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dragselect</h2><h3>默认示例</h3><div class=\"B ag\"><ul mx-view=\"mx-dragselect/index\" class=\"aI Z\" mx-change=\"\u001f\u001eshow()\" mx-dragbegin=\"\u001f\u001ebegin()\" mx-dragfinish=\"\u001f\u001eend()\"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li></ul></div><div class=\"B\"><div>HTML Code:</div><pre>\n&lt;ul mx-view=\"mx-dragselect/index\" class=\"hor fl\" mx-change=\"show()\" mx-dragbegin=\"begin()\" mx-dragfinish=\"end()\"&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class=\"z\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.less');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n        me.$selected = {};\n    },\n    'show&lt;change&gt;'(e) {\n        let node = e.node;\n        let me = this;\n        if (!node.id) node.id = Magix.guid('mx_');\n        if (e.action == 'add') {\n            if (me.$selected[node.id]) {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n\n                me.$temp[node.id] = 1;\n            } else {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            }\n        } else if (e.action == 'remove') {\n            if (me.$temp[node.id]) {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            } else {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n                me.$temp[node.id] = 1;\n            }\n        }\n        console.log(me.$selected);\n    },\n    'begin&lt;dragbegin&gt;'() {\n        this.$temp = {};\n    },\n    'end&lt;dragfinish&gt;'() {\n        delete this.$temp;\n    }\n});\n    </pre></div><h3 class=\"f\">部分不能选择</h3><div class=\"B ag\"><ul mx-view=\"mx-dragselect/index?selector=li%5Bselect%21%3Dfalse%5D\" class=\"aI Z\" mx-change=\"\u001f\u001eshow()\" mx-dragbegin=\"\u001f\u001ebegin()\" mx-dragfinish=\"\u001f\u001eend()\" test=\"aI\"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li select=\"false\">123</li><li select=\"false\">456</li></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"mx-dragselect/index\" class=\"hor fl\" mx-change=\"show()\" mx-dragbegin=\"begin()\" mx-dragfinish=\"end()\" view-selector=\"li[select!=false]\"&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li select=\"false\"&gt;123&lt;/li&gt;\n        &lt;li select=\"false\"&gt;456&lt;/li&gt;\n    &lt;/ul&gt;</pre></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
        me.$selected = {};
    },
    'show<change,click>': function (e) {
        var node = e.node;
        var me = this;
        if (!node.id)
            node.id = Magix.guid('mx_');
        if (e.action == 'add') {
            if (me.$selected[node.id]) {
                $(node).removeClass('aJ');
                delete me.$selected[node.id];
                if (e.mode == 'drag') {
                    me.$temp[node.id] = 1;
                }
            }
            else {
                $(node).addClass('aJ');
                me.$selected[node.id] = node;
                if (e.mode == 'drag') {
                    delete me.$temp[node.id];
                }
            }
        }
        else if (e.action == 'remove') {
            if (me.$temp[node.id]) {
                $(node).addClass('aJ');
                me.$selected[node.id] = node;
                if (e.mode == 'drag') {
                    delete me.$temp[node.id];
                }
            }
            else {
                $(node).removeClass('aJ');
                delete me.$selected[node.id];
                if (e.mode == 'drag') {
                    me.$temp[node.id] = 1;
                }
            }
        }
        console.log(me.$selected);
    },
    'begin<dragbegin>': function () {
        console.log('begin');
        this.$temp = {};
    },
    'end<dragfinish>': function () {
        delete this.$temp;
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dragsort/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
Magix.applyStyle("d",".aK{width:300px;cursor:default}.aK li{line-height:30px;padding:10px}.aK li:nth-child(odd){background-color:rgba(172,236,182,.5)}.aK span{cursor:move;margin-right:10px;display:inline-block;height:100%}.aL{background:#f8f6f6;height:120px;overflow:auto;width:500px}.aM,.aL{cursor:default}.aM{width:100%}.aM li{width:100px;height:60px;text-align:center;float:left;line-height:60px;background:#f8f6f6;border-right:1px solid #fff}.aM li[ds-draggable=false]{background:#ccc}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dragsort</h2><h3>默认示例</h3><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?selector=span\" class=\"aK Z\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><div class=\"a_\"><table class=\"ay az\"><thead><tr><th><input type=\"checkbox\" class=\"aq\" linkage=\"example1\"></th><%for(var a=0;a<5;a++){%><th>示例字段<%=a%></th><%}%></tr></thead><tbody mx-view=\"mx-dragsort/index\"><%for(var b=0;b<10;b++){%><tr><td><input type=\"checkbox\" class=\"aq\" linkage-parent=\"example1\" value=\"ex1_<%=b%>\"></td><%for(var c=0;c<5;c++){%><td><%=b%>示例字段内容<%=c%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"left fl\" view-selector=\"span\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;div class=\"fr\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody mx-view=\"app/gallery/mx-dragsort/index\"&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;&lt;%=i%&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/div&gt;</pre></div><h3 class=\"f\">水平拖动</h3><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?horizonal=true&vertical=false\" class=\"aM Z\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"hor fl\" view-horizonal=\"true\" view-vertical=\"false\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"f\">四个方向</h3><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?horizonal=true&vertical=true\" class=\"aM Z\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"hor fl\" view-horizonal=\"true\" view-vertical=\"true\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"f\">滚动容器和窗口</h3><h4>拖动的容器节点如果可以滚动，则会自动滚动，如果拖动靠近窗口，则会自动滚动窗口</h4><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?selector=span\" class=\"aK aL Z ai\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><h3 class=\"f\">跨容器拖动</h3><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?drops=_def&selector=span\" class=\"aK aL Z ai\" id=\"_abc\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><ul mx-view=\"mx-dragsort/index?selector=span&drops=_abc\" class=\"aK aL Z ai x\" id=\"_def\"></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"left left1 fl scrollable\" view-drops=\"_def\" view-selector=\"span\" id=\"_abc\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;ul mx-view=\"mx-dragsort/index\" class=\"left left1 fl scrollable ml30\" id=\"_def\" view-selector=\"span\" view-drops=\"_abc\"&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"f\">拖出容器删除</h3><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?sort=false\" class=\"aK aL Z ai\" mx-enterzone=\"\u001f\u001estop()\" mx-leavezone=\"\u001f\u001eok()\" mx-dragfinish=\"\u001f\u001edel()\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"left left1 fl scrollable\" mx-enterzone=\"stop()\" mx-leavezone=\"ok()\" mx-dragfinish=\"del()\" view-sort=\"false\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.less');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'stop&lt;enterzone&gt;'(e) {\n        e.changePointer(false);\n    },\n    'ok&lt;leavezone&gt;'(e) {\n        e.changePointer(true);\n    },\n    'del&lt;dragfinish&gt;'(e) {\n        if (e.moved && e.outZone) {//moved and outside zone\n            $(e.dragNode).slideUp();\n            setTimeout(() => {\n                e.dragZone.removeChild(e.dragNode);\n            }, 500);\n        }\n    }\n});</pre></div><h3 class=\"f\">部分不能拖动及排序</h3><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?horizonal=true&vertical=false\" class=\"aM Z\"><li ds-draggable=\"false\"><span>move</span>123</li><li ds-draggable=\"false\"><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li ds-draggable=\"false\"><span>move</span>456</li></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"hor fl\" view-horizonal=\"true\" view-vertical=\"false\"&gt;\n    &lt;li ds-draggable=\"false\"&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable=\"false\"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable=\"false\"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"f\">drag and drop</h3><div class=\"B ag\"><ul class=\"aM Z\"><li ds-draggable=\"false\"><span>move</span>123</li><li ds-draggable=\"false\"><span>move</span>456</li><li draggable=\"true\" mx-dragstart=\"\u001f\u001estart()\"><span>move</span>123</li><li draggable=\"true\" mx-dragstart=\"\u001f\u001estart()\"><span>move</span>456</li><li draggable=\"true\" mx-dragstart=\"\u001f\u001estart()\"><span>move</span>123</li><li draggable=\"true\" mx-dragstart=\"\u001f\u001estart()\"><span>move</span>456</li><li draggable=\"true\" mx-dragstart=\"\u001f\u001estart()\"><span>move</span>123</li><li ds-draggable=\"false\"><span>move</span>456</li></ul><div style=\"width:300px;height:300px;border:solid 1px #ccc\" mx-drop=\"\u001f\u001edrop()\" mx-dragenter=\"\u001f\u001eenter()\" mx-dragleave=\"\u001f\u001eleave()\">drop here</div></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'stop<enterzone>': function (e) {
        e.changePointer(false);
    },
    'ok<leavezone>': function (e) {
        e.changePointer(true);
    },
    'del<dragfinish>': function (e) {
        if (e.moved && e.outZone) {
            $(e.dragNode).slideUp();
            setTimeout(function () {
                e.dragZone.removeChild(e.dragNode);
            }, 500);
        }
    },
    'start<dragstart>': function (e) {
        e.originalEvent.dataTransfer.effectAllowed = 'none';
        e.originalEvent.dataTransfer.setDragImage(e.target, -10, -18);
    },
    'drop<drop>': function (e) {
        console.log(e);
        $(e.eventTarget).css({
            borderColor: '#ccc'
        });
    },
    'enter<dragenter>': function (e) {
        $(e.eventTarget).css({
            borderColor: 'red'
        });
    },
    'leave<dragleave>': function (e) {
        $(e.eventTarget).css({
            borderColor: '#ccc'
        });
    },
    '$doc<dragover>': function (e) {
        e.preventDefault();
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dialog/__test__/index',["magix","mx-dialog/index"],function(require,exports,module){
/*Magix,Dialog*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Dialog = require('mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"1\u001d","subs":[{"keys":["inDialog"],"path":"#\u001f","tmpl":"<%if($$.inDialog){%><div class=\"aC\">加载view测试</div><div class=\"aD\"><%}%><h2>mx-dialog</h2><h3>内置alert与confirm</h3><div class=\"B ag\"><button type=\"button\" class=\"al am j\" mx-click=\"\u001f\u001ealert()\">alert</button><button type=\"button\" class=\"al am j\" mx-click=\"\u001f\u001econfirm()\">confirm</button></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"alert()\"&gt;alert&lt;/button&gt;\n&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"confirm()\"&gt;confirm&lt;/button&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'alert&lt;click&gt;' () {\n        this.alert('xxx', () => {\n            console.log('确定被点击');\n        });\n    },\n    'confirm&lt;click&gt;' () {\n        this.confirm('xxx', () => {\n            console.log('确定被点击');\n        }, () => {\n            console.log('取消被点击');\n        });\n    }\n});</pre></div><h3 class=\"f\">加载普通view</h3><div class=\"B ag\"><button type=\"button\" class=\"al am j\" mx-click=\"\u001f\u001eview()\">view</button></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"view()\"&gt;view&lt;/button&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'view&lt;click&gt;' () {\n        this.mxDialog('path/to/view', {\n            width: 900\n        });\n    }\n});</pre></div><%if($$.inDialog){%></div><div class=\"aE\">dialog footer</div><%}%>","s":"1\u001d"}]},
    mixins: [Dialog],
    init: function (extra) {
        this.updater.set(extra);
    },
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'alert<click>': function () {
        this.alert('xxx', function () {
            console.log('确定被点击');
        });
    },
    'confirm<click>': function () {
        this.confirm('xxx', function () {
            console.log('确定被点击');
        }, function () {
            console.log('取消被点击');
        });
    },
    'view<click>': function () {
        this.mxDialog('mx-dialog/__test__/index', {
            inDialog: true,
            width: 900
        });
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dropdown/__test__/index',["magix","mx-gtip/index","../index","../multiple"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
require("../multiple");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dropdown</h2><h3>单选</h3><div class=\"B ag\"><div mx-guid=\"g0\u001f\" mx-change=\"\u001f\u001eshowWeek()\" style=\"width:150px\" mx-view=\"mx-dropdown/index?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div><button mx-click=\"\u001f\u001etest()\" class=\"al s am\">toggle searchbox</button><div mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&disabled=true\" mx-change=\"\u001f\u001eshowWeek()\" class=\"v\" style=\"width:150px;border-radius: 4px 0 0 4px\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div><div mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\" mx-change=\"\u001f\u001eshowWeek()\" style=\"width:150px;margin-left:-1px; border-radius: 0 4px 4px 0\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"app/gallery/mx-dropdown/index\"\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeek()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n    &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n    &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n    &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n    &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n&lt;/mx-view&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeek&lt;change&gt;' (e) {\n        this.gtipRB('text:' + e.text + ',value:' + e.value);\n    }\n});</pre></div><h3 class=\"f\">单选带分组</h3><div class=\"B ag\"><div mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\" mx-change=\"\u001f\u001eshowWeek()\" class=\"Z\" style=\"width:150px\"><item group=\"true\">本周日期</item><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item><item group=\"true\">下周日期</item><item value=\"next-mon\">下周一</item><item value=\"next-wed\">下周三</item><item value=\"next-thu\">下周四</item><item value=\"next-fri\">下周五</item><item value=\"next-sat\">下周六</item></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"app/gallery/mx-dropdown/index\"\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeek()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;item group=\"true\"&gt;本周日期&lt;/item&gt;\n    &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n    &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n    &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n    &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n    &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n    &lt;item group=\"true\"&gt;下周日期&lt;/item&gt;\n    &lt;item value=\"next-mon\"&gt;下周一&lt;/item&gt;\n    &lt;item value=\"next-wed\"&gt;下周三&lt;/item&gt;\n    &lt;item value=\"next-thu\"&gt;下周四&lt;/item&gt;\n    &lt;item value=\"next-fri\"&gt;下周五&lt;/item&gt;\n    &lt;item value=\"next-sat\"&gt;下周六&lt;/item&gt;\n&lt;/mx-view&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeek&lt;change&gt;' (e) {\n        this.gtipRB('text:' + e.text + ',value:' + e.value);\n    }\n});</pre></div><h3 class=\"f\">动态数据并设置选中</h3><div class=\"B ag\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.userSelected%>&list=<%@$$.userList%>\" mx-change=\"\u001f\u001eshowUser()\" class=\"Z\" style=\"width:200px\"></div></div><div class=\"B\"><div>HTML Code:</div><pre lang=\"html\">&lt;mx-view\n    path=\"app/gallery/mx-dropdown/index\"\n    searchbox=\"true\"\n    empty-text=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"\n    selected=\"&lt;%@ userSelected %&gt;\"\n    list=\"&lt;%@ userList %&gt;\"\n    mx-change=\"showUser()\"\n    class=\"fl\" style=\"width:200px;\"&gt;\n&lt;/mx-view&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: 587828\n        });\n    },\n    'showUser&lt;change&gt;' (e) {\n        this.gtipRB('name:' + e.text + ',id:' + e.value);\n    }\n});</pre></div><h3 class=\"f\">多选</h3><div class=\"B ag\"><div mx-guid=\"g2\u001f\" mx-view=\"mx-dropdown/multiple?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\" mx-change=\"\u001f\u001eshowWeeks()\" class=\"Z\" style=\"width:150px\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"app/gallery/mx-dropdown/multiple\"\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeeks()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n    &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n    &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n    &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n    &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n&lt;/mx-view&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeeks&lt;change&gt;' (e) {\n        this.gtipRB('values:' + e.values);\n    }\n});</pre></div><h3 class=\"f\">多选带分组</h3><div class=\"B ag\"><div mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\" mx-change=\"\u001f\u001eshowWeeks()\" class=\"Z\" style=\"width:150px\"><item group=\"true\">本周日期</item><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item><item group=\"true\">下周日期</item><item value=\"next-mon\">下周一</item><item value=\"next-wed\">下周三</item><item value=\"next-thu\">下周四</item><item value=\"next-fri\">下周五</item><item value=\"next-sat\">下周六</item></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"app/gallery/mx-dropdown/multiple\"\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeeks()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;item group=\"true\"&gt;本周日期&lt;/item&gt;\n    &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n    &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n    &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n    &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n    &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n    &lt;item group=\"true\"&gt;下周日期&lt;/item&gt;\n    &lt;item value=\"next-mon\"&gt;下周一&lt;/item&gt;\n    &lt;item value=\"next-wed\"&gt;下周三&lt;/item&gt;\n    &lt;item value=\"next-thu\"&gt;下周四&lt;/item&gt;\n    &lt;item value=\"next-fri\"&gt;下周五&lt;/item&gt;\n    &lt;item value=\"next-sat\"&gt;下周六&lt;/item&gt;\n&lt;/mx-view&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeeks&lt;change&gt;' (e) {\n        this.gtipRB('values:' + e.values);\n    }\n});</pre></div><h3 class=\"f\">动态数据并设置选中</h3><div class=\"B ag\"><div mx-guid=\"g3\u001f\" mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.usersSelected%>&list=<%@$$.userList%>\" mx-change=\"\u001f\u001eshowUsers()\" class=\"Z\" style=\"width:200px\"></div></div><div class=\"B\"><div>HTML Code:</div><pre lang=\"html\">&lt;mx-view\n    path=\"app/gallery/mx-dropdown/multiple\"\n    searchbox=\"true\"\n    empty-text=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"\n    selected=\"&lt;%@ usersSelected %&gt;\"\n    list=\"&lt;%@ userList %&gt;\"\n    mx-change=\"showUsers()\"\n    class=\"fl\" style=\"width:200px;\"&gt;\n&lt;/mx-view&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            usersSelected: [58782,587829]\n        });\n    },\n    'showUsers&lt;change&gt;' (e) {\n        this.gtipRB('user ids:' + e.values);\n    }\n});</pre></div>","subs":[{"keys":["searchbox"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-dropdown/index?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["userSelected","userList"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.userSelected%>&list=<%@$$.userList%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["searchbox"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-dropdown/multiple?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["usersSelected","userList"],"path":"div[mx-guid=\"g3\u001f\"]","attr":"mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.usersSelected%>&list=<%@$$.userList%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            userList: [{
                    name: 'xinglie',
                    id: 58782
                }, {
                    name: 'xinglie1',
                    id: 587821
                }, {
                    name: 'xinglie2',
                    id: 587822
                }, {
                    name: 'xinglie3',
                    id: 587823
                }, {
                    name: 'xinglie4',
                    id: 587824
                }, {
                    name: 'xinglie5',
                    id: 587825
                }, {
                    name: 'xinglie6',
                    id: 587826
                }, {
                    name: 'xinglie7',
                    id: 587827
                }, {
                    name: 'xinglie8',
                    id: 587828
                }, {
                    name: 'xinglie9',
                    id: 587829
                }],
            userSelected: 587828,
            usersSelected: [58782, 587829]
        });
    },
    'showWeek<change>': function (e) {
        this.gtipRB('text:' + e.text + ',value:' + e.value);
    },
    'showUser<change>': function (e) {
        this.gtipRB('name:' + e.text + ',id:' + e.value);
    },
    'showWeeks<change>': function (e) {
        this.gtipRB('values:' + e.values);
    },
    'showUsers<change>': function (e) {
        this.gtipRB('user ids:' + e.values);
    },
    'test<click>': function (e) {
        this.updater.digest({
            searchbox: !this.updater.get('searchbox')
        });
        console.log(this.updater.get('searchbox'));
    }
});

});
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
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-form/__test__/index',["magix","../index","mx-color/picker","mx-taginput/index","mx-dropdown/index","mx-time/picker","mx-calendar/datepicker","mx-slider/index","mx-number/index","mx-slider/range","mx-progress/index","mx-uploader/index","./sub"],function(require,exports,module){
/*Magix,Form*/
require("mx-color/picker");
require("mx-taginput/index");
require("mx-dropdown/index");
require("mx-time/picker");
require("mx-calendar/datepicker");
require("mx-slider/index");
require("mx-number/index");
require("mx-slider/range");
require("mx-progress/index");
require("mx-uploader/index");
require("./sub");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-form</h2><h3>示例表单</h3><div class=\"B ag\"><div style=\"width:600px;border:solid 1px #ccc;border-radius: 5px;padding: 25px 0\"><div class=\"at ag\"><label class=\"au av\">活动名称：</label><div class=\"aw\"><input mx-guid=\"g0\u001f\" mx-ssid=\"\u001f0\" class=\"an\" placeholder=\"请填写活动名称\" value=\"<%=$$.name%>\" mx-change=\"\u001f\u001e_b({c:[{p:'name',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b({m:'__',a:{}})\"></div></div><div class=\"at ag\"><label class=\"au\">色彩：</label><div class=\"aw\"><input mx-view=\"mx-color/picker\" class=\"an\"></div></div><div class=\"at\"><label class=\"au av\">标签：</label><div class=\"aw\"><div mx-guid=\"g1\u001f\" mx-ssid=\"\u001f1\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected=<%@$$.tags%>\" mx-change=\"\u001f\u001e_b({c:[{p:'tags',f:{required:true},n:'selected'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\"></div></div></div><div class=\"at\"><label class=\"au av\">活动时间：</label><div class=\"aw\"><div mx-guid=\"g2\u001f\" mx-ssid=\"\u001f2\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=<%@$$.day%>\" mx-change=\"\u001f\u001e_b({c:[{p:'day',f:{required:true},n:'selected'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" style=\"width:180px\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div><span class=\"aa s g\">-</span><input mx-guid=\"g3\u001f\" mx-ssid=\"\u001f3\" class=\"an\" style=\"width:145px\" placeholder=\"请选择时间\" value=\"<%=$$.time%>\" mx-change=\"\u001f\u001e_b({c:[{p:'time',f:{required:true}}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" mx-view=\"mx-time/picker\"></div></div><div class=\"at\"><label class=\"au\">checkbox：</label><div class=\"aw\"><label class=\"h ak\"><input type=\"checkbox\" name=\"cb\" value=\"c1\" class=\"aq\" mx-change=\"\u001f\u001e_b({c:[{p:'checkbox'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" disabled=\"disabled\" checked=\"checked\">c1</label><label class=\"h\"><input type=\"checkbox\" name=\"cb\" value=\"c2\" class=\"aq\" mx-change=\"\u001f\u001e_b({c:[{p:'checkbox'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\">c2</label><label class=\"h\"><input type=\"checkbox\" mx-change=\"\u001f\u001e_b({c:[{p:'checkbox'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" name=\"cb\" value=\"c3\" class=\"as\" disabled=\"disabled\">c3</label><label class=\"h\"><input type=\"checkbox\" mx-change=\"\u001f\u001e_b({c:[{p:'checkbox'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" name=\"cb\" value=\"c4\" class=\"as\">c4</label></div></div><div class=\"at\"><label class=\"au\">radio：</label><div class=\"aw\"><label class=\"h ak\"><input checked=\"checked\" disabled=\"disabled\" type=\"radio\" mx-change=\"\u001f\u001e_b({c:[{p:'radio'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" value=\"r1\" class=\"ar\" name=\"magix\">r1</label><label class=\"h\"><input type=\"radio\" mx-change=\"\u001f\u001e_b({c:[{p:'radio'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" value=\"r2\" class=\"ar\" name=\"magix\">r2</label><label class=\"h\"><input type=\"radio\" mx-change=\"\u001f\u001e_b({c:[{p:'radio'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" value=\"r3\" class=\"ar\" name=\"magix\">r3</label></div></div><div class=\"at\"><label class=\"au\">日期：</label><div class=\"aw\"><input mx-guid=\"g4\u001f\" mx-view=\"mx-calendar/datepicker\" class=\"an\" placeholder=\"请选择开始日期\" value=\"<%=$$.dateStart%>\" mx-change=\"\u001f\u001e_b({c:[{p:'dateStart'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" style=\"width:162px\"><span class=\"aa s g\">-</span><input mx-guid=\"g5\u001f\" mx-view=\"mx-calendar/datepicker\" class=\"an\" placeholder=\"请选择结束日期\" value=\"<%=$$.dateEnd%>\" mx-change=\"\u001f\u001e_b({c:[{p:'dateEnd'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" style=\"width:162px\"></div></div><div class=\"at\"><label class=\"au\">范围：</label><div class=\"aw\"><div mx-guid=\"g6\u001f\" mx-change=\"\u001f\u001e_b({c:[{p:'range',n:'value'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\" mx-view=\"mx-slider/index?max=200&min=20&value=<%@$$.range%>&step=0.2\"></div></div></div><div class=\"at\"><label class=\"au\">数字：</label><div class=\"aw\"><div mx-view=\"mx-number/index\"></div></div></div><div class=\"at\"><label class=\"au\">范围：</label><div class=\"aw\"><div mx-guid=\"g7\u001f\" mx-view=\"mx-slider/range?max=500&min=200&value=<%@$$.range1%>&step=10\" mx-change=\"\u001f\u001e_b({c:[{p:'range1',n:'value'}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\"></div></div></div><div class=\"at\"><label class=\"au\">进度条：</label><div class=\"aw\"><div mx-view=\"mx-progress/index?value=0.35\"></div></div></div><div class=\"at\"><label class=\"au\">封面：</label><div class=\"aw\"><button class=\"al am\" mx-view=\"mx-uploader/index?action=.%2F&name=file1&multiple=true\">上传文件</button></div></div><div class=\"at\"><label class=\"au\">备注：</label><div class=\"aw\"><textarea mx-guid=\"g8\u001f\" mx-ssid=\"\u001f4\" class=\"ao\" rows=\"8\" mx-change=\"\u001f\u001e_b({c:[{p:'mark',f:{maxLength:10}}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\"><%=$$.mark,\"{maxLength:10}\"%></textarea></div></div><div mx-guid=\"g9\u001f\" mx-ssid=\"\u001f5\" mx-view=\"mx-form/__test__/sub?nameX1=<%@$$.name_x1%>\" mx-change=\"\u001f\u001e_b({c:[{p:'name_x1',f:{from:'nameX1'},n:'name-x1'},{p:'de',f:{from:'name_sub1'}}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\"></div><div class=\"ax\"><button class=\"al am\" mx-click=\"\u001f\u001eisValid()\">isValid</button><button class=\"al am t\" mx-click=\"\u001f\u001egetData()\">getData</button></div></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div class=\"form-item clearfix\"&gt;\n    &lt;label class=\"form-label form-required\"&gt;活动名称：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;&lt;input class=\"input\" placeholder=\"请填写活动名称\" value=\"&lt;%:name{required:true,blength:[20,50]}%&gt;\" /&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=\"form-item clearfix\"&gt;\n    &lt;label class=\"form-label\"&gt;色彩：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;&lt;input mx-view=\"app/gallery/mx-color/picker\" class=\"input\" /&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label form-required\"&gt;活动时间：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;mx-view path=\"app/gallery/mx-dropdown/index\"\n            searchbox=\"true\"\n            empty-text=\"请选择日期\"\n            selected=\"&lt;%:day{required:true}%&gt;\" style=\"width:180px;\"&gt;\n            &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n            &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n            &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n            &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n            &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n        &lt;/mx-view&gt;\n        &lt;span class=\"ib ml5 mr5\"&gt;-&lt;/span&gt;\n        &lt;input class=\"input\" style=\"width:145px\" placeholder=\"请选择时间\" value=\"&lt;%:time{required:true}%&gt;\" mx-view=\"app/gallery/mx-time/picker\" /&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label form-required\"&gt;标签：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;mx-view path=\"app/gallery/mx-taginput/index\"\n            list=\"&lt;%@list%&gt;\"\n            placeholder=\"请选择标签\"\n            selected=\"&lt;%:tags{required:true}%&gt;\"\n        &gt;&lt;/mx-view&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;checkbox：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c1\" class=\"checkbox\" /&gt;c1\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c2\" class=\"checkbox\" /&gt;c2\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c3\" class=\"checkbox\" /&gt;c3\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c4\" class=\"checkbox\" /&gt;c4\n        &lt;/label&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;radio：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"radio\" &lt;%:radio%&gt; value=\"r1\" class=\"radio\" name=\"magix\" /&gt;r1\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"radio\" &lt;%:radio%&gt; value=\"r2\" class=\"radio\" name=\"magix\" /&gt;r2\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"radio\" &lt;%:radio%&gt; value=\"r3\" class=\"radio\" name=\"magix\" /&gt;r3\n        &lt;/label&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;日期：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;input mx-view=\"app/gallery/mx-calendar/datepicker\" class=\"input\" placeholder=\"请选择开始日期\" value=\"&lt;%:dateStart%&gt;\" style=\"width:162px;\"&gt;\n        &lt;span class=\"ib ml5 mr5\"&gt;-&lt;/span&gt;\n        &lt;input mx-view=\"app/gallery/mx-calendar/datepicker\" class=\"input\" placeholder=\"请选择结束日期\" value=\"&lt;%:dateEnd%&gt;\" style=\"width:162px;\"&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;范围：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;mx-view mx-view=\"app/gallery/mx-slider/index\"\n            max=\"200\"\n            min=\"0\"\n            value=\"&lt;%:range%&gt;\"\n            step=\"0.2\"\n        &gt;&lt;/mx-view&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;范围：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;mx-view mx-view=\"app/gallery/mx-slider/range\"\n            max=\"500\"\n            min=\"200\"\n            value=\"&lt;%:range1%&gt;\"\n            step=\"10\"\n        &gt;&lt;/mx-view&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;封面：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;mx-view\n            tag=\"button\"\n            class=\"btn btn-brand\"\n            path=\"app/gallery/mx-uploader/index\"\n            action=\"./\"\n            view-name=\"file1\"\n            multiple=\"true\"\n        &gt;上传文件&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;备注：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;textarea class=\"textarea\" rows=\"8\"&gt;&lt;%:mark{maxLength:10}%&gt;&lt;/textarea&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-footer\"&gt;\n    &lt;button class=\"btn btn-brand\" mx-click=\"isValid()\"&gt;isValid&lt;/button&gt;\n    &lt;button class=\"btn btn-brand ml10\" mx-click=\"getData()\"&gt;getData&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Form = require('app/gallery/mx-form/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            checkbox: [],\n            range: 0,\n            range1: [230, 300],\n            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]\n        });\n    },\n    'isValid&lt;click&gt;' () {\n        console.log(this.isValid());\n    },\n    'getData&lt;click&gt;' () {\n        let src = this.updater.get();\n        let data = this.fromKeys(src, 'name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark');\n        console.log(data);\n    }\n});</pre></div>","subs":[{"keys":["name"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.name%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["list","tags"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected=<%@$$.tags%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["day"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=<%@$$.day%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["time"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"value=\"<%=$$.time%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["dateStart"],"path":"input[mx-guid=\"g4\u001f\"]","attr":"value=\"<%=$$.dateStart%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["dateEnd"],"path":"input[mx-guid=\"g5\u001f\"]","attr":"value=\"<%=$$.dateEnd%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["range"],"path":"div[mx-guid=\"g6\u001f\"]","attr":"mx-view=\"mx-slider/index?max=200&min=20&value=<%@$$.range%>&step=0.2\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["range1"],"path":"div[mx-guid=\"g7\u001f\"]","attr":"mx-view=\"mx-slider/range?max=500&min=200&value=<%@$$.range1%>&step=10\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["mark"],"path":"textarea[mx-guid=\"g8\u001f\"]"},{"keys":["name_x1"],"path":"div[mx-guid=\"g9\u001f\"]","attr":"mx-view=\"mx-form/__test__/sub?nameX1=<%@$$.name_x1%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    mixins: [Form],
    render: function () {
        var me = this;
        me.updater.digest({
            keys: ['aa', 'bb', 'cc'],
            name_x1: '----',
            user: [{
                    name: 'a'
                }, {
                    name: 'b'
                }, {
                    name: 'c'
                }, {
                    name: 'd'
                }, {
                    name: 'e'
                }],
            checkbox: [],
            range: 2,
            range1: [230, 300],
            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]
        });
    },
    'isValid<click>': function () {
        console.log(this.isValid());
    },
    'getData<click>': function () {
        var src = this.updater.get();
        var data = this.fromKeys(src, 'name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark,name_x1,de');
        console.log(data);
    },
    '__<focusin>': function (e) {
        console.log(e);
    },
    'delete<click>': function (e) {
        var user = this.updater.get('user');
        user.splice(e.params.key, 1);
        this.updater.digest({
            user: user
        });
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-form/__test__/sub',["magix","../index","./sub1"],function(require,exports,module){
/*Magix,Form*/
require("./sub1");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"at ag\"><label class=\"au av\">活动名称：</label><div class=\"aw\"><input mx-guid=\"g0\u001f\" mx-ssid=\"\u001f0\" class=\"an\" placeholder=\"请填写活动名称\" value=\"<%=$$.nameX1%>\" mx-change=\"\u001f\u001e_b({c:[{p:'nameX1',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\"></div></div><div mx-ssid=\"\u001f1\" mx-view=\"mx-form/__test__/sub1\" mx-change=\"\u001f\u001e_b({c:[{p:'name_sub1',f:{from:'name'}}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\"></div>","subs":[{"keys":["nameX1"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.nameX1%>\"","attrs":[{"n":"value","q":1,"p":1}]}]},
    mixins: [Form],
    init: function (extra) {
        this.updater.set(extra);
    },
    render: function () {
        var me = this;
        console.log(me.updater.get());
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-form/__test__/sub1',["magix","../index"],function(require,exports,module){
/*Magix,Form*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"at ag\"><label class=\"au av\">活动名称：</label><div class=\"aw\"><input mx-guid=\"g0\u001f\" mx-ssid=\"\u001f0\" class=\"an\" placeholder=\"请填写活动名称\" value=\"<%=$$.name%>\" mx-change=\"\u001f\u001e_b({c:[{p:'name',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\"></div></div>","subs":[{"keys":["name"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.name%>\"","attrs":[{"n":"value","q":1,"p":1}]}]},
    mixins: [Form],
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-gtip/__test__/index',["magix","mx-gtip/index"],function(require,exports,module){
/*Magix,GTip*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-gtip</h2><div class=\"B ag\"><button class=\"al Z\" mx-click=\"\u001f\u001ert()\">右上角提示</button><button class=\"al Z t\" mx-click=\"\u001f\u001erb()\">右下角提示</button><button class=\"al Z t\" mx-click=\"\u001f\u001elt();\">左上角提示</button><button class=\"al Z t\" mx-click=\"\u001f\u001elb();\">左下角提示</button></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;button class=\"btn fl\" mx-click=\"rt()\"&gt;右上角提示&lt;/button&gt;\n    &lt;button class=\"btn fl ml10\" mx-click=\"rb()\"&gt;右下角提示&lt;/button&gt;\n    &lt;button class=\"btn fl ml10\" mx-click=\"lt();\"&gt;左上角提示&lt;/button&gt;\n    &lt;button class=\"btn fl ml10\" mx-click=\"lb();\"&gt;左下角提示&lt;/button&gt;</pre><div class=\"z\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'rt&lt;click&gt;' () {\n        this.gtipRT('右上角，消息内容' + Date.now());\n    },\n    'rb&lt;click&gt;' () {\n        this.gtipRB('右下角，消息内容' + Date.now());\n    },\n    'lt&lt;click&gt;' () {\n        this.gtipLT('左上角，消息内容' + Date.now());\n    },\n    'lb&lt;click&gt;' () {\n        this.gtipLB('左下角，消息内容' + Date.now());\n    },\n    'rtt&lt;click&gt;' (e) {\n        this.gtipRT('右上角，消息内容' + Date.now(), e.params.s * 1000);\n    }\n});</pre></div>","subs":[]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'rt<click>': function () {
        this.gtipRT('右上角，消息内容' + Date.now());
    },
    'rb<click>': function () {
        this.gtipRB('右下角，消息内容' + Date.now());
    },
    'lt<click>': function () {
        this.gtipLT('左上角，消息内容' + Date.now());
    },
    'lb<click>': function () {
        this.gtipLB('左下角，消息内容' + Date.now());
    },
    'rtt<click>': function (e) {
        this.gtipRT('右上角，消息内容' + Date.now(), e.params.s * 1000);
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-linkage/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-linkage</h2><h3>默认情形</h3><div class=\"B ag\"><div mx-guid=\"g0\u001f\" mx-change=\"\u001f\u001eshowValue()\" mx-view=\"mx-linkage/index?list=<%@$$.list%>&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%9C%81%E5%B8%82%E5%8C%BA\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-linkage\n    list=\"&lt;%@list%&gt;\"\n    splitter='-'\n    headers=\"&lt;%@headers%&gt;\"\n    placeholder=\"请选择省市区\" /&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            headers: ['省份', '城市', '地区'],\n            list: [{\n                id: 1,\n                text: '浙江省'\n            }, {\n                id: 2,\n                text: '河南省'\n            }, {\n                id: 3,\n                text: '杭州市',\n                pId: 1\n            }, {\n                id: 4,\n                text: '周口市',\n                pId: 2\n            }, {\n                id: 5,\n                text: '安徽省'\n            }, {\n                id: 6,\n                text: '新疆维吾尔自治区'\n            }, {\n                id: 7,\n                pId: 3,\n                text: '余杭区'\n            }, {\n                id: 8,\n                text: '湖州市',\n                pId: 1\n            }, {\n                id: 9,\n                text: '长吉县',\n                pId: 8\n            }]\n        });\n    }\n});</pre></div><h3 class=\"f\">禁用</h3><div class=\"B ag\"><div mx-guid=\"g1\u001f\" mx-change=\"\u001f\u001eshowValue()\" mx-view=\"mx-linkage/index?list=<%@$$.list%>&selected=1%2C3&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-linkage\n    list=\"&lt;%@list%&gt;\"\n    selected=\"1,3\"\n    splitter='-'\n    headers=\"&lt;%@headers%&gt;\"\n    disabled=\"true\"\n    placeholder=\"请选择分类\" /&gt;</pre></div>","subs":[{"keys":["list","headers"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-linkage/index?list=<%@$$.list%>&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%9C%81%E5%B8%82%E5%8C%BA\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list","headers"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-linkage/index?list=<%@$$.list%>&selected=1%2C3&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"","attrs":[{"n":"mx-view","v":1}]}]},
    render: function () {
        var me = this;
        me.updater.digest({
            headers: ['省份', '城市', '地区'],
            list: [{
                    id: 1,
                    text: '浙江省'
                }, {
                    id: 2,
                    text: '河南省'
                }, {
                    id: 3,
                    text: '杭州市',
                    pId: 1
                }, {
                    id: 4,
                    text: '周口市',
                    pId: 2
                }, {
                    id: 5,
                    text: '安徽省'
                }, {
                    id: 6,
                    text: '新疆维吾尔自治区'
                }, {
                    id: 7,
                    pId: 3,
                    text: '余杭区'
                }, {
                    id: 8,
                    text: '湖州市',
                    pId: 1
                }, {
                    id: 9,
                    text: '长吉县',
                    pId: 8
                }]
        });
    },
    'showValue<change>': function (e) {
        console.log(e);
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-hour/__test__/index',["magix","../index","../day","../week"],function(require,exports,module){
/*Magix*/
require("../index");
require("../day");
require("../week");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-hour</h2><h3>小时选取基础组件</h3><div class=\"B ag\"><div mx-view=\"mx-hour/index?range=00001111011\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-hour/index\" view-range=\"00001111011\"&lt;/div&gt;</pre></div><h3 class=\"f\">天小时选取组件</h3><div class=\"B ag\"><div mx-view=\"mx-hour/day?hours=00001111011\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-hour/day\" view-hours=\"00001111011\"&lt;/div&gt;</pre></div><h3 class=\"f\">周小时选取组件</h3><div class=\"B ag\"><div mx-view=\"mx-hour/week?days=<%@['','001111','','','00000000111111001']%>\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-hour/week\" view-days=\"&lt;%@['','001111','','','00000000111111001']%&gt;\"&gt;&lt;/div&gt;</pre></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-loading/__test__/mask',["magix","../mask"],function(require,exports,module){
/*Magix,MLoading*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var MLoading = require('../mask');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-loading</h2><h3>mask mixin</h3><div class=\"B ag\"><p>loading mixin只要view启用即可，不需要修改view中的任何方法即可完成相应的效果</p><p>通常某个view首次渲染时我们会在节点内部增加一个loading动画，而在view后续渲染时，不能把内容整个销毁换成动画，这个成本太高了。</p><p>为了解决后续也能显示一个加载动画，可启用该mixin，解决后续的动画显示。</p><p mx-guid=\"g0\u001f\" class=\"b n\">1\u001d</p><button mx-click=\"\u001f\u001erefresh()\" class=\"al am b\">点此按钮2s后重新渲染当前view</button></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;p&gt;\n    loading mixin只要view启用即可，不需要修改view中的任何方法即可完成相应的效果\n&lt;/p&gt;\n&lt;p&gt;\n    通常某个view首次渲染时我们会在节点内部增加一个loading动画，而在view后续渲染时，不能把内容整个销毁换成动画，这个成本太高了。\n&lt;/p&gt;\n&lt;p&gt;\n    为了解决后续也能显示一个加载动画，可启用该mixin，解决后续的动画显示。\n&lt;/p&gt;\n&lt;p class=\"mt10 mb10\"&gt;\n    第&lt;%=count%&gt;次渲染页面\n&lt;/p&gt;\n&lt;button mx-click=\"refresh()\" class=\"btn btn-brand mt10\"&gt;点此按钮2s后重新渲染当前view&lt;/button&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet MLoading = require('app/gallery/loading/mask');\nmodule.exports = Magix.View.extend({\n    tmpl: '@mask.html',\n    mixins: [MLoading],\n    init() {\n        this.count = 1;\n    },\n    render() {\n        let me = this;\n        setTimeout(me.wrapAsync(() => {\n            me.updater.digest({\n                count: this.count++\n            });\n        }), 2e3);\n    },\n    'refresh&lt;click&gt;' () {\n        this.render();\n    }\n});</pre></div>","subs":[{"keys":["count"],"path":"p[mx-guid=\"g0\u001f\"]","tmpl":"第<%=$$.count%>次渲染页面","s":"1\u001d"}]},
    mixins: [MLoading],
    init: function () {
        this.count = 1;
    },
    render: function () {
        var _this = this;
        var me = this;
        setTimeout(me.wrapAsync(function () {
            me.updater.digest({
                count: _this.count++
            });
        }), 2e3);
    },
    'refresh<click>': function () {
        this.render();
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-number/__test__/index',["magix","mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-number</h2><h3>默认情形</h3><div class=\"B ag\"><div mx-view=\"mx-number/index\"></div><input type=\"number\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-number /&gt;</pre></div><h3 class=\"f\">最大值、最小值及step</h3><div class=\"B ag\"><div mx-view=\"mx-number/index?max=10&min=-10&step=0.5&ratio=4&value=8.5\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-number\n    max=\"10\"\n    min=\"-10\"\n    step=\"0.5\"\n    value=\"8.5\" /&gt;</pre></div><h3 class=\"f\">禁用</h3><div class=\"B ag\"><div mx-view=\"mx-number/index?disabled=true&value=20\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-number disabled=\"true\" value=\"20\" /&gt;</pre></div><h3 class=\"f\">响应事件</h3><div class=\"B ag\"><div mx-change=\"\u001f\u001eshow()\" mx-view=\"mx-number/index?max=10&min=-10&step=0.5&value=8.5\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-number\n    max=\"10\"\n    min=\"-10\"\n    step=\"0.5\"\n    value=\"8.5\"\n    mx-change=\"show()\" /&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'show&lt;change&gt;' (e) {\n        this.gtipRT('当前值：' + e.eventTarget.value);\n    }\n});</pre></div>","subs":[]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'show<change>': function (e) {
        this.gtipRT('当前值：' + e.eventTarget.value);
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-pagination/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-pagination</h2><h3>完整模式</h3><div class=\"B ag\"><div mx-guid=\"g0\u001f\" class=\"Z\" mx-view=\"mx-pagination/index?total=2000&step=3&page=<%!$eu($$.page)%>\"></div><button class=\"al\" mx-click=\"\u001f\u001etest()\">test</button></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"3\"\n    page=\"2\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"f\">简单模式</h3><div class=\"B ag\"><div mx-view=\"mx-pagination/index?total=2000&step=5&simplify=true&page=15\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"5\"\n    simplify=\"true\"\n    page=\"15\"/&gt;</pre></div><h3 class=\"f\">迷你模式</h3><div class=\"B ag\"><div mx-view=\"mx-pagination/index?total=2000&step=5&mini=true&page=10\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"5\"\n    mini=\"true\"\n    page=\"10\"/&gt;</pre></div><h3 class=\"f\">监听change事件</h3><div class=\"B ag\"><div mx-change=\"\u001f\u001eshow()\" mx-view=\"mx-pagination/index?total=2000&step=5&page=10\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"5\"\n    page=\"10\"\n    mx-change=\"show()\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'show&lt;change&gt;' (e) {\n        console.log(e.page, e.size);\n    }\n});</pre></div>","subs":[{"keys":["page"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-pagination/index?total=2000&step=3&page=<%!$eu($$.page)%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    render: function () {
        var me = this;
        me.updater.digest({
            page: 1
        });
    },
    'show<change>': function (e) {
        console.log(e.page, e.size);
    },
    'test<click>': function (e) {
        var page = this.updater.get('page');
        this.updater.digest({
            page: page + 1
        });
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-popconfirm/__test__/index',["magix","../../mx-checkbox/linkage","../../mx-gtip/index","../index"],function(require,exports,module){
/*Magix,Linkage,GTip*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Linkage = require('../../mx-checkbox/linkage');
var GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popconfirm</h2><div class=\"B ag\"><table class=\"ay az\"><thead><tr><th><input type=\"checkbox\" class=\"aq\" linkage=\"example1\"></th><%for(var a=0;a<5;a++){%><th>示例字段<%=a%></th><%}%><th>操作</th></tr></thead><tbody><%for(var b=0;b<10;b++){%><tr><td><input type=\"checkbox\" class=\"aq\" linkage-parent=\"example1\" value=\"ex1_<%=b%>\"></td><%for(var c=0;c<5;c++){%><td>示例字段内容<%=c%></td><%}%><td><a href=\"#\" mx-enter=\"\u001f\u001edel({id:<%=b%>})\" mx-view=\"mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%EF%BC%9F\">删除</a></td></tr><%}%></tbody></table></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n            &lt;th&gt;操作&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n            &lt;td&gt;&lt;a href=\"#\" mx-enter=\"del({id:&lt;%=i%&gt;})\" mx-view=\"mx-popconfirm/index\" view-content=\"确认？\"&gt;删除&lt;/a&gt;&lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Linkage = require('../../mx-checkbox/linkage');\nlet GTip = require('../../mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Linkage,GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'del&lt;enter&gt;' (e) {\n        this.gtipRT('delete:' + e.params.id);\n    }\n});</pre></div>","subs":[]},
    mixins: [Linkage, GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'del<enter>': function (e) {
        this.gtipRT('delete:' + e.params.id);
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-popmenu/__test__/index',["magix","$","../index"],function(require,exports,module){
/*Magix,$*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
Magix.applyStyle("e",".aN{-webkit-box-shadow:0 3px 3px #eee;box-shadow:0 3px 3px #eee;list-style:none;margin:0;border:1px solid #e6e6e6;border-radius:4px;position:relative;background-color:#fff}.aO{color:#666;display:block;padding:0 7px;margin:6px 10px;height:26px;line-height:26px;border-radius:4px;white-space:nowrap;cursor:pointer}.aO:hover{color:#fff;background-color:#8383eb}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popmenu</h2><div class=\"B ag\"><button mx-guid=\"g0\u001f\" type=\"button\" class=\"al am\" mx-view=\"mx-popmenu/index?related=%23menu_<%!$eu($$.viewId)%>\">显示更多菜单</button><ul mx-guid=\"g1\u001f\" class=\"af aN\" id=\"menu_<%=$$.viewId%>\"><li class=\"aO\" mx-click=\"\u001f\u001ehide()\">示例菜单1</li><li class=\"aO\" mx-click=\"\u001f\u001ehide()\">示例菜单2</li><li class=\"aO\" mx-click=\"\u001f\u001ehide()\">示例菜单3</li><li class=\"aO\" mx-click=\"\u001f\u001ehide()\">示例菜单4</li><li class=\"aO\" mx-click=\"\u001f\u001ehide()\">示例菜单5</li><li class=\"aO\" mx-click=\"\u001f\u001ehide()\">示例菜单6</li></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand\" mx-view=\"app/gallery/mx-popmenu/index\" view-related=\"#menu_&lt;%=viewId%&gt;\"&gt;显示更多菜单&lt;/button&gt;\n    &lt;ul class=\"none menu\" id=\"menu_&lt;%=viewId%&gt;\"&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单1&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单2&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单3&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单4&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单5&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单6&lt;/li&gt;\n    &lt;/ul&gt;</pre><div class=\"z\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    'hide&lt;click&gt;' () {\n        $('#' + this.id + ' button').invokeView('hide');\n    }\n});</pre></div>","subs":[{"keys":["viewId"],"path":"button[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-popmenu/index?related=%23menu_<%!$eu($$.viewId)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["viewId"],"path":"ul[mx-guid=\"g1\u001f\"]","attr":"id=\"menu_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]}]},
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'hide<click>': function () {
        $('#' + this.id + ' button').invokeView('_a');
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-popover/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popover</h2><div class=\"B ag\"><button class=\"al\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9\">提示右</button><button class=\"al t\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top\">提示上</button><button class=\"al t\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=bottom\">提示下</button><button class=\"al t\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left\">提示左</button><button class=\"al t\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left&align=top\">提示左顶部对齐</button><button class=\"al t\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=right&align=top\">提示右顶部对齐</button><button class=\"al t\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top&align=left\">提示上左对齐</button><button class=\"al t\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top&align=right\">提示上右对齐</button></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;button class=\"btn\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"&gt;提示右&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"top\"&gt;提示上&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"bottom\"&gt;提示下&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"left\"&gt;提示左&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"left\"\n    view-align=\"top\"&gt;提示左顶部对齐&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"right\"\n    view-align=\"top\"&gt;提示右顶部对齐&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"top\"\n    view-align=\"left\"&gt;提示上左对齐&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"top\"\n    view-align=\"right\"&gt;提示上右对齐&lt;/button&gt;</pre></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-progress/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-progress</h2><h3>默认情形</h3><div class=\"B ag\"><div class=\"Z\" mx-view=\"mx-progress/index?value=0.36\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-progress\n    value=\"0.36\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"f\">禁用</h3><div class=\"B ag\"><div class=\"Z\" mx-view=\"mx-progress/index?value=0.05&disabled=true\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-progress\n    value=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"/&gt;</pre></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-slider/__test__/index',["magix","mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-slider</h2><h3>默认情形</h3><div class=\"B ag\"><div mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-slider/index\"\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"0.05\"\n    class=\"fl\"\n&gt;&lt;/mx-view&gt;</pre></div><h3 class=\"f\">垂直</h3><div class=\"B ag\"><div mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05&vertical=true\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-slider/index\"\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"0.05\"\n    class=\"fl\"\n    vertical=\"true\"\n&gt;&lt;/mx-view&gt;</pre></div><h3 class=\"f\">禁用</h3><div class=\"B ag\"><div mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05&disabled=true\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-slider/index\"\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"\n&gt;&lt;/mx-view&gt;</pre></div><h3 class=\"f\">响应change事件</h3><div class=\"B ag\"><div mx-view=\"mx-slider/index?max=200&min=0&value=130&step=5\" mx-change=\"\u001f\u001eshowValue()\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-slider/index\"\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"5\"\n    mx-change=\"showValue()\"\n    class=\"fl\"\n&gt;&lt;/mx-view&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showValue&lt;change&gt;' (e) {\n        this.gtipRT('value:' + e.value);\n    }\n});</pre></div>","subs":[]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showValue<change>': function (e) {
        this.gtipRT('value:' + e.value);
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-slider/__test__/range',["magix","mx-gtip/index","../range"],function(require,exports,module){
/*Magix,GTip*/
require("../range");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-slider</h2><h3>默认情形</h3><div class=\"B ag\"><div mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-slider/range\"\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    class=\"fl\"\n&gt;&lt;/mx-view&gt;</pre></div><h3 class=\"f\">垂直</h3><div class=\"B ag\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&vertical=<%!$eu($$.vertical)%>\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-slider/range\"\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    vertical=\"true\"\n    class=\"fl\"\n&gt;&lt;/mx-view&gt;</pre></div><h3 class=\"f\">禁用</h3><div class=\"B ag\"><div mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&disabled=true\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-slider/range\"\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"\n&gt;&lt;/mx-view&gt;</pre></div><h3 class=\"f\">响应change事件</h3><div class=\"B ag\"><div mx-view=\"mx-slider/range?max=500&min=200&value=210%2C350&step=10\" mx-change=\"\u001f\u001eshowValue()\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-slider/range\"\n    max=\"500\"\n    min=\"200\"\n    value=\"210,350\"\n    step=\"10\"\n    mx-change=\"showValue()\"\n    class=\"fl\"\n&gt;&lt;/mx-view&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showValue&lt;change&gt;' (e) {\n        this.gtipRT('value:' + e.value);\n    }\n});</pre></div>","subs":[{"keys":["vertical"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&vertical=<%!$eu($$.vertical)%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            vertical: true
        });
    },
    'showValue<change>': function (e) {
        this.gtipRT('value:' + e.value);
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-suggest/__test__/index',["magix","mx-gtip/index","$","../index"],function(require,exports,module){
/*Magix,GTip,$*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
var $ = require('$');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-suggest</h2><h3>默认情形</h3><div class=\"B ag\"><input mx-guid=\"g0\u001f\" mx-view=\"mx-suggest/index?list=<%@$$.list%>\" class=\"an\" style=\"width:200px\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"app/gallery/mx-suggest/index\"\n    tag=\"input\"\n    class=\"input\"\n    list=\"&lt;%@list%&gt;\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    }\n});</pre></div><h3 class=\"f\">对象列表</h3><div class=\"B ag\"><input mx-guid=\"g1\u001f\" mx-view=\"mx-suggest/index?list=<%@$$.list1%>&textKey=text&valueKey=id\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"app/gallery/mx-suggest/index\"\n    tag=\"input\"\n    class=\"input\"\n    list=\"&lt;%@list1%&gt;\"\n    text-key=\"text\"\n    value-key=\"id\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: [{\n                text: 'abc1',\n                id: 1\n            }, {\n                text: 'abc2',\n                id: 2\n            }, {\n                text: 'abc3',\n                id: 3\n            }, {\n                text: 'abc4',\n                id: 4\n            }, {\n                text: 'abc5',\n                id: 5\n            }, {\n                text: 'abc6',\n                id: 6\n            }, {\n                text: 'abc7',\n                id: 7\n            }, {\n                text: 'abc8',\n                id: 8\n            }, {\n                text: 'abc9',\n                id: 9\n            }, {\n                text: 'abc0',\n                id: 0\n            }]\n        });\n    }\n});</pre></div><h3 class=\"f\">响应事件</h3><div class=\"B ag\"><input mx-guid=\"g2\u001f\" mx-view=\"mx-suggest/index?list=<%@$$.list%>\" class=\"an\" mx-pick=\"\u001f\u001eshowPick()\" mx-showlist=\"\u001f\u001eshowList()\" mx-hidelist=\"\u001f\u001ehideList()\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"app/gallery/mx-suggest/index\"\n    tag=\"input\"\n    class=\"input\"\n    list=\"&lt;%@list%&gt;\"\n    mx-pick=\"showPick()\"\n    mx-showlist=\"showList()\"\n    mx-hidelist=\"hideList()\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    },\n    'showPick&lt;pick&gt;' (e) {\n        this.gtipRT('选中：' + e.item);\n    },\n    'showList&lt;showlist&gt;' () {\n        this.gtipRT('列表展示');\n    },\n    'hideList&lt;hidelist&gt;' () {\n        this.gtipRT('列表关闭');\n    }\n});</pre></div><h3 class=\"f\">更新列表</h3><div class=\"B ag\"><input mx-guid=\"g3\u001f\" mx-view=\"mx-suggest/index?list=<%@$$.list2%>\" class=\"an\" mx-input=\"\u001f\u001eupdateList()\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"mx-suggest/index\"\n    tag=\"input\"\n    class=\"input\"\n    list=\"&lt;%@list2%&gt;\"\n    mx-input=\"updateList()\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet $ = require('$');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list2: []\n        });\n    },\n    'updateList&lt;input&gt;' (e) {\n        let target = $(e.eventTarget);\n        let list = ['163.com', 'qq.com', '126.com', 'sina.com'];\n        let v = $.trim(target.val());\n        let newList = [];\n        if (v) {\n            if (v.indexOf('@') == -1) {\n                for (let a of list) {\n                    newList.push(v + '@' + a);\n                }\n            } else {\n                let parts = v.split('@');\n                for (let a of list) {\n                    if (a.indexOf(parts[1]) >= 0) {\n                        newList.push(parts[0] + '@' + a);\n                    }\n                }\n            }\n        }\n        target.invokeView('update', [newList]);\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list1"],"path":"input[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list1%>&textKey=text&valueKey=id\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list"],"path":"input[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list2"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list2%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            list1: [{
                    text: 'abc1',
                    id: 1
                }, {
                    text: 'abc2',
                    id: 2
                }, {
                    text: 'abc3',
                    id: 3
                }, {
                    text: 'abc4',
                    id: 4
                }, {
                    text: 'abc5',
                    id: 5
                }, {
                    text: 'abc6',
                    id: 6
                }, {
                    text: 'abc7',
                    id: 7
                }, {
                    text: 'abc8',
                    id: 8
                }, {
                    text: 'abc9',
                    id: 9
                }, {
                    text: 'abc0',
                    id: 0
                }],
            list2: []
        });
    },
    'showPick<pick>': function (e) {
        this.gtipRT('选中：' + e.item);
    },
    'showList<showlist>': function () {
        this.gtipRT('列表展示');
    },
    'hideList<hidelist>': function () {
        this.gtipRT('列表关闭');
    },
    'updateList<input>': function (e) {
        var target = $(e.eventTarget);
        var list = ['163.com', 'qq.com', '126.com', 'sina.com'];
        var v = $.trim(target.val());
        var newList = [];
        if (v) {
            if (v.indexOf('@') == -1) {
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var a = list_1[_i];
                    newList.push(v + '@' + a);
                }
            }
            else {
                var parts = v.split('@');
                for (var _a = 0, list_2 = list; _a < list_2.length; _a++) {
                    var a = list_2[_a];
                    if (a.indexOf(parts[1]) >= 0) {
                        newList.push(parts[0] + '@' + a);
                    }
                }
            }
        }
        target.invokeView('update', [newList]);
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-table/__test__/index',["magix","../../mx-checkbox/linkage","../sticky","../index","../rwd"],function(require,exports,module){
/*Magix,Linkage*/
require("../sticky");
require("../index");
require("../rwd");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Linkage = require('../../mx-checkbox/linkage');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-table</h2><h3>固定表头</h3><div class=\"B ag\"><div mx-view=\"mx-table/sticky\"><table class=\"ay az\"><thead><tr><th><input type=\"checkbox\" class=\"aq\" linkage=\"example1\"></th><%for(var a=0;a<5;a++){%><th>示例字段<%=a%></th><%}%></tr></thead><tbody><%for(var b=0;b<10;b++){%><tr><td><input type=\"checkbox\" class=\"aq\" linkage-parent=\"example1\" value=\"ex1_<%=b%>\"></td><%for(var c=0;c<5;c++){%><td>示例字段内容<%=c%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"app/gallery/mx-table/sticky\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-view&gt;</pre></div><h3 class=\"f\">固定列</h3><div class=\"B ag\"><div mx-view=\"mx-table/index?rwdRange=2%2C-1\"><table class=\"ay az\"><thead><tr><th style=\"width:50px\"><input type=\"checkbox\" class=\"aq\" linkage=\"example2\"></th><%for(var d=0;d<25;d++){%><th style=\"width:200px\">示例字段<%=d%></th><%}%><th style=\"width:100px\">操作</th><th style=\"width:100px\">操作</th></tr></thead><tbody><%for(var e=0;e<10;e++){%><tr><td style=\"width:50px\"><input type=\"checkbox\" class=\"aq\" linkage-parent=\"example2\" value=\"ex1_<%=e%>\"></td><%for(var f=0;f<25;f++){%><td style=\"width:200px\">示例字段内容<%=f%></td><%}%><td style=\"width:100px\"><a href=\"#\">删除</a><br><a href=\"#\">报告</a><br><%if(e%3){%><a href=\"#\">代码</a><br><a href=\"#\">备注</a><br><a href=\"#\">更多</a><br><%}%></td><td style=\"width:200px\">adf</td></tr><%}%></tbody></table></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-table rwd-range=\"2,-1\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:50px\"&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example2\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style=\"width:200px\"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n                &lt;th style=\"width:100px\"&gt;操作&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td style=\"width:50px\"&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example2\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td style=\"width:200px\"&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n                &lt;td style=\"width:100px\"&gt;\n                    &lt;a href=\"#\"&gt;删除&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href=\"#\"&gt;报告&lt;/a&gt;&lt;br /&gt;\n                    &lt;%if(i%3){%&gt;\n                    &lt;a href=\"#\"&gt;代码&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href=\"#\"&gt;备注&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href=\"#\"&gt;更多&lt;/a&gt;&lt;br /&gt;\n                    &lt;%}%&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div><h3 class=\"f\">固定列和表头</h3><div class=\"B ag\"><div mx-view=\"mx-table/index?rwdRange=2%2C-2&sticky=true\"><table class=\"ay az\"><thead><tr><th style=\"width:50px\"><input type=\"checkbox\" class=\"aq\" linkage=\"example3\"></th><%for(var g=0;g<25;g++){%><th style=\"width:200px\">示例字段<%=g%></th><%}%></tr></thead><tbody><%for(var h=0;h<10;h++){%><tr><td style=\"width:50px\"><input type=\"checkbox\" class=\"aq\" linkage-parent=\"example3\" value=\"ex1_<%=h%>\"></td><%for(var i=0;i<25;i++){%><td style=\"width:200px\">示例字段内容<%=i%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"app/gallery/mx-table/index\" rwd-range=\"2,-2\" sticky=\"true\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:50px\"&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example3\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style=\"width:200px\"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td style=\"width:50px\"&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example3\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td style=\"width:200px\"&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-view&gt;</pre></div><h3 class=\"f\">旧版</h3><div class=\"B ag\"><div mx-view=\"mx-table/rwd?rwdRange=2%2C-2\"><table class=\"ay az\"><thead><tr><th style=\"width:50px\"><input type=\"checkbox\" class=\"aq\" linkage=\"example4\"></th><%for(var j=0;j<25;j++){%><th style=\"width:200px\">示例字段<%=j%></th><%}%></tr></thead><tbody><%for(var k=0;k<10;k++){%><tr><td><input type=\"checkbox\" class=\"aq\" linkage-parent=\"example4\" value=\"ex1_<%=k%>\"></td><%for(var l=0;l<25;l++){%><td>示例字段内容<%=l%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"app/gallery/mx-table/rwd\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:50px\"&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example4\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style=\"width:200px\"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example4\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-view&gt;</pre></div>","subs":[]},
    mixins: [Linkage],
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-taginput/__test__/index',["magix","mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-taginput</h2><h3>默认情形</h3><div class=\"B ag\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ list %&gt;\"\n    view-placeholder=\"请选择分类\"\n&gt;&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"f\">默认选中</h3><div class=\"B ag\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ list %&gt;\"\n    view-selected=\"&lt;%@ selected %&gt;\"\n    view-placeholder=\"请选择分类\"\n&gt;&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"f\">禁用</h3><div class=\"B ag\"><div mx-guid=\"g2\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ list %&gt;\"\n    view-selected=\"&lt;%@ selected %&gt;\"\n    view-placeholder=\"请选择分类\"\n    view-disabled=\"true\"\n&gt;&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"f\">数据列表为对象</h3><div class=\"B ag\"><div mx-guid=\"g3\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.userList%>&selected=<%@$$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ userList %&gt;\"\n    view-selected=\"&lt;%@ userSelected %&gt;\"\n    view-placeholder=\"请选择用户\"\n    view-text-key=\"name\"\n    view-value-key=\"id\"\n&gt;&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    }\n});</pre></div><h3 class=\"f\">change事件</h3><div class=\"B ag\"><div mx-guid=\"g4\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.userList%>&selected=<%@$$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\" mx-change=\"\u001f\u001eshowUserIds()\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ userList %&gt;\"\n    view-selected=\"&lt;%@ userSelected %&gt;\"\n    view-placeholder=\"请选择用户\"\n    view-text-key=\"name\"\n    view-value-key=\"id\"\n    mx-change=\"showUserIds()\"\n&gt;&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10'],\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    },\n    'showUserIds&lt;change&gt;' (e) {\n        this.gtipRT('选中的用户ids:'+e.ids);\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list","selected"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list","selected"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["userList","userSelected"],"path":"div[mx-guid=\"g3\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.userList%>&selected=<%@$$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["userList","userSelected"],"path":"div[mx-guid=\"g4\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.userList%>&selected=<%@$$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\"","attrs":[{"n":"mx-view","v":1}]}]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],
            selected: ['分类1', '分类5', '分类10'],
            userList: [{
                    name: 'xinglie',
                    id: 58782
                }, {
                    name: 'xinglie1',
                    id: 587821
                }, {
                    name: 'xinglie2',
                    id: 587822
                }, {
                    name: 'xinglie3',
                    id: 587823
                }, {
                    name: 'xinglie4',
                    id: 587824
                }, {
                    name: 'xinglie5',
                    id: 587825
                }, {
                    name: 'xinglie6',
                    id: 587826
                }, {
                    name: 'xinglie7',
                    id: 587827
                }, {
                    name: 'xinglie8',
                    id: 587828
                }, {
                    name: 'xinglie9',
                    id: 587829
                }],
            userSelected: [58782]
        });
    },
    'showUserIds<change>': function (e) {
        this.gtipRT('选中的用户ids:' + e.ids);
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-time/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-time</h2><div class=\"B ag\"><div mx-view=\"mx-time/index?time=00%3A12%3A13&types=minute%2Csecond\" mx-change=\"\u001f\u001etest()\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-time/index\"\n    view-time=\"00:12:13\"\n    view-types=\"minute,second\" mx-change=\"test()\"\n&gt;&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'test&lt;change&gt;' (e) {\n        console.log(e, e.time);\n    }\n});</pre></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'test<change>': function (e) {
        console.log(e, e.time);
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-time/__test__/picker',["magix","../picker"],function(require,exports,module){
/*Magix*/
require("../picker");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-time</h2><div class=\"B ag\"><input mx-view=\"mx-time/picker?types=hour%2Cminute\" value=\"18:26:00\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-time/picker\"\n    view-align=\"right\"\n    class=\"input\"\n    value=\"18:26:00\"\n    view-types=\"hour,minute\" /&gt;</pre></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-tree/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-tree</h2><div class=\"B ag\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-tree/index?list=<%@$$.list%>\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-tree/index\"\n    view-list=\"&lt;%@list%&gt;\"\n&gt;&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: 'abc'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: 'abc-abc'\n            }, {\n                id: 1,\n                pId: 0,\n                text: 'def'\n            }, {\n                id: 2,\n                pId: 1,\n                text: 'aaa'\n            }, {\n                id: 3,\n                pId: 2,\n                text: 'bbb'\n            }]\n        });\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-tree/index?list=<%@$$.list%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    render: function () {
        var me = this;
        me.updater.digest({
            list: [{
                    id: 0,
                    pId: '',
                    text: 'abc'
                }, {
                    id: '0-0',
                    pId: '',
                    text: 'abc-abc'
                }, {
                    id: 1,
                    pId: 0,
                    text: 'def'
                }, {
                    id: 2,
                    pId: 1,
                    text: 'aaa'
                }, {
                    id: 3,
                    pId: 2,
                    text: 'bbb'
                }]
        });
    }
});

});
/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-uploader/__test__/index',["magix","../index","mx-progress/index"],function(require,exports,module){
/*Magix*/
require("../index");
require("mx-progress/index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-uploader</h2><div class=\"B ag\"><div class=\"al am Z\" mx-view=\"mx-uploader/index?action=.%2Findex.html&name=file1&multiple=true\" mx-error=\"\u001f\u001eshowError()\" mx-success=\"\u001f\u001eshowSuccess()\" mx-progress=\"\u001f\u001eshowProgress()\">上传文件</div><div mx-guid=\"g0\u001f\" class=\"Z v\" mx-view=\"mx-progress/index?value=<%!$eu($$.percent)%>&fixed=2\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    class=\"btn btn-brand fl\"\n    path=\"mx-uploader/index\"\n    action=\"./index.html\"\n    name=\"file1\"\n    multiple=\"true\"\n    mx-error=\"showError()\"\n    mx-success=\"showSuccess()\"\n    mx-progress=\"showProgress()\"\n&gt;上传文件&lt;/mx-view&gt;\n&lt;mx-progress value=\"&lt;%=percent%&gt;\" fixed=\"2\" class=\"fl ml20\" /&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            showProgress: false,\n            percent: 0\n        });\n    },\n    'showError&lt;error&gt;'(e) {\n        console.log(e.error);\n    },\n    'showSuccess&lt;success&gt;'(e) {\n        console.log(e.response);\n    },\n    'showProgress&lt;progress&gt;'(e) {\n        this.updater.digest({\n            percent:e.percent\n        });\n    }\n});</pre></div>","subs":[{"keys":["percent"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-progress/index?value=<%!$eu($$.percent)%>&fixed=2\"","attrs":[{"n":"mx-view","v":1}]}]},
    render: function () {
        var me = this;
        me.updater.digest({
            showProgress: false,
            percent: 0
        });
    },
    'showError<error>': function (e) {
        console.log(e.error);
    },
    'showSuccess<success>': function (e) {
        console.log(e.response);
    },
    'showProgress<progress>': function (e) {
        this.updater.digest({
            percent: e.percent
        });
    }
});

});

});