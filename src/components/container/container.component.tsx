import TipPercentage from 'components/tipPercentage/tipPercentage.component';
import Total from 'components/total/total.component';
import React from 'react'
import './style.scss';
import dollarIcon from 'assets/images/icon-dollar.svg';
import personIcon from 'assets/images/icon-person.svg';
import { useAppDispatch } from 'store/hooks';
import { appendTotalAmount, appendNumberOfPeople } from 'slices/tipCalc.slice';
import { useAppSelector } from '../../store/hooks';
import { tipState } from '../../slices/tipCalc.slice';

interface Props {}

const Container: React.FC<Props> = () => {
    const state = useAppSelector(tipState);
    const dispatch = useAppDispatch();
  return (
    <div className='container'>
        <div className='bill_container'>
            <div className='input_container'>
                <label>Bill</label>
                <input type="number" value={state.bill ? state.bill : ''} onChange={(e) => dispatch(appendTotalAmount(parseFloat(e.currentTarget.value)))}/>
                  <img src={dollarIcon} alt="dollarIcon"/>
            </div>
            <TipPercentage/>
            <div className='input_container'>
                <label>Number Of People</label>
                <input type="number" value={state.numberOfPeople ? state.numberOfPeople : ''}  onChange={(e) => dispatch(appendNumberOfPeople(parseFloat(e.currentTarget.value)))}/>
                <img src={personIcon} alt="personIcon"/>
            </div>
        </div>
        <Total/>
    </div>
  )
}

export default Container