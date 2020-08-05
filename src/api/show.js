import axios from 'axios';

const tokenQueCopieiPeloInsomnia =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoidGVzdGUiLCJpYXQiOjE1OTY1OTE0NzIsImV4cCI6MTU5NjYwOTQ3Mn0.qrWRF-rk-yn4tKXJDIOv90JlT9YPh4E0eoEg7tEAQOs';

const urlGeradaPorScriptPraSubstituirLinkLocalhost =
  'http://d1316ad36b1d.ngrok.io';

//obs: url falsa criada (por poucas horas) na api usando comando: npm run tunnel
export default axios.create({
  baseURL: urlGeradaPorScriptPraSubstituirLinkLocalhost,
  headers: {
    Authorization: 'Bearer ' + tokenQueCopieiPeloInsomnia,
  },
});
