const { REACT_APP_ENV, NODE_ENV } = process.env
export const environment = REACT_APP_ENV ? REACT_APP_ENV : NODE_ENV;

const devConfig = {
  apiUrl: "http://localhost:8000/v1/",
}

const prodConfig = {
  apiUrl: "https://example-api-prod.com/v1/",
}

export default environment === "production" ? prodConfig : devConfig;
