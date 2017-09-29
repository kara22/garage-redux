// TODO: add and export your own actions

export function fetchCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url).then(r => r.json());

    return {
      type: 'FETCH_CARS',
      payload: promise
    };
}

export function createCar(garage, body, callback) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: 'CREATE_CAR',
    payload: request
  };
}
