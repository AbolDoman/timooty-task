import Link from "next/link";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-[20px]">
        This is main Page
      </div>
      <div className="text-[16px] mt-4">
        to view posts page click on posts
      </div>
      <ArrowDownwardIcon fontSize="large" className="animate-bounce mt-[20px]"/>
      <Link href={"/posts"} className="text-[20px] mt-4 underline text-blue-300">
        posts
      </Link>
    </main>
  )
}
