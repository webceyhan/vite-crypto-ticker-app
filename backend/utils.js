export const makeUrl = (urlPath, params = {}) => {
    // create new url
    const url = new URL(urlPath);

    // add search params
    url.search = new URLSearchParams(params);
    return url;
};