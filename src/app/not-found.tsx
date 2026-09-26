import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#08090b] text-white">
      <section className="flex items-center justify-center px-5 py-12">
        <div className="mx-auto w-full max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#292c32] bg-[#181b21] px-6 py-16 text-center sm:px-10 md:px-16 md:py-20">

            <h1 className="text-9xl text-white font-bold">
              404
            </h1>

            <h2 className="mt-10 text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
              The page is not found
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#aeb1b8] sm:text-lg">
              Looks like you&apos;ve wandered outside the workout library.
              Let&apos;s get you back where the real workouts are.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="rounded-full bg-[#c7ff00] px-7 py-3 font-semibold text-black transition-all hover:bg-[#d3ff33dd]"
              >
                Browse Workouts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}