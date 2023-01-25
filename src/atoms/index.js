import { atom } from 'recoil';
import { projects_dummyData } from '../dummyData/prejects';

export const projects = atom({
   key: 'projects',
   default: projects_dummyData
});

export const selected_project = atom({
   key: 'selected_project',
   default: 1
});
