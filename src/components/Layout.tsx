import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

import WhatsAppButton from "@/components/WhatsAppButton";
import PromoBanner from "@/components/PromoBanner";

interface LayoutProps {
  children: React.ReactNode;
  showLoader?: boolean;
}

const Layout = ({ children, showLoader = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {showLoader && <PageLoader />}
      <PromoBanner />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
