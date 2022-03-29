
import { useEffect, useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';



const Ingredients = ({recipe, fridgeStock}) => {
    
    const columns = [
        {field:'id', headerName:'ID'},
        {field:'item_name', headerName:"Name"},
        {field:'quantity', headerName:"Quantity"},
        {field:'isInFridge', headerName:'In Fridge?'}
    ]

    return (
        <div style={{ height: 250, width: '100%' }}>
          <DataGrid 
            columns={columns}
            rows={fridgeStock}
          />
        </div>
      );
    
}
export default Ingredients