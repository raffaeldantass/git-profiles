export function handleError(resp) {
  if(!resp.ok) {
    throw Error(resp);
  }
  return resp;
} 