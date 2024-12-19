import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Games: React.FC = () => {
  const games = [
    {
      name: "Hoops",
      description: "Basketball shooting challenge",
      image: "/hoops2.png",
      bgColor: "bg-blue-50",
      btnDescription: "Play Now",
      imgCover: "object-contain",
    },
    {
      name: "Brain Game",
      description: "Test your mental skills",
      image: "/brain-game2.jpg",
      bgColor: "bg-blue-50",
      btnDescription: "Play Now",
      imgCover: "object-cover",
    },
    {
      name: "Rocket Mania",
      description: "Shoot rockets in a galaxy",
      image: "/rocket2-removebg-preview.png",
      bgColor: "bg-blue-50",
      btnDescription: "Coming Soon",
      imgCover: "object-scale-down",
    },
    {
      name: "Checkers",
      description: "Checkmate",
      image: "/checkers2.jpg",
      bgColor: "bg-blue-50",
      btnDescription: "Coming Soon",
      imgCover: "object-cover",
    },
  ];

  return (
    <div className="mx-auto px-4 py-4 overflow-hidden w-full max-w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-12">
        Playground
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8">
        {games.map((game) => (
          <Card
            key={game.name}
            className={`
          ${game.bgColor} 
          hover:shadow-xl transition-all duration-300 
          text-center overflow-hidden
        `}
          >
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.name}
                  className={`w-full h-48 ${game.imgCover} max-w-full`}
                  // className="w-full h-48 {games.imgCover} max-w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <Button variant="outline">{game.btnDescription}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
