import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://api.github.com/users',
	params: {
		access_token: ''
	}
});

export default instance;
