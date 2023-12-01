function fetchFunc(api) {
    console.log('api',api);
  return fetch(api).then((res) => res.json());
}
export { fetchFunc };
