import { FormEvent } from "react";
import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  handleChangeQuery: (newImg: string) => void;
};

const SearchBar: React.FC<Props> = ({ handleChangeQuery }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const newImg = (form.elements.namedItem("newImg") as HTMLInputElement)
      .value;
    if (!newImg.trim()) {
      toast.error("Please, enter images or photos...");
    } else {
      handleChangeQuery(newImg);
    }
    form.reset();
  };
  return (
    <header>
      <Toaster />
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="newImg"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
