import { createClient } from 'microcms-js-sdk';

// client handling the api request for microCMS
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.API_KEY || '',
});