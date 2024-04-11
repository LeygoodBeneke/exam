import axios from 'axios'

const USERS_REST_API_URL = 'http://api-service:8080';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default UserService;