import React, { useState } from 'react'
import './style.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { tipState, appendPercentage } from '../../slices/tipCalc.slice';
interface Props {}

const TipPercentage: React.FC<Props> = () => {
  const {tipPercentage} = useAppSelector(tipState);
  const [btnType, setBtnType] = useState<string>("button");
  const dispatch = useAppDispatch();
  return (
      <div className='tip_percentage_container'>
        Select Tip %<br/>
        <input type="button"  value="5%"
        onClick={() => { dispatch(appendPercentage(5));  setBtnType("button") }} id={tipPercentage === 5 ? 'active': undefined}/>
        <input type="button"  value="10%" onClick={() => { dispatch(appendPercentage(10));  setBtnType("button") }} id={tipPercentage === 10 ? 'active': undefined}/>
        <input type="button"  value="15%" onClick={() => { dispatch(appendPercentage(15));  setBtnType("button") }} id={tipPercentage === 15 ? 'active': undefined}/>
        <input type="button"  value="25%" onClick={() => { dispatch(appendPercentage(25));  setBtnType("button") }} id={tipPercentage === 25 ? 'active': undefined}/>
        <input type="button"  value="50%" onClick={() => { dispatch(appendPercentage(50));  setBtnType("button") }} id={tipPercentage === 50 ? 'active': undefined}/>
        <input type={btnType} defaultValue="Custom" onClick={() => setBtnType("number")} onChange={(e) => dispatch(appendPercentage(parseInt(e.currentTarget.value)))}/>
    </div>
  )
}

export default TipPercentage;