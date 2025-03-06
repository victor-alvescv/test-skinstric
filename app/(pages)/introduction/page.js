"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { useRouter } from  'next/navigation';

function Introduction() {
  const [name, setName] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [location, setLocation] = useState("");
  const [showLocation, setShowLocation] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);
  const [isLocationSelected, setisLocationSelected] = useState(false);  
  const router = useRouter(); 


  const GOOGLE_MAPS_API_KEY = "AIzaSyDRRUxxF3WJwDJwmuSKZHM61vqIc4UXdAo";

  const handleProceed = () => {
    setShowLocation(true);
    setIsTyping(false);
  };

  const handleBack = () => {
    setShowLocation(false);
    setIsTyping(true);
  };

  const handleClick = () => {
    setIsTyping(true);
  };

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        setLocation(place.formatted_address);
      } else if (place.name) {
        setLocation(place.name);
      }
    }
    setisLocationSelected(true);
    postData()
  };

const handlePlaceProceed = () => {
  if (isLocationSelected) {
    router.push("/testing");
  }
};


  const postData = async () => {
    try {
      const response = await axios.post(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
        {
          name: name,
          location: location,
        }
      );

      console.log(response.data); // Log the response data if needed
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <div className="flex flex-col flex-auto">
        <nav className="items-center flex h-16 justify-between left-0 fixed top-0 w-full z-30 mx-auto max-w-[2560px] px-8">
          <div className="flex items-center relative z-30 ">
            <Link
              href="/"
              className="font-bold text-[10px]"
              style={{ fontSize: "clamp(10px, 2px + 0.625vw, 14px)" }}
            >
              SKINSTRIC
            </Link>
          </div>
        </nav>
        <main className="relative flex flex-col flex-auto">
          <div className="flex flex-auto flex-col pb-9 relative mx-auto max-w-[2560px] px-8 w-full">
            <div className="absolute left-8 top-[86px] block overflow-hidden">
              <h1
                className="font-semibold tracking-[-.02em] leading-5"
                style={{ fontSize: "clamp(10px,-2px + .9375vw,16px)" }}
              >
                TO START ANALYSIS
              </h1>
            </div>
            <div className="introduction-square js-introduction-square">
              <span className="dotted-square is-expanded is-animated"></span>
            </div>
            <div className="items-center flex flex-col justify-center left-1/2 absolute text-center top-1/2 translate-x-[-50%] translate-y-[-50%]">
              <div
                style={{ fontSize: "clamp(10px,-6px + 1.5625vw,14px)" }}
                className="bottom-[100%] mb-1 opacity-40 absolute uppercase font-normal tracking-[0] leading-[1.71]"
              >
                {showLocation ? "Enter Location" : "Click to type"}
              </div>
              <form>
                <div className="py-[5px] relative">
                  <>
                    {!showLocation ? (
                      <>
                        <input
                          type="text"
                          value={name}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                          style={{
                            width: "calc((18ch - 5.5ch))",
                            fontSize: "clamp(44px, 12px + 2.5vw, 60px)",
                          }}
                          onChange={(e) => setName(e.target.value)}
                          className="border-b-[1px] bg-transparent border-[#1a1b1c] py-[5px] text-center outline-none text-[#1a1b1c] border-solid leading-[1] tracking-[-.07em]"
                        />
                        <label
                          style={{
                            width: `calc((18ch - 5.5ch))`,
                            fontSize: "clamp(44px, 12px + 2.5vw, 60px)",
                          }}
                          className={`text-[#1a1b1c] transition-all ${
                            isFocused || name.length > 1
                              ? "opacity-0"
                              : "opacity-1"
                          }
                              text-center leading-[1.33] left-0 top-[5px] absolute name-label pointer-events-none tracking-[-.07em] `}
                        >
                          Introduce Yourself
                        </label>
                      </>
                    ) : (
                      <>
                        <LoadScript
                          googleMapsApiKey={GOOGLE_MAPS_API_KEY}
                          libraries={["places"]}
                          className="w-full"
                        >
                          <Autocomplete
                            className="w-full"
                            onLoad={onLoad}
                            onPlaceChanged={onPlaceChanged}
                          >
                            <input
                              style={{
                                width: "calc((21ch - 5.5ch))",
                                fontSize: "clamp(44px, 12px + 2.5vw, 60px)",
                              }}
                              placeholder={
                                isFocused && name.length > 1
                                  ? "Enter a location"
                                  : ""
                              }
                              onFocus={() => setIsFocused(true)}
                              onBlur={() => setIsFocused(false)}
                              onChange={(e) => setLocation(e.target.value)}
                              className="border-b-[1px] bg-transparent border-[#1a1b1c] py-[5px] text-center outline-none text-[#1a1b1c] border-solid leading-[1] tracking-[-.07em]"
                              type="text"
                              value={location}
                            ></input>
                          </Autocomplete>
                        </LoadScript>

                        <label
                          style={{
                            width: `calc((21ch - 5.5ch))`,
                            fontSize: "clamp(44px, 12px + 2.5vw, 60px)",
                          }}
                          className={`text-[#1a1b1c] ${
                            isFocused || location.length > 0
                              ? "opacity-0"
                              : "opacity-1"
                          } text-center transition-all leading-[1.33] left-0 top-[5px] name-label absolute pointer-events-none tracking-[-.07em]`}
                        >
                          Where are you from?
                        </label>
                      </>
                    )}
                  </>
                </div>
              </form>
            </div>
            <div className="items-center flex mt-auto">
              <div className="mr-auto flex-none flex-shrink basis-1/4 pr-2.5 text-color-color">


              <button 
                onClick={handleBack}
                className="button__back">
                  <div className="flex justify-center item-center gap-2">
                    <img
                      src="/arrow-left-circle.svg"
                      className="w-[30px] h-[30px]"
                      alt="Arrow left"
                    />
                  <span className="padding-right: 18px pt-1 transition-transform duration-500 ease-custom-bezier">
                    BACK
                  </span>
                  </div>
                </button>

              </div>
              <div className="ml-auto flex-none flex justify-end git add flex-shrink basis-1/4 pr-2.5 text-color-color">
                {!showLocation && name && (
                  <button onClick={handleProceed} className="button__proceed">
                  <div className="flex justify-center item-center gap-2">
                    <span className="padding-right: 18px pt-1 transition-transform duration-500 ease-custom-bezier">
                      PROCEED
                    </span>
                      <img
                        src="/arrow-right-circle.svg"
                        className="w-[30px] h-[30px]"
                        alt="Arrow right"
                      />
                    </div>
                    </button>
                )}

{showLocation && isLocationSelected && (
                <button onClick={handlePlaceProceed} className="button__proceed">
                <div className="flex justify-center item-center gap-2">
                  <span className="padding-right: 18px pt-1 transition-transform duration-500 ease-custom-bezier">
                    PROCEED
                  </span>
                    <img
                      src="/arrow-right-circle.svg"
                      className="w-[30px] h-[30px]"
                      alt="Arrow right"
                    />
                  </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Introduction;