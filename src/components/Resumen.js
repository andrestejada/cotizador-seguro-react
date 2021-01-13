import React  from 'react';
import styled from '@emotion/styled'
import {primeraMayuscular} from '../helper';

const ContenedorResumen = styled.div`
        background-color:#00838F;
        padding:1rem;
        color:#FFF;
        margin-top:1rem;
        text-align:center;

`;

const Resumen = ({datos}) => {

    const {marca,year,plan} = datos

    if(marca===''||year===''||plan==='') return null;
       
    

    return ( 

        <ContenedorResumen>
            <h1>Resumen de Cotizacion</h1>
            <ul>
               <li>Marca: { primeraMayuscular(marca) }</li> 
               <li>Plan:{primeraMayuscular(plan)} </li> 
               <li>Año del Auto:{year}</li> 
            </ul>
        </ContenedorResumen>
        
     );
}
 
export default Resumen;