import data from '../config/data';
import './body.css';

const Body=()=>{
    return(
     <div className="body">
      <p>How does it work?</p>
      <div className="body-card">
        {
        data.map((item)=>{
        return <div className="info-card" key={item.id}>
                <div className="info-icon">
                    <img src={item.path} alt="icon" />
                </div>
                <div className="comment">
                <div className="title" >
                    {item.title}
                </div>
                <div className="desc">
                    {item.desc}
                </div>
                </div>
            </div>
        })
        }
      </div>
     </div>
    )
}

export default Body;