import { QueryResolvers } from './../../../../../../types/graphql';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const login:QueryResolvers["login"] = async (_, args) => {
    const { username, password } = args.params;
    const auth = getAuth();
    try {
        const user = await signInWithEmailAndPassword(auth, username, password);
        console.log('login successfull for user: ', user);
        return true;
    } catch (error) {
        console.log('Failed to login: ', error);
        return false;
    }
}

export default login;