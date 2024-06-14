import "@/globals.css"
function App() {


  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center text-purple-600">
        <a href="#" className="flex items-center justify-center">
          <span className="">Budgeting App</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Features
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Pricing
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            About
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
     
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
      <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
        <div>
          <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Take Control of Your Finances with Our Budgeting App
          </h1>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Our intuitive budgeting app helps you track your spending, set financial goals, and stay on top of your
            money. Simplify your life and achieve your financial dreams.
          </p>
          <div className="space-x-4">
            <a
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        
            >
              Sign Up
            </a>
            <a
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </main>
  </div>
  )
}

export default App
