import Header from '../../../common/header';
import Footer from '../../../common/footer';
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Header />
        <div>{children}</div>
        <Footer />
      </>
    )
  }
  