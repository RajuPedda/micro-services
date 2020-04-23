const axios = require('axios');

(async () => {
  try {
    const { data: registerResult } = await axios.post('http://localhost:3000/auth/register', {
      username: 'raju24',
      password: 'raju',
      seller: true,
    });
    console.log(registerResult);

    const { data } = await axios.post('http://localhost:3000/auth/login', {
      username: 'raju24',
      password: 'raju',
      seller: true,
    });
    // console.log(data);

    const { token } = data;
    console.log(token);
    const { data: res2 } = await axios.get('http://localhost:3000/product/mine', {
      headers: { authorization: `Bearer ${token.access_token}` },
    });

    console.log(res2.message);
  } catch (err) {
    console.log(err.message);
  }
})();
