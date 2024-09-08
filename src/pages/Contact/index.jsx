import { useState } from "react";
import "./Contact.css"

const Contact = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const handleBlur = (e) => {
        if (e.target.value === "") {
            setErrorMsg(e.target.id + " cannot be empty!");
        }
    }

    return (
        <div className="contactParentContainer">
            <div className="contactContainer">
                <h3 className="contactHeader">Contact Page</h3>
                <form id="contactForm">
                    <label for="name" className="formLbls">Name</label>
                    <input
                        id="name"
                        className="formControls"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={(e) => handleBlur(e)}
                        type='text'></input>
                    <label for="email" className="formLbls">Email</label>
                    <input
                        id="email"
                        className="formControls"
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={(e) => handleBlur(e)}
                    ></input>
                    <label for="message" className="formLbls">Message</label>
                    <textarea
                        id="message"
                        rows='10'
                        className="formControls"
                        type='text'
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        onBlur={(e) => handleBlur(e)}
                    ></textarea>
                    <button className="formLbls formbtn" type="submit">Submit</button>
                    <label className="formControls" style={{ fontWeight: "bolder" }}>{errorMsg}</label>
                </form>
            </div>
        </div>
    );
}

export default Contact;