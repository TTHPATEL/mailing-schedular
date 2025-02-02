import ScheduledMailForm from "./ScheduledMailUI";

export default async function ScheduledMail() {
  const scheduleMail = await (
    await fetch("http://localhost:3012/api/scheduleMail", {
      cache: "no-store", // Ensures fresh data on every request
    })
  ).json();

  return (
    <div>
      <ScheduledMailForm scheduleMailData={scheduleMail} />
    </div>
  );
}
