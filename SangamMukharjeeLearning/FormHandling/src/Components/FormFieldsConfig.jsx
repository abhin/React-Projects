export const loginFormFields = [
    {
        field: 'input',
        label: 'Username/ Email',
        attr: {   
            id: 'email',
            type: 'email',
            name: 'email',
            placeholder: 'Enter Username/ Email.',
        },
        defaultHandler: 'onChange'
    },
    {
        field: 'input',
        label: 'Password',
        attr: {  
            id: 'password',
            type: 'password',
            name: 'password',
            placeholder: 'Enter Password',
        },
        defaultHandler: 'onChange'
    },
    {
        field: 'input',
        attr: {  
            id: 'login',
            type: 'submit',
            value: 'Login',
            name: 'login'
        }
    },
    {
        field: 'input',
        attr: {  
            id: 'reset',
            type: 'reset',
            value: 'Reset',
            name: 'reset'
        },
        defaultHandler: 'onClick'
    }
];

export const registerFormFields = [
    {
        field: 'input',
        label: 'Username/ Email',
        attr: {   
            id: 'email',
            type: 'email',
            name: 'email',
            placeholder: 'Enter Username/ Email.',
        },
        defaultHandler: 'onChange'
    },
    {
        field: 'input',
        label: 'Password',
        attr: {  
            id: 'password',
            type: 'password',
            name: 'password',
            placeholder: 'Enter Password',
        },
        defaultHandler: 'onChange'
    },
    {
        field: 'input',
        label: 'First name',
        attr: {  
            id: 'fName',
            type: 'text',
            name: 'fName'
        },
        defaultHandler: 'onChange'
    },
    {
        field: 'input',
        label: 'Second name',
        attr: {  
            id: 'sName',
            type: 'text',
            name: 'sName'
        },
        defaultHandler: 'onChange'
    },
    {
        field: 'input',
        attr: {  
            id: 'register',
            type: 'submit',
            value: 'Register',
            name: 'register'
        }
    },
    {
        field: 'input',
        attr: {  
            id: 'reset',
            type: 'reset',
            value: 'Reset',
            name: 'reset'
        },
        defaultHandler: 'onClick'
    }
];