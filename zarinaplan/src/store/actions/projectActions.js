export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {

        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Arina',
            authorLastName: 'Panfilova',
            authorId: 619,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
};