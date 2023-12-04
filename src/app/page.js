import Cards from "./components/cards/page";
import About from "./pages/about/page";


export default function Home() {
  return (
    <main className='flex flex-col min-h-screen items-center gap-6'>
      <div >
        <About/>
      </div>
    </main>
  )
}
