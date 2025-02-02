let template_List = [
  { template_id: 1, template_name: "New Offer Letter" },
  { template_id: 2, template_name: "Company Event Invitation" },
  { template_id: 3, template_name: "Employee Promotion Notice" },
  { template_id: 4, template_name: "Salary Increment Letter" },
  { template_id: 5, template_name: "Termination Letter" },
];

export async function GET(request) {
  return Response.json(template_List);
}
