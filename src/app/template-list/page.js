import TemplatelistUI from "./TemplatelistUI";

export default async function TemplateList() {
  const TemplatelistData = await (
    await fetch("https://backend-mail-schedule.onrender.com/api/templates", {
      cache: "no-store",
    })
  ).json();

  return (
    <div>
      <TemplatelistUI TemplatelistData={TemplatelistData} />
    </div>
  );
}
