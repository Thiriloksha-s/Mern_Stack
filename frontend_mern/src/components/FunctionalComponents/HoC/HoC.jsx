import Button from './Button'
import trackingMyButtonComp from './trackingMyButtonComp';
const HoC=()=>{
    const ButtonTrack=trackingMyButtonComp(Button)
     return (
        <div>
            <h1>Welcome to Higher Order Components</h1>
            <Button value={"Login"}/><br/>
            <ButtonTrack value={"Login"} trackingInfo={{"CustID":"Hello","password":"password"}}/>
        </div>
     )
}
export default HoC;