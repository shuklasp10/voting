export interface Options {
    id: number,
    title: string,
    votes: number
}

export interface Poll {
    question: string,
    options: Options[]
}

export const poll: Poll = {
    question: 'Who will win?',
    options: [
        {
            id: 0,
            title: 'Batman',
            votes: 0
        },
        {
            id: 1,
            title: 'Superman',
            votes: 0
        }
    ]
}
