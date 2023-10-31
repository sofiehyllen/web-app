import { useState } from "react";

export default function UserPage() {
    const [user, setUser] = useState({
        Firstname: '',
        Lastname: '',
        Email: '',
        Hoursofsleep: ''
    });

    const userdata = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const getdata = (e) => {
        e.preventDefault();
        const { Firstname, Lastname, Email, Hoursofsleep } = user;

        const userData = JSON.stringify({
            Firstname,
            Lastname,
            Email,
            Hoursofsleep
        });

        localStorage.setItem("userData", userData);
        alert("Information saved");
    };

    return (
        <section className="page-content">
            <div>
                <h1 className='titel titel-big'> Hello...</h1>
                <p className='bodytext spacing-bottom'>
                    Please provide us with your name and email address so
                    that we may send you captivating updates and customize
                    the application precisely to meet your requirements.
                </p>
            </div>
            <form method="POST">
                <div className="flex">
                    <div>
                        <label htmlFor="firstname"><h4 className='bodytext titelcolor'>First name</h4></label>
                        <input className='form-input heading heading-small' id="firstname" type="text" name="Firstname" value={user.Firstname} autoComplete="off" onChange={userdata} required />
                    </div>

                    <div>
                        <label htmlFor="lastname"><h4 className='bodytext titelcolor'>Surname</h4></label>
                        <input className='form-input heading heading-small' id="lastname" type="text" name="Lastname" value={user.Lastname} autoComplete="off" onChange={userdata} required />
                    </div>
                </div>

                <div className="spacing-bottom">
                    <label htmlFor="email"><h4 className='bodytext titelcolor'>E-mail</h4></label>
                    <input className='form-input heading heading-small' id="email" type="email" name="Email" value={user.Email} autoComplete="off" onChange={userdata} required />
                </div>

                <div className='center'>
                    <h2 className='heading'> Expected hours of sleep </h2>
                    <p className='heading heading-small bodytext spacing-bottom'>
                        To assist us in tracking your sleep pattern, kindly let us
                        know the number of hours you aim to sleep per night.
                    </p>
                    <div className="spacing-bottom">
                        <label htmlFor="hoursofsleep"><h4 className='heading heading-small'>Hours of sleep</h4></label>

                        <input type="number" className='form-input heading heading-small' id="hoursofsleep" name="Hoursofsleep" value={user.Hoursofsleep} autoComplete="off" onChange={userdata} required />

                    </div>
                </div>

                <div className='center spacing-bottom'>
                    <button onClick={getdata} type='submit' className='button btn-big'>
                        save <span className="buttonshine" />
                    </button>
                </div>
            </form>
        </section>
    );
}
