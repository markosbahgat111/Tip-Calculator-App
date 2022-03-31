import { createSlice, current, PayloadAction, createAction } from "@reduxjs/toolkit";
import { RootState } from '../store/store';



interface TIPSTATE{
    bill: number |null,
    tipPercentage: number |null,
    numberOfPeople: number | null,
    tipAmount:number | null,
    total:number | null,
}

const initialState: TIPSTATE = {
    bill: null,
    tipPercentage: 15,
    numberOfPeople: null,
    tipAmount:null,
    total:null,
}

const tipSlice = createSlice({
    name: "tip",
    initialState,
    reducers: {
        appendPercentage: (state, action:PayloadAction<number>) => {
            state.tipPercentage = action.payload;
        },
        appendTotalAmount: (state, action:PayloadAction<number>) => {
            state.bill = action.payload;
        },
        resetValues: (state) => {
            state.bill = null;
            state.tipPercentage = 15;
            state.numberOfPeople = null;
            state.tipAmount = null;
            state.total = null;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(appendNumberOfPeople, (state, action) => {
            state.numberOfPeople = action.payload;
            const { bill, numberOfPeople, tipPercentage, tipAmount, total } = state;
            console.log("bulkdfjas ouoiu");
            console.log(current(state), action);
            if (bill && numberOfPeople && tipPercentage) {
                state.tipAmount = (bill / numberOfPeople) * (tipPercentage / 100);
                state.total = (bill / numberOfPeople) + ((bill / numberOfPeople) * (tipPercentage / 100));
                
            }
            console.log(current(state), action);
            
            
        })
    }

})

export const appendNumberOfPeople = createAction<number>("numOfPeople");
export const tipState = (state: RootState) => state.tip;
export const TipReducer = tipSlice.reducer;
export const { appendTotalAmount, appendPercentage, resetValues } = tipSlice.actions;