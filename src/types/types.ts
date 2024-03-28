enum STATUSES {
    IMPORTANT,
    NOTIMPORTANT
}

interface Task {
id: number,
task: string,
status: STATUSES
}

declare global {
    interface Window {
        Telegram:any,
        sendData:any,
    }
}

export {
    STATUSES,
    type Task
}