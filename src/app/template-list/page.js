"use client";
import { useEffect, useState } from "react";
export default function TemplateList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/template-list")
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <>
      <div className="relative overflow-x-auto max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <caption className="text-lg font-semibold text-gray-900 dark:text-white py-4 bg-gray-100 dark:bg-gray-800 rounded-t-lg">
            Template ( Mailer ) List
          </caption>

          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="w-1/3 px-4 py-3">
                Template ID
              </th>
              <th scope="col" className="w-2/3 px-4 py-3">
                Template Name
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((temp) => (
              <tr
                key={temp.template_id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                  {temp.template_id}
                </td>
                <td className="px-4 py-3">{temp.template_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
