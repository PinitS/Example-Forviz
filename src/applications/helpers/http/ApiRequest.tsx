export async function ApiRequest(action: any) {
  const { method, url } = action;
  return fetch(url, {
    method,
  })
    .then((response) => response.json())
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log("report error :>> ", error);
      return error;
    });
}
