import React, { useState } from "react";
import './gallery.css'
import CloseIcon from '@mui/icons-material/Close';
import Img1 from './images/i1.jpg';
import Img2 from './images/i2.jpg';
import Img3 from './images/i4.jpg';
import Img4 from './images/i3.jpg';
import Img5 from './images/i5.jpg';
import Img6 from './images/i6.jpg';
import Img7 from './images/i7.jpg';
import Img8 from './images/i8.jpg';
import Img9 from './images/i9.jpg';
import Img10 from './images/i10.jpg';
import Img11 from './images/i11.jpg';
import Img12 from './images/i12.jpg';
import Img13 from './images/i13.jpg';
import Img14 from './images/i14.jpg';
import Img15 from './images/i15.jpg';
import Img16 from './images/i16.jpg';
import Img17 from './images/i17.png';





const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
     
        {
            id: 7,
            imgSrc: Img7,
        },
        
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
       
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
      
        {
            id: 15,
            imgSrc: Img15,
        },
        {
            id: 16,
            imgSrc: Img16,
        },
        {
            id: 17,
            imgSrc: Img17,
        },

        {
            id: 10,
            imgSrc: Img10,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempingSrc , setTemptingSrc] = useState('');
    const getImg = (imgSrc) => {
        setTemptingSrc(imgSrc);
        setModel(true);
    }
    return (
        <>

         <div className={model?"model open":"model"}>
              <img src={tempingSrc} />
              <CloseIcon onClick={() =>  setModel(false)}/>
         </div>
            <div className="gallery">
                {data.map((item, index) => {
                    return (

                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery;