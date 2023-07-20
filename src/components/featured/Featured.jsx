import "./featured.css"
const Featured=()=>{
    return(
    <div className="featured">
        <div className="featuredItem">
            <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/21/dc/28/e0/fortune-pandiyan-hotel.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>34 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://i.pinimg.com/originals/6f/72/35/6f7235447ca2c37edf7df110269d363b.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>New York</h1>
                <h2>45 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://static.theprint.in/wp-content/uploads/2022/10/Hotel.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Noida</h1>
                <h2>40 Properties</h2>
            </div>
        </div>
    </div>
    )
}
export default Featured;