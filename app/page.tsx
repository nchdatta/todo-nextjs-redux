import TodoContainer from "@/components/TodoContainer";

export default function Home() {
  return (
    <main className="flex w-full md:w-1/2 min-h-screen flex-col gap-2 mx-auto p-6 bg-slate-50">
      <h2 className="font-bold text-center text-lg text-slate-500">Todo Application</h2>

      {/* Todolist Container  */}
      <TodoContainer />
    </main>
  )
}
