// import axios from 'axios';

// const URL = "http://localhost:80";

// export const authenticatePost = async (data) => {
//     try {
//         return await axios.post(`${URL}/posts`, data); //post request will send data to route.js in server
//     } catch (error) {
//         console.log("Error while calling authentication/Signup Api", error.message);
//     }
// }

// export const authenticateSignup = async (data) => {
//     try {
//         return await axios.post(`${URL}/signup`, data);//post request will send data to route.js in server
//     } catch (error) {
//         // console.log("Error while calling authentication/Signup Api", error.message);
//     }
// }

// export const authenticateLogin = async (data) => {
//     try {
//         return await axios.post(`${URL}/login`, data);//post request will send data to route.js in server
//     } catch (error) {
//         // console.log("Error while calling Login Api", error.message);
//         return error.response;
//     }
// }