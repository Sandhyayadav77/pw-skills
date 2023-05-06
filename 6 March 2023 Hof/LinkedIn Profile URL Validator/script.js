const regexExp = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

const LinkedInUrl = (url) => {
    if (regexExp.test(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
}

LinkedInUrl("https://www.linkedin.com/in/sandhya0006");
LinkedInUrl("https://www.linkedin.com/in/sandhya0006000000@@");