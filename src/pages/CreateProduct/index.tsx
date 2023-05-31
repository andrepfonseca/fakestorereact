import { useState } from "react";
import { Control, FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InputForm from "../../components/Forms/InputForm";
import Button from "../../components/Forms/Button";

import { Product } from "../../types/productsInterface";

import { Container, Fields, Form, Label, Title } from "./styles";

interface FormData {
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
}

const schema = Yup.object().shape({
  title: Yup.string().required("Title is needed!"),
  price: Yup.number().required("Price is needed!"),
  description: Yup.string().required("Description is needed!"),
  category: Yup.string().required("Category is needed!"),
  image: Yup.string().required("Image URL is needed!"),
});

const CreateProduct = () => {
  const [data, setData] = useState<Product>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const formControll = control as unknown as Control<FieldValues>;

  const handleRegister = async (form: FormData) => {
    const newProduct = {
      title: form.title,
      price: Number(form.price),
      description: form.description,
      category: form.category,
      image: form.image,
      rating: {
        rate: 100,
        count: 1000,
      },
    };

    try {
      const response = await fetch("http://localhost:3000/products/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const responseData = await response.json();
      setData(responseData);
      console.log(data);
      reset();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

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
              control={formControll}
              error={errors.title && errors?.title.message}
            />

            <Label>Preço</Label>
            <InputForm
              name="price"
              control={formControll}
              error={errors.price && errors?.price.message}
            />

            <Label>Descrição</Label>
            <InputForm
              name="description"
              control={formControll}
              error={errors.description && errors?.description.message}
            />

            <Label>Categoria</Label>
            <InputForm
              name="category"
              control={formControll}
              error={errors.category && errors?.category.message}
            />

            <Label>URL imagem</Label>
            <InputForm
              name="image"
              control={formControll}
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
