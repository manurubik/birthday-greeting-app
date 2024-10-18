import { useState, useMemo } from "react";
import { saveAs } from "file-saver";
import ReactDOMServer from "react-dom/server";

import HTMLTemplate from "./felicitacion/HTMLTemplate";

const FormSection = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const extractDates = (dateString) => {
    const parts = dateString.split("-");
    return { year: parts[0], month: parts[1], day: parts[2] };
  };
  const convertMonthNumberToName = (monthNumber) => {
    const monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    return monthNames[monthNumber - 1];
  };
  const { year, month, day } = useMemo(() => extractDates(date), [date]);
  const monthName = useMemo(() => convertMonthNumberToName(month), [month]);
  const years = useMemo(
    () => new Date().getFullYear() - parseInt(year),
    [year]
  );

  const handleDownload = () => {
    const htmlContent = ReactDOMServer.renderToString(
      <HTMLTemplate name={name} years={years} day={day} monthName={monthName} />
    );
    const blob = new Blob([htmlContent], { type: "text/html" });
    saveAs(blob, `Felicitacion_${name}.html`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    handleDownload();
  };

  return (
    <form
      className="flex flex-col items-center mb-8 space-y-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Nombre del homenajeado"
        className="p-2 rounded w-full max-w-md text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="date"
        className="p-2 rounded w-full max-w-md focus:ring-2 focus:ring-blue-500 outline-none"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button
        type="button" // Cambiado a "button"
        onClick={handleSubmit} // Llama a handleSubmit en lugar de handleDownload directamente
        className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300 shadow-lg"
      >
        Descargar Felicitación
      </button>
    </form>
  );
};

export default FormSection;
