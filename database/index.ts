import { initializeApp, cert } from 'firebase-admin/app';
import { ServiceAccount } from 'firebase-admin';
import RVServiceAccount from './rossvineyards-service-account.json';

const app = initializeApp({
    credential: cert({
        clientEmail: RVServiceAccount.client_email,
        privateKey: RVServiceAccount.private_key,
        projectId: RVServiceAccount.project_id,
    }),
});

