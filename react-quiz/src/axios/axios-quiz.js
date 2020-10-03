import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-57b8e.firebaseio.com/'
})