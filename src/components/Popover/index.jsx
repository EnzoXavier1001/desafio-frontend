import './styles.css'

export function Popover({ cheddarCheese, crispyOnion, cheddarSauce, picanhaSauce,  cutlery}) {

    return (
        <div className="popover-container">
                <div className="popover-header">
                    <h1 className="popover-header__title">Adicionando com Sucesso</h1>
                </div>

                <div className="popover-content">
                    <h2 className='popover-content__title'>Oferta Cheddar Bacon</h2>
                    <p>Ingredientes:</p>
                    <ul className="popover-list">
                        <li>1 Carne 250gr</li>
                        {cheddarCheese > 0 && (
                            <li>{cheddarCheese} Queijo Cheddar</li>
                        )}
                        {crispyOnion  > 0 && (
                            <li>{crispyOnion} Cebola Crispy</li>
                        )}
                        {cheddarSauce > 0 && (
                            <li>{cheddarSauce} Molho Cheddar</li>
                        )}
                        {picanhaSauce > 0 && (
                            <li>{picanhaSauce} Molho de Picanha</li>
                        )}
                    </ul>
                        {cutlery > 0 && (
                            <p>Precisa de talheres: {cutlery} {cutlery === 1 ? 'unidade' : 'unidades'} </p>
                        )}
                </div>
        </div>
    )
}