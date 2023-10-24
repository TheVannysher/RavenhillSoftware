import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import settings from './settings/settings';

const app = initializeApp(settings.firebase);
const db = getFirestore(app);
export default db;
