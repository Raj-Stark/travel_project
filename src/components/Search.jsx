import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className=" max-w-screen-2xl w-full mx-auto grid lg:grid-cols-3 gap-6 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly ">
        <div>
          <h2>LUXARY INCLUDE VACATIONS FOR TWO PEOPLE</h2>
          <p className="mt-3 text-justify">
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous ‘topical pettings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curacao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, ‘cluding
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. if you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center space-y-4  lg:space-y-0 ">
            <button className="px-2 py-2 bg-gradient-to-r from-primary-dark to-primary-light rounded-md text-center border border-white text-white ">
              <RiCustomerService2Line size={50}></RiCustomerService2Line>
            </button>
            <div className="lg:text-left mx-3">
              <h3>Leading Services</h3>
              <p>All Inclusive Company For 20 Years IN-A-ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center space-y-4 lg:space-y-0 ">
            <button className="px-2 py-2 bg-gradient-to-r from-primary-dark to-primary-light rounded-md text-center border border-white text-white ">
              <MdOutlineTravelExplore size={50}></MdOutlineTravelExplore>
            </button>
            <div className=" lg:text-left mx-3">
              <h3>Automated Bookings</h3>
              <p>All Inclusive Company For 20 Years IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-16">
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className=" bg-gray-800 text-gray-100 py-2">BOOK NOW & SAVE</p>
        </div>

        <form className="w-full ">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2 font-semibold ">
              <option>Keywest</option>
              <option>Maldives</option>
              <option>Madagascar</option>
              <option>Singapore</option>
            </select>
          </div>

          <div className="flex flex-col my-2">
            <label htmlFor="">Check In :</label>
            <input
              type="date"
              className="border rounded-md p-2 font-semibold"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Check Out :</label>
            <input
              type="date"
              className="border rounded-md p-2 font-semibold"
            />
          </div>
          <button className=" w-full px-2 py-3 mt-3 bg-gradient-to-r from-primary-dark to-primary-light rounded-md text-center border border-white text-white ">
            Rates & Avalabilities
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
