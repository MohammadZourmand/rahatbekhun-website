

import axios from "axios";

const apiHelper = () => {

    const instance = axios.create({
        baseURL : "http://localhost:5000/",
    })

    instance.interceptors.request.use(
        (config) => {
            config.withCredentials = true;
            return config
        },
        err => { throw err }
    )

    instance.interceptors.response.use(
        (config) => {
            return config
        },
        err => {
            const res = err?.response

            // if(res.status === 422) {
            //     throw new ValidationError(res.data.data);
            // }

            // if(res.status === 401) {
            //     WrongToast({message : res.data.data[0].message})
            //     throw res.data
            // }

            // if(res.status === 404) {
            //     WrongToast({ message : 'چنین درخواستی قابل پاسخ نیست !'})
            //     throw 'درخواست خود را صحیح ارسال نکرده اید !'
            // }

            throw err
        }
    )

    return instance;
}

export default apiHelper;