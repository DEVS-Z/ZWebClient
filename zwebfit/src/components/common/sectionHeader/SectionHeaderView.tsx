type SectionHeaderViewProps = {
  title: string;
  subtitle?: string;
  align?: "start" | "center" | "end";
  className?: string;       // para espaciar desde la página (mt, mb, etc.)
};

export default function SectionHeaderView({
  title,
  subtitle,
  align = "start",
  className = "",
}: SectionHeaderViewProps) {
  const alignClass =
    align === "center" ? "items-center text-center"
    : align === "end"   ? "items-end text-right"
                        : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      <h2 className="text-xl font-semibold text-black">{title}</h2>
      {subtitle && <span className="text-sm text-gray-400 mt-0.5">{subtitle}</span>}
    </div>
  );
}
