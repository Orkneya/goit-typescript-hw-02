import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ handleChangeQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newImg = e.target.elements.newImg.value;
    if (!newImg.trim()) {
      toast.error("Please, enter images and photos...");
    } else {
      handleChangeQuery(newImg);
    }
    e.target.reset(0);
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
