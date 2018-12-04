export function handleError(resp) {
  if(!resp.ok) {
    throw Err(resp.statusText);
  }
  return resp;
} 