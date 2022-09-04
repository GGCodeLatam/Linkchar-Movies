const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5b49a363432f2c7c8313eea227c49945',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;