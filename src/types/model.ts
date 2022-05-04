export type Project = {
    id: string,
    title: string,
    description: string,
}

export type Contact = {
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber?: string,
    email?: string,
    description?: string
}

export type Role = {
    id: string, 
    title: string,
    startDate: Date,
    endDate?: Date,
    duties?: string[]
}

export type Job = {
    id: string,
    company: string,
    roles: Role[],
    location: string,
}