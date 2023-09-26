import { Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";

type Props = {
  to?: string;
  children: string;
  w?: string;
  size?: string;
};

const TextStyle = {
  fontSize: "sm",
  border: "none",
  size: "sm",
};
function MenuLink({ to, children, w, size, ...props }: Props) {
  const textColor = useColorModeValue("navbar.text", "#E8E1E0");
  return (
    <Button
      size={size ? size : "sm"}
      sx={TextStyle}
      variant="ghost"
      color={textColor}
      w={w}
    >
      {children}
    </Button>
  );
}

export default MenuLink;
