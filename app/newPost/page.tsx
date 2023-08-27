import DashboardLayout from "../components/layouts/dashboard";
import CreatePosts from "../components/createPost";

export default function Home() {
  return (
    <DashboardLayout>
        <CreatePosts />
    </DashboardLayout>
  )
}
