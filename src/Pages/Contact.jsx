import { useActionState } from "react"

export const Contact= ()=>{

    const handleSubmit = (formData)=>{
       const res = Object.fromEntries(formData.entries());
       console.log(res);
    }

    return(
        <section className="container">
            <section className="form-section grid">
                <form action={handleSubmit} >
                    <label>Name</label>
                    <input type="text" name="name" />

                    <label>E-mail</label>
                    <input type="email" name="email" />

                    <label>Text-Area</label>
                    <textarea name="textarea" id="textarea"></textarea>

                    <button type="submit" className="form-btn">Send</button>

                </form>
            </section>

        </section>
    )
}