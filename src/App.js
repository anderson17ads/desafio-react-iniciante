import React from 'react';
import './App.css';
import './styles.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption> <h1>SmartPhones</h1></caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('modelo')}
              className={getClassNamesFor('modelo')}
            >
              Modelo
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('marca')}
              className={getClassNamesFor('marca')}
            >
              Marca
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('preço')}
              className={getClassNamesFor('preço')}
            >
              Preço
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('situação')}
              className={getClassNamesFor('situação')}
            >
              Situação
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('descrição')}
              className={getClassNamesFor('descrição')}
            >
              Descrição
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.modelo}</td>
            <td>{item.marca}</td>
            <td>R$ {item.preço}</td>
            <td>{item.estoque}</td>
            <td>{item.descrição}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <ProductTable
        products={[
          { id: 1, modelo: 'A71', marca: 'Samsung' , preço: 1.900, situação: 'ok', descrição:'📋' ,},
          { id: 1, modelo: 'S21', marca: 'Samsung' , preço: 5.500, situação: 'ok', descrição:'📋' ,},
          { id: 1, modelo: 'G30', marca: 'Motorola' , preço: 1.300, situação: 'ok', descrição:'📋' ,},
          { id: 1, modelo: 'E7', marca: 'Motorola' , preço: .900, situação:  'ok', descrição:'📋' ,},
          { id: 1, modelo: 'K10', marca: 'LG' , preço: 1.150, situação: 'ok', descrição:'📋' ,},
          { id: 1, modelo: 'Iphone XS', marca: 'Apple' , preço: 3.900, situação: 'ok', descrição:'📋' ,},
          { id: 1, modelo: 'Iphone 13', marca: 'Apple' , preço: 12.300, situação: 'ok', descrição:'📋' ,},
        ]}
      />
    </div>
  );
}
