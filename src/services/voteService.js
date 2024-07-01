import axios from 'axios';

const API_URL = 'http://localhost:5000/api/votes';

const castVote = (candidate, token) => {
    return axios.post(API_URL, { candidate }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

const getResults = () => {
    return axios.get(`${API_URL}/results`);
};

const voteService = { castVote, getResults };

export default voteService;
