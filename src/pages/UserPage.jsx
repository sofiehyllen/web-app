// Denne side er kodet af: Karoline Lerche & Sofie Hyllen

import { useState, useEffect } from "react";
import GoBackButton from "../components/GoBackButton";
import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "../components/Animationer";

export default function UserPage() {
    // Initialisering af brugerstaten
    const [user, setUser] = useState({
        Firstname: '',
        Lastname: '',
        Email: '',
        Hoursofsleep: ''
    });

    useEffect(() => {
        // Hent brugeroplysninger fra localStorage, hvis de eksisterer
        const savedUserData = localStorage.getItem("userData");
        if (savedUserData) {
            setUser(JSON.parse(savedUserData));
        }
    }, []); // Kør kun ved komponentens montering

    // Funktion til at opdatere brugerdata
    const userdata = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // Funktion til at gemme data
    const getdata = (e) => {
        e.preventDefault();
        const { Firstname, Lastname, Email, Hoursofsleep } = user;

        // Opretter brugerdata som en JSON-streng
        const userData = JSON.stringify({
            Firstname,
            Lastname,
            Email,
            Hoursofsleep
        });

        // Gemmer brugerdata i localStorage
        localStorage.setItem("userData", userData);
        // Viser en meddelelse om at informationen er gemt
        alert("Information saved");

    };

    return (
        <motion.section variants={containerAnimation} initial="hidden" animate="visible" className="page-content">
            {/* Sektion til at vise tilbageknap */}
            <motion.div variants={itemAnimation}><GoBackButton /></motion.div>
            <div>
                {/* Overskrift og introduktionstekst */}
                <motion.h1 variants={itemAnimation} className='titel titel-big'> Hello...</motion.h1>
                <motion.p variants={itemAnimation} className='bodytext spacing-bottom'>
                    Please provide us with your name and email address so
                    that we may send you captivating updates and customize
                    the application precisely to meet your requirements.
                </motion.p>
            </div>
            {/* Formular til at indsamle brugerdata */}
            <form method="POST">
                <div className="flex">
                    {/* Felt til indtastning af fornavn */}
                    <motion.div variants={itemAnimation}>
                        <label htmlFor="firstname"><h4 className='bodytext titelcolor'>First name</h4></label>
                        <input className='form-input heading heading-small' id="firstname" type="text" name="Firstname" value={user.Firstname} autoComplete="off" onChange={userdata} required />
                    </motion.div>

                    {/* Felt til indtastning af efternavn */}
                    <motion.div variants={itemAnimation}>
                        <label htmlFor="lastname"><h4 className='bodytext titelcolor'>Surname</h4></label>
                        <input className='form-input heading heading-small' id="lastname" type="text" name="Lastname" value={user.Lastname} autoComplete="off" onChange={userdata} required />
                    </motion.div>
                </div>

                {/* Felt til indtastning af e-mailadresse */}
                <motion.div variants={itemAnimation} className="spacing-bottom">
                    <label htmlFor="email"><h4 className='bodytext titelcolor'>E-mail</h4></label>
                    <input className='form-input heading heading-small' id="email" type="email" name="Email" value={user.Email} autoComplete="off" onChange={userdata} required />
                </motion.div>

                {/* Sektion til at indsamle data om forventet søvntid */}
                <div className='center'>
                    <motion.h2 variants={itemAnimation} className='heading'> Expected hours of sleep </motion.h2>
                    <motion.p variants={itemAnimation} className='heading heading-small bodytext spacing-bottom'>
                        To assist us in tracking your sleep pattern, kindly let us
                        know the number of hours you aim to sleep per night.
                    </motion.p>
                    {/* Felt til indtastning af antal timer at sove */}
                    <motion.div variants={itemAnimation} className="spacing-bottom">
                        <label htmlFor="hoursofsleep"><h4 className='heading heading-small'>Hours of sleep</h4></label>
                        <input type="number" className='form-input heading heading-small' id="hoursofsleep" name="Hoursofsleep" value={user.Hoursofsleep} autoComplete="off" onChange={userdata} required />
                    </motion.div>
                </div>

                {/* Gemme-knap */}
                <motion.div variants={itemAnimation} className='center spacing-bottom'>
                    <button onClick={getdata} type='number' className='button btn-big'>
                        save <span className="btn-shine" />
                    </button>
                </motion.div>
            </form>
        </motion.section>
    );
}