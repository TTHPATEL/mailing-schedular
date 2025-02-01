let template_List = [
  { template_id: 1, template_name: "VIP Member" },
  { template_id: 2, template_name: "New Member" },
  { template_id: 3, template_name: "Regular Member" },
  { template_id: 4, template_name: "Premium Member" },
];

export async function GET(request) {
  return Response.json(template_List);
}
