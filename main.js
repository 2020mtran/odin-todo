/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Array to hold projects which holds todos\r\nconst projectList = [];\r\n\r\n// Constructor for projects\r\nfunction Project(name) {\r\n    this.name = name;\r\n    this.lists = [];\r\n};\r\n\r\n// Constructor for to-do list\r\nfunction List(title, description, dueDate, priority, notes) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n    this.notes = notes;\r\n};\r\n\r\n// Add list to project\r\nfunction addList(projectIndex, title, description, dueDate, priority, notes) {\r\n    const newList = new List(title, description, dueDate, priority, notes);\r\n    projectList[projectIndex].lists.push(newList);\r\n    displayList(projectIndex);\r\n};\r\n\r\n// Remove list from project\r\nfunction removeList(projectIndex, listIndex) {\r\n    projectList[projectIndex].lists.splice(listIndex, 1);\r\n    displayList(projectIndex);\r\n}\r\n\r\n// Display the list on the dom\r\nfunction displayList(projectIndex) {\r\n    const projectContainer = document.getElementById(\"project-container\");\r\n\r\n    projectContainer.innerHTML = '';\r\n\r\n    const project = projectList[projectIndex];\r\n\r\n    project.lists.forEach((list, index) => {\r\n        const listCard = document.createElement(\"div\");\r\n        listCard.classList.add(\"list-card\");\r\n\r\n        listCard.innerHTML = `\r\n        <h2>${list.title}</h2>\r\n        <p>${list.description}</p>\r\n        <p>${list.dueDate}</p>\r\n        <p>${list.priority}</p>\r\n        <p>${list.notes}</p>\r\n        <button class=\"remove-btn\" data-index=${index}>Remove Task</button>`;\r\n\r\n        const removeButton = listCard.querySelector(\".remove-btn\");\r\n        removeButton.addEventListener(\"click\", () => {\r\n            const listIndex = parseInt(removeButton.getAttribute(\"data-index\"));\r\n            removeList(projectIndex, index);\r\n        });\r\n\r\n        projectContainer.appendChild(listCard);\r\n    });\r\n}\r\n\r\nconst newListBtn = document.getElementById(\"new-list-btn\");\r\nconst listFormContainer = document.getElementById(\"list-form-container\");\r\n\r\n// New list button shows the form to create a new list\r\nnewListBtn.addEventListener(\"click\", () => {\r\n    listFormContainer.style.display = \"block\";\r\n});\r\n\r\nconst listForm = document.getElementById(\"list-form\");\r\n\r\n// Submitting the data and creating a list in the project\r\nlistForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const title = document.getElementById(\"title\").value;\r\n    const description = document.getElementById(\"description\").value;\r\n    const dueDate = document.getElementById(\"dueDate\").value;\r\n    const priority = document.getElementById(\"priority\").value;\r\n    const notes = document.getElementById(\"notes\").value;\r\n\r\n    const projectIndex = 0;\r\n    addList(projectIndex, title, description, dueDate, priority, notes);\r\n\r\n    listForm.reset();\r\n\r\n    listFormContainer.style.display = \"none\";\r\n\r\n    displayList(projectIndex);\r\n});\r\n\r\nconst newProjectBtn = document.getElementById(\"new-project-btn\");\r\nconst projectFormContainer = document.getElementById(\"project-form-container\");\r\n\r\nnewProjectBtn.addEventListener(\"click\", () => {\r\n    projectFormContainer.style.display = \"block\";\r\n});\r\n\r\nconst projectForm = document.getElementById(\"project-form\");\r\n\r\nprojectForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const name = document.getElementById(\"name\").value;\r\n\r\n    const newProject = new Project(name);\r\n\r\n    projectList.push(newProject);\r\n\r\n    projectForm.reset();\r\n\r\n    projectFormContainer.style.display = \"none\";\r\n});\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;