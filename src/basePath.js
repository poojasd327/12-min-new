const BASE_PATH = "";

export function withBasePath(path) {
  if (!BASE_PATH) return path;
  return `${BASE_PATH}${path}`;
}

export default BASE_PATH;
