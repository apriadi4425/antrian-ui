import {useState, useEffect, useRef} from 'react'
import Layout from '../layout'
import Tombol from './Tombol'
import { FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'


const PTSP = ({history}) => {
    const [Data, setData] = useState([])
    const [Loading, setLoading] = useState(true)
    const [NomorHp, setNomorHp] = useState('')
    const [LoadingButton, setLoadingButton] = useState(false)

   
    const inputRef = useRef();


    const GetData = async () => {
        await axios({
            method : 'get',
            url : `${process.env.REACT_APP_BASE_URL}/api/meja`,
            headers : {
                Accept: 'application/json',
            }
        }).then(res => {
            setData(res.data.data)
        }).catch(err => {
            console.log(err)
        })
        setLoading(false)
    }

    const TambahData = async (MejaId) => {
        if(NomorHp === '') return alert('Nomor Hp Harus Diisi')
        setLoadingButton(true)
        await axios({
            method : 'post',
            url : `${process.env.REACT_APP_BASE_URL}/api/data`,
            data : {
                meja_id : MejaId,
                nomor_telpon : NomorHp
            },
            headers : {
                Accept: 'application/json',
            }
        }).then(res => {
            history.push('/')
            window.location.href = `http://192.168.2.44/antrian-ptsp/cetak`;
        }).catch(err => {
            inputRef.current.focus();
            alert(err.response.data.message)
        })
        setLoadingButton(false)
    }


    useEffect(() => {
        GetData()
    
    }, [])

    return(
        <Layout history={history}>
            <FormGroup>
                <Label style={{fontSize : '150px'}}>Isikan Nomor Telpon Anda</Label>
                <Input ref={inputRef} autoFocus type='text' value={NomorHp} onChange={(e) => setNomorHp(e.target.value)} className='form_input' placeholder="tekan disini untuk mengisi nomor telpon anda" />
            </FormGroup>
            {
                Loading ? <h1>Loading</h1> :
                Data.map((list, index) =>
                    <div key={index} onClick={() => LoadingButton ? null : TambahData(list.id)}>
                        <Tombol  NomorHp={NomorHp} meja={list.nama} text={list.ket} text_bawah={list.ket2.toString()} image={`http://192.168.2.44/antrian-ptsp/images/${list.foto}`}/>
                    </div>
                )
            }
        </Layout>
    )
}

export default PTSP;