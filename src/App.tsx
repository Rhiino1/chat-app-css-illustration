import Footer from "@/layouts/Footer";

import design from "@/chat-app-css-illustration-master/design/mobile-design.jpg";

function App() {
  return (
    <>
      <main className="relative flex flex-col items-center justify-between w-full h-screen bg-light-grayish-violet">
        <img src={design} alt="" className="absolute top-0 left-0 opacity-50" />
        {/* <div className="absolute top-0 xl:-left-[85px] xl:h-[700px] -left-[310px] w-[505px] h-[505px] rounded-b-full bg-gradient-to-tr from-light-violet to-light-magenta"></div> */}
        <div className="z-10 flex flex-col items-center w-full h-full py-[64px] px-8 gap-14">
          <section className="w-[247px] h-[505px] rounded-[30px] p-[10px] px-[10px]">
            <section className="w-full h-full rounded-[20px]">
              <div className="flex flex-col items-center justify-start">
                <section className="flex items-center w-full h-[67px] rounded-t-[20px] rounded-b-[5px] relative">
                  <div className="absolute top-0 w-[130px] h-[19px] -translate-x-1/2 left-1/2 bg-white rounded-b-[13px]"></div>
                  <img src="" alt="" />
                  <div>
                    <img src="" alt="" />
                    <div>
                      <h1>Samuel Green</h1>
                      <p>Available to Walk</p>
                    </div>
                  </div>
                  <img src="" alt="" />
                </section>
                <section id="chat">
                  <div>
                    <p>That sounds great. I’d be happy with that.</p>
                  </div>
                  <div>
                    <p>
                      Could you send over some pictures of your dog, please?
                    </p>
                  </div>
                  <div>
                    <div>
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                    </div>
                    <p>Here are a few pictures. She’s a happy girl!</p>
                  </div>
                  <div>
                    <p>Can you make it?</p>
                  </div>
                  <div>
                    <p>
                      She looks so happy! The time we discussed works. How long
                      shall I take her out for?
                    </p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>30 minute walk $29</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>1 hour walk $49</p>
                  </div>
                </section>
                <section id="input">
                  <div>
                    <input type="text" placeholder="Type a message…" />
                    <img src="" alt="" />
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
