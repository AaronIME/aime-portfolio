import { Footer, Navbar } from "../../components";
import { LandingPage } from "../pages/LandingPage";

export const LandingLayout = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};
