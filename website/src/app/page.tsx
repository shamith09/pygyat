import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7000118253011727"
        crossOrigin="anonymous"
      />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="shamith"
        data-description="Support me on Buy me a coffee!"
        data-message=""
        data-color="#BD5FFF"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      />
      <div className="min-h-screen relative">
        <div
          className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
          style={{
            background: `linear-gradient(180deg, 
            var(--purple-glow-start) 0%, 
            var(--purple-glow-mid) 25%, 
            transparent 100%)`,
          }}
        />

        <main className="relative pt-24">
          <section className="container mx-auto px-4 text-center">
            <Image
              src="/pygyat.png"
              alt="PyGyat Logo"
              width={120}
              height={120}
              className="mx-auto mb-8"
            />
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Python with rizz
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Be a sigma with PyGyat - a Python preprocessor that translates
              Python into brainrot
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://pypi.org/project/pygyat/"
                className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Get Started
              </a>

              <a
                href="https://jup.ag/swap/SOL-8NhVP1cGCP3xaPNn74up8sQVr6JBczeKHytyEEWYpump?referrer=Vtim38ksMkPVPdDuWC6dHC7X2QZQGFCy78zVftpQJqV&feeBps=100"
                className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 transition"
              >
                <span>$PyGyat Coin</span>
              </a>
              <a
                href="https://t.me/PyGyat_BrainRot"
                className="flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white hover:opacity-90 transition"
              >
                <span>Join Telegram</span>
              </a>
              <a
                href="https://github.com/shamith09/pygyat"
                className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                View on GitHub
              </a>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Write Python like an iPad kid
              </h2>
              <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg p-6 shadow-xl">
                <Image
                  src="/pygyat-code.png"
                  alt="PyGyat Code Example"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Easy Installation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Install with pip and start writing brainrot immediately
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">VS Code Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Syntax highlighting for .pygyat files in VS Code
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">
                    100% Python Compatible
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    All PyGyat code compiles to valid Python code and can be
                    glazed from Python files.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Get Started
              </h2>
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
                  <p className="text-gray-100 font-mono">pip install pygyat</p>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Check out the{" "}
                  <Link
                    href="/docs"
                    className="text-purple-600 hover:underline"
                  >
                    documentation
                  </Link>{" "}
                  to learn more about PyGyat syntax and features.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
