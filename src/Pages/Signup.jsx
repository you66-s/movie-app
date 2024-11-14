import React, {useState} from 'react';
import googleIcon from "../Assets/google-48.png";
import facebookIcon from "../Assets/facebook-48.png"
import db from "../Firebase/Firestore"
import {collection, addDoc} from "firebase/firestore"

function Signup(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let err = 0

    function handleRegister(e) {
        e.preventDefault();
        if (firstName < 4) {
            setFnameError("First name must be more than 4 characters")
            err++
        } else if (lastName < 4) {
            setLnameError("Last name must be more than 4 characters")
            err++
        } else if (!phoneRegex.test(phoneNumber)) {
            setPhoneNumberError("Phone number format incorrect")
            err++
        } else if (!emailRegex.test(email)) {
            setEmailError("Email format incorrect")
            err++
        } else if (!passwordRegex.test(password)) {
            setPasswordError("Password format incorrect")
            err++
        } else if (password !== confirmPassword) {
            setConfirmPassword("Passwords do not match")
            err++
        }
        if (err === 0) {
            const addUser = async () => {
                try{
                    const docRef = await addDoc(collection(db, 'user'), {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phoneNumber: phoneNumber,
                        password: password
                    });
                    console.log("Document written with ID: ", docRef.id);
                }catch (e) {
                    console.log(e)
                }
            }
            addUser()
        }
    }

    return (
        <div className={"bg-blue-700 h-dvh flex justify-center items-center w-full"}>
            <div
                className={"loginPanel mr-auto ml-auto flex flex-col justify-between gap-3 bg-white w-[45%] rounded-lg p-4"}>
                <h1 className={"text-center text-[32px] text-[#212121] font-bold"}>Create Your Account</h1>
                <div className={"name flex flex-row gap-4 justify-between"}>
                    <div className={"flex flex-col w-full"}>
                        <label>First Name</label>
                        <input type={"text"} onChange={(event) => setFirstName(event.target.value)}
                               className={"w-full rounded-lg border-2 border-[#676666] p-2"}/>
                    </div>
                    <div className={"flex flex-col w-full"}>
                        <label>Last Name</label>
                        <input type={"text"} onChange={(event) => setLastName(event.target.value)}
                               className={"w-full rounded-lg border-2 border-[#676666] p-2"}/>
                    </div>
                </div>
                <div className={"phoneNumber flex flex-row gap-4 justify-between"}>
                    <div className={"flex flex-col w-full"}>
                        <label>Phone number</label>
                        <input type={"text"} onChange={(event) => setPhoneNumber(event.target.value)}
                               className={"w-full rounded-lg border-2 border-[#676666] p-2"}/>
                    </div>
                </div>
                <div className={"email flex flex-row gap-4 justify-between"}>
                    <div className={"flex flex-col w-full"}>
                        <label>Email</label>
                        <input type={"email"} onChange={(event) => setEmail(event.target.value)}
                               className={"w-full rounded-lg border-2 border-[#676666] p-2"}/>
                    </div>
                </div>
                <div className={"password flex flex-row gap-4 justify-between"}>
                    <div className={"flex flex-col w-full"}>
                        <label>Password</label>
                        <input type={"password"} onChange={(event) => setPassword(event.target.value)}
                               className={"w-full rounded-lg border-2 border-[#676666] p-2"}/>
                    </div>
                </div>
                <div className={"confPass flex flex-row gap-4 justify-between"}>
                    <div className={"flex flex-col w-full"}>
                        <label>Confirm your password</label>
                        <input type={"password"} onChange={(event) => setConfirmPassword(event.target.value)}
                               className={"w-full rounded-lg border-2 border-[#676666] p-2"}/>
                    </div>
                </div>
                <button onClick={handleRegister} className={"w-full bg-[#212121] text-white p-2 rounded-lg"}>Register
                </button>
                <div className={"w-full"}>
                    <p className={"text-[#676666] text-[16px]"}>Already have an account? <span
                        className={"text-[#7144F1] text-[16px]"}>Login</span></p>
                </div>
                <div className={"divider mt-4 mb-4 flex flex-row gap-10 justify-between items-center w-full"}>
                    <span className={"w-full bg-[#D1D1D1] h-[1px]"}></span>
                    <p>or</p>
                    <span className={"w-full bg-[#D1D1D1] h-[1px]"}></span>
                </div>
                <div className={"thirdParties flex flex-row gap-10 justify-between"}>
                    <div
                        className={"w-1/2 p-2 flex flex-row items-center justify-center gap-4 border-2 border-[#676666] rounded-lg"}>
                        <img src={googleIcon} alt={"google"} width={24} height={24}/>
                        <p className={"text-[#676666] text-[16px}]"}>Sign up with Google</p>
                    </div>
                    <div
                        className={"w-1/2 p-2 flex flex-row items-center justify-center gap-4 border-2 border-[#676666] rounded-lg"}>
                        <img src={facebookIcon} alt={"google"} width={24} height={24}/>
                        <p className={"text-[#676666] text-[16px}]"}>Sign up with Facebook</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;