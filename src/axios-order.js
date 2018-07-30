import axios from 'axios'

const instance = axios.create({
    baseURL:'https://my-burger-f45b7.firebaseio.com/'
})

export default instance