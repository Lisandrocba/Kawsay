import React from 'react'
import { Button } from "react-bootstrap";

const Start = ({handleButton}) => {
  return (
    <div className="min-vh-100">
      <div>
        <h1 className="my-2 parH text-left font-weight-bold pl-2">
          <span className="titleH">¡Bienvenido a </span>Kawsay!
        </h1>
      </div>
      <div className="shadow text-left w-50 parHB">
        <p className="parH mt-5 pl-2 pt-2">
          <h5>
            ¿Sabías que con nuestro estilo de vida moderno, cada persona
            genera alrededor de cuatro toneladas de CO2 al año?
          </h5>
        </p>
        <p className="parH pb-3 pl-2">
          Una de las principales causas del calentamiento global es la
          emisión de gases de efecto invernadero, entre ellos y
          principalmente, el CO2. La marca que se deja sobre el medio
          ambiente con cada actividad que emite gases de efecto
          invernadero es conocida como huella de carbono.
        </p>
      </div>
      <div>
        <p className="parH mb-n3 mt-3 py-3 pl-2">
          <h5 className="font-weight-bold">
            ¿Te gustaria conocer tu huella de Carbono?
          </h5>
        </p>
        <div className="ml-5 mt-2">
          <Button variant="flat" size="lg" onClick={() => handleButton()}>
            CALCULAR
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Start
