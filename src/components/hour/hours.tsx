import{ useState, useEffect } from "react";
import { useTable } from 'react-table';
import styled from 'styled-components';


const cols  = [      {
  Header: 'Timeføring',
  columns: [
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Customer',
      accessor: 'customer',
    },
    {
      Header: 'Project',
      accessor: 'project',
    },
    {
      Header: 'Hours',
      accessor: 'hours',
    },
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Comment',
      accessor: 'comment',
    },
  ],
},]

const Hours = () => {
    const [hours, setHours] = useState([]);
    useEffect(() => {
        fetchHoursFromLS(setHours);
      }, []);
    return ( <
      div>
       <Styles>
        <Table columns={cols} data={hours} />
       </Styles>

      </div> 
      )   
};


export default Hours;


const fetchHoursFromLS: any = (setHours: Function) => {
    const hours = JSON.parse(localStorage.hours);
    setHours(hours);
}



// Source: https://react-table.tanstack.com/docs/examples/basic


const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({columns, data}: any) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}