import React  from 'react';

const Footer = () =>{
    return(
            <div class="p-10 bg-indigo-900 text-indigo-400 flex justify-between">
                <div>
                    <h3 class="text-lg mb-2">Click the News letter</h3>
                    <form class="flex">
                        <input type="@email" class="w-full rounded-2 py-3 px-8 " placeholder="Enter your email"></input>
                        <button class="bg-yellow-700 text-yellow-400 rounded-r px-4">Enter</button>
                    
                    </form>
                </div>
                <div>
                    Copyright info etc
                </div>

            </div>
    )
}

export default Footer