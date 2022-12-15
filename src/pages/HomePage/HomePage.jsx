// import { useState, useEffect, useRef } from 'react';
import ToyListItem from '../../components/ToyListItem/ToyListItem';
// import * as toysAPI from '../../utilities/toys-api';

export default function HomePage({ toys }) {
    const HomePage = toys.map((t, idx) => (
        <ToyListItem toys={t.name} image={t.image} key={idx} />
      ));

        return (
            <ul>
            {HomePage}
            </ul>
        );
    }