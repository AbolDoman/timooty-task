import Footer from "@/app/common/footer";
import Header from "@/app/common/header";
import Post from "@/app/components/post";

export default function Page({ params }: { params: { post: string } }) {
  return <>
    <Header />
    <Post id={parseInt(params.post)} />
    <Footer />
  </>
}