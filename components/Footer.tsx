export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Aarhus Biludlejning</h3>
            <p className="text-gray-400">Din pålidelige partner i biludlejning</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">© {new Date().getFullYear()} Aarhus Biludlejning</p>
            <p className="text-gray-400">Alle rettigheder forbeholdes</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 