export function handleError(resp) {
  if(!resp.ok) {
    console.log(resp);
    throw Error(resp);
  }
  return resp;
} 