"use client";
import { useEffect, useState } from "react";

export default function userList() {
  const [data, setData] = useState({
    userlist: [],
    categorylist: [],
    scheduleMail: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/userlist")
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
      <div className="relative overflow-x-auto max-w-5xl mx-auto mt-[25px] bg-white shadow-lg rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
          <caption className="text-lg font-semibold text-gray-900 dark:text-white py-4 bg-gray-100 dark:bg-gray-800 rounded-t-lg">
            User List
          </caption>

          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Category type
              </th>
            </tr>
          </thead>
          <tbody>
            {data.userlist.map((u) => (
              <tr
                key={u.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {u.id}
                </th>
                <td className="px-6 py-4">{u.name}</td>
                <td className="px-6 py-4">{u.email}</td>
                <td className="px-6 py-4">{u.IDofcategoryList}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
