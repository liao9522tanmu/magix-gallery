define("mx-sitenav/__test__/index",["magix","../index"],(e,i,d)=>{e("../index");var m=e("magix");d.exports=m.View.extend({tmpl:{html:'<h2>mx-sitenav</h2><div class="_B _ai"><div mx-guid="g0" mx-view="mx-sitenav/index?mode=<%!$eu($$.mode)%>"></div></div><div mx-guid="g1" class="_B">2</div>',subs:[{keys:["mode"],path:'div[mx-guid="g0"]',attr:'mx-view="mx-sitenav/index?mode=<%!$eu($$.mode)%>"',attrs:[{n:"mx-view",v:1}]},{keys:["mode"],path:'div[mx-guid="g1"]',tmpl:"<div>HTML Code:</div><%if($$.mode=='simple'){%><pre>\n&lt;mx-sitenav mode=\"simple\" /&gt;</pre><%}else{%><pre>\n&lt;mx-sitenav /&gt;</pre><%}%>",s:"2"}]},render:function(){this.updater.digest({mode:m.Router.parse().get("mode")})}})});