export const SelectField = ({currencies, setAmount, amount, selectedCurrency, setSelectedCurrency, readOnly}) =>{
  
    return (
        <div className="currency-selector-container d-flex justify-content-center align-items-center">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          readOnly={readOnly}
          className="currency-input fw-bold"
        />
        <div className="currency-container">
          <img
            src={currencies.find((currency) => currency.name === selectedCurrency)?.image}
            alt={`${selectedCurrency} flag`}
            className="currency-flag"
          />
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="currency-select"
          >
            {currencies.map((currency, index) => (
              <option key={index} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
}