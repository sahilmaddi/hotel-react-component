import React from 'react'
import "./Selector.css"
import popUp from './popUp';
const Selector = () => {
  return (
<div className="sc-fzpkqZ dQsCrs">  
    <div className="sc-fznAgC dOPEPt">
        <div className="sc-fznLPX cSRaiB">
            <svg stroke="currentColor" fill="currentColor" 
                stroke-width="0" viewBox="0 0 384 512" className="map-marker" 
                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg><div className="map_autocomplete">
                <input type="text" placeholder="Search “Hyderabad,Telangana”" 
                className="ant-input ant-input-lg pac-target-input"  autocomplete="off"/>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" 
        version="1.1" x="0px" y="0px" width="30" 
        height="30" viewBox="0 0 144.083 144" enable-background="new 0 0 144.083 144" 
        className="target">
        <path d="M117.292,69h-13.587C102.28,53.851,90.19,41.761,75.042,40.337V26.5h-6v13.837C53.893,41.761,41.802,53.851,40.378,69  H26.792v6h13.587c1.425,15.148,13.515,27.238,28.663,28.663V117.5h6v-13.837C90.19,102.238,102.28,90.148,103.705,75h13.587V69z   M72.042,97.809c-14.23,0-25.809-11.578-25.809-25.809c0-14.231,11.578-25.809,25.809-25.809S97.85,57.769,97.85,72  C97.85,86.23,86.272,97.809,72.042,97.809z">
        </path>
        <path d="M72.042,52.541c-10.729,0-19.459,8.729-19.459,19.459s8.729,19.459,19.459,19.459S91.5,82.729,91.5,72  S82.771,52.541,72.042,52.541z M72.042,85.459c-7.421,0-13.459-6.037-13.459-13.459c0-7.421,6.038-13.459,13.459-13.459  S85.5,64.579,85.5,72C85.5,79.422,79.462,85.459,72.042,85.459z"></path></svg></div><div className="sc-fznLPX cSRaiB">
            <svg stroke="currentColor" fill="currentColor" 
            stroke-width="0" viewBox="0 0 448 512" className="calendar" 
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 
                5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 
                12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 
                48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 
                400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z">
                </path>
            </svg>
        <div className="sc-fzqAbL hCuLgs date_picker">
        <div className="DateRangePicker DateRangePicker_1">
        <div>
        <div className="DateRangePickerInput DateRangePickerInput_1 DateRangePickerInput__withBorder DateRangePickerInput__withBorder_2 DateRangePickerInput__showClearDates DateRangePickerInput__showClearDates_3">
            <div className="DateInput DateInput_1 DateInput__small DateInput__small_2">
            <input className="DateInput_input DateInput_input_1 DateInput_input__small DateInput_input__small_2" aria-label="Start Date" type="text" id="startDateId-id-home" name="startDateId-id-home" placeholder="Start Date" autocomplete="off" aria-describedby="DateInput__screen-reader-message-startDateId-id-home" value=""/>
                <p className="DateInput_screenReaderMessage DateInput_screenReaderMessage_1" id="DateInput__screen-reader-message-startDateId-id-home">
                Navigate forward to interact with the calendar and select a date.
                 Press the question mark key to get the keyboard shortcuts for changing dates.
                 </p>
                </div>
                <div className="DateRangePickerInput_arrow DateRangePickerInput_arrow_1" 
                aria-hidden="true" role="presentation">-
                </div>
                <div className="DateInput DateInput_1 DateInput__small DateInput__small_2">
                <input className="DateInput_input DateInput_input_1 DateInput_input__small 
                DateInput_input__small_2"  aria-label="End Date" type="text" id="endDateId-id-home" name="endDateId-id-home" placeholder="End Date" autocomplete="off" aria-describedby="DateInput__screen-reader-message-endDateId-id-home" value=""/><p className="DateInput_screenReaderMessage DateInput_screenReaderMessage_1" id="DateInput__screen-reader-message-endDateId-id-home">
                   
                    </p>
                    </div>
                    <button type="button" aria-label="Clear Dates" 
                    className="DateRangePickerInput_clearDates DateRangePickerInput_clearDates_1 DateRangePickerInput_clearDates__small DateRangePickerInput_clearDates__small_2 DateRangePickerInput_clearDates_default DateRangePickerInput_clearDates_default_3 DateRangePickerInput_clearDates__hide DateRangePickerInput_clearDates__hide_4">
                        <svg className="DateRangePickerInput_clearDates_svg DateRangePickerInput_clearDates_svg_1 DateRangePickerInput_clearDates_svg__small DateRangePickerInput_clearDates_svg__small_2" focusable="false" viewBox="0 0 12 12">
                            <path fill-rule="evenodd" d="M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z">
                            </path>
                        </svg>
                    </button>
                </div></div></div></div></div><div className="sc-fznLPX cSRaiB"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="user-friends" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg><div className="sc-fzoydu ctZjfV view_with__popup room_guest ">
                    <div className="popup_handler">
                    <button type="button" className="ant-btn ant-btn-default" onClick={<popUp/>} 
                    ant-click-animating-without-extra-node="true">
                        <span>Room </span>
                        <span>-</span>
                        <span>Guest</span>
                    </button>
                </div>
                <div className="sc-fzqMAW fLHwCp popup_container"></div>
            </div>
            </div>
            <button type="submit" className="ant-btn ant-btn-primary ant-btn-lg">
                <span>Find Hotels</span>
            </button>
            </div>
            <div className="sc-fznMnq biVOqy glide__bullets" data-glide-el="controls[nav]"><button className="sc-fzoant hXtGXC glide__bullet" data-glide-dir="=0"></button><button className="sc-fzoant hXtGXC glide__bullet" data-glide-dir="=1"></button><button className="sc-fzoant hXtGXC glide__bullet glide__bullet--active" data-glide-dir="=2"></button></div>
            </div>
  )
}

export default Selector;