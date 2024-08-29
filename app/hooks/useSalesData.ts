import { useState, useEffect } from 'react';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function GenerateRandomSales() {
  return months.map(() => Math.floor(Math.random() * 10000) + 1000);
}

export function useSalesData(
  year: number,
  month: number,
  day: number,
  minSales: number,
  maxSales: number
) {
  const [salesData, setSalesData] = useState({
    labels: months,
    datasets: [
      {
        label: `Ventas ${year}`,
        data: GenerateRandomSales(),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  });

  useEffect(() => {
    updateSales();
  }, [year, month, day, minSales, maxSales]);

  function updateSales() {
    const newData = GenerateRandomSales().map((sale) =>
      sale >= minSales && sale <= maxSales ? sale : 0
    );

    setSalesData({
      labels: months,
      datasets: [
        {
          label: `Ventas ${year}`,
          data: newData,
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    });
  }

  return { salesData, updateSales };
}
