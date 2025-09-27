import React from 'react';
import { exportToCSV, exportToExcel, exportToPDF } from '../utils/export';
import type { Comp } from '../types';

interface Props {
  data?: Comp[];
}

const ExportButtons: React.FC<Props> = ({ data = [] }) => {
  return (
    <div className="flex gap-2">
      <button
        className="px-3 py-2 bg-gray-200 rounded"
        onClick={() => exportToCSV(data, 'rental_comps.csv')}
      >
        Export CSV
      </button>
      <button
        className="px-3 py-2 bg-gray-200 rounded"
        onClick={() => exportToExcel(data, 'rental_comps.xlsx')}
      >
        Export Excel
      </button>
      <button
        className="px-3 py-2 bg-gray-200 rounded"
        onClick={() => exportToPDF(data, 'rental_comps.pdf')}
      >
        Export PDF
      </button>
    </div>
  );
};

export default ExportButtons;
