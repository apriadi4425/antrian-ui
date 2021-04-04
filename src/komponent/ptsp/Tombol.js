
import {memo} from 'react'

const Tombol = (props) => {

    return(
        <div className='row mt-5'>
            <div className="col-md-12">
                <div style={{width : '100%'}}>
                <div className="col-md-12 tombol_antrian text-center">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={props.image} alt={props.meja.replace(' ', '-')} className="img img-thumbnail" style={{width : '100%', height : '700px', marginTop : '5px'}}/>
                        </div>
                        <div className="col-md-10">
                            <p style={{fontSize : "180px", fontWeight : "bold", color: "white"}}>{props.meja}</p>
                            <p style={{fontSize : "120px", fontWeight : "bold", color: "white"}}>{props.text}</p>
                            <p className="bawah_text" style={{fontSize : "60px", fontWeight : "bold", color: "white"}}>{props.text_bawah}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Tombol)