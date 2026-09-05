import convertEnToPe from "@/utils/convertEnToPe";

interface ParagraphProps {
  text?: string;
  cls?: string;
  color?: string;
  isNozha?: boolean;
  center?: boolean;
  weight?: string;
  convertNumbers?: boolean;
}

const Paragraph = ({
  cls,
  text,
  color,
  isNozha,
  center,
  weight,
  convertNumbers = true,
}: ParagraphProps) => {
  const paragraphText = convertNumbers
    ? convertEnToPe(text ?? "")
    : (text ?? "");

  return (
    <p
      className={`
            ${color ?? "text-gray-400"}
            ${isNozha ? "font-nozha" : ""}
            ${center ? "text-center" : "text-right"}
            ${weight ?? "font-bold"}
            text-base
            ${cls ?? ""}
        `}
    >
      {paragraphText}
    </p>
  );
};

export default Paragraph;
