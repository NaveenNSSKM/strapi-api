const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '../.env');
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('Error loading .env file:', result.error);
} else {
  console.log('Successfully loaded .env file');
  console.log('ADMIN_JWT_SECRET:', process.env.ADMIN_JWT_SECRET ? 'Defined' : 'Undefined');
  if (process.env.ADMIN_JWT_SECRET) {
      console.log('ADMIN_JWT_SECRET length:', process.env.ADMIN_JWT_SECRET.length);
  }
}
