
import { useEffect, useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';



const Ingredients = ({recipe, fridgeData}) => {
    
    const columns = [
        {field:'id', headerName:'ID'},
        {field:'item_name', headerName:"Name"},
        {field:'quantity', headerName:"Quantity", type: 'number', editable: true},
        {field:'isInFridge', headerName:'In Fridge?', editable: true}
    ]

    return (
        <div style={{ height: 250, width: '100%' }}>
          <DataGrid 
            columns={columns}
            rows={fridgeData}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
      );
    
}
export default Ingredients