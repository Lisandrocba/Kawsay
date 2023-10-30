import React from 'react'
import { Button } from "react-bootstrap";

const Question2 = ({handleButton, input, setInput, setLocation}) => {
   return ( <div className="font-italic text-muted">
   <h2>¿Cuales de estos electrodomesticos utilizas?</h2>
   <h4 className="mb-4">(puede marcar tantos como quiera)</h4>
   <div>
     <input
       type="checkbox"
       name="pc"
       value={input.pc}
       checked={input.pc}
       defaultChecked={false}
       onClick={() => setInput({ ...input, pc: !input.pc })}
       className="mx-2"
     />
     PC
   </div>
   <div>
     <input
       type="checkbox"
       name="radio"
       value={input.radio}
       checked={input.radio}
       defaultChecked={false}
       onClick={() => setInput({ ...input, radio: !input.radio })}
       className="mx-2"
     />
     Radio
   </div>
   <div>
     <input
       type="checkbox"
       name="impresora"
       value={input.impresora}
       checked={input.impresora}
       defaultChecked={false}
       onClick={() =>
         setInput({ ...input, impresora: !input.impresora })
       }
       className="mx-2"
     />
     Impresora
   </div>
   <div>
     <input
       type="checkbox"
       name="microondas"
       value={input.microondas}
       checked={input.microondas}
       defaultChecked={false}
       onClick={() =>
         setInput({ ...input, microondas: !input.microondas })
       }
       className="mx-2"
     />
     Microondas
   </div>
   <div>
     <input
       type="checkbox"
       name="dispenser"
       value={input.dispenser}
       checked={input.dispenser}
       defaultChecked={false}
       onClick={() =>
         setInput({ ...input, dispenser: !input.dispenser })
       }
       className="mx-2"
     />
     Dispenser
   </div>
   <div>
     <input
       type="checkbox"
       name="pava"
       value={input.pava}
       checked={input.pava}
       defaultChecked={false}
       onClick={() => setInput({ ...input, pava: !input.pava })}
       className="mx-2"
     />
     Pava electrica
   </div>
   <div>
     <input
       type="checkbox"
       name="lavarropa"
       value={input.lavarropa}
       checked={input.lavarropa}
       defaultChecked={false}
       onClick={() =>
         setInput({ ...input, lavarropa: !input.lavarropa })
       }
       className="mx-2"
     />
     Lavarropa
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
 </div>)
}

export default Question2