import React from 'react';

import {
    ContainerFound
} from './styles';

import faleconosco from '../../global/assets/faleconosco.svg';
import { Link } from 'react-router-dom';

export default function NotFound(){
    return(
        <ContainerFound>
            <Link href='#'>
                <img src={faleconosco}></img> 
                Fale conosco
            </Link>
        </ContainerFound>
    );
}