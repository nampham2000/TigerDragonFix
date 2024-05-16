export function getToken() {
  const token = localStorage.getItem("key");
  return token;
}
