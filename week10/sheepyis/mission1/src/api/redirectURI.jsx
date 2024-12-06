export const getRedirectURI = () => {
    const hostname = window.location.hostname;

    if (hostname === 'localhost') {
        return 'http://localhost:5173/login/auth';
    } else if (hostname === 'sheepyis-week10-mission1.netlify.app') {
        return 'https://sheepyis-week10-mission1.netlify.app/login/auth';
    } else if (hostname === 'main--sheepyis-week10-mission1.netlify.app') {
        return 'https://main--sheepyis-week10-mission1.netlify.app/login/auth';
    } else {
        throw new Error('Error: ', error);
    }
};