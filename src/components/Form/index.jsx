import { useState } from 'react'
import { MdAdd, MdRemove } from 'react-icons/md'
import './styles.css'

import { Item } from '../Item'
import { Popover } from '../Popover'


export const Form = () => {
    const [showModal, setShowModal] = useState(false)
    const [cheddarCheese, setCheddarCheese] = useState(0)
    const [crispyOnion, setCrispyOnion] = useState(0)
    const [cheddarSauce, setCheddarSauce] = useState(0)
    const [picanhaSauce, setPicanhaSauce] = useState(0)
    const [cutlery, setCutlery] = useState(0)

    function handleAddEvent() {
        setShowModal(true)
    }

    return (
        <div className="main-form">
            <div className='form-header'>
                <h2>Adicionar Ingredientes</h2>
                <p>Até 8 ingredientes</p>
            </div>
            <div className='form-container'>
                <Item 
                    name="Queijo cheddar" 
                    onAdd={() => setCheddarCheese(cheddarCheese + 1)} 
                    onRemove={() => setCheddarCheese(cheddarCheese - 1)} 
                    value={cheddarCheese} 
                    amount="+ R$ 4,99"
                />

                <Item 
                    name="Cebola crispy" 
                    onRemove={() => setCrispyOnion(crispyOnion - 1)} 
                    onAdd={() => setCrispyOnion(crispyOnion + 1)} 
                    value={crispyOnion} 
                    amount="+ R$ 1,50"
                />

                <Item 
                    name="Molho cheddar" 
                    onRemove={() => setCheddarSauce(cheddarSauce - 1)} 
                    onAdd={() => setCheddarSauce(cheddarSauce + 1)} 
                    value={cheddarSauce} 
                    amount="+ R$ 3,50"
                />

                <Item 
                    name="Molho de picanha" 
                    onRemove={() => setPicanhaSauce(picanhaSauce - 1 )} 
                    onAdd={() => setPicanhaSauce(picanhaSauce + 1)} 
                    value={picanhaSauce} 
                    amount="+ R$ 3,50" 
                />
                
                <div className="form-header">
                    <h2>Precisa de talher?</h2>
                </div>

                <div className='form-cutlery__mobile'>
                    <div className='cutlery'>
                        <label>Sim</label>
                        <input name='cutlery' type="radio" />
                    </div>
                    <div className='cutlery'>
                        <label>Não</label>
                        <input name='cutlery' type="radio" />
                    </div>
                </div>

                <div className="form-footer">
                    <div className='form-group__amount'>
                        <div>
                            <button 
                                disabled={cutlery === 0 ? true : false} 
                                onClick={() => setCutlery(cutlery - 1)} 
                                className='button-amount --decrease'
                            >
                                <MdRemove color={cutlery === 0 ? '#AEB6C1' : '#D80000'} />
                            </button>
                            <p>{cutlery}</p>
                            <button onClick={() => setCutlery(cutlery + 1)} className='button-amount --add'><MdAdd  /></button>
                        </div>
                    </div>
                    <button onClick={handleAddEvent} className='form-footer__add'>Adicionar</button>
                </div>
                
                {showModal && (
                    <Popover 
                        cheddarCheese={cheddarCheese}
                        crispyOnion={crispyOnion}
                        cheddarSauce={cheddarSauce}
                        picanhaSauce={picanhaSauce}
                        cutlery={cutlery}
                    />
                )}
            </div>
        </div>
    )
}