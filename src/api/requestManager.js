import api from "./api";

export function postRequest(proxy, body = {}, config = {}, headers = {}) {
  return api.post(proxy, body, {
    ...config,
    headers: {
      ...headers,
      ...(config && config.headers),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
