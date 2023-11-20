/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect, useMemo, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { useQuery } from '@apollo/client'
import { queryClientList } from '../../Graphql/Queries'
import { IClientModel } from '../../interfaces/IClientData'
import { ColDef } from 'ag-grid-community'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const ClientList = () => {
  const gridStyle = useMemo(() => ({ height: '500px', width: '100%' }), [])
  const { loading, error, data } = useQuery(queryClientList)
  // Each Column Definition results in one Column.

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      resizable: true,
      minWidth: 100,
      flex: 1,
      floatingFilter: true,
    }),
    [data],
  )

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: 'id', hide: true },
    { field: 'lastName', filter: true, width: 200, maxWidth: 350, sort: 'asc' },
    { field: 'firstName', filter: true, width: 200 },
    { field: 'email', filter: true, width: 400, maxWidth: 450 },
  ])

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event: unknown) => {
    console.log('cellClicked', event)
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-alpine" style={gridStyle}>
        <AgGridReact<IClientModel>
          rowData={data.queryClientList} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
          suppressMenuHide={true}
          pagination={true}
          paginationAutoPageSize={true}
        />
      </div>
    </div>
  )
}

export default ClientList
