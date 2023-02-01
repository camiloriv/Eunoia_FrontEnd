import React, { Component } from 'react';

class emociones extends Component {

    render() {
        return (
            <>
                {this.props.Objemociones.map(emocion =>
                    <div class="card">
                                <div class="card-body">
                                <h5 class="card-title">{emocion.nombreEmocion}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                )}
            </>
        )
    }

}
export default emociones;

// 