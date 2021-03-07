import React  from 'react';

const Footer = () =>{
    return(
            <div class="p-10 bg-gradient-to-r from-indigo-700 via-indigo-700 to-indigo-900 flex justify-between">
                <div>
                    <h3 class="text-lg mb-2 text-white">Click the News letter</h3>
                    <form class="flex">
                        <input type="@email" class="w-full rounded-2 py-3 px-8 " placeholder="Enter your email"></input>
                        <button class="bg-yellow-700 text-yellow-400 rounded-r px-4">Enter</button>
                    
                    </form>
                </div>
                <div>
                    <h1 class="text-white">Copyright info etc</h1>
                </div>

            </div>
    )
}

export default Footer