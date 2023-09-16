import { firestore } from 'firebase-admin';

interface getAllCondition<T> {
    field: string
    operator: firestore.WhereFilterOp
    value: T
}

export async function get<T>(documentId: string): Promise<T> {
    const query = await firestore().doc(documentId).get()
    const data = query.data() as T;
    return data;
}

export async function getAll<T, conditionValueType>(collectionPath: string, condition: getAllCondition<conditionValueType>): Promise<T[]> {
    const { field, operator, value } = condition;
    const query = await firestore().collection(collectionPath).where(field, operator, value).get();
    const data = query.docs.map(doc => doc.data()) as T[];
    return data;
}

export async function update<T>(documentId: string, params: firestore.DocumentData): Promise<firestore.WriteResult> {
    const data = await firestore().doc(documentId).set({
        ...params,
    });
    return data;
}

// export async function updateBulk<T>(documentIds: string[], params: firestore.DocumentData): Promise<firestore.WriteResult> {
//     const writer = firestore().bulkWriter();
//     const refs = documentIds.map((id) => {
//         const ref = firestore().doc(id);
//         return writer.update(ref,{...params});
//     });
//     await writer.close();
//     return refs;
// }

async function remove(documentId: string): Promise<firestore.WriteResult> {
    const data = await firestore().doc(documentId).delete();
    return data;
}

export default {
    get,
    getAll,
    update,
    remove,
}
