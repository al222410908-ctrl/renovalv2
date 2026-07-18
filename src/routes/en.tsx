import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/components/LanguageContext";
import { LandingPage } from "@/components/sections/LandingPage";

export const Route = createFileRoute("/en")({
  component: EnglishIndex,
});

function EnglishIndex() {
  return (
    <LanguageProvider locale="en">
      <LandingPage />
    </LanguageProvider>
  );
}
