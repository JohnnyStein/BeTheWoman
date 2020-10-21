import React from 'react';

import { Link } from 'react-router-dom';

import { ContainerNotification } from './styles';

import smartphone from '../../global/assets/smartphone.svg';
import avatar from '../../global/assets/avatar.png';

export default function Notification() {
    const notis = [
        {
            id: 1,
            title: 'Curtiu seu artigo',
            data: new Date().toLocaleDateString(),
            autor: {
                avatar: avatar,
                nome: 'Laura Lima'
            }
        },
        {
            id: 8,
            title: 'Curtiu seu artigo',
            data: new Date().toLocaleDateString(),
            autor: {
                avatar: avatar,
                nome: 'Laura Lima'
            }
        },
        {
            id: 6,
            title: 'Curtiu seu artigo',
            data: new Date().toLocaleDateString(),
            autor: {
                avatar: avatar,
                nome: 'Laura Lima'
            }
        },
        {
            id: 2,
            title: 'Curtiu seu artigo',
            data: new Date().toLocaleDateString(),
            autor: {
                avatar: avatar,
                nome: 'Laura Lima'
            }
        },
        {
            id: 3,
            title: 'Curtiu seu artigo',
            data: new Date().toLocaleDateString(),
            autor: {
                avatar: avatar,
                nome: 'Laura Lima'
            }
        }
    ]
    return (
        <ContainerNotification>
            <main>
                <article>
                    <h1>Suas Notificações</h1>
                    {
                        notis.map(noty => (
                            <div key={noty.id} >
                                <div>
                                    <Link to={`/@user/laura`}>
                                        <img src={noty.autor.avatar}></img>
                                        <h3>{noty.autor.nome}</h3>
                                    </Link>
                                    <span>{noty.data}</span>
                                </div>
                                <Link to={`${noty.id}`}>
                                    <p>{noty.title}</p>
                                </Link>
                            </div>
                        ))
                    }
                    <button>
                        Mais
                    </button>
                </article>
            </main>
            <img src={smartphone}></img>
        </ContainerNotification>
    );
}