"use client";
import { useParams } from "next/navigation";

export default function ScheduledmailedEdit() {
  const { id } = useParams();
  return (
    <>
      <h1>EDIT THIS SCHEDULED MAIL {id}</h1>
    </>
  );
}
