"use strict";(self.webpackChunkmy_docs_site=self.webpackChunkmy_docs_site||[]).push([[55],{2140:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"k8s-deploy","title":"Azure/k8s-deploy","description":"Deploy Kubernetes manifests using GitHub Actions.","source":"@site/docs/k8s-deploy.md","sourceDirName":".","slug":"/docs/k8s-deploy","permalink":"/k8s-gh-action-toolkit/docs/k8s-deploy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Azure/k8s-deploy","description":"Deploy Kubernetes manifests using GitHub Actions.","slug":"/docs/k8s-deploy"},"sidebar":"tutorialSidebar","previous":{"title":"Azure/k8s-create-secret","permalink":"/k8s-gh-action-toolkit/docs/k8s-create-secret"},"next":{"title":"Azure/k8s-lint","permalink":"/k8s-gh-action-toolkit/docs/k8s-lint"}}');var i=n(4848),o=n(8453);const l={title:"Azure/k8s-deploy",description:"Deploy Kubernetes manifests using GitHub Actions.",slug:"/docs/k8s-deploy"},r=void 0,c={},a=[{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3},{value:"Inputs:",id:"inputs",level:3},{value:"Example:",id:"example",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h3,{id:"description",children:"Description:"}),"\n",(0,i.jsxs)(s.p,{children:["This action deploys a Kubernetes manifest to a cluster. It automates the process of applying your Kubernetes resources using ",(0,i.jsx)(s.code,{children:"kubectl"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"usage",children:"Usage:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"uses: Azure/k8s-deploy@v1\nwith:\n  namespace: 'default'\n  manifests: 'k8s/deployment.yaml'\n"})}),"\n",(0,i.jsx)(s.h3,{id:"inputs",children:"Inputs:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"namespace"})," (optional): The Kubernetes namespace where the resources will be deployed (default is ",(0,i.jsx)(s.code,{children:"default"}),")."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"manifests"})," (required): The path to the Kubernetes manifest files to be deployed."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"example",children:"Example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"steps:\n  - name: Deploy to Kubernetes\n    uses: Azure/k8s-deploy@v1\n    with:\n      namespace: 'production'\n      manifests: 'k8s/*.yaml'\n"})}),"\n",(0,i.jsx)(s.admonition,{title:"GitHub Repository",type:"info",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/Azure/k8s-deploy",children:"View on GitHub \u2192"})})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>r});var t=n(6540);const i={},o=t.createContext(i);function l(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);