import HeadContent from "./HeadContent";
import BodyContent from "./BodyContent";

const HTMLTemplate = ({ name, years, day, monthName }) => {
  return (
    <html lang="es">
      <HeadContent name={name} />
      <BodyContent name={name} years={years} day={day} monthName={monthName} />
    </html>
  );
};

export default HTMLTemplate;
