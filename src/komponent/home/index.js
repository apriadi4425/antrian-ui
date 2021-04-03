
import Layout from '../layout'
import Tombol from './Tombol'

const Home = () => {
    return (
       <Layout>
            <Tombol to='/ptsp' title='Antrian Pelayanan PTSP' image='https://pa-baubau.go.id/wp-content/uploads/2020/07/3S-di-PTSP.jpeg'/>
            <Tombol to='/persidangan' title='Antrian Persidangan' image='http://farid-wajdi.com/po-content/uploads/persidangan_live.jpg'/>
       </Layout>
    )
}

export default Home;