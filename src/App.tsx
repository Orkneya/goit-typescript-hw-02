import { useState, useEffect } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { fetchImgs } from "./components/serves/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Modal from "react-modal";
import ImageModal from "./components/ImageModal/ImageModal";
import { Image } from "./type/ImageData";

Modal.setAppElement("#root");

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<boolean | string>(false);
  const [page, setPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const abortController = new AbortController();
    const getImg = async () => {
      try {
        setLoading(true);
        if (!query) {
          return;
        }
        const data = await fetchImgs(query, page, abortController.signal);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(Math.min(data.totalPages, 20));
      } catch (error) {
        console.log("Error:", error);
        setError(true);
        toast.error("Try again later...");
      } finally {
        setLoading(false);
      }
    };
    getImg();

    return () => {
      abortController.abort();
    };
  }, [query, page]);

  function modalIsOpen(image: Image): void {
    setSelectedImage(image);
    setIsOpen(true);
  }
  function closeModal(): void {
    setIsOpen(false);
    setSelectedImage(null);
  }

  const handleChangeQuery = (newQuery: string): void => {
    toast.success(`Query changed to ${newQuery}`);
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div className="container">
      <Toaster />
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {loading && <Loader />}
      <ImageGallery newImgs={images} openModal={modalIsOpen} />
      <ImageModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
      {page < totalPages && images.length > 0 && (
        <LoadMoreBtn onClick={() => setPage(page + 1)} />
      )}
    </div>
  );
};

export default App;
