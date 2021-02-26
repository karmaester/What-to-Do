(()=>{"use strict";var __webpack_modules__={"./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://what-to-do/./src/scss/styles.scss?")},"./src/components/UI.js":
/*!******************************!*\
  !*** ./src/components/UI.js ***!
  \******************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/components/storage.js");\n\n\n//UI class\nclass UI {\n    static urlSlug(title) {\n          return title\n            .split(/\\W/)\n            .filter(obj => {\n              return obj !== "";\n            })\n            .join("-")\n            .toLowerCase();\n    }\n\n    static displayProjects() {\n        const projects = _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.getProjects();\n        projects.forEach((project) => UI.addProjects(project));\n    }\n\n    static addProjects(prjc) {\n        const menu = document.querySelector(\'#v-pills-tab\');\n        const button = document.createElement(\'a\');        \n        button.setAttribute("class", "nav-link");\n        button.setAttribute("id", `v-pills-${UI.urlSlug(prjc.proTitle)}-tab`);\n        button.setAttribute("data-toggle", "pill");\n        button.setAttribute("href", `#v-pills-${UI.urlSlug(prjc.proTitle)}`);\n        button.setAttribute("role", "tab");\n        button.setAttribute("aria-controls", `v-pills-${UI.urlSlug(prjc.proTitle)}`);\n        button.setAttribute("aria-selected", "false");\n        button.innerText = `${prjc.proTitle}`;\n        menu.appendChild(button);\n\n        console.log(prjc.todos);\n        const content = document.querySelector(\'#v-pills-tabContent\');\n        const target = document.createElement(\'div\');\n        target.setAttribute("class", "tab-pane fade");\n        target.setAttribute("id", `v-pills-${UI.urlSlug(prjc.proTitle)}`);\n        target.setAttribute("aria-labelledby", `v-pills-${UI.urlSlug(prjc.proTitle)}`);\n        target.setAttribute("role", "tabpanel");\n        prjc.todos.forEach(function(todo) {\n            // const todosWrap = document.querySelector(`#v-pills-${UI.urlSlug(prjc.proTitle)}`);\n            const todoItem = document.createElement(\'div\');\n            console.log(todo.todoTitle);\n            todoItem.innerText = `${todo.todoTitle}`;\n            target.appendChild(todoItem);\n        });\n        content.appendChild(target);\n    }\n\n    static clearFields() {\n\n    }\n\n\n    static deleteBook(el) {\n\n      }\n\n   static showAlert(message, className) {\n\n   }\n}\n\n\n//# sourceURL=webpack://what-to-do/./src/components/UI.js?')},"./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Tabs)\n/* harmony export */ });\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ "./src/components/table.js");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/components/UI.js");\n\n\n\ndocument.addEventListener(\'DOMContentLoaded\', _UI__WEBPACK_IMPORTED_MODULE_1__.default.displayToDos);\ndocument.addEventListener(\'DOMContentLoaded\', _UI__WEBPACK_IMPORTED_MODULE_1__.default.displayProjects);\n\nclass Tabs {\n  static createTabs() {\n    const content = document.getElementById(\'content\');\n\n    content.innerHTML = `\n    <div class="row">\n    <div class="col-3">\n      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">\n        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>\n        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>\n      </div>\n    </div>\n    <div class="col-9">\n      <div class="tab-content" id="v-pills-tabContent">\n        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"></div>\n        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...2</div>\n      </div>\n    </div>\n  </div>\n    `;\n  }\n}\n\n\n//# sourceURL=webpack://what-to-do/./src/components/main.js?')},"./src/components/storage.js":
/*!***********************************!*\
  !*** ./src/components/storage.js ***!
  \***********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\n//Store class\nclass Store {\n    static getProjects() {\n        let projects = [{\n            proTitle: 'First',\n            todos: [\n                {\n                    todoTitle: 'first todo',\n                    description: 'go do stuff',\n                    dueDate: 'today',\n                    priority: 'high',\n                    notes: 'no notes',\n                    checkList: 'not done'\n                },\n                {\n                    todoTitle: 'second todo',\n                    description: 'go do stuff',\n                    dueDate: 'today',\n                    priority: 'high',\n                    notes: 'no notes',\n                    checkList: 'not done'\n                }\n            ]\n        },\n        {\n            proTitle: 'Second',\n            todos: [\n                {\n                    todoTitle: 'wow wow 1',\n                    description: 'go do stuff 1',\n                    dueDate: 'today',\n                    priority: 'high',\n                    notes: 'no notes',\n                    checkList: 'not done'\n                },\n                {\n                    todoTitle: 'makes sense? 1',\n                    description: 'go do stuff 1',\n                    dueDate: 'today',\n                    priority: 'high',\n                    notes: 'no notes',\n                    checkList: 'not done'\n                }\n            ]\n        },\n        {\n            proTitle: 'Third',\n            todos: [\n                {\n                    todoTitle: 'wow wow 2',\n                    description: 'go do stuff 2',\n                    dueDate: 'today',\n                    priority: 'high',\n                    notes: 'no notes',\n                    checkList: 'not done'\n                },\n                {\n                    todoTitle: 'makes sense? 2',\n                    description: 'go do stuff 2',\n                    dueDate: 'today',\n                    priority: 'high',\n                    notes: 'no notes',\n                    checkList: 'not done'\n                }\n            ]\n        }]\n\n        return projects;\n    }\n\n    static addToDo() {\n\n    }\n\n    static removeToDo() {\n\n    }\n\n}\n\n//# sourceURL=webpack://what-to-do/./src/components/storage.js?")},"./src/components/table.js":
/*!*********************************!*\
  !*** ./src/components/table.js ***!
  \*********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Table = () => `\n<table class="table">\n  <thead>\n    <tr>\n      <th scope="col">Title</th>\n      <th scope="col">Description</th>\n      <th scope="col">Due date</th>\n      <th scope="col">Priority</th>\n      <th scope="col">Notes</th>\n      <th scope="col">Checklist</th>\n    </tr>\n  </thead>\n  <tbody id="to-do-list">\n\n  </tbody>\n</table>\n`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);\n\n//# sourceURL=webpack://what-to-do/./src/components/table.js?')},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");\n\n\n\n// function component() {\n    // const element = document.querySelector(\'#content\');\n//   \n    // element.innerHTML = tabs();\n    // return element;\n// }\n//   \n// component();\n\n_components_main__WEBPACK_IMPORTED_MODULE_1__.default.createTabs();\n\n//# sourceURL=webpack://what-to-do/./src/index.js?')}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();