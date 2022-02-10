export const makeUrl = (urlPath, params = {}) => {
    // create new url
    const url = new URL(urlPath);

    // add search params
    url.search = new URLSearchParams(params);
    return url;
};

// format currency with commas
export const formatCurrency = (value) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    }).format(value);
