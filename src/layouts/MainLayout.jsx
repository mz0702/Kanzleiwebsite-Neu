import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import OrganizationSchema from "@/components/shared/OrganizationSchema";

export default function MainLayout({ children }) {
  return (
    <>
      <OrganizationSchema />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
