
export const CurrencyInfo = ({currencyData, selectedCurrencyToSend, selectedCurrencyToReceive, expirationTime}) =>{
    return(
        <>
            <div className='px-3 pt-4'>
                <div className='d-flex justify-content-between'>
                    <span className='fw-bold'>${currencyData ? currencyData.pct_fee : 0}</span>
                    <span className='fw-bold'>Percentage quotation fee</span>
                </div>
                <div className='d-flex justify-content-between pt-2'>
                    <span className='fw-bold'>${currencyData ? currencyData.fixed_fee : 0}</span>
                    <span>Fixed quotation fee</span>
                </div>
            </div>
            <hr />
            <div className='px-3'>
                <div className='d-flex justify-content-between'>
                <div className='d-block'>
                    <span className='fw-bold'>{currencyData ? `$${currencyData.balam_rate} ${selectedCurrencyToReceive} = $1 ${selectedCurrencyToSend}` : 'Cargando...'}</span>
                    <p className='validate-time'>*Válido por {expirationTime} minutos</p>
                </div>
                <span className='fw-bolder'>Balam Rate</span>
                </div>
            </div>
        </>
    )
}