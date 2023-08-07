// AboutPage.js
import React from 'react';

function About(){
  // Replace this data with the actual information about TradeAdviser
  const tradeAdviserData = {
    name: 'TradeAdviser',
    description: 'TradeAdviser is a platform that provides trading advice and insights to traders and users.\nIt also provides other important services such as financial reports, newsletters, and more.',
    location: 'New York, USA',
    website: 'https://www.tradeadviser.org',
    email: 'info@tradeadviser.com',
  };

  return (
    <div>
      <h2>About {tradeAdviserData.name}</h2>
      <p>{tradeAdviserData.description}</p>
      <p>Location: {tradeAdviserData.location}</p>
      <p>Website: <a href={tradeAdviserData.website}>{tradeAdviserData.website}</a></p>
      <p>Email: {tradeAdviserData.email}</p>
    </div>
  );
};

export default About;



