import React from 'react'

const Map = () => {
  return (
    <>
    <h3><center>Our Locations</center></h3>
    <div className="row g-0 d-flex align-items-center">
  <div className="col-lg-4 d-none d-lg-flex">
    <div className="map-container-2 w-60 mb-4 mb-lg-0">
      <iframe
        src="https://maps.google.com/maps?q=hyderabad&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        className="rounded-t-3 rounded-tr-lg-0 rounded-bl-lg-3"
        frameborder="0"
        allowfullscreen=""
        title="Hyderabad"
      /> 
      </div>&emsp;&emsp;
      <div className="map-container-2 w-60 mb-4 mb-lg-0">
       <iframe
        src="https://maps.google.com/maps?q=bangalore&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        className="rounded-t-3 rounded-tr-lg-0 rounded-bl-lg-3"
        frameborder="0"
        allowfullscreen=""
        title="Bangalore"
      />
      </div>&emsp;&emsp;
      <div className="map-container-2 w-60 mb-4 mb-lg-0">
       <iframe
        src="https://maps.google.com/maps?q=chennai&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        className="rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
        frameborder="0"
        allowfullscreen=""
        title="Chennai"
      />
      </div>&emsp;&emsp;
      <div className="map-container-2 w-60 mb-4 mb-lg-0">
      <iframe
       src="https://maps.google.com/maps?q=vijayawada&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
       className="rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
       frameborder="0"
       allowfullscreen=""
       title="Vijayawada"
     />
     </div>
    </div>&emsp;&emsp;
  </div>
</>
  )
}

export default Map
