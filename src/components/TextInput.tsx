import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center h-12 gap-3  py-4 px-3 bg-gray-800 w-full outline-none rounded focus-within:ring-2 ring-cyan-400">
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

//============== icons =====================
export interface TextInputIconsProps {
  children: ReactNode;
}

function TextInputIcons(props: TextInputIconsProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcons.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcons,
};
