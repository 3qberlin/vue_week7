import{_ as d,m as _,r as c,o as u,c as h,a as o,b as e,e as m,t as i,f as r,F as p}from"./index-c99659c2.js";import{u as g}from"./toastMessage-0a5a3ae9.js";const f={data(){return{isLoading:!1,article:{},id:""}},methods:{..._(g,["pushMessage"]),getArticle(){const a=`https://vue3-course-api.hexschool.io/v2//api/berlin/article/${this.id}`;this.isLoading=!0,this.$http.get(a).then(s=>{this.article=s.data.article,this.isLoading=!1}).catch(s=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得文章資訊失敗",content:s.response.data.message})})}},created(){this.id=this.$route.params.articleId,this.getArticle()}},b={class:"container"},L={"aria-label":"breadcrumb"},v={class:"breadcrumb"},x={class:"breadcrumb-item"},M={class:"breadcrumb-item active","aria-current":"page"},V={class:"row justify-content-center"},k={class:"col-8"},A={class:"text-muted"},T={class:"text-muted"},y=["src","alt"],B=["innerHTML"];function N(a,s,w,C,t,F){const l=c("VueLoading"),n=c("RouterLink");return u(),h(p,null,[o(l,{active:t.isLoading,"z-index":1060},null,8,["active"]),e("div",b,[e("nav",L,[e("ol",v,[e("li",x,[o(n,{to:"/user/articles"},{default:m(()=>[r("部落格列表")]),_:1})]),e("li",M,i(t.article.title),1)])]),e("div",V,[e("article",k,[e("h2",null,i(t.article.title),1),e("p",null,[e("small",A,i(a.$filters.date(t.article.create_at)),1),r(" - "),e("small",T,"作者："+i(t.article.author),1)]),e("img",{src:t.article.imageUrl,alt:t.article.title,class:"img-fluid mb-3"},null,8,y),e("div",{innerHTML:t.article.content},null,8,B)])])])],64)}const S=d(f,[["render",N]]);export{S as default};