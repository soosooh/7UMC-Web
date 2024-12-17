const getRedirectURI = () => {
  const currentURL = window.location.origin; // 현재 주소의 origin 부분 가져옴
  let redirectURI = "";

  if (currentURL.includes("http://localhost:5173")) {
    // 로컬 개발 환경
    redirectURI = "http://localhost:5173/login/auth";
  } else if (
    currentURL.includes("https://soosooh-week10-mission1.netlify.app")
  ) {
    // 첫 번째 Netlify 배포 주소
    redirectURI = "https://soosooh-week10-mission1.netlify.app/login/auth";
  } else if (
    currentURL.includes("https://main--soosooh-week10-mission1.netlify.app")
  ) {
    // 두 번째 Netlify 배포 주소
    redirectURI =
      "https://main--soosooh-week10-mission1.netlify.app/login/auth";
  } else {
    console.error("Unknown environment, no redirectURI set.");
  }

  return redirectURI;
};

export default getRedirectURI;
