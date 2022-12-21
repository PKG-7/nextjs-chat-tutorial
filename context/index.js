import { createContext, useState, createContext } from 'react';

export const Context = createContext();

export const ContextProvider = () => {
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');

  const value = {
    username,
    setUsername,
    secret,
    setSecret,
  };

  return <ContextProvider value={value}>{props.children}</ContextProvider>;
};
