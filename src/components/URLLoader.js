import data from './data.json';

/**
 * Fetching data from viafree
 * Having troble with proxy not working as it should 
 * creating a stub to use instead. (to maximize the use of my time)
 * @param {*} url 
 */

let callback = '';

const URLLoader = (url, callback) => {
    let seriesRaw = data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'];
    let series = seriesRaw.map(serieJ => cleanSeries(serieJ));

    let list = {
        title: data.title,
        series: {
            all: series,
            title: data._embedded['viaplay:blocks'][0].title
        }
    }

    returnList(callback, list);
}

const returnList = (callback, list) => {
    callback(list);
}

/**
 * Creating a container for each serie
 * @param {*} serieJ 
 */
const cleanSeries = (serieJ) => {
    let serie = {
        img169: cleanImgURL(serieJ.content.images.coverart169.template),
        img23: cleanImgURL(serieJ.content.images.coverart23.template),
        title: serieJ.content.series.title,
        synopsis: serieJ.content.series.synopsis
    };

    return serie;
}

/**
 * The url has a URITemplate that we can use to get different sizes
 * I'm not using this since it doesn't work... not even in production!
 * simply removing curlybrackets to get a valid url
 * @param {*} img 
 */
const cleanImgURL = img => {
    img = img.replace('{', '')
    .replace('}', '');

    return img;
}

export default URLLoader;