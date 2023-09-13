import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import RVServiceAccount from './rossvineyards-service-account.json';

admin.initializeApp({
    credential: admin.credential.cert({
        clientEmail: RVServiceAccount.client_email,
        privateKey: RVServiceAccount.private_key,
        projectId: RVServiceAccount.project_id,
    }),
});