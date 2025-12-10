// // console.log("Start");
// // for (let i = 0; i < 1e9; i++) {
// //   console.log("Hello  world");
// // }
// // console.log("End");

// //Syncronous

// // console.log("Before");

// // setTimeout(() => {
// //   console.log("Paramesh");
// // }, 5000);
// // console.log("After");

// // https://dragonball-api.com/api/characters/1

// import axios from "axios";

// //  async function fetchApi() {
// //    const response = await fetch("https://jsonplaceholder.typicode.com/users");
// //    const ans = await response.json();
// //    console.log("The user:", ans);
// //  }
// //  fetchApi();

// // async function fetchApi() {
// //   const response = await axios("https://dragonball-api.com/api/characters/10");
// //   console.log("The user:", response);
// // }
// // fetchApi();

// async function fetchMultipleApis() {
//   let urls = [
//     "https://dragonball-api.com/api/characters/1",
//     "https://dragonball-api.com/api/characters/10",
//   ];
//   let promises = urls.map((item) => fetch(item).then((res) => res.json()));
//   let data = await Promise.all(promises);
//   console.log("The DB characters data:", data);

//   //   console.log("Promises:", promises);
// }

// fetchMultipleApis();