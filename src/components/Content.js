import { render } from '@testing-library/react';
import PreviousMap from 'postcss/lib/previous-map';
import InfoList from '../InfoList';
import React, { useState } from 'react';

const Content = () => {
    const [isRed, setRed] = useState(false);
    const [count, setcount] = useState(0);

    const [info, setInfo] = useState([
        { title: 'My title', body: 'My Body', ginfo: 'data random', id: 1 },
        { title: 'My rifle', body: 'My arm', ginfo: 'data expert', id: 2 },
        { title: 'My pistol', body: 'My leg', ginfo: 'data novice', id: 3 }
    ]);

    const title = 'Welcome to My Website';

    const hitRed = () => {

        if (!isRed) {
            setRed(true);

        } else {
            setRed(false);
        }

    }
    return (


        <div class="container mx-auto flex-col h-screen">

            <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3 ...">
                    <button onClick={hitRed} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-6">Click Me</button>

                    <InfoList info={info} title="Test Section"/>
                   
                </div>
                <div class="row-span-1 col-span-2">
                    <h2 class={isRed ? "text-center mt-10 text-style font-semibold text-5xl text-red-600" :
                        "text-center mt-10 text-style font-bold text-5xl text-blue-500"}>{title}</h2>
                </div>
                <div class="row-span-2 col-span-2 bg-red-100 mx-auto px-5 h-full">
                    <p class="text-center pt-10 pl-8    ">do enjoy your stay wit us dummy data do enjoy your stay wit us dummy data,<br />
                        do enjoy your stay wit us dummy data, do enjoy your stay with us dummy data,<br />
                        do enjoy your stay wit us dummy data, do enjoy your stay with us dummy data<br />
                        do enjoy your stay wit us dummy data, do enjoy your stay with us dummy data<br />
                        do enjoy your stay wit us dummy data, do enjoy your stay with us dummy data<br />
                        do enjoy your stay wit us dummy data, do enjoy your stay with us dummy data</p>
                </div>
            </div>












        </div>



    )


}
export default Content;