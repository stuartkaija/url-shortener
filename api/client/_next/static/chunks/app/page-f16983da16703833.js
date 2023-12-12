(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5925:function(e,r,t){Promise.resolve().then(t.bind(t,7314))},7314:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Home}});var n=t(7437),i=t(2265),s=t(6507),o=t(4404),l=t(3226),a=t(471),c=t(5210);function ShortUrl(e){let{shortUrl:r,errorMessage:t,isLoading:i}=e;return(0,n.jsxs)(s.Z,{sx:{width:"100%"},children:[(0,n.jsx)(l.Z,{sx:{color:"rgba(0, 0, 0, 0.6)",margin:"1rem 0rem 1rem"},children:"Your shortened URL:"}),i&&(0,n.jsx)(a.Z,{}),r&&(0,n.jsx)(c.Z,{href:r,target:"_blank",rel:"noopener noreferrer",children:r}),t&&(0,n.jsx)(l.Z,{sx:{color:"#d32f2f"},children:t})]})}var m=t(819),h=t(5978),x=t(8161),d=t(8059),u=t.n(d),f=t(3105),g=t.n(f);function Form(e){let{setShortUrl:r,setErrorMessage:t,setIsLoading:o}=e,[l,a]=(0,i.useState)(""),[c,d]=(0,i.useState)(!1),formHandler=async e=>{if(e.preventDefault(),0===l.length||!u()(l,{require_protocol:!0})){d(!0);return}d(!1),t(""),r(""),o(!0);try{let e=await fetch("https://lil-url.net/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({longUrl:l})}),n=await e.json();e.ok?r(n.short_url):t("".concat(n.statusCode,", ").concat(n.error,": ").concat(n.message))}catch(e){console.error(e)}finally{o(!1)}};return(0,n.jsxs)("form",{className:g().form,name:"url-form",onSubmit:formHandler,children:[(0,n.jsx)(m.Z,{sx:{margin:"1rem 0rem 0rem"},children:"Enter a URL to shorten"}),(0,n.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",width:{xs:"100%"}},children:[(0,n.jsx)(h.Z,{sx:{margin:"1rem 0rem",width:{md:"20rem"}},type:"text",id:"urlInput",value:l,onChange:e=>a(e.target.value),error:c,helperText:c&&"Please enter a valid URL"}),(0,n.jsx)(x.Z,{sx:{margin:"0rem 0rem 1rem",width:{md:"20rem"},height:"3rem"},variant:"contained",type:"submit",children:"Submit"})]})]})}function Footer(){return(0,n.jsxs)(s.Z,{component:"footer",sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{href:"https://www.linkedin.com/in/stuartkaija",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(s.Z,{component:"img",src:"/_next/static/media/linked-in-icon.50c148c6.png",alt:"LinkedIn icon",height:32,mr:.5,sx:{filter:"grayscale(100%) brightness(0%)",":hover":{filter:"grayscale(100%) brightness(100%)"}}})}),(0,n.jsx)(c.Z,{href:"https://www.github.com/stuartkaija",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(s.Z,{component:"img",src:"/_next/static/media/github-mark.06d9ba29.png",alt:"GitHub icon",height:32,ml:.5,sx:{filter:"grayscale(100%) brightness(0%)",":hover":{filter:"opacity(60%)"}}})})]}),(0,n.jsx)(l.Z,{children:"Built by Stuart Kaija"})]})}function Home(){let[e,r]=(0,i.useState)(""),[t,l]=(0,i.useState)(""),[a,c]=(0,i.useState)(!1);return(0,n.jsxs)(s.Z,{component:"main",sx:{minHeight:"100vh",padding:{xs:"1rem",md:"4rem 4rem 1rem",lg:"7rem 7rem 1rem"},display:"flex",flexDirection:"column"},children:[(0,n.jsx)("h1",{children:"URL Shortener"}),(0,n.jsx)(o.Z,{variant:"middle",role:"presentation"}),(0,n.jsxs)(s.Z,{sx:{height:"100%",flex:"1",display:"flex",flexDirection:"column"},children:[(0,n.jsxs)(s.Z,{sx:{display:"flex",flex:"1",flexDirection:{xs:"column",md:"row"}},children:[(0,n.jsx)(Form,{setShortUrl:r,setErrorMessage:l,setIsLoading:c}),(0,n.jsx)(ShortUrl,{shortUrl:e,errorMessage:t,isLoading:a})]}),(0,n.jsx)(Footer,{})]})]})}},3105:function(e){e.exports={form:"Form_form__Tfxa0"}}},function(e){e.O(0,[508,971,472,744],function(){return e(e.s=5925)}),_N_E=e.O()}]);