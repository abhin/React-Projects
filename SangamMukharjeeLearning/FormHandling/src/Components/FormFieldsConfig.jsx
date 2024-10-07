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