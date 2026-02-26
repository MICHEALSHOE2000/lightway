import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

import WhatsAppButton from "@/components/WhatsAppButton";


interface LayoutProps {
  children: React.ReactNode;
  showLoader?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout = ({ children, showLoader = false, showHeader = true, showFooter = true }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {showLoader && <PageLoader />}
      {showHeader && <Header />}
      <main>{children}</main>
      {showFooter && <Footer />}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
