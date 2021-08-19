// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
