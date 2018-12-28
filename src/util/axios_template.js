import axios from "axios";

export const  a = axios.create({
        timeout: 3000,
        headers: {'Authorization': "Bearer " + localStorage.getItem("token") || null}
    });


