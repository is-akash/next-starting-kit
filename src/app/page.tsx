import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
    return (
        <main className='w-full h-screen flex items-center justify-center gap-4'>
            <h1>Hello world</h1>
            <ModeToggle />
        </main>
    );
}
