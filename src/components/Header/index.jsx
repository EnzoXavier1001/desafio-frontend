import './styles.css'
import logoImg from '../../img/Deliverize.png'
import { FaUserCircle } from 'react-icons/fa'
import { BsCart3 } from "react-icons/bs";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <img src={logoImg} alt="Logo" />
                </div>
                <div className="header-bag">
                    <div className='teste'>
                        <label className='label_delivery' htmlFor="">Entrega:</label>
                        <select className='delivery'>
                            <option value="address">R. Antonio Bueno, 222</option>
                        </select>
                    </div>

                    <input 
                        className='input-search' 
                        type="text" 
                        placeholder='Busque por estabelecimentos ou produtos' 
                    />

                    <button className='icons'>
                        <FaUserCircle size={25} color={'#ED3237'} />
                        <span>Entrar</span>
                    </button>

                    <button className='icons'>
                        <BsCart3 size={25} color={'#ED3237'}/>
                        <span>Carrinho</span>
                    </button>

                </div>
            </div>
        </header>
    )
}