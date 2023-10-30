import React from 'react'
import { Button } from "react-bootstrap";

const Question3 = ({handleButton, input, setInput, setLocation}) => {
    <div className="font-italic text-muted">
                <h2>¿Cuales de estos utilizas con frecuencia?</h2>
                <h4 className="mb-4">(puede marcar tantos como quiera)</h4>
                <div>
                <input
                    type="checkbox"
                    name="cocina"
                    value={input.cocina}
                    checked={input.cocina}
                    defaultChecked={false}
                    onClick={() => setInput({ ...input, cocina: !input.cocina })}
                    className="mx-2"
                />
                Cocina
                </div>
                <div>
                <input
                    type="checkbox"
                    name="termotanque"
                    value={input.termotanque}
                    checked={input.termotanque}
                    defaultChecked={false}
                    onClick={() =>
                    setInput({ ...input, termotanque: !input.termotanque })
                    }
                    className="mx-2"
                />
                Termotanque
                </div>
                <div>
                <input
                    type="checkbox"
                    name="estufa"
                    value={input.estufa}
                    checked={input.estufa}
                    defaultChecked={false}
                    onClick={() => setInput({ ...input, estufa: !input.estufa })}
                    className="mx-2"
                />
                Estufa
                </div>
                <Button
                className="my-3"
                variant="flat"
                size="lg"
                onClick={() => handleButton()}
                >
                Continuar
                </Button>
                <br />
                <Button
                variant="flat"
                size="sm"
                onClick={() => setLocation("start")}
                >
                Volver al Inicio
                </Button>
            </div>
}

export default Question3