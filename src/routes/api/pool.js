import pkg from 'pg';
const { Pool } = pkg;

const englishAssistantPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false
});

export default englishAssistantPool;