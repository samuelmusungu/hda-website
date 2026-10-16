import { Link } from "react-router-dom";
import PageHero from "@/components/layout/PageHero";

const NotFound = () => (
  <PageHero
    eyebrow="Error 404"
    title={
      <>
        This page <span className="italic text-teal-glow">doesn't exist</span>.
      </>
    }
    description="The link may be broken, or the page may have moved. Head back to the studio and find what you're looking for."
    crumbs={[{ label: "Home", to: "/" }, { label: "Not found" }]}
  >
    <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-teal hover:bg-teal-light px-7 py-4 font-semibold transition-colors">
      Back to home
    </Link>
  </PageHero>
);

export default NotFound;
