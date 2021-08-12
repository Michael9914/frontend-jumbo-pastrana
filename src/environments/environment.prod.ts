const WEB = 'http://backend-jumbo-pastrana.test';
const API = 'http://backend-jumbo-pastrana.test/api/v1';

export const environment = {
  production: true,
  WEB,
  STORAGE_URL: WEB + '/storage',
  API_URL_AUTHENTICATION: API + '/authentication',
  API_URL_PRIVATE: API + '/private',
  API_URL_PUBLIC: API + '/public',
};
