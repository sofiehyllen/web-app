import { Link, useNavigate } from "react-router-dom";

export default function CreatePage() {
    const navigate = useNavigate();

    // Function that makes the creation(POST) of a
    // new translation. It receives an object "newPost"
    // that is transferred to the server in the
    // fetch body.
    async function createPost(newPost) {
        const url = "https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep.json";
        
        const response = await fetch(url, {
            method: "POST", 
            body: JSON.stringify(newPost) 
        });
        const data = await response.json();
        console.log(data);
        navigate("/");
    }

    // PostForm.js is implemented and 
    // callback "savePost" holds the 
    // name of the method that creates
    // the new translation.
    return (
       <section>
            <div>
                <Link to="/sleepingpage" className="button btn-big">start tracking</Link>
            </div>
       </section>
    );
}

