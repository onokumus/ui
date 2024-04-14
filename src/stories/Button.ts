import "../style.css"

export type TButtonProps = {
  accentColor?: string
  label: string
  size?: "small" | "medium" | "large"
  variant?: "text" | "filled" | "tonal" | "outlined"
}

export const createButton = ({
  accentColor,
  label = "Button",
  size = "medium",
  variant = "text",
}: TButtonProps) => {
  const button = document.createElement("button")
  button.type = "button"
  button.innerText = label

  button.className = ["button", `${size}`, `${variant}`].join(" ")

  if (accentColor && variant === "text") {
    button.style.color = accentColor
  } else if (accentColor) {
    button.style.backgroundColor = accentColor
  }

  return button
}
