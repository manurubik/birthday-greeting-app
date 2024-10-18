import { useEffect } from "react";

const BodyContent = ({ name, years, day, monthName }) => {
  return (
    <body>
      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white min-h-screen flex flex-col justify-between items-center text-center px-4">
        <div className="max-w-2xl w-full mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-8 m-4 flex-grow">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-glow text-center">
              🎉 ¡Feliz cumpleaños, {name}! 🎉
            </h1>
            <p className="text-xl">
              ¡Ya son <span className="animate-glow">{years}</span> años!
            </p>
            <p className="text-xl md:text-2xl font-bold mb-4 text-center">
              Que este día esté lleno de alegría, risas y momentos inolvidables.
            </p>
            <p className="text-lg mb-8 italic text-center">
              Feliz {day} de {monthName}, ¡pásalo genial!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-yellow-400 bg-opacity-50 rounded-lg p-4 shadow-inner">
              <p className="font-bold">Deseos</p>
              <p>Que todos tus sueños se hagan realidad</p>
            </div>
            <div className="bg-green-400 bg-opacity-50 rounded-lg p-4 shadow-inner">
              <p className="font-bold">Amor</p>
              <p>Que el amor te rodee en este día especial</p>
            </div>
            <div className="bg-blue-400 bg-opacity-50 rounded-lg p-4 shadow-inner">
              <p className="font-bold">Éxito</p>
              <p>Que el éxito te acompañe siempre</p>
            </div>
          </div>

          <div className="flex space-x-4 justify-center mt-6">
            <div className="text-6xl animate-float">🎂</div>
            <div className="text-6xl animate-float">🎁</div>
            <div className="text-6xl animate-float">🎉</div>
          </div>

          <div className="mt-8 p-4 bg-white bg-opacity-30 rounded-lg">
            <p className="text-xl font-semibold mb-2">
              Un pequeño poema para ti:
            </p>
            <p className="italic">
              En este día tan especial,
              <br />
              Celebramos tu vida, tu ser vital.
              <br />
              Que la felicidad sea tu fiel compañera,
              <br />Y que cumplas cada sueño que tu corazón espera.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-yellow-300 text-yellow-800 px-4 py-2 rounded-full font-bold animate-pulse">
              #FelizCumpleaños
            </div>
            <div className="bg-pink-300 text-pink-800 px-4 py-2 rounded-full font-bold animate-pulse">
              #CelebraLaVida
            </div>
            <div className="bg-blue-300 text-blue-800 px-4 py-2 rounded-full font-bold animate-pulse">
              #MomentosMágicos
            </div>
          </div>
        </div>

        <footer className="w-full text-center border-t border-t-pink-800/70 opacity-70 p-4">
          <p>Creado con ❤️ para ti</p>
        </footer>
      </div>
    </body>
  );
};

export default BodyContent;
