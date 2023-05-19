import React, {useState} from "react";
import signupLogo from "./images/signuplogo.png";

const Signup = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [day, setDay] = useState('');


    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted!');
      console.log(`Company name: ${email}`);
      console.log(`password: ${password}`);
      console.log(`Sector: ${sector}`);
      console.log(`Address: ${address}`);
      console.log(`Full Name: ${fullName}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone}`);
    };

    return ( 
        <>
          <div className="flex flex-col items-center mx-auto mt-10">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="logo" className="w-40"/>
          </div>  

          <div className="option-container flex align-center justify-center mt-4">
             <h1 className="font-bold text-3xl p-2 pt-4">Sign up free to start listening.</h1>
          </div>

          <div className="company-details flex flex-col">

              <div className="details-of-company flex flex-col items-center justify-center mt-4">

                  <form onSubmit={handleSubmit}>
                      <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="font-medium">What is your email?</label>
                        <input
                          type="text"
                          id="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                          placeholder="Enter your Email:"
                        />
                      </div>

                      <div className="flex flex-col mb-4">
                        <label htmlFor="password" className="font-medium">Create a Password</label>
                        <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                          placeholder="Create a password:"
                        />
                      </div>

                      <div className="flex flex-col mb-4">
                        <label htmlFor="fullName" className="font-medium">What should we call you?</label>

                        <input
                          type="text"
                          id="fullName"
                          value={fullName}
                          onChange={(event) => setFullName(event.target.value)}
                          className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                          placeholder="Enter a profile name."
                        />
                      </div>

                      <div className="flex flex-col mb-4">
                        <label htmlFor="fullName" className="font-medium">What is your date of birth?</label>
                        <div className="flex items-center justify-between">
                          <input
                            type="text"
                            id="year"
                            value={year}
                            onChange={(event) => setYear(event.target.value)}
                            className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent w-1/4"
                            placeholder="YYYY"
                          />

                          <div>
                            <select
                             id="month" 
                             name="month" 
                             value={month} 
                             onChange={(event) => setMonth(event.target.value)} 
                             className="bg-white border border-gray-300 rounded-md px-3 py-3 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                            >
                              <option value="" disabled selected>Month</option>
                              <option value="January">January</option>
                              <option value="February">February</option>
                              <option value="March">March</option>
                              <option value="April">April</option>
                              <option value="May">May</option>
                              <option value="June">June</option>
                              <option value="July">July</option>
                              <option value="August">August</option>
                              <option value="September">September</option>
                              <option value="October">October</option>
                              <option value="November">November</option>
                              <option value="December">December</option>
                            </select>
                          </div>

                          <input
                            type="text"
                            id="day"
                            value={day}
                            onChange={(event) => setDay(event.target.value)}
                            className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent w-1/4"
                            placeholder="DD"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col mb-4">
                        <label htmlFor="fullName" className="font-medium">What is your gender?</label>

                        <div className="flex items-center justify-between">
                          <label className="block mb-2">
                            <input
                              type="radio"
                              name="option"
                              value="Option 1"
                              checked={gender === "Option 1"}
                              onChange={(event) => setGender(event.target.value)}
                              className="mr-2"
                            />
                            Male
                          </label>

                          <label className="block mb-2">
                            <input
                              type="radio"
                              name="option"
                              value="Option 2"
                              checked={gender === "Option 2"}
                              onChange={(event) => setGender(event.target.value)}
                              className="mr-2"
                            />
                            Female
                          </label>

                          <label className="block mb-2">
                            <input
                              type="radio"
                              name="option"
                              value="Option 3"
                              checked={gender === "Option 3"}
                              onChange={(event) => setGender(event.target.value)}
                              className="mr-2"
                            />
                            Non-binary
                          </label>

                          <label className="block mb-2">
                            <input
                              type="radio"
                              name="option"
                              value="Option 4"
                              checked={gender === "Option 4"}
                              onChange={(event) => setGender(event.target.value)}
                              className="mr-2"
                            />
                            Other
                          </label>

                          <label className="block mb-2">
                            <input
                              type="radio"
                              name="option"
                              value="Option 5"
                              checked={gender === "Option 5"}
                              onChange={(event) => setGender(event.target.value)}
                              className="mr-2"
                            />
                            Prefer not to say
                          </label>
                      </div>    
                      </div>

                  </form>
                </div>

              {/* <div className="details-of-company-rep flex flex-col relative bottom-48 items-center justify-center mt-64">
                <h1 className="text-base text-custom-dark-green mb-4">Details of company representative</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="fullName" className="font-medium">Full Name:</label>
                      <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="font-medium">Email:</label>
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>  

                    <div>
                      <label htmlFor="phone" className="font-medium">Phone number:</label>
                      <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>
                </form>
                   
              </div> */}

              <div className="btn-container flex justify-center">
                <button onClick={handleSubmit} className="next-btn bg-custom-dark-green text-custom-light-green2">Next</button>
              </div>
          </div>

        </>
     );
}
 
export default Signup;