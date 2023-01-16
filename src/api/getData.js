export const getByName = async (name) => {
  return await fetch(`http://localhost:8080/citizens/getname?name=${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => data);
};

export const getNameContains = async (str) => {
  return await fetch(
    `http://localhost:8080/citizens/getnamecontains?str=${str}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => data);
};

export const getById = async (id) => {
  return await fetch(`http://localhost:8080/citizens/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => data);
};

export const getCountChildren = async (id) => {
  return await fetch(`http://localhost:8080/citizens/countchildren/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => data);
};

export const getIsCitizen = async (c) => {
  return await fetch(
    `http://localhost:8080/citizens/iscitizen?isCitizen=${c}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => data);
};

export const getHasDrivingLicense = async (l) => {
  return await fetch(
    `http://localhost:8080/citizens/hasdrivinglicense?hasDrivingLicense=${l}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => data);
};
