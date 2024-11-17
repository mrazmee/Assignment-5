import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [ exchange, setExchange] = useState([])

  useEffect(()=>{
    getExchange();
  }, [])

  const getExchange = async () => {
    const response = await axios.get('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=aac091ea6b94457ca042369df40b88c8&symbols=CAD,EUR,IDR,JPY,CHF,GBP');
    setExchange(response.data.rates)
  }

  return (
    <div className="container-sm text-center">
      <div className="table-responsive-sm">
        <table className="table table-borderless text-light">
        <thead>
            <tr>
              <th scope="col">Currency</th>
              <th scope="col">We Buy</th>
              <th scope="col">Exchange Rate</th>
              <th scope="col">We Sell</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(exchange).length > 0 ? (
              // Hanya render baris jika exchange memiliki data
              <>
                <tr>
                  <td scope="row">CAD</td>
                  <td>{exchange.CAD * 1.05}</td>
                  <td>{exchange.CAD}</td>
                  <td>{exchange.CAD * 0.95}</td>
                </tr>
                <tr>
                  <td scope="row">EUR</td>
                  <td>{exchange.EUR * 1.05}</td>
                  <td>{exchange.EUR}</td>
                  <td>{exchange.EUR * 0.95}</td>
                </tr>
                <tr>
                  <td scope="row">IDR</td>
                  <td>{exchange.IDR * 1.05}</td>
                  <td>{exchange.IDR}</td>
                  <td>{exchange.IDR * 0.95}</td>
                </tr>
                <tr>
                  <td scope="row">JPY</td>
                  <td>{exchange.JPY * 1.05}</td>
                  <td>{exchange.JPY}</td>
                  <td>{exchange.JPY * 0.95}</td>
                </tr>
                <tr>
                  <td scope="row">CHF</td>
                  <td>{exchange.CHF * 1.05}</td>
                  <td>{exchange.CHF}</td>
                  <td>{exchange.CHF * 0.95}</td>
                </tr>
                <tr>
                  <td scope="row">GBP</td>
                  <td>{exchange.GBP * 1.05}</td>
                  <td>{exchange.GBP}</td>
                  <td>{exchange.GBP * 0.95}</td>
                </tr>
              </>
            ) : (
              // Jika exchange masih kosong, tampilkan loading atau pesan
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="text-light">Rates are based from 1 USD.<br />This application uses API from <a href="https://currencyfreaks.com">https://currencyfreaks.com</a>.</p>
    </div>
  );
}

export default App;
