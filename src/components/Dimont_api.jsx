

import React, { useEffect, useState } from "react";
// import './dimont_api.css';

export default function DiamondDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from OpenFacet
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://data.openfacet.net/index.json");
        if (!res.ok) throw new Error("Network response was not ok");
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();

    // Optional: refresh every 60 seconds
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center p-4">Loading diamond prices…</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-2 text-center">💎 OpenFacet Diamond Index</h1>
      <p className="text-gray-500 text-center mb-6">
        DCX Index: <span className="font-semibold">${data.dcx.toFixed(2)}</span>  
        <span className={data.trend >= 0 ? "text-green-600 ml-2" : "text-red-600 ml-2"}>
          ({data.trend >= 0 ? "+" : ""}{data.trend.toFixed(2)}%)
        </span>
      </p>

      <table className="w-full text-sm border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Carat</th>
            <th className="p-2 border">Color</th>
            <th className="p-2 border">Clarity</th>
            <th className="p-2 border">Cut</th>
            <th className="p-2 border text-right">Per Carat ($)</th>
            <th className="p-2 border text-right">Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {data.specs.slice(0, 10).map((d, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="p-2 border">{d.carat}</td>
              <td className="p-2 border">{d.color}</td>
              <td className="p-2 border">{d.clarity}</td>
              <td className="p-2 border">{d.cut}</td>
              <td className="p-2 border text-right">{d.per_carat.toFixed(2)}</td>
              <td className="p-2 border text-right">{d.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-xs text-gray-400 mt-4 text-center">
        Last updated: {new Date(data.ts).toLocaleString()}
      </p>
    </div>
  );
}
