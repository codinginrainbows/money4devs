import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'App Hamburgueria',
          type: 'deposit',
          category: 'Software',
          amount: 6500,
          createdAt: new Date('2021-12-06 10:00:00'),

        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1750,
          createdAt: new Date('2021-12-07 11:00:00'),

        },
        {
          id: 3,
          title: 'Rancho',
          type: 'withdraw',
          category: 'Alimentação',
          amount: 426,
          createdAt: new Date('2021-12-08 11:00:00'),

        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
