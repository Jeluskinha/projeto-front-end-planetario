import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://planeteryproject.herokuapp.com/',
    timeout: 30000
})

export default Api