import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(ingredientType, numberOf, ) {
  return { ingredientType, numberOf };
}




export default function FridgeDashboardTable({summaryDataObject}) {
const { oils, fish, fruit, nuts, spices, meat, poultry, vegetables, dairy, other} = summaryDataObject
const rows = [
    createData('Fats and Oils', oils.length),
    createData('Fish', fish.length, ),
    createData('Fruit', fruit.length),
    createData('Grains, Nuts and Baking', nuts.length),
    createData('Herbs and Spices', spices.length),
    createData('Meat', meat.length),
    createData('Dairy', poultry.length),
    createData('Poultry', vegetables.length),
    createData('Vegetables', dairy.length),
    createData('Other', other.length)
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ingredient Type</TableCell>
            <TableCell align="center">Number in Fridge</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ingredientType}
              </TableCell>
              <TableCell align="center">{row.numberOf}</TableCell>
              {/* <TableCell align="right">{row.numberOf}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}