import ajax from './ajax';

export const requestResumes = () => ajax('/resumes');

export const addNewResume = body => ajax('/resumes', { method: 'POST', body });

export const updateResumeDetails = (id, body) => ajax(`/resumes/${id}`, { method: 'PATCH', body });

export const deleteResume = id => ajax(`/resumes/${id}`, { method: 'DELETE' });
