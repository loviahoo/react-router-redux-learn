import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

// ES6的 class来定义一个组件 app组件
// 在React中，共享state状态是通过将其移动到需要它的组件的最接近的父组件来实现的，这成为状态提升lifting state up，我们将从temperatureInput中移除相关状态本地状态，并将其移动到calculator中，如果calcutor拥有共享状态，那么它将成为两个输入当前温度的单一数据来源，指示具有批次一直的值，由于两个TemperatureTnput组件的props都来自同一个父级calcutor组件，两个输入将始终保持同步

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
  
  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  // 温度计判断
  function BiolingVerdict(props) {
    if(props.celsius >=  100){
      return <p>The water would boil.</p>
    }
    return <p>The water would not boil</p>
  }
  class Calculator extends React.Component {
    constructor(props){
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
  
    handleCelsiusChange(temperature){
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
  
    
    render() {
      console.log(this.state)
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
      return (
        <div>
          <TemperatureInput 
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput 
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange}
          />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }

  export default Calculator;