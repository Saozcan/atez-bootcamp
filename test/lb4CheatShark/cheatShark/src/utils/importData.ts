// // Import required modules
// import { CheapSharkRepository } from '../repositories';
// import { CheapShark } from '../models';
// const axios = require('axios');
//
// // Define the URL of the API endpoint to retrieve data from
// const apiUrl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=9999';
//
// // Define a function to import data from the API into the database
// export default async function importData() {
//   // Retrieve the data from the API
//   const response = await axios.get(apiUrl);
//   const data = response.data;
//
//   // Create instances of the model and save them to the database
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   const repository = new CheapSharkRepository();
//   for (const item of data) {
//     const instance = new CheapShark(item);
//     await repository.create(instance);
//   }
//
//   console.log('Import complete!');
// }
//
// // Call the importData function to start the import process
