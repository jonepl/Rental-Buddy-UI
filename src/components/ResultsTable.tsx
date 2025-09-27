import React from 'react';
import { useTable, useSortBy, Column } from 'react-table';

export type CompRow = {
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  square_footage: number;
  distance_miles?: number;
};

const dummyData: CompRow[] = [
  { address: '123 Main St', price: 2600, bedrooms: 2, bathrooms: 2, square_footage: 1182 },
  { address: '456 Oak Ave', price: 2450, bedrooms: 2, bathrooms: 2, square_footage: 1025 },
];

const ResultsTable: React.FC<{ data?: CompRow[] }> = ({ data = dummyData }) => {
  const columns = React.useMemo<Column<CompRow>[]>(
    () => [
      { Header: 'Address', accessor: 'address' },
      { Header: 'Price', accessor: 'price' },
      { Header: 'Beds', accessor: 'bedrooms' },
      { Header: 'Baths', accessor: 'bathrooms' },
      { Header: 'SqFt', accessor: 'square_footage' },
    ],
    []
  );

  const tableInstance = useTable<CompRow>({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="w-full border rounded bg-white">
      <table {...getTableProps()} className="w-full text-sm">
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // @ts-expect-error react-table typings for sort props on v7
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-3 py-2 text-left">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="odd:bg-white even:bg-gray-50">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-3 py-2 border-t">{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
