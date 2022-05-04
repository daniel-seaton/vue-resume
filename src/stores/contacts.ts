import type { Contact } from '@/types/model';
import {defineStore} from 'pinia';
import { v4 as uuid } from 'uuid';

type ContactsState = {
    self: Contact
}

export const useContactsStore = defineStore('contacts', {
    state: (): ContactsState => ({
        self: {
            id: uuid(),
            firstName: 'Daniel',
            lastName: 'Seaton',
            phoneNumber: '(414) 412-6483',
            email: 'seatondanny@gmail.com',
            description: `A software engineer with experience in full stack development and many years of experience as a system administrator. Able to work effectively as a part of a team, tending to quickly gravitate towards leadership, or as an individual. Extremely passionate when working towards his goals with respect to his career, family, and friends, and will bring that energy to any new challenge. Certified AWS Developer & Architect - Associate.`
        }
    })
});