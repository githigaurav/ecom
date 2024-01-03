import React from 'react'

function Tab({
    imgPath = "",
    imgInfo = "img_missing",
    boxStyle,
    btnStyle,
    handleTab,
    label,
    imgStyle
}) {
    return (
        <>
            <div
                className={`${boxStyle} flex gap-2  py-5 px-2 cursor-pointer`} onClick={handleTab}
            >
                <div>
                    <img
                        src={imgPath}
                        alt={imgInfo}
                        className={`w-[24px] h-[24px] ${imgStyle}`}
                    />
                </div>
                <div>
                    <p className={btnStyle}>{label}</p>
                </div>
            </div>

        </>
    )
} 

export default Tab