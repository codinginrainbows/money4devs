import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>App Development</td>
            <td className="deposit">R$17.000</td>
            <td>Software</td>
            <td>05/11/2049</td>
          </tr>
          <tr>
            <td>Tesla Model 3</td>
            <td className="withdraw">R$417.500</td>
            <td>Automobilism</td>
            <td>12/05/2049</td>
          </tr>
          <tr>
            <td>Macbook M1</td>
            <td className="withdraw">R$8.250</td>
            <td>Hardware</td>
            <td>31/12/2049</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
