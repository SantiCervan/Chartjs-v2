'use client';
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSalesData } from '../hooks/useSalesData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Ventas por Mes',
    },
  },
};

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export function SalesChart() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [year, setYear] = useState(currentYear.toString());
  const [month, setMonth] = useState(currentMonth);
  const [day, setDay] = useState(new Date().getDate().toString());
  const [minSales, setMinSales] = useState('0');
  const [maxSales, setMaxSales] = useState('10000');

  const { salesData, updateSales } = useSalesData(
    parseInt(year) || currentYear,
    month,
    parseInt(day) || 1,
    parseInt(minSales) || 0,
    parseInt(maxSales) || 10000
  );

  function clearFilters() {
    setYear(currentYear.toString());
    setMonth(currentMonth);
    setDay(new Date().getDate().toString());
    setMinSales('0');
    setMaxSales('10000');
  }

  return (
    <div className="flex flex-col p-4">
      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Año</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            onBlur={(e) => {
              if (!e.target.value) setYear(currentYear.toString());
            }}
            className="border p-2 rounded"
            max={currentYear}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Mes</label>

          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="border p-2 rounded"
          >
            {months
              .slice(0, parseInt(year) === currentYear ? currentMonth + 1 : 12)
              .map((m, index) => (
                <option key={m} value={index}>
                  {m}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Día</label>
          <input
            type="number"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            onBlur={(e) => {
              if (!e.target.value) setDay('1');
            }}
            min={1}
            max={
              parseInt(year) === currentYear && month === currentMonth
                ? new Date().getDate()
                : 31
            }
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Ventas Mínimas
          </label>
          <input
            type="number"
            value={minSales}
            onChange={(e) => setMinSales(e.target.value)}
            onBlur={(e) => {
              if (!e.target.value) setMinSales('0');
            }}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Ventas Máximas
          </label>
          <input
            type="number"
            value={maxSales}
            onChange={(e) => setMaxSales(e.target.value)}
            onBlur={(e) => {
              if (!e.target.value) setMaxSales('10000');
            }}
            className="border p-2 rounded"
          />
        </div>
      </div>
      <div className="mb-4">
        <button
          onClick={clearFilters}
          className="bg-gray-500 p-2 text-white shadow-lg rounded-md hover:bg-gray-600 transition-all"
        >
          Limpiar Filtros
        </button>
      </div>
      <Bar options={chartOptions} data={salesData} />
      <button
        onClick={updateSales}
        className="bg-blue-500 p-2 mt-4 self-end text-white shadow-lg rounded-md hover:bg-blue-600 transition-all"
      >
        Generar Nuevas Ventas
      </button>
    </div>
  );
}
