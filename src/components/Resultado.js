import React from 'react';
import styled from '@emotion/styled'

const Mensaje = styled.p`
        background-color: rgb(127,224,237);
        margin-top:2rem;
        padding:1rem;
        text-align:center;

`

const ResultadoCotizacion = styled.div`
        background-color:rgb(127,224,237);
        text-align:center;
        padding:0.5rem;
        border: 1px solid #26C6DA;
        margin-top:1rem;
        position:relative;
`

const TextoCotizacion = styled.p`
        color: #00838F;
        padding:1rem;
        text-transform:uppercase;
        margin:0;
        font-weight:bold;
`


const Resultado = ({cotizacion}) => {

    return ( 
        (cotizacion === 0) ? <Mensaje> Elige marca , año y tipo de seguro </Mensaje>
          : <ResultadoCotizacion>
                <TextoCotizacion> el total es: $ {cotizacion} </TextoCotizacion>
            </ResultadoCotizacion>
     );
}
 
export default Resultado;