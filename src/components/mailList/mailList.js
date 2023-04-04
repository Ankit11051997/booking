import "./maillist.css"
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailtitle">Save time,save money</h1>
      <span className="mailDesc">Sign up and we'll send you best deals</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button> subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
