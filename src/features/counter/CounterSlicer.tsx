import React from 'react'
import {createSlice } from "@reduxjs/toolkit"

export const CounterSlicer = createSlicer({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers:{
        increment: (state: number) => {
            state.value += 1
        }
    }
})
