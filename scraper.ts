console.log("Hello World")


const cheerio = require('cheerio');

(async() => {
    const url = 'https://www.example.org';
    const response = await fetch(url);

    const $ = cheerio.load(await response.text());

    const title = $('h1').text();
    const text = $('p').text();
    const link = $('a').attr('href');

    console.log(title);
    console.log(text);
    console.log(link);
})();