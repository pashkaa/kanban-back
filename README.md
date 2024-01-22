# BOARDS

getAllBoards - GET - / - {}
getBoardById - GET - /:id - { id: string }
createBoard - POST - /create - {}

# TASKS

getTaskById - GET - /:id/tasks/:taskId - { id: string, taskId: string } \n
createTaskById - POST - /tasks/:id - { id: string, title: string, description:string }
createTaskById - POST - /tasks-id/:id - { id: string, title: string, description:string, taskId: string }
deleteTaskById - DELETE - /tasks/:id - { id: string, taskId: string }
updateTaskById - PUT - /tasks/:id - { id: string, title: string, description:string, taskId: string }
deleteTaskInArrayById - DELETE - /board-tasks/:id - { id: string }

# SUB-ARRAY

addTaskInArrayByIdAndName - PATCH - /sub-array/add/:id - { id: string, taskId: string, arrayName: string }
removeTaskFromArrayByIdAndName - PATCH - /sub-array/remove/:id - { id: string, taskId: string, arrayName: string }
deleteArrayById - DELETE - /sub-array/:id - { id: string}
