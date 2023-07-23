import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import "./hotel.css"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import {useState} from "react"
const Hotel = () => {
    const[slideNumber, setSlideNumber]=useState(0);
    const[open, setOpen]=useState(false);
    const photos = [
        {
            src: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
        },
        {
            src: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
        },
        {
            src: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
        },
        {
            src: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
        },
        {
            src: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
        },
        {
            src: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
        }
    ]
    const handleOpen=(i)=>{
        setSlideNumber(i);
        setOpen(true)
    }
    const handleMove=(direction)=>{
   let newSliderNumber;
   if(direction==="l")
      newSliderNumber= slideNumber===0? 5: slideNumber-1;
   else if(direction==="r")
      newSliderNumber= slideNumber===5? 0: slideNumber+1;
      setSlideNumber(newSliderNumber)
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon className="close" icon={faCircleXmark} onClick={()=>{setOpen(false)}}/>
                    <FontAwesomeIcon className="arrow" icon={faCircleArrowLeft} onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon className="arrow" icon={faCircleArrowRight} onClick={()=>handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book now</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">
                        Excellemt location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo ,i)=> (
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero unde eveniet deserunt illum harum veniam, repellendus doloribus quam rem ducimus cum maiores labore ut suscipit exercitationem. Temporibus deleniti earum amet rem officia modi doloribus, error suscipit maxime? Eum consectetur neque repudiandae tempora doloribus dignissimos exercitationem soluta dolores facere praesentium alias architecto et nemo, est rem minima delectus numquam non, eius ad. Voluptatibus aliquam assumenda labore recusandae odit autem, cumque ad debitis dolore, tempore, omnis libero maxime suscipit dolores iste quo maiores inventore animi explicabo aliquid sed ipsam perferendis a cupiditate. Iure, id obcaecati. Veniam expedita eius mollitia a quam?
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, repellendus.</span>
                            <h2>
                                <b>$945</b>(9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}
export default Hotel