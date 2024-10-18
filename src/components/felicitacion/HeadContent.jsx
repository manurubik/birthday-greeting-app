const HeadContent = ({ name }) => {
  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Felicitación de Cumpleaños para {name}</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes glow {
            0%, 100% { 
              text-shadow: 0 0 3px #fff, 0 0 5px #fff, 0 0 8px #ff00de, 0 0 12px #ff00de, 0 0 20px #ff00de; 
            }
            50% { 
              text-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 5px #ff00de, 0 0 8px #ff00de; 
            }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-glow { animation: glow 2s ease-in-out infinite; }
        `}
      </style>
    </head>
  );
};

export default HeadContent;
