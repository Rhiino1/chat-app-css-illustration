import Footer from "@/layouts/Footer";

import {
  BsThreeDotsVertical,
  BsChevronCompactLeft,
  BsCircle,
  BsChevronRight,
} from "react-icons/bs";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import avatar from "@/assets/images/avatar.jpg";
import dog1 from "@/assets/images/dog-image-1.jpg";
import dog2 from "@/assets/images/dog-image-2.jpg";
import dog3 from "@/assets/images/dog-image-3.jpg";

import design from "@/chat-app-css-illustration-master/design/mobile-design.jpg";

function App() {
  return (
    <>
      <main className="relative flex flex-col items-center justify-between w-full h-screen bg-light-grayish-violet">
        {/* <img src={design} alt="" className="absolute top-0 left-0 opacity-50" /> */}
        <div className="absolute top-0 xl:-left-[85px] xl:h-[700px] -left-[310px] w-[505px] h-[505px] rounded-b-full bg-gradient-to-tr from-light-violet to-light-magenta"></div>
        <div className="z-10 flex flex-col items-center w-full h-full py-[64px] px-8 gap-14">
          <section className="w-[247px] h-[505px] rounded-[30px] p-[10px] px-[10px] bg-white">
            <section className="w-full h-full rounded-[20px]">
              <div className="flex flex-col items-center justify-start bg-light-grayish-violet rounded-[20px] pb-[8px]">
                <section className="flex items-center justify-between w-full h-[67px] rounded-t-[20px] rounded-b-[5px] relative pt-[19px] px-[10px] bg-gradient-to-tr from-light-violet to-light-magenta">
                  <div className="absolute top-0 w-[130px] h-[19px] -translate-x-1/2 left-1/2 bg-white rounded-b-[13px]"></div>
                  <button>
                    <BsChevronCompactLeft className="text-white" />
                  </button>
                  <div className="flex items-center pl-[2px] gap-2">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="w-6 h-6 border-[1px] border-white rounded-full"
                    />
                    <div className="flex flex-col w-40 font-rubik">
                      <h1 className="text-[11.5px] [word-spacing:-1px] text-white">
                        Samuel Green
                      </h1>
                      <p className="text-[8px] text-grayish-blue">
                        Available to Walk
                      </p>
                    </div>
                  </div>
                  <button>
                    <BsThreeDotsVertical className="text-white" />
                  </button>
                </section>
                <section
                  id="chat"
                  className="pt-[10px] pb-[16px] pl-[8px] flex flex-col gap-2"
                >
                  <div className="w-[58%] rounded-xl rounded-bl-sm font-rubik px-[6px] py-[5px] bg-grayish-blue bg-opacity-30">
                    <p className="text-[8px] text-mod-violet">
                      That sounds great. I’d be happy with that.
                    </p>
                  </div>
                  <div className="w-[58%]  rounded-xl rounded-bl-sm font-rubik px-[6px] py-[5px] bg-grayish-blue bg-opacity-30">
                    <p className="text-[8px] text-mod-violet">
                      Could you send over some pictures of your dog, please?
                    </p>
                  </div>
                  <div className="flex gap-[8px] justify-end py-[8px] px-[7px]">
                    <img src={dog1} alt="" className="w-[40px] rounded-lg" />
                    <img src={dog2} alt="" className="w-[40px] rounded-lg" />
                    <img src={dog3} alt="" className="w-[40px] rounded-lg" />
                  </div>
                  <div className="w-[59%] self-end  rounded-xl rounded-br-sm font-rubik -mt-[7px] mr-[6px] px-[7px] py-[5px] bg-white">
                    <p className="text-[8px] text-dark-violet">
                      Here are a few pictures. She’s a happy girl!
                    </p>
                  </div>
                  <div className=" self-end rounded-xl rounded-br-sm font-rubik  mr-[6px] px-[7px] py-[5px] bg-white">
                    <p className="text-[8px] text-dark-violet">
                      Can you make it?
                    </p>
                  </div>
                  <div className="w-[58%]  rounded-xl rounded-bl-sm font-rubik px-[8px] py-[5px] bg-grayish-blue bg-opacity-30 mt-[8px]">
                    <p className="text-[8px] text-mod-violet">
                      She looks so happy! The time we discussed works. How long
                      shall I take her out for?
                    </p>
                  </div>
                  <div className="w-[73%] rounded-r-xl rounded-tl-lg rounded-bl-sm flex items-center gap-2 py-[7px] px-[7px] text-[8px] font-rubik bg-gradient-to-tr from-light-violet to-light-magenta">
                    <BsCircle className="w-3 h-3 cursor-pointer text-grayish-blue">
                      <input type="checkbox" className="sr-only" />
                    </BsCircle>
                    <p className="text-grayish-blue">30 minute walk</p>
                    <h1 className="ml-[27px] text-[12px] font-bold text-white">
                      $29
                    </h1>
                  </div>
                  <div className="w-[73%] rounded-r-xl rounded-tl-lg rounded-bl-sm flex items-center gap-2 py-[7px] px-[7px] text-[8px] font-rubik bg-gradient-to-tr from-light-violet to-light-magenta">
                    <BsCircle className="w-3 h-3 cursor-pointer text-grayish-blue">
                      <input type="checkbox" className="sr-only" />
                    </BsCircle>
                    <p className="text-grayish-blue">1 hour walk</p>
                    <h1 className="ml-[44px] text-[12px] font-bold text-white">
                      $49
                    </h1>
                  </div>
                </section>
                <section
                  id="input"
                  className="w-full px-[8px] py-[3px] font-rubik"
                >
                  <div className="flex items-center justify-between w-full rounded-full px-[1px] bg-white">
                    <input
                      type="text"
                      placeholder="Type a message…"
                      className="w-[70%] rounded-full rounded-r-none bg-white bg-opacity-0 outline-none mx-[5px] pl-[10px] text-[10px] text-dark-violet"
                    />
                    <button>
                      <BiSolidChevronRightCircle className="shrink-0 text-very-dark-violet w-[29px] h-auto" />
                    </button>
                  </div>
                </section>
              </div>
            </section>
          </section>
          <section className="flex flex-col items-center justify-center w-full gap-5 text-center font-rubik">
            <h1 className="text-[40px] font-bold text-very-dark-violet -tracking-[0.8px]">
              Simple booking
            </h1>
            <p className="leading-[27.5px] text-grayish-blue">
              Stay in touch with our dog walkers through the chat interface.
              This makes it easy to discuss arrangements and make bookings. Once
              the walk has been completed you can rate your walker and book
              again all through the chat.
            </p>
          </section>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
