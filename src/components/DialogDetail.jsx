import React from "react";
import '../scss/Dialog.scss';

class DialogPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonImages: {},
      pokemonTypes: [],
    }
  }
  render() {
    console.log('ini test', this.props.detail.sprites)
    return (
      <div className="dialog--container" style={{ backdropFilter: 'blur(5px)' }}>
        <div className="closed--dialog">
          <button onClick={this.props.closed}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="dialog--content">
          <div className="card--content" style={{ width: this.props.width, height: this.props.height }}>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-full bg-gray-200 opacity-80 rounded-l-lg p-4">
                <div className="mb-2">
                  <span className="text-lg">Name : </span>
                  <span className="text-lg capitalize">{this.props.pokemonName}</span>
                </div>
                <div className="mb-2">
                  <span className="text-lg">Type : </span>
                  <div className="grid grid-cols-2 gap-4">
                    <div>{this.props.detail.types.map((test) => <span>{test.type.name}</span>)}</div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 relative bg-no-repeat bg-cover rounded-lg" style={{ backgroundImage: "url(/battle--background.png)", height: '320px', backgroundPositionX: 'center' }}>
                <img className="absolute" style={{ width: '200px', top: '40px', right: '90px' }} src={this.props.detail.sprites.front_default} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DialogPokemon