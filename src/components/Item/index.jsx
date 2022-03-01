import './styles.css'
import {MdAdd, MdRemove} from 'react-icons/md'

export function Item({name, amount, onAdd, onRemove, value}) {
    return (
        <div className="form-group">
                <label className='form-group__product-name'>{name}</label>
                <div className='form-group__amount'>
                    <div>
                        <button 
                            disabled={value === 0 ? true : false} 
                            onClick={onRemove} 
                            className='button-amount --decrease'
                        >
                            <MdRemove color={value === 0 ? '#AEB6C1' : '#D80000'} size={24}/>
                        </button>
                        <p>{value}</p>
                        <button 
                            onClick={onAdd} 
                            className='button-amount --add'
                        >
                            <MdAdd size={24}/>
                        </button>
                    </div>
                </div>
                <input type="text" value={amount} disabled />
            </div>
    )
}