"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[2851],{41544:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=s(85893),t=s(11151);const o={},r="049: App config settings",c={id:"workshop-guidance/devices/RMD_049",title:"049: App config settings",description:"Overview",source:"@site/docs/workshop-guidance/devices/RMD_049.md",sourceDirName:"workshop-guidance/devices",slug:"/workshop-guidance/devices/RMD_049",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_049",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/devices/RMD_049.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"048: Remote actions",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_048"},next:{title:"050: Managed Edge Browser",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_050"}},l={},a=[{value:"Overview",id:"overview",level:2},{value:"App Configuration Settings in Microsoft Intune",id:"app-configuration-settings-in-microsoft-intune",level:3},{value:"Benefits",id:"benefits",level:4},{value:"App Configuration Policies vs. App Protection Policies",id:"app-configuration-policies-vs-app-protection-policies",level:3},{value:"Key Differences",id:"key-differences",level:4},{value:"Reference",id:"reference",level:2}];function p(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"049-app-config-settings",children:"049: App config settings"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.h3,{id:"app-configuration-settings-in-microsoft-intune",children:"App Configuration Settings in Microsoft Intune"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"App Configuration Policies"})," in Microsoft Intune allow administrators to configure settings for applications used within an organization. These settings are applied automatically when the app is installed, ensuring consistency and reducing the need for manual configuration by end users."]}),"\n",(0,i.jsx)(n.h4,{id:"benefits",children:"Benefits"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Consistency"}),": Ensures that all users have the same app settings, reducing the risk of misconfiguration."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reduced Helpdesk Calls"}),": By automating app configuration, it minimizes the need for users to contact support for setup issues."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Faster Deployment"}),": Speeds up the adoption of new apps by pre-configuring necessary settings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Customization"}),": Allows for specific settings such as custom port numbers, language settings, and branding to be applied automatically."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"app-configuration-policies-vs-app-protection-policies",children:"App Configuration Policies vs. App Protection Policies"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"App Configuration Policies"})," and ",(0,i.jsx)(n.strong,{children:"App Protection Policies"})," serve different purposes in Microsoft Intune:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"App Configuration Policies"}),": Focus on configuring app settings automatically when the app is installed. These settings can include custom port numbers, language settings, security settings, and branding."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"App Protection Policies"}),": Focus on protecting corporate data within apps. These policies control how data is accessed and shared, such as requiring a PIN to access corporate email or preventing data from being copied to personal apps."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"key-differences",children:"Key Differences"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"App Configuration Policies"}),": Ensure consistent app settings across all users."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"App Protection Policies"}),": Protect corporate data within apps."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scope"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"App Configuration Policies"}),": Apply settings to apps to ensure they are configured correctly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"App Protection Policies"}),": Apply security measures to protect data within apps."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Implementation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"App Configuration Policies"}),": Typically used during app deployment to set up necessary configurations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"App Protection Policies"}),": Used to enforce security policies and protect data during app usage."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["App configuration policies for Microsoft Intune: ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/apps/app-configuration-policies-overview",children:"https://learn.microsoft.com/en-us/mem/intune/apps/app-configuration-policies-overview"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var i=s(67294);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);