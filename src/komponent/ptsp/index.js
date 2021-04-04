import Layout from '../layout'
import Tombol from './Tombol'
import { FormGroup, Label, Input } from 'reactstrap';


const PTSP = () => {
    return(
        <Layout>
            <FormGroup>
                <Label style={{fontSize : '150px'}}>Nomor Telpon</Label>
                <Input type='number' className='form_input' placeholder="with a placeholder" />
            </FormGroup>
            <Tombol to='/ptsp' meja='COUNTER 1' text={'Informasi/Sebelum Pendaftaran/Pengaduan'} text_bawah={'Pertanyaan Informasi Terkait Mengajukan Pendaftaran'} image='https://pa-baubau.go.id/wp-content/uploads/2020/07/3S-di-PTSP.jpeg'/>
        </Layout>
    )
}

export default PTSP;