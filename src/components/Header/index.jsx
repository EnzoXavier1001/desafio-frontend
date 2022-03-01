import './styles.css'
import logoImg from '../../img/Deliverize.png'
import { FaUserCircle } from 'react-icons/fa'
import { BsCart3 } from "react-icons/bs";

export const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src={logoImg} alt="Logo" />
                </div>
                <div className="header-bag">
                    <div className='header-content'>
                        <label className='content-label__delivery' htmlFor="">Entrega:</label>
                        <select className='content-select__delivery'>
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

                    <button className='icons --cart'>
                        <BsCart3 size={25} color={'#ED3237'}/>
                        <span>Carrinho</span>
                    </button>

                </div>
            </div>
        </header>
    )
}