import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Error from "./Error"

export default function Form({setUserSearch}) {

    const [keyWord, setKeyWord] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!keyWord) {
            return setError(true)
        }
        setError(false)

        setUserSearch(keyWord)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: futbol"
                        onChange={(e)=> setKeyWord(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-4">
                   <button
                    className="btn btn-lg btn-danger btn-block"
                   >Buscar</button>
                </div>
            </div>
            {error && <Error message="Debes agregar un término de búsqueda" /> }
        </form>
    )
}

Form.propTypes = {
    setUserSearch : PropTypes.func.isRequired
}
