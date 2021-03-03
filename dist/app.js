(()=>{"use strict";var __webpack_modules__={"./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://what-to-do/./src/scss/styles.scss?")},"./src/components/UI.js":
/*!******************************!*\
  !*** ./src/components/UI.js ***!
  \******************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/components/storage.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/components/projects.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ \"./src/components/todos.js\");\n/* eslint-disable no-use-before-define, max-len, eqeqeq */\n\n\n\n\nconst deleteProject = () => {\n  const deleteBtns = document.querySelectorAll('#delete-project');\n  deleteBtns.forEach((item) => {\n    item.addEventListener('click', (e) => {\n      const identifier = e.target.parentElement.previousSibling.innerText;\n      UI.deletePrTab(e.target);\n      _storage__WEBPACK_IMPORTED_MODULE_0__.default.removePr(identifier);\n    });\n  });\n};\n\nconst editToDo = () => {\n  const editBtns = document.querySelectorAll('#edit');\n  editBtns.forEach((item) => {\n    item.addEventListener('click', (e) => {\n      const identifier = item.parentElement.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.innerText;\n      showModal();\n      UI.fillFields(identifier);\n      updateForm(identifier);\n      UI.deletePrTab(e.target);\n      _storage__WEBPACK_IMPORTED_MODULE_0__.default.removePr(identifier);\n    });\n  });\n};\n\nconst updateForm = (identifier) => {\n  const form = document.querySelector('#todo-form');\n  form.id = 'update-form';\n  form.lastElementChild.value = 'Update To Do';\n  form.lastElementChild.addEventListener('click', (e) => {\n    e.preventDefault();\n    const todoTitle = document.querySelector('#title').value;\n    const description = document.querySelector('#description').value;\n    const dueDate = document.querySelector('#due-date').value;\n    const priority = document.querySelector('#priority').value;\n    const notes = document.querySelector('#notes').value;\n    const proTitle = document.querySelector('#project').value;\n    const checkInput = document.querySelector('#flexCheckChecked');\n    function checkValue(read) {\n      if (read.checked) {\n        return 'Done';\n      }\n      return 'Not Done';\n    }\n\n    const check = checkValue(checkInput);\n    const newTodos = {\n      todoTitle,\n      desc: description,\n      dueDate,\n      priority,\n      notes,\n      checkList: check,\n      time: identifier,\n    };\n    const project = proTitle;\n    _storage__WEBPACK_IMPORTED_MODULE_0__.default.updateToDo(newTodos, project);\n  });\n};\n\nconst showModal = () => {\n  const continueContainer = document.querySelector('.form-container');\n  continueContainer.classList.toggle('show-modal');\n};\n\ndocument.querySelector('#todo-form').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const todoTitle = document.querySelector('#title').value;\n  const description = document.querySelector('#description').value;\n  const dueDate = document.querySelector('#due-date').value;\n  const priority = document.querySelector('#priority').value;\n  const notes = document.querySelector('#notes').value;\n  const proTitle = document.querySelector('#project').value;\n  const checkInput = document.querySelector('#flexCheckChecked');\n  function checkValue(read) {\n    if (read.checked) {\n      return 'Done';\n    }\n    return 'Not Done';\n  }\n\n  const check = checkValue(checkInput);\n  showModal();\n\n  const project = new _projects__WEBPACK_IMPORTED_MODULE_1__.default(proTitle);\n  const newTodos = new _todos__WEBPACK_IMPORTED_MODULE_2__.default(todoTitle, description, dueDate, priority, notes, check);\n  project.todos.push(newTodos);\n\n  UI.addProjects(project);\n  _storage__WEBPACK_IMPORTED_MODULE_0__.default.addToDo(project, newTodos);\n});\n\nconst delProjectBtn = () => {\n  const buttonDel = document.createElement('a');\n  buttonDel.setAttribute('class', 'd-flex justify-content-center m-1');\n  buttonDel.setAttribute('id', 'delete-project');\n  buttonDel.innerHTML = `\n  <i class=\"far fa-trash-alt dissapear\"></i>\n  `;\n  return buttonDel;\n};\n\nconst tabProjectBtn = (prjc) => {\n  const button = document.createElement('a');\n  button.setAttribute('class', 'nav-link');\n  button.setAttribute('id', `v-pills-${UI.urlSlug(prjc.proTitle)}-tab`);\n  button.setAttribute('data-toggle', 'pill');\n  button.setAttribute('href', `#v-pills-${UI.urlSlug(prjc.proTitle)}`);\n  button.setAttribute('role', 'tab');\n  button.setAttribute('aria-controls', `v-pills-${UI.urlSlug(prjc.proTitle)}`);\n  button.setAttribute('aria-selected', 'false');\n  return button;\n};\n\nconst toDosDisplayer = (prjc) => {\n  const target = document.createElement('div');\n  target.setAttribute('class', 'tab-pane fade');\n  target.setAttribute('id', `v-pills-${UI.urlSlug(prjc.proTitle)}`);\n  target.setAttribute('aria-labelledby', `v-pills-${UI.urlSlug(prjc.proTitle)}`);\n  target.setAttribute('role', 'tabpanel');\n  prjc.todos.forEach((todo) => {\n    const todoItem = document.createElement('div');\n    todoItem.setAttribute('class', 'row border-bottom pb-2 mt-2');\n    todoItem.innerHTML = `\n      <div class=\"col-10 row\">\n      <div class=\"col-12 col-md-6 row\">\n      <li class=\"d-none\">${todo.time}</li>\n      <li class=\"col\">${todo.todoTitle}</li>\n      <li class=\"col\">${todo.desc}</li>\n      <li class=\"col\">${todo.dueDate}</li>\n      </div>\n      <div class=\"col-12 col-md-6 row\">\n      <li class=\"col\">${todo.priority}</li>\n      <li class=\"col\">${todo.notes}</li>\n      <li class=\"col\">${todo.checkList}</li>\n      </div>\n      </div>\n      <div class=\"col-2 row\">\n      <span class=\"col-6\" id=\"delete\"><a href=\"#\" class=\"btn btn-danger btn-sm delete\"><i class=\"far fa-trash-alt\"></i></a></span>\n      <span class=\"col-6\"><a href=\"#\" id=\"edit\" class=\"btn btn-primary btn-sm ml-1\"><i class=\"far fa-edit\"></i></a></span>\n      </div>\n      `;\n    target.appendChild(todoItem);\n  });\n  return target;\n};\n\nconst allToDosDisplayer = (prjc) => {\n  const target = document.createElement('div');\n  prjc.todos.forEach((todo) => {\n    const todoItem = document.createElement('div');\n    todoItem.setAttribute('class', 'row border-bottom pb-2 mt-2');\n    todoItem.innerHTML = `\n      <div class=\"col-12 col-md-6 row\">\n      <li class=\"d-none\">${todo.time}</li>\n      <li class=\"col\">${todo.todoTitle}</li>\n      <li class=\"col\">${todo.desc}</li>\n      <li class=\"col\">${todo.dueDate}</li>\n      </div>\n      <div class=\"col-12 col-md-6 row\">\n      <li class=\"col\">${todo.priority}</li>\n      <li class=\"col\">${todo.notes}</li>\n      <li class=\"col\">${todo.checkList}</li>\n      </div>\n      `;\n    target.appendChild(todoItem);\n  });\n  return target;\n};\n\n// UI class\nclass UI {\n  static urlSlug(title) {\n    return title\n      .split(/\\W/)\n      .filter(obj => obj !== '')\n      .join('-')\n      .toLowerCase();\n  }\n\n  static displayProjects() {\n    const projects = _storage__WEBPACK_IMPORTED_MODULE_0__.default.getProjects();\n    UI.addAllToDos(projects);\n    projects.forEach((project) => {\n      UI.addProjects(project);\n    });\n    UI.addButton();\n    UI.addRemoveButton();\n    deleteProject();\n    editToDo();\n  }\n\n  static addProjects(prjc) {\n    const menu = document.querySelector('#v-pills-tab');\n    const button = tabProjectBtn(prjc);\n    const buttonDel = delProjectBtn();\n    button.innerText = `${prjc.proTitle}`;\n    menu.appendChild(button);\n    menu.appendChild(buttonDel);\n    const content = document.querySelector('#v-pills-tabContent');\n    const target = toDosDisplayer(prjc);\n    content.appendChild(target);\n  }\n\n  static addAllToDos(prjcts) {\n    const content = document.querySelector('#v-pills-home');\n    prjcts.forEach((prjct) => {\n      const target = allToDosDisplayer(prjct);\n      content.appendChild(target);\n    });\n  }\n\n  static addButton() {\n    const content = document.querySelector('#v-pills-tabContent');\n    const addButton = document.createElement('div');\n    addButton.setAttribute('class', 'btn btn-light addbtn w-100 bolder text-primary shadow mt-3');\n    addButton.innerText = '+';\n    addButton.addEventListener('click', e => {\n      e.stopPropagation();\n      showModal();\n    });\n    content.appendChild(addButton);\n  }\n\n  static deleteToDo(el) {\n    el.parentElement.parentElement.remove();\n  }\n\n  static deletePrTab(el) {\n    el.parentElement.previousSibling.remove();\n    el.parentElement.remove();\n  }\n\n  static addRemoveButton() {\n    const deleteBtns = document.querySelectorAll('#delete');\n    deleteBtns.forEach((item) => {\n      item.addEventListener('click', (e) => {\n        e.stopPropagation();\n        UI.deleteToDo(item);\n        const identifier = item.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.innerText;\n        _storage__WEBPACK_IMPORTED_MODULE_0__.default.removeToDo(identifier);\n      });\n    });\n  }\n\n  static clearFields() {\n  }\n\n  static fillFields(time) {\n    const projects = _storage__WEBPACK_IMPORTED_MODULE_0__.default.getProjects();\n    projects.forEach((project) => {\n      project.todos.forEach((todo) => {\n        if (todo.time == time) {\n          document.querySelector('#title').value = todo.todoTitle;\n          document.querySelector('#description').value = todo.desc;\n          document.querySelector('#due-date').value = todo.dueDate;\n          document.querySelector('#priority').value = todo.priority;\n          document.querySelector('#notes').value = todo.notes;\n          const title = document.querySelector('#project');\n          title.value = project.proTitle;\n          title.disabled = true;\n        }\n      });\n    });\n  }\n}\n/* eslint-enable no-use-before-define, max-len, eqeqeq */\n\n\n//# sourceURL=webpack://what-to-do/./src/components/UI.js?")},"./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Tabs)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/components/UI.js");\n\n\ndocument.addEventListener(\'DOMContentLoaded\', _UI__WEBPACK_IMPORTED_MODULE_0__.default.displayProjects);\n\nclass Tabs {\n  static createTabs() {\n    const content = document.getElementById(\'content\');\n\n    content.innerHTML = `\n    <div class="row">\n    <div class="col-2">\n      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">\n        <a class="nav-link mb-3 active border-bottom" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>\n      </div>\n    </div>\n    <div class="col-10">\n      <div class="tab-content" id="v-pills-tabContent">\n        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"></div>\n      </div>\n    </div>\n  </div>\n    `;\n  }\n}\n\n\n//# sourceURL=webpack://what-to-do/./src/components/main.js?')},"./src/components/projects.js":
/*!************************************!*\
  !*** ./src/components/projects.js ***!
  \************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(proTitle) {\n    this.proTitle = proTitle;\n    this.todos = [];\n  }\n}\n\n//# sourceURL=webpack://what-to-do/./src/components/projects.js?')},"./src/components/storage.js":
/*!***********************************!*\
  !*** ./src/components/storage.js ***!
  \***********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\n/* eslint-disable no-restricted-globals, eqeqeq */\n\nclass Store {\n  static getProjects() {\n    let projects;\n    if (localStorage.getItem('projects') === null) {\n      projects = [];\n    } else {\n      projects = JSON.parse(localStorage.getItem('projects'));\n    }\n\n    return projects;\n  }\n\n  static addToDo(project, todo) {\n    const projects = Store.getProjects();\n    const checkSome = projects.some((element) => element.proTitle === project.proTitle);\n    if (checkSome === false || projects.length === 0) {\n      projects.push(project);\n      localStorage.setItem('projects', JSON.stringify(projects));\n    } else {\n      for (let i = 0; i <= projects.length - 1; i += 1) {\n        if (projects[i].proTitle === project.proTitle) {\n          projects[i].todos.push(todo);\n          localStorage.setItem('projects', JSON.stringify(projects));\n        }\n      }\n    }\n    location.reload();\n  }\n\n  static removeToDo(time) {\n    const projects = Store.getProjects();\n\n    projects.forEach((project) => {\n      project.todos.forEach((todo, index) => {\n        if (todo.time === time) {\n          project.todos.splice(index, 1);\n        }\n      });\n    });\n\n    localStorage.setItem('projects', JSON.stringify(projects));\n  }\n\n  static updateToDo(newTodos, project) {\n    const projects = Store.getProjects();\n\n    projects.forEach((prjct) => {\n      if (prjct.proTitle === project) {\n        prjct.todos.forEach((todo, index) => {\n          if (todo.time == newTodos.time) {\n            prjct.todos[index] = newTodos;\n          }\n        });\n      }\n    });\n\n    localStorage.setItem('projects', JSON.stringify(projects));\n    location.reload();\n  }\n\n  static removePr(name) {\n    const projects = Store.getProjects();\n\n    projects.forEach((project, index) => {\n      if (project.proTitle === name) {\n        projects.splice(index, 1);\n      }\n    });\n\n    localStorage.setItem('projects', JSON.stringify(projects));\n  }\n}\n\n/* eslint-enable no-restricted-globals, eqeqeq */\n\n\n//# sourceURL=webpack://what-to-do/./src/components/storage.js?")},"./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  constructor(todoTitle, description, dueDate, priority, notes, check) {\n    this.todoTitle = todoTitle;\n    this.desc = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = notes;\n    this.checkList = check;\n    this.time = new Date().getTime();\n  }\n}\n\n//# sourceURL=webpack://what-to-do/./src/components/todos.js?')},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");\n\n\n\n// function component() {\n// const element = document.querySelector(\'#content\');\n//\n// element.innerHTML = tabs();\n// return element;\n// }\n//\n// component();\n\n_components_main__WEBPACK_IMPORTED_MODULE_1__.default.createTabs();\n\n// const arr = [1, 2 , 3];\n// console.log(arr.indexOf(2))\n\n//# sourceURL=webpack://what-to-do/./src/index.js?')}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();