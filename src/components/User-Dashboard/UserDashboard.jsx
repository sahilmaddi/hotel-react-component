import React from "react";
import DatePickerDemo from "./DatePicker";
import "./UserDashboard.css";
import UserNavbar from "./UserNavbar";

const UserDashboard = () => {
  return (
    <>
    <UserNavbar/>
    <br/>
    <DatePickerDemo/>
    <br/>
    <div className="mt-5">
      <div className="container">
        <div className="row bs p-3 m-5">
          <div className="col-md-4">
            <div className="ant-picker ant-picker-range m-2">
              <div className="ant-picker-input ant-picker-input-active">
                <input
                  readOnly=""
                  placeholder="Start date"
                  size="12"
                  autoComplete="off"
                />
             
              <div className="ant-picker-range-separator">
                <span aria-label="to" className="ant-picker-separator">
                  <span
                    role="img"
                    aria-label="swap-right"
                    className="anticon anticon-swap-right"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      focusable="false"
                      data-icon="swap-right"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div className="ant-picker-input">
                <input
                  readOnly=""
                  placeholder="End date"
                  size="12"
                  autoComplete="off"
                />
              </div>
              </div>
              <div className="ant-picker-active-bar"></div>
              <span className="ant-picker-suffix">
                <span
                  role="img"
                  aria-label="calendar"
                  className="anticon anticon-calendar"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="calendar"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                  </svg>
                </span>
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control i2 m-2"
              placeholder="Search Rooms"
            />
          </div>
          <div className="col-md-4">
            <select className="form-control m-2">
              <option value="all">All</option>
              <option value="delux">Delux</option>
              <option value="non-delux">Non Delux</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Test</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 10</b>
              </p>
              <p>
                <b>Phonenumber : </b>777777777
              </p>
              <p>
                <b>Type : Large</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Test</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 10</b>
              </p>
              <p>
                <b>Phonenumber : </b>777777777
              </p>
              <p>
                <b>Type : Large</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Test</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 10</b>
              </p>
              <p>
                <b>Phonenumber : </b>777777777
              </p>
              <p>
                <b>Type : Large</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Test</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 10</b>
              </p>
              <p>
                <b>Phonenumber : </b>777777777
              </p>
              <p>
                <b>Type : Large</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Test</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 10</b>
              </p>
              <p>
                <b>Phonenumber : </b>777777777
              </p>
              <p>
                <b>Type : Large</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Test</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 10</b>
              </p>
              <p>
                <b>Phonenumber : </b>777777777
              </p>
              <p>
                <b>Type : Large</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Test</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 10</b>
              </p>
              <p>
                <b>Phonenumber : </b>777777777
              </p>
              <p>
                <b>Type : Large</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="xvxcv" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="xvxcv" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="xvxcv" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="xvxcv" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="xvxcv" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="xvxcv" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919600053363
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="xvxcv" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>9999999999
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="xvxcv" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>+919999999999
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="xvxcv" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>101</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 2</b>
              </p>
              <p>
                <b>Phonenumber : </b>919999999999
              </p>
              <p>
                <b>Type : delux</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>102</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 1</b>
              </p>
              <p>
                <b>Phonenumber : </b>919999999999
              </p>
              <p>
                <b>Type : del</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>102</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 1</b>
              </p>
              <p>
                <b>Phonenumber : </b>919999999999
              </p>
              <p>
                <b>Type : del</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>103</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 3</b>
              </p>
              <p>
                <b>Phonenumber : </b>9139561142
              </p>
              <p>
                <b>Type : deluxe</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>103</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 3</b>
              </p>
              <p>
                <b>Phonenumber : </b>9139561142
              </p>
              <p>
                <b>Type : deluxe</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>103</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 3</b>
              </p>
              <p>
                <b>Phonenumber : </b>9139561142
              </p>
              <p>
                <b>Type : deluxe</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 aos-init" data-aos="zoom-in">
          <div className="row m-3 p-3 bs">
            <div className="col-md-4">
              <img src="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>103</h1>
              <p>Parking , Reception , Free Wifi</p>
              <p>
                <b>Max Count : 3</b>
              </p>
              <p>
                <b>Phonenumber : </b>9139561142
              </p>
              <p>
                <b>Type : deluxe</b>
              </p>
              <div>
                <button className="btn btn-danger m-2">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserDashboard;
