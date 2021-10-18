import { createStore } from "redux";

import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;

// {
//   "data": {
//       "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbmVtZUBnbWFpbC5jb20iLCJpZCI6Ik9ENmdVSWg3M0ZKTFhGRE5oNUJVIiwiaWF0IjoxNjM0NTQ5MzU4fQ.YCNzLwUl9Ne1Vq9WhJcMWrVdGUzqvbPDv9j4QmTyD0I"
//   },
//   "status": 201,
//   "statusText": "Created",
//   "headers": {
//       "content-length": "198",
//       "content-type": "application/json; charset=utf-8"
//   },
//   "config": {
//       "transitional": {
//           "silentJSONParsing": true,
//           "forcedJSONParsing": true,
//           "clarifyTimeoutError": false
//       },
//       "transformRequest": [
//           null
//       ],
//       "transformResponse": [
//           null
//       ],
//       "timeout": 0,
//       "xsrfCookieName": "XSRF-TOKEN",
//       "xsrfHeaderName": "X-XSRF-TOKEN",
//       "maxContentLength": -1,
//       "maxBodyLength": -1,
//       "headers": {
//           "Accept": "application/json, text/plain, */*",
//           "Content-Type": "application/json"
//       },
//       "method": "post",
//       "url": "http://bootcampapi.techcs.io/api/fe/v1/authorization/signin",
//       "data": "{\"email\":\"deneme@gmail.com\",\"password\":\"123123123\"}"
//   },
//   "request": {}
// }