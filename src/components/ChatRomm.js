import React, { Component } from "react";

class ChatRomm extends Component {
  constructor(props) {
    super();
    this.updateMesages = this.updateMesages.bind(this); //le decimos que se puede usar dentro de la clase sin perder el this
    this.enviar = this.enviar.bind(this);
    this.state = {
      mensaje: "",
      mensajes: [
        { id: 1, men: "hola" },
        { id: 2, men: "hola que tal" },
        { id: 3, men: "cual es tu nombre" },
      ],
    };
  }
  updateMesages(e) {
    this.setState({
      mensaje: e.target.value, //actualizo el estado de mi mensaje
    });
  }

  enviar() {
    const mesag = {
      id: this.state.mensajes.length,
      men: this.state.mensaje,
    }; //Agrega un nuevo mensaje a la lista de mensajes y limpia el campo de entrada
    let list = [...this.state.mensajes];
    list.push(mesag);
    this.setState({
      mensajes: list,
      mensaje: "",
    }); //Crea un objeto de mensaje con un ID único y el mensaje actual del input,luego actualiza el estado con la nueva lista de mensajes.
  }

  render() {
    const menActual = this.state.mensajes.map((mensaje, i) => {
      return (
        <li key={i} className="list-group-item list-group-item-action">
          {mensaje.men}
        </li>
      );
    });

    return (
      <div className="card">
        <div className="card-body">
          <ul className="list-group">{menActual}</ul>
        </div>
        <div className="card-footer">
          <input
            value={this.state.mensaje}
            onChange={this.updateMesages}
            type="text"
            className="form-control"
            placeholder="Mensaje"
          />
          <button className="btn btn-primary btn-block" onClick={this.enviar}>
            Enviar
          </button>
        </div>
      </div>
    );
  }
}

export default ChatRomm;
