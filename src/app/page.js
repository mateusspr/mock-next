import ButtonComponent from "./button/page";
import Variants from "./esqueleto/page";
import CircularIndeterminate from "./loading/page";

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen items-center gap-6'>
      <div >
        <Variants/>
        <CircularIndeterminate/>
        <ButtonComponent/>
      </div>
    </main>
  )
}
