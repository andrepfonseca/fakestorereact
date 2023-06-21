import { Control, FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
import useProductsViewModel from "../../viewmodel/useProductsViewModel";

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
  const { createdProduct, createProduct } = useProductsViewModel();
  // const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "all",
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

    createProduct(newProduct);

    alert(`Produto criado`);
    reset();
    // navigate("/products/" + createdProduct!.id);
  };

  return {
    formControl,
    errors,
    handleSubmit,
    handleRegister,
    createdProduct,
  };
};

export default useCreateProductViewController;
