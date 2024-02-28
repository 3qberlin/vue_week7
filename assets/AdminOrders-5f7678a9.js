import{_ as f,o,c as n,b as e,t as l,h as g,F as p,j as b,w as y,k as O,m as x,r as _,a as m,n as C}from"./index-3cff4499.js";import{u as $}from"./toastMessage-d7eae601.js";import{m as L,D as P}from"./DelModal-cf113796.js";import{P as w}from"./Pagination-129402f3.js";const D={props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-paid"],mixins:[L],watch:{order(){this.tempOrder=this.order}}},V={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},E={class:"modal-dialog modal-xl",role:"document"},N={class:"modal-content border-0"},U=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),S={class:"modal-body"},j={class:"row"},B={class:"col-md-4"},q=e("h3",null,"用戶資料",-1),z={class:"table"},A={key:0},F=e("th",{style:{width:"100px"}},"姓名",-1),I=e("th",null,"Email",-1),T=e("th",null,"電話",-1),G=e("th",null,"地址",-1),H={class:"col-md-8"},J=e("h3",null,"訂單細節",-1),K={class:"table"},Q=e("th",{style:{width:"100px"}},"訂單編號",-1),R=e("th",null,"下單時間",-1),W=e("th",null,"付款時間",-1),X={key:0},Y={key:1},Z=e("th",null,"付款狀態",-1),ee={key:0,class:"text-success"},te={key:1,class:"text-muted"},se=e("th",null,"總金額",-1),oe=e("h3",null,"選購商品",-1),ne={class:"table"},le=e("thead",null,[e("tr")],-1),de={class:"text-end"},re={class:"d-flex justify-content-end"},ae={class:"form-check"},ie={class:"form-check-label",for:"flexCheckDefault"},ce={key:0},he={key:1},ue={class:"modal-footer"},pe=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function _e(s,r,c,u,t,h){return o(),n("div",V,[e("div",E,[e("div",N,[U,e("div",S,[e("div",j,[e("div",B,[q,e("table",z,[t.tempOrder.user?(o(),n("tbody",A,[e("tr",null,[F,e("td",null,l(t.tempOrder.user.name),1)]),e("tr",null,[I,e("td",null,l(t.tempOrder.user.email),1)]),e("tr",null,[T,e("td",null,l(t.tempOrder.user.tel),1)]),e("tr",null,[G,e("td",null,l(t.tempOrder.user.address),1)])])):g("",!0)])]),e("div",H,[J,e("table",K,[e("tbody",null,[e("tr",null,[Q,e("td",null,l(t.tempOrder.id),1)]),e("tr",null,[R,e("td",null,l(s.$filters.date(t.tempOrder.create_at)),1)]),e("tr",null,[W,e("td",null,[t.tempOrder.paid_date?(o(),n("span",X,l(s.$filters.date(t.tempOrder.paid_date)),1)):(o(),n("span",Y,"時間不正確"))])]),e("tr",null,[Z,e("td",null,[t.tempOrder.is_paid?(o(),n("strong",ee,"已付款")):(o(),n("span",te,"尚未付款"))])]),e("tr",null,[se,e("td",null,l(s.$filters.currency(t.tempOrder.total)),1)])])]),oe,e("table",ne,[le,e("tbody",null,[(o(!0),n(p,null,b(t.tempOrder.products,a=>(o(),n("tr",{key:a.id},[e("th",null,l(a.product.title),1),e("td",null,l(a.qty)+" / "+l(a.product.unit),1),e("td",de,l(s.$filters.currency(a.final_total)),1)]))),128))])]),e("div",re,[e("div",ae,[y(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":r[0]||(r[0]=a=>t.tempOrder.is_paid=a)},null,512),[[O,t.tempOrder.is_paid]]),e("label",ie,[t.tempOrder.is_paid?(o(),n("span",ce,"已付款")):(o(),n("span",he,"未付款"))])])])])])]),e("div",ue,[pe,e("button",{type:"button",class:"btn btn-primary",onClick:r[1]||(r[1]=a=>s.$emit("update-paid",t.tempOrder))}," 修改付款狀態 ")])])])],512)}const me=f(D,[["render",_e]]),ge={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:w,DelModal:P,OrderModal:me},methods:{...x($,["pushMessage"]),getOrders(s=1){this.currentPage=s;const r=`https://vue3-course-api.hexschool.io/v2//api/berlin/admin/orders?page=${s}`;this.isLoading=!0,this.$http.get(r,this.tempProduct).then(c=>{this.orders=c.data.orders,this.pagination=c.data.pagination,this.isLoading=!1}).catch(c=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"錯誤訊息",content:c.response.data.message})})},openModal(s){this.tempOrder={...s},this.isNew=!1,this.$refs.orderModal.openModal()},openDelOrderModal(s){this.tempOrder={...s},this.$refs.delModal.openModal()},updatePaid(s){this.isLoading=!0;const r=`https://vue3-course-api.hexschool.io/v2//api/berlin/admin/order/${s.id}`,c={is_paid:s.is_paid};this.$http.put(r,{data:c}).then(u=>{this.isLoading=!1,this.$refs.orderModal.hideModal(),this.pushMessage({style:"success",title:"更新付款狀態",content:u.data.message}),this.getOrders(this.currentPage)}).catch(u=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"錯誤訊息",content:u.response.data.message})})},delOrder(){const s=`https://vue3-course-api.hexschool.io/v2//api/berlin/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(s).then(()=>{this.isLoading=!1,this.$refs.delModal.hideModal(),this.getOrders(this.currentPage)}).catch(r=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"錯誤訊息",content:r.response.data.message})})}},created(){this.getOrders()}},be={class:"table mt-4"},fe=e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"Email"),e("th",null,"購買款項"),e("th",null,"應付金額"),e("th",null,"是否付款"),e("th",null,"編輯")])],-1),ye=["textContent"],Oe={class:"list-unstyled"},ke={class:"text-right"},Me={class:"form-check form-switch"},ve=["id","onUpdate:modelValue","onChange"],xe=["for"],Ce={key:0},$e={key:1},Le={class:"btn-group"},Pe=["onClick"],we=["onClick"];function De(s,r,c,u,t,h){const a=_("VueLoading"),k=_("OrderModal"),M=_("DelModal"),v=_("Pagination");return o(),n(p,null,[m(a,{active:t.isLoading,"z-index":1060},null,8,["active"]),e("table",be,[fe,e("tbody",null,[(o(!0),n(p,null,b(t.orders,d=>(o(),n(p,{key:d.id},[t.orders.length?(o(),n("tr",{key:0,class:C({"text-secondary":!d.is_paid})},[e("td",null,l(s.$filters.date(d.create_at)),1),e("td",null,[d.user?(o(),n("span",{key:0,textContent:l(d.user.email)},null,8,ye)):g("",!0)]),e("td",null,[e("ul",Oe,[(o(!0),n(p,null,b(d.products,i=>(o(),n("li",{key:i.id},l(i.product.title)+" 數量："+l(i.qty)+" "+l(i.product.unit),1))),128))])]),e("td",ke,l(d.total),1),e("td",null,[e("div",Me,[y(e("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${d.id}`,"onUpdate:modelValue":i=>d.is_paid=i,onChange:i=>h.updatePaid(d)},null,40,ve),[[O,d.is_paid]]),e("label",{class:"form-check-label",for:`paidSwitch${d.id}`},[d.is_paid?(o(),n("span",Ce,"已付款")):(o(),n("span",$e,"未付款"))],8,xe)])]),e("td",null,[e("div",Le,[e("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:i=>h.openModal(d)}," 檢視 ",8,Pe),e("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:i=>h.openDelOrderModal(d)}," 刪除 ",8,we)])])],2)):g("",!0)],64))),128))])]),m(k,{order:t.tempOrder,ref:"orderModal",onUpdatePaid:h.updatePaid},null,8,["order","onUpdatePaid"]),m(M,{item:t.tempOrder,ref:"delModal",onDelItem:h.delOrder},null,8,["item","onDelItem"]),m(v,{pages:t.pagination,onEmitPages:h.getOrders},null,8,["pages","onEmitPages"])],64)}const Se=f(ge,[["render",De]]);export{Se as default};