export const parseTokenFromCookies = (cookies: string) => {
  const match = cookies.match(/authToken=([^;]+)/);
  return match ? match[1] : null;
};
