import { Button, Typography, TextField, Paper, MenuItem } from "@mui/material";
import React, { useState, ReactElement } from "react";
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';

const Home = ({ setLogin }: { setLogin: any }) => {
    // const [address, setAddress] = useState<string>("");
    // const handleSelect= async (value:any, placeId:any)=>{
    //     const res = await geocodeByAddress(value);
    //     const lt = await getLatLng(res[0]);
    //     const [place] = await geocodeByPlaceId(placeId);
    //     const { long_name: postalCode = '' } =
    //     place.address_components.find(c => c.types.includes('postal_code')) || {};
    //     console.log("postalCode",postalCode);
    //     setAddress(value);
    // }
  return (
    <>
      <Typography>Home page</Typography>
      <a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">Click to Send an Email</a>
      {/* <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <TextField
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
                variant: "outlined",
              })}
            />
            <Paper className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#93B1A6", cursor: "pointer" }
                  : { backgroundColor: "#5C8374", cursor: "pointer" };
                return (
                  <MenuItem
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </MenuItem>
                );
              })}
            </Paper>
            </>
        )}
      </PlacesAutocomplete> */}
    </>
  );
};

export default Home;
