import UserForm from '../components/UserForm';

export default function UserPage(){

    return(
        <section className="page-content">

            <h1 className='titel titel-big' > Hello...</h1>
            <p className='heading heading-small'> 
                Please provide us with your name and email address so 
                that we may send you captivating updates and customize 
                the application precisely to meet your requirements.
            </p>
            <UserForm />
            
        </section>
  );
}

            
    