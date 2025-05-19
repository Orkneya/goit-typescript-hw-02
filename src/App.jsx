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

Modal.setAppElement("#root");

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

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
        setTotalPages(data.total_pages);
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

  function modalIsOpen(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }

  const handleChangeQuery = (newQuery) => {
    toast.success(`Query changed to ${newQuery}`);
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div className="s.container">
      <Toaster />
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {loading && <Loader />}
      <ImageGallery newImgs={images} openModal={modalIsOpen} />
      {isOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
      {page < totalPages && images.length > 0 && (
        <LoadMoreBtn onClick={() => setPage(page + 1)} />
      )}
    </div>
  );
}

export default App;
