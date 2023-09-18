import deleteVine from './deleteVine';
import getVine from './getVine';
import getAllVines from './getAllVines';
import updateVine from './updateVine';

const resolvers = [
    deleteVine,
    getAllVines,
    getVine,
    updateVine,
];

export default resolvers;