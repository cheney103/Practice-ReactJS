import React, {useRef} from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch,Form } from 'react-router-dom';

export const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPassRef = useRef()

    return (
        

            <div className="container mx-auto px-5 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-lg bg-white border-1">
                            <div class="font-semibold text-center pt-2 text-3xl block uppercase">
                                Sign up Now
                            </div>
                            <div className="rounded-t mb-0 px-6 py-6">
                                <form>

                                    <div class="relative w-full mb-3">
                                        <label
                                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            ref={emailRef}
                                            required
                                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="Email" />
                                    </div>
                                    <div class="relative w-full mb-3">
                                        <label
                                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password">Password</label>
                                        <input
                                        id="password"
                                        ref={passwordRef}
                                            type="password"
                                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="Password" />
                                    </div>
                                    <div class="relative w-full mb-3">
                                        <label
                                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-Confirmpassword">Confirm Password</label>
                                        <input
                                        ref={confirmPassRef}
                                        id="confirmpass"
                                            type="password"
                                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="Password" />
                                    </div>
                                    <div class="text-xs text-center">
                                        Already have an account ? Log In
                                    </div>
                                    <div class="text-center mt-6">
                                    <Link to="/home">
                                        <button
                                            class="bg-yellow-500 text-white active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                            type="button">Register Now</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>


    )
}
export default SignUp
