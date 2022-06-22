import axios from 'axios';

export class UserService {
  path = 'http://localhost/';
  port = 3000;

  async cadastrarUsuario(data) {
    console.log(data);
    return axios
      .post(`${this.path}:${this.port}/usuario`, data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
}
