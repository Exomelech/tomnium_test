import React from 'react';
import api_dump from '../api_dump/api_dump.json';

const fake_fetch = () => {
  return new Promise( (res, rej) => {
    res( api_dump )
  })
}

const Item = ({ currency, value}) => {
  return( 
    <li className='currency__list-item'>
      <div className='currency__item'>
        <div className='item__currency'>{currency}</div>
        <div className='item__value'>{`: ${value}`}</div>
      </div>
    </li> 
  );
};


export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
      rates: {}
    };
  };

  async componentDidMount(){
    const res = await fake_fetch()
    this.setState({
      rates: res.rates
    });
  };

  render(){

    const { rates } = this.state;
    const items = [];

    for( const [k,v] of Object.entries(rates) ){
      items.push(<Item
        currency={k}
        value={v}
        key={items.length}
      />)
    };

    return(
      <div className='dashboard'>
        <p className='dashboard__title'>Tomnium test app</p>
        <ol className='currency__list'>{items}</ol>
      </div>
    );
  };

};