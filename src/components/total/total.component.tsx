import React from 'react'
import './style.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { resetValues, tipState } from '../../slices/tipCalc.slice';

interface Props {}

const Total = (props: Props) => {
    const state = useAppSelector(tipState);
    const dispatch = useAppDispatch();
  return (
      <div className='total_container'>
          <div className="tip_amount">
                <p>
                    <span>
                      Tip Amount <br />
                      <small>/person</small>
                    </span>
                    <strong>
                        ${state.tipAmount ? Number((state.tipAmount).toFixed(2)) : " 0.0"}
                    </strong>
                </p>
          </div>
          <div className="total">
                <p>
                    <span>
                      Total <br />
                      <small>/person</small>
                    </span>
                    <strong>
                        ${state.total ? Number((state.total).toFixed(2))  : " 0.0"}
                    </strong>
                </p>
          </div>
          <button type="reset" onClick={() => dispatch(resetValues())}>
              RESET
          </button>
    </div>
  )
}

export default Total