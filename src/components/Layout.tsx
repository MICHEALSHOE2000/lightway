import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

interface LayoutProps {
  children: React.ReactNode;
  showLoader?: boolean;
}

const Layout = ({ children, showLoader = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {showLoader && <PageLoader />}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
