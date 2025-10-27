export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-center">
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4">
          <span className="text-red-600">Asia</span>
          <span className="text-yellow-500">Viet</span>
        </h1>
        <p className="text-xl text-gray-600 mt-8">
          Authentische vietnamesische Küche
        </p>
      </div>
    </main>
  )
}
