import { QueryResolvers } from './../../../../../../types/graphql';
const login:QueryResolvers["login"] = async (_, args) => {
    // TODO: verify auth in firebase
    return null;
}

export default login;