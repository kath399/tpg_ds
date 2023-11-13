/*! For license information please see stories-Task-stories.00c3da6d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7255],{"./src/components/Task.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Task});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Task=_ref=>{let{task:{id,title,state},onArchiveTask,onPinTask}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"list-item ".concat(state),children:[(0,jsx_runtime.jsxs)("label",{htmlFor:"checked","aria-label":"archiveTask-".concat(id),className:"checkbox",children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",disabled:!0,name:"checked",id:"archiveTask-".concat(id),checked:"TASK_ARCHIVED"===state}),(0,jsx_runtime.jsx)("span",{className:"checkbox-custom",onClick:()=>onArchiveTask(id)})]}),(0,jsx_runtime.jsx)("label",{htmlFor:"title","aria-label":title,className:"title",children:(0,jsx_runtime.jsx)("input",{type:"text",value:title,readOnly:!0,name:"title",placeholder:"Input title"})}),"TASK_ARCHIVED"!==state&&(0,jsx_runtime.jsx)("button",{className:"pin-button",onClick:()=>onPinTask(id),id:"pinTask-".concat(id),"aria-label":"pinTask-".concat(id),children:(0,jsx_runtime.jsx)("span",{className:"icon-star"})},"pinTask-".concat(id))]})};try{Task.displayName="Task",Task.__docgenInfo={description:"",displayName:"Task",props:{task:{defaultValue:null,description:"",name:"task",required:!0,type:{name:"{ id: number; title: string; state: string; }"}},onArchiveTask:{defaultValue:null,description:"",name:"onArchiveTask",required:!0,type:{name:"(id: number) => void"}},onPinTask:{defaultValue:null,description:"",name:"onPinTask",required:!0,type:{name:"(id: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.tsx#Task"]={docgenInfo:Task.__docgenInfo,name:"Task",path:"src/components/Task.tsx#Task"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Task.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:()=>Archived,Default:()=>Default,Pinned:()=>Pinned,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/Task.tsx").i,title:"Components/Other/Task",tags:["autodocs"]},Default={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},Pinned={args:{task:{...Default.args.task,state:"TASK_PINNED"}}},Archived={args:{task:{...Default.args.task,state:"TASK_ARCHIVED"}}},__namedExportsOrder=["Default","Pinned","Archived"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);