import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    //Procedimiento guardar 
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { title: title, content: content })
        navigate('/') //Una vez que guarda nos envía a la ruta raíz
    }
    //  Nota: El preventDefault() método cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
    //  Por ejemplo, esto puede ser útil cuando:
    //  Al hacer clic en un "Submit" botón, evita que se envie un formulario (ACÁ SE USA). Se redirirge  raiz por navigate
    //  Al hacer clic en un enlace, prevenir el enlace desde la URL siguiente

    return (
        <div>
            <h3> Create Post</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} //Capturamos valor 
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)} //Capturamos valor 
                        type="text"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CompCreateBlog