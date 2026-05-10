import { redirect } from "next/navigation";

export default function LegacyK12ProgramsRedirect() {
  redirect("/programs/grades-6-12");
}
