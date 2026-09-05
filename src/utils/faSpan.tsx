import convertEnToPe from "@/utils/convertEnToPe";

interface FaSpanProps {
  value?: string | number;
  cls?: string;
  suffix?: string;
}

const FaSpan = ({ cls, value, suffix }: FaSpanProps) => {
  const stringValue = value !== undefined ? String(value) : "";

  return (
    <span className={cls || "ml-0.5"}>
      {stringValue && convertEnToPe(stringValue)}
      {suffix && ` ${suffix}`}
    </span>
  );
};

export default FaSpan;
