import React from 'react'

const popUp = () => {
  return (
    <div id="popup">
        <div>
            <div className="sc-fzoaKM hBStNt">
                <div className="sc-fzomuh gHzJiR">
                    <strong>Room</strong>
                    <div className="sc-fzoJMP kyojiS quantity">
                        <button className="btn decBtn" type="button">
                            <span role="img" aria-label="minus" className="anticon anticon-minus">
                                <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="minus" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                                </svg>
                            </span>
                        </button>
                        <input className="ant-input qnt-input" type="number" id="room" value="0"/>
                        <button className="btn incBtn" type="button">
                            <span role="img" aria-label="plus" className="anticon anticon-plus">
                                <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <defs>
                                        <style></style>
                                    </defs>
                                    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                                </svg>
                            </span>
                        </button>
                    </div></div><div className="sc-fzomuh gHzJiR"><strong>Guest</strong><div className="sc-fzoJMP kyojiS quantity"><button className="btn decBtn" type="button"><span role="img" aria-label="minus" className="anticon anticon-minus"><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="minus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></span></button><input className="ant-input qnt-input" type="number" id="guest" value="0"/><button className="btn incBtn" type="button"><span role="img" aria-label="plus" className="anticon anticon-plus"><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg></span></button></div></div></div></div></div>
  )
}
export default popUp;
