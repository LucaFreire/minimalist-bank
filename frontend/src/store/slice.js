// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useCallback, useState } from "react";

// const handleGetUserData = useCallback(async () => {

//     const [name, setName] = useState();
//     const [email, setEmail] = useState();
//     const [balance, setBalance] = useState();

//     const userID = sessionStorage.getItem('token');

//     try {

//     }
//     catch(errorF) {

//     }

//     try {
//         const res = (await axios.get("http://localhost:8080/user/" + userID)).data;
//         setName(res.name);
//         setEmail(res.email);
//         setBalance(res.balance);
//     } catch (error) {

//     }
//     return {
//         name: name, 
//         email: email,
//         balance: balance
//     }
// })


// export const userSlice = createSlice({
//     name: 'user',
//     reducers: {
//         handleGetUserData
//     }
// })