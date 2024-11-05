import './App.css'
import { SelectField } from './components/SelectField';
import { Footer } from './components/Footer';
import { CurrencyInfo } from './components/CurrencyInfo';
import { useCurrency } from './hooks/useCurrency';
import { currencyToReceive, currencyToSend } from './utils/currencies';

function App() {
  const { sendCurrency, receiveCurrency, currencyData, expirationTime } = useCurrency()

  return (
    <section>
      <div className='main-container d-flex justify-content-center align-items-center pt-4'>
        <div>
          <div>
            <span>Tu envias exactamente</span>
          </div>
          <SelectField 
              currencies={currencyToSend}
              setAmount={sendCurrency.setAmountToSend}
              amount={sendCurrency.amountToSend}
              selectedCurrency={sendCurrency.selectedCurrencyToSend}
              setSelectedCurrency={sendCurrency.setSelectedCurrencyToSend}
              readOnly={false}
          />
          <CurrencyInfo currencyData={currencyData} expirationTime={expirationTime} selectedCurrencyToReceive={receiveCurrency.selectedCurrencyToReceive} selectedCurrencyToSend={sendCurrency.selectedCurrencyToSend} />
          <div>
            <span>Recibes exactamente</span>
          </div>
          <SelectField 
            currencies={currencyToReceive}
            setAmount={receiveCurrency.setAmountToReceive}
            amount={receiveCurrency.amountToReceive.toFixed(2)}
            selectedCurrency={receiveCurrency.selectedCurrencyToReceive}
            setSelectedCurrency={receiveCurrency.setSelectedCurrencyToReceive}
            readOnly={true}
          />
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default App
