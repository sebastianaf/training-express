import boom from "@hapi/boom";

class LoginService {
  constructor() {}

  someAction(data) {
    const { valueA, valueB } = data;
    const res = parseInt(valueA) + parseInt(valueB);

    if (res > 100) {
      throw boom.badData();
    }
    return res;
  }
}

export default LoginService;
