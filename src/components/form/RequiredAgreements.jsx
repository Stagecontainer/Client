
import theme from "../../styles/theme"
import Circle from "../../assets/icon/circle-icon.svg?react"
import ActiveCircle from "../../assets/icon/activecircle-icon.svg?react"
import Right from "../../assets/icon/right-icon.svg?react"
import {Agree} from "../../styles/components/loginjoin/LoginJoinPage";

const RequiredAgreements = ({text, marginBottom, isActive, onClick}) => {


    return (
        <div onClick={onClick} style={{ display: "flex", marginBottom: marginBottom}}>
        
          {isActive? <ActiveCircle/> : <Circle />}
          <Agree>
            <div>
              <span style={{ marginRight: "10px", color: `${theme.color.main}`, textDecoration: "underline" }}>필수</span>
              <span>{text}</span>
            </div>
            <div style={{ display: "flex"}}> 
              <span style={{ marginRight: "4px", fontSize: "12px", fontWeight:"400" }}>전문보기</span>
              <Right />
            </div>
          </Agree>
          </div>

    );
};

export default RequiredAgreements;