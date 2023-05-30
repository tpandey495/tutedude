const Card=()=>{
 return( 
   <div className="Referral">
      <div className="card">
         <div className="desc">
            <ul>
            <li>Referral Earning</li>
            <li className="txt">&#8377;2500</li>
            </ul>
            <ul>
            <li>Total Referrals</li>
            <li className="txt">7</li>
            </ul>
            <ul>
            <li>Wallet Balance</li>
            <li className="txt">&#8377;500</li>
            </ul>
         </div>
         <button>withdraw Balance</button>
      </div>
      <div className="referral-code">
         <p className="referral-desc">Your Referral Code</p>
         <p className="code">EDCH54</p>
      </div>
   </div>
 )
}


export default Card;