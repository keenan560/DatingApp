import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API_KEY} from 'react-native-dotenv';

const AddressInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      styles={{height: 20, width: 100}}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en',
      }}
    />
  );
};

export default AddressInput;
