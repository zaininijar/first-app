import React, { Component } from 'react';

class App extends Component {

  constructor () {

    super();

    this.state = {
      name: 'Ahmad Zaini Nijar',
      kelas: 'Xll RPl',
      alamat: 'Kotanopan Setia',
    }

  }

  render(){

    const name = this.state.name;
    const kelas = this.state.kelas;
    const alamat = this.state.alamat;

    return (
      <div>
        <div>Nama Saya : {name}</div>
        <div>Kelas : {kelas}</div>
        <div>Alamat : {alamat}</div>
      </div>
    )
  }
}

export default App;