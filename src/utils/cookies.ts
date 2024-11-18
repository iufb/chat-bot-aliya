export const getCookie = (key: string) => {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [cookieName, cookieValue] = cookie.split("=");

    if (cookieName === key) {
      return decodeURIComponent(cookieValue); // Return the decoded value
    }
  }

  return null; // If the cookie is not found
};

export function setCookie(name: string, value: string, days = 7, path = "/") {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration date

  const cookieString = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=${path}`;

  document.cookie = cookieString;
}
