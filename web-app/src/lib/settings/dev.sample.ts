export interface Settings {
    app: {
        basePath: string,
    },
    firebase: {
        apiKey: string,
        authDomain: string,
        projectId: string,
        storageBucket: string,
        messagingSenderId: string,
        appId: string,
        measurementId: string,
    }
};

const dev:Settings = {
    app: {
        basePath: '<YOUR URL HERE>',
    },
    firebase: {
        apiKey: "<YOUR SETTINGS HERE>",
        authDomain: "<YOUR SETTINGS HERE>",
        projectId: "<YOUR SETTINGS HERE>",
        storageBucket: "<YOUR SETTINGS HERE>",
        messagingSenderId: "<YOUR SETTINGS HERE>",
        appId: "<YOUR SETTINGS HERE>",
        measurementId: "<YOUR SETTINGS HERE>",
    }
}
export default dev;