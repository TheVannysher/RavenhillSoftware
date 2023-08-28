export interface Settings {
    app: {
        basePath: string,
    },
};

const dev:Settings = {
    app: {
        basePath: '<YOUR URL HERE>',
    }
}
export default dev;