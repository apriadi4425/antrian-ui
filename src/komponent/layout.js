import { Fragment } from 'react'
import './layout.css'

const Layout = ({children}) => {
    return(
        <Fragment>
            <div className='banner_atas'></div>
            <div className='text-center mt-3'>
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