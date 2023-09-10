import React, { useState, useEffect } from 'react';

const PhoneNumberInput = () => {
        const [countryCode, setCountryCode] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [countryCodes, setCountryCodes] = useState([]);

        useEffect(() => {
                // Fetch country code data from the API
                fetch('https://restcountries.com/v3.1/all')

                        .then((response) => {

                                // if (!response.ok) {
                                //         throw new Error('Network response was not ok');
                                // }
                                return response.json();
                        })
                        .then((data) => {
                                const codes = data.map((country) => ({

                                        name: country.name.common,
                                        alpha2Code: country.cca2,
                                }));
                                setCountryCodes(codes);
                        })
                        .catch((error) => {
                                console.error('Error fetching country codes:', error);
                        });
        }, []);

        const handleCountryCodeChange = (event) => {
                setCountryCode(event.target.value);
        };

        const handlePhoneNumberChange = (event) => {
                setPhoneNumber(event.target.value);
        };

        return (
                <div>
                        <div className="input-group mb-3">
                                <span className="input-group-text">
                                        <select
                                                className="form-select"
                                                onChange={handleCountryCodeChange}
                                                value={countryCode}
                                        >
                                                <option value="">Select Country</option>
                                                {countryCodes.map((code) => (
                                                        <option key={code.code} value={code.code}>
                                                                {code.name} ({code.code}){' '}
                                                                <img src={code.flag} alt={`${code.name} Flag`} width="24" height="16" />
                                                        </option>
                                                ))}
                                        </select>
                                </span>
                                <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Mobile Number"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                />
                        </div>
                        <p>
                                Selected Country Code: <strong>{countryCode}</strong>
                        </p>
                        <p>
                                Entered Phone Number: <strong>{phoneNumber}</strong>
                        </p>
                </div>
        );
};

export default PhoneNumberInput;
