import type { Project } from '@/types/model';
import {defineStore} from 'pinia';
import { v4 as uuid } from 'uuid';

type ProjectsState = {
    projects: Project[]
}

export const useProjectsStore = defineStore('projects', {
    state: (): ProjectsState => ({
        projects: [{
            id: uuid(),
            title: 'Fitnet',
            description: 'Personal project in which I design and build a mobile application which leverages AWS DynamoDB and Cognito User Pools to provide highly customizable workout tracking and metrics.'
        }, {
            id: uuid(),
            title: 'Briggs & Stratton Kodiak',
            description: 'Mobile application utilizing Flutter/Dart and Google Cloud\'s IoT to control physical hardware devices from miles away and provide monitoring/usage analytics.'
        }]
    })
});