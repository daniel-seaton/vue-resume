import type { Job } from '@/types/model';
import {defineStore} from 'pinia';
import { v4 as uuid } from 'uuid';

type JobsState = {
    jobs: Job[]
}

export const useJobsStore = defineStore('jobs', {
    state: (): JobsState => ({
        jobs: [{
            id: uuid(),
            company: 'Total Administrative Services Coorporation (TASC)',
            location: 'Madison, WI',
            roles: [{
                id: uuid(),
                title: 'Application Developer II',
                startDate: new Date(2021, 4),
            }, {
                id: uuid(),
                title: 'Application Developer I',
                startDate: new Date(2020, 3),
                endDate: new Date(2021, 4),
                duties: [
                    'Full stack development utilizing Typescript/Angular to provide a platform for companies and individuals alike to manage highly customizable benefit packages options (medical, dental, investments accounts, etc).',
                    'Part of the core API sub-team which ensures that billions of dollars of financial operations were safely and accurately executed, and that errors were handled in a way that prevented loss for the company and client alike.',
                    'Translate business requirements into easily consumable tasks and utilize cloud-based resources via AWS to develop, deploy, test, and monitor the implementation in multiple development and production environments.',
                    'Mentor new developers, disseminating business and technical knowledge so that they could quickly onboard and integrate themselves into the team with minimal downtime, and without affecting personal productivity.'
                ]
            }]
        }, {
            id: uuid(),
            company: 'i3 Product Development',
            location: 'Middleton, WI',
            roles: [{
                id: uuid(),
                title: 'Software Engineer',
                startDate: new Date(2019, 8),
                endDate: new Date(2020, 3),
                duties: [
                    'Front and backend development of a multitude of products using various technologies including Kotlin, Go, Dart/Flutter, AngularJS, Angular, Java and C# to implement both prototypes and production level applications and reusable SDKs across both mobile and web platforms.',
                    'Interact directly with clients to form product features, architect solutions, and ultimately create a stable, maintainable product that they are proud to put their name on.',
                    'Work in tandem with UI/UX teams in order to develop user interfaces that both fit the client\'s aesthetic and offer the entire range of the products toolset in an easily accessible fashion.'
                ]
            }]
        }, {
            id: uuid(),
            company: 'Fleetworthy Solutions',
            location: 'Sun Praire, WI',
            roles: [{
                id: uuid(),
                title: 'Full Stack Software Developer',
                startDate: new Date(2018, 8),
                endDate: new Date(2019, 8),
                duties: [
                    'Full stack development using SOLID design principles to create a satisfying user experience while still meeting strict employer deadlines.',
                    'Play a large part in developing any major company undertaking, including a workflow solution which increased employee effectiveness by creating step by step instructions for over 150 different company processes.',
                    'Experience with isomorphic javascript, test driven C# development using Moq, Autofixture, and entity framework.'
                ]
            }]
        }]
    })
});