import { Controller, Control } from "react-hook-form";

import { Container, Error } from "./styles";
import Input from "../Input";

interface InputFormProps {
  control: Control;
  name: string;
  error: string | undefined;
}

const InputForm = ({ control, name, error, ...rest }: InputFormProps) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value = "" } }) => (
          <Input onChange={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default InputForm;
