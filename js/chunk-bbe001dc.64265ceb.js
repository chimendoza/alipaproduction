(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbe001dc"],{"8eb1":function(t,e,o){"use strict";var n=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Clave del concepto")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.model.concepto,expression:"model.concepto"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Escribe el nombre de la columna"},domProps:{value:t.model.concepto},on:{input:function(e){e.target.composing||t.$set(t.model,"concepto",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Que costo afecta")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.model.tipo,expression:"model.tipo"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.model,"tipo",e.target.multiple?o:o[0])}}},[e("option",{attrs:{value:"envio"}},[t._v("Costo de envío")]),e("option",{attrs:{value:"producto"}},[t._v("Costo del producto")])])]),e("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Enviar"}})])},r=[],a=(o("c5f6"),o("9870")),c={name:"formConceptoimporte",components:{},props:{id:{type:Number,required:!1}},data:function(){return{isNewRecord:!0,model:{concepto:"",tipo:""}}},methods:{save:function(){var t=this;a["a"].request({url:this.isNewRecord?"/conceptoimportes":"/conceptoimportes/"+this.$props.id,data:this.createFormData(this.model),method:this.isNewRecord?"POST":"PATCH"}).then((function(){t.$router.push("/conceptoimportes")})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this,e=this.$props.id;e&&(this.isNewRecord=!1,a["a"].get("/conceptoimportes/"+e,this.createFormData(this.model)).then((function(e){t.fillModel(t.model,e.data)})).catch((function(t){console.log(t)})))}},s=c,i=o("2877"),l=Object(i["a"])(s,n,r,!1,null,null,null);e["a"]=l.exports},addf:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t._self._c;return e("card",{staticClass:"card",attrs:{title:"Agregar concepto"}},[e("div",[e("conceptoImporte")],1)])},r=[],a=o("8eb1"),c={name:"crearConcepto",components:{conceptoImporte:a["a"]},data:function(){return{}}},s=c,i=o("2877"),l=Object(i["a"])(s,n,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-bbe001dc.64265ceb.js.map