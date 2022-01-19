import React from 'react';
import './App.css';
import './styles.css';

const Products = (props) => {
  const items = [
    { id: 1, model: 'A71', brand: 'Samsung', price: 1.900, situation: 'ok', description: '' },
    { id: 2, model: 'S21', brand: 'Samsung', price: 5.500, situation: 'ok', description: '' },
    { id: 3, model: 'G30', brand: 'Motorola', price: 1.300, situation: 'ok', description: '' },
    { id: 4, model: 'E7', brand: 'Motorola', price: .900, situation: 'ok', description: '' },
    { id: 5, model: 'K10', brand: 'LG', price: 1.150, situation: 'ok', description: '' },
    { id: 6, model: 'Iphone XS', brand: 'Apple', price: 3.900, situation: 'ok', description: '' },
    { id: 7, model: 'Iphone 13', brand: 'Apple', price: 12.300, situation: 'ok', description: '' },
  ]; 
  
  return (
    <table>
      <caption> <h1>SmartPhones</h1></caption>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Preço</th>
          <th>Situação</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.model}</td>
            <td>{item.brand}</td>
            <td>{item.price}</td>
            <td>{item.situation}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function App() {
  return (
    <div className="App">
      <Products />
    </div>
  );
}
