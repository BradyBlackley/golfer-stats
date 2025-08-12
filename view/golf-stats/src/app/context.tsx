'use client';

import { createContext } from 'react';

const UserContext = createContext('Guest' as string);

export default UserContext;