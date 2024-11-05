import balam from '../assets/balam-logo.png'


export const Footer = () =>{
    return(
        <>
            <span>Tu dinero llega en 15 minutos</span>
            <div className='d-flex justify-content-end button-container'>
                <button className='send-button'>Enviar ahora</button>
            </div>
            <div className="powered-by d-flex align-items-center">
                <span>Powered by</span>
                <img src={balam} alt="balam logo" className="balam-logo" />
            </div>
        </>
    )
}