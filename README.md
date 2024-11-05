# Balam Technical Challenge for Software Engineer - Quotation Component

This project is a currency conversion application that allows users to view real-time exchange rates and calculate the amount received when sending a specified amount of money in a selected currency.

## Description

The app is responsible for handling conversion data, including the details of the currency to send, the currency to receive, and exchange rates retrieved from the balam API. Users can select the sending and receiving currencies, view associated fees, and see the expiration time of the exchange rate.

## Key Features

- Currency selection for sending and receiving.
- Calculation of the amount received based on the exchange rate.
- Display of percentage and fixed fees applied to the transaction.
- Countdown timer for the exchange rate expiration.

## Project Structure

### Components

- **App**: The main component that organizes the UI and manages conversion logic.
- **SelectField**: Component for selecting currencies and handling input amounts.
- **CurrencyInfo**: Component that displays the fees, the current exchange rate, and the expiration time.
- **Footer**: Footer component (if included in the UI).

### Custom Hook

The `useCurrency` hook manages the conversion state, selected currencies, and retrieves data from the external API. The data from the API updates in real-time to reflect the current exchange rate and applied fees.

## Currency Conversion API

The app uses the balam API to fetch exchange rates and fees. The relevant data we retrieve from the API includes:

- **`pct_fee`**: The percentage fee applied to the transaction.
- **`fixed_fee`**: The fixed fee applied to the transaction.
- **`balam_rate`**: The current exchange rate between the sending and receiving currencies.
- **`expiration_ts`**: Expiration timestamp for the exchange rate in UTC format. The app uses this timestamp to calculate and display the remaining time until the rate expires.