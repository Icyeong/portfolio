import { atom } from 'recoil';
import { stack_dummyData } from '../dummyData/stack';
import { projects_dummyData } from '../dummyData/prejects';
import { experience_dummyData } from '../dummyData/experience';

export const stacks = atom({
   key: 'stacks',
   default: stack_dummyData
});

export const experience = atom({
   key: 'experience',
   default: experience_dummyData
});

export const projects = atom({
   key: 'projects',
   default: projects_dummyData
});

export const selected_project = atom({
   key: 'selected_project',
   default: 1
});
