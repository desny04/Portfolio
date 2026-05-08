import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold">Treesa Desny</h1>
        <p className="text-gray-500 mt-4">Python Full Stack Developer</p>
      </section>
    </div>
  );
}

export default App;