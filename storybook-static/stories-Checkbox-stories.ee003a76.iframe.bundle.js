/*! For license information please see stories-Checkbox-stories.ee003a76.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[59],{"./src/components/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=_ref=>{let{mode,label,checked,state="enable",onChange,...props}=_ref;return(0,jsx_runtime.jsxs)("label",{className:"container",children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",checked,onChange:()=>{onChange&&onChange(!checked)},className:["checkmark--".concat(mode,"--").concat(state)].join(" "),...props}),(0,jsx_runtime.jsx)("span",{className:"checkmark"}),label]})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{mode:{defaultValue:null,description:"Is this the principal call to action on the page?",name:"mode",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Checkbox contents",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"Checking the checkbox",name:"checked",required:!0,type:{name:"boolean"}},state:{defaultValue:{value:"enable"},description:"Optional state",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"hover"'},{value:'"pressed"'},{value:'"enable"'},{value:'"focus"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Checkbox.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Selected:()=>Selected,Unselected:()=>Unselected,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Core/Checkbox",component:__webpack_require__("./src/components/Checkbox.tsx").X,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},label:{control:"text"}}},Selected={args:{mode:"selected",checked:!0,label:"Checkbox",state:"enable"},parameters:{design:{type:"figma",url:""}}},Unselected={args:{mode:"unselected",checked:!1,label:"Checkbox",state:"enable"},parameters:{design:{type:"figma",url:""}}},__namedExportsOrder=["Selected","Unselected"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);