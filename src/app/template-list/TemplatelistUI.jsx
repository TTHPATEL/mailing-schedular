"use client";
import Link from "next/link";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
export default function TemplatelistUI({ TemplatelistData }) {
  function Delete(IDofschedule) {
    fetch("http://localhost:3012/delete/scheduleMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scheduleMailID: IDofschedule }),
    })
      .then((data) => data.json())
      .then((data) => console.log(data));

    router.push("scheduled-mail");
  }
  return (
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
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {TemplatelistData.map((temp) => (
            <tr
              key={temp.template_id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                {temp.template_id}
              </td>
              <td className="px-4 py-3">{temp.template_name}</td>
              <td className="px-7 py-4 ">
                <Link href={`/scheduled-mail-edit/${temp.template_id}`}>
                  <BiSolidEdit size={20} />
                </Link>
              </td>
              <td className="px-9 py-4 ">
                <MdDelete size={20} onClick={() => Delete(temp.template_id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
