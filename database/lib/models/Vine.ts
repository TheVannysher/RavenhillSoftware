import { firestore } from 'firebase-admin';
import { Vine } from "types/graphql";



const VineModel = {
    get: async (id: string): Promise<Vine | null> => {
        try {
            const ref = await firestore().doc(id).get();
            const data = ref.data() as Vine;
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

}

export default VineModel;