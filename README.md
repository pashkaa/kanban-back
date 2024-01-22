# INFO
При заході в додаток ми бачимо SearchBar та 2 кнопи - Load та Create\
При натиску на кнопку Load, якщо ми не ввели в Input нічого, то нам виведе помилку - Board ID must be a 24-character hex string\
Якщо користувач введе в input правильний формат даних, але такого id в базі даних нема, то йому виведе помилку - Board with such id doesn't exist\
Якщо все правильно, то кнопка Create зміниться на Delete, при натисканні на яку весь Board та всі tasks в ньому видаляються\
При натиску на кнопку Create ми бачимо alert з новим BoardId, він вставляється в input і користувач далі може робити нові таски



# BOARDS

getAllBoards - GET - / - {}
getBoardById - GET - /:id - { id: string }
createBoard - POST - /create - {}

# TASKS

getTaskById - GET - /:id/tasks/:taskId - { id: string, taskId: string }\
createTaskById - POST - /tasks/:id - { id: string, title: string, description:string }\
createTaskById - POST - /tasks-id/:id - { id: string, title: string, description:string, taskId: string }\
deleteTaskById - DELETE - /tasks/:id - { id: string, taskId: string }\
updateTaskById - PUT - /tasks/:id - { id: string, title: string, description:string, taskId: string }\
deleteTaskInArrayById - DELETE - /board-tasks/:id - { id: string }\

# SUB-ARRAY

addTaskInArrayByIdAndName - PATCH - /sub-array/add/:id - { id: string, taskId: string, arrayName: string }\
removeTaskFromArrayByIdAndName - PATCH - /sub-array/remove/:id - { id: string, taskId: string, arrayName: string }\
deleteArrayById - DELETE - /sub-array/:id - { id: string}\
