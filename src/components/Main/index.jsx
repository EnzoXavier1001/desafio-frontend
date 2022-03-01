import './styles.css'
import hamburguerImg from '../../img/hamburguer.png'
import { Form } from '../Form'

export const Main = () => {
    return (
        <main className="main">
            <div className="main-showcase">
                <div className='showcase-img'>
                    <img className='main-showcase__img' src={hamburguerImg} alt="" />
                </div>
                <h1 className="main-showcase__title">Oferta Picanha Cheddar Bacon</h1>
                <p>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim</p>
                <span className='main-showcase__amount'>R$ 31,99</span>
                <span className='main-showcase__amount --sale'><del>R$ 34,95</del></span>
            </div>
            <Form />
        </main>
    )
}

