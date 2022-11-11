import "./Leftbar.scss";
import Images from "../../assets/Images";
function Leftbar() {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={
                "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="user"
            />
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src={Images.Friends} alt="Friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Images.Groups} alt="Groups" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Images.Market} alt="Market" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Images.Events} alt="Events" />
            <span>Events</span>
          </div>
         
          <div className="item">
            <img src={Images.Gallery} alt="Gallery" />
            <span>Gallery</span>
          </div>
        </div>
        <hr />
        <div className="menu">
            <span>Your shortcuts</span>
            <div className="item">
              <img src={Images.Gaming} alt="Gaming" />
              <span>Gaming</span>
            </div>
            <div className="item">
              <img src={Images.Videos} alt="Videos" />
              <span>Videos</span>
            </div>
            <div className="item">
              <img src={Images.Tutorials} alt="Tutorials" />
              <span>Tutorials</span>
            </div>
          </div>
          <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Images.Watch} alt="Watch" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Images.Fund} alt="Fund" />
            <span>Fund</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
