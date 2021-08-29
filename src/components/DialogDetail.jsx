import React from "react";

import "animate.css"
import '../scss/Dialog.scss';

class DialogPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonImages: {},
      pokemonTypes: [],
      pokeBall: '/pokeBall--close.png',
      alert: '',
      isActive: false,
      isCatch: false,
    }
    this.getNumber = this.getNumber.bind(this)
  }

  getNumber = () => {
    let number = parseInt(Math.random() * 2);
    this.closePokeball();
    this.state.isActive = true;

    if (this.state.isActive === true) {
      setTimeout(() => {
        this.setState({ isActive: false })
        if (number === 0) {
          this.setState({ isCatch: true })
          setTimeout(() => {
            this.setState({ isCatch: false })
          }, 3000)
          console.log('catch');
        } else {
          this.setState({ isCatch: false })
          this.setState({ alert: `Oh Crap!! You almost get the ${this.props.detail.name}. Try Catch Again!!` })
          setTimeout(() => {
            this.setState({ alert: '' })
          }, 4000)
        }
      }, 2000)
    }
  }

  openPokeball = () => {
    return this.setState({
      pokeBall: '/pokeBall--open.png'
    })
  }
  closePokeball = () => {
    return this.setState({
      pokeBall: '/pokeBall--close.png'
    })
  }

  typePokemon = (type) => {
    switch (type) {
      case 'grass':
        return { background: '#219b1e', text: '#fff' }
      case 'poison':
        return { background: '#8801b6', text: '#fff' }
      case 'bug':
        return { background: '#729f40', text: '#fff' }
      case 'dragon':
        return { background: '#8801b6', text: '#fff' }
      case 'fairy':
        return { background: '#ffbad9', text: '#000' }
      case 'fire':
        return { background: '#fd7d24', text: '#fff' }
      case 'ghost':
        return { background: '#7b62a3', text: '#fff' }
      case 'ground':
        return { background: '#8801b6', text: '#fff' }
      case 'normal':
        return { background: '#a4acaf', text: '#000' }
      case 'psychic':
        return { background: '#e86db6', text: '#000' }
      case 'steel':
        return { background: '#9eb8b9', text: '#000' }
      case 'dark':
        return { background: '#707070', text: '#fff' }
      case 'electric':
        return { background: '#eed435', text: '#000' }
      case 'fighting':
        return { background: '#d56722', text: '#fff' }
      case 'flying':
        return { background: '#8801b6', text: '#fff' }
      case 'ice':
        return { background: '#52c4e7', text: '#000' }
      case 'rock':
        return { background: '#a38c22', text: '#fff' }
      case 'water':
        return { background: '#4593c4', text: '#fff' }
      default:
    }
  }

  render() {
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
                  <span className="text-lg capitalize">{this.props.detail.name}</span>
                </div>

                <div className="mb-2 rounded-lg p-4 grid grid-rows-2 grid-cols-2 gap-0 items-center font-bold text-sm items-baseline"
                  style={{ backgroundColor: this.typePokemon(this.props.detail.types[0].type.name).background, color: this.typePokemon(this.props.detail.types[0].type.name).text }}>
                  <div className="pb-2">
                    <span>Height : </span>
                    <span>{this.props.detail.height / 10} m</span>
                  </div>

                  <div className="pb-2">
                    <span>Weight : </span>
                    <span>{this.props.detail.weight} kg</span>
                  </div>

                  <div className="col-span-2 pb-2">
                    <span>Ability : </span>
                    {this.props.detail.abilities.map((detail, index) =>
                      <span className="capitalize mr-2" key={index}>{detail.is_hidden === false && detail.ability.name}</span>
                    )}
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-lg">Type : </span>
                  <div className="grid grid-cols-2 gap-4 my-2">

                    {this.props.detail.types.map((detail, index) =>
                      <div className='rounded-lg text-center' key={index} style={{ backgroundColor: this.typePokemon(detail.type.name).background, color: this.typePokemon(detail.type.name).text }}>
                        <span className="font-bold">{detail.type.name}</span>
                      </div>)}

                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-lg">Stats : </span>
                  <div className="bg-gray-300 font-bold font-bold p-4 text-sm rounded-lg">

                    {this.props.detail.stats.map((detail, index) =>
                      <div className="flex items-center mb-2" key={index}>
                        <span>{detail.stat.name}</span>
                        <div className="rounded-xl h-4 bg-white w-1/2 ml-auto text-center relative" style={{ padding: '2px' }}>
                          <div className="rounded-lg bg-indigo-300 h-3 mr-auto" style={{ width: detail.base_stat }} />
                          <span className="text-black font-bold absolute top-0 left-0 right-0" style={{ fontSize: '10px' }}>{detail.base_stat}</span>
                        </div>
                      </div>)}

                  </div>
                </div>
              </div>

              <div className="col-span-2 relative">
                <div className="relative bg-no-repeat bg-cover rounded-lg" style={{ backgroundImage: "url(/battle--background.png)", height: '320px', backgroundPositionX: 'center' }}>
                  <img className="absolute" style={{ width: '200px', top: '40px', right: '90px' }} src={this.props.detail.sprites.front_default} alt="" />
                  <div className="flex justify-center absolute text-center left-0 right-0" style={{ bottom: '-80px' }}>
                    <button className="p-4" onMouseOver={() => this.openPokeball()} onMouseOut={() => this.closePokeball()} onClick={() => this.getNumber()}>
                      <img id="pokeball" className={this.state.isActive ? 'animate__animated animate__flash animate__infinite infinite' : ''} style={{ maxWidth: '100px' }} src={this.state.pokeBall} alt="" />
                      <div className="text-lg">Try Catch!!</div>
                    </button>
                  </div>
                </div>

                <div className="text-xl absolute bottom-0 font-bold">
                  {this.state.alert}
                </div>

              </div>

            </div>
          </div>
        </div>

        {this.state.isCatch === true ? <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="bg-gray-200 p-4 rounded-xl animate__animated animate__rubberBand" style={{ width: '300px' }}>
            <div className="text-xl text-center">
              Congrats, You Catch the <b className="font-extrabold uppercase">{this.props.detail.name}</b>
            </div>
          </div>
        </div> : ''}

      </div>
    )
  }
}

export default DialogPokemon