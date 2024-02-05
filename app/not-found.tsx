export default function NotFound() {
  return (
    <section className="bg-royalblue h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl md:text-9xl font-extrabold mb-4">404</h1>
        <p className="text-3xl md:text-4xl font-bold mb-4">
          Oops! Something&apos;s missing.
        </p>
        <p className="text-lg md:text-xl font-light text-gray-400 mb-8">
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore
          on the home page.
        </p>
        <a
          href="/"
          className="inline-block bg-royalyellow text-royalblue hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-3 text-center focus:ring-primary-900"
        >
          Back to Homepage
        </a>
      </div>
    </section>
  );
}
