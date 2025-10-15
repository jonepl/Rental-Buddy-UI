import React from 'react';
import { useTable, useSortBy, type Column, type HeaderGroup, type Row, type Cell } from 'react-table';
import type { Comp } from '../types';

const dummyData: Comp[] = [
  { id: '1', address: '123 Main St', price: 2600, bedrooms: 2, bathrooms: 2, square_footage: 1182, latitude: 0, longitude: 0 },
  { id: '2', address: '456 Oak Ave', price: 2450, bedrooms: 2, bathrooms: 2, square_footage: 1025, latitude: 0, longitude: 0 },
];

interface Props {
  data?: Comp[];
  selectedId?: string;
  onSelect?: (id?: string) => void;
  hoveredId?: string;
  onHover?: (id?: string) => void;
}

function ResultsTable({ data = dummyData, selectedId, onSelect, hoveredId, onHover }: Props) {
  const columns = React.useMemo<Column<Comp>[]>(
    () => [
      { Header: 'Address', accessor: 'address' },
      { Header: 'Price', accessor: 'price' },
      { Header: 'Beds', accessor: 'bedrooms' },
      { Header: 'Baths', accessor: 'bathrooms' },
      { Header: 'SqFt', accessor: 'square_footage' },
    ],
    []
  );

  const tableInstance = useTable<Comp>({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="w-full border rounded bg-white">
      <table {...getTableProps()} className="w-full text-sm">
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup: HeaderGroup<Comp>) => {
            const headerGroupProps = headerGroup.getHeaderGroupProps();
            // Extract key to pass explicitly
            const { key: headerGroupKey, ...headerGroupRest } = headerGroupProps as any;
            return (
              <tr key={headerGroupKey} {...headerGroupRest}>
                {headerGroup.headers.map((column: any) => {
                  const headerProps = column.getHeaderProps(column.getSortByToggleProps());
                  const { key: headerKey, ...headerRest } = headerProps as any;
                  return (
                    <th key={headerKey} {...headerRest} className="px-3 py-2 text-left">
                      {column.render('Header')}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: Row<Comp>) => {
            prepareRow(row);
            const id = (row.original.id ?? `${row.original.latitude}-${row.original.longitude}`);
            const rowProps = row.getRowProps();
            const { key: rowKey, ...rowRest } = rowProps as any;
            return (
              <tr
                key={rowKey}
                {...rowRest}
                onClick={() => onSelect?.(id)}
                onMouseEnter={() => onHover?.(id)}
                onMouseLeave={() => onHover?.(undefined)}
                className={`odd:bg-white even:bg-gray-50 cursor-pointer ${selectedId === id ? 'bg-blue-50' : hoveredId === id ? 'bg-gray-100' : ''}`}
              >
                {row.cells.map((cell: Cell<Comp>) => {
                  const cellProps = cell.getCellProps();
                  const { key: cellKey, ...cellRest } = cellProps as any;
                  return (
                    <td key={cellKey} {...cellRest} className="px-3 py-2 border-t">{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
