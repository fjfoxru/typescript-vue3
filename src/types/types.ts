enum STATUSES {
    IMPORTANT,
    NOTIMPORTANT
}

interface Task {
id: number,
task: string,
status: STATUSES
}

export {
    STATUSES,
    type Task
}