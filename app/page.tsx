import TodoContainer from "@/components/TodoContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h2>Hello From Nextjs</h2>
      <TodoContainer />
    </main>
  )
}
