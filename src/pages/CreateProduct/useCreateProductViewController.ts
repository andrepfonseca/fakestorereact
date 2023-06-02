import { Control, FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

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

const useCreateProductViewController = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const formControl = control as unknown as Control<FieldValues>;

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

      if (response)
        alert(
          "Produto " +
            responseData.title +
            " criado, seu id é: " +
            responseData.id
        );
      reset();
      navigate("/products/" + responseData.id);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return {
    formControl,
    errors,
    handleSubmit,
    handleRegister,
  };
};

export default useCreateProductViewController;
