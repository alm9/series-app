import axios from 'axios';

const tokenQueCopieiPeloInsomnia =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoidGVzdGUiLCJpYXQiOjE1OTY1NjU1NzgsImV4cCI6MTU5NjU4MzU3OH0.4b5o-emPDYZ29F-snOZi_-jPwj5B986RTZ2lI1xvqWs';

const urlGeradaPorScriptPraSubstituirLinkLocalhost =
  'http://287a107457ed.ngrok.io';

//obs: url falsa criada (por poucas horas) na api usando comando: npm run tunnel
export default axios.create({
  baseURL: urlGeradaPorScriptPraSubstituirLinkLocalhost,
  headers: {
    Authorization: 'Bearer ' + tokenQueCopieiPeloInsomnia,
  },
});
