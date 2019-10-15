import React from 'react';
import { withRouter } from 'react-router-dom';

const ClientCard = ({ client, history }) => {
  console.log('The client', client);

  const handleClick = () => {
    history.push(`/client/${client.id}`);
  };

  return (
    <div onClick={() => handleClick()}>
      <p>{client.fields.Name}</p>
    </div>
  );
};

export default withRouter(ClientCard);