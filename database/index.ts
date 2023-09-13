import { initializeApp, cert } from 'firebase-admin/app';
import { ServiceAccount } from 'firebase-admin';
import RVServiceAccount from './rossvineyards-service-account.json';

import { ApolloServer } from '@apollo/server';

const app = initializeApp({
    credential: cert({
        clientEmail: RVServiceAccount.client_email,
        privateKey: RVServiceAccount.private_key,
        projectId: RVServiceAccount.project_id,
    }),
});

