function SignUp(){

    const handleInput = (FormData)=>{
        const res = Object.fromEntries(FormData.entries());
        console.log(res);
    }

    return (<>
        <form action={handleInput} method="post">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" id="" />

            <br />
            <label htmlFor="username">Full Name</label>
            <input type="text" name="username" id="" />

            <br />
            <label htmlFor="email">Full Name</label>
            <input type="email" name="email" id="" />

            <br />
            <label htmlFor="password">Full Name</label>
            <input type="password" name="password" id="" />

            <br />
            </form>    
    </>)
}

export default SignUp;