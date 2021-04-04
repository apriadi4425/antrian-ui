import { Fragment } from 'react'
import './layout.css'

const Layout = ({children, history}) => {
    const Path = window.location.pathname;
    return(
        <Fragment>
            <div className='banner_atas'></div>
            <div className='text-center mt-3'>
                {
                    Path === '/' ? null : <button onClick={() => history.push('/')} style={{height : '300px', width : '600px', fontSize : '120px'}} className='btn btn-warning'>Kembali</button>
                }
                <h1 style={{fontSize : '200px'}}>Sistem Antrian Pengadilan</h1>
            </div>
            <div className='container-fluid'>
                <div className="row justify-content-center">
                    <div className="col-md-12 box_utama">
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Layout;