import { useEffect, useState } from "react"

const getExpirationTime = (expiration, setExpirationTime) => {
    const expirationTime = new Date(expiration);

    const calculateTimeRemaining = () => {
        const currentTimeUTC = new Date();
        const currentTimeCST = new Date(currentTimeUTC.setHours(currentTimeUTC.getUTCHours() - 6));

        const timeDiff = expirationTime - currentTimeCST;

        if (timeDiff > 0) {
            const minutes = Math.floor(timeDiff / (1000 * 60));
            setExpirationTime(minutes);
        } else {
            setExpirationTime(0);
            clearInterval(interval);
        }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 60000);

    return () => clearInterval(interval);
}

export const useCurrency = () =>{
    const [amountToSend, setAmountToSend] = useState(3)
    const [selectedCurrencyToSend, setSelectedCurrencyToSend] = useState('USD')
    const [amountToReceive, setAmountToReceive] = useState(1)
    const [selectedCurrencyToReceive, setSelectedCurrencyToReceive] = useState('MXN')
    const [currencyData, setCurrencyData] = useState()
    const [expirationTime, setExpirationTime] = useState(10)

    useEffect(() =>{
        if(amountToSend > 2){
        fetch(`${import.meta.env.VITE_API_URL}/quotes?amount=${amountToSend}&base_currency=${selectedCurrencyToSend}&quote_currency=${selectedCurrencyToReceive}`, {
            headers: {
            'x-api-key': import.meta.env.VITE_API_KEY
            }
        }).then((response) => response.json()).then((data) => {
            setAmountToReceive(amountToSend * data.data.balam_rate)
            setCurrencyData(data.data)

            getExpirationTime(data.data.expiration_ts, setExpirationTime)
        })
        .catch((error) => console.error('Error fetching exchange rate:', error));
        }
    }, [amountToSend, selectedCurrencyToSend, selectedCurrencyToReceive])

    const sendCurrency = {
        amountToSend,
        selectedCurrencyToSend,
        setAmountToSend,
        setSelectedCurrencyToSend,
    };
    
    const receiveCurrency = {
        amountToReceive,
        selectedCurrencyToReceive,
        setAmountToReceive,
        setSelectedCurrencyToReceive,
    };
    
    return {
        sendCurrency,
        receiveCurrency,
        currencyData,
        expirationTime,
    };
}