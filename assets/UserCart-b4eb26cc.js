import{_ as V,m as M,r as _,o as i,c as r,a as d,b as s,F as C,j as x,h as u,t as h,w as v,v as y,e as I,q as U,f as b,n as f}from"./index-3cff4499.js";import{u as q}from"./toastMessage-d7eae601.js";const w={data(){return{products:[],product:{},status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},isLoading:!1,coupon_code:""}},methods:{...M(q,["pushMessage"]),getProducts(){const l="https://vue3-course-api.hexschool.io/v2//api/berlin/products";this.isLoading=!0,this.$http.get(l).then(e=>{this.products=e.data.products,this.isLoading=!1}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:e.response.data.message})})},getProduct(l){this.$router.push(`/user/product/${l}`)},addToCart(l,e=1){this.isLoading=!0;const a="https://vue3-course-api.hexschool.io/v2//api/berlin/cart";this.status.loadingItem=l;const p={product_id:l,qty:e};this.$http.post(a,{data:p}).then(o=>{this.status.loadingItem="",this.isLoading=!1,this.pushMessage({style:"success",title:"成功加入購物車",content:o.data.message}),this.getCart()}).catch(o=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"加入購物車失敗",content:o.response.data.message})})},deleteAllCarts(){this.isLoading=!0;const l="https://vue3-course-api.hexschool.io/v2//api/berlin/carts";this.$http.delete(l).then(e=>{this.pushMessage({style:"success",title:"清除購物車",content:e.data.message}),this.getCart(),this.isLoading=!1}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"清除購物車",content:e.response.data.message})})},getCart(){const l="https://vue3-course-api.hexschool.io/v2//api/berlin/cart";this.isLoading=!0,this.$http.get(l).then(e=>{this.cart=e.data.data,this.isLoading=!1}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得購物車資訊",content:e.response.data.message})})},removeCartItem(l){this.status.loadingItem=l;const e=`https://vue3-course-api.hexschool.io/v2//api/berlin/cart/${l}`;this.isLoading=!0,this.$http.delete(e).then(a=>{this.pushMessage({style:"success",title:"移除購物車品項",content:a.data.message}),this.status.loadingItem="",this.isLoading=!1,this.getCart()}).catch(a=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"移除購物車品項",content:a.response.data.message})})},updateCart(l){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/v2//api/berlin/cart/${l.id}`,a={product_id:l.product_id,qty:l.qty};this.$http.put(e,{data:a}).then(p=>{this.pushMessage({style:"success",title:"更新購物車",content:p.data.message}),this.isLoading=!1,this.getCart()}).catch(p=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"更新購物車",content:p.response.data.message})})},addCouponCode(){const l="https://vue3-course-api.hexschool.io/v2//api/berlin/coupon",e={code:this.coupon_code};this.isLoading=!0,this.$http.post(l,{data:e}).then(a=>{this.pushMessage({style:"success",title:"加入優惠券",content:a.data.message}),this.getCart(),this.isLoading=!1}).catch(a=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"加入優惠券",content:a.response.data.message})})},createOrder(){this.isLoading=!0;const l="https://vue3-course-api.hexschool.io/v2//api/berlin/order",e=this.form;this.$http.post(l,{data:e}).then(a=>{this.$router.push(`/user/checkout/${a.data.orderId}`),this.$refs.form.resetForm(),this.isLoading=!1}).catch(a=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"建立訂單",content:a.response.data.message})})}},created(){this.getProducts(),this.getCart()}},F={class:"container"},$={class:"mt-4"},B={class:"table align-middle"},E=s("thead",null,[s("tr",null,[s("th",null,"圖片"),s("th",null,"商品名稱"),s("th",null,"價格"),s("th",null,"功能")])],-1),S={style:{width:"200px"}},T={href:"#",class:"text-dark"},z={key:0,class:"h5"},A={key:1,class:"h6"},N={key:2,class:"h5"},P={class:"btn-group btn-group-sm"},j=["disabled","onClick"],D={key:0,class:"spinner-border spinner-grow-sm"},O=["onClick","disabled"],G={key:0,class:"spinner-border spinner-grow-sm"},H={class:"text-end"},J={class:"table align-middle"},K=s("thead",null,[s("tr",null,[s("th"),s("th",null,"品名"),s("th",{style:{width:"110px"}},"數量"),s("th",null,"單價")])],-1),Q=["disabled","onClick"],R=s("i",{class:"bi bi-x"},null,-1),W=[R],X={key:0,class:"text-success"},Y={class:"input-group input-group-sm"},Z=["onUpdate:modelValue","onBlur"],ss={class:"input-group-text"},ts={class:"text-end"},es={key:0,class:"text-success"},os=s("td",{colspan:"3",class:"text-end"},"總計",-1),ls={class:"text-end"},as={key:0},ns=s("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),is={class:"text-end text-success"},rs={class:"input-group mb-3 input-group-sm"},ds={class:"input-group-append"},cs={class:"my-5 row justify-content-center"},us={class:"mb-3"},hs=s("label",{for:"email",class:"form-label"},"Email",-1),ps={class:"mb-3"},ms=s("label",{for:"name",class:"form-label"},"收件人姓名",-1),gs={class:"mb-3"},_s=s("label",{for:"tel",class:"form-label"},"收件人電話",-1),bs={class:"mb-3"},fs=s("label",{for:"address",class:"form-label"},"收件人地址",-1),vs={class:"mb-3"},ys=s("label",{for:"message",class:"form-label"},"留言",-1),Cs=s("div",{class:"text-end"},[s("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function xs(l,e,a,p,o,c){const k=_("VueLoading"),m=_("VeeField"),g=_("ErrorMessage"),L=_("VeeForm");return i(),r("div",F,[d(k,{active:o.isLoading,"z-index":1060},null,8,["active"]),s("div",$,[s("table",B,[E,s("tbody",null,[(i(!0),r(C,null,x(o.products,t=>(i(),r("tr",{key:t.id},[s("td",S,[s("div",{style:U([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${t.imageUrl})`}])},null,4)]),s("td",null,[s("a",T,h(t.title),1)]),s("td",null,[t.price?u("",!0):(i(),r("div",z,h(t.origin_price)+" 元 ",1)),t.price?(i(),r("del",A,"原價 "+h(t.origin_price)+" 元",1)):u("",!0),t.price?(i(),r("div",N," 現在只要 "+h(t.price)+" 元 ",1)):u("",!0)]),s("td",null,[s("div",P,[s("button",{type:"button",class:"btn btn-outline-secondary",disabled:o.status.loadingItem===t.id||!t.is_enabled,onClick:n=>c.getProduct(t.id)},[o.status.loadingItem===t.id?(i(),r("span",D)):u("",!0),b(" 查看更多 ")],8,j),s("button",{type:"button",class:"btn btn-outline-danger",onClick:n=>c.addToCart(t.id),disabled:o.status.loadingItem===t.id||!t.is_enabled},[o.status.loadingItem===t.id?(i(),r("span",G)):u("",!0),b(" 加到購物車 ")],8,O)])])]))),128))])]),s("div",H,[s("button",{class:"btn btn-outline-danger",type:"button",onClick:e[0]||(e[0]=(...t)=>c.deleteAllCarts&&c.deleteAllCarts(...t))}," 清空購物車 ")]),s("table",J,[K,s("tbody",null,[o.cart.carts?(i(!0),r(C,{key:0},x(o.cart.carts,t=>(i(),r("tr",{key:t.id},[s("td",null,[s("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:o.status.loadingItem===t.id,onClick:n=>c.removeCartItem(t.id)},W,8,Q)]),s("td",null,[b(h(t.product.title)+" ",1),t.coupon?(i(),r("div",X,"已套用優惠券")):u("",!0)]),s("td",null,[s("div",Y,[v(s("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":n=>t.qty=n,onBlur:n=>c.updateCart(t)},null,40,Z),[[y,t.qty,void 0,{number:!0}]]),s("div",ss,"/ "+h(t.product.unit),1)])]),s("td",ts,[o.cart.final_total!==o.cart.total?(i(),r("small",es,"折扣價：")):u("",!0),b(" "+h(l.$filters.currency(t.final_total)),1)])]))),128)):u("",!0)]),s("tfoot",null,[s("tr",null,[os,s("td",ls,h(l.$filters.currency(o.cart.total)),1)]),o.cart.final_total!==o.cart.total?(i(),r("tr",as,[ns,s("td",is,h(l.$filters.currency(o.cart.final_total)),1)])):u("",!0)])]),s("div",rs,[v(s("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>o.coupon_code=t),placeholder:"請輸入優惠碼"},null,512),[[y,o.coupon_code]]),s("div",ds,[s("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[2]||(e[2]=(...t)=>c.addCouponCode&&c.addCouponCode(...t))}," 套用優惠碼 ")])])]),s("div",cs,[d(L,{ref:"form",class:"col-md-6",onSubmit:c.createOrder},{default:I(({errors:t})=>[s("div",us,[hs,d(m,{id:"email",name:"email",type:"email",class:f(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.form.user.email,"onUpdate:modelValue":e[3]||(e[3]=n=>o.form.user.email=n)},null,8,["class","modelValue"]),d(g,{name:"email",class:"invalid-feedback"})]),s("div",ps,[ms,d(m,{id:"name",name:"姓名",type:"text",class:f(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":e[4]||(e[4]=n=>o.form.user.name=n)},null,8,["class","modelValue"]),d(g,{name:"姓名",class:"invalid-feedback"})]),s("div",gs,[_s,d(m,{id:"tel",name:"電話",type:"tel",class:f(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:o.form.user.tel,"onUpdate:modelValue":e[5]||(e[5]=n=>o.form.user.tel=n)},null,8,["class","modelValue"]),d(g,{name:"電話",class:"invalid-feedback"})]),s("div",bs,[fs,d(m,{id:"address",name:"地址",type:"text",class:f(["form-control",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":e[6]||(e[6]=n=>o.form.user.address=n)},null,8,["class","modelValue"]),d(g,{name:"地址",class:"invalid-feedback"})]),s("div",vs,[ys,v(s("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[7]||(e[7]=n=>o.form.message=n)},null,512),[[y,o.form.message]])]),Cs]),_:1},8,["onSubmit"])])])}const Vs=V(w,[["render",xs]]);export{Vs as default};