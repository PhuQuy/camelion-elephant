// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    emailURL: "https://phuquy.dev/send-mail",
    firebaseConfig: {
        apiKey: "AIzaSyAQzhYcED7ENSi9GPr2PxMtN0Dk3grK8Qs",
        authDomain: "camelion-elephant.firebaseapp.com",
        databaseURL: "https://camelion-elephant.firebaseio.com",
        projectId: "camelion-elephant",
        storageBucket: "camelion-elephant.appspot.com",
        messagingSenderId: "668859628583"
    },
    domain: "https://phuquy.dev"
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
