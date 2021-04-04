import {memo} from 'react'
import {Link} from 'react-router-dom'

const Tombol = (props) => {
    return(
        <Link to={props.to}>
            <div className='row mt-5'>
                <div className="col-md-12">
                    <div style={{width : '100%'}}>
                    <div className="col-md-12 tombol_antrian text-center">
                        <div className="row">
                            <div className="col-md-2">
                                <img src={props.image} alt={props.title.replace(' ', '-')} className="img img-thumbnail" style={{width : '100%', height : '700px', marginTop : '5px'}}/>
                            </div>
                            <div className="col-md-10">
                                <p style={{marginTop : '5.5%',fontSize : "180px", fontWeight : "bold", color: "white"}}>{props.title}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default memo(Tombol)