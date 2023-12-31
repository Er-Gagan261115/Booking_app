import "./header.css"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
// format is used to convert date to redable string format
import { format } from "date-fns";
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
    const navigate=useNavigate();
    const [destination, setDestination] = useState("");
    const [showDate, setShowDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        rooms: 1
    })
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    }
    const handleSearch=()=>{
        // we can also send state in navigation .
        navigate("/hotels",{state: {destination, date, options}});
        
    }
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode":"headerContainer"}>
                <div className="headerList">
                    <div className="headerListItems active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                
                { type!== "list" &&
                    <>
                    <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                <p className="headerDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur.
                </p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input
                            type="text"
                            placeholder="Choose Destination?" 
                            className="headerSearchInput" 
                            onChange={e=>setDestination(e.target.value)}
                            />
                            
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span className="headerSearchText" onClick={() => setShowDate(!showDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {showDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                            className="date"
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adults · ${options.children} children · ${options.rooms} rooms`}</span>
                        {openOptions && < div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adults</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.adult <= 1}
                                        className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                    <span className="optionCounterNumer">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.children <= 0}
                                        className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                    <span className="optionCounterNumer">{options.children}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Rooms</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.rooms <= 1}
                                        className="optionCounterButton" onClick={() => handleOption("rooms", "d")}>-</button>
                                    <span className="optionCounterNumer">{options.rooms}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("rooms", "i")}>+</button>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </>}
            </div>
        </div>
    )
}
export default Header