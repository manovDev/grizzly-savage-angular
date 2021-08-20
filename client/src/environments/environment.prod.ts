export const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyDLi14uFMYDoVa9WXSRZIRsCAK2BlLXH3o",
        authDomain: "grizzly-savage.firebaseapp.com",
        projectId: "grizzly-savage",
        storageBucket: "gs://grizzly-savage.appspot.com",
        messagingSenderId: "1071159612884",
        appId: "1:1071159612884:web:1faa81a339a69815f27241"
    },
    baseUrl: 'http://localhost:5000',
    product: {
        getAll: 'get-all',
        create: 'create',
        edit: 'edit',
        delete: 'delete',
        getOne: (id: string) => `${id}`,
    }
};