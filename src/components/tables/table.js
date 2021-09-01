import React from "react";
import { Table, Button } from "evergreen-ui";
import { useHistory } from "react-router-dom"
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../state";
import { useDispatch } from "react-redux";

const ProductTable = ({ data, cols }) => {

  const history = useHistory()
  const tableData = data.products;
  const dispatch = useDispatch();
  const { remove } = bindActionCreators(ActionCreators, dispatch);
  const sortLatest = (arr) => {
    return arr.sort((a, b) => {
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
            <Table.TextHeaderCell key={index}>
              {colItem.name}
            </Table.TextHeaderCell>
          );
        })}
      </Table.Head>
      <Table >
        {Object.keys(tableData).map((key, value) => (
          <Table.Row
            key={key}
          >
            <Table.TextCell>{tableData[key].name}</Table.TextCell>

            <Table.TextCell>{data.prices[sortLatest(tableData[key].prices)[0]].price}</Table.TextCell>
            <Table.TextCell>
              <Button
                float="right"
                marginBottom={8}
                marginTop={8}
                marginRight={8}
                appearance="minimal"
                onClick={() => {
                  history.push(`/history/${key}`);
                }}
              >
                view price history
              </Button>

            </Table.TextCell>
            <Table.TextCell>
              <Button
                float="right"
                marginBottom={8}
                marginTop={8}
                marginRight={8}
                appearance="minimal"
                onClick={() => {
                  let result = window.confirm("Do Yo want to delete product ?");
                  if (result) {
                    //Logic to delete the item
                    remove(key);
                  }
                  
                }}
              >
                delete
              </Button>
              <Button
                float="right"
                marginBottom={8}
                marginTop={8}
                marginRight={8}
                appearance="minimal"
                onClick={() => {
                  history.push(`/edit/${key}`);
                }}
              >
                edit
              </Button>

            </Table.TextCell>
          </Table.Row>
        ))}
      </Table>
    </Table>
  );
};

export default ProductTable;
