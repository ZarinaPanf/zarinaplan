const initialState = {
    projects: [
        { id: 1, title: 'Project 1', content: 'Project 1 description' },
        { id: 2, title: 'Project 2', content: 'Project 2 description' },
        { id: 3, title: 'Project 3', content: 'Project 3 description' }
    ]
};

const projectReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project: ', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error ', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;