import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

import data from "./data.js"

export default function App() {
    
    const places = data.map(item=> {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            {places}
        </div>
    )
}