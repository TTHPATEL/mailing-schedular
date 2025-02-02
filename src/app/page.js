"use client";

import { useEffect, useState } from "react";

export default function Home() {
  let [templist, setTemplist] = useState([]);
  let [userlists, setUserlist] = useState({
    userlist: [],
    categorylist: [],
    scheduleMail: [],
  });

  useEffect(() => {
    fetch("/api/template-list")
      .then((data) => data.json())
      .then((data) => setTemplist(data));

    fetch("api/userlist")
      .then((data) => data.json())
      .then((data) => setUserlist(data));
  }, []);

  async function Addscheduledmail(formData) {
    const template = formData.get("template");
    const recipient = formData.get("recipient");
    const schedule = formData.get("schedule");

    const categoryID = userlists.categorylist.find(
      (category) => category.categoryName === recipient
    )?.categoryID;

    const filteredUsers = userlists.userlist
      .filter((user) => user.IDofcategoryList === categoryID)
      .map((user) => user.email);

    console.log(filteredUsers);

    const res = await fetch("http://localhost:3000/api/userlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        template: template,
        schedule: schedule,
        recipient: filteredUsers,
      }),
    });

    if (res.ok) {
      const newUser = await res.json();
      console.log("New User Added STATUS:", newUser);
      // router.push("/scheduled-mail'");
    } else {
      console.log("Error submitting the form");
    }
  }
  return (
    <div style={{ margin: 120 }}>
      <form action={Addscheduledmail} className="max-w-sm mx-auto">
        <label
          htmlFor="template"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Template ( Mailerss )
        </label>
        <select
          id="template"
          name="template"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {templist.map((tlist) => (
            <option key={tlist.template_id}>{tlist.template_name}</option>
          ))}
        </select>
        <br />
        <label
          htmlFor="recipient"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Recipient List
        </label>
        <select
          id="recipient"
          name="recipient"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {userlists.categorylist.map((ulist) => (
            <option key={ulist.categoryID}>{ulist.categoryName}</option>
          ))}
        </select>
        <br />
        <label
          htmlFor="schedule"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Schedule
        </label>
        <input
          type="datetime-local"
          id="schedule"
          name="schedule"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded center"
        >
          Add Schedule
        </button>
      </form>
    </div>
  );
}
