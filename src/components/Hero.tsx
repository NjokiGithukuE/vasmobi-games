import { Button } from "./ui/button";

export const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-4 md:py-8 flex flex-col md:flex-row items-center bg-[#E3F1F2]">
      <div className="w-full md:w-1/2 pr-6 md:pr-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Welcome to <span className="text-orange-500">VasMobi Games</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
          Discover exciting mobile games that bring entertainment right to your
          fingertips. Play anytime, anywhere!
        </p>
        <div className="flex space-x-4">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Play Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-orange-500 border-orange-500 hover:bg-orange-100"
          >
            Cash Out
          </Button>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src="/hero-design.jpg"
          alt="VasMobile Games"
          className="w-full h-96 object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};
