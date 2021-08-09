import {useState, useEffect} from "react"
import Form from "./components/Form";
import ImageList from "./components/ImageList";
import Pagination from "./components/Pagination";

function App() {

  const [userSearch, setUserSearch] = useState("")
  const [APIimages, setAPIimages] = useState([])
  const [totalPages, settotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if(userSearch) {
      settotalPages(1)
      setCurrentPage(1)
    }
  }, [userSearch])

  useEffect(() => {
    if(userSearch) {
      const getImages = async () => {
        const imagesPerPage = 30;
        const API_KEY = `21414543-0eb0af0d23a842e728df10f9c`
        const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${userSearch}&per_page=${imagesPerPage}&page=${currentPage}`;
        
        const response = await fetch(URL)
        const data = await response.json()
        setAPIimages(data.hits)
        
        settotalPages(Math.ceil(data.totalHits / imagesPerPage))
        const jumbotron = document.querySelector(".jumbotron")
        jumbotron.scrollIntoView({behavior: "smooth"})
      }
      getImages()  
    }
  }, [userSearch,currentPage])

  return (
    <>
      <div className="container">
          <div className="jumbotron">
              <p className="lead text-center">Buscador de Imágenes</p>
              <Form 
                setUserSearch={setUserSearch}
              />
          </div>

          <div className="row justify-content-center">
              <ImageList 
                APIimages={APIimages}
              />
            
              <Pagination 
                direction="Anterior"
                symbol="&laquo;"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />

              <Pagination 
                direction="Siguiente"
                symbol="&raquo;"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
          </div>
      </div>
    </>
  );
}

export default App;
