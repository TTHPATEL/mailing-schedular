import TemplatelistUI from "./TemplatelistUI";

export default async function TemplateList() {
  const TemplatelistData = await (
    await fetch("http://localhost:3013/api/templates", {
      cache: "no-store",
    })
  ).json();

  return (
    <div>
      <TemplatelistUI TemplatelistData={TemplatelistData} />
    </div>
  );
}
