import Papa from 'papaparse';
import { utils as XLSXUtils, writeFile as xlsxWriteFile, WorkBook } from 'xlsx';
import jsPDF from 'jspdf';
import type { Comp } from '../types';

export function exportToCSV(data: Comp[], filename: string) {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function exportToExcel(data: Comp[], filename: string) {
  const worksheet = XLSXUtils.json_to_sheet(data);
  const workbook: WorkBook = XLSXUtils.book_new();
  XLSXUtils.book_append_sheet(workbook, worksheet, 'Comps');
  xlsxWriteFile(workbook, filename);
}

export function exportToPDF(data: Comp[], filename: string) {
  const doc = new jsPDF();
  doc.text('Rental Comps', 10, 10);
  const rows = data.slice(0, 25).map((c) => [c.address, `$${c.price}`, `${c.bedrooms}`, `${c.bathrooms}`, `${c.square_footage}`]);
  // Simple text listing to avoid extra deps for tables
  rows.forEach((row, idx) => {
    doc.text(row.join(' | '), 10, 20 + idx * 7);
  });
  doc.save(filename);
}
