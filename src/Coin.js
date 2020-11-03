import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render(){
        return(
            <div className='Coin'>
                <img src="/images/Bitcoin-Front.png" className="Coin-image" alt="Bitcoin Front (Heads)" />
                <p>(heads)</p>
            </div>
        )
    }
}

export default Coin;