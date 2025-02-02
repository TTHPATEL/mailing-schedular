export const userlist = [
  {
    id: 1,
    name: "Jay",
    email: "jay@gmail.com",
    IDofcategoryList: 4,
  },
  {
    id: 2,
    name: "Ramesh",
    email: "ramesh@gmail.com",
    IDofcategoryList: 1,
  },
  {
    id: 3,
    name: "Priya",
    email: "priya@yahoo.com",
    IDofcategoryList: 2,
  },
  {
    id: 4,
    name: "Amit",
    email: "amit@hotmail.com",
    IDofcategoryList: 3,
  },
  {
    id: 5,
    name: "Sneha",
    email: "sneha@gmail.com",
    IDofcategoryList: 4,
  },
  {
    id: 6,
    name: "Vikram",
    email: "vikram@outlook.com",
    IDofcategoryList: 1,
  },
  {
    id: 7,
    name: "Neha",
    email: "neha@gmail.com",
    IDofcategoryList: 2,
  },
  {
    id: 8,
    name: "Suresh",
    email: "suresh@yahoo.com",
    IDofcategoryList: 3,
  },
  {
    id: 9,
    name: "Anjali",
    email: "anjali@gmail.com",
    IDofcategoryList: 4,
  },
  {
    id: 10,
    name: "Rahul",
    email: "rahul@outlook.com",
    IDofcategoryList: 5,
  },
];

export const categorylist = [
  { categoryID: 1, categoryName: "New Joinees" },
  { categoryID: 2, categoryName: "HR Department" },
  { categoryID: 3, categoryName: "Marketing Team" },
  { categoryID: 4, categoryName: "Interns & Trainees" },
  { categoryID: 5, categoryName: "Executive Leadership" },
];

let scheduleMail = [
  {
    scheduleMailID: 1,
    template: "Salary Increment Letter",
    schedule: "2025-02-02T01:31",
    recipient: ["krishna@gmail.com", "ram@gmail.com"],
  },
];

export async function GET() {
  return Response.json({
    userlist,
    categorylist,
    scheduleMail,
  });
}

export async function POST(Request) {
  const user = await Request.json();
  console.log(user);
  //   {
  //       id , name
  //     "name":"Ram"
  //   }
  const newUser = {
    scheduleMailID: scheduleMail.length + 1,
    template: user.template,
    schedule: user.schedule,
    recipient: user.recipient,
  };
  scheduleMail.push(newUser);
  console.log(scheduleMail);
  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
