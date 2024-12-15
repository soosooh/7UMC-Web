const getRedirectURI = () => {
    const currentHost = window.location.origin; // 현재 브라우저 호스트

    if (currentHost === "https://chy031202-week10.netlify.app") {
        return "https://chy031202-week10.netlify.app/login/auth";
    } else if (currentHost === "https://main--chy031202-week10.netlify.app") {
        return "https://main--chy031202-week10.netlify.app/login/auth";
    } else if (currentHost === "http://localhost:5173") {
        return "http://localhost:5173/login/auth";
        //return window.location.origin + "/login/auth";
    } else {
        console.error("Unknown host: Redirect URI not found.");
        return ""; // 예외 처리
    }
    // else {
    //     return "https://example.com/default"; // 기본 리다이렉트 URI
    // }
};

export default getRedirectURI;