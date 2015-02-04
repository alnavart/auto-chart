//Grooscript converted file @author: Alberto Navarrete
function BaseChart() {
  var gSobject = gs.inherit(gs.baseClass,'BaseChart');
  gSobject.clazz = { name: 'chart.BaseChart', simpleName: 'BaseChart'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.tittle = null;
  gSobject.testdata = null;
  gSobject.chart = null;
  gSobject['setTestdata'] = function(it) {
    return gSobject.testdata = gs.list([gs.map().add("key","One").add("y",10) , gs.map().add("key","Two").add("y",2) , gs.map().add("key","Three").add("y",9) , gs.map().add("key","Four").add("y",7) , gs.map().add("key","Five").add("y",4) , gs.map().add("key","Six").add("y",3) , gs.map().add("key","Seven").add("y",0.5)]);
  }
  gSobject['setLineTestdata'] = function(it) {
    return gSobject.testdata = gs.list([gs.map().add("key","One").add("values",gs.list([gs.map().add("x",10).add("y",10) , gs.map().add("x",11).add("y",2) , gs.map().add("x",12).add("y",9) , gs.map().add("x",13).add("y",7) , gs.map().add("x",14).add("y",4) , gs.map().add("x",15).add("y",3) , gs.map().add("x",16).add("y",0.5)])) , gs.map().add("key","Two").add("values",gs.list([gs.map().add("x",8).add("y",5) , gs.map().add("x",11).add("y",12) , gs.map().add("x",12).add("y",9) , gs.map().add("x",13).add("y",5) , gs.map().add("x",14).add("y",6) , gs.map().add("x",15).add("y",3) , gs.map().add("x",17).add("y",9)]))]);
  }
  gSobject['setDiscreteBarTestdata'] = function(it) {
    return gSobject.testdata = gs.list([gs.map().add("key","Data Series").add("values",gs.list([gs.map().add("label","One").add("value",10) , gs.map().add("label","Two").add("value",2) , gs.map().add("label","Three").add("value",9) , gs.map().add("label","Four").add("value",7) , gs.map().add("label","Five").add("value",4) , gs.map().add("label","Six").add("value",3) , gs.map().add("label","Seven").add("value",0.5)]))]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
