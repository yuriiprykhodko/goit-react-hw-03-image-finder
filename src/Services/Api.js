import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '21893173-2e6903a6fb362f8aa14208207';

const findImage = (currentPage, searchQuery) =>
  axios
    .get(
      `?q=${searchQuery}&key=${API_KEY}&image_type=photo&orientation=horizontal&page=${currentPage}&per_page=12`,
    )
    .then(response => response.data.hits);

export default { findImage };
