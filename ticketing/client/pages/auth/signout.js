import { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: 'https://posts.com/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => {
      Router.push('/');
    },
  });

  useEffect(() => {
    doRequest();
  }, []);

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      await doRequest();
    } catch (error) {}
  };

  return (
    <div>
      <h1>We are signing you out!</h1>
      {errors}
    </div>
  );
};
