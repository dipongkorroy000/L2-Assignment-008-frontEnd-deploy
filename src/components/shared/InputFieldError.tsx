import {IInputErrorState, inputFieldError} from "@/src/lib/inputFieldError";
import {FieldDescription} from "../ui/field";

interface InputFieldErrorProps {
  field: string;
  state: IInputErrorState;
}

const InputFieldError = ({field, state}: InputFieldErrorProps) => {
  if (inputFieldError(field, state)) return <FieldDescription className="text-red-600">{inputFieldError(field, state)}</FieldDescription>;

  return null;
};

export default InputFieldError;
