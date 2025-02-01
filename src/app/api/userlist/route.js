const userlist = [
  { id: 1, name: "Jay", email: "jay@gmail.com", category: "VIP Member" },
  { id: 2, name: "Ramesh", email: "ramesh@gmail.com", category: "New Member" },
  {
    id: 3,
    name: "Priya",
    email: "priya@yahoo.com",
    category: "Regular Member",
  },
  {
    id: 4,
    name: "Amit",
    email: "amit@hotmail.com",
    category: "Premium Member",
  },
  { id: 5, name: "Sneha", email: "sneha@gmail.com", category: "VIP Member" },
  {
    id: 6,
    name: "Vikram",
    email: "vikram@outlook.com",
    category: "New Member",
  },
  { id: 7, name: "Neha", email: "neha@gmail.com", category: "Regular Member" },
  {
    id: 8,
    name: "Suresh",
    email: "suresh@yahoo.com",
    category: "Premium Member",
  },
  { id: 9, name: "Anjali", email: "anjali@gmail.com", category: "VIP Member" },
  {
    id: 10,
    name: "Rahul",
    email: "rahul@outlook.com",
    category: "Regular Member",
  },
];

export async function GET() {
  return Response.json(userlist);
}
