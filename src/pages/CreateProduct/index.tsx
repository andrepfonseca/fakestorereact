import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InputForm from "../../components/Forms/InputForm";
import Button from "../../components/Forms/Button";

import { Container, Fields, Form, Label, Title } from "./styles";
import useCreateProductViewController from "./useCreateProductViewController";

const CreateProduct = () => {
  const { formControl, errors, handleSubmit, handleRegister } =
    useCreateProductViewController();

  return (
    <>
      <Header />

      <Container>
        <Title>Cadastro de novo produto</Title>

        <Form>
          <Fields>
            <Label>Título</Label>
            <InputForm
              name="title"
              control={formControl}
              error={errors.title && errors?.title.message}
            />

            <Label>Preço</Label>
            <InputForm
              name="price"
              control={formControl}
              error={errors.price && errors?.price.message}
            />

            <Label>Descrição</Label>
            <InputForm
              name="description"
              control={formControl}
              error={errors.description && errors?.description.message}
            />

            <Label>Categoria</Label>
            <InputForm
              name="category"
              control={formControl}
              error={errors.category && errors?.category.message}
            />

            <Label>URL imagem</Label>
            <InputForm
              name="image"
              control={formControl}
              error={errors.image && errors?.image.message}
            />
          </Fields>

          <Button title="Cadastrar" onClick={handleSubmit(handleRegister)} />
        </Form>
      </Container>

      <Footer />
    </>
  );
};

export default CreateProduct;
