import axios from "axios";

export const  a = axios.create({
        timeout: 3000,
        headers: {'Authorization': "bearer " + localStorage.getItem("token") || null}
    });


