// importando librerias
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const ComShowBlogs = () => {
    const [blogs, setBlog] = useState([])

    useEffect(() => {
        getBlogs()// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //Procedimiento para mostrar todos los blogs 
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    // Procedimiento para eliminar un blog    
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    //Devolver una vista 
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => ( //con map y blog en singular recorremos en arreglo uno por uno
                                <tr key={blog.id}>
                                    <td> {blog.title} </td>
                                    <td> {blog.content} </td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    )
}

export default ComShowBlogs // Lo exportamos porque lo vamos a llamar desde app.js
//app.js es donde se ejecuta nuestra aplicacion

//hooks = gancho, nos ayudan a gestionar nuestros componentes principales
// 2 tipos de componentes: los de clase y los de funcion