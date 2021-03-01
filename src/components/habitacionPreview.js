import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {Link} from 'gatsby';

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, .85);
  width: 100%;
  color: #FFF;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  text-align: center;
`;

const HabitacionPreview = ({habitacion}) => {
  
  const {contenido, imagen, titulo, slug} = habitacion;
  
  return ( 
    <div
      css={css`
        border: 1px solid #E1E1E1;
        margin-bottom: 2rem;
        box-sizing: border-box;

        *, *:before, *:after {
              box-sizing: inherit;
            }
      `}
    >
      <Image
        fluid={imagen.fluid}
      />
      <div
        css={css`
          padding: 1rem;
        `}
      >
        <h3>{titulo}</h3>
        <p>{contenido}</p>

        <Boton
          to={slug}
        >Ver Habitación</Boton>
      </div>
    </div>
   );
}
 
export default HabitacionPreview;