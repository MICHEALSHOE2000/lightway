import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

import WhatsAppButton from "@/components/WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
  showLoader?: boolean;
}

const Layout = ({ children, showLoader = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {showLoader && <PageLoader />}
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
