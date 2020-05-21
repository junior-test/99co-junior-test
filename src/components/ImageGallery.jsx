import React, { useState } from 'react'
import styled from 'styled-components'

const S_ImageGallery = styled.div`
    .container{
        position: relative;
        width: 350px;
        height: 270px;
    }

    .background-image {
        width: 350px;
        height: 270px;
        position: absolute;
        left: 0;
        border-radius: 5px 5px 0 0;
    }

    .left-button{
        display:flex;
        position: absolute;
        width: 15%;
        height: 100%;
        left: 0;
        z-index: 1;
        font-weight: 400;
        font-size: 200%;
        color: #555;
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }

    .left-button:hover{
        color: white;
    }
    
    .right-button{
        display:flex;
        position: absolute;
        width:15%;
        height:100%;
        right:0;
        z-index: 1;
        font-weight:400;
        font-size: 200%;
        color: #555;
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }

    .right-button:hover{
       color:white;
    }

    .close{
        display: none;
    }

    .image-count {
        position: absolute;
        display: flex;
        z-index: 1;
        bottom: 0;
        left:0;
        padding: 10px;
        color:white;
        text-shadow: 1px 1px black;
    }
    
`

const ImageGallery = ({images}) => {
    const [index, setIndex] = useState(0)
    const countLabel = index+1 + '/' + images.length
    return (
        <S_ImageGallery>
            <div class={`container`}>
                <img key={index} src={images[index].url} className={`background-image`}/>
                <div className={index>0 ? `left-button` : `close`} onClick={()=>setIndex(index-1)}> {`〈  `} </div>
                <div className={index < (images.length-1) ? `right-button` : `close`} onClick={()=>setIndex(index+1)}>{`  〉`}</div>
                <div className={`image-count`}>{countLabel}</div>
            </div>
        </S_ImageGallery>
    )
}

export default ImageGallery
