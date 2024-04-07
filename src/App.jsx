import {Footer,Hero,Navbar,Services,SuperQuality,SpecailOffer,Subscribe,Testmonails, PopularProducts} from "./components"

function App() {
  return (
    <>
      <main className="relative ">
        <Navbar/>
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero/>
        </section>
        <section className="padding"><PopularProducts/></section>{" "}
        <section className="padding"><SuperQuality/> </section>{" "}
        <section className="padding-x py-10"><Services/></section>{" "}
        <section className="padding"><SpecailOffer/></section>
        <section className="padding bg-pale-blue"><Testmonails/></section>
        <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
        <section className="padding-x padding-t bg-black pb-8"><Footer/></section>
      </main>
    </>
  );
}

export default App;
