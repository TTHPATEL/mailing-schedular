"use client";
import Link from "next/link";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
export default function UserlistUI({ Userlistdata }) {
  return (
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
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {Userlistdata.map((u) => (
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
              <td className="px-7 py-4 ">
                <Link href={`/scheduled-mail-edit/${u.id}`}>
                  <BiSolidEdit size={20} />
                </Link>
              </td>
              <td className="px-9 py-4 ">
                <MdDelete size={20} onClick={() => Delete(u.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
