import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('SignUp Submitted', { name, email, password, confirmPassword });
    // add logic to handle the registration here 
  };

  return (
    <form  className="flex-container ml-[500px] mr-[1px] pb-10 mb-20 w-[750px]"><button onClick={handleSubmit}/>
      <div className="container mx-auto px-20 pt-16 pb-8 mt-28 rounded-xl border border-black border-solid bg-slate-500 w-[750px]">
      <div className="text-center text-3xl font-bold text-zinc-800">
          Sign Up - Create Your Account
        </div>
      <div className="container mx-auto inline-flex gap-2 mt-10 ml-5">
        <label htmlFor="name" className="flex-auto my-auto text-2xl font-bold text-zinc-800">Name:</label>
        <input
          type="name"
          id="name"
          required
          className="grow justify-center px-5 py-2 text-2xl rounded-xl border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[300px] max-md:px-5"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="container mx-auto inline-flex gap-5 mt-10 ml-5">
        <label htmlFor="email" className="flex-auto my-auto text-2xl font-bold text-zinc-800">Email Address:</label>
        <input
          type="email"
          id="email"
          required
          className="grow justify-center px-5 py-2 text-2xl rounded-xl border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[400px] max-md:px-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="container mx-auto inline-flex gap-1.5 mt-10 ml-5 mr-10">
        <label htmlFor="password" className="flex-auto my-auto text-2xl font-bold text-zinc-800">Password:</label>
        <input
          type="password"
          id="password"
          required
          className="self-center px-5 py-2 text-2xl rounded-xl border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[400px] max-md:px-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="container mx-auto inline-flex gap-2 mt-10 ml-5">
        <label htmlFor="confirm-password" className="flex-auto my-auto text-2xl font-bold text-zinc-800">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          required
          className=" self-center px-5 py-2 mx-auto text-2xl rounded-xl border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[450px]"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="text-end mt-5 ml-5 text-m text-neutral-200">
  Already Registered? <button>Click here to Log In</button>
</div>
      <div className="flex gap-5 self-center mt-5 ml-8 mb-5 text-center max-md:flex-wrap max-md:mt-5">
        <button
          type="submit"
          className="grow hover:bg-zinc-800 hover:text-stone-400  items-center px-10 py-3 mt-12 mr-10 text-3xl font-bold rounded-xl text-zinc-800 bg-stone-400 w-[524px]"
        >
          Register
        </button>
      </div>
      </div>
    </form>
  );
};
export default SignUp;
