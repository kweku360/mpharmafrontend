import React from "react";
import { Table } from "evergreen-ui";

const PriceTable = ({ data,id, cols }) => {

  const tableData = data.products;

  const sortLatest = (arr) =>{
    return arr.sort((a,b)=>{
      const date1 = new Date(data.prices[a].date);
      const date2 = new Date(data.prices[b].date);
      if (date1 < date2) {
        return 1;
      }
      if (date1 > date2) {
        return -1;
      }
      return 0;
    })
  }

  return (
    <Table width={800}>
      <Table.Head>
        {cols[0].map((colItem, index) => {
          return (
            <Table.TextHeaderCell  key={index}>
              {colItem.name}
            </Table.TextHeaderCell>
          );
        })}
      </Table.Head>
      <Table>
        {sortLatest(tableData[id].prices).map((key,value) => (
          <Table.Row
            key={key}
          >
            <Table.TextCell>{data.prices[key].price}</Table.TextCell>
        
            <Table.TextCell>{data.prices[key].date}</Table.TextCell>
          </Table.Row>
        ))}
      </Table>
    </Table>
  );
};

export default PriceTable;
