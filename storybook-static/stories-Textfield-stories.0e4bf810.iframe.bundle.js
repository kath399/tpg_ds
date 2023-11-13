(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[5024],{"./src/components/Textfield.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>Textfield});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Textfield=_ref=>{let{id,complex,state="enabled",label,error,errortext="Error",suggestions=["List item 1","List item 2"]}=_ref;const[isEmpty,setIsEmpty]=(0,react.useState)(!1),[inputValue,setInputValue]=(0,react.useState)(""),[showInputError,setShowInputError]=(0,react.useState)(!1);return showInputError&&(suggestions=[],suggestions.push("Cannot find")),(0,jsx_runtime.jsxs)("div",{className:"txtfield",children:[(0,jsx_runtime.jsxs)("label",{htmlFor:id,className:"textfield",children:[" ",label," "]}),(0,jsx_runtime.jsx)("input",{id,type:"text",className:error?"error":"textfield",onChange:event=>{const value=event.target.value;setInputValue(value),setIsEmpty(""===value.trim()),setShowInputError(complex&&""!==value.trim()&&!suggestions.includes(value.trim()))},disabled:"disabled"===state,required:!0===error,list:"suggestions"}),error&&(0,jsx_runtime.jsx)("div",{className:"error-message",children:errortext}),complex&&(0,jsx_runtime.jsxs)("datalist",{id:"suggestions",children:[" ",suggestions.map(((suggestion,index)=>(0,jsx_runtime.jsx)("option",{value:suggestion},index)))]})]})};try{Textfield.displayName="Textfield",Textfield.__docgenInfo={description:"",displayName:"Textfield",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},complex:{defaultValue:null,description:"",name:"complex",required:!0,type:{name:"boolean"}},state:{defaultValue:{value:"enabled"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"enabled"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:"Error"},description:"",name:"errortext",required:!1,type:{name:"string"}},suggestions:{defaultValue:{value:"['List item 1', 'List item 2']"},description:"",name:"suggestions",required:!1,type:{name:"string[]"}},errorsuggestions:{defaultValue:null,description:"",name:"errorsuggestions",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Textfield.tsx#Textfield"]={docgenInfo:Textfield.__docgenInfo,name:"Textfield",path:"src/components/Textfield.tsx#Textfield"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Textfield.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Complex:()=>Complex,Disabled:()=>Disabled,Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_Textfield__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Textfield.tsx"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Textfield",component:_components_Textfield__WEBPACK_IMPORTED_MODULE_0__.V,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Simple={args:{id:"Simple",complex:!1,state:"enabled",label:"Label",error:!1,errortext:"Error"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=896-28676&mode=design&t=Kf2VfR9SgOm0o792-4"}}},Active={args:{id:"Simple",complex:!1,state:"enabled",label:"Label",error:!1,errortext:"Error"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=896-28676&mode=design&t=Kf2VfR9SgOm0o792-4"}},play:async _ref=>{let{canvasElement}=_ref;const nameInput=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByLabelText("Label",{selector:"input"});await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.type(nameInput,"User Input",{delay:100})}},Disabled={args:{id:"Simple",complex:!1,state:"disabled",label:"Label",error:!1,errortext:"Error"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=896-28676&mode=design&t=Kf2VfR9SgOm0o792-4"}}},Complex={args:{id:"Active",complex:!0,state:"enabled",label:"Label",error:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=894-32414&mode=design&t=Lx4uU7loBvdsJPIU-4"}},play:async _ref2=>{let{canvasElement}=_ref2;const nameInput=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByLabelText("Label",{selector:"input"});await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.type(nameInput,"List item",{delay:100})}},__namedExportsOrder=["Simple","Active","Disabled","Complex"]},"?4f7e":()=>{}}]);