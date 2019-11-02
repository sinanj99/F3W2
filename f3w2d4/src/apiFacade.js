let URL = "http://localhost:3456/api";

//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  //OBSERVE This returns a promise, NOT the actual data, you must handle asynchronicity by the client
  function getPersons() {
    return fetch(URL).then(handleHttpErrors);
  }

  function addEditPerson(person) {
    const data = person;
    let options;
    if (person.id == "") {
      options = makeOptions("POST", data);
      return fetch(URL, options)
        .then(handleHttpErrors)
        .catch(err => console.log(err));
    } else {
      options = makeOptions("PUT", data);
      return fetch(URL + "/" + person.id, options)
        .then(handleHttpErrors)
        .catch(err => console.log(err));
    }
  }

  function deletePerson(id) {
    const options = makeOptions("DELETE");
    fetch(URL + "/" + id, options)
      .then(handleHttpErrors)
      .catch(err => console.log(err));
  }

  return {
    getPersons,
    addEditPerson,
    deletePerson
  };
}

export default apiFacade();
