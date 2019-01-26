import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1cdaeb5e56c04fe4e8b77dd67ec88d9d2a5536a777e457a722653d755dbf53d0'
    }
});