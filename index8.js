const axios = require('axios');

async function fetchData() {
let response = await axios.getAdapter("https://http.cat/[status_code]");
console.log(response.data);

}

fetchData();
