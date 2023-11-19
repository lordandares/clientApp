/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS

const ClientList = () => {
  const [rowData, setRowData] = useState() // Set rowData to Array of Objects, one Object per Row
  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: 'make', filter: true },
    { field: 'model', filter: true },
    { field: 'price' },
  ])

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
    }),
    [rowData],
  )

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event: unknown) => {
    console.log('cellClicked', event)
  }, [])

  // Example load data from server
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData))
  }, [])

  return (
    <div>
      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
        <AgGridReact
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
      </div>
    </div>
  )
}

export default ClientList
