import { Icon, SectionButton } from "./styles";

interface DefaultButtonProps {
  title: string;
  to: string;
  iconImage: string;
  alt: string;
  type: "primary" | "secondary";
}

function DefaultButton({
  title,
  to,
  iconImage,
  alt,
  type,
}: DefaultButtonProps) {
  return (
    <SectionButton
      to={to}
      style={type === "secondary" ? { background: "none" } : undefined}
    >
      {title}
      <Icon src={iconImage} alt={alt} />
    </SectionButton>
  );
}

export default DefaultButton;
