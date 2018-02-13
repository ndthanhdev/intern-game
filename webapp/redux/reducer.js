sap.ui.define([], () => {
    return (state = {
        isBusy: false
    }, action) => {
        switch (action.type) {
            case 'LOAD_TODO':
                return Object.assign({},
                    state,
                    {
                        isBusy: true
                    });
            default:
                return state
        }
    };
});